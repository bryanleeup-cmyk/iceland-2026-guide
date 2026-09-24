// Forecast locations follow the final booked itinerary, not the photo captions.
const weatherRoutes = {
  coast: ["cabo", "sintra"],
  golden: ["thingvellir", "gullfoss"],
  peninsula: ["grundarfjordur", "arnarstapi"],
  south: ["skogafoss", "vik"],
  glacier: ["jokulsarlon", "reykjavik"],
};
const dailyWeatherPlaces = {
  jianhuang: {
    "09/25": ["beijing", "lisbon"], "09/26": weatherRoutes.coast, "09/27": ["porto"], "09/28": ["paris"],
    "09/29": ["thingvellir", "reykjavik"], "09/30": ["kerlingarfjoll"], "10/01": weatherRoutes.peninsula,
    "10/02": ["landmannalaugar"], "10/03": weatherRoutes.golden, "10/04": weatherRoutes.south,
    "10/05": weatherRoutes.glacier, "10/06": ["skyLagoon", "keflavik"],
    "10/07": ["lisbon", "copenhagen"], "10/08": ["copenhagen"], "10/09": ["beijing"],
  },
  tongyan: {
    "10/02": ["paris"], "10/03": ["brussels", "reykjavik"], "10/04": weatherRoutes.south,
    "10/05": weatherRoutes.glacier, "10/06": ["landmannalaugar"], "10/07": weatherRoutes.peninsula,
    "10/08": weatherRoutes.golden, "10/09": ["reykjavik", "keflavik"],
    "10/10": ["keflavik", "brussels"], "10/11": ["brussels"], "10/12": ["shenzhen"],
  },
  yueyue: {
    "09/30": ["shenzhen", "shanghai"], "10/01": ["shanghai", "copenhagen"], "10/02": ["copenhagen"],
    "10/03": ["copenhagen", "keflavik"], "10/04": weatherRoutes.south, "10/05": weatherRoutes.glacier,
    "10/06": ["landmannalaugar"], "10/07": weatherRoutes.peninsula, "10/08": weatherRoutes.golden,
    "10/09": ["reykjavik"], "10/10": ["reykjavik", "keflavik"],
    "10/11": ["wroclaw", "amsterdam"], "10/12": ["guangzhou"],
  },
  haigang: {
    "09/30": ["beijing", "shanghai"], "10/01": ["shanghai", "amsterdam"], "10/02": ["brussels", "copenhagen"],
    "10/03": weatherRoutes.golden, "10/04": weatherRoutes.south, "10/05": weatherRoutes.glacier,
    "10/06": ["landmannalaugar"], "10/07": weatherRoutes.peninsula, "10/08": ["reykjavik", "keflavik"],
    "10/09": ["amsterdam"], "10/10": ["amsterdam", "brussels"], "10/11": ["brussels"], "10/12": ["shanghai", "beijing"],
  },
  niangniang: {
    "09/25": ["amsterdam", "lisbon"], "09/26": weatherRoutes.coast, "09/27": ["porto"],
    "09/28": ["amsterdam"], "10/09": ["amsterdam"], "10/10": ["amsterdam"],
  },
};

