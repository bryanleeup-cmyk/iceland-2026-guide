#!/usr/bin/env node
// Refresh a dated, offline-readable forecast snapshot. Run before publishing.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

const destination = path.resolve(__dirname, '..', 'weather-snapshot.js');
const tripStart = '2026-09-25';
const tripEnd = '2026-10-12';
const outlookUrl = 'https://services.swpc.noaa.gov/text/27-day-outlook.txt';
const kpUrl = 'https://services.swpc.noaa.gov/products/noaa-planetary-k-index-forecast.json';

// Landmark coordinates, not the nearest large city's forecast. The API selects
// a model grid cell around each requested point and applies its terrain model.
const places = [
  ['beijing', '北京', 39.9042, 116.4074, 'Asia/Shanghai'],
  ['shanghai', '上海', 31.2304, 121.4737, 'Asia/Shanghai'],
  ['shenzhen', '深圳', 22.5431, 114.0579, 'Asia/Shanghai'],
  ['guangzhou', '广州', 23.1291, 113.2644, 'Asia/Shanghai'],
  ['lisbon', '里斯本', 38.7223, -9.1393, 'Europe/Lisbon'],
  ['cabo', '罗卡角', 38.7804, -9.4989, 'Europe/Lisbon'],
  ['sintra', '辛特拉', 38.7972, -9.3904, 'Europe/Lisbon'],
  ['porto', '波尔图', 41.1579, -8.6291, 'Europe/Lisbon'],
  ['paris', '巴黎', 48.8566, 2.3522, 'Europe/Paris'],
  ['brussels', '布鲁塞尔', 50.8503, 4.3517, 'Europe/Brussels'],
  ['amsterdam', '阿姆斯特丹', 52.3676, 4.9041, 'Europe/Amsterdam'],
  ['copenhagen', '哥本哈根', 55.6761, 12.5683, 'Europe/Copenhagen'],
  ['wroclaw', '弗罗茨瓦夫', 51.1079, 17.0385, 'Europe/Warsaw'],
  ['reykjavik', '雷克雅未克', 64.1466, -21.9426, 'Atlantic/Reykjavik'],
  ['keflavik', '凯夫拉维克机场区域', 63.985, -22.6056, 'Atlantic/Reykjavik'],
  ['thingvellir', '辛格维利尔 / Silfra', 64.2551, -21.1239, 'Atlantic/Reykjavik'],
  ['gullfoss', '黄金瀑布', 64.3271, -20.1199, 'Atlantic/Reykjavik'],
  ['kerlingarfjoll', 'Kerlingarfjöll 高地', 64.6465, -19.2777, 'Atlantic/Reykjavik'],
  ['landmannalaugar', '兰德曼那劳卡高地', 63.9908, -19.0618, 'Atlantic/Reykjavik'],
  ['grundarfjordur', '斯奈山 · Grundarfjörður', 64.9245, -23.2597, 'Atlantic/Reykjavik'],
  ['arnarstapi', '斯奈山 · Arnarstapi', 64.7667, -23.6275, 'Atlantic/Reykjavik'],
  ['skogafoss', '斯科加瀑布', 63.5321, -19.5114, 'Atlantic/Reykjavik'],
  ['vik', '维克 / 南岸区域参考', 63.4186, -19.006, 'Atlantic/Reykjavik'],
  ['jokulsarlon', '杰古沙龙冰河湖 / 钻石沙滩', 64.0784, -16.2306, 'Atlantic/Reykjavik'],
  ['skyLagoon', 'Sky Lagoon / Kópavogur', 64.1149, -21.9139, 'Atlantic/Reykjavik'],
];

function fetchText(url) {
  return execFileSync('/usr/bin/curl', [
    '--fail', '--silent', '--show-error', '--location', '--proto', '=https',
    '--proto-redir', '=https', '--connect-timeout', '15', '--max-time', '90', url,
  ], { encoding: 'utf8', maxBuffer: 12 * 1024 * 1024 });
}

function localDate(time, timezone) {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: timezone, year: 'numeric', month: '2-digit', day: '2-digit',
  }).format(time);
}

function nullableNumber(value, min, max, label) {
  assert(value === null || (typeof value === 'number' && Number.isFinite(value) && value >= min && value <= max), `Invalid ${label}`);
  return value;
}

