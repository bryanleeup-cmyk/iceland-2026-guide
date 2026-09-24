const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { test } = require('node:test');
const root = path.resolve(__dirname, '..');
const context = vm.createContext({
  window: {}, document: { querySelector: () => null }, activeRoleId: null,
  renderRows() {}, renderHighlights() {}, renderHotel() {}, renderMobileTimeline() {}, applyRoleView() {},
});
const read = (name) => fs.readFileSync(path.join(root, name), 'utf8');
for (const name of ['weather-snapshot.js', 'weather.js']) vm.runInContext(read(name), context);
const script = read('script.js');
vm.runInContext(script.slice(0, script.indexOf('function renderDailyCard(')), context);
vm.runInContext(read('ref32-patch.js'), context);
const call = (name, ...args) => vm.runInContext(`${name}(${args.map((arg) => JSON.stringify(arg)).join(',')})`, context);
const snapshot = JSON.parse(vm.runInContext('JSON.stringify(travelWeatherSnapshot)', context));
const data = JSON.parse(vm.runInContext('JSON.stringify(data)', context));
const plain = (value) => JSON.parse(JSON.stringify(value));
const visual = { city: '原目的地', season: '原风景说明，不改行程。' };

test('every final daily card has dated weather and keeps its scenery note', () => {
  let cards = 0;
  let nights = 0;
  for (const person of data.personPlans) for (const [date, title, detail] of person.days) {
    cards++;
    const original = call('getDailyVisual', person.id, date, title, detail);
    const html = call('renderDailyWeather', person.id, date, original);
    assert(html.includes(call('weatherEscape', original.season)), `${person.id} ${date} scenery changed`);
    assert(html.includes('不自动刷新'));
    for (const iso of call('weatherCardDates', person.id, date)) {
      const places = call('weatherPlaceIds', person.id, iso);
      assert(places.length, `${person.id} ${iso} missing place`);
      for (const id of places) assert(snapshot.places[id], `${id} missing forecast location`);
      if (call('getAuroraNight', person.id, iso)) nights++;
    }
  }
  assert.equal(cards, 56);
  assert.equal(nights, 26);
});

test('every final daily card has concrete local sunrise and sunset times', () => {
  const placeholders = [];
  for (const person of data.personPlans) {
    for (const [date, title, detail] of person.days) {
      const visual = call('getDailyVisual', person.id, date, title, detail);
      if (visual.sunrise === '按当地' || visual.sunset === '按当地') placeholders.push(`${person.id} ${date}`);
    }
  }
  assert.deepEqual(placeholders, []);
  assert.match(call('getDailyVisual', 'yueyue', '09/30', '', '').sunrise, /深圳 06:14.*上海 05:46/);
  assert.match(call('getDailyVisual', 'yueyue', '10/03', '', '').sunset, /哥本哈根 18:40.*凯夫拉维克 18:52/);
  assert.match(call('getDailyVisual', 'tongyan', '10/11', '', '').sunrise, /10\/11 布鲁塞尔 07:58.*10\/12 深圳 06:18/);
  assert.match(call('renderDailyWeather', 'yueyue', '09/30', call('getDailyVisual', 'yueyue', '09/30', '', '')), /sunrise-sunset\.org/);
});

test('highlands, cross-border dates and return arrivals use the actual destinations', () => {
  assert.deepEqual(plain(call('weatherPlaceIds', 'jianhuang', '2026-09-30')), ['kerlingarfjoll']);
  assert.deepEqual(plain(call('weatherPlaceIds', 'jianhuang', '2026-10-02')), ['landmannalaugar']);
  for (const id of ['tongyan', 'yueyue', 'haigang']) assert.deepEqual(plain(call('weatherPlaceIds', id, '2026-10-06')), ['landmannalaugar']);
  assert.deepEqual(plain(call('weatherCardDates', 'yueyue', '10/11-10/12')), ['2026-10-11', '2026-10-12']);
  assert.deepEqual(plain(call('weatherPlaceIds', 'yueyue', '2026-10-12')), ['guangzhou']);
  assert.deepEqual(plain(call('weatherCardDates', 'tongyan', '10/11')), ['2026-10-11', '2026-10-12']);
  assert.deepEqual(plain(call('weatherPlaceIds', 'tongyan', '2026-10-12')), ['shenzhen']);
  assert.equal(call('weatherCardDates', 'niangniang', '09/28-10/08').length, 11);
});

