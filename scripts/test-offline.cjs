const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const vm = require('node:vm');
const crypto = require('node:crypto');
const { execFileSync } = require('node:child_process');
const { test } = require('node:test');

const root = path.resolve(__dirname, '..');
const workerSource = fs.readFileSync(path.join(root, 'sw.js'), 'utf8');
const scope = 'https://example.test/trip/';
const absolute = (name) => new URL(name, scope).href;
const digest = (bytes) => `sha256-${crypto.createHash('sha256').update(bytes).digest('base64')}`;

function worker({ fetch: fetchResource = async () => new Response('network'), failInstall = false, failWrites = false } = {}) {
  const handlers = {};
  const stores = new Map();
  const calls = { installed: [], deleted: [], claimed: 0, skipped: 0, fetched: [] };
  const manifest = {
    version: 'new', mediaVersion: 'photos', core: ['index.html', 'app.js?v=1'],
    media: ['assets/photo.webp'], integrity: { 'index.html': digest('html'), 'app.js?v=1': digest('js') },
  };
  const requestUrl = (request) => typeof request === 'string' ? request : request.url;
  const open = async (name) => {
    if (!stores.has(name)) stores.set(name, new Map());
    const entries = stores.get(name);
    return {
      match: async (request) => entries.get(requestUrl(request))?.clone(),
      keys: async () => [...entries.keys()].map((url) => new Request(url)),
      put: async (request, response) => {
        if (failWrites) throw new Error('QuotaExceededError');
        entries.set(requestUrl(request), response.clone());
      },
      addAll: async (requests) => {
        calls.installed.push(...requests);
        if (failInstall) throw new Error('integrity mismatch or missing core resource');
        for (const request of requests) entries.set(request.url, new Response('core'));
      },
    };
  };
  vm.runInNewContext(workerSource, {
    importScripts() {}, URL, Request, Response, Set, AbortController, setTimeout, clearTimeout,
    self: {
      TRAVEL_OFFLINE_MANIFEST: manifest, registration: { scope }, location: { origin: new URL(scope).origin },
      addEventListener: (name, listener) => { handlers[name] = listener; },
      clients: { claim: async () => { calls.claimed += 1; } },
      skipWaiting: async () => { calls.skipped += 1; },
    },
    caches: {
      open, keys: async () => [...stores.keys()],
      delete: async (name) => { calls.deleted.push(name); return stores.delete(name); },
    },
    fetch: async (...args) => { calls.fetched.push(args[0]); return fetchResource(...args); },
  });
  return {
    calls, stores, manifest,
    dispatch(name, event = {}) {
      let work;
      handlers[name]({ ...event, waitUntil: (promise) => { work = promise; }, respondWith: (promise) => { work = promise; } });
      return work;
    },
  };
}

