#!/usr/bin/env node
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const updated = '2026-09-22';
const script = fs.readFileSync(path.join(root, 'script.js'), 'utf8');
const patch = fs.readFileSync(path.join(root, 'ref32-patch.js'), 'utf8');
const emergency = fs.readFileSync(path.join(root, 'index.html'), 'utf8').match(/<div id="travelEmergency">([\s\S]*?)<\/div>/)?.[1]?.trim();
assert(emergency, 'The official emergency information is required');
const marker = 'function renderDailyCard(';
assert(script.indexOf(marker) > 0, 'Cannot find the itinerary data boundary');
assert(patch.trim(), 'The final itinerary patch is required');

// Load the same base data and final overrides as the site, without rendering a DOM.
const context = {
  window: {}, document: { querySelector: () => null }, activeRoleId: null,
  renderRows() {}, renderHighlights() {}, renderHotel() {},
  renderMobileTimeline() {}, applyRoleView() {},
};
vm.createContext(context);
vm.runInContext(script.slice(0, script.indexOf(marker)), context, { timeout: 5000 });
vm.runInContext(patch, context, { timeout: 5000 });
const data = JSON.parse(vm.runInContext('JSON.stringify(data)', context));
const roleIds = ['jianhuang', 'tongyan', 'yueyue', 'haigang', 'niangniang'];
assert.equal(data.personPlans.length, roleIds.length, 'Expected all itineraries');
assert(data.hotel.address && data.hotel.mapUrl, 'The known base hotel address is required');
const escape = (text) => String(text).replace(/[&<>"']/g, (char) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
})[char]);
const decode = (text) => text.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'");
function safeUrl(value) {
  const url = new URL(decode(value));
  assert.equal(url.protocol, 'https:', `Unsupported external URL: ${value}`);
  assert(!url.username && !url.password, 'External URLs must not contain credentials');
  return url.href;
}
function link(url, label) {
  return `<a href="${escape(safeUrl(url))}" target="_blank" rel="noopener noreferrer">${escape(label)}</a>`;
}
// Keep authored text and HTTPS links only; never copy executable markup into the backup.
function richText(value) {
  let result = '', previous = 0;
  const text = String(value);
  const anchors = /<a\s+[^>]*href="([^"]+)"[^>]*>([^<]*)<\/a>/g;
  for (const match of text.matchAll(anchors)) {
    const before = text.slice(previous, match.index);
    assert(!/[<>]/.test(before), 'Unsupported markup in itinerary text');
    result += escape(decode(before)) + link(match[1], decode(match[2]));
    previous = match.index + match[0].length;
  }
  const rest = text.slice(previous);
  assert(!/[<>]/.test(rest), 'Unsupported markup in itinerary text');
  return result + escape(decode(rest));
}

function stayHtml(personId, date, title) {
  const stay = vm.runInContext(`getDailyStay(${JSON.stringify(personId)}, ${JSON.stringify(date)}, ${JSON.stringify(title)})`, context);
  if (!stay) return '';
  assert(stay.name && stay.detail, `Incomplete accommodation: ${personId} ${date}`);
  let address = '';
  if (stay.url === data.hotel.mapUrl) address = `<p>地址：${escape(data.hotel.address)}</p>`;
  else if (stay.url) {
    const query = new URL(safeUrl(stay.url)).searchParams.get('query');
    if (query) address = `<p>地图检索文字：${escape(query)}</p>`;
  }
  return `<aside class="stay" aria-label="${escape(date)} 住宿与行李安排">
    <p><strong>${escape(stay.label || '住宿')}：</strong>${stay.url ? link(stay.url, stay.name) : escape(stay.name)}</p>
    ${address}<p>${richText(stay.detail)}</p>
  </aside>`;
}

