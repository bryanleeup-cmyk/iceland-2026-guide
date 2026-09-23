importScripts('./offline-assets.js');

const { version, mediaVersion, core, media, integrity } = self.TRAVEL_OFFLINE_MANIFEST;
const prefix = 'iceland-2026-guide-';
const coreCache = `${prefix}core-${version}`;
const mediaCache = `${prefix}media-${mediaVersion}`;
const absolute = (path) => new URL(path, self.registration.scope).href;
const coreUrls = new Set(core.map(absolute));
const mediaUrls = new Set(media.map(absolute));
const shell = absolute('index.html');
const coreRequests = () => core.map((path) => new Request(absolute(path), { cache: 'reload', integrity: integrity[path] }));
let saveTask;

self.addEventListener('install', (event) => {
  // Verify release bytes as well as completeness before activating a new itinerary.
  event.waitUntil((async () => {
    const cache = await caches.open(coreCache);
    await cache.addAll(coreRequests());
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter((name) => name.startsWith(prefix) && name !== coreCache && name !== mediaCache).map((name) => caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);
  url.hash = '';
  if (request.method !== 'GET' || url.origin !== self.location.origin) return;
  const isHome = request.mode === 'navigate' && (url.pathname === new URL(self.registration.scope).pathname || url.pathname === new URL(shell).pathname);
  if (isHome || coreUrls.has(url.href)) {
    event.respondWith(caches.open(coreCache).then(async (cache) => (await cache.match(isHome ? shell : url.href)) || fetch(request)));
  } else if (mediaUrls.has(url.href)) {
    event.respondWith(caches.open(mediaCache).then(async (cache) => {
      const existing = await cache.match(url.href);
      if (existing) return existing;
      const response = await fetch(request);
      // A full cache must not break an image that the network delivered successfully.
      if (response.ok) await cache.put(url.href, response.clone()).catch(() => {});
      return response;
    }));
  }
});

async function hasCoreFiles() {
  const cache = await caches.open(coreCache);
  const keys = new Set((await cache.keys()).map((request) => request.url));
  return core.every((path) => keys.has(absolute(path)));
}

async function mediaStatus() {
  const cache = await caches.open(mediaCache);
  const keys = new Set((await cache.keys()).map((request) => request.url));
  const coreComplete = await hasCoreFiles();
  return { type: 'STATUS', version, coreComplete, complete: coreComplete && media.every((path) => keys.has(absolute(path))) };
}

async function saveMedia(report) {
  if (!(await hasCoreFiles())) {
    try {
      await (await caches.open(coreCache)).addAll(coreRequests());
    } catch {
      throw new Error('core incomplete');
    }
  }
  const cache = await caches.open(mediaCache);
  let next = 0;
  let done = 0;
  let failures = 0;
  async function download() {
    while (next < media.length) {
      const url = absolute(media[next++]);
      try {
        if (!(await cache.match(url))) {
          const controller = new AbortController();
          const timeout = setTimeout(() => controller.abort(), 25000);
          try {
            const response = await fetch(url, { signal: controller.signal, cache: 'reload' });
            if (!response.ok) throw new Error('image download failed');
            await cache.put(url, response);
          } finally {
            clearTimeout(timeout);
          }
        }
      } catch {
        failures += 1;
      }
      done += 1;
      report({ type: 'PROGRESS', done, total: media.length });
    }
  }
  await Promise.all(Array.from({ length: 4 }, download));
  if (failures) throw new Error('photos incomplete');
  return mediaStatus();
}

self.addEventListener('message', (event) => {
  if (event.data?.type === 'ACTIVATE_UPDATE') {
    event.waitUntil(self.skipWaiting());
    return;
  }
  const port = event.ports[0];
  if (!port) return;
  const report = (data) => port.postMessage(data);
  event.waitUntil((async () => {
    try {
      if (event.data?.type === 'STATUS') return report(await mediaStatus());
      if (event.data?.type === 'SAVE_ALL') {
        if (saveTask) throw new Error('another save is in progress');
        saveTask = saveMedia(report);
        try { report(await saveTask); } finally { saveTask = null; }
      }
    } catch (error) {
      report({ type: 'ERROR', message: error.message });
    }
  })());
});
// offline release 66ba5f2d5227
