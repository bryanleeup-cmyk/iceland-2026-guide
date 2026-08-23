(function applyRef32Patch() {
  const jianhuang = data.groups.find((group) => group.id === "huangjian");
  if (jianhuang) {
    jianhuang.icelandWindow.end = "2026-10-06T19:20:00";
    jianhuang.icelandWindow.label = "09/29 07:50 → 10/06 19:20";
    jianhuang.tags = ["2 人", "最早到冰岛", "10/06 晚飞米兰"];
    jianhuang.summary = "最早到冰岛，可在朋友到达前先玩非核心路线。10/06 11:00 已订 Sky Lagoon 温泉团，预计 14:00 回城后前往机场，19:20 从雷克雅未克凯夫拉维克机场飞米兰转里斯本。";
    jianhuang.flights.icelandReturn = [
      "10/06 雷克雅未克凯夫拉维克机场 19:20 → 10/07 米兰马尔彭萨机场 01:30｜维兹航空马耳他 W46454",
      "10/07 米兰马尔彭萨机场 T2 06:30 → 里斯本机场 T1 08:30｜易捷航空 U23873",
    ];
    jianhuang.flights.afterIceland = [
      "09/28 巴黎短停：日落塞纳河游船 + 20:00 埃菲尔铁塔亮灯 / 闪灯",
      "10/06 11:00-14:00 Sky Lagoon 温泉团，之后回城并前往机场",
      "10/07 里斯本半日城市步行",
      "10/07 晚住 Cabinn Metro Hotel，10/08 从哥本哈根机场飞北京",
    ];
  }

  data.overlap.end = "2026-10-06T19:20:00";
  data.overlap.label = "冰岛六人都在：10/03 15:10 后 - 10/06 19:20 前";
  data.overlap.context = "这是唯一冰岛六人全部在的时间段。10/03 晚六个人报追极光团；10/04-10/05 六人一起走南岸两日 + 蓝冰洞小巴团，全程无人自驾；10/06 建皇上午去 Sky Lagoon，14:00 左右回城后前往机场，19:20 从凯夫拉维克机场离开冰岛。";

  data.hotel.checkout = "各组按离开冰岛时间退房：建皇 10/06 白天退房、晚上离开；海港组 10/08 离开；彤燕组 10/10 清晨离开";
  data.hotel.notes = data.hotel.notes.map((note) =>
    note.includes("建皇 10/06 08:00")
      ? "建皇 10/06 19:20 从雷克雅未克凯夫拉维克机场起飞，白天可先做雷克雅未克城市轻量游或机场方向半日安排；傍晚提前去机场。"
      : note,
  );

  const allRole = data.roleViews.find((role) => role.id === "all");
  if (allRole) {
    allRole.facts[0] = ["共同窗口", "10/03 15:10-10/06 19:20", "六个人真正一起在冰岛"];
    allRole.focusDays[2] = ["10/05", "蓝冰洞第二天", "晚上回雷克雅未克，建皇准备次日晚航班。"];
    allRole.focusDays[3] = ["10/06+", "建皇晚飞，四人继续", "建皇上午去 Sky Lagoon，14:00 左右回城后前往机场；海港组 + 彤燕组优先补斯奈山、雷克雅内斯半岛或蓝湖。"];
  }

  const role = data.roleViews.find((item) => item.id === "jianhuang");
  if (role) {
    role.notes[0] = "重点看：9/26 里斯本郊区海边团、9/27 里斯本到波尔图大巴、9/28 波尔图飞巴黎奥利机场转冰岛、9/29 史费拉浮潜 + 雷克雅未克市区、09/30 Kerlingarfjoll 高地徒步已订、10/01 斯奈山半岛小团已订、10/02 兰德曼那劳卡高地超级吉普一日团已订、10/03 黄金圈下午团已订、10/04-10/05 六人南岸两日、10/06 已订 Sky Lagoon 温泉团 + 晚飞米兰、10/07 里斯本半日、10/08 哥本哈根转机。";
    role.facts[3] = ["离开冰岛", "10/06 19:20", "11:00-14:00 Sky Lagoon，回城后去机场"];
    role.focusDays[7] = ["10/05", "蓝冰洞后回雷市", "晚上回雷克雅未克，次日白天留半日待定。"];
    role.focusDays[8] = ["10/06", "已订：Sky Lagoon 温泉团（¥2135.58/2人） + 晚飞米兰", "11:00 参加 Sky Lagoon 温泉团，预计 14:00 回到雷克雅未克市区，简单逛逛后前往机场；19:20 从雷克雅未克凯夫拉维克机场飞米兰马尔彭萨。<a href=\"https://cn.adventures.is/iceland/day-tours/natural-hot-springs-tours/sky-lagoon/\" target=\"_blank\" rel=\"noreferrer\">查看团页</a>"];
    role.focusDays[9] = ["10/07", "米兰转机到里斯本", "01:30 到米兰马尔彭萨，06:30 从 T2 飞里斯本，08:30 到里斯本；白天只做半日轻量城市步行，晚上飞哥本哈根并住 Cabinn Metro Hotel。"];
    role.focusDays[10] = ["10/08", "哥本哈根转机一日游", "前一晚住 Cabinn Metro Hotel；19:05 飞北京，白天只走市区轻量线。"];
  }

  const stayBeforeLeave = data.staySchedule.find((stay) => stay.date === "10/05-10/06");
  if (stayBeforeLeave) stayBeforeLeave.detail = "预订成功：10/05 入住、10/06 退房，1 晚 / 1 间，标准双床 / 双人床房，金额 ¥988.61。南岸两日团结束后回到这里住，建皇 10/06 退房后去 Sky Lagoon，14:00 左右回城，傍晚去机场。";
  const fourStay = data.staySchedule.find((stay) => stay.date === "10/06-10/08" && stay.people.includes("海港组"));
  if (fourStay) fourStay.detail = "建皇 10/06 白天退房、傍晚离开冰岛后，海港组 + 彤燕组继续住林德城河酒店；10/04 晚南岸团含住宿除外。金额、房间数和订单号不放公开页。";

  const day1005 = data.recommendedPlan.find((day) => day.date === "10/05 周一");
  if (day1005) {
    day1005.avoid = "不要安排 10/05 晚从雷克雅未克凯夫拉维克机场离开的航班；回城可能受天气和路况影响。建皇 10/06 晚航班离开，白天安排保持轻量。";
  }
  const day1006 = data.recommendedPlan.find((day) => day.date === "10/06 周二");
  if (day1006) {
    day1006.status = "建皇 19:20 从雷克雅未克凯夫拉维克机场飞米兰转里斯本";
    day1006.plan = "建皇 11:00-14:00 参加已订 Sky Lagoon 温泉团，回雷克雅未克市区简单逛逛后前往凯夫拉维克机场。海港组 + 彤燕组四个人开始包车继续冰岛路线。";
    day1006.avoid = "建皇这天不再排远距离长线，避免误晚航班；四人包车也不要从机场直接冲太远，司机/向导路线要提前确认。";
    day1006.stay = "建皇白天从林德城河酒店退房，参加 Sky Lagoon 后去机场，10/07 清晨抵达里斯本；海港组 + 彤燕组继续住林德城河酒店。";
  }

  const routeTwo = data.coreDays.find((day) => day.date === "10/04-10/05");
  if (routeTwo) {
    routeTwo.why = "蓝冰洞是 10 月到 4 月的季节性重点项目，跟专业冰川向导进入更稳妥；晚上回雷克雅未克，10/06 建皇白天还能保留半日机动时间。";
    routeTwo.details[2] = ["晚上", "回林德城河酒店住 10/05 晚；建皇提前确认 10/06 傍晚去雷克雅未克凯夫拉维克机场的交通。"];
  }
  const routeAfter = data.coreDays.find((day) => day.date === "10/06-10/08");
  if (routeAfter) routeAfter.details[0] = ["10/06", "建皇 11:00-14:00 去 Sky Lagoon，回城后傍晚飞米兰转里斯本；四个人按天气决定斯奈山、雷克雅内斯半岛 / 蓝湖，或雷克雅未克周边轻量线；晚上回林德城河酒店。"];

  const plan = data.personPlans.find((person) => person.id === "jianhuang");
  if (plan) {
    const replaceDay = (date, title, detail) => {
      const index = plan.days.findIndex((day) => day[0] === date);
      if (index >= 0) plan.days[index] = [date, title, detail];
    };
    replaceDay("10/05", "已订：南岸两日团第二天 + 蓝冰洞", "继续已订的 Nice Travel 南岸两日团：看蓝冰洞、杰古沙龙冰河湖和钻石沙滩，晚上回雷克雅未克；提前确认 10/06 傍晚去雷克雅未克凯夫拉维克机场的交通。<a href=\"https://nicetravel.is/iceland-tours/2-day-south-coast-tour-blue-ice-cave-jokulsarlon-black-beach-waterfalls/\" target=\"_blank\" rel=\"noreferrer\">查看团页</a>");
    replaceDay("10/06", "已订：Sky Lagoon 温泉团（¥2135.58/2人） → 米兰转机", "上午 11:00 去 Sky Lagoon 泡温泉，预计 14:00 回到雷克雅未克市区，简单逛逛后前往机场；19:20 从雷克雅未克凯夫拉维克机场起飞，10/07 01:30 到米兰马尔彭萨机场，航班维兹航空马耳他 W46454。<a href=\"https://cn.adventures.is/iceland/day-tours/natural-hot-springs-tours/sky-lagoon/\" target=\"_blank\" rel=\"noreferrer\">查看团页</a>");
    replaceDay("10/07", "米兰 → 里斯本半日 → 哥本哈根", "06:30 从米兰马尔彭萨机场 T2 起飞，08:30 落地里斯本机场 T1，航班易捷航空 U23873。白天只做里斯本半日轻量城市步行，市区收尾、吃饭、买伴手礼；18:15 从里斯本机场 T1 起飞，23:00 落地哥本哈根机场 T3。晚上入住 Cabinn Metro Hotel，地址 Arne Jacobsens Allé 2，电话 +4532465700。");
    replaceDay("10/08", "哥本哈根转机一日游 + 回北京", "10/07 23:00 已落地哥本哈根机场 T3；10/08 白天走新港、国王新广场、阿美琳堡王宫 / 小美人鱼轻量线，16:00 左右回机场更稳。19:05 从哥本哈根机场 T3 起飞，10/09 09:55 落地北京首都机场 T3。");
  }

  const spot = data.spots.find((item) => item.id === "manchester");
  if (spot) {
    Object.assign(spot, {
      id: "sky-lagoon-booked",
      category: "iceland",
      participant: "建皇组合 10/06 已订",
      transport: "Sky Lagoon 温泉团；11:00 入场，预计 14:00 回雷克雅未克市区，之后前往凯夫拉维克机场",
      city: "Sky Lagoon / 雷克雅未克 / 凯夫拉维克",
      title: "Sky Lagoon 温泉团（已订 ¥2135.58/2人）",
      image: "assets/spots/iceland/blue-lagoon-1.jpg",
      images: ["assets/spots/iceland/blue-lagoon-1.jpg", "assets/spots/iceland/reykjavik-coast.jpg", "assets/spots/iceland/reykjavik-harpa.jpg"],
      bestTime: "11:00-14:00 左右，按确认单",
      open: "已订 Sky Lagoon 温泉团，11:00 入场，预计 14:00 回到雷克雅未克市区；之后简单逛逛并前往机场。",
      sunset: "雷克雅未克 10/06 日落约 18:40",
      viewpoint: "Sky Lagoon 海水温泉、无边际池和海岸景观；回城后只安排轻量逛街。",
      notes: ["10/06 已订 Sky Lagoon 温泉团，价格 ¥2135.58/2人。", "11:00 入场，预计 14:00 左右回到雷克雅未克市区。", "从酒店退房后确认行李寄存或直接带行李转移；傍晚提前去凯夫拉维克机场，19:20 飞米兰。", "<a href=\"https://cn.adventures.is/iceland/day-tours/natural-hot-springs-tours/sky-lagoon/\" target=\"_blank\" rel=\"noreferrer\">打开 Sky Lagoon 团页</a>"],
    });
  }

  dailyVisuals["jianhuang|10/06"] = {
    city: "Sky Lagoon / 雷克雅未克 / 凯夫拉维克",
    sunrise: "07:50",
    sunset: "18:40",
    season: "10 月初泡温泉很适合放松；11:00 入场，14:00 左右回城，之后只安排轻量逛街和机场交通。",
    images: ["assets/spots/iceland/blue-lagoon-1.jpg", "assets/spots/iceland/reykjavik-coast.jpg", "assets/spots/iceland/reykjavik-harpa.jpg"],
  };

  getDailyStay = function getDailyStayRef32(personId, date, title) {
    const lisbonStay = {
      label: "住宿（¥230/人/晚）",
      name: "The Delight Hostel（欢乐青年旅馆）",
      detail: "09/25-09/27 已订经济三人间；点开可跳转谷歌地图。",
      url: "https://www.google.com/maps/search/?api=1&query=The%20Delight%20Hostel%20R.%20Tomas%20Ribeiro%2095%20Lisbon",
    };
    const portoStay = {
      label: "住宿（¥319.55/人/晚）",
      name: "ABC Hotel Porto Campanha",
      detail: "09/27 晚入住、09/28 早退房；R. de Pinto Bessa 528；电话 +351229765410。点开可跳转谷歌地图。",
      url: "https://www.google.com/maps/search/?api=1&query=ABC%20Hotel%20Porto%20Campanha%20R.%20de%20Pinto%20Bessa%20528",
    };
    const hotelStay = {
      label: "住宿",
      name: "林德城河酒店",
      detail: "冰岛期间统一住这里；点开可跳转谷歌地图。",
      url: data.hotel.mapUrl,
    };
    const hotelStayEarly = { ...hotelStay, label: "住宿（¥600.55/人/晚）" };
    const hotelStayOct03 = { ...hotelStay, label: "住宿（¥643.75/人/晚）" };
    const hotelStayOct05 = { ...hotelStay, label: "住宿（¥494.31/人/晚）" };
    const tourStay = {
      label: "住宿",
      name: "南岸两日团含住宿",
      detail: "10/04 晚住旅行团安排的冰岛南部住宿，以最终确认单为准。",
      url: "",
    };
    if (personId === "jianhuang") {
      if (["09/25", "09/26"].includes(date)) return lisbonStay;
      if (date === "09/27") return portoStay;
      if (["09/29", "09/30", "10/01", "10/02"].includes(date)) return hotelStayEarly;
      if (date === "10/03") return hotelStayOct03;
      if (date === "10/05") return hotelStayOct05;
      if (date === "10/04") return tourStay;
      if (date === "10/06") return { ...hotelStay, detail: "白天从酒店退房，11:00-14:00 去 Sky Lagoon，回城后傍晚去凯夫拉维克机场，晚飞米兰。" };
      if (date === "10/07") return { label: "住宿（¥273.86/人/晚）", name: "Cabinn Metro Hotel", detail: "10/07 晚入住、10/08 退房；Arne Jacobsens Allé 2；电话 +4532465700。点开可跳转谷歌地图。", url: "https://www.google.com/maps/search/?api=1&query=Cabinn%20Metro%20Hotel%20Arne%20Jacobsens%20All%C3%A9%202%20Copenhagen" };
    }
    if (personId === "haigang") {
      if (["10/03", "10/05", "10/06", "10/07"].includes(date)) return hotelStay;
      if (date === "10/04") return tourStay;
      if (date === "10/08") return { ...hotelStay, detail: "白天从林德城河酒店出发去雷克雅未克凯夫拉维克机场；晚上飞阿姆斯特丹。" };
    }
    if (personId === "tongyan") {
      if (["10/03", "10/05", "10/06", "10/07", "10/08", "10/09"].includes(date)) return hotelStay;
      if (date === "10/04") return tourStay;
      if (date === "10/10") return { ...hotelStay, detail: "清晨从林德城河酒店出发去雷克雅未克凯夫拉维克机场；这天离开冰岛。" };
    }
    if (personId === "niangniang" && ["09/25", "09/26"].includes(date)) return lisbonStay;
    return null;
  };

  renderRows();
  renderHighlights();
  renderHotel();
  renderMobileTimeline();
  applyRoleView(activeRoleId || "jianhuang", { persist: false });
})();