function visualNotesHtml(personId, date, title, detail) {
  const visual = vm.runInContext(`getDailyVisual(${JSON.stringify(personId)}, ${JSON.stringify(date)}, ${JSON.stringify(title)}, ${JSON.stringify(detail)})`, context);
  assert(visual && visual.city && visual.season, `Missing daily notes: ${personId} ${date}`);
  return `<p class="meta">${escape(visual.city)} · 日出 ${escape(visual.sunrise)} / 日落 ${escape(visual.sunset)}（参考）</p><p>${richText(visual.season)}</p>`;
}

const flightLabels = {
  europeLongHaul: '国际往返航班', icelandOutbound: '前往冰岛 / 接驳',
  icelandReturn: '离开冰岛', afterIceland: '衔接提醒',
};
function flightsHtml(plan, role) {
  const group = data.groups.find((item) => item.id === role.groupId);
  if (!group) {
    assert.equal(plan.id, 'niangniang', `Missing flight group: ${plan.id}`);
    const days = plan.days.filter(([, , detail]) => /起飞/.test(detail));
    assert(days.length, 'Missing Niangniang flight records');
    return `<section class="flights" aria-labelledby="flights-${plan.id}"><h3 id="flights-${plan.id}">航班记录</h3><ul>${days.map(([date, , detail]) => `<li><strong>${escape(date)}</strong> ${richText(detail)}</li>`).join('')}</ul></section>`;
  }
  assert(group.flights && Object.keys(group.flights).length, `Missing flights: ${plan.id}`);
  return `<section class="flights" aria-labelledby="flights-${plan.id}"><h3 id="flights-${plan.id}">航班与衔接</h3>${Object.entries(flightLabels).map(([key, label]) => {
    const rows = group.flights[key];
    assert(Array.isArray(rows) && rows.length, `Missing ${key}: ${plan.id}`);
    return `<h4>${label}</h4><ul>${rows.map((row) => `<li>${richText(row)}</li>`).join('')}</ul>`;
  }).join('')}</section>`;
}