function parseWeather(result, place, sourceUrl, requestedAt) {
  const [id, name, latitude, longitude, timezone] = place;
  assert.equal(result.timezone, timezone, `${id}: wrong local timezone`);
  assert(Math.abs(result.latitude - latitude) < 0.25 && Math.abs(result.longitude - longitude) < 0.25, `${id}: wrong forecast coordinates`);
  assert.deepEqual(result.daily_units, {
    time: 'iso8601', weather_code: 'wmo code', temperature_2m_max: '°C',
    temperature_2m_min: '°C', precipitation_probability_max: '%',
  }, `${id}: unsupported daily units`);
  assert.deepEqual(result.hourly_units, { time: 'iso8601', cloud_cover: '%' }, `${id}: unsupported cloud units`);
  const daily = result.daily;
  assert.equal(daily.time.length, 16, `${id}: expected a 16-day forecast`);
  assert.equal(daily.time[0], localDate(requestedAt, timezone), `${id}: forecast does not start today`);
  assert(daily.time.some((date) => date >= tripStart && date <= tripEnd), `${id}: forecast does not cover this 2026 trip`);
  for (const key of ['weather_code', 'temperature_2m_max', 'temperature_2m_min', 'precipitation_probability_max']) {
    assert.equal(daily[key].length, daily.time.length, `${id}: incomplete ${key}`);
  }
  const mappedDaily = {};
  const weatherCodes = new Set([0, 1, 2, 3, 45, 48, 51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 71, 73, 75, 77, 80, 81, 82, 85, 86, 95, 96, 99]);
  daily.time.forEach((date, i) => {
    assert(/^2026-\d{2}-\d{2}$/.test(date), `${id}: unexpected forecast year`);
    if (i) assert.equal(Date.parse(`${date}T00:00:00Z`) - Date.parse(`${daily.time[i - 1]}T00:00:00Z`), 86400000, `${id}: nonconsecutive dates`);
    const code = daily.weather_code[i];
    assert(code === null || weatherCodes.has(code), `${id}: unsupported WMO code`);
    const max = nullableNumber(daily.temperature_2m_max[i], -100, 65, `${id} maximum temperature`);
    const min = nullableNumber(daily.temperature_2m_min[i], -100, 65, `${id} minimum temperature`);
    assert(max === null || min === null || min <= max, `${id}: inverted temperature range`);
    mappedDaily[date] = { code, max, min, rain: nullableNumber(daily.precipitation_probability_max[i], 0, 100, `${id} rain probability`) };
  });
  const hourly = result.hourly;
  assert.equal(hourly.cloud_cover.length, hourly.time.length, `${id}: incomplete hourly clouds`);
  assert.equal(hourly.time.length, 16 * 24, `${id}: expected hourly values for all 16 days`);
  const hourlyCloud = {};
  hourly.time.forEach((time, i) => {
    assert(/^2026-\d{2}-\d{2}T\d{2}:00$/.test(time) && mappedDaily[time.slice(0, 10)], `${id}: invalid local cloud timestamp`);
    if (i) assert.equal(Date.parse(`${time}Z`) - Date.parse(`${hourly.time[i - 1]}Z`), 3600000, `${id}: nonconsecutive cloud hours`);
    hourlyCloud[time] = nullableNumber(hourly.cloud_cover[i], 0, 100, `${id} cloud cover`);
  });
  // Only these confirmed overnight areas use hourly cloud data on the site.
  // Other destinations retain daily forecasts after the same response checks.
  return { name, latitude, longitude, timezone, sourceUrl, daily: mappedDaily, hourlyCloud: ['reykjavik', 'keflavik'].includes(id) ? hourlyCloud : {} };
}

function parseOutlook(text) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const issued = text.match(/^:Issued:\s+(\d{4})\s+([A-Z][a-z]{2})\s+(\d{2})\s+(\d{2})(\d{2})\s+UTC\s*$/m);
  assert(issued && months.includes(issued[2]), 'Missing NOAA outlook issue header');
  const issuedAt = `${issued[1]}-${String(months.indexOf(issued[2]) + 1).padStart(2, '0')}-${issued[3]}T${issued[4]}:${issued[5]}:00Z`;
  assert(!Number.isNaN(Date.parse(issuedAt)), 'Invalid NOAA issue timestamp');
  const days = {};
  for (const row of text.matchAll(/^(\d{4})\s+([A-Z][a-z]{2})\s+(\d{2})\s+\d+\s+\d+\s+(\d(?:\.\d+)?)\s*$/gm)) {
    assert.equal(row[1], '2026', 'Unexpected NOAA outlook year');
    assert(months.includes(row[2]), 'Invalid NOAA outlook month');
    const date = `${row[1]}-${String(months.indexOf(row[2]) + 1).padStart(2, '0')}-${row[3]}`;
    assert(!Object.hasOwn(days, date), 'Duplicate NOAA outlook date');
    days[date] = nullableNumber(Number(row[4]), 0, 9, 'NOAA outlook Kp');
  }
  const dates = Object.keys(days);
  assert.equal(dates.length, 27, 'Expected 27 NOAA outlook dates');
  assert(dates.some((date) => date >= tripStart && date <= tripEnd), 'NOAA outlook does not cover this 2026 trip');
  dates.forEach((date, i) => {
    if (i) assert.equal(Date.parse(date) - Date.parse(dates[i - 1]), 86400000, 'Nonconsecutive NOAA outlook dates');
  });
  return { issuedAt, sourceUrl: outlookUrl, days };
}

