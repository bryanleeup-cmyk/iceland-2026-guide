/* Aggregated personal ledger for the post-trip memory edition. */
(function exposeIcelandBillData() {
  const memory = window.TravelMemoryData?.jianhuang;
  if (!memory) return;

  window.IcelandBillData = {
    version: "2",
    title: "黄建皇 · 欧洲旅行开销归档",
    subtitle: "94 笔个人开销已全部计入；页面按大类和日期归并，不展开买水、单次用餐等零碎流水。",
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
      split: "黄建皇个人最终承担金额",
      note: category.id === "daily"
        ? "包含餐饮、购物、超市、当地交通、行李与已确认的朋友代付结算；Icewear 退税 -¥72 已在本类中抵扣。"
        : "由修订后的个人费用总账归并，已排除退款、预约还款、他人购买和重复项。",
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
