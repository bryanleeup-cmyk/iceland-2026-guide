const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { test } = require('node:test');

const root = path.resolve(__dirname, '..');
const scriptSource = fs.readFileSync(path.join(root, 'script.js'), 'utf8');
const patchSource = fs.readFileSync(path.join(root, 'ref32-patch.js'), 'utf8');
const dataBoundary = scriptSource.indexOf('function renderDailyCard(');
assert(dataBoundary > 0, 'Cannot find the daily-card rendering boundary');

const context = {
  window: {},
  document: { querySelector: () => null },
  activeRoleId: null,
  renderRows() {},
  renderHighlights() {},
  renderHotel() {},
  renderMobileTimeline() {},
  applyRoleView() {},
};
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(root, 'weather-snapshot.js'), 'utf8'), context);
vm.runInContext(fs.readFileSync(path.join(root, 'weather.js'), 'utf8'), context);
vm.runInContext(scriptSource.slice(0, dataBoundary), context, { timeout: 5000 });
vm.runInContext(patchSource, context, { timeout: 5000 });
vm.runInContext(scriptSource.slice(dataBoundary, scriptSource.indexOf('const timelineStart =')), context);
vm.runInContext(scriptSource.slice(scriptSource.indexOf('function escapeHtml('), scriptSource.indexOf('function routePoints(')), context);

const finalData = JSON.parse(vm.runInContext('JSON.stringify(data)', context));
const roleIds = ['jianhuang', 'tongyan', 'yueyue', 'haigang', 'niangniang'];
const getSections = (personId, date, detail) => JSON.parse(
  vm.runInContext(
    `JSON.stringify(getDailyDetailSections(${JSON.stringify(personId)}, ${JSON.stringify(date)}, ${JSON.stringify(detail)}))`,
    context,
  ),
);
const renderDetail = (personId, date, detail) => vm.runInContext(
  `renderDailyDetail(${JSON.stringify(personId)}, ${JSON.stringify(date)}, ${JSON.stringify(detail)})`,
  context,
);
const textOfSections = (sections) => sections
  .flatMap((section) => [section.intro || '', ...(section.items || [])])
  .join('')
  .trim();
const hrefs = (value) => [...String(value).matchAll(/<a\b[^>]*\bhref="([^"]+)"[^>]*>[\s\S]*?<\/a>/gi)]
  .map((match) => match[1]);
const sourceSegments = (sections) => sections.flatMap((section) => [section.intro || '', ...(section.items || [])]).filter(Boolean);
function assertLosslessSegments(segments, original, label) {
  let remaining = original;
  for (const segment of segments) {
    remaining = remaining.trimStart();
    const content = segment.trim();
    assert.ok(remaining.startsWith(content), `${label}: changed, reordered, or missing text near ${content.slice(0, 50)}`);
    remaining = remaining.slice(content.length);
  }
  assert.equal(remaining.trim(), '', `${label}: omitted trailing text`);
}
const details = (personId, date) => {
  const person = finalData.personPlans.find((item) => item.id === personId);
  assert(person, `Unknown person: ${personId}`);
  const day = person.days.find(([dayDate]) => dayDate === date);
  assert(day, `Missing day: ${personId} ${date}`);
  return day[2];
};

