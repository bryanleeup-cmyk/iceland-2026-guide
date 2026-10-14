/* Aggregated personal ledger for the post-trip memory edition. */
(function exposeIcelandBillData() {
  const memory = window.TravelMemoryData?.jianhuang;
  if (!memory) return;

  window.IcelandBillData = {
    version: "2",
    title: "黄建皇 · 欧洲旅行开销明细",
    subtitle: "94 笔开销，按类别和日期汇总。",
    currencies: {
      CNY: { label: "人民币", symbol: "¥", decimals: 2 },
      EUR: { label: "欧元", symbol: "€", decimals: 2 },
      ISK: { label: "冰岛克朗", symbol: "ISK ", decimals: 0 },
    },
    expenses: memory.categories.map((category) => ({
      id: `category-${category.id}`,
      date: "全程",
      dateKey: "09/23",
      category: category.label,
      title: `${category.label} · ${category.count} 笔`,
      amount: category.amount,
      currency: "CNY",
      shareAmount: category.amount,
      shareCurrency: "CNY",
      status: "confirmed",
      split: "个人金额",
      note: category.id === "daily"
        ? "餐饮、购物、超市、当地交通和朋友代付；已扣除 Icewear 退税 ¥72。"
        : "已排除退款、还款、他人购买和重复项。",
      anchor: "tripMemory",
    })),
    itinerary: Object.entries(memory.days)
      .filter(([date]) => date !== "09/23")
      .map(([date, day]) => [
        date,
        `${day.place} · ${day.memory} · ${Number(day.total).toLocaleString("zh-CN", { style: "currency", currency: "CNY" })}`,
        `day-jianhuang-${date.replace("/", "-")}`,
      ]),
  };
})();