test('aurora uses overnight location, never departure-day hotel checkout or daylight destination', () => {
  for (const id of ['jianhuang', 'tongyan', 'yueyue', 'haigang']) {
    assert.equal(call('getAuroraNight', id, '2026-10-04').placeId, null);
    assert.equal(call('getAuroraNight', id, '2026-10-05').placeId, 'reykjavik');
  }
  assert.equal(call('getAuroraNight', 'yueyue', '2026-10-03').placeId, null);
  assert.equal(call('getAuroraNight', 'tongyan', '2026-10-09').placeId, 'keflavik');
  assert.equal(call('getAuroraNight', 'yueyue', '2026-10-09').placeId, 'reykjavik');
  for (const [id, date] of [['jianhuang', '2026-10-06'], ['haigang', '2026-10-08'], ['tongyan', '2026-10-10'], ['yueyue', '2026-10-10'], ['niangniang', '2026-10-03']]) assert.equal(call('getAuroraNight', id, date), null);
});

test('night clouds require the complete local window across midnight; null is never clear sky', () => {
  const fixture = { places: { test: { hourlyCloud: {} } } };
  for (const hour of [21, 22, 23]) fixture.places.test.hourlyCloud[`2026-09-30T${hour}:00`] = 100;
  for (const hour of [0, 1, 2, 3]) fixture.places.test.hourlyCloud[`2026-10-01T0${hour}:00`] = 0;
  assert.deepEqual(plain(call('getNightCloud', fixture, 'test', '2026-09-30')), { min: 0, max: 100, mean: 43 });
  fixture.places.test.hourlyCloud['2026-10-01T03:00'] = null;
  assert.equal(call('getNightCloud', fixture, 'test', '2026-09-30'), null);
  assert.equal(call('getNightCloud', snapshot, 'reykjavik', '2026-10-09'), null);
});

test('short-range Kp uses estimated or predicted values, never observed or a partial night', () => {
  const fixture = { aurora: { shortRange: { values: [
    { time_tag: '2026-09-30T21:00:00', kp: 2, observed: 'predicted' },
    { time_tag: '2026-10-01 00:00:00Z', kp: 3, observed: 'predicted' },
  ] } } };
  assert.deepEqual(plain(call('getNightKp', fixture, '2026-09-30')), [2, 3]);
  fixture.aurora.shortRange.values[1].observed = 'estimated';
  assert.deepEqual(plain(call('getNightKp', fixture, '2026-09-30')), [2, 3]);
  fixture.aurora.shortRange.values[1].observed = 'observed';
  assert.equal(call('getNightKp', fixture, '2026-09-30'), null);
  fixture.aurora.shortRange.values.pop();
  assert.equal(call('getNightKp', fixture, '2026-09-30'), null);
  assert.equal(call('getNightKp', snapshot, '2026-09-29'), null);
});

test('long-term Kp clearly identifies daily maxima, both UTC dates, and uncertainty', () => {
  const html = call('renderDailyWeather', 'jianhuang', '10/05', visual);
  assert.match(html, /10\/05：Kp 4\/9；10\/06：Kp 4\/9/);
  assert.match(html, /各日最大 Kp/);
  assert.match(html, /2026-09-21 11:17 北京时间/);
  assert.match(html, /非整晚指数或肉眼可见概率/);
  assert.match(html, /目前不能确定/);
  assert.match(call('renderDailyWeather', 'jianhuang', '10/03', visual), /10\/03 没有追极光行程/);
});

test('weather metadata uses Beijing time regardless of the device timezone', () => {
  assert.equal(call('weatherBeijingTime', '2026-09-24T02:36:31.735Z'), '2026-09-24 10:36');
  assert.equal(call('weatherBeijingTime', '2026-09-23T16:00:00Z'), '2026-09-24 00:00');
  const html = call('renderDailyWeather', 'jianhuang', '10/05', visual);
  assert.match(html, /天气查询：2026-09-24 10:36 北京时间/);
  assert.doesNotMatch(html, /天气查询：2026-09-24 02:36 UTC/);
});

test('missing weather remains unknown while actual zero codes and probabilities survive', () => {
  assert.equal(call('weatherDescription', null), '晴雨暂未发布');
  assert.equal(call('weatherDescription', 0), '晴');
  const absent = call('renderDailyWeather', 'yueyue', '10/10', visual);
  assert.match(absent, /温度暂未发布/);
  assert.match(absent, /降水概率暂未发布/);
  assert.doesNotMatch(absent, /0%|0\.0°C/);
  const fixtureSnapshot = JSON.parse(JSON.stringify(snapshot));
  fixtureSnapshot.places.beijing.daily['2026-09-25'] = { code: 0, min: 0, max: 10, rain: 0 };
  const fresh = vm.createContext({ fixtureSnapshot });
  vm.runInContext('const travelWeatherSnapshot = fixtureSnapshot;', fresh);
  vm.runInContext(read('weather.js'), fresh);
  const html = vm.runInContext(`renderDailyWeather('jianhuang', '09/25', ${JSON.stringify(visual)})`, fresh);
  assert.match(html, /0\.0–10\.0°C/);
  assert.match(html, /降水概率 0%/);
});