function parseShortRange(text) {
  const response = JSON.parse(text);
  assert(Array.isArray(response) && response.length > 1, 'Empty NOAA 3-hour Kp response');
  // NOAA may use objects or a header row followed by parallel value arrays.
  const rows = Array.isArray(response[0])
    ? response.slice(1).map((values) => Object.fromEntries(response[0].map((key, i) => [key, values[i]])))
    : response;
  const values = rows.map((row, i) => {
    assert(/^2026-\d{2}-\d{2}[T ]\d{2}:\d{2}:\d{2}Z?$/.test(row.time_tag), 'Invalid NOAA UTC timestamp');
    const timestamp = Date.parse(row.time_tag.replace(' ', 'T').replace(/Z?$/, 'Z'));
    assert(Number.isFinite(timestamp), 'Invalid NOAA UTC date');
    if (i) assert(timestamp > Date.parse(rows[i - 1].time_tag.replace(' ', 'T').replace(/Z?$/, 'Z')), 'Unordered NOAA Kp values');
    assert(['observed', 'estimated', 'predicted'].includes(row.observed), 'Unknown NOAA Kp status');
    assert(row.noaa_scale === null || /^G[1-5]$/.test(row.noaa_scale), 'Unknown NOAA storm scale');
    const kp = row.kp === null ? null : typeof row.kp === 'number' ? row.kp : Number(row.kp);
    assert(row.kp !== '' && row.kp !== undefined, 'Missing NOAA Kp value');
    return { time_tag: row.time_tag, kp: nullableNumber(kp, 0, 9, 'NOAA 3-hour Kp'), observed: row.observed, noaa_scale: row.noaa_scale };
  });
  assert(values.some((row) => row.observed === 'predicted'), 'NOAA response lacks forecast values');
  return { sourceUrl: kpUrl, values };
}

function main() {
  const snapshot = { retrievedAt: null, places: {}, aurora: null };
  // Three geographic batches avoid one request per place while keeping responses small.
  for (const batch of [places.slice(0, 4), places.slice(4, 13), places.slice(13)]) {
    const url = new URL('https://api.open-meteo.com/v1/forecast');
    url.search = new URLSearchParams({
      latitude: batch.map((place) => place[2]).join(','),
      longitude: batch.map((place) => place[3]).join(','),
      timezone: 'auto', forecast_days: '16', temperature_unit: 'celsius', timeformat: 'iso8601',
      daily: 'weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max',
      hourly: 'cloud_cover',
    }).toString();
    const requestedAt = new Date();
    const results = JSON.parse(fetchText(url.href));
    assert(Array.isArray(results) && results.length === batch.length, 'Missing Open-Meteo locations');
    results.forEach((result, i) => { snapshot.places[batch[i][0]] = parseWeather(result, batch[i], url.href, requestedAt); });
  }
  snapshot.aurora = { longRange: parseOutlook(fetchText(outlookUrl)), shortRange: parseShortRange(fetchText(kpUrl)) };
  snapshot.retrievedAt = new Date().toISOString();
  const output = `// Generated by scripts/update-weather.cjs. Dated forecasts, not live observations.\nconst travelWeatherSnapshot = ${JSON.stringify(snapshot, null, 2)};\n`;
  const temporary = `${destination}.tmp-${process.pid}`;
  try {
    fs.writeFileSync(temporary, output);
    fs.renameSync(temporary, destination);
  } finally {
    if (fs.existsSync(temporary)) fs.unlinkSync(temporary);
  }
  const dates = Object.keys(snapshot.places.reykjavik.daily);
  console.log(`Saved ${places.length} places: ${dates[0]} through ${dates.at(-1)}; NOAA outlook issued ${snapshot.aurora.longRange.issuedAt}.`);
}

try {
  main();
} catch (error) {
  console.error(`Weather refresh failed; existing snapshot was preserved. ${error.message}`);
  process.exitCode = 1;
}