test('generated offline manifest matches every current core file and image', () => {
  const context = { self: {} };
  vm.runInNewContext(fs.readFileSync(path.join(root, 'offline-assets.js'), 'utf8'), context);
  const manifest = JSON.parse(JSON.stringify(context.self.TRAVEL_OFFLINE_MANIFEST));
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  const core = ['index.html', 'travel-backup.html', ...Array.from(html.matchAll(/(?:src|href)="([^"?]+\.(?:js|css)(?:\?[^\"]*)?)"/g), (match) => match[1])];
  const walk = (directory) => fs.readdirSync(path.join(root, directory), { withFileTypes: true }).flatMap((entry) => {
    const name = `${directory}/${entry.name}`;
    return entry.isDirectory() ? walk(name) : [name];
  });
  const media = walk('assets').filter((name) => /\.(webp|png|jpg|svg)$/i.test(name)).sort();
  const rebuild = 'Offline artifacts are stale; run node scripts/build-offline.cjs.';
  assert.deepEqual(manifest.core, core, rebuild);
  assert.deepEqual(manifest.media, media, rebuild);
  const hash = crypto.createHash('sha256');
  const mediaHash = crypto.createHash('sha256');
  for (const name of [...core, ...media, 'sw.js']) {
    const contents = fs.readFileSync(path.join(root, name.split('?')[0]));
    hash.update(name).update(contents);
    if (core.includes(name)) assert.equal(manifest.integrity[name], digest(contents), `${name}: ${rebuild}`);
    if (media.includes(name)) mediaHash.update(name).update(contents);
  }
  assert.equal(manifest.version, hash.digest('hex').slice(0, 12), rebuild);
  assert.equal(manifest.mediaVersion, mediaHash.digest('hex').slice(0, 12), rebuild);
});

test('build pins core bytes and preserves photo version across itinerary-only updates', (t) => {
  const fixture = fs.mkdtempSync(path.join(os.tmpdir(), 'iceland-offline-test-'));
  t.after(() => fs.rmSync(fixture, { recursive: true, force: true }));
  fs.mkdirSync(path.join(fixture, 'scripts'));
  fs.mkdirSync(path.join(fixture, 'assets'));
  fs.copyFileSync(path.join(__dirname, 'build-offline.cjs'), path.join(fixture, 'scripts/build-offline.cjs'));
  fs.writeFileSync(path.join(fixture, 'scripts/build-travel-backup.cjs'), "require('node:fs').writeFileSync('travel-backup.html', 'backup');");
  fs.writeFileSync(path.join(fixture, 'index.html'), '<script src="app.js?v=1"></script>');
  fs.writeFileSync(path.join(fixture, 'app.js'), 'first itinerary');
  fs.writeFileSync(path.join(fixture, 'sw.js'), 'worker');
  fs.writeFileSync(path.join(fixture, 'assets/photo.webp'), 'photo');
  const build = () => {
    execFileSync(process.execPath, [path.join(fixture, 'scripts/build-offline.cjs')], { cwd: fixture });
    const context = { self: {} };
    vm.runInNewContext(fs.readFileSync(path.join(fixture, 'offline-assets.js'), 'utf8'), context);
    return JSON.parse(JSON.stringify(context.self.TRAVEL_OFFLINE_MANIFEST));
  };
  const first = build();
  assert.deepEqual(build(), first, 'repeated builds are deterministic');
  assert.equal(first.integrity['app.js?v=1'], digest('first itinerary'));
  fs.writeFileSync(path.join(fixture, 'app.js'), 'updated itinerary');
  const changedText = build();
  assert.notEqual(changedText.version, first.version);
  assert.equal(changedText.mediaVersion, first.mediaVersion);
  assert.equal(changedText.integrity['app.js?v=1'], digest('updated itinerary'));
  fs.writeFileSync(path.join(fixture, 'assets/photo.webp'), 'updated photo');
  assert.notEqual(build().mediaVersion, changedText.mediaVersion);
});

test('core install verifies every resource and failed installs do not activate or delete the old version', async () => {
  const app = worker({ failInstall: true });
  app.stores.set('iceland-2026-guide-core-old', new Map([[absolute('index.html'), new Response('old')]]));
  await assert.rejects(app.dispatch('install'), /integrity mismatch/);
  for (const request of app.calls.installed) {
    const name = request.url.slice(scope.length);
    assert.equal(request.integrity, app.manifest.integrity[name]);
    assert.equal(request.cache, 'reload');
  }
  assert.equal(app.calls.installed.length, app.manifest.core.length);
  assert.equal(app.calls.skipped, 0);
  assert.equal(app.calls.claimed, 0);
  assert.equal(app.calls.deleted.length, 0);
  assert.ok(app.stores.has('iceland-2026-guide-core-old'));
});

test('storage quota failure does not break a successful online image response', async () => {
  const app = worker({ failWrites: true });
  const response = await app.dispatch('fetch', { request: new Request(absolute('assets/photo.webp')) });
  assert.equal(response.status, 200);
  assert.equal(await response.text(), 'network');
});

test('text updates preserve saved photos and unrelated caches', async () => {
  const app = worker();
  for (const name of ['iceland-2026-guide-core-old', 'iceland-2026-guide-core-new', 'iceland-2026-guide-media-photos', 'another-app-cache']) app.stores.set(name, new Map());
  await app.dispatch('activate');
  assert.deepEqual(app.calls.deleted, ['iceland-2026-guide-core-old']);
  assert.ok(app.stores.has('iceland-2026-guide-media-photos'));
  assert.ok(app.stores.has('another-app-cache'));
  assert.equal(app.calls.claimed, 1);
});

test('offline role links load the cached shell and photos without using the network', async () => {
  const app = worker({ fetch: async () => { throw new Error('offline'); } });
  app.stores.set('iceland-2026-guide-core-new', new Map([[absolute('index.html'), new Response('saved itinerary')]]));
  app.stores.set('iceland-2026-guide-media-photos', new Map([[absolute('assets/photo.webp'), new Response('saved photo')]]));
  for (const suffix of ['?role=haigang', 'index.html?role=tongyan', '?role=yueyue']) {
    const response = await app.dispatch('fetch', { request: { method: 'GET', mode: 'navigate', url: absolute(suffix) } });
    assert.equal(await response.text(), 'saved itinerary');
  }
  const photo = await app.dispatch('fetch', { request: new Request(absolute('assets/photo.webp')) });
  assert.equal(await photo.text(), 'saved photo');
  assert.equal(app.calls.fetched.length, 0);
});

test('a partial photo save reports failure and retains the cached itinerary', async () => {
  const app = worker({ fetch: async () => new Response('unavailable', { status: 503 }) });
  app.stores.set('iceland-2026-guide-core-new', new Map([[absolute('index.html'), new Response('saved itinerary')]]));
  const messages = [];
  await app.dispatch('message', { data: { type: 'SAVE_ALL' }, ports: [{ postMessage: (message) => messages.push(message) }] });
  assert.equal(messages.at(-1).type, 'ERROR');
  assert.equal(messages.at(-1).message, 'photos incomplete');
  assert.ok(app.stores.get('iceland-2026-guide-core-new').has(absolute('index.html')));
});

test('saved photos cannot report complete when a core file is missing', async () => {
  const app = worker();
  app.stores.set('iceland-2026-guide-core-new', new Map([[absolute('index.html'), new Response('saved itinerary')]]));
  app.stores.set('iceland-2026-guide-media-photos', new Map([[absolute('assets/photo.webp'), new Response('saved photo')]]));
  const messages = [];
  await app.dispatch('message', { data: { type: 'STATUS' }, ports: [{ postMessage: (message) => messages.push(message) }] });
  assert.equal(messages.at(-1).coreComplete, false);
  assert.equal(messages.at(-1).complete, false);
});

test('failed offline core repair reports a core error and preserves surviving files', async () => {
  const app = worker({ failInstall: true, fetch: async () => { throw new Error('offline'); } });
  app.stores.set('iceland-2026-guide-core-new', new Map([[absolute('index.html'), new Response('saved itinerary')]]));
  const messages = [];
  await app.dispatch('message', { data: { type: 'SAVE_ALL' }, ports: [{ postMessage: (message) => messages.push(message) }] });
  assert.equal(messages.at(-1).type, 'ERROR');
  assert.equal(messages.at(-1).message, 'core incomplete');
  assert.ok(app.stores.get('iceland-2026-guide-core-new').has(absolute('index.html')));
  assert.equal(app.calls.fetched.length, 0, 'photo downloads wait until the core is repaired');
});

test('saving online repairs missing core files before reporting all content complete', async () => {
  const app = worker();
  app.stores.set('iceland-2026-guide-core-new', new Map([[absolute('index.html'), new Response('saved itinerary')]]));
  const messages = [];
  await app.dispatch('message', { data: { type: 'SAVE_ALL' }, ports: [{ postMessage: (message) => messages.push(message) }] });
  assert.equal(messages.at(-1).type, 'STATUS');
  assert.equal(messages.at(-1).coreComplete, true);
  assert.equal(messages.at(-1).complete, true);
  assert.equal(app.calls.installed.length, app.manifest.core.length);
  for (const request of app.calls.installed) assert.equal(request.integrity, app.manifest.integrity[request.url.slice(scope.length)]);
});

test('rechecking a complete offline save does not fetch the core or photos again', async () => {
  const app = worker({ failInstall: true, fetch: async () => { throw new Error('offline'); } });
  app.stores.set('iceland-2026-guide-core-new', new Map(app.manifest.core.map((name) => [absolute(name), new Response('saved core')])));
  app.stores.set('iceland-2026-guide-media-photos', new Map([[absolute('assets/photo.webp'), new Response('saved photo')]]));
  const messages = [];
  await app.dispatch('message', { data: { type: 'SAVE_ALL' }, ports: [{ postMessage: (message) => messages.push(message) }] });
  assert.equal(messages.at(-1).complete, true);
  assert.equal(app.calls.installed.length, 0);
  assert.equal(app.calls.fetched.length, 0);
});
