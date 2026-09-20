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
    role.focusDays[0] = ["09/26", "辛特拉海岸 + 两张已购门票", "雷加莱拉庄园 14:30 固定入场；佩纳公园（仅花园、不含宫殿）无时段票，16:45 左右入园；辛特拉王宫改为可选外观停留，确保 20:30 回里斯本市区晚餐。"];
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
    replaceDay(
      "09/25",
      "北京 → 伦敦中转 → 里斯本",
      "13:35 从北京首都机场 T3 起飞，经伦敦希思罗机场 T2 中转后，21:35 抵达里斯本机场 T1。落地后入住 The Delight Hostel 豪华四人间（带私人浴室）：1 张双人床 + 2 张单人床；建皇（两人）、龙龙、娘娘共 4 人入住；09/25 入住、09/27 退房，共 2 晚。23:30 已预约 <a href=\"https://www.google.com/maps/search/?api=1&query=Alfama8848%20Comida%20Portuguese%20Tapas%20and%20Bar%20Lisbon\" target=\"_blank\" rel=\"noreferrer\">Alfama8848 Comida Portuguese, Tapas and Bar</a>，4 人用餐。"
    );
    replaceDay(
      "09/26",
      "里斯本郊区海边一日游",
      "建皇（两人）、龙龙、娘娘四人走里斯本郊区海边一日游。09:00 从里斯本市区出发；10:00 抵达 <a href=\"https://www.google.com/maps/search/?api=1&query=Boca%20do%20Inferno%20Cascais\" target=\"_blank\" rel=\"noreferrer\">地狱之口</a>；10:50 到 <a href=\"https://www.google.com/maps/search/?api=1&query=Cabo%20da%20Roca%20Colares\" target=\"_blank\" rel=\"noreferrer\">罗卡角</a>。午餐按当天情况二选一：若选 12:00 <a href=\"https://www.google.com/maps/search/?api=1&query=Adega%20das%20Azenhas%20Avenida%20Comiss%C3%A3o%20de%20Melhoramentos%201928%201%20Colares%20Lisbon\" target=\"_blank\" rel=\"noreferrer\">Adega das Azenhas</a>（4 人），11:35 左右从罗卡角出发；若选 12:30 <a href=\"https://www.google.com/maps/search/?api=1&query=%C3%81gua%20e%20Sal%20Largo%20do%20Padre%20Ant%C3%B3nio%205%20Colares%20Lisbon\" target=\"_blank\" rel=\"noreferrer\">Água e Sal</a>（4 人、Terrace），则在罗卡角多留至约 12:05。两种方案均以 14:20 前抵达 <a href=\"https://www.google.com/maps/search/?api=1&query=Quinta%20da%20Regaleira%20Sintra\" target=\"_blank\" rel=\"noreferrer\">雷加莱拉庄园</a> 为准：已购 4 张票，14:30 固定入场，最晚 18:30 闭园。16:10 左右离开，16:45 左右到 <a href=\"https://www.google.com/maps/search/?api=1&query=Parque%20da%20Pena%20Sintra\" target=\"_blank\" rel=\"noreferrer\">佩纳公园</a>；已购 4 张花园票（不含宫殿、无时段），18:10 左右离园，公园 19:00 闭园。原先的辛特拉王宫不再安排入内，以免影响 14:30 固定入场；若午餐和车程均提前，只作外观拍照。18:10 后返回里斯本市区，20:30 已订 <a href=\"https://www.google.com/maps/search/?api=1&query=Frade%20dos%20Mares%20Avenida%20Dom%20Carlos%20I%2055A%20Lisbon\" target=\"_blank\" rel=\"noreferrer\">Frade Dos Mares</a>（4 人，桌位至 22:30）；当晚继续住 The Delight Hostel 豪华四人间。"
    );
    replaceDay(
      "09/27",
      "里斯本 → 波尔图",
      "早上和龙龙、娘娘一起坐约 3.5 小时大巴从里斯本到波尔图；12:00 已订 <a href=\"https://www.google.com/maps/search/?api=1&query=Meia-Nau%20Porto\" target=\"_blank\" rel=\"noreferrer\">Meia-Nau Porto</a> 午餐（3 人，姓名 Hector Pei；需前往 Porto 门店，迟到宽限 10 分钟）。下午玩老城河岸、路易一世大桥和杜罗河边。娘娘当晚飞往阿姆斯特丹；21:00 左右办理入住波尔图盖亚美居酒店（Mercure Porto Gaia Hotel）：标准双人床房（带加床），1 间 1 晚；订单入住 09/27、退房 09/28，建皇（两人）和龙龙共 3 人入住，实付款 ¥544.94。"
    );
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
      image: "assets/spots/iceland/blue-lagoon-1.webp",
      images: ["assets/spots/iceland/blue-lagoon-1.webp", "assets/spots/iceland/reykjavik-coast.webp", "assets/spots/iceland/reykjavik-harpa.webp"],
      bestTime: "11:00-14:00 左右，按确认单",
      open: "已订 Sky Lagoon 温泉团，11:00 入场，预计 14:00 回到雷克雅未克市区；之后简单逛逛并前往机场。",
      sunset: "雷克雅未克 10/06 日落约 18:40",
      viewpoint: "Sky Lagoon 海水温泉、无边际池和海岸景观；回城后只安排轻量逛街。",
      notes: ["10/06 已订 Sky Lagoon 温泉团，价格 ¥2135.58/2人。", "11:00 入场，预计 14:00 左右回到雷克雅未克市区。", "从酒店退房后确认行李寄存或直接带行李转移；傍晚提前去凯夫拉维克机场，19:20 飞米兰。", "<a href=\"https://cn.adventures.is/iceland/day-tours/natural-hot-springs-tours/sky-lagoon/\" target=\"_blank\" rel=\"noreferrer\">打开 Sky Lagoon 团页</a>"],
    });
  }

  const niangniangPlan = data.personPlans.find((person) => person.id === "niangniang");
  if (niangniangPlan) {
    const arrivalDay = niangniangPlan.days.find((day) => day[0] === "09/25");
    if (arrivalDay) {
      arrivalDay[2] = "19:40 从阿姆斯特丹史基浦机场起飞，21:50 落地里斯本机场 T1；飞行 2 小时 10 分，无中转。落地后与建皇组合、龙龙入住已订的 The Delight Hostel 豪华四人间。23:30 已预约 <a href=\"https://www.google.com/maps/search/?api=1&query=Alfama8848%20Comida%20Portuguese%20Tapas%20and%20Bar%20Lisbon\" target=\"_blank\" rel=\"noreferrer\">Alfama8848 Comida Portuguese, Tapas and Bar</a>，4 人用餐。";
    }
    const coastalDay = niangniangPlan.days.find((day) => day[0] === "09/26");
    if (coastalDay) {
      coastalDay[2] = "和建皇组合、龙龙一起报名这个专业路线：09:00 从里斯本市区出发，10:00 地狱之口，10:50 罗卡角。午餐有两个已订备选，按当天情况二选一：12:00 <a href=\"https://www.google.com/maps/search/?api=1&query=Adega%20das%20Azenhas%20Avenida%20Comiss%C3%A3o%20de%20Melhoramentos%201928%201%20Colares%20Lisbon\" target=\"_blank\" rel=\"noreferrer\">Adega das Azenhas</a>（4 人）或 12:30 <a href=\"https://www.google.com/maps/search/?api=1&query=%C3%81gua%20e%20Sal%20Largo%20do%20Padre%20Ant%C3%B3nio%205%20Colares%20Lisbon\" target=\"_blank\" rel=\"noreferrer\">Água e Sal</a>（4 人、Terrace）。14:30 凭已购 4 张票固定入场雷加莱拉庄园，最晚 18:30 闭园；16:45 左右进入已购花园票（不含宫殿、无时段）的佩纳公园，19:00 闭园。辛特拉王宫改为可选外观拍照，不安排入内。18:10 后回里斯本市区，20:30 已订 <a href=\"https://www.google.com/maps/search/?api=1&query=Frade%20dos%20Mares%20Avenida%20Dom%20Carlos%20I%2055A%20Lisbon\" target=\"_blank\" rel=\"noreferrer\">Frade Dos Mares</a>（4 人，桌位至 22:30）。";
    }
    const portoDay = niangniangPlan.days.find((day) => day[0] === "09/27");
    if (portoDay) {
      portoDay[2] = "早上和建皇组合、龙龙一起坐约 3.5 小时大巴去波尔图；12:00 已订 <a href=\"https://www.google.com/maps/search/?api=1&query=Meia-Nau%20Porto\" target=\"_blank\" rel=\"noreferrer\">Meia-Nau Porto</a> 午餐（3 人，姓名 Hector Pei；Porto 门店，迟到宽限 10 分钟）。下午玩波尔图老城、路易一世大桥、杜罗河边。20:50 从波尔图弗朗西斯科卡内罗机场起飞，09/28 00:25 落地阿姆斯特丹史基浦机场，航班荷兰泛航 HV6004；飞行 2 小时 35 分，无中转。";
    }
  }

  const sintraDay = data.spots.find((spot) => spot.id === "sintra-day-tour");
  if (sintraDay) {
    sintraDay.bestTime = "09:00 出发；14:30 雷加莱拉固定入场；16:45 左右佩纳公园入园";
    sintraDay.open = "雷加莱拉庄园已购 4 张 14:30 入场票，18:30 闭园；佩纳公园已购 4 张花园票（不含宫殿、无时段），19:00 闭园。";
    sintraDay.notes = [
      "09:00 里斯本市区出发 → 10:00 地狱之口 → 10:50 罗卡角；午餐按 12:00 Adega das Azenhas 或 12:30 Água e Sal 二选一调整罗卡角停留。",
      "14:20 前到雷加莱拉庄园，14:30 固定入场；16:10 左右离开，16:45 左右进入佩纳公园。辛特拉王宫改为可选外观拍照，不安排入内。",
      "18:10 左右离开佩纳公园返回里斯本市区；20:30 Frade Dos Mares 晚餐（4 人，桌位至 22:30）。",
    ];
  }

  dailyVisuals["jianhuang|10/06"] = {
    city: "Sky Lagoon / 雷克雅未克 / 凯夫拉维克",
    sunrise: "07:50",
    sunset: "18:40",
    season: "10 月初泡温泉很适合放松；11:00 入场，14:00 左右回城，之后只安排轻量逛街和机场交通。",
    images: ["assets/spots/iceland/blue-lagoon-1.webp", "assets/spots/iceland/reykjavik-coast.webp", "assets/spots/iceland/reykjavik-harpa.webp"],
  };

  getDailyStay = function getDailyStayRef32(personId, date, title) {
    const lisbonStay = {
      label: "住宿（¥223.43/人/晚）",
      name: "The Delight Hostel（欢乐青年旅馆）",
      detail: "09/25 14:00 后入住、09/27 11:30 前退房；豪华四人间（带私人浴室），1 间 / 2 晚，1 张双人床 + 2 张单人床；建皇（两人）、龙龙、娘娘共 4 人入住。实付总价 ¥1,787.44，按 4 人、2 晚计算为 ¥223.43/人/晚。点开可跳转谷歌地图。",
      url: "https://www.google.com/maps/search/?api=1&query=The%20Delight%20Hostel%20R.%20Tomas%20Ribeiro%2095%20Lisbon",
    };
    const portoStay = {
      label: "住宿（¥181.65/人/晚）",
      name: "波尔图盖亚美居酒店（Mercure Porto Gaia Hotel）",
      detail: "09/27 晚入住（计划 21:00 左右办理入住）、09/28 退房；标准双人床房（带加床），1 间 1 晚；建皇（两人）和龙龙共 3 人入住，实付款 ¥544.94。点开可跳转谷歌地图。",
      url: "https://www.google.com/maps/search/?api=1&query=Mercure%20Porto%20Gaia%20Hotel",
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

/* Haigang shares Tongtong itinerary through 10/07. */
(function applyTongtongUpdate() {
  const googleMaps = (query) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  const parisHotel = {
    name: "宜必思克利希中心市政厅酒店（Ibis Clichy Centre Mairie）",
    mapUrl: googleMaps("Ibis Clichy Centre Mairie, 4 Rue Marcellin Berthelot, 92110 Clichy, France"),
  };
  const parisBusStop = {
    name: "Paris Pershing–Porte Maillot 上车点",
    mapUrl: googleMaps("24 Boulevard Pershing, 75017 Paris, France"),
  };
  const parisBusStopLink =
    `<a href="${parisBusStop.mapUrl}" target="_blank" rel="noopener noreferrer">` +
    "Paris Pershing–Porte Maillot 上车点（24 Boulevard Pershing, 75017 Paris）" +
    "</a>";

  const tongtong = data.groups.find((group) => group.id === "tongyan");
  if (tongtong) {
    tongtong.name = "2号出发的机票：彤彤";
    tongtong.shortName = "彤彤";
    tongtong.tags = ["彤彤 + 龙龙", "10/03 下午到", "10/10 布鲁塞尔收尾"];
    tongtong.summary = "10/03 下午约 16:00 到雷克雅未克；随后按截图补入南岸两日、兰德曼那劳卡、斯奈山、黄金圈、温泉与布鲁塞尔收尾。";
    tongtong.flights.europeLongHaul = [
      "10/02 深圳宝安机场 T3 01:30 → 巴黎戴高乐机场 T1 08:10｜海南航空 HU757",
      "10/11 布鲁塞尔机场 11:40 → 10/12 深圳宝安机场 T3 05:00｜海南航空 HU760",
    ];
    tongtong.flights.icelandOutbound = [
      "10/03 巴黎 Pershing–Porte Maillot 06:30 → 布鲁塞尔南站（BlaBlaCar Bus，€8.99）",
      "10/03 布鲁塞尔机场 13:50 → 雷克雅未克凯夫拉维克机场 15:10｜冰岛航空 FI555",
    ];
    tongtong.flights.afterIceland = ["10/11 布鲁塞尔 → 深圳｜海南航空 HU760"];
  }

  const tongtongRole = data.roleViews.find((role) => role.id === "tongyan");
  if (tongtongRole) {
    tongtongRole.name = "彤彤";
    tongtongRole.title = "我是彤彤";
    tongtongRole.summary = "10/02 抵达巴黎，10/03 先坐大巴到布鲁塞尔、再飞冰岛；下午约 16:00 到雷克雅未克，后续行程按截图已补齐。";
    tongtongRole.notes = [
      "重点看：10/02 深圳飞巴黎、与龙龙住巴黎酒店；10/03 清晨从 Paris Pershing–Porte Maillot 坐大巴到布鲁塞尔南站，再按原计划飞冰岛，下午约 16:00 到雷克雅未克。",
      "Paris Pershing–Porte Maillot 上车点和巴黎酒店名称都可直接点开地图。",
      "10/04-10/10 的人数、集合点、时段和用餐提醒均按你最新截图记录；10/09 住机场附近，10/10 在布鲁塞尔市中心 Hilton 收尾。",
    ];
    tongtongRole.facts = [
      ["巴黎抵达", "10/02 08:10", "HU757 抵达巴黎戴高乐 T1"],
      ["大巴", "10/03 06:30", "Paris Pershing–Porte Maillot → Brussels Midi"],
      ["到雷市", "10/03 约 16:00", "入住林德城河酒店"],
      ["冰岛后段", "10/06-10/09", "5 人 → 3 人，按截图走一日团与温泉"],
      ["布鲁塞尔", "10/10", "市中心 Hilton 附近半日游"],
    ];
    tongtongRole.focusDays = [
      ["10/02", "巴黎一日游 + 巴黎住宿", "08:10 抵达巴黎戴高乐机场 T1。先到 Ibis Clichy Centre Mairie 酒店寄存行李；上午吃早午餐。之后乘坐塞纳河游船，前往凯旋门和香榭丽舍，再参观卢浮宫；晚上看埃菲尔铁塔，结束后回酒店休息。"],
      ["10/03", "雷克雅未克下午 4 点到（2 人）", `06:30 从 ${parisBusStopLink} 乘 BlaBlaCar Bus（€8.99）前往 Brussels Midi / Brussels South West（预计抵达 87 Rue de France, 1060 Brussels）。之后前往布鲁塞尔机场，13:50 起飞、15:10 抵达雷克雅未克凯夫拉维克机场，航班冰岛航空 FI555；落地后去林德城河酒店会合，晚上五人追极光。`],
      ["10/04", "南岸两日游（7 人）", "Nice Travel 南岸两日游，08:30 前到 Bus Stop #13（Nice Travel）集合；团含南部住宿。餐食不含（有补给点）。"],
      ["10/05", "南岸两日游第 2 天（7 人）", "继续南岸两日游，完成蓝冰洞、冰河湖与钻石沙滩；含早餐，沿途有补给点。预计不晚于 21:00 回到雷克雅未克，回城后入住林德城河酒店。"],
      ["10/06", "兰德曼那劳卡高地超级吉普（5 人）", "酒店门口接送，08:30-20:00；自备午餐（途中有一个小超市）。"],
      ["10/07", "斯奈山半岛一日游（5 人）", "原 Bus Stop #12 改为 Bus Stop #9 集合；08:00 前到，预计 19:00 回城；不含餐（中途有餐厅）。"],
      ["10/08", "黄金圈一日游（3 人）", "Troll 团，Bus Stop #13 集合，09:00-17:00；不含餐。"],
      ["10/09", "温泉 + 雷市一日游（3 人）", "住宿在机场附近；安排温泉 + 雷克雅未克一日游。"],
      ["10/10", "布鲁塞尔半日游（2 人）", "住宿为布鲁塞尔市中心 Hilton，安排市中心半日游。"],
    ];
    tongtongRole.cta = "切到彤彤";
  }

  const tongtongPlan = data.personPlans.find((person) => person.id === "tongyan");
  if (tongtongPlan) {
    tongtongPlan.name = "彤彤";
    tongtongPlan.role = "彤彤 + 龙龙：10/02 飞巴黎并住一晚；10/03 清晨坐大巴到布鲁塞尔后飞冰岛；10/04-10/10 的冰岛与布鲁塞尔行程按最新截图补齐。";
    tongtongPlan.days = [
      ["10/02", "巴黎一日游 + 巴黎住宿", "01:30 从深圳宝安机场 T3 起飞，08:10 抵达巴黎戴高乐机场 T1，航班海南航空 HU757。先到 Ibis Clichy Centre Mairie 酒店寄存行李；上午吃早午餐。之后乘坐塞纳河游船，前往凯旋门和香榭丽舍，再参观卢浮宫；晚上看埃菲尔铁塔，结束后回酒店休息。"],
      ["10/03", "雷克雅未克下午 4 点到（2 人）", `06:30 从 ${parisBusStopLink} 乘 BlaBlaCar Bus（€8.99）前往 Brussels Midi / Brussels South West（预计抵达 87 Rue de France, 1060 Brussels）。之后前往布鲁塞尔机场，13:50 起飞、15:10 抵达雷克雅未克凯夫拉维克机场，航班冰岛航空 FI555；落地后去林德城河酒店会合，晚上五人追极光。`],
      ["10/04", "南岸两日游（7 人）", "08:30 前到 Bus Stop #13（Nice Travel）集合；团含南部住宿。餐食不含（有补给点）。"],
      ["10/05", "南岸两日游第 2 天（7 人）", "完成蓝冰洞、冰河湖与钻石沙滩；含早餐，沿途有补给点。预计不晚于 21:00 回到雷克雅未克，回城后入住林德城河酒店。"],
      ["10/06", "兰德曼那劳卡高地超级吉普（5 人）", "酒店门口接送，08:30-20:00；自备午餐（途中有一个小超市）。"],
      ["10/07", "斯奈山半岛一日游（5 人）", "原 Bus Stop #12 改为 Bus Stop #9 集合；08:00 前到，预计 19:00 回城；不含餐（中途有餐厅）。"],
      ["10/08", "黄金圈一日游（3 人）", "Bus Stop #13 随 Troll 团出发，09:00-17:00；不含餐。"],
      ["10/09", "温泉 + 雷市一日游（3 人）", "住机场附近；安排温泉 + 雷克雅未克一日游。"],
      ["10/10", "布鲁塞尔半日游（2 人）", "住布鲁塞尔市中心 Hilton，安排市中心半日游。"],
      ["10/11", "布鲁塞尔 → 深圳", "11:40 从布鲁塞尔机场起飞，10/12 05:00 抵达深圳宝安机场 T3，航班海南航空 HU760。"],
    ];
  }

  const haigangPlan = data.personPlans.find((person) => person.id === "haigang");
  if (haigangPlan && tongtongPlan) {
    const sameIcelandDates = new Set(["10/03", "10/04", "10/05", "10/06", "10/07"]);
    const tongtongIcelandDays = new Map(tongtongPlan.days.filter(([date]) => sameIcelandDates.has(date)).map((day) => [day[0], day]));
    haigangPlan.days = haigangPlan.days.map((day) => tongtongIcelandDays.get(day[0]) || day);
    haigangPlan.role = "两个人：10/03 早到冰岛；10/03-10/07 行程与彤彤一致；10/08 晚飞阿姆斯特丹。";
  }

  data.staySchedule = data.staySchedule.filter((stay) => !(stay.audiences?.includes("tongyan") && stay.date === "10/08-10/10"));
  if (!data.staySchedule.some((stay) => stay.date === "10/02-10/03" && stay.audiences?.includes("tongyan"))) {
    data.staySchedule.unshift({
      date: "10/02-10/03",
      nights: "1 晚 / 1 间",
      people: "彤彤 + 龙龙（共 2 人）",
      city: "巴黎",
      name: parisHotel.name,
      status: "已订",
      detail: "10/02 入住、10/03 退房；彤彤和龙龙入住，1 晚 / 1 间。点开可跳转谷歌地图。",
      audiences: ["tongyan"],
      accent: "#27ae60",
      mapUrl: parisHotel.mapUrl,
    });
  }
  data.staySchedule.forEach((stay) => {
    if (stay.audiences?.includes("tongyan")) {
      stay.people = stay.people.replaceAll("彤燕组", "彤彤").replaceAll("海港组 + 彤彤", "海港组 + 彤彤（共 3 人）");
      stay.detail = stay.detail.replaceAll("彤燕组", "彤彤").replaceAll("彤燕", "彤彤").replaceAll("海港组 + 彤彤四个人", "海港组 + 彤彤三个人").replaceAll("四人", "三人");
    }
  });
  const tongtongIcelandDates = new Set(["10/03-10/04", "10/04", "10/05-10/06", "10/06-10/08"]);
  data.staySchedule.forEach((stay) => {
    if (tongtongIcelandDates.has(stay.date) && stay.audiences?.includes("tongyan")) {
      stay.audiences = stay.audiences.filter((audience) => audience !== "tongyan");
    }
  });
  const tongtongStays = [
    {
      date: "10/03-10/04", nights: "1 晚", people: "彤彤 + 龙龙（共 2 人）", city: "雷克雅未克", name: "林德城河酒店（Fosshotel Lind）", status: "已订",
      detail: "10/03 下午约 16:00 到雷克雅未克后入住；晚餐可按截图为 7 人预订一桌。", audiences: ["tongyan"], accent: "#27ae60", mapUrl: data.hotel.mapUrl,
    },
    {
      date: "10/04-10/05", nights: "1 晚（团含）", people: "南岸团 7 人", city: "冰岛南部", name: "南岸两日团含住宿", status: "已订",
      detail: "10/04 08:30 前到 Bus Stop #13（Nice Travel）集合；餐食不含，沿途有补给点。", audiences: ["tongyan"], accent: "#2f6f7e",
    },
    {
      date: "10/05-10/09", nights: "4 晚", people: "10/06-10/07：5 人；10/08：3 人", city: "雷克雅未克", name: "林德城河酒店（Fosshotel Lind）", status: "已订",
      detail: "10/05 晚南岸团回城后入住至 10/09；10/06 高地超级吉普、10/07 斯奈山、10/08 黄金圈均从雷克雅未克出发。", audiences: ["tongyan"], accent: "#27ae60", mapUrl: data.hotel.mapUrl,
    },
    {
      date: "10/09", nights: "1 晚", people: "3 人", city: "凯夫拉维克机场附近", name: "机场附近住宿", status: "已确认区域",
      detail: "截图确认住机场附近；具体酒店名称待补。", audiences: ["tongyan"], accent: "#27ae60", mapUrl: googleMaps("Keflavik Airport hotels"),
    },
    {
      date: "10/10", nights: "1 晚", people: "2 人", city: "布鲁塞尔市中心", name: "布鲁塞尔市中心 Hilton", status: "已确认",
      detail: "截图确认住布鲁塞尔市中心 Hilton，安排半日游。", audiences: ["tongyan"], accent: "#27ae60", mapUrl: googleMaps("Hilton Brussels city centre"),
    },
  ];
  data.staySchedule.unshift(...tongtongStays);

  const parisStay = {
    label: "住宿（已订）",
    name: parisHotel.name,
    detail: "10/02 入住、10/03 退房；彤彤和龙龙入住，1 晚 / 1 间。点开可跳转谷歌地图。",
    url: parisHotel.mapUrl,
  };
  const tongtongIcelandStays = {
    reykjavikArrival: {
      label: "住宿",
      name: "林德城河酒店（Fosshotel Lind）",
      detail: "10/03 下午约 16:00 到雷克雅未克后入住；当天截图记录为 2 人抵达，晚餐可按 7 人预订一桌。",
      url: data.hotel.mapUrl,
    },
    southCoast: {
      label: "住宿（团含）",
      name: "南岸两日团含住宿",
      detail: "10/04 晚：7 人南岸两日游团含住宿；餐食不含，沿途有补给点。",
      url: "",
    },
    lindFiveToNine: {
      label: "住宿",
      name: "林德城河酒店（Fosshotel Lind）",
      detail: "10/05 回城后入住至 10/09；10/06-10/07 按截图 5 人，10/08 起按截图 3 人。",
      url: data.hotel.mapUrl,
    },
    airportNearby: {
      label: "住宿（已确认）",
      name: "凯夫拉维克机场附近住宿",
      detail: "10/09 晚：3 人，截图仅确认机场附近，酒店名称待补。",
      url: googleMaps("Keflavik Airport hotels"),
    },
    brusselsHilton: {
      label: "住宿",
      name: "布鲁塞尔市中心 Hilton",
      detail: "10/10：2 人，布鲁塞尔市中心半日游后入住；点开可跳转地图。",
      url: googleMaps("Hilton Brussels city centre"),
    },
  };
  const previousGetDailyStay = getDailyStay;
  getDailyStay = function getDailyStayTongtong(personId, date, title) {
    if (personId === "tongyan" && date === "10/02") return parisStay;
    if (personId === "tongyan" && date === "10/03") return tongtongIcelandStays.reykjavikArrival;
    if (personId === "tongyan" && date === "10/04") return tongtongIcelandStays.southCoast;
    if (personId === "tongyan" && ["10/05", "10/06", "10/07", "10/08"].includes(date)) return tongtongIcelandStays.lindFiveToNine;
    if (personId === "tongyan" && date === "10/09") return tongtongIcelandStays.airportNearby;
    if (personId === "tongyan" && date === "10/10") return tongtongIcelandStays.brusselsHilton;
    return previousGetDailyStay(personId, date, title);
  };

  dailyVisuals["tongyan|10/02"] = {
    city: "深圳 / 巴黎",
    sunrise: "07:48",
    sunset: "19:25",
    season: "巴黎 10 月初早晚偏凉，抵达后优先办理入住并为次日清晨大巴留出休息时间。",
    images: ["assets/spots/paris-cruise.webp", "assets/spots/eiffel.webp"],
  };
  dailyVisuals["tongyan|10/03"] = {
    city: "巴黎 / 布鲁塞尔 / 雷克雅未克",
    sunrise: "07:41",
    sunset: "18:50",
    season: "当天跨三城，清晨大巴后直接衔接机场，抵达冰岛后优先酒店会合和保暖。",
    images: ["assets/spots/paris-cruise.webp", "assets/spots/brussels.webp", "assets/spots/aurora.webp"],
  };
  dailyVisuals["tongyan|10/04"] = {
    city: "雷克雅未克 / 冰岛南岸",
    sunrise: "07:33",
    sunset: "18:38",
    season: "南岸两日游第 1 天，瀑布、黑沙滩和低云海岸线适合跟团完成；餐食不含，沿途有补给点。",
    images: ["assets/spots/gallery/reynisfjara-seljalandsfoss.webp", "assets/spots/reynisfjara.webp", "assets/spots/tourlink/nice-south-waterfall-1.webp"],
  };
  dailyVisuals["tongyan|10/05"] = {
    city: "冰岛南岸 / 雷克雅未克",
    sunrise: "07:36",
    sunset: "18:34",
    season: "南岸两日游第 2 天，蓝冰洞、冰河湖与钻石沙滩是当天重点；预计不晚于 21:00 回雷市。",
    images: ["assets/spots/iceland/jokulsarlon-1.webp", "assets/spots/iceland/diamond-beach-1.webp", "assets/spots/jokulsarlon.webp"],
  };
  dailyVisuals["tongyan|10/06"] = {
    city: "雷克雅未克 / 兰德曼那劳卡",
    sunrise: "07:50",
    sunset: "18:40",
    season: "5 人高地段第一天，酒店门口接送，08:30-20:00；自备午餐，途中有小超市。",
    images: ["assets/spots/iceland/landmannalaugar-1.webp", "assets/spots/iceland/landmannalaugar-2.webp", "assets/spots/iceland/landmannalaugar-3.webp"],
  };
  dailyVisuals["tongyan|10/07"] = {
    city: "雷克雅未克 / 斯奈山半岛",
    sunrise: "07:53",
    sunset: "18:36",
    season: "5 人斯奈山一日游，改到 Bus Stop #9 集合；08:00 前到，预计 19:00 回城。",
    images: ["assets/spots/tourlink/snaefellsnes-aa-1.webp", "assets/spots/tourlink/snaefellsnes-aa-2.webp", "assets/spots/season/snaefellsnes-autumn.webp"],
  };
  dailyVisuals["tongyan|10/08"] = {
    city: "雷克雅未克 / 黄金圈",
    sunrise: "07:55",
    sunset: "18:33",
    season: "3 人黄金圈一日游，Bus Stop #13 集合，09:00-17:00；不含餐。",
    images: ["assets/spots/gullfoss.webp", "assets/spots/iceland/thingvellir-1.webp", "assets/spots/iceland/strokkur-1.webp"],
  };
  dailyVisuals["tongyan|10/09"] = {
    city: "凯夫拉维克 / 雷克雅未克",
    sunrise: "07:58",
    sunset: "18:29",
    season: "3 人温泉与雷克雅未克轻量收尾；当天不跑远，为次日离开冰岛保留机动时间。",
    images: ["assets/spots/iceland/blue-lagoon-1.webp", "assets/spots/iceland/reykjavik-hallgrimskirkja.webp", "assets/spots/iceland/reykjavik-harpa.webp"],
  };

  dailyVisuals["tongyan|10/06"] = { ...dailyVisuals["tongyan|10/06"], city: "兰德曼卡高地", season: "5 人高地超级吉普，酒店门口接送。", images: dailyVisuals["jianhuang|10/02"].images };
  dailyVisuals["tongyan|10/07"].season = "5 人斯奈山半岛一日游，12 号站改 9 号站。";
  dailyVisuals["tongyan|10/08"] = { ...dailyVisuals["tongyan|10/08"], city: "黄金圈", season: "3 人黄金圈一日游，Troll 团。", images: dailyVisuals["jianhuang|10/03"].images };
  dailyVisuals["tongyan|10/09"] = { ...dailyVisuals["tongyan|10/09"], season: "3 人温泉 + 雷市一日游，晚住机场附近。", images: ["assets/spots/iceland/blue-lagoon-1.webp", "assets/spots/iceland/reykjavik-harpa.webp"] };

  const replacementPairs = [
    ["彤燕组", "彤彤"],
    ["彤燕", "彤彤"],
    ["六个人", "五个人"],
    ["六人", "五人"],
    ["四人后续", "三人后续"],
    ["海港组 + 彤彤四个人", "海港组 + 彤彤三个人"],
    ["海港组 + 彤彤四人", "海港组 + 彤彤三人"],
    ["和彤彤四个人", "和彤彤三个人"],
    ["冰岛四人后续段", "冰岛三人后续段"],
  ];
  const rewrite = (value) => replacementPairs.reduce((text, [from, to]) => text.replaceAll(from, to), value);
  const rewriteStrings = (value, seen = new WeakSet()) => {
    if (!value || typeof value !== "object") return;
    if (seen.has(value)) return;
    seen.add(value);
    Object.entries(value).forEach(([key, child]) => {
      if (typeof child === "string") value[key] = rewrite(child);
      else if (child && typeof child === "object") rewriteStrings(child, seen);
    });
  };
  rewriteStrings(data);

  data.overlap.label = "冰岛同行窗口：10/03 15:10 后 - 10/06 19:20 前";
  data.overlap.context = "同行人数以每日安排为准：10/04-10/05 为 7 人南岸两日 + 蓝冰洞；10/06-10/07 为 5 人高地与斯奈山段；10/08-10/09 为 3 人黄金圈与温泉段。建皇 10/06 19:20 从凯夫拉维克机场离开。";
  const allRoleAfterTongtongUpdate = data.roleViews.find((role) => role.id === "all");
  if (allRoleAfterTongtongUpdate) {
    allRoleAfterTongtongUpdate.facts[0] = ["同行窗口", "10/03 15:10-10/06 19:20", "人数按每日行程卡为准"];
    allRoleAfterTongtongUpdate.focusDays[0] = ["10/04-10/05", "南岸两日 + 蓝冰洞（7 人）", "团含 10/04 南部住宿；10/05 晚回雷市。"];
    allRoleAfterTongtongUpdate.focusDays[3] = ["10/06+", "5 人 → 3 人后续段", "10/06 高地、10/07 斯奈山、10/08 黄金圈、10/09 温泉；人数按截图递减。"];
  }
  data.hotel.checkout = "各组按离开冰岛时间退房：建皇 10/06 白天退房、晚上离开；海港组 10/08 离开；彤彤 10/10 清晨离开";

  document.querySelector(".hotel-badge")?.replaceChildren("共同基地");
  renderRows();
  renderHighlights();
  renderHotel();
  renderMobileTimeline();
  applyRoleView(activeRoleId || "jianhuang", { persist: false });
})();
