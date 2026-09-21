(() => {
  const status = document.querySelector('#offlineStatus');
  const save = document.querySelector('#saveOffline');
  const update = document.querySelector('#updateOffline');
  let registration;
  let saving = false;
  let reloading = false;
  let controlled = Boolean(navigator.serviceWorker?.controller);

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
        ? '文字缓存不完整，请联网后重新保存；也可先下载文字备用版。'
        : state.complete ? '全部行程和照片已保存，可离线打开。' : '文字行程已可离线查看；点下方按钮保存全部照片。';
      status.textContent = `${network}${summary}版本 ${state.version}。`;
      save.textContent = state.complete ? '重新检查离线保存' : '保存离线行程和照片（约 15 MB）';
    } catch {
      status.textContent = '无法确认离线保存状态，请下载文字备用版。';
    }
  }

  function offerUpdate() {
    update.hidden = !registration?.waiting;
    if (!update.hidden) update.textContent = '有新行程，更新并刷新';
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
    status.textContent = '正在保存，请保持页面打开…';
    try {
      await askWorker('SAVE_ALL', ({ done, total }) => {
        status.textContent = `正在保存照片 ${done}/${total}，请保持页面打开…`;
      });
      // A persistence request is best-effort; browsers may still evict storage.
      await navigator.storage?.persist?.().catch(() => false);
    } catch {
      const state = await askWorker('STATUS').catch(() => null);
      status.textContent = state?.coreComplete
        ? '照片未全部保存。文字行程仍可使用；联网后重试，或下载文字备用版。'
        : '离线文件未完整保存。请联网重试，或下载文字备用版。';
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
    status.textContent = '正在切换到已保存的新版本…';
    registration.waiting.postMessage({ type: 'ACTIVATE_UPDATE' });
  });

  if (!('serviceWorker' in navigator) || !window.isSecureContext) {
    status.textContent = '此浏览器无法保存离线网页，请下载文字备用版到手机文件。';
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
  window.addEventListener('online', showStatus);
  window.addEventListener('offline', showStatus);

  navigator.serviceWorker.register('./sw.js', { updateViaCache: 'none' }).then(async (reg) => {
    registration = reg;
    offerUpdate();
    const watchInstall = () => {
      const worker = reg.installing;
      worker?.addEventListener('statechange', () => {
        offerUpdate();
        if (worker.state === 'redundant') {
          status.textContent = reg.active
            ? '新版本暂未保存成功，仍使用已保存的行程；联网后刷新重试。'
            : '离线保存未完成，请联网刷新重试，或下载文字备用版。';
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
    reg.update().catch(() => {});
  }).catch(() => {
    status.textContent = '离线功能暂未就绪，请联网重试；也可先下载文字备用版。';
  });
})();
