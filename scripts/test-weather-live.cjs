const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { test } = require('node:test');

const root = path.resolve(__dirname, '..');
const snapshotSource = fs.readFileSync(path.join(root, 'weather-snapshot.js'), 'utf8');
const liveSource = fs.readFileSync(path.join(root, 'weather-live.js'), 'utf8');
const FIXED_NOW = '2026-09-24T04:00:00.000Z';
const cacheKey = 'iceland-weather-v1';
const outlookUrl = 'https://services.swpc.noaa.gov/text/27-day-outlook.txt';
const kpUrl = 'https://services.swpc.noaa.gov/products/noaa-planetary-k-index-forecast.json';

function plain(value) {
  return JSON.parse(JSON.stringify(value));
}

function loadBundle() {
  const context = {};
  vm.createContext(context);
  vm.runInContext(`${snapshotSource}; this.__bundle = travelWeatherSnapshot;`, context);
  return plain(context.__bundle);
}

function response(url, body) {
  return { ok: true, url, text: async () => typeof body === 'string' ? body : JSON.stringify(body) };
}

function weatherUrlSet(bundle) {
  return [...new Set(Object.values(bundle.places).map((place) => place.sourceUrl))];
}

function weatherBody(bundle, url, marker = false, nulls = false) {
  const places = Object.values(bundle.places).filter((place) => place.sourceUrl === url);
  return places.map((place, placeIndex) => {
    const dates = Object.keys(place.daily).sort();
    const daily = {
      time: dates,
      weather_code: dates.map((date) => place.daily[date].code),
      temperature_2m_max: dates.map((date, index) => marker && placeIndex === 0 && index === 0 ? 30 : place.daily[date].max),
      temperature_2m_min: dates.map((date) => place.daily[date].min),
      precipitation_probability_max: dates.map((date) => place.daily[date].rain),
    };
    if (nulls && placeIndex === 0) daily.temperature_2m_max[0] = null;
    const start = new Date(`${dates[0]}T00:00:00Z`);
    const time = Array.from({ length: 384 }, (_, index) => new Date(start.getTime() + index * 3600000).toISOString().slice(0, 16));
    const cloud = time.map((hour) => place.hourlyCloud[hour] ?? 40);
    return {
      latitude: place.latitude,
      longitude: place.longitude,
      timezone: place.timezone,
      daily_units: { time: 'iso8601', weather_code: 'wmo code', temperature_2m_max: '°C', temperature_2m_min: '°C', precipitation_probability_max: '%' },
      hourly_units: { time: 'iso8601', cloud_cover: '%' },
      daily,
      hourly: { time, cloud_cover: cloud },
    };
  });
}

function auroraBodies(bundle) {
  const days = Object.entries(bundle.aurora.longRange.days).map(([date, kp]) => {
    const [year, month, day] = date.split('-');
    const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][Number(month) - 1];
    return `${year} ${monthName} ${day}     100            5          ${kp}`;
  }).join('\n');
  const issued = bundle.aurora.longRange.issuedAt.replace(/^([0-9-]+)T([0-9]{2}):([0-9]{2}):00Z$/, (_, date, hour, minute) => {
    const [year, month, day] = date.split('-');
    const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][Number(month) - 1];
    return `${year} ${monthName} ${day} ${hour}${minute}`;
  });
  const longText = `:Issued: ${issued} UTC\n${days}\n`;
  const short = bundle.aurora.shortRange.values.map((row) => ({ ...row }));
  return { longText, shortText: JSON.stringify(short) };
}

function createEnvironment(options = {}) {
  const bundle = loadBundle();
  const urls = weatherUrlSet(bundle);
  const aurora = auroraBodies(bundle);
  const storage = options.storage || new Map();
  let fetchCount = 0;
  const calls = [];
  const context = {
    localStorage: {
      getItem(key) {
        if (options.storageReadError) throw new Error('storage read denied');
        return storage.get(key) ?? null;
      },
      setItem(key, value) {
        if (options.storageWriteError) throw new Error('storage write denied');
        storage.set(key, value);
      },
    },
    fetch(url, request) {
      fetchCount++;
      calls.push({ url, request });
      if (options.fetch) return options.fetch(url, request, { bundle, urls, aurora, response });
      if (url === outlookUrl) return Promise.resolve(response(url, aurora.longText));
      if (url === kpUrl) return Promise.resolve(response(url, aurora.shortText));
      const index = urls.indexOf(url);
      return index < 0 ? Promise.reject(new Error('unexpected URL')) : Promise.resolve(response(url, weatherBody(bundle, url, options.marker, options.nulls)));
    },
    AbortController,
    URL,
    URLSearchParams,
    Intl,
    setTimeout,
    clearTimeout,
    Date: class extends Date {
      constructor(...args) { super(args.length ? args[0] : FIXED_NOW); }
      static now() { return Date.parse(FIXED_NOW); }
    },
  };
  vm.createContext(context);
  vm.runInContext(snapshotSource, context);
  vm.runInContext(liveSource, context);
  return {
    context,
    bundle,
    urls,
    storage,
    calls,
    get fetchCount() { return fetchCount; },
    getSnapshot: () => vm.runInContext('getTravelWeatherSnapshot()', context),
    refresh: () => vm.runInContext('refreshTravelWeather()', context),
  };
}

test('loads static fallback and refreshes both providers with validated data', async () => {
  const env = createEnvironment({ marker: true });
  const before = plain(env.getSnapshot());
  assert.equal(env.fetchCount, 0);
  const result = await env.refresh();
  assert.deepEqual(plain(result.updated), ['weather', 'aurora']);
  assert.deepEqual(plain(result.failed), []);
  assert.equal(result.persisted, true);
  assert.equal(result.snapshot.places.beijing.daily['2026-09-24'].max, 30);
  assert.equal(result.snapshot.places.reykjavik.hourlyCloud['2026-09-24T00:00'], before.places.reykjavik.hourlyCloud['2026-09-24T00:00']);
  assert.equal(env.fetchCount, 5);
  assert(env.calls.every(({ request }) => request.cache === 'no-store' && request.credentials === 'omit' && request.redirect === 'error'));
});