const plans = roleIds.map((id) => {
  const plan = data.personPlans.find((item) => item.id === id);
  const role = data.roleViews.find((item) => item.id === id);
  assert(plan && role && plan.name && plan.days.length, `Missing itinerary: ${id}`);
  assert.equal(new Set(plan.days.map(([date]) => date)).size, plan.days.length, `Duplicate dates: ${id}`);
  plan.days.forEach((day) => assert(day.length === 3 && day.every((part) => typeof part === 'string' && part.trim()), `Incomplete day: ${id}`));
  return { plan, role };
});
const fingerprint = crypto.createHash('sha256').update(script).update(patch).digest('hex').slice(0, 12);
const html = `<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="referrer" content="no-referrer">
<meta name="robots" content="noindex, nofollow">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; base-uri 'none'; form-action 'none'">
<title>2026 国庆欧洲与冰岛行程 · 离线文字备份</title>
<style>
:root{color-scheme:light;font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:#172d3a;background:#f3f6f7;line-height:1.7}
*{box-sizing:border-box}body{margin:0}main{max-width:880px;margin:0 auto;padding:32px 24px 64px}h1,h2,h3,h4{line-height:1.35;text-wrap:balance}h1{font-size:clamp(1.7rem,5vw,2.5rem)}h2{font-size:1.65rem}h3{font-size:1.2rem}h4{font-size:1rem;margin-bottom:.4rem}p{margin:.65rem 0}a{color:#12517a;text-decoration:underline;text-underline-offset:.2em;overflow-wrap:anywhere}a:focus-visible{outline:3px solid #cf5c25;outline-offset:4px;border-radius:2px}li{margin:.55rem 0}ul{padding-left:1.4rem}.intro,.day,.flights{padding:22px;border:1px solid #cad6dc;background:#fff;border-radius:12px}.notice{border-left:4px solid #b15821;padding-left:16px}.meta{color:#425864;font-size:.9rem}.index{display:flex;flex-wrap:wrap;gap:10px 20px;padding:14px 0}.index a{display:inline-block;padding:8px 0;min-height:44px}.group{margin-top:42px;scroll-margin-top:16px}.day,.flights{margin-top:16px}.date{font-weight:750;color:#345b70}.day h3{margin:.4rem 0 1rem}.stay{border-top:1px solid #dce3e7;padding-top:12px;margin-top:16px;color:#2c4756}.stay p{margin:.4rem 0}.return{margin:20px 0}.skip{position:absolute;left:16px;top:0;transform:translateY(-150%);padding:10px;background:#fff}.skip:focus{transform:translateY(0)}footer{margin-top:40px;border-top:1px solid #cad6dc;padding-top:16px;font-size:.9rem;color:#425864}
@media(max-width:480px){main{padding:22px 14px 40px}.intro,.day,.flights{padding:17px}.group{margin-top:32px}}
@media print{:root{background:#fff;color:#000;font-size:10pt}main{max-width:none;padding:0}.intro,.day,.flights{border-color:#aaa;border-radius:0;box-shadow:none}.day,.stay{break-inside:avoid}.group{break-before:page}h2,h3,h4{break-after:avoid}.index,.return,.skip{display:none}a{color:inherit}.meta,footer{color:#333}@page{margin:16mm}}
</style>
</head>
<body>
<a class="skip" href="#itineraries">跳到完整行程</a>
<main id="top">
<header>
<p class="meta">2026 国庆 · 出行随身备份</p>
<h1>欧洲与冰岛行程<br>离线文字备份</h1>
<p class="meta">更新时间：<time datetime="${updated}">${updated}</time> · 数据版本 ${fingerprint}</p>
<div class="intro">
<p><strong>保存此 HTML 文件后，即使主站暂时打不开，也能阅读全部行程、航班与已知住宿信息。</strong></p>
<p>本文件无需图片、字体下载或 JavaScript。可用浏览器打开，也可通过浏览器打印或另存为 PDF。</p>
<p class="notice">所有时刻均为当地时间。地图、团页等外部链接需要联网；本备份不会自动更新，出发前及行程变更后请重新下载。尚未确认的班次、站点和酒店保留“待补”，以最新车票、航班和预订确认单为准。</p>
<h2>紧急信息</h2>
${emergency}
</div>
<nav class="index" aria-label="各组行程">${plans.map(({ plan }) => `<a href="#${plan.id}">${escape(plan.name)} · ${plan.days.length} 条日程</a>`).join('')}</nav>
</header>
<div id="itineraries">
${plans.map(({ plan, role }) => `<section class="group" id="${plan.id}" aria-labelledby="heading-${plan.id}">
<h2 id="heading-${plan.id}">${escape(plan.name)}</h2>
<p>${richText(plan.role)}</p>
${flightsHtml(plan, role)}
${plan.days.map(([date, title, detail]) => `<article class="day"><p class="date">${escape(date)}</p><h3>${escape(title)}</h3>${visualNotesHtml(plan.id, date, title, detail)}<p>${richText(detail)}</p>${stayHtml(plan.id, date, title)}</article>`).join('\n')}
<p class="return"><a href="#top">返回组合目录</a></p>
</section>`).join('\n')}
</div>
<footer><p>本文件是行程资料的静态备份，不是机票、车票或预订凭证。请另外保存有效票据与最新确认单。</p></footer>
</main>
</body>
</html>
`;
assert(!/<(?:script|img|iframe|link)\b/i.test(html), 'Backup must have no executable or external resource dependencies');
assert.equal((html.match(/class="day"/g) || []).length, plans.reduce((sum, { plan }) => sum + plan.days.length, 0));
fs.writeFileSync(path.join(root, 'travel-backup.html'), html);
console.log(`Built travel-backup.html: ${plans.length} groups, ${plans.reduce((sum, { plan }) => sum + plan.days.length, 0)} daily cards, ${Buffer.byteLength(html)} bytes; data ${fingerprint}`);
