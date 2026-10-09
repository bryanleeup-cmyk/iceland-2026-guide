(() => {
  const data = window.IcelandBillData;
  if (!data) return;

  const storageKey = "iceland-2026-bill-jianhuang-v1";
  const summaryEl = document.querySelector("#billSummary");
  const listEl = document.querySelector("#billList");
  const itineraryEl = document.querySelector("#billItinerary");
  const resultCountEl = document.querySelector("#billResultCount");
  const addToggleEl = document.querySelector("#toggleAddBill");
  const addPanelEl = document.querySelector("#addBillPanel");
  const addFormEl = document.querySelector("#addBillForm");
  const cancelAddEl = document.querySelector("#cancelAddBill");
  const formStatusEl = document.querySelector("#billFormStatus");
  const exportEl = document.querySelector("#exportBill");
  const clearLocalEl = document.querySelector("#clearLocalBills");
  let activeFilter = "all";
  let localBills = readLocalBills();

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function escapeAttr(value) {
    return escapeHtml(value).replaceAll("`", "&#096;");
  }

  function currencyInfo(currency) {
    return data.currencies[currency] || data.currencies.CNY;
  }

  function formatMoney(amount, currency) {
    if (amount === null || amount === undefined || amount === "") return "待补";
    const info = currencyInfo(currency);
    const formatted = Number(amount).toLocaleString("zh-CN", {
      minimumFractionDigits: info.decimals,
      maximumFractionDigits: info.decimals,
    });
    return `${info.symbol}${formatted}`;
  }

  function statusLabel(record) {
    if (record.status === "missing") return ["待补金额", "pending"];
    if (record.status === "refunded") return ["已退款", "refunded"];
    if (record.shareStatus === "needs-confirmation" || record.status === "needs-confirmation") return ["待确认分摊", "pending"];
    if (record.status === "local") return ["本机新增", "local"];
    return ["已确认", "confirmed"];
  }

  function allRecords() {
    return [...data.expenses, ...localBills];
  }

  function readLocalBills() {
    try {
      const parsed = JSON.parse(localStorage.getItem(storageKey) || "[]");
      return Array.isArray(parsed) ? parsed.filter((item) => item && item.status === "local") : [];
    } catch {
      return [];
    }
  }

  function writeLocalBills() {
    try {
      localStorage.setItem(storageKey, JSON.stringify(localBills));
      return true;
    } catch {
      return false;
    }
  }

  function sumByCurrency(records, field, { includeEstimate = true } = {}) {
    return records.reduce((totals, record) => {
      const amount = record[field];
      if (amount === null || amount === undefined || amount === "") return totals;
      if (!includeEstimate && record.shareStatus === "estimate") return totals;
      totals[record[field === "shareAmount" ? "shareCurrency" : "currency"] || record.currency] =
        (totals[record[field === "shareAmount" ? "shareCurrency" : "currency"] || record.currency] || 0) + Number(amount);
      return totals;
    }, {});
  }

  function moneyLines(totals) {
    const entries = Object.entries(totals);
    if (!entries.length) return `<span class="bill-kpi__line">暂无</span>`;
    return entries
      .map(([currency, amount]) => `<span class="bill-kpi__line">${escapeHtml(formatMoney(amount, currency))}</span>`)
      .join("");
  }

  function renderSummary() {
    const records = allRecords();
    const confirmed = records.filter((record) => record.status === "confirmed" || (record.status === "local" && record.amount !== null && record.amount !== undefined));
    const paidTotals = sumByCurrency(confirmed, "amount");
    const shareable = records.filter((record) => record.shareAmount !== null && record.shareAmount !== undefined && record.status !== "missing");
    const shareTotals = sumByCurrency(shareable, "shareAmount", { includeEstimate: false });
    const estimateShareTotals = sumByCurrency(shareable, "shareAmount", { includeEstimate: true });
    const pending = records.filter((record) =>
      record.status === "missing" ||
      record.status === "needs-confirmation" ||
      record.shareStatus === "needs-confirmation" ||
      (record.status === "local" && (record.amount === null || record.amount === undefined)),
    );
    const estimateCurrencies = Object.keys(estimateShareTotals).filter((currency) => estimateShareTotals[currency] !== (shareTotals[currency] || 0));
    const estimateText = estimateCurrencies.length
      ? `另有暂估应摊：${moneyLines(Object.fromEntries(estimateCurrencies.map((currency) => [currency, estimateShareTotals[currency] - (shareTotals[currency] || 0)])))}`
      : "共同费用按明确规则计算";

    summaryEl.innerHTML = `
      <article class="bill-kpi">
        <span class="bill-kpi__label">已录入订单实付</span>
        <strong class="bill-kpi__value">${moneyLines(paidTotals)}</strong>
        <p class="bill-kpi__note">只汇总已有付款金额，不做汇率换算。</p>
      </article>
      <article class="bill-kpi bill-kpi--share">
        <span class="bill-kpi__label">建皇可计算应摊</span>
        <strong class="bill-kpi__value">${moneyLines(shareTotals)}</strong>
        <p class="bill-kpi__note">${estimateText}</p>
      </article>
      <article class="bill-kpi bill-kpi--pending">
        <span class="bill-kpi__label">待补 / 待确认</span>
        <strong class="bill-kpi__value">${pending.length} 项</strong>
        <p class="bill-kpi__note">机票、餐饮、车票等未凭证金额不会被猜算。</p>
      </article>
    `;
  }

  function filteredRecords() {
    return allRecords().filter((record) => {
      if (activeFilter === "needs-confirmation") return record.status === "needs-confirmation" || record.shareStatus === "needs-confirmation";
      return activeFilter === "all" || record.status === activeFilter;
    });
  }

  function sourceLink(record) {
    if (!record.anchor) return "";
    return `<a href="./index.html?role=jianhuang#${escapeAttr(record.anchor)}">回看攻略</a>`;
  }

  function renderRecord(record) {
    const [label, tone] = statusLabel(record);
    const shareText = record.shareAmount === null || record.shareAmount === undefined
      ? record.split
      : `建皇应摊 ${formatMoney(record.shareAmount, record.shareCurrency || record.currency)} · ${record.split}`;
    const estimateChip = record.shareStatus === "estimate" ? `<span class="bill-chip bill-chip--pending">暂估</span>` : "";
    return `
      <article class="bill-row">
        <div class="bill-row__main">
          <time class="bill-row__date">${escapeHtml(record.date)}</time>
          <div class="bill-row__title">
            <h3>${escapeHtml(record.title)}</h3>
            <div class="bill-row__meta">
              <span class="bill-chip">${escapeHtml(record.category)}</span>
              <span class="bill-chip bill-chip--${tone}">${label}</span>
              ${estimateChip}
              <span class="bill-chip">${escapeHtml(shareText)}</span>
            </div>
          </div>
          <div class="bill-row__amount">
            <strong>${escapeHtml(formatMoney(record.amount, record.currency))}</strong>
            <small>${record.status === "missing" || record.status === "refunded" || record.status === "needs-confirmation" ? "暂不计入合计" : `付款总额 · ${escapeHtml(currencyInfo(record.currency).label)}`}</small>
          </div>
        </div>
        <div class="bill-row__details">
          <p>${escapeHtml(record.note || "")}</p>
          ${sourceLink(record)}
        </div>
      </article>
    `;
  }

  function renderLedger() {
    const records = filteredRecords();
    resultCountEl.textContent = `${records.length} 笔记录 · ${activeFilter === "all" ? "含待补项目" : "当前筛选"}`;
    listEl.innerHTML = records.length ? records.map(renderRecord).join("") : `<div class="bill-empty">这个筛选下还没有账目。</div>`;
  }

  function renderItinerary() {
    itineraryEl.innerHTML = data.itinerary
      .map(([date, title, anchor]) => `
        <div class="bill-itinerary__item">
          <time>${escapeHtml(date)}</time>
          <strong>${escapeHtml(title)}</strong>
          <a href="./index.html?role=jianhuang#${escapeAttr(anchor)}">查看攻略</a>
        </div>
      `)
      .join("");
  }

  function render() {
    renderSummary();
    renderLedger();
    renderItinerary();
    clearLocalEl.disabled = localBills.length === 0;
  }

  function toggleAddPanel(open) {
    const nextOpen = open ?? addPanelEl.hidden;
    addPanelEl.hidden = !nextOpen;
    addToggleEl.setAttribute("aria-expanded", String(nextOpen));
    if (nextOpen) {
      requestAnimationFrame(() => {
        const toolbar = document.querySelector(".bill-toolbar");
        const toolbarHeight = toolbar?.getBoundingClientRect().height || 0;
        const target = addPanelEl.getBoundingClientRect().top + window.scrollY - toolbarHeight - 8;
        document.documentElement.classList.add("bill-no-scroll");
        window.scrollTo(0, Math.max(0, target));
        requestAnimationFrame(() => {
          document.documentElement.classList.remove("bill-no-scroll");
          addFormEl.querySelector("input[name=title]")?.focus({ preventScroll: true });
        });
      });
    }
  }

  function onAddBill(event) {
    event.preventDefault();
    const form = new FormData(addFormEl);
    const title = String(form.get("title") || "").trim();
    const date = String(form.get("date") || "").trim();
    const amountText = String(form.get("amount") || "").trim();
    const shareText = String(form.get("shareAmount") || "").trim();
    if (!title || !date) {
      formStatusEl.textContent = "请至少填写日期和项目。";
      return;
    }
    const amount = amountText === "" ? null : Number(amountText);
    const shareAmount = shareText === "" ? null : Number(shareText);
    if ((amount !== null && (!Number.isFinite(amount) || amount < 0)) || (shareAmount !== null && (!Number.isFinite(shareAmount) || shareAmount < 0))) {
      formStatusEl.textContent = "金额请填写 0 或以上的数字。";
      return;
    }
    const currency = String(form.get("currency") || "CNY");
    localBills.push({
      id: `local-${Date.now()}`,
      date,
      dateKey: date,
      category: String(form.get("category") || "其他"),
      title,
      amount,
      currency,
      shareAmount,
      shareCurrency: currency,
      status: "local",
      split: shareAmount === null ? "建皇应摊待补" : "按本机填写的金额",
      note: String(form.get("note") || "") || "本机新增账目。",
      anchor: "",
    });
    if (!writeLocalBills()) {
      formStatusEl.textContent = "浏览器未能保存，请直接导出 CSV 留档。";
      return;
    }
    addFormEl.reset();
    formStatusEl.textContent = "已保存到本机。";
    activeFilter = "local";
    document.querySelectorAll(".bill-filter").forEach((button) => button.classList.toggle("is-active", button.dataset.filter === activeFilter));
    render();
  }

  function csvCell(value) {
    return `"${String(value ?? "").replaceAll('"', '""')}"`;
  }

  function exportCsv() {
    const rows = [
      ["日期", "类别", "项目", "付款总额", "币种", "建皇应摊", "状态", "分摊说明", "备注"],
      ...allRecords().map((record) => [
        record.date,
        record.category,
        record.title,
        record.amount ?? "",
        record.currency,
        record.shareAmount ?? "",
        statusLabel(record)[0],
        record.split,
        record.note,
      ]),
    ];
    const blob = new Blob(["\uFEFF", rows.map((row) => row.map(csvCell).join(",")).join("\r\n")], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "2026国庆-建皇结算.csv";
    link.click();
    URL.revokeObjectURL(url);
  }

  document.querySelectorAll(".bill-filter").forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      document.querySelectorAll(".bill-filter").forEach((item) => item.classList.toggle("is-active", item === button));
      renderLedger();
    });
  });
  addToggleEl.addEventListener("click", () => toggleAddPanel());
  cancelAddEl.addEventListener("click", () => toggleAddPanel(false));
  addFormEl.addEventListener("submit", onAddBill);
  exportEl.addEventListener("click", exportCsv);
  clearLocalEl.addEventListener("click", () => {
    if (!localBills.length) return;
    if (!window.confirm("清空当前浏览器里新增的全部账目？导出的 CSV 不会受影响。")) return;
    localBills = [];
    writeLocalBills();
    activeFilter = "all";
    document.querySelectorAll(".bill-filter").forEach((button) => button.classList.toggle("is-active", button.dataset.filter === "all"));
    render();
  });
  render();
})();
