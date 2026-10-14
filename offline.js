(() => {
  const status = document.querySelector('#offlineStatus');
  const save = document.querySelector('#saveOffline');
  const update = document.querySelector('#updateOffline');
  let registration;
  let saving = false;
  let reloading = false;
  let controlled = Boolean(navigator.serviceWorker?.controller);
  let updatePromise;
  let lastUpdateCheck = 0;

  function checkForUpdate() {
    if (!registration || !navigator.onLine) return updatePromise;
    const now = Date.now();
    if (updatePromise || now - lastUpdateCheck < 30000) return updatePromise;
    lastUpdateCheck = now;
    updatePromise = registration.update().catch(() => {}).finally(() => { updatePromise = null; });
    return updatePromise;
  }

  function checkItinerary() {
    document.querySelector('#itineraryStatus').hidden = Boolean(window.travelDataReady);
  }
  window.addEventListener('load', checkItinerary, { once: true });
  window.addEventListener('error', (event) => {
    if (event.target?.tagName === 'SCRIPT' || /script\.js|ref32-patch\.js/.test(event.filename || '')) {
      checkItinerary();
    }
  }, true);

  function askWorker(type, onProgress) {
    return new Promise((resolve, reject) => {
      const worker = navigator.serviceWorker.controller || registration?.active;
      if (!worker) return reject(new Error('worker unavailable'));
      const channel = new MessageChannel();
      let timer;
      const armTimeout = () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          channel.port1.close();
          reject(new Error('worker timeout'));
        }, 45000);
      };
      channel.port1.onmessage = ({ data }) => {
        armTimeout();
        if (data.type === 'PROGRESS') return onProgress?.(data);
        clearTimeout(timer);
        channel.port1.close();
        if (data.type === 'ERROR') reject(new Error(data.message));
        else resolve(data);
      };
      armTimeout();
      worker.postMessage({ type }, [channel.port2]);
    });
  }

  async function showStatus() {
    if (saving) return;
    try {
      const state = await askWorker('STATUS');
      const network = navigator.onLine ? '' : '当前离线。';
      const summary = !state.coreComplete
        ? '文字版未保存，请联网重试。'
        : state.complete ? '离线版已保存。' : '文字版已保存，可继续保存照片。';
      status.textContent = `${network}${summary} 版本 ${state.version}。`;
      save.textContent = state.complete ? '检查离线版' : '保存离线版（约 15 MB）';
    } catch {
      status.textContent = '无法确认状态，请下载文字版。';
    }
  }

  function offerUpdate() {
    update.hidden = !registration?.waiting;
    if (!update.hidden) update.textContent = '更新并刷新';
  }

  function offlineReady() {
    offerUpdate();
    save.disabled = false;
    showStatus();
  }

  save.addEventListener('click', async () => {
    saving = true;
    save.disabled = true;
    update.disabled = true;
    status.textContent = '正在保存…';
    try {
      await askWorker('SAVE_ALL', ({ done, total }) => {
        status.textContent = `正在保存照片 ${done}/${total}…`;
      });
      // A persistence request is best-effort; browsers may still evict storage.
      await navigator.storage?.persist?.().catch(() => false);
    } catch {
      const state = await askWorker('STATUS').catch(() => null);
      status.textContent = state?.coreComplete
        ? '照片未保存完整，请联网重试。'
        : '离线版未保存完整，请联网重试。';
      return;
    } finally {
      saving = false;
      save.disabled = false;
      update.disabled = false;
    }
    await showStatus();
  });

  update.addEventListener('click', () => {
    if (!registration?.waiting) return;
    reloading = true;
    update.disabled = true;
    status.textContent = '正在更新…';
    registration.waiting.postMessage({ type: 'ACTIVATE_UPDATE' });
  });

  if (!('serviceWorker' in navigator) || !window.isSecureContext) {
    status.textContent = '此浏览器不支持离线保存，请下载文字版。';
    return;
  }

  navigator.serviceWorker.addEventListener('controllerchange', () => {
    // Updates may be accepted in another tab; its new cache needs a new page too.
    if (reloading || controlled) window.location.reload();
    else {
      controlled = true;
      offlineReady();
    }
  });
  window.addEventListener('online', () => { showStatus(); checkForUpdate(); });
  window.addEventListener('offline', showStatus);
  window.addEventListener('pageshow', checkForUpdate);
  window.addEventListener('focus', checkForUpdate);
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') checkForUpdate();
  });

  navigator.serviceWorker.register('./sw.js', { updateViaCache: 'none' }).then(async (reg) => {
    registration = reg;
    offerUpdate();
    const watchInstall = () => {
      const worker = reg.installing;
      worker?.addEventListener('statechange', () => {
        offerUpdate();
        if (worker.state === 'redundant') {
          status.textContent = reg.active
            ? '更新失败，仍使用旧版本。'
            : '离线保存失败，请联网重试。';
        }
      });
    };
    watchInstall();
    reg.addEventListener('updatefound', watchInstall);
    // ready never rejects when installation fails (for example a full disk).
    let readyTimeout;
    try {
      await Promise.race([
        navigator.serviceWorker.ready,
        new Promise((_, reject) => { readyTimeout = setTimeout(() => reject(new Error('install timeout')), 30000); }),
      ]);
    } finally {
      clearTimeout(readyTimeout);
    }
    offlineReady();
    checkForUpdate();
  }).catch(() => {
    status.textContent = '离线功能未就绪，请联网重试。';
  });
})();
