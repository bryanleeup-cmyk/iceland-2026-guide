(() => {
  const button = document.querySelector("#refreshWeather");
  const status = document.querySelector("#weatherRefreshStatus");
  if (!button || !status) return;
  if (typeof refreshTravelWeather !== "function") {
    status.textContent = "暂时无法刷新，已保存的预报仍可查看。";
    return;
  }
  const stamp = (value) => weatherBeijingTime(value).slice(5);
  const times = () => {
    const snapshot = getWeatherSnapshot();
    if (!snapshot) return "暂无已保存的预报";
    const weather = stamp(weatherQueryTime(snapshot, "weather"));
    const aurora = stamp(weatherQueryTime(snapshot, "aurora"));
    return weather === aurora ? `查询 ${weather} 北京时间` : `天气 ${weather} 北京时间 · 极光 ${aurora} 北京时间`;
  };
  button.disabled = false;
  status.textContent = `${times()} · 点击更新全部组合`;
  button.addEventListener("click", async () => {
    if (button.disabled) return;
    button.disabled = true;
    button.setAttribute("aria-busy", "true");
    button.textContent = "正在刷新…";
    status.textContent = "正在查询天气与极光，当前行程可继续阅读…";
    try {
      const result = await refreshTravelWeather();
      const updated = result.updated.length;
      // Only rebuild when a provider returned newer data; this keeps open details and scroll
      // position untouched on an all-failed refresh. When rebuilding, restore open cards after
      // the dashboard's deferred render has settled so mobile reading does not jump or collapse.
      if (updated) {
        const currentRole = activeRoleId;
        const scrollY = window.scrollY;
        const expandedCards = new Set(
          [...document.querySelectorAll("#roleDashboard details.daily-weather[open]")]
            .map((element) => `${element.dataset.weatherRole}|${element.dataset.weatherDate}`),
        );
        applyRoleView(currentRole, { persist: false });
        const restoreDashboardState = () => {
          document.querySelectorAll("#roleDashboard details.daily-weather").forEach((element) => {
            if (expandedCards.has(`${element.dataset.weatherRole}|${element.dataset.weatherDate}`)) element.open = true;
          });
          window.scrollTo(0, scrollY);
        };
        requestAnimationFrame(() => {
          restoreDashboardState();
          window.setTimeout(restoreDashboardState, 0);
          window.setTimeout(restoreDashboardState, 120);
        });
      }
      const summary = updated === 2 ? "天气与极光已更新" : updated === 1
        ? `${result.updated[0] === "weather" ? "天气" : "极光"}已更新，${result.failed[0] === "weather" ? "天气" : "极光"}暂未更新，保留上次数据`
        : "刷新未成功，已保留上次数据；请联网重试";
      status.textContent = `${summary}。${times()}${updated && !result.persisted ? "；本次仅在当前页面可用，未能存入浏览器" : ""}`;
    } catch {
      status.textContent = `刷新未成功，已保留上次数据；请联网重试。${times()}`;
    } finally {
      button.disabled = false;
      button.removeAttribute("aria-busy");
      button.textContent = "刷新天气与极光";
    }
  });
})();