test('unavailable snapshot retains the scenery and a working source link', () => {
  const fresh = vm.createContext({});
  vm.runInContext(read('weather.js'), fresh);
  const html = vm.runInContext(`renderDailyWeather('jianhuang', '09/25', ${JSON.stringify(visual)})`, fresh);
  assert.match(html, /预报快照暂不可用/);
  assert(html.includes(visual.season));
  assert.match(html, /href="https:\/\/open-meteo.com\/"/);
});

test('backup includes all forecasts without script or network dependencies', () => {
  const html = read('travel-backup.html');
  assert.equal((html.match(/class="daily-weather"/g) || []).length, 56);
  assert.equal((html.match(/class="daily-weather__aurora"/g) || []).length, 26);
  assert.doesNotMatch(html, /<(?:script|img|iframe|link)\b/i);
  const manifest = vm.runInNewContext(`${read('offline-assets.js')}\nself.TRAVEL_OFFLINE_MANIFEST`, { self: {} });
  for (const name of ['weather.js', 'weather-snapshot.js']) assert(manifest.core.some((file) => file.split('?')[0] === name));
});

function weatherControls(initial, result, refreshed = initial) {
  let current = initial;
  let onClick;
  const status = { textContent: '' };
  const button = {
    disabled: true,
    setAttribute() {}, removeAttribute() {},
    addEventListener(event, callback) { if (event === 'click') onClick = callback; },
  };
  const controls = vm.createContext({
    document: {
      querySelector: (selector) => selector === '#refreshWeather' ? button : status,
      querySelectorAll: () => [],
    },
    window: { scrollY: 0, scrollTo() {}, setTimeout: (callback) => callback() },
    requestAnimationFrame: (callback) => callback(),
    activeRoleId: 'yueyue', applyRoleView() {},
    getTravelWeatherSnapshot: () => current,
    async refreshTravelWeather() {
      if (result instanceof Error) throw result;
      current = refreshed;
      return result;
    },
  });
  for (const name of ['weather.js', 'weather-controls.js']) vm.runInContext(read(name), controls);
  return { status, button, click: () => onClick() };
}

test('weather refresh status initially converts UTC to Beijing time', () => {
  const controls = weatherControls({ retrievedAt: '2026-09-24T06:04:00Z' });
  assert.match(controls.status.textContent, /查询 09-24 14:04 北京时间/);
  assert.doesNotMatch(controls.status.textContent, /UTC/);
  assert.equal(controls.button.disabled, false);
});

test('successful weather refresh uses Beijing time across midnight', async () => {
  const controls = weatherControls(
    { retrievedAt: '2026-09-24T06:04:00Z' },
    { updated: ['weather', 'aurora'], failed: [], persisted: true },
    { retrievedAt: '2026-09-24T16:04:00Z' },
  );
  await controls.click();
  assert.match(controls.status.textContent, /天气与极光已更新。查询 09-25 00:04 北京时间/);
  assert.doesNotMatch(controls.status.textContent, /UTC/);
  assert.equal(controls.button.disabled, false);
});

test('partial weather refresh labels both independent query times as Beijing time', async () => {
  for (const updated of ['weather', 'aurora']) {
    const failed = updated === 'weather' ? 'aurora' : 'weather';
    const controls = weatherControls(
      { retrievedAt: '2026-09-24T06:04:00Z' },
      { updated: [updated], failed: [failed], persisted: true },
      { retrievedAt: '2026-09-24T16:04:00Z', [`${updated}RetrievedAt`]: '2026-09-24T16:04:00Z', [`${failed}RetrievedAt`]: '2026-09-24T06:04:00Z' },
    );
    await controls.click();
    assert.match(controls.status.textContent, /暂未更新，保留上次数据/);
    assert(controls.status.textContent.includes(`天气 ${updated === 'weather' ? '09-25 00:04' : '09-24 14:04'} 北京时间`));
    assert(controls.status.textContent.includes(`极光 ${updated === 'aurora' ? '09-25 00:04' : '09-24 14:04'} 北京时间`));
    assert.doesNotMatch(controls.status.textContent, /UTC/);
  }
});

test('failed and rejected weather refreshes retain the saved Beijing query time', async () => {
  for (const result of [{ updated: [], failed: ['weather', 'aurora'], persisted: false }, new Error('offline')]) {
    const controls = weatherControls({ retrievedAt: '2026-09-24T06:04:00Z' }, result);
    await controls.click();
    assert.match(controls.status.textContent, /刷新未成功，已保留上次数据；请联网重试。查询 09-24 14:04 北京时间/);
    assert.doesNotMatch(controls.status.textContent, /UTC/);
    assert.equal(controls.button.disabled, false);
  }
});