function weatherEscape(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

function weatherLink(url, label) {
  return `<a href="${weatherEscape(url)}" target="_blank" rel="noopener noreferrer">${weatherEscape(label)}</a>`;
}

function weatherIsoDate(date) {
  return `2026-${date.replace("/", "-")}`;
}

function nextWeatherDate(iso) {
  return new Date(Date.parse(`${iso}T00:00:00Z`) + 86400000).toISOString().slice(0, 10);
}

function weatherCardDates(personId, date) {
  const [start, end = start] = date.split("-");
  const dates = [];
  for (let day = weatherIsoDate(start); day <= weatherIsoDate(end); day = nextWeatherDate(day)) dates.push(day);
  // The return flight arrives on the next calendar date within this single card.
  if (personId === "tongyan" && date === "10/11") dates.push("2026-10-12");
  return dates;
}

function weatherPlaceIds(personId, iso) {
  const date = iso.slice(5).replace("-", "/");
  if (personId === "niangniang" && iso >= "2026-09-28" && iso <= "2026-10-08") return ["amsterdam"];
  return dailyWeatherPlaces[personId]?.[date] || [];
}

function weatherDescription(code) {
  const names = {
    0: "晴", 1: "大部晴朗", 2: "局部多云", 3: "阴天", 45: "雾", 48: "雾凇",
    51: "小毛毛雨", 53: "中等毛毛雨", 55: "较强毛毛雨", 56: "冻毛毛雨", 57: "较强冻毛毛雨",
    61: "小雨", 63: "中雨", 65: "大雨", 66: "冻雨", 67: "较强冻雨",
    71: "小雪", 73: "中雪", 75: "大雪", 77: "米雪", 80: "小阵雨", 81: "中等阵雨", 82: "强阵雨",
    85: "小阵雪", 86: "强阵雪", 95: "雷雨", 96: "雷雨伴冰雹", 99: "强雷雨伴冰雹",
  };
  return names[code] || "晴雨暂未发布";
}

function getAuroraNight(personId, iso) {
  const ranges = {
    jianhuang: ["2026-09-29", "2026-10-05"], tongyan: ["2026-10-03", "2026-10-09"],
    yueyue: ["2026-10-03", "2026-10-09"], haigang: ["2026-10-03", "2026-10-07"],
  };
  const range = ranges[personId];
  if (!range || iso < range[0] || iso > range[1]) return null;
  if (iso === "2026-10-04") return { placeId: null, label: "南岸团含酒店（地点待确认）", note: "酒店地点尚未确定，暂不套用雷市或维克的夜间云量。" };
  if (personId === "yueyue" && iso === "2026-10-03") return { placeId: null, label: "深夜抵达冰岛", note: "23:50 才抵达凯夫拉维克，进城可能已是次日；当晚以接驳休息为主，不评估整晚云量。" };
  if (personId === "tongyan" && iso === "2026-10-09") return { placeId: "keflavik", label: "凯夫拉维克机场区域", note: "区域云量参考，实际酒店尚未命名；次日早班机，优先休息。" };
  return { placeId: "reykjavik", label: "雷克雅未克", note: iso === "2026-10-03" ? "10/03 没有追极光行程；此处仅为天气参考。" : "" };
}

function getNightCloud(snapshot, placeId, iso) {
  if (!placeId) return null;
  const hours = [21, 22, 23].map((hour) => `${iso}T${hour}:00`)
    .concat([0, 1, 2, 3].map((hour) => `${nextWeatherDate(iso)}T0${hour}:00`));
  const values = hours.map((hour) => snapshot.places[placeId]?.hourlyCloud[hour]);
  if (!values.every((value) => Number.isFinite(value) && value >= 0 && value <= 100)) return null;
  return { min: Math.min(...values), max: Math.max(...values), mean: Math.round(values.reduce((sum, value) => sum + value, 0) / values.length) };
}

function getNightKp(snapshot, iso) {
  const hours = [`${iso}T21:00:00`, `${nextWeatherDate(iso)}T00:00:00`];
  const rows = hours.map((hour) => snapshot.aurora.shortRange.values.find((row) => row.time_tag.replace(" ", "T").replace(/Z$/, "") === hour && ["estimated", "predicted"].includes(row.observed)));
  if (!rows.every((row) => row && Number.isFinite(row.kp))) return null;
  return rows.map((row) => row.kp);
}

function getWeatherSnapshot() {
  if (typeof getTravelWeatherSnapshot === "function") return getTravelWeatherSnapshot();
  return typeof travelWeatherSnapshot === "undefined" ? null : travelWeatherSnapshot;
}

function weatherShortDescription(code) {
  if (code === 0 || code === 1) return "晴";
  if (code === 2) return "多云";
  if (code === 3) return "阴";
  if ([45, 48].includes(code)) return "雾";
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "雪";
  if ([95, 96, 99].includes(code)) return "雷";
  if (Number.isFinite(code)) return "雨";
  return "待定";
}

const weatherPlaceShortNames = {
  beijing: "北京", shanghai: "上海", shenzhen: "深圳", guangzhou: "广州", lisbon: "里斯本",
  cabo: "罗卡角", sintra: "辛特拉", porto: "波尔图", paris: "巴黎", brussels: "布鲁塞尔",
  amsterdam: "阿姆斯特丹", copenhagen: "哥本哈根", wroclaw: "弗罗茨瓦夫", reykjavik: "雷市",
  keflavik: "KEF 机场", thingvellir: "辛格维利尔", gullfoss: "黄金瀑布", kerlingarfjoll: "Kerlingarfjöll",
  landmannalaugar: "兰德曼高地", grundarfjordur: "教会山区域", arnarstapi: "阿尔纳斯塔皮",
  skogafoss: "斯科加瀑布", vik: "维克区域", jokulsarlon: "冰河湖", skyLagoon: "Sky Lagoon",
};

function weatherQueryTime(snapshot, source) {
  return snapshot[`${source}RetrievedAt`] || snapshot.retrievedAt;
}

function weatherDateLabel(iso, snapshot) {
  const queryDate = weatherQueryTime(snapshot, "weather").slice(0, 10);
  const age = (Date.parse(iso) - Date.parse(queryDate)) / 86400000;
  return age < 0 ? "历史日期 · 本次不提供实况" : age > 7 ? "远期趋势" : "天气预报";
}

function renderWeatherSummary(personId, date, snapshot) {
  const dates = weatherCardDates(personId, date);
  if (!snapshot) return '<span class="weather-summary__row">天气数据暂不可用 · 点开查看</span>';
  if (dates.length > 1) return `<span class="weather-summary__row">${dates[0].slice(5).replace("-", "/")}–${dates.at(-1).slice(5).replace("-", "/")} · ${dates.length} 天逐日天气</span>`;
  const iso = dates[0];
  const rows = weatherPlaceIds(personId, iso).map((id) => {
    const day = snapshot.places[id]?.daily[iso];
    const temperature = Number.isFinite(day?.min) && Number.isFinite(day?.max) ? `${day.min.toFixed(1)}–${day.max.toFixed(1)}°C` : "温度待报";
    const rain = Number.isFinite(day?.rain) ? `降水 ${day.rain}%` : "降水待报";
    return `<span class="weather-summary__row"><span class="weather-summary__place">${weatherEscape(weatherPlaceShortNames[id])}</span><span>${weatherShortDescription(day?.code)}</span><b>${temperature}</b><span>${rain}</span></span>`;
  }).join("");
  const night = getAuroraNight(personId, iso);
  let aurora = "";
  if (night) {
    const shortKp = getNightKp(snapshot, iso);
    const kp = snapshot.aurora.longRange.days[iso];
    const nextKp = snapshot.aurora.longRange.days[nextWeatherDate(iso)];
    const kpText = shortKp ? `夜间 Kp ${shortKp.join(" / ")}` : `长期日最大 Kp ${Number.isFinite(kp) ? kp : "—"}${nextKp !== kp ? ` / 次日 ${Number.isFinite(nextKp) ? nextKp : "—"}` : ""}`;
    const cloud = getNightCloud(snapshot, night.placeId, iso);
    const clouds = cloud ? `云 ${cloud.mean}%` : night.placeId ? "云量待报" : "云量待确认";
    aurora = `<span class="weather-summary__aurora">极光 · ${weatherEscape(kpText)} · ${clouds}<span>肉眼可见待定</span></span>`;
  }
  return `${rows}${aurora}`;
}

function renderDailyWeatherCompact(personId, date) {
  const snapshot = getWeatherSnapshot();
  const content = snapshot
    ? renderWeatherSummary(personId, date, snapshot)
    : '<span class="weather-summary__row">天气待更新 · 点上方按钮刷新</span>';
  return `<div class="daily-weather-compact" aria-label="${weatherEscape(date)} 天气摘要">
    <span class="daily-weather-compact__label">天气</span>
    <span class="daily-weather-compact__content">${content}</span>
  </div>`;
}

function renderAuroraWeather(personId, iso, snapshot) {
  const night = getAuroraNight(personId, iso);
  if (!night) return "";
  const cloud = getNightCloud(snapshot, night.placeId, iso);
  const kp = getNightKp(snapshot, iso);
  const cloudText = cloud
    ? `21:00–次日 03:00 总云量：平均 ${cloud.mean}%（${cloud.min}–${cloud.max}%）。${cloud.mean >= 75 ? "模型显示云层较多，观测条件偏差，仍需查看实时云隙。" : cloud.mean <= 25 ? "模型显示云量较少，但晴空不等于一定有肉眼极光。" : "云量有变化，需临近时查看实时云隙。"}`
    : night.placeId ? "21:00–次日 03:00：完整夜间云量暂未发布。" : "";
  const longKp = [iso, nextWeatherDate(iso)].map((day) => {
    const value = snapshot.aurora.longRange.days[day];
    return `${day.slice(5).replace("-", "/")}：${Number.isFinite(value) ? `Kp ${value}/9` : "暂未发布"}`;
  }).join("；");
  return `<div class="daily-weather__aurora">
    <h5>当晚极光 · ${weatherEscape(night.label)}</h5>
    <p><strong>肉眼能否看到：目前不能确定。</strong></p>
    ${cloudText ? `<p>${weatherEscape(cloudText)}</p>` : ""}
    <p><strong>短期夜间 Kp：</strong>${kp ? `21:00–00:00 为 ${kp[0]}；00:00–03:00 为 ${kp[1]}（0–9）。` : "尚未覆盖此夜，临近约 3 天再查。"}</p>
    <p><strong>长期展望 · 各日最大 Kp</strong><br>${weatherEscape(longKp)}</p>
    <p class="daily-weather__note">按 UTC 自然日，非整晚指数或肉眼可见概率。长期展望变动较大。</p>
    ${night.note ? `<p class="daily-weather__note">${weatherEscape(night.note)}</p>` : ""}
    <div class="daily-weather__links">${weatherLink("https://en.vedur.is/weather/forecasts/aurora/", "查冰岛官方云图与极光 ↗")}</div>
  </div>`;
}

function renderDailyWeather(personId, date, visual, { expanded = false } = {}) {
  const snapshot = getWeatherSnapshot();
  const scenery = `<p class="daily-card__season"><span class="daily-card__season-label">风景与季节参考</span>${weatherEscape(visual.city)}：${weatherEscape(visual.season)}</p>`;
  if (!snapshot) return `<details class="daily-weather"${expanded ? " open" : ""}><summary>天气数据暂不可用 · 查看风景</summary><p>预报快照暂不可用，请联网查看 ${weatherLink("https://open-meteo.com/", "天气来源")}。</p>${scenery}</details>`;
  const retrieved = weatherQueryTime(snapshot, "weather").slice(0, 16).replace("T", " ");
  const auroraRetrieved = weatherQueryTime(snapshot, "aurora").slice(0, 16).replace("T", " ");
  const dates = weatherCardDates(personId, date);
  const days = dates.map((iso) => {
    const rows = weatherPlaceIds(personId, iso).map((id) => {
      const place = snapshot.places[id];
      const day = place?.daily[iso];
      const temperature = Number.isFinite(day?.min) && Number.isFinite(day?.max) ? `${day.min.toFixed(1)}–${day.max.toFixed(1)}°C` : "温度暂未发布";
      const rain = Number.isFinite(day?.rain) ? `降水概率 ${day.rain}%` : "降水概率暂未发布";
      return `<li><strong>${weatherEscape(place?.name || id)}</strong><div class="daily-weather__metrics"><span>${weatherDescription(day?.code)}</span><b>${temperature}</b><span>${rain}</span></div></li>`;
    }).join("");
    return `<div class="daily-weather__day"><h5>${iso.slice(5).replace("-", "/")} · ${weatherDateLabel(iso, snapshot)}</h5><ul class="daily-weather__places">${rows}</ul>${renderAuroraWeather(personId, iso, snapshot)}</div>`;
  }).join("");
  const sources = [...new Set(dates.flatMap((iso) => weatherPlaceIds(personId, iso)))].map((id) => snapshot.places[id]).filter(Boolean);
  const sourceUrls = [...new Set(sources.map((place) => place.sourceUrl))];
  const hasAurora = dates.some((iso) => getAuroraNight(personId, iso));
  const issued = snapshot.aurora.longRange.issuedAt.slice(0, 16).replace("T", " ");
  return `<details class="daily-weather" data-weather-role="${weatherEscape(personId)}" data-weather-date="${weatherEscape(date)}"${expanded ? " open" : ""}>
    <summary aria-label="${weatherEscape(date)} 天气与风景，展开详情"><span class="weather-summary__label">天气${dates.length === 1 && weatherDateLabel(dates[0], snapshot).includes("远期") ? " · 远期" : ""}<span class="weather-summary__hint">详情</span></span><span class="weather-summary__content">${renderWeatherSummary(personId, date, snapshot)}</span></summary>
    <div class="daily-weather__details">
      <p class="daily-weather__note">天气查询：${weatherEscape(retrieved)} UTC${hasAurora ? `<br>极光查询：${weatherEscape(auroraRetrieved)} UTC` : ""}。保存的预报，不自动刷新；可点页面上方“刷新天气与极光”。</p>
      ${days}
      <p class="daily-weather__note">当地日期 · 全天最低–最高温 · 含雨雪的最高降水概率。超过 7 天仅看趋势。</p>
      <details class="daily-weather__sources"><summary>预报说明、来源与最新查询</summary><p>降水概率不是下雨时长；“暂未发布”不代表晴天或零降水。路线取代表地点，沿途可能不同。</p><p>天气数据：${weatherLink("https://open-meteo.com/", "Open-Meteo")}（${weatherLink("https://creativecommons.org/licenses/by/4.0/", "CC BY 4.0")}）；以下为多地点原始数据，联网查询最新预报，日期范围可能与保存的快照不同。</p><div class="daily-weather__links">${sourceUrls.map((url, index) => weatherLink(url, `天气原始数据${sourceUrls.length > 1 ? ` ${index + 1}` : ""}`)).join("")}${sources.some((place) => place.timezone === "Atlantic/Reykjavik") ? weatherLink("https://en.vedur.is/weather/forecasts/areas/", "冰岛官方天气") : ""}</div>${hasAurora ? `<p>极光需要黑暗、云隙和实时活动。Kp 低也可能看到，Kp 高也可能被云遮住；总云量只是模型参考，不是极光可见概率。冰岛夜间时间为 UTC+0，21:00–次日 03:00 是本页统计窗口，不是已订活动时间。</p><p>NOAA 长期展望于 ${weatherEscape(issued)} UTC 发布。</p><div class="daily-weather__links">${weatherLink(snapshot.aurora.longRange.sourceUrl, "NOAA 长期原文")}${weatherLink(snapshot.aurora.shortRange.sourceUrl, "NOAA 短期数据")}</div>` : ""}</details>
      ${scenery}
    </div>
  </details>`.replace(/^[ \t]+$/gm, "");
}