test('all five final itineraries contain 56 days and split losslessly', () => {
  assert.equal(finalData.personPlans.length, roleIds.length);
  assert.deepEqual(finalData.personPlans.map((person) => person.id).sort(), [...roleIds].sort());
  assert.equal(finalData.personPlans.reduce((count, person) => count + person.days.length, 0), 56);

  for (const person of finalData.personPlans) {
    for (const [date, , detail] of person.days) {
      const sections = getSections(person.id, date, detail);
      assert.ok(sections.length > 0, `${person.id} ${date} should have readable sections`);
      assertLosslessSegments(sourceSegments(sections), detail, `${person.id} ${date}`);
      assert.deepEqual(
        hrefs(sections.flatMap((section) => [section.intro || '', ...(section.items || [])]).join('')),
        hrefs(detail),
        `${person.id} ${date} links changed while splitting`,
      );
      const rendered = renderDetail(person.id, date, detail);
      const renderedSegments = [...rendered.matchAll(/<(?:li(?: class="[^"]+")?|p class="daily-detail__intro")>([\s\S]*?)<\/(?:li|p)>/g)]
        .map((match) => match[1].replace(/<b class="daily-detail__time">([^<]*)<\/b>/g, '$1'));
      assertLosslessSegments(renderedSegments, detail, `${person.id} ${date} rendered`);
      assert.deepEqual(hrefs(rendered), hrefs(detail), `${person.id} ${date} rendered links changed`);
    }
  }
});

test('09/26 coastal day is six semantic sections for both affected roles', () => {
  const expectedLabels = [
    '上午 · 海岸线',
    '午餐 · 二选一',
    '雷加莱拉庄园 · 固定入场',
    '佩纳公园 · 花园票',
    '辛特拉王宫 · 可选外观',
    '返程 · 已订晚餐',
  ];

  for (const personId of ['jianhuang', 'niangniang']) {
    const sections = getSections(personId, '09/26', details(personId, '09/26'));
    assert.deepEqual(sections.map((section) => section.label), expectedLabels, `${personId} section order`);
    const lunch = sections.find((section) => section.kind === 'choices');
    assert(lunch, `${personId} lunch section is missing`);
    assert.equal(lunch.items.length, 2, `${personId} lunch should have two choices`);
    assert.match(lunch.items[0], /12:00[\s\S]*Adega das Azenhas/);
    assert.match(lunch.items[1], /12:30[\s\S]*Água e Sal/);
    if (personId === 'jianhuang') {
      assert.match(lunch.items[0], /12:00[\s\S]*11:35/);
      assert.match(lunch.items[1], /12:30[\s\S]*12:05/);
    }

    const regaleira = sections.find((section) => section.label.startsWith('雷加莱拉'));
    assert.match(regaleira.items.join(''), /已购 4 张票|已购 4 张/);
    assert.match(regaleira.items.join(''), /14:30[\s\S]*固定入场/);
    assert.match(regaleira.items.join(''), /最晚 18:30 闭园/);

    const pena = sections.find((section) => section.label.startsWith('佩纳'));
    assert.match(pena.items.join(''), /花园票/);
    assert.match(pena.items.join(''), /不含宫殿/);
    assert.match(pena.items.join(''), /无时段/);
    assert.match(pena.items.join(''), /19:00 闭园/);

    const optional = sections.find((section) => section.label.startsWith('辛特拉王宫'));
    assert.match(optional.items.join(''), /外观/);
    assert.match(optional.items.join(''), /不再安排入内|不安排入内/);
  }
});

test('cross-day qualifiers, pickup windows, and parenthetical semicolons remain intact', () => {
  const samples = [
    ['jianhuang', '09/28', '第二天 06:00'],
    ['jianhuang', '10/08', '10/07 23:00'],
    ['yueyue', '10/03', '次日 08:30'],
    ['jianhuang', '10/04', '08:30–09:00'],
    ['jianhuang', '10/05', '预计约 21:00 回雷克雅未克'],
  ];
  for (const [personId, date, marker] of samples) {
    const detail = details(personId, date);
    const flattened = textOfSections(getSections(personId, date, detail));
    assert.match(flattened, new RegExp(marker.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')), `${personId} ${date}`);
  }

  const portoSections = getSections('jianhuang', '09/27', details('jianhuang', '09/27'));
  const portoItem = portoSections.flatMap((section) => section.items).find((item) => item.includes('姓名 Hector Pei'));
  assert(portoItem, 'Porto booking parenthetical was split away');
  assert.match(portoItem, /姓名 Hector Pei；需前往 Porto 门店，迟到宽限 10 分钟/);
});

test('Jianhuang official routes preserve ordered stops and distinguish estimates from official return times', () => {
  const routes = {
    '09/29': ['Þingvellir', '安全说明', '150 米', 'Silfra 史费拉', 'Silfra Lagoon', '热巧克力'],
    '09/30': ['Gullfoss Café', 'Ásgarður', 'Hveradalir', '原接车点'],
    '10/01': ['Berserkjahraun', 'Kirkjufell', 'Djúpalónssandur', 'Ingjaldshólskirkja', 'Arnarstapi', 'Búðakirkja', 'Ytri-Tunga', 'Borgarnes'],
    '10/02': ['Hjálparfoss', 'Sigöldufoss', 'Landmannalaugar', 'Ljótipollur', 'Hekla'],
    '10/03': ['Þingvellir', 'Geysir', 'Gullfoss', 'Kerið'],
    '10/04': ['Gljúfrabúi', 'Seljalandsfoss', 'Skógafoss', 'Reynisfjara', '东南部乡村住宿'],
    '10/05': ['Diamond Beach', 'Jökulsárlón', 'Blue Ice Cave', '返回冰河湖', 'Hofskirkja', 'Eldhraun', 'Vík'],
  };
  for (const [date, stops] of Object.entries(routes)) {
    const sections = getSections('jianhuang', date, details('jianhuang', date));
    assert.equal(sections.length, 4, date);
    const route = sections.find((section) => section.intro === '官网参考顺序：').items.join('');
    let previous = -1;
    for (const stop of stops) {
      const position = route.indexOf(stop);
      assert(position > previous, `${date}: missing or reordered ${stop}`);
      previous = position;
    }
    const returned = sections.find((section) => section.intro === '官网返程：').items.join('');
    if (['09/29', '09/30', '10/01'].includes(date)) assert.match(returned, /推算[\s\S]*没有固定返程钟点/);
    if (date === '10/02') assert.match(returned, /官网预计约 19:00/);
    if (date === '10/03') assert.match(returned, /官网写明约 18:00/);
    if (date === '10/04') assert.match(returned, /未提供第 1 天.*固定钟点/);
    if (date === '10/05') assert.match(returned, /21:00[\s\S]*20:30 Caruso[\s\S]*冲突/);
    assert.match(sections.at(-1).items.join(''), /官方详细行程与时长/);
  }
});

test('time highlighting preserves link HTML, URL punctuation, and label punctuation', () => {
  const original = '查看 <a href="https://example.test/path?at=12:30&amp;place=集合；入口。">路线 12:30；立即打开。</a>；之后 14:30 出发。';
  const html = renderDetail('jianhuang', '10/07', original);
  assert.match(html, /href="https:\/\/example\.test\/path\?at=12:30&amp;place=集合；入口。"/);
  assert.match(html, /<a href="https:\/\/example\.test\/path\?at=12:30&amp;place=集合；入口。">路线 <b class="daily-detail__time">12:30<\/b>；立即打开。<\/a>/);
  assert.match(html, /<b class="daily-detail__time">14:30<\/b>/);
  assert.equal((html.match(/<a\b/g) || []).length, 1);
  assert.equal((html.match(/<\/a>/g) || []).length, 1);
  assert.deepEqual(hrefs(html), hrefs(original));
  const sections = getSections('jianhuang', '10/07', original);
  assert.equal(sections[0].items.length, 2, 'Link punctuation must not create extra list items');
  assertLosslessSegments(sourceSegments(sections), original, 'linked text');
});

test('changed coastal wording falls back without losing itinerary facts', () => {
  const revised = details('jianhuang', '09/26').replace('午餐按当天情况二选一：', '午餐仍按当天情况选其中一家：');
  const sections = getSections('jianhuang', '09/26', revised);
  assert.equal(sections.length, 1);
  assert.equal(sections[0].label, undefined);
  assertLosslessSegments(sourceSegments(sections), revised, 'coastal fallback');
  assert.deepEqual(hrefs(renderDetail('jianhuang', '09/26', revised)), hrefs(revised));
});

test('daily meeting times remain the confirmed source values', () => {
  const meetings = JSON.parse(vm.runInContext('JSON.stringify(dailyMeetings)', context));
  assert.deepEqual(
    meetings.map(({ date, time }) => [date, time]),
    [
      ['09/27', '08:00'],
      ['09/29', '12:00'],
      ['09/30', '08:00'],
      ['10/01', '08:00'],
      ['10/02', '08:00'],
      ['10/03', '12:00'],
      ['10/04', '08:30'],
      ['10/05', '待向导确认'],
      ['10/06', '13:00'],
    ],
  );
});

test('Lisbon bus voucher survives overrides with the correct local time and separate Longlong ticket', () => {
  for (const personId of ['jianhuang', 'niangniang']) {
    const detail = details(personId, '09/27');
    for (const fact of ['FlixBus 1000', '07:45', '08:00', '39D', '11:15', '3 小时 15 分', 'Av. Dom João II, 1990-233 Lisboa', 'R. de Bonjóia, 691, 4300 Porto', '龙龙单独购票且乘同一班大巴', '12:00 已订']) {
      assert.ok(detail.includes(fact), `${personId}: missing ${fact}`);
    }
    assert.doesNotMatch(detail, /3\.5 小时/);
    const urls = hrefs(detail).map((url) => new URL(url).searchParams.get('query'));
    assert.ok(urls.some((query) => query.includes('Oriente') && query.includes('Dom João II')));
    assert.ok(urls.some((query) => query.includes('Campanhã') && query.includes('Bonjóia 691')));
    const meeting = vm.runInContext(`renderDailyMeeting('${personId}', '09/27')`, context);
    assert.match(meeting, /大巴发车 · 葡萄牙当地时间/);
    assert.doesNotMatch(meeting, /冰岛当地时间/);
    assert.equal(getSections(personId, '09/27', detail).length, personId === 'jianhuang' ? 5 : 3);
  }
  assert.match(details('niangniang', '09/27'), /20:50 从波尔图/);
  assert.match(details('jianhuang', '09/27'), /Mercure Porto Gaia Hotel/);
  const backup = fs.readFileSync(path.join(root, 'travel-backup.html'), 'utf8');
  assert.equal((backup.match(/大巴发车 · 08:00（葡萄牙当地时间）/g) || []).length, 2);
});

test('every date jump matches a unique rendered day in the original order', () => {
  const allTargets = [];
  for (const person of finalData.personPlans) {
    const navigation = vm.runInContext(`renderDailyJump(${JSON.stringify(person.id)}, ${JSON.stringify(person.days)})`, context);
    const targets = [...navigation.matchAll(/<option value="([^"]+)"/g)].map((match) => match[1]);
    const renderedTargets = person.days.map(([date, title, detail]) => {
      const html = vm.runInContext(`renderDailyCard(${JSON.stringify(person.id)}, ${JSON.stringify(date)}, ${JSON.stringify(title)}, ${JSON.stringify(detail)})`, context);
      assert.ok(html.includes(`>${date}</time>`));
      assert.ok(html.includes(`>${title}</h3>`));
      return html.match(/<article class="daily-card" id="([^"]+)"/)[1];
    });
    assert.deepEqual(targets, renderedTargets, `${person.id}: missing or reordered date`);
    allTargets.push(...targets);
  }
  assert.equal(allTargets.length, 56);
  assert.equal(new Set(allTargets).size, 56, 'Jump destinations must be unique');
});

test('meeting note formatting preserves every instruction and time qualifier', () => {
  for (const person of finalData.personPlans) {
    for (const [date] of person.days) {
      const args = `${JSON.stringify(person.id)}, ${JSON.stringify(date)}`;
      const meeting = vm.runInContext(`getDailyMeeting(${args})`, context);
      if (!meeting) continue;
      const html = vm.runInContext(`renderDailyMeeting(${args})`, context);
      const notes = [...html.matchAll(/<li>([\s\S]*?)<\/li>/g)].map((match) => match[1].replace(/<b class="daily-detail__time">([^<]*)<\/b>/g, '$1'));
      assertLosslessSegments(notes, meeting.note, `${person.id} ${date} meeting note`);
    }
  }
});

test('initial rendering sees all final role, booking, and hotel data', () => {
  const renderCalls = [];
  const patchContext = { window: {}, document: { querySelector: () => null }, activeRoleId: null };
  vm.createContext(patchContext);
  for (const name of ['renderRows', 'renderHighlights', 'renderHotel', 'renderMobileTimeline', 'applyRoleView']) {
    patchContext[name] = () => {
      const snapshot = JSON.parse(vm.runInContext('JSON.stringify(data)', patchContext));
      assert.deepEqual(snapshot, finalData, `${name} rendered an incomplete itinerary`);
      const stay = vm.runInContext("getDailyStay('yueyue', '10/09', '')", patchContext);
      assert.match(stay.name, /Fosshotel Lind/);
      renderCalls.push(name);
    };
  }
  vm.runInContext(scriptSource.slice(0, dataBoundary), patchContext);
  vm.runInContext(patchSource, patchContext);
  assert.deepEqual(renderCalls, ['renderRows', 'renderHighlights', 'renderHotel', 'renderMobileTimeline', 'applyRoleView']);
});

test('Paris luggage booking keeps its cross-midnight window distinct from the airport departure', () => {
  const detail = details('jianhuang', '09/28');
  for (const fact of ['2026/09/28 13:00–09/29 04:00', 'M+ 型 18 号柜', '预约 ID 243232', '€16.90', '82 Rue du Faubourg Saint-Martin, 75010 Paris', '当晚不订酒店', '约 02:00 为计划出发时间']) {
    assert.ok(detail.includes(fact), `Missing Paris booking fact: ${fact}`);
  }
  assert.match(detail, /04:00 是寄存截止时间，不是计划取件时间/);
  assert.equal(getSections('jianhuang', '09/28', detail).length, 9);
  const stored = vm.runInContext("getDailyStay('jianhuang', '09/28', '')", context);
  assert.match(stored.label, /不住酒店/);
  assert.match(new URL(stored.url).searchParams.get('query'), /82 Rue du Faubourg Saint-Martin 75010 Paris/);
  assert.match(details('jianhuang', '09/29'), /06:00 从巴黎戴高乐机场 T2D 起飞，07:50[\s\S]*U24629/);
  assert.match(details('tongyan', '10/02'), /Ibis Clichy Centre Mairie/);
  assert.doesNotMatch(JSON.stringify(finalData), /转机前夜住宿|建议住戴高乐机场附近|20:10 后马上去巴黎戴高乐机场附近休息/);
  const backup = fs.readFileSync(path.join(root, 'travel-backup.html'), 'utf8');
  assert.match(backup, /2026\/09\/28[\s\S]*13:00[\s\S]*09\/29[\s\S]*04:00/);
  assert.match(backup, /预约 ID 243232/);
});

test('Paris 09/28 orders the afternoon cruise before sunset and Eiffel after the booked dinner', () => {
  const detail = details('jianhuang', '09/28');
  for (const fact of ['下午（巴黎当地时间）乘坐塞纳河游船', '约 19:00（巴黎当地时间）抵达', '蒙马特高地', '20:30（巴黎当地时间）', 'Al Caratello', '建皇组合 2 人', 'TheFork 预约已确认', '5 Rue Audran, 75018 Paris', '20:30–22:00', '晚餐后前往埃菲尔铁塔']) {
    assert.ok(detail.includes(fact), `Missing Paris dinner fact: ${fact}`);
  }
  assert.match(detail, /14:30[\s\S]*下午（巴黎当地时间）乘坐塞纳河游船[\s\S]*约 19:00[\s\S]*20:30（巴黎当地时间）[\s\S]*晚餐后前往埃菲尔铁塔[\s\S]*半夜返回同一门店取行李/);
  assert.doesNotMatch(detail, /原日落塞纳河游船|时间待重新确认|20:00 埃菲尔铁塔/);
  assert.match(detail, /当晚不订酒店/);
  assert.match(detail, /半夜返回同一门店取行李，再直接去戴高乐机场；约 02:00 为计划出发时间/);
  const sections = getSections('jianhuang', '09/28', detail);
  assert.deepEqual(sections.slice(3, 7).map((section) => section.label), [
    '下午 · 午餐后塞纳河游船',
    '日落 · 约 19:00 蒙马特高地',
    '晚餐 · 20:30 已订 Al Caratello',
    '夜景 · 晚餐后埃菲尔铁塔',
  ]);
  const backup = fs.readFileSync(path.join(root, 'travel-backup.html'), 'utf8');
  assert.match(backup, /Al Caratello/);
  assert.match(backup, /5 Rue Audran, 75018 Paris/);
  for (const surface of [backup, fs.readFileSync(path.join(root, 'index.html'), 'utf8'), JSON.stringify(finalData)]) {
    assert.doesNotMatch(surface, /原日落塞纳河游船|原游船与铁塔保留|时间待重新确认|原 19:50–20:10 铁塔/);
    assert.match(surface, /下午乘坐塞纳河游船|下午（巴黎当地时间）乘坐塞纳河游船/);
    assert.match(surface, /晚餐后前往埃菲尔铁塔/);
  }
  const cruise = finalData.spots.find((spot) => spot.id === 'paris-cruise');
  const tower = finalData.spots.find((spot) => spot.id === 'eiffel-night');
  assert.equal(cruise.title, '下午塞纳河游船');
  assert.match(cruise.bestTime, /14:30 午餐后/);
  assert.match(tower.bestTime, /Al Caratello 晚餐后/);
});