test('deduplicates concurrent refreshes', async () => {
  let release;
  const gate = new Promise((resolve) => { release = resolve; });
  const env = createEnvironment({ fetch: (url, request, helpers) => gate.then(() => {
    if (url === outlookUrl) return helpers.response(url, helpers.aurora.longText);
    if (url === kpUrl) return helpers.response(url, helpers.aurora.shortText);
    return helpers.response(url, JSON.stringify(weatherBody(helpers.bundle, url)));
  }) });
  const first = env.refresh();
  const second = env.refresh();
  assert.strictEqual(first, second);
  release();
  const result = await first;
  assert.deepEqual(plain(result.updated), ['weather', 'aurora']);
  assert.equal(env.fetchCount, 5);
});

test('retains provider data when all requests fail', async () => {
  const env = createEnvironment({ fetch: () => Promise.reject(new Error('offline')) });
  const before = plain(env.getSnapshot());
  const result = await env.refresh();
  assert.deepEqual(plain(result.updated), []);
  assert.deepEqual(plain(result.failed), ['weather', 'aurora']);
  assert.deepEqual(plain(result.snapshot), before);
  assert.equal(result.persisted, false);
});

test('keeps old weather when one weather batch fails, while updating aurora', async () => {
  const env = createEnvironment({ marker: true, fetch: (url, request, helpers) => {
    if (url === helpers.urls[1]) return Promise.reject(new Error('weather batch failed'));
    if (url === outlookUrl) return Promise.resolve(helpers.response(url, helpers.aurora.longText));
    if (url === kpUrl) return Promise.resolve(helpers.response(url, helpers.aurora.shortText));
    return Promise.resolve(helpers.response(url, JSON.stringify(weatherBody(helpers.bundle, url, true))));
  } });
  const before = plain(env.getSnapshot());
  const result = await env.refresh();
  assert.deepEqual(plain(result.updated), ['aurora']);
  assert.deepEqual(plain(result.failed), ['weather']);
  assert.equal(result.snapshot.places.beijing.daily['2026-09-24'].max, before.places.beijing.daily['2026-09-24'].max);
});

test('keeps old aurora when either NOAA request fails', async () => {
  const env = createEnvironment({ marker: true, fetch: (url, request, helpers) => {
    if (url === kpUrl) return Promise.reject(new Error('NOAA unavailable'));
    if (url === outlookUrl) return Promise.resolve(helpers.response(url, helpers.aurora.longText));
    return Promise.resolve(helpers.response(url, JSON.stringify(weatherBody(helpers.bundle, url, true))));
  } });
  const before = plain(env.getSnapshot());
  const result = await env.refresh();
  assert.deepEqual(plain(result.updated), ['weather']);
  assert.deepEqual(plain(result.failed), ['aurora']);
  assert.deepEqual(plain(result.snapshot.aurora), before.aurora);
});

test('accepts null weather values and never coerces them to zero', async () => {
  const env = createEnvironment({ nulls: true });
  const result = await env.refresh();
  assert.equal(result.snapshot.places.beijing.daily['2026-09-24'].max, null);
});

test('ignores corrupt cache and survives denied storage writes', async () => {
  const storage = new Map([[cacheKey, '{not-json']]);
  const env = createEnvironment({ storage, storageWriteError: true, marker: true });
  assert.equal(env.getSnapshot().places.beijing.daily['2026-09-24'].max, 26.5);
  const result = await env.refresh();
  assert.equal(result.snapshot.places.beijing.daily['2026-09-24'].max, 30);
  assert.equal(result.persisted, false);
});

test('ignores a cache with unknown IDs or future timestamps', () => {
  const bundle = loadBundle();
  const cached = plain(bundle);
  cached.weatherRetrievedAt = '2026-09-25T03:00:00Z';
  cached.auroraRetrievedAt = '2026-09-25T03:00:00Z';
  cached.retrievedAt = cached.weatherRetrievedAt;
  cached.places.unknown = cached.places.beijing;
  const storage = new Map([[cacheKey, JSON.stringify({ version: 1, snapshot: cached })]]);
  const env = createEnvironment({ storage });
  const snapshot = env.getSnapshot();
  assert.equal(snapshot.places.beijing.daily['2026-09-24'].max, 26.5);
  assert.equal(Object.hasOwn(snapshot.places, 'unknown'), false);
});

test('accepts a valid cache only per provider and rebuilds source URLs', () => {
  const bundle = loadBundle();
  const cached = plain(bundle);
  cached.weatherRetrievedAt = '2026-09-24T03:00:00Z';
  cached.auroraRetrievedAt = bundle.retrievedAt;
  cached.retrievedAt = cached.weatherRetrievedAt;
  cached.places.beijing.daily['2026-09-24'].max = 31;
  cached.places.beijing.sourceUrl = 'https://evil.example/cache-source';
  const storage = new Map([[cacheKey, JSON.stringify({ version: 1, snapshot: cached })]]);
  const env = createEnvironment({ storage });
  const snapshot = env.getSnapshot();
  assert.equal(snapshot.places.beijing.daily['2026-09-24'].max, 31);
  assert.equal(snapshot.places.beijing.sourceUrl, bundle.places.beijing.sourceUrl);
  assert.equal(snapshot.aurora.longRange.issuedAt, bundle.aurora.longRange.issuedAt);
});
