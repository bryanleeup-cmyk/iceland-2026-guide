// Refresh only when requested. Keep independent weather and aurora fallbacks offline.
const travelWeatherLive = (() => {
  const cacheKey = "iceland-weather-v1";
  const version = 1;
  const dayMs = 86400000;
  const outlookUrl = "https://services.swpc.noaa.gov/text/27-day-outlook.txt";
  const kpUrl = "https://services.swpc.noaa.gov/products/noaa-planetary-k-index-forecast.json";
  const locations = [
    ["beijing", "北京", 39.9042, 116.4074, "Asia/Shanghai"],
    ["shanghai", "上海", 31.2304, 121.4737, "Asia/Shanghai"],
    ["shenzhen", "深圳", 22.5431, 114.0579, "Asia/Shanghai"],
    ["guangzhou", "广州", 23.1291, 113.2644, "Asia/Shanghai"],
    ["lisbon", "里斯本", 38.7223, -9.1393, "Europe/Lisbon"],
    ["cabo", "罗卡角", 38.7804, -9.4989, "Europe/Lisbon"],
    ["sintra", "辛特拉", 38.7972, -9.3904, "Europe/Lisbon"],
    ["porto", "波尔图", 41.1579, -8.6291, "Europe/Lisbon"],
    ["paris", "巴黎", 48.8566, 2.3522, "Europe/Paris"],
    ["brussels", "布鲁塞尔", 50.8503, 4.3517, "Europe/Brussels"],
    ["amsterdam", "阿姆斯特丹", 52.3676, 4.9041, "Europe/Amsterdam"],
    ["copenhagen", "哥本哈根", 55.6761, 12.5683, "Europe/Copenhagen"],
    ["wroclaw", "弗罗茨瓦夫", 51.1079, 17.0385, "Europe/Warsaw"],
    ["reykjavik", "雷克雅未克", 64.1466, -21.9426, "Atlantic/Reykjavik"],
    ["keflavik", "凯夫拉维克机场区域", 63.985, -22.6056, "Atlantic/Reykjavik"],
    ["thingvellir", "辛格维利尔 / Silfra", 64.2551, -21.1239, "Atlantic/Reykjavik"],
    ["gullfoss", "黄金瀑布", 64.3271, -20.1199, "Atlantic/Reykjavik"],
    ["kerlingarfjoll", "Kerlingarfjöll 高地", 64.6465, -19.2777, "Atlantic/Reykjavik"],
    ["landmannalaugar", "兰德曼那劳卡高地", 63.9908, -19.0618, "Atlantic/Reykjavik"],
    ["grundarfjordur", "斯奈山 · Grundarfjörður", 64.9245, -23.2597, "Atlantic/Reykjavik"],
    ["arnarstapi", "斯奈山 · Arnarstapi", 64.7667, -23.6275, "Atlantic/Reykjavik"],
    ["skogafoss", "斯科加瀑布", 63.5321, -19.5114, "Atlantic/Reykjavik"],
    ["vik", "维克 / 南岸区域参考", 63.4186, -19.006, "Atlantic/Reykjavik"],
    ["jokulsarlon", "杰古沙龙冰河湖 / 钻石沙滩", 64.0784, -16.2306, "Atlantic/Reykjavik"],
    ["skyLagoon", "Sky Lagoon / Kópavogur", 64.1149, -21.9139, "Atlantic/Reykjavik"],
  ];
  const batches = [locations.slice(0, 4), locations.slice(4, 13), locations.slice(13)];
  const urls = batches.map((batch) => "https://api.open-meteo.com/v1/forecast?" + new URLSearchParams({
    latitude: batch.map((place) => place[2]).join(","), longitude: batch.map((place) => place[3]).join(","),
    timezone: "auto", forecast_days: "16", temperature_unit: "celsius", timeformat: "iso8601",
    daily: "weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max", hourly: "cloud_cover",
  }));
  const allowedUrls = new Set([...urls, outlookUrl, kpUrl]);
  const wmoCodes = new Set([0, 1, 2, 3, 45, 48, 51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 71, 73, 75, 77, 80, 81, 82, 85, 86, 95, 96, 99]);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let current;
  let loaded = false;
  let pending = null;

  function requireValue(condition) {
    if (!condition) throw new Error("Invalid weather response");
  }

  function keys(value, expected) {
    requireValue(value && typeof value === "object" && !Array.isArray(value));
    requireValue(Object.keys(value).length === expected.length && expected.every((key) => Object.prototype.hasOwnProperty.call(value, key)));
  }

  function number(value, min, max) {
    requireValue(value === null || (typeof value === "number" && Number.isFinite(value) && value >= min && value <= max));
    return value;
  }

  function dateMs(value) {
    requireValue(typeof value === "string" && /^20\d{2}-\d{2}-\d{2}$/.test(value));
    const result = Date.parse(value + "T00:00:00Z");
    requireValue(Number.isFinite(result) && new Date(result).toISOString().slice(0, 10) === value);
    return result;
  }

  function stamp(value) {
    requireValue(typeof value === "string" && /^20\d{2}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/.test(value));
    const result = Date.parse(value);
    requireValue(Number.isFinite(result) && result <= Date.now() + 300000);
    requireValue(new Date(result).toISOString().replace(".000Z", "Z") === value.replace(".000Z", "Z"));
    return result;
  }

  function localDate(time, timezone) {
    const parts = new Intl.DateTimeFormat("en", { timeZone: timezone, year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(new Date(time));
    const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
    return `${values.year}-${values.month}-${values.day}`;
  }

  function dailyValues(value) {
    keys(value, ["code", "max", "min", "rain"]);
    requireValue(value.code === null || wmoCodes.has(value.code));
    const max = number(value.max, -100, 65), min = number(value.min, -100, 65);
    requireValue(max === null || min === null || min <= max);
    return { code: value.code, max, min, rain: number(value.rain, 0, 100) };
  }

  function placeValues(value, location, sourceUrl, retrievedAt) {
    const [, name, latitude, longitude, timezone] = location;
    requireValue(value && value.timezone === timezone && value.latitude === latitude && value.longitude === longitude);
    const dates = Object.keys(value.daily || {}).sort();
    requireValue(dates.length === 16);
    const start = dateMs(dates[0]), today = dateMs(localDate(retrievedAt, timezone));
    requireValue(start === today || start === today - dayMs); // A refresh may finish just after midnight.
    const daily = {};
    dates.forEach((date, index) => {
      requireValue(dateMs(date) === start + index * dayMs);
      daily[date] = dailyValues(value.daily[date]);
    });
    const hourlyCloud = {};
    const hours = Object.keys(value.hourlyCloud || {}).sort();
    const needsCloud = ["reykjavik", "keflavik"].includes(location[0]);
    requireValue(hours.length === (needsCloud ? 384 : 0));
    hours.forEach((hour, index) => {
      requireValue(hour === new Date(start + index * 3600000).toISOString().slice(0, 16));
      hourlyCloud[hour] = number(value.hourlyCloud[hour], 0, 100);
    });
    return { name, latitude, longitude, timezone, sourceUrl, daily, hourlyCloud };
  }

  function validatePlaces(places, retrievedAt) {
    keys(places, locations.map((place) => place[0]));
    const result = {};
    batches.forEach((batch, index) => batch.forEach((place) => {
      result[place[0]] = placeValues(places[place[0]], place, urls[index], retrievedAt);
    }));
    return result;
  }

  function validateAurora(aurora, retrievedAt) {
    keys(aurora, ["longRange", "shortRange"]);
    const issuedAt = aurora.longRange.issuedAt;
    requireValue(stamp(issuedAt) <= stamp(retrievedAt) + 300000 && stamp(issuedAt) >= stamp(retrievedAt) - 14 * dayMs);
    const dates = Object.keys(aurora.longRange.days || {}).sort();
    requireValue(dates.length === 27 && dates[0] === issuedAt.slice(0, 10));
    const days = {};
    dates.forEach((date, index) => {
      requireValue(dateMs(date) === dateMs(dates[0]) + index * dayMs);
      days[date] = number(aurora.longRange.days[date], 0, 9);
    });
    const rows = aurora.shortRange.values;
    requireValue(Array.isArray(rows) && rows.length >= 2 && rows.length <= 200);
    let previous = -Infinity;
    const values = rows.map((row) => {
      keys(row, ["time_tag", "kp", "observed", "noaa_scale"]);
      requireValue(typeof row.time_tag === "string" && /^20\d{2}-\d{2}-\d{2}[T ]\d{2}:00:00Z?$/.test(row.time_tag));
      const normalized = row.time_tag.replace(" ", "T").replace(/Z?$/, "Z");
      const time = Date.parse(normalized);
      requireValue(Number.isFinite(time) && new Date(time).toISOString().replace(".000Z", "Z") === normalized);
      requireValue(time % 10800000 === 0 && time > previous && time >= stamp(retrievedAt) - 14 * dayMs && time <= stamp(retrievedAt) + 5 * dayMs);
      previous = time;
      requireValue(["observed", "estimated", "predicted"].includes(row.observed));
      requireValue(row.noaa_scale === null || /^G[1-5]$/.test(row.noaa_scale));
      return { time_tag: normalized.slice(0, -1), kp: number(row.kp, 0, 9), observed: row.observed, noaa_scale: row.noaa_scale };
    });
    requireValue(values.some((row) => row.observed === "predicted" && Date.parse(row.time_tag + "Z") >= stamp(retrievedAt) - dayMs));
    return { longRange: { issuedAt, sourceUrl: outlookUrl, days }, shortRange: { sourceUrl: kpUrl, values } };
  }

  function readCache(bundle) {
    try {
      const raw = localStorage.getItem(cacheKey);
      requireValue(raw && raw.length < 500000);
      const cache = JSON.parse(raw);
      keys(cache, ["version", "snapshot"]);
      requireValue(cache.version === version);
      const saved = cache.snapshot;
      keys(saved, ["retrievedAt", "weatherRetrievedAt", "auroraRetrievedAt", "places", "aurora"]);
      const weatherTime = stamp(saved.weatherRetrievedAt), auroraTime = stamp(saved.auroraRetrievedAt);
      requireValue(stamp(saved.retrievedAt) === Math.max(weatherTime, auroraTime));
      const places = validatePlaces(saved.places, saved.weatherRetrievedAt);
      const aurora = validateAurora(saved.aurora, saved.auroraRetrievedAt);
      return {
        ...bundle,
        ...(weatherTime > Date.parse(bundle.weatherRetrievedAt) ? { places, weatherRetrievedAt: saved.weatherRetrievedAt } : {}),
        ...(auroraTime > Date.parse(bundle.auroraRetrievedAt) && Date.parse(aurora.longRange.issuedAt) >= Date.parse(bundle.aurora.longRange.issuedAt)
          ? { aurora, auroraRetrievedAt: saved.auroraRetrievedAt } : {}),
      };
    } catch {
      return bundle;
    }
  }

  function get() {
    if (!loaded) {
      loaded = true;
      const bundle = typeof travelWeatherSnapshot === "undefined" ? null : travelWeatherSnapshot;
      current = bundle ? readCache({ ...bundle, weatherRetrievedAt: bundle.weatherRetrievedAt || bundle.retrievedAt, auroraRetrievedAt: bundle.auroraRetrievedAt || bundle.retrievedAt }) : null;
      if (current) current.retrievedAt = new Date(Math.max(Date.parse(current.weatherRetrievedAt), Date.parse(current.auroraRetrievedAt))).toISOString();
    }
    return current;
  }

  async function request(url) {
    requireValue(allowedUrls.has(url));
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch(url, { signal: controller.signal, cache: "no-store", credentials: "omit", redirect: "error" });
      requireValue(response.ok && (!response.url || response.url === url));
      const text = await response.text();
      requireValue(text.length < 2000000);
      return text;
    } finally {
      clearTimeout(timeout);
    }
  }

  async function fetchWeather() {
    const requestedAt = new Date().toISOString();
    const responses = await Promise.all(urls.map((url) => request(url).then(JSON.parse)));
    const places = {};
    responses.forEach((results, batchIndex) => {
      const batch = batches[batchIndex];
      requireValue(Array.isArray(results) && results.length === batch.length);
      results.forEach((row, index) => {
        const location = batch[index];
        requireValue(row.timezone === location[4] && Number.isFinite(row.latitude) && Number.isFinite(row.longitude));
        requireValue(Math.abs(row.latitude - location[2]) < 0.25 && Math.abs(row.longitude - location[3]) < 0.25);
        requireValue(row.daily_units?.time === "iso8601" && row.daily_units.weather_code === "wmo code" && row.daily_units.temperature_2m_max === "°C" && row.daily_units.temperature_2m_min === "°C" && row.daily_units.precipitation_probability_max === "%");
        requireValue(row.hourly_units?.time === "iso8601" && row.hourly_units.cloud_cover === "%");
        requireValue(Array.isArray(row.daily?.time) && row.daily.time.length === 16 && row.daily.time[0] === localDate(requestedAt, location[4]));
        for (const key of ["weather_code", "temperature_2m_max", "temperature_2m_min", "precipitation_probability_max"]) requireValue(Array.isArray(row.daily[key]) && row.daily[key].length === 16);
        const daily = Object.fromEntries(row.daily.time.map((date, i) => [date, { code: row.daily.weather_code[i], max: row.daily.temperature_2m_max[i], min: row.daily.temperature_2m_min[i], rain: row.daily.precipitation_probability_max[i] }]));
        requireValue(Array.isArray(row.hourly?.time) && row.hourly.time.length === 384 && Array.isArray(row.hourly.cloud_cover) && row.hourly.cloud_cover.length === 384);
        const start = dateMs(row.daily.time[0]);
        const hourlyCloud = {};
        row.hourly.time.forEach((time, i) => {
          requireValue(time === new Date(start + i * 3600000).toISOString().slice(0, 16));
          const value = number(row.hourly.cloud_cover[i], 0, 100);
          if (["reykjavik", "keflavik"].includes(location[0])) hourlyCloud[time] = value;
        });
        places[location[0]] = placeValues({ latitude: location[2], longitude: location[3], timezone: row.timezone, daily, hourlyCloud }, location, urls[batchIndex], requestedAt);
      });
    });
    return { places, weatherRetrievedAt: new Date().toISOString() };
  }

  async function fetchAurora() {
    const [outlook, shortText] = await Promise.all([request(outlookUrl), request(kpUrl)]);
    const match = outlook.match(/^:Issued:\s+(20\d{2})\s+([A-Z][a-z]{2})\s+(\d{2})\s+(\d{2})(\d{2})\s+UTC\s*$/m);
    requireValue(match && months.includes(match[2]));
    const issuedAt = `${match[1]}-${String(months.indexOf(match[2]) + 1).padStart(2, "0")}-${match[3]}T${match[4]}:${match[5]}:00Z`;
    const days = {};
    for (const row of outlook.matchAll(/^(20\d{2})\s+([A-Z][a-z]{2})\s+(\d{2})\s+\d+\s+\d+\s+(\d(?:\.\d+)?)\s*$/gm)) {
      requireValue(months.includes(row[2]));
      const date = `${row[1]}-${String(months.indexOf(row[2]) + 1).padStart(2, "0")}-${row[3]}`;
      requireValue(!Object.prototype.hasOwnProperty.call(days, date));
      days[date] = Number(row[4]);
    }
    const response = JSON.parse(shortText);
    requireValue(Array.isArray(response) && response.length > 1);
    const rows = Array.isArray(response[0]) ? response.slice(1).map((row) => {
      requireValue(row.length === response[0].length);
      return Object.fromEntries(response[0].map((key, i) => [key, row[i]]));
    }) : response;
    const values = rows.map((row) => {
      const raw = row.kp;
      requireValue(raw === null || typeof raw === "number" || (typeof raw === "string" && /^\d+(\.\d+)?$/.test(raw)));
      return { time_tag: row.time_tag, kp: raw === null ? null : Number(raw), observed: row.observed, noaa_scale: row.noaa_scale };
    });
    const auroraRetrievedAt = new Date().toISOString();
    const aurora = validateAurora({ longRange: { issuedAt, days }, shortRange: { values } }, auroraRetrievedAt);
    requireValue(!get()?.aurora || Date.parse(issuedAt) >= Date.parse(get().aurora.longRange.issuedAt));
    return { aurora, auroraRetrievedAt };
  }

  function refresh() {
    if (pending) return pending;
    get();
    pending = (async () => {
      const results = await Promise.allSettled([fetchWeather(), fetchAurora()]);
      const updated = [], failed = [];
      let next = current;
      results.forEach((result, index) => {
        const provider = index === 0 ? "weather" : "aurora";
        if (result.status === "fulfilled") {
          next = { ...next, ...result.value };
          updated.push(provider);
        } else failed.push(provider);
      });
      let persisted = false;
      if (updated.length && next.places && next.aurora) {
        current = next;
        current.retrievedAt = new Date(Math.max(Date.parse(current.weatherRetrievedAt), Date.parse(current.auroraRetrievedAt))).toISOString();
        try {
          localStorage.setItem(cacheKey, JSON.stringify({ version, snapshot: current }));
          persisted = true;
        } catch { /* The validated in-memory result remains available. */ }
      }
      return { snapshot: current, updated, failed, persisted };
    })().finally(() => { pending = null; });
    return pending;
  }

  return { get, refresh };
})();

function getTravelWeatherSnapshot() {
  return travelWeatherLive.get();
}

function refreshTravelWeather() {
  return travelWeatherLive.refresh();
}
