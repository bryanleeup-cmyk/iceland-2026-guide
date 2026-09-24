const southCoastDinner = "20:30（当地时间）在 <a href=\"https://www.caruso.is/the-restaurant/?lang=en\" target=\"_blank\" rel=\"noreferrer\">Caruso 餐厅</a> 落座，已订时段 20:30–22:30；预订确认码：#9510503。南岸同行 7 人参加（娘娘不参加）。地址：Austurstræti 22，101 Reykjavík。南岸团预计约 21:00 回城（受天气和路况影响），与晚餐可能冲突；请提前向团方确认回城及下车时间，如赶不上需联系餐厅调整。";

const parisLuggage = {
  label: "已订行李寄存 · 当晚不住酒店",
  name: "LOCK & enjoy! · Gare de l’Est",
  url: "https://www.google.com/maps/search/?api=1&query=LOCK%20%26%20enjoy%2082%20Rue%20du%20Faubourg%20Saint-Martin%2075010%20Paris",
  detail: "地址：82 Rue du Faubourg Saint-Martin, 75010 Paris。已订时段：2026/09/28 13:00–09/29 04:00（巴黎当地时间）；M+ 型 18 号柜，预约 ID 243232，费用 €16.90。门店支持 24 小时进出，使用以订单时段为准；04:00 是寄存截止时间，不是计划取件时间。开柜使用手机中保存的原始二维码 / 订单凭证。",
};

const lisbonPortoBus = {
  place: "Lisbon (Oriente) · 39D 站台",
  address: "Av. Dom João II, 1990-233 Lisboa",
  url: "https://www.google.com/maps/search/?api=1&query=FlixBus%20Lisbon%20Oriente%20Av.%20Dom%20Jo%C3%A3o%20II%201990-233%20Lisboa",
  arrivalUrl: "https://www.google.com/maps/search/?api=1&query=Porto%20TIC%20Campanh%C3%A3%20R.%20de%20Bonj%C3%B3ia%20691%204300%20Porto",
  note: "票面建议通常提前 15 分钟到站，建议 07:45 前到站候车；08:00 正式发车。认 FlixBus 1000，方向 Porto (TIC - Campanhã)，票面站台 39D；到站后复核站台显示。11:15 计划抵达波尔图，车程 3 小时 15 分。建皇（两人）、娘娘、龙龙共 4 人同车；龙龙单独购票，使用自己的车票。",
};
const lisbonPortoBusDetail = `已订 09/27（周日）FlixBus 1000，时间均为葡萄牙当地时间。建议 07:45 前到站，08:00 从 <a href="${lisbonPortoBus.url}" target="_blank" rel="noopener noreferrer">Lisbon (Oriente) · 上车地图</a> 的 39D 站台发车（地址：${lisbonPortoBus.address}）。11:15 计划抵达 <a href="${lisbonPortoBus.arrivalUrl}" target="_blank" rel="noopener noreferrer">Porto (TIC - Campanhã) · 下车地图</a>（地址：R. de Bonjóia, 691, 4300 Porto），车程 3 小时 15 分。建皇（两人）、娘娘、龙龙共 4 人同车；本张三人联票座位为 20C、20D、20E，龙龙单独购票且乘同一班大巴，座位以他的车票为准。`;

const data = {
  meta: {
    timelineStart: "2026-09-29T00:00:00",
    timelineEnd: "2026-10-10T23:59:00",
  },
  groups: [
    {
      id: "huangjian",
      name: "葡萄牙：建皇",
      shortName: "建皇",
      color: "#2F80ED",
      icelandWindow: {
        start: "2026-09-29T07:50:00",
        end: "2026-10-06T19:20:00",
        label: "09/29 07:50 → 10/06 19:20",
      },
      tags: ["2 人", "最早到冰岛", "10/06 晚飞米兰"],
      summary:
        "最早到冰岛，可在朋友到达前先玩非核心路线。10/06 已重新预订 Sky Lagoon 温泉（13:00 入场，¥1441.87/2人），不含接送，需自行乘公共交通前往；结束后预留取行李和机场交通时间，19:20 从雷克雅未克凯夫拉维克机场飞米兰转里斯本。",
      flights: {
        europeLongHaul: [
          "09/25 北京首都机场 T3 13:35 → 伦敦希思罗机场 T2 17:40｜TP8329",
          "09/25 伦敦希思罗机场 T2 18:45 → 里斯本机场 T1 21:35｜TP1357",
          "10/07 里斯本机场 T1 18:15 → 哥本哈根机场 T3 23:00｜TP756",
          "10/08 哥本哈根机场 T3 19:05 → 10/09 北京首都机场 T3 09:55｜TP8782",
        ],
        icelandOutbound: [
          "09/28 波尔图弗朗西斯科卡内罗机场 09:05 → 巴黎奥利机场 T1 12:15｜易捷航空 U24886",
          "09/29 巴黎戴高乐机场 T2D 06:00 → 雷克雅未克凯夫拉维克机场 07:50｜易捷航空 U24629",
        ],
        icelandReturn: [
          "10/06 雷克雅未克凯夫拉维克机场 19:20 → 10/07 米兰马尔彭萨机场 01:30｜维兹航空马耳他 W46454",
          "10/07 米兰马尔彭萨机场 T2 06:30 → 里斯本机场 T1 08:30｜易捷航空 U23873",
        ],
        afterIceland: [
          "09/28 奥利机场落地后直达 LOCK & enjoy! 巴黎东站店寄存；日落塞纳河游船 + 20:00 埃菲尔铁塔亮灯 / 闪灯，晚间继续在巴黎游玩，不订酒店；半夜取行李，09/29 约 02:00 从寄存点出发去戴高乐机场 T2D",
          "10/06 13:00 Sky Lagoon 温泉；无接送，自行公共交通，结束后取行李并前往机场",
          "10/07 里斯本半日城市步行",
          "10/07 晚住 Cabinn Metro Hotel，10/08 从哥本哈根机场飞北京",
        ],
      },
    },
    {
      id: "haigang",
      name: "9月30日出发阿姆斯特丹：赶海组",
      shortName: "赶海组",
      color: "#F2994A",
      icelandWindow: {
        start: "2026-10-03T07:40:00",
        end: "2026-10-08T19:15:00",
        label: "10/03 07:40 → 10/08 19:15",
      },
      tags: ["2 人", "10/03 早上到", "10/09 阿姆斯特丹", "10/10 火车回布鲁塞尔"],
      summary:
        "09/30 北京经上海出发，10/01 抵达阿姆斯特丹；10/02 坐大巴到布鲁塞尔后飞哥本哈根，10/03 07:40 到冰岛。10/08 晚离开冰岛，10/09 阿姆斯特丹玩 1 天，10/10 火车回布鲁塞尔。",
      flights: {
        europeLongHaul: [
          "09/30 北京首都机场 T2 19:30 → 上海浦东机场 T1 21:50｜东方航空 MU5164",
          "10/01 上海浦东机场 T1 12:30 → 阿姆斯特丹史基浦机场 18:30｜东方航空 MU771",
          "10/11 布鲁塞尔机场 12:20 → 10/12 上海浦东机场 T2 05:20｜吉祥航空 HO1660",
          "10/12 上海浦东机场 T2 08:20 → 北京大兴机场 10:35｜吉祥航空 HO1257",
        ],
        icelandOutbound: [
          "10/02 阿姆斯特丹 → 布鲁塞尔，大巴班次、时刻和上下车站待补；抵达后前往布鲁塞尔机场",
          "10/02 布鲁塞尔机场 15:15 → 哥本哈根机场 16:45｜SAS SK1594",
          "10/03 哥本哈根机场 06:20 → 雷克雅未克凯夫拉维克机场 07:40｜SAS SK2595",
        ],
        icelandReturn: [
          "10/08 雷克雅未克凯夫拉维克机场 19:15 → 10/09 阿姆斯特丹史基浦机场 00:20｜HV6886",
        ],
        afterIceland: [
          "10/09 阿姆斯特丹玩 1 天",
          "10/10 阿姆斯特丹 → 布鲁塞尔，火车返回",
          "10/11 从布鲁塞尔回上海 / 北京",
        ],
      },
    },
    {
      id: "tongyan",
      name: "2号出发的机票：彤燕组",
      shortName: "彤燕组",
      color: "#27AE60",
      icelandWindow: {
        start: "2026-10-03T15:10:00",
        end: "2026-10-10T07:35:00",
        label: "10/03 15:10 → 10/10 07:35",
      },
      tags: ["2 人", "10/03 下午到", "10/10 离开冰岛"],
      summary:
        "10/03 15:10 到冰岛，是冰岛同行会合的开始点。10/10 早上离开冰岛回布鲁塞尔。",
      flights: {
        europeLongHaul: [
          "10/02 深圳宝安机场 T3 17:10 → 上海浦东机场 19:40｜海南航空 HU6205",
          "10/03 上海浦东机场 T2 02:10 → 布鲁塞尔机场 08:10｜海南航空 HU7921",
          "10/11 布鲁塞尔机场 13:20 → 10/12 北京首都机场 05:00｜海南航空 HU492",
          "10/12 北京首都机场 T2 08:30 → 深圳宝安机场 11:50｜海南航空 HU7701",
        ],
        icelandOutbound: [
          "10/03 布鲁塞尔机场 13:50 → 雷克雅未克凯夫拉维克机场 15:10｜冰岛航空 FI555",
        ],
        icelandReturn: [
          "10/10 雷克雅未克凯夫拉维克机场 07:35 → 布鲁塞尔机场 12:55｜冰岛航空 FI554",
        ],
        afterIceland: ["10/11 布鲁塞尔 → 北京", "10/12 北京 → 深圳"],
      },
    },
  ],
  roleViews: [
    {
      id: "all",
      name: "总览",
      title: "我负责统筹全局",
      groupId: "all",
      spotSegments: ["iceland-six"],
      accent: "#174e78",
      summary: "看所有人的重合窗口、共同住宿、7 人南岸段和后续分流。",
      notes: ["适合发起人或临时查全局时使用。", "默认显示南岸共同段，保留去年参考和完整时间轴。", "如果只想看自己的每天安排，切到下面任意组合。"],
      facts: [
        ["共同窗口", "10/03 15:10-10/06 19:20", "人数按每日行程为准"],
        ["南岸核心", "10/04-10/05", "南岸两日 + 蓝冰洞"],
        ["住宿", "林德城河酒店", "冰岛统一基地；10/04 晚南岸团含住宿"],
      ],
      focusDays: [
        ["10/03", "酒店会合与休息", "林德城河酒店会合，晚间休息，不安排追极光。"],
        ["10/04", "南岸两日第一天", "Nice Travel 南岸两日团已订并全额支付；08:30 在 Bus Stop #13（Rauðarárstígur）等车，接车窗口 08:30–09:00。"],
        ["10/05", "蓝冰洞第二天 + Caruso 已订晚餐", `晚上回雷克雅未克，建皇准备次日晚航班。 ${southCoastDinner}`],
        ["10/06+", "建皇晚飞，四人继续", "建皇 13:00 到 Sky Lagoon 入场，无接送，自行乘公共交通，结束后取行李并前往机场；赶海组 + 彤燕组优先补斯奈山、雷克雅内斯半岛或蓝湖。"],
      ],
      cta: "查看全局",
    },
    {
      id: "jianhuang",
      name: "建皇组合",
      title: "我是建皇这一组",
      groupId: "huangjian",
      spotSegments: ["jianhuang-spots", "iceland-six"],
      accent: "#2F80ED",
      summary: "09/25-09/27 里斯本豪华四人间已订：建皇（两人）、龙龙、娘娘入住；9/26 四人走里斯本郊区海边一日游，9/27 一起去波尔图，娘娘当晚飞回阿姆斯特丹，建皇和龙龙住波尔图盖亚美居酒店。",
      notes: ["重点看：9/26 里斯本郊区海边团、9/27 里斯本到波尔图大巴、9/28 波尔图飞巴黎奥利机场转冰岛、9/29 史费拉浮潜 + 雷克雅未克市区、09/30 Kerlingarfjoll 高地徒步已订、10/01 斯奈山半岛小团已订、10/02 兰德曼那劳卡高地超级吉普一日团已订、10/03 黄金圈下午团已订、10/04-10/05 7 人南岸两日、10/06 已订 Sky Lagoon 温泉（13:00，无接送） + 晚飞米兰、10/07 里斯本半日、10/08 哥本哈根转机。", "10/03 建皇上午休息，约 10:00 与赶海组会合、吃早午饭后参加黄金圈下午团；晚间休息，不安排追极光。", "娘娘 9/27 一起去波尔图，20:50 从波尔图飞阿姆斯特丹，9/28 00:25 落地，后面不进入冰岛主线。"],
      facts: [
        ["里斯本住宿", "09/25-09/27", "The Delight Hostel 豪华四人间已订（¥223.43/人/晚）"],
        ["到冰岛", "09/29 07:50", "你们最早到，可先玩提前段"],
        ["共同段", "10/04-10/05", "南岸两日 + 蓝冰洞"],
        ["离开冰岛", "10/06 19:20", "13:00 Sky Lagoon；自行公共交通，预留机场交通时间"],
        ["回国转机", "10/08 哥本哈根", "哥本哈根轻量一日游"],
      ],
      focusDays: [
        ["09/26", "里斯本郊区海边一日游", "建皇（两人）+ 龙龙 + 娘娘共 4 人，09:00 从里斯本市区出发；地狱之口、罗卡角、雷加莱拉庄园、辛特拉王宫、佩纳宫。"],
        ["09/27", "四人去波尔图", "建皇（两人）、娘娘、龙龙共 4 人同乘 FlixBus 1000，龙龙单独购票；09/27 08:00 从 Lisbon (Oriente) 39D 站台出发，11:15 到 Porto (TIC - Campanhã)，车程 3 小时 15 分，建议 07:45 前到站；下午玩波尔图；娘娘晚间飞阿姆斯特丹，建皇和龙龙入住波尔图盖亚美居酒店。"],
        ["09/28", "建皇飞巴黎转冰岛", "建皇 09:05 从波尔图机场出发，12:15 落地巴黎奥利机场，航班易捷航空 U24886；娘娘已在 09/27 晚飞回阿姆斯特丹。"],
        ["09/30", "已订：Kerlingarfjoll 高地徒步团（¥2568.57/2人）", "已订 Kerlingarfjoll Hiking Tour，08:00 在 Klettur Hótel（Mjölnisholt 12–14）接车，接车可能需要 30 分钟；徒步路线听向导安排。<a href=\"https://cn.adventures.is/iceland/day-tours/hiking/kerlingarfjoll-hiking-tour/\" target=\"_blank\" rel=\"noreferrer\">查看团页</a>"],
        ["10/01", "已订：斯奈山半岛小团（¥1796/2人，¥898/人）", "已订 Arctic Adventures 斯奈山半岛小团，雷克雅未克接送，约 11 小时；08:00 在 Klettur Hótel（Mjölnisholt 12–14）接车，接车可能需要 30 分钟；停靠顺序听向导安排。<a href=\"https://cn.adventures.is/iceland/day-tours/sightseeing-tours/snaefellsnes-peninsula-small-group-tour/\" target=\"_blank\" rel=\"noreferrer\">查看团页</a>"],
        ["10/02", "已订：兰德曼那劳卡高地超级吉普一日团（¥3260.37/2人）", "已订 Arctic Adventures 兰德曼那劳卡高地超级吉普一日团，雷克雅未克接送，08:00 在 Klettur Hótel（Mjölnisholt 12–14）接车；路线、温泉停留和实际返回时间听向导安排。<a href=\"https://cn.adventures.is/iceland/day-tours/super-jeeps/landmannalaugar-safari/\" target=\"_blank\" rel=\"noreferrer\">查看团页</a>"],
        ["10/03", "已订：黄金圈下午团（¥691.31/人）", "建皇上午休息，等待赶海组约 10:00 到达；12:00 一起到 Klettur Hótel（Mjölnisholt 12–14）等 Arctic Adventures 接车，接车可能等待最多 30 分钟。晚间休息，不安排追极光。<a href=\"https://cn.adventures.is/iceland/day-tours/golden-circle-tours/golden-circle-afternoon/\" target=\"_blank\" rel=\"noreferrer\">查看团页</a>"],
        ["10/04", "南岸两日已订", "Nice Travel 7 人团已全额支付；10/04 08:30 在 Bus Stop #13（Rauðarárstígur）等 Nice Travel 接车，接车窗口 08:30–09:00。"],
        ["10/05", "蓝冰洞后回雷市 + Caruso 已订晚餐", `晚上回雷克雅未克，次日白天留半日待定。 ${southCoastDinner}`],
        ["10/06", "已订：Sky Lagoon 温泉（¥1441.87/2人） + 晚飞米兰", "13:00 到 Sky Lagoon 入场；重新预订不含接送，需自行乘公共交通前往。出发前查询往返公交班次，预留步行、换乘、取行李和机场值机时间；19:20 从雷克雅未克凯夫拉维克机场飞米兰马尔彭萨。<a href=\"https://www.google.com/maps/dir/?api=1&origin=Fosshotel%20Lind%20Reykjavik&destination=Sky%20Lagoon%20Kopavogur&travelmode=transit\" target=\"_blank\" rel=\"noreferrer\">查看公共交通路线</a>"],
        ["10/07", "米兰转机到里斯本", "01:30 到米兰马尔彭萨，06:30 从 T2 飞里斯本，08:30 到里斯本；白天只做半日轻量城市步行，晚上飞哥本哈根。"],
        ["10/08", "哥本哈根转机一日游", "前一晚住 Cabinn Metro Hotel；19:05 飞北京，白天只走市区轻量线。"],
      ],
      cta: "切到建皇",
    },
    {
      id: "haigang",
      name: "赶海组",
      title: "我是赶海组",
      groupId: "haigang",
      spotSegments: ["iceland-six", "four-after", "niangniang"],
      accent: "#F2994A",
      summary: "09/30 北京经上海出发，10/01 抵达阿姆斯特丹；10/02 大巴到布鲁塞尔后飞哥本哈根，10/03 07:40 到冰岛；10/04-10/05 7 人南岸两日，10/08 晚飞阿姆斯特丹，10/09 和娘娘汇合。",
      notes: ["重点看：10/03 早到冰岛后先寄存行李，约 10:00 和建皇会合、吃早午饭后参加已订黄金圈下午团，晚间休息，不安排追极光；10/04-10/05 7 人南岸两日；10/08 雷克雅未克凯夫拉维克机场飞阿姆斯特丹。", "10/03 黄金圈下午团结束后回酒店休息，为次日南岸团做准备；当晚不安排追极光。", "阿姆斯特丹段只看你们和娘娘相关内容即可。"],
      facts: [
        ["到冰岛", "10/03 07:40", "先到酒店寄存/入住"],
        ["共同段", "10/04-10/05", "南岸两日 + 蓝冰洞"],
        ["离开冰岛", "10/08 19:15", "雷克雅未克凯夫拉维克机场飞阿姆斯特丹"],
      ],
      focusDays: [
        ["10/03", "抵达冰岛 + 已订黄金圈下午团", "06:20 从哥本哈根飞雷克雅未克凯夫拉维克机场，07:40 落地；先去林德城河酒店寄存行李/入住，约 10:00 和建皇会合、吃早午饭，12:00 在 Klettur Hótel（Mjölnisholt 12–14）等黄金圈团接车，晚间休息，不安排追极光。"],
        ["10/04", "南岸两日已订", "Nice Travel 7 人团已全额支付；10/04 08:30 在 Bus Stop #13（Rauðarárstígur）等 Nice Travel 接车，接车窗口 08:30–09:00。"],
        ["10/06", "高地超级吉普（5 人）", "酒店门口接送，08:30-20:00；自备午餐。"],
        ["10/08", "晚飞阿姆斯特丹", "白天轻量，留足取行李、机场交通和值机时间。"],
        ["10/09", "阿姆汇合", "和娘娘本地玩一天。"],
      ],
      cta: "切到赶海组",
    },
    {
      id: "tongyan",
      name: "彤燕组",
      title: "我是彤燕组",
      groupId: "tongyan",
      spotSegments: ["iceland-six", "four-after"],
      accent: "#27AE60",
      summary: "10/03 下午到冰岛后大家会合；10/04-10/05 7 人南岸两日，10/10 早上离开冰岛。",
      notes: ["重点看：10/03 抵达后会合、7 人南岸两日、10/06-10/07 5 人高地与斯奈山、10/08-10/09 3 人黄金圈与温泉、10/10 早班机。", "10/09 晚建议住机场交通稳定的位置，避免 10/10 早班机压力。", "阿姆斯特丹段与你们无关，默认弱化。"],
      facts: [
        ["到冰岛", "10/03 15:10", "你们到后大家会合"],
        ["共同段", "10/04-10/05", "南岸两日 + 蓝冰洞"],
        ["离开冰岛", "10/10 07:35", "前一晚住机场交通稳的位置"],
      ],
      focusDays: [
        ["10/03", "到冰岛会合", "去林德城河酒店会合，晚间休息，不安排追极光。"],
        ["10/04", "南岸两日已订", "Nice Travel 7 人团已全额支付；10/04 08:30 在 Bus Stop #13（Rauðarárstígur）等 Nice Travel 接车，接车窗口 08:30–09:00。"],
        ["10/06", "四人继续", "建皇离开后，和赶海组补线。"],
        ["10/09", "离开前轻量", "不要跑远，优先机场交通稳定。"],
        ["10/10", "早班机", "07:35 从雷克雅未克凯夫拉维克机场飞布鲁塞尔。"],
      ],
      cta: "切到彤燕组",
    },
    {
      id: "niangniang",
      name: "娘娘",
      title: "我是娘娘",
      groupId: null,
      spotSegments: ["niangniang"],
      accent: "#8E6AC8",
      summary: "9/25 阿姆斯特丹飞里斯本；9/26 一起走里斯本郊区海边一日游；9/27 一起去波尔图，晚上飞回阿姆斯特丹。",
      notes: ["重点看：9/25 阿姆斯特丹飞里斯本、9/26 里斯本郊区海边一日游、9/27 去波尔图并晚班机回阿姆斯特丹、10/09 和赶海组阿姆斯特丹本地汇合。", "9/28 巴黎转机和冰岛段不是你的主线。", "冰岛住宿、南岸两日、机场转移默认不进入你的主视角。"],
      facts: [
        ["你的主线", "葡萄牙 + 阿姆斯特丹", "不去冰岛"],
        ["里斯本住宿", "09/25-09/27", "The Delight Hostel 豪华四人间已订（¥223.43/人/晚）"],
        ["葡萄牙", "09/26", "辛特拉 + 罗卡角一日游"],
        ["到里斯本", "09/25 晚上", "19:40 阿姆斯特丹起飞，21:50 里斯本落地"],
        ["回阿姆斯特丹", "09/27-09/28", "20:50 波尔图起飞，00:25 阿姆斯特丹落地"],
      ],
      focusDays: [
        ["09/25", "阿姆斯特丹飞里斯本", "19:40 从阿姆斯特丹史基浦机场起飞，21:50 落地里斯本机场 T1；飞行 2 小时 10 分，无中转。"],
        ["09/26", "里斯本郊区海边一日游", "09:00 从里斯本市区出发；10:00 地狱之口，10:50 罗卡角，12:00 雷加莱拉庄园，14:30 辛特拉王宫，16:00 佩纳宫。"],
        ["09/27", "一起去波尔图", "和建皇（两人）、龙龙共 4 人同乘 FlixBus 1000，龙龙单独购票；09/27 08:00 从 Lisbon (Oriente) 39D 站台出发，11:15 到 Porto (TIC - Campanhã)，建议 07:45 前到站；下午玩波尔图。"],
        ["09/27 晚-09/28", "波尔图飞阿姆斯特丹", "20:50 从波尔图弗朗西斯科卡内罗机场起飞，09/28 00:25 落地阿姆斯特丹史基浦机场，航班荷兰泛航 HV6004；飞行 2 小时 35 分，无中转。"],
        ["09/28-10/08", "阿姆斯特丹上班", "冰岛段与你无关，默认不看。"],
        ["10/09", "阿姆斯特丹汇合", "运河区、博物馆区、博物馆二选一、晚饭。"],
        ["10/10", "送赶海组回布鲁塞尔", "可一起坐火车或本地送行。"],
      ],
      cta: "切到娘娘",
    },
  ],
  overlap: {
    start: "2026-10-03T15:10:00",
    end: "2026-10-06T19:20:00",
    label: "冰岛同行窗口：10/03 15:10 后 - 10/06 19:20 前",
    context:
      "这是冰岛共同停留的时间段。10/03 晚间休息，不安排追极光；10/04-10/05 共 7 人一起走南岸两日 + 蓝冰洞小巴团，全程无人自驾；10/06 建皇 13:00 到 Sky Lagoon 入场，无接送，自行乘公共交通，结束后取行李并前往机场，19:20 从凯夫拉维克机场离开冰岛。",
  },
  hotel: {
    name: "Fosshotel Lind（林德城河酒店）",
    cnName: "林德城河酒店",
    address: "Rauðarárstígur 18, Reykjavík",
    dates: "雷克雅未克以林德城河酒店为基地；10/04 晚住南岸团含住宿，彤彤 10/09 晚住机场附近",
    checkin: "09/29 起陆续入住；10/04 晚离店住南岸团；10/05 晚回到林德城河酒店",
    checkout: "各组按离开冰岛时间退房：建皇 10/06 白天退房、晚上离开；赶海组 10/08 离开；彤彤 10/09 转住机场附近，10/10 清晨离开冰岛",
    rooms: "标准双床 / 双人床房；截图订单均为 1 间",
    people: "各组在雷克雅未克期间以这里为基地；10/04 晚住南岸团含住宿，彤彤 10/09 晚住机场附近",
    payment: "已订截图：09/29-10/03 ¥4804.42；10/05-10/06 ¥988.61；后续同酒店续住信息不公开订单号",
    cancel: "两段订单均显示预订成功；订单号和确认号不放公开页",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Fosshotel%20Lind%20Raudararstigur%2018%20Reykjavik",
    notes: [
      "09/29-10/03 这段为 4 晚 1 间，订单金额 ¥4804.42；10/05-10/06 这段为 1 晚 1 间，订单金额 ¥988.61。",
      "10/03 建皇和赶海组先到，可先问前台寄存行李；彤燕组 15:10 落地后到酒店会合。",
      "10/04-10/05 Nice Travel 7 人南岸两日团已订并全额支付；10/04 08:30 在 Bus Stop #13（Rauðarárstígur）等 Nice Travel 接车，接车窗口 08:30–09:00。",
      "10/04 晚南岸两日团通常团内含冰岛南部住宿和早餐，所以这晚不住林德城河酒店。",
      "建皇 10/06 白天退房，自行乘公共交通前往 Sky Lagoon，13:00 入场；取回行李后提前去机场，19:20 从凯夫拉维克机场起飞。",
      "订单号和酒店确认号不放在公开分享页，需要时看预订截图。"
    ],
  },
  staySchedule: [
    {
      date: "09/25-09/27",
      nights: "2 晚 / 1 间",
      people: "建皇（2 人）+ 龙龙 + 娘娘（共 4 人）",
      city: "里斯本",
      name: "The Delight Hostel（欢乐青年旅馆）",
      status: "已订",
      detail: "09/25 14:00 后入住、09/27 11:30 前退房。豪华四人间，1 张双人床 + 2 张单人床，带私人浴室，不含早餐；实付总价 ¥1,787.44，按 4 人、2 晚为 ¥223.43/人/晚；订单号和联系方式不放公开页。",
      audiences: ["jianhuang", "niangniang"],
      accent: "#d76d45",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=The%20Delight%20Hostel%20R.%20Tomas%20Ribeiro%2095%20Lisbon",
    },
    {
      date: "09/27-09/28",
      nights: "1 晚",
      people: "建皇（2 人）+ 龙龙（共 3 人）",
      city: "波尔图",
      name: "波尔图盖亚美居酒店（Mercure Porto Gaia Hotel）",
      status: "已订",
      detail: "09/27 晚约 21:00 办理入住、09/28 退房；标准双人床房（带加床），实付 ¥544.94，按 3 人为 ¥181.65/人。09/28 早班机前从酒店前往波尔图机场。",
      audiences: ["jianhuang"],
      accent: "#d76d45",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Mercure%20Porto%20Gaia%20Hotel",
    },
    {
      date: "09/29-10/03",
      nights: "4 晚 / 1 间",
      people: "建皇提前段",
      city: "雷克雅未克",
      name: "Fosshotel Lind（林德城河酒店）",
      status: "已订",
      detail: "预订成功：09/29 入住、10/03 退房，4 晚 / 1 间，标准双床 / 双人床房，金额 ¥4804.42。建皇提前到冰岛这几晚都住这里。",
      audiences: ["jianhuang"],
      accent: "#174e78",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Fosshotel%20Lind%20Raudararstigur%2018%20Reykjavik",
    },
    {
      date: "10/03-10/04",
      nights: "1 晚",
      people: "冰岛同行",
      city: "雷克雅未克",
      name: "Fosshotel Lind（林德城河酒店）",
      status: "同酒店",
      detail: "10/03 晚大家会合后住林德城河酒店；这晚住宿已确定。",
      audiences: ["jianhuang", "haigang", "tongyan"],
      accent: "#174e78",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Fosshotel%20Lind%20Raudararstigur%2018%20Reykjavik",
    },
    {
      date: "10/04",
      nights: "1 晚",
      people: "冰岛同行",
      city: "冰岛南部",
      name: "南岸两日团含住宿",
      status: "已订",
      detail: "Nice Travel 7 人南岸两日 + 蓝冰洞团已订并全额支付，团含南部住宿一晚和早餐；具体酒店和早餐规则以最终确认单为准。",
      audiences: ["jianhuang", "haigang", "tongyan"],
      accent: "#2f6f7e",
    },
    {
      date: "10/05-10/06",
      nights: "1 晚 / 1 间",
      people: "建皇组合（2 人）",
      city: "雷克雅未克",
      name: "Fosshotel Lind（林德城河酒店）",
      status: "已订",
      detail: "预订成功：10/05 入住、10/06 退房，1 晚 / 1 间，标准双床 / 双人床房，金额 ¥988.61。南岸两日团结束后回到这里住，建皇 10/06 退房后安排好行李寄存，自行乘公共交通去 Sky Lagoon，13:00 入场；结束后取行李并前往机场，预留交通和值机时间。",
      audiences: ["jianhuang", "haigang", "tongyan"],
      accent: "#174e78",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Fosshotel%20Lind%20Raudararstigur%2018%20Reykjavik",
    },
    {
      date: "09/28",
      nights: "跨夜寄存 · 不住酒店",
      people: "建皇",
      city: "巴黎 · Gare de l’Est 寄存门店",
      name: parisLuggage.name,
      status: "已订",
      detail: parisLuggage.detail,
      audiences: ["jianhuang"],
      accent: "#2f80ed",
      mapUrl: parisLuggage.url,
    },
    {
      date: "10/07-10/08",
      nights: "1 晚",
      people: "建皇",
      city: "哥本哈根",
      name: "Cabinn Metro Hotel",
      status: "已订",
      detail: "10/07 晚入住、10/08 退房；地址：Arne Jacobsens Allé 2；电话：+4532465700。10/08 从酒店前往哥本哈根机场搭乘回国航班。",
      audiences: ["jianhuang"],
      accent: "#2f80ed",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Cabinn%20Metro%20Hotel%20Arne%20Jacobsens%20All%C3%A9%202%20Copenhagen",
    },
    {
      date: "10/06-10/08",
      nights: "2 晚",
      people: "赶海组（同行日程共 5 人）",
      city: "雷克雅未克",
      name: "Fosshotel Lind（林德城河酒店）",
      status: "同酒店",
      detail: "建皇 10/06 白天退房、傍晚离开冰岛后，赶海组 + 彤燕组继续住林德城河酒店；10/04 晚南岸团含住宿除外。金额、房间数和订单号不放公开页。",
      audiences: ["haigang", "tongyan"],
      accent: "#4ca88f",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Fosshotel%20Lind%20Raudararstigur%2018%20Reykjavik",
    },
    {
      date: "10/08-10/10",
      nights: "2 晚",
      people: "赶海组",
      city: "阿姆斯特丹",
      name: "赶海组阿姆住宿",
      status: "待补订单",
      detail: "10/09 和娘娘阿姆本地汇合，10/10 坐火车回布鲁塞尔；建议住火车站 / 运河区交通方便处。",
      audiences: ["haigang", "niangniang"],
      accent: "#f2994a",
    },
    {
      date: "10/08-10/10",
      nights: "2 晚",
      people: "彤燕组",
      city: "雷克雅未克",
      name: "Fosshotel Lind（林德城河酒店）",
      status: "同酒店",
      detail: "彤燕组 10/08 赶海组离开后继续住林德城河酒店，直到 10/10 清晨去雷克雅未克凯夫拉维克机场；10/09 晚不要安排太远。",
      audiences: ["tongyan"],
      accent: "#27ae60",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Fosshotel%20Lind%20Raudararstigur%2018%20Reykjavik",
    },
  ],
  recommendedPlan: [
    {
      date: "10/03 周六",
      title: "已订：黄金圈下午团（¥691.31/人）",
      status: "建皇上午休息；约 10:00 与赶海组会合、吃早午饭后参加已订黄金圈下午团；彤燕组 15:10 到冰岛后会合",
      plan: "建皇上午休息，赶海组抵达并寄存行李后约 10:00 会合、一起吃早午饭，再按确认单参加黄金圈下午团；彤燕组落地后去林德城河酒店，晚间休息，不安排追极光。",
      avoid: "今天保留黄金圈下午团，晚上休息，不再叠加长距离路线；第二天 08:30 在 Bus Stop #13（Rauðarárstígur）等 Nice Travel 接车，接车窗口 08:30–09:00。",
      stay: "住林德城河酒店；10/04 08:30 在 Bus Stop #13（Rauðarárstígur）等 Nice Travel 接车，接车窗口 08:30–09:00，提前确认行李限制。",
      audiences: ["jianhuang", "haigang", "tongyan"],
      accent: "#7bb8d8",
    },
    {
      date: "10/04 周日",
      title: "7 人南岸核心日 1",
      status: "南岸两日团已订：10/04 08:30 在 Bus Stop #13（Rauðarárstígur）等 Nice Travel 接车，接车窗口 08:30–09:00",
      plan: "7 人团总价 509,400 ISK，已全额支付；小巴沿南岸走塞里雅兰瀑布、斯科加瀑布、雷尼斯黑沙滩，继续向东到杰古沙龙冰河湖一带。",
      avoid: "今天不要再排黄金圈或市区项目；只带 1 件手提行李，大件行李留在雷克雅未克寄存或酒店协调。",
      stay: "住南岸团含住宿（含早餐）；取消/改订林德城河酒店 10/04 这一晚。",
      audiences: ["jianhuang", "haigang", "tongyan"],
      accent: "#2f6f7e",
    },
    {
      date: "10/05 周一",
      title: "7 人南岸核心日 2",
      status: "南岸两日团第二天：蓝冰洞 + 返回雷克雅未克",
      plan: `穿高帮防水登山鞋，导游发头盔和冰爪后坐超级吉普去瓦特纳冰川蓝冰洞；看当天最佳可进入冰洞、钻石沙滩/冰河湖，晚上回雷克雅未克。 ${southCoastDinner}`,
      avoid: "不要安排 10/05 晚从雷克雅未克凯夫拉维克机场离开的航班；回城可能受天气和路况影响。建皇 10/06 晚航班离开，白天安排保持轻量。",
      stay: "回雷克雅未克住林德城河酒店；建皇 10/06 退房，其他组按各自日程续住。",
      audiences: ["jianhuang", "haigang", "tongyan"],
      accent: "#54a7c7",
    },
    {
      date: "10/06 周二",
      title: "建皇温泉晚飞 / 5 人高地超级吉普",
      status: "建皇 19:20 从雷克雅未克凯夫拉维克机场飞米兰转里斯本",
      plan: "建皇重新预订 Sky Lagoon 温泉，13:00 入场，¥1441.87/2人；无接送，自行乘公共交通前往，结束后取行李并前往凯夫拉维克机场，预留交通和值机时间。赶海组与彤彤等 5 人参加兰德曼那劳卡高地超级吉普，酒店门口接送，08:30-20:00，自备午餐。",
      avoid: "建皇预留往返温泉、取行李和机场值机时间；5 人高地团自备午餐、防风防水衣物。",
      stay: "建皇白天从林德城河酒店退房，10/07 清晨抵达里斯本；赶海组 + 彤燕组继续住林德城河酒店。",
      audiences: ["jianhuang", "haigang", "tongyan"],
      accent: "#2f80ed",
    },
    {
      date: "10/07 周三",
      title: "斯奈山半岛一日游（5 人）",
      status: "赶海组 + 彤燕组",
      plan: "5 人参加斯奈山半岛一日游；原 Bus Stop #12 改为 Bus Stop #9 集合，08:00 前到，预计 19:00 回城；不含餐，中途有餐厅。",
      avoid: "10 月天气变化大，不要重复冲东南长线；10/08 赶海组晚航班必须留回程余量。",
      stay: "继续住林德城河酒店；团结束后回酒店休息。",
      audiences: ["haigang", "tongyan"],
      accent: "#4ca88f",
    },
    {
      date: "10/08 周四",
      title: "赶海组晚飞 / 3 人黄金圈",
      status: "19:15 雷克雅未克凯夫拉维克机场 → 阿姆斯特丹",
      plan: "赶海组白天轻量安排，晚上飞阿姆斯特丹；彤彤等 3 人在 Bus Stop #13 随 Troll 团参加黄金圈一日游，09:00-17:00，不含餐。",
      avoid: "留足取行李、机场交通和凯夫拉维克机场值机时间。",
      stay: "赶海组晚上飞阿姆斯特丹；彤燕组继续住林德城河酒店。",
      audiences: ["haigang", "tongyan"],
      accent: "#f2994a",
    },
    {
      date: "10/09 周五",
      title: "赶海组阿姆斯特丹 / 3 人冰岛温泉",
      status: "阿姆斯特丹本地玩 1 天",
      plan: "娘娘这天和赶海组在阿姆斯特丹本地一起玩；彤彤等 3 人安排温泉与雷克雅未克轻量一日游，晚住机场附近。",
      avoid: "各组已分流：赶海组在阿姆斯特丹，彤彤等 3 人在冰岛。",
      stay: "赶海组住阿姆斯特丹；彤彤等 3 人今晚住凯夫拉维克机场附近，具体酒店名称待补。",
      audiences: ["haigang", "tongyan", "niangniang"],
      accent: "#f2994a",
    },
    {
      date: "10/10 周六",
      title: "回布鲁塞尔",
      status: "赶海组火车，彤燕飞机",
      plan: "赶海组从阿姆斯特丹坐火车回布鲁塞尔；彤燕 07:35 从雷克雅未克凯夫拉维克机场飞布鲁塞尔。",
      avoid: "两组可在布鲁塞尔重新汇合。",
      stay: "彤彤住布鲁塞尔市中心 Hilton；赶海组的布鲁塞尔住宿订单待补。",
      audiences: ["haigang", "tongyan", "niangniang"],
      accent: "#27ae60",
    },
  ],
  coreDays: [
    {
      date: "10/03 周六",
      title: "已订：黄金圈下午团（¥691.31/人）",
      route: "上午休息 / 10:00 会合早午饭 → 黄金圈下午团 → 酒店会合与休息",
      why: "建皇上午休息，赶海组抵达后约 10:00 会合、吃早午饭，再参加已订的黄金圈下午团；彤燕组 15:10 到冰岛后，大家在冰岛会合，晚间休息，不安排追极光。",
      checkpoints: ["10:00 会合 / 早午饭", "黄金圈下午团", "酒店会合", "晚饭 / 补给", "酒店休息"],
      details: [
        ["上午 / 下午", "建皇上午休息；赶海组抵达、寄存行李后约 10:00 会合，一起吃早午饭后参加已订的黄金圈下午团，12:00 在 Klettur Hótel（Mjölnisholt 12–14）接车，接车可能需要 30 分钟。"],
        ["15:10 后", "彤燕组落地冰岛，大家会合；先到酒店放行李。"],
        ["晚饭前后", "第二天 08:30 在 Bus Stop #13（Rauðarárstígur）等 Nice Travel 接车，接车窗口 08:30–09:00，提前确认行李规则。"],
        ["晚间", "不安排追极光；回酒店休息，为次日南岸两日团做准备。"],
      ],
      sleep: "住林德城河酒店，10/03 15:00 后入住；大件行李提前问前台能否寄存到 10/05 晚回雷市。",
      audiences: ["jianhuang", "haigang", "tongyan"],
      accent: "#7bb8d8",
    },
    {
      date: "10/04 周日",
      title: "南岸两日团第一天",
      route: "雷克雅未克 → 塞里雅兰瀑布 → 斯科加瀑布 → 雷尼斯黑沙滩 → 杰古沙龙冰河湖 / 南部住宿",
      why: "把 7 人同行的南岸、冰河湖和蓝冰洞集中在 10/04-10/05；小巴接送，不需要大家自驾和找路。",
      checkpoints: ["08:30 前 Bus Stop #13", "雷克雅未克出发", "塞里雅兰瀑布", "斯科加瀑布", "雷尼斯黑沙滩", "冰河湖区域"],
      details: [
        ["08:30", "在 Bus Stop #13（Rauðarárstígur）等 Nice Travel 接车，接车窗口 08:30–09:00；提前确认可携带行李。"],
        ["出发后", "雷克雅未克出发，小巴交通，司机/本地向导全程带队。"],
        ["上午", "看 Seljalandsfoss 塞里雅兰瀑布：天气和步道允许时可从瀑布后方看水帘。"],
        ["中午前后", "看 Skógafoss 斯科加瀑布：高崖落差大，水汽重，防水外套和防水鞋很重要。"],
        ["下午", "Reynisfjara 黑沙滩和 Reynisdrangar 玄武岩海蚀柱；远离海浪，注意 sneaker waves 暗浪警示。"],
        ["傍晚", "继续向东穿过火山沙原、熔岩地貌和冰川河区域，抵达杰古沙龙冰河湖一带。"],
        ["晚上", "住旅行团安排的南部住宿，含早餐；远离光污染，天气好有机会看极光。"],
      ],
      sleep: "团含冰岛南部住宿 1 晚和早餐；需要取消/改订林德城河酒店 10/04 晚。",
      audiences: ["jianhuang", "haigang", "tongyan"],
      accent: "#2f6f7e",
    },
    {
      date: "10/05 周一",
      title: "蓝冰洞 + 返回雷克雅未克",
      route: "南部住宿 → 瓦特纳冰川蓝冰洞 → 杰古沙龙冰河湖 / 钻石沙滩 → 雷克雅未克",
      why: "蓝冰洞是 10 月到 4 月的季节性重点项目，跟专业冰川向导进入更稳妥；晚上回雷克雅未克，10/06 建皇 13:00 去 Sky Lagoon，晚上飞米兰。",
      checkpoints: ["高帮登山鞋", "头盔 + 冰爪", "超级吉普", "蓝冰洞至少约 30 分钟", "钻石沙滩", "晚回雷克雅未克"],
      details: [
        ["集合待确认", "10/04 晚向导说明时确认次晨集合时间和位置；从南部住宿出发，带好相机、手套和防水外层，穿超过脚踝的结实登山鞋。"],
        ["白天", "导游提供头盔和冰爪，换乘超级吉普进入瓦特纳冰川可进入区域。"],
        ["冰洞体验", "向导按当天能见度和安全条件选择最佳蓝冰洞；在冰洞内看蓝色冰层、冰壁纹理和天然冰洞形态。"],
        ["冰河湖", "看杰古沙龙冰河湖的浮冰、冰川边缘和低光环境；附近钻石沙滩可看被海浪推上海滩的透明冰块。"],
        ["返程", "小巴返回雷克雅未克，路上继续走南岸；天气和路况会影响抵达时间。"],
        ["晚上", `${southCoastDinner} 回林德城河酒店住 10/05 晚；建皇提前确认 10/06 傍晚去雷克雅未克凯夫拉维克机场的交通。`],
      ],
      sleep: "住林德城河酒店；建皇 10/06 退房，赶海组和彤彤按各自日程续住。",
      audiences: ["jianhuang", "haigang", "tongyan"],
      accent: "#54a7c7",
    },
    {
      date: "10/06-10/08",
      title: "5 人高地与斯奈山 / 3 人黄金圈",
      route: "10/06 高地超级吉普（5 人）→ 10/07 斯奈山（5 人）→ 10/08 黄金圈（3 人）",
      why: "南岸共同段结束后，赶海组与彤彤等 5 人参加高地和斯奈山一日团；10/08 赶海组晚飞阿姆斯特丹，彤彤等 3 人走黄金圈。",
      checkpoints: ["10/06 酒店门口 08:30", "10/07 Bus Stop #9 08:00 前", "10/08 Bus Stop #13 09:00", "10/08 赶海组 19:15 飞阿姆斯特丹"],
      details: [
        ["10/06", "建皇 13:00 到 Sky Lagoon 入场，无接送，自行公共交通；结束后取行李并前往机场，19:20 飞米兰转里斯本；另外 5 人参加高地超级吉普，酒店门口接送，08:30-20:00，自备午餐；晚上回林德城河酒店。"],
        ["10/07", "5 人斯奈山半岛一日游：08:00 前到 Bus Stop #9 集合，预计 19:00 回城；不含餐，中途有餐厅。"],
        ["10/08", "彤彤等 3 人在 Bus Stop #13 随 Troll 团走黄金圈，09:00-17:00；赶海组 19:15 从凯夫拉维克机场飞阿姆斯特丹，留足取行李、交通和值机时间。"],
      ],
      sleep: "赶海组 10/08 离开前住林德城河酒店；彤彤 10/05 入住、10/09 退房，10/09 晚改住机场附近。",
      audiences: ["haigang", "tongyan"],
      accent: "#4ca88f",
    },
  ],
  personPlans: [
    {
      id: "jianhuang",
      name: "建皇",
      role: "建皇组合：09/25-09/27 与龙龙、娘娘住里斯本豪华四人间；9/26 四人走里斯本郊区海边一日游，9/27 一起去波尔图；10/04-10/05 Nice Travel 7 人南岸两日团已订并全额支付。",
      color: "#2F80ED",
      days: [
        ["09/25", "北京 → 伦敦中转 → 里斯本", "13:35 从北京首都机场 T3 起飞，17:40 落地伦敦希思罗机场 T2；伦敦中转 1 小时 05 分，18:45 从伦敦希思罗机场 T2 起飞，21:35 落地里斯本机场 T1。落地后入住已订的 The Delight Hostel 豪华四人间：建皇（两人）、龙龙、娘娘共 4 人入住。"],
        ["09/26", "里斯本郊区海边一日游", "建皇（两人）、龙龙和娘娘四人报名这个专业路线：09:00 从里斯本市区出发，10:00 地狱之口，10:50 罗卡角，12:00 雷加莱拉庄园，14:30 辛特拉王宫，16:00 佩纳宫。主打大西洋海岸、欧亚大陆最西端、雷加莱拉庄园创始之井和两座宫殿；当天不再叠加里斯本市区重行程。"],
        ["09/27", "里斯本 → 波尔图", lisbonPortoBusDetail + "下午玩老城河岸、路易一世大桥、杜罗河边。娘娘当晚飞阿姆斯特丹；建皇（两人）和龙龙晚上入住波尔图盖亚美居酒店，实付 ¥544.94。"],
        ["09/28", "波尔图 → 巴黎夜游 + 已订寄存（不住酒店）", `09:05 从波尔图弗朗西斯科卡内罗机场起飞，12:15 落地巴黎奥利机场 T1，航班易捷航空 U24886；巴黎跨夜中转 17 小时 45 分，第二天 06:00 从巴黎戴高乐机场 T2D 起飞去冰岛；娘娘已在 09/27 晚从波尔图飞回阿姆斯特丹。落地后从奥利机场直接前往 <a href="${parisLuggage.url}" target="_blank" rel="noopener noreferrer">${parisLuggage.name} · 打开门店地图</a> 寄存行李。${parisLuggage.detail} 13:00 是预约开始时间，不是必须抵达门店的时间；从机场取行李后按实际交通情况前往。<a href="https://www.google.com/maps/dir/?api=1&origin=Paris%20Orly%20Airport%20Terminal%201&destination=82%20Rue%20du%20Faubourg%20Saint-Martin%2075010%20Paris&travelmode=transit" target="_blank" rel="noopener noreferrer">奥利机场 → 寄存点公共交通导航</a>。寄存后在巴黎游玩，保留日落塞纳河游船、20:00 埃菲尔铁塔亮灯 / 闪灯安排；当晚不订酒店。半夜返回同一门店取行李，再直接去戴高乐机场；约 02:00 为计划出发时间，需提前落实夜间交通，预留取件、路程和机场值机安检时间。<a href="https://www.google.com/maps/dir/?api=1&origin=82%20Rue%20du%20Faubourg%20Saint-Martin%2075010%20Paris&destination=Charles%20de%20Gaulle%20Airport%20Terminal%202D&travelmode=driving" target="_blank" rel="noopener noreferrer">寄存点 → 戴高乐 T2D 乘车路线</a>。门店法国客服电话：+33 1 87 21 88 44；<a href="https://lockandenjoy.com/en/paris-chooselockers/gare-de-lest/" target="_blank" rel="noopener noreferrer">寄存门店官网</a>。`],
        ["09/29", "巴黎 → 冰岛 + 史费拉浮潜（已订 ¥2585.04/2人）", "凌晨从 LOCK & enjoy! 巴黎东站店取回行李，计划约 02:00 从寄存点出发去戴高乐机场 T2D；前一晚不住酒店，寄存订单截至当天 04:00，需在出发去机场前完成取件。06:00 从巴黎戴高乐机场 T2D 起飞，07:50 落地雷克雅未克凯夫拉维克机场，航班易捷航空 U24629；飞行 3 小时 50 分。落地后进雷克雅未克市区放行李/换保暖衣物；12:00 在 Klettur Hótel（Mjölnisholt 12–14）等候 Arctic Adventures 接车，接车可能需要 30 分钟。浮潜订单包含雷市接送，无需自行前往辛格维利尔国家公园；实际回城时间听向导安排，晚上雷克雅未克市区吃饭和轻量 CityWalk。<a href=\"https://cn.adventures.is/iceland/day-tours/snorkeling-and-diving/into-the-blue/\" target=\"_blank\" rel=\"noreferrer\">查看团页</a>"],
        ["09/30", "已订：Kerlingarfjoll 高地徒步团（¥2568.57/2人）", "已订 Kerlingarfjoll Hiking Tour；08:00 在 Klettur Hótel（Mjölnisholt 12–14）接车，接车可能需要 30 分钟；徒步路线听向导安排。<a href=\"https://cn.adventures.is/iceland/day-tours/hiking/kerlingarfjoll-hiking-tour/\" target=\"_blank\" rel=\"noreferrer\">查看团页</a>"],
        ["10/01", "已订：斯奈山半岛小团（¥1796/2人，¥898/人）", "已订 Arctic Adventures 斯奈山半岛小团；08:00 在 Klettur Hótel（Mjölnisholt 12–14）接车，接车可能需要 30 分钟；停靠顺序听向导安排。<a href=\"https://cn.adventures.is/iceland/day-tours/sightseeing-tours/snaefellsnes-peninsula-small-group-tour/\" target=\"_blank\" rel=\"noreferrer\">查看团页</a>"],
        ["10/02", "已订：兰德曼那劳卡高地超级吉普一日团（¥3260.37/2人）", "已订 Arctic Adventures 兰德曼那劳卡高地超级吉普一日团，雷克雅未克接送，08:00 在 Klettur Hótel（Mjölnisholt 12–14）接车；路线、温泉停留和实际返回时间听向导安排。<a href=\"https://cn.adventures.is/iceland/day-tours/super-jeeps/landmannalaugar-safari/\" target=\"_blank\" rel=\"noreferrer\">查看团页</a>"],
        ["10/03", "已订：黄金圈下午团（¥691.31/人）", "建皇上午休息；赶海组约 10:00 到达后一起吃早午饭，12:00 到 Klettur Hótel（Mjölnisholt 12–14）等 Arctic Adventures 接车，接车可能等待最多 30 分钟。晚间休息，不安排追极光。<a href=\"https://cn.adventures.is/iceland/day-tours/golden-circle-tours/golden-circle-afternoon/\" target=\"_blank\" rel=\"noreferrer\">查看团页</a>"],
        ["10/04", "已订：南岸两日团第一天（7 人）", "Nice Travel 7 人团已订并全额支付；团款总计 509,400 ISK。10/04 08:30 在 Bus Stop #13（Rauðarárstígur）等 Nice Travel 接车，接车窗口 08:30–09:00；当天看塞里雅兰瀑布、斯科加瀑布、雷尼斯黑沙滩，晚上住团含南部住宿。<a href=\"https://nicetravel.is/iceland-tours/2-day-south-coast-tour-blue-ice-cave-jokulsarlon-black-beach-waterfalls/\" target=\"_blank\" rel=\"noreferrer\">查看团页</a>"],
        ["10/05", "已订：南岸两日团第二天 + 蓝冰洞（7 人） + Caruso 已订晚餐", `继续已订的 Nice Travel 南岸两日团：看蓝冰洞、杰古沙龙冰河湖和钻石沙滩，晚上回雷克雅未克；提前确认 10/06 傍晚去雷克雅未克凯夫拉维克机场的交通。<a href="https://nicetravel.is/iceland-tours/2-day-south-coast-tour-blue-ice-cave-jokulsarlon-black-beach-waterfalls/" target="_blank" rel="noreferrer">查看团页</a> ${southCoastDinner}`],
        ["10/06", "已订：Sky Lagoon 温泉（¥1441.87/2人） → 米兰转机", "13:00 到 Sky Lagoon 入场；重新预订不含接送，需自行乘公共交通前往。退房后先确认行李寄存与取回安排，出发前查询往返公交班次，预留步行、换乘、取行李和机场值机时间；19:20 从雷克雅未克凯夫拉维克机场起飞，10/07 01:30 到米兰马尔彭萨机场，航班维兹航空马耳他 W46454。<a href=\"https://www.google.com/maps/dir/?api=1&origin=Fosshotel%20Lind%20Reykjavik&destination=Sky%20Lagoon%20Kopavogur&travelmode=transit\" target=\"_blank\" rel=\"noreferrer\">查看公共交通路线</a>"],
        ["10/07", "米兰 → 里斯本半日 → 哥本哈根", "06:30 从米兰马尔彭萨机场 T2 起飞，08:30 落地里斯本机场 T1，航班易捷航空 U23873。白天只做里斯本半日轻量城市步行，市区收尾、吃饭、买伴手礼；18:15 从里斯本机场 T1 起飞，23:00 落地哥本哈根机场 T3。晚上入住 Cabinn Metro Hotel，地址 Arne Jacobsens Allé 2，电话 +4532465700。"],
        ["10/08", "哥本哈根转机一日游 + 回北京", "10/07 23:00 已落地哥本哈根机场 T3；10/08 白天走新港、国王新广场、阿美琳堡王宫 / 小美人鱼轻量线，16:00 左右回机场更稳。19:05 从哥本哈根机场 T3 起飞，10/09 09:55 落地北京首都机场 T3。"],
        ["10/09", "抵达北京 → 直接去上班", "周五 09:55 落地北京首都机场 T3；落地后直接去上班。"],
      ],
    },
    {
      id: "haigang",
      name: "赶海组",
      role: "两个人：10/03 早到冰岛；10/06 建皇晚飞后，和彤燕组四个人包车；10/08 晚飞阿姆斯特丹。",
      color: "#F2994A",
      days: [
        ["09/30", "北京 → 上海跨夜中转", "19:30 从北京首都机场（PEK）T2 起飞，21:50 抵达上海浦东机场（PVG）T1，东方航空 MU5164，飞行 2 小时 20 分。上海跨夜中转 14 小时 40 分，下一班 10/01 12:30 飞阿姆斯特丹；北京至阿姆斯特丹联程行李直达。"],
        ["10/01", "上海 → 阿姆斯特丹", "12:30 从上海浦东机场（PVG）T1 起飞，18:30 抵达阿姆斯特丹史基浦机场（AMS），东方航空 MU771，飞行 12 小时，时刻均为当地时间。抵达后休息，阿姆斯特丹当晚住宿待补；次日坐大巴去布鲁塞尔，衔接飞往哥本哈根的航班。"],
        ["10/02", "阿姆斯特丹 → 大巴到布鲁塞尔 → 哥本哈根", "从阿姆斯特丹坐大巴前往布鲁塞尔，大巴班次、出发时间和上下车站待补；抵达后另行前往布鲁塞尔机场，预留转场与值机时间。15:15 从布鲁塞尔机场起飞，16:45 抵达哥本哈根机场，SAS SK1594。哥本哈根过夜中转 13 小时 35 分，下一班 10/03 06:20 起飞去冰岛。"],
        ["10/03", "哥本哈根 → 冰岛 + 已订黄金圈下午团", "06:20 从哥本哈根机场起飞，07:40 落地雷克雅未克凯夫拉维克机场；先去林德城河酒店寄存行李 / 入住，约 10:00 和建皇会合、吃早午饭，12:00 到 Klettur Hótel（Mjölnisholt 12–14）等 Arctic Adventures 接车，接车可能等待最多 30 分钟；晚间休息，不安排追极光。<a href=\"https://cn.adventures.is/iceland/day-tours/golden-circle-tours/golden-circle-afternoon/\" target=\"_blank\" rel=\"noreferrer\">查看团页</a>"],
        ["10/04", "已订：南岸两日团第一天（7 人）", "Nice Travel 7 人团已订并全额支付；10/04 08:30 在 Bus Stop #13（Rauðarárstígur）等 Nice Travel 接车，接车窗口 08:30–09:00。当天看瀑布、黑沙滩，晚上住团含南部住宿。<a href=\"https://nicetravel.is/iceland-tours/2-day-south-coast-tour-blue-ice-cave-jokulsarlon-black-beach-waterfalls/\" target=\"_blank\" rel=\"noreferrer\">查看团页</a>"],
        ["10/05", "已订：南岸两日团第二天 + 蓝冰洞（7 人） + Caruso 已订晚餐", `继续已订的 Nice Travel 南岸两日团：看蓝冰洞、杰古沙龙冰河湖和钻石沙滩，晚上回林德城河酒店。<a href="https://nicetravel.is/iceland-tours/2-day-south-coast-tour-blue-ice-cave-jokulsarlon-black-beach-waterfalls/" target="_blank" rel="noreferrer">查看团页</a> ${southCoastDinner}`],
        ["10/06", "兰德曼那劳卡高地超级吉普（5 人）", "酒店门口接送，08:30-20:00；自备午餐，晚上继续住林德城河酒店。"],
        ["10/07", "四人冰岛加玩", "天气稳定可走斯奈山半岛；天气差就走雷克雅内斯半岛 / 蓝湖 / 市区备选；晚上继续住林德城河酒店。"],
        ["10/08", "雷克雅未克 / 蓝湖 → 阿姆斯特丹", "白天轻量，必须留足取行李、机场交通和值机时间；从林德城河酒店出发去雷克雅未克凯夫拉维克机场，19:15 起飞，10/09 00:20 落地阿姆斯特丹史基浦机场。阿姆斯特丹住宿待补。"],
        ["10/09", "阿姆斯特丹本地游", "和娘娘本地汇合：运河、市区、荷兰国家博物馆 / 梵高博物馆二选一；阿姆斯特丹住宿待补订单。"],
        ["10/10", "火车回布鲁塞尔", "娘娘可一起走阿姆斯特丹 → 布鲁塞尔，或在阿姆斯特丹本地送行；赶海组坐火车回布鲁塞尔。"],
        ["10/11-10/12", "布鲁塞尔 → 上海中转 → 北京", "10/11 12:20 从布鲁塞尔机场起飞，10/12 05:20 落地上海浦东机场 T2；上海中转 3 小时，08:20 从上海浦东机场 T2 起飞，10:35 落地北京大兴机场。这两天只做返程。"],
      ],
    },
    {
      id: "tongyan",
      name: "彤燕组",
      role: "两个人：10/03 下午到冰岛；10/06 建皇晚飞后，和赶海组四个人包车；10/10 早上回布鲁塞尔。",
      color: "#27AE60",
      days: [
        ["10/02", "深圳 → 上海中转", "17:10 从深圳宝安机场 T3 起飞，19:40 落地上海浦东机场；上海中转 6 小时 30 分，下一班 10/03 02:10 从上海浦东机场 T2 起飞去布鲁塞尔。"],
        ["10/03", "上海 → 布鲁塞尔中转 → 冰岛 + 酒店会合", "02:10 从上海浦东机场 T2 起飞，08:10 落地布鲁塞尔机场；布鲁塞尔中转 5 小时 40 分，13:50 从布鲁塞尔机场起飞，15:10 落地雷克雅未克凯夫拉维克机场。落地后去林德城河酒店和大家会合，晚间休息，不安排追极光。"],
        ["10/04", "已订：南岸两日团第一天（7 人）", "Nice Travel 7 人团已订并全额支付；10/04 08:30 在 Bus Stop #13（Rauðarárstígur）等 Nice Travel 接车，接车窗口 08:30–09:00。当天看瀑布、黑沙滩，晚上住团含南部住宿。<a href=\"https://nicetravel.is/iceland-tours/2-day-south-coast-tour-blue-ice-cave-jokulsarlon-black-beach-waterfalls/\" target=\"_blank\" rel=\"noreferrer\">查看团页</a>"],
        ["10/05", "已订：南岸两日团第二天 + 蓝冰洞（7 人） + Caruso 已订晚餐", `继续已订的 Nice Travel 南岸两日团：看蓝冰洞、杰古沙龙冰河湖和钻石沙滩，晚上回林德城河酒店。<a href="https://nicetravel.is/iceland-tours/2-day-south-coast-tour-blue-ice-cave-jokulsarlon-black-beach-waterfalls/" target="_blank" rel="noreferrer">查看团页</a> ${southCoastDinner}`],
        ["10/06", "兰德曼那劳卡高地超级吉普（5 人）", "酒店门口接送，08:30-20:00；自备午餐，晚上继续住林德城河酒店。"],
        ["10/07", "四人冰岛加玩", "天气稳定可走斯奈山半岛；天气差就走雷克雅内斯半岛 / 蓝湖 / 市区备选；晚上继续住林德城河酒店。"],
        ["10/08", "赶海组离开后", "送赶海组去雷克雅未克凯夫拉维克机场；自己留雷克雅未克、蓝湖或雷克雅内斯半岛；晚上继续住林德城河酒店。"],
        ["10/09", "离开前轻量日", "不要跑远，建议雷克雅内斯半岛、蓝湖或雷克雅未克市区轻量收尾；晚上仍住林德城河酒店，10/10 清晨去机场。"],
        ["10/10", "冰岛 → 布鲁塞尔", "07:35 从雷克雅未克凯夫拉维克机场起飞，12:55 落地布鲁塞尔机场，和赶海组布鲁塞尔段重新接上。"],
        ["10/11-10/12", "布鲁塞尔 → 北京中转 → 深圳", "10/11 13:20 从布鲁塞尔机场起飞，10/12 05:00 落地北京首都机场；北京中转 3 小时 30 分，08:30 从北京首都机场 T2 起飞，11:50 落地深圳宝安机场。"],
      ],
    },
    {
      id: "niangniang",
      name: "娘娘",
      role: "住阿姆斯特丹，在审计公司要加班，不去冰岛；9/25 从阿姆斯特丹飞里斯本，9/26 和建皇组合走里斯本郊区海边一日游，9/27 一起去波尔图并当晚飞回阿姆斯特丹。",
      color: "#8E6AC8",
      days: [
        ["09/25", "阿姆斯特丹 → 里斯本", "19:40 从阿姆斯特丹史基浦机场起飞，21:50 落地里斯本机场 T1；飞行 2 小时 10 分，无中转。落地后与建皇组合、龙龙入住已订的 The Delight Hostel 豪华四人间。"],
        ["09/26", "里斯本郊区海边一日游", "和建皇组合一起报名这个专业路线：09:00 从里斯本市区出发，10:00 地狱之口，10:50 罗卡角，12:00 雷加莱拉庄园，14:30 辛特拉王宫，16:00 佩纳宫。主打大西洋海岸、罗卡角、创始之井和辛特拉宫殿线。"],
        ["09/27", "里斯本 → 波尔图 + 晚上飞阿姆斯特丹", lisbonPortoBusDetail + "下午玩波尔图老城、路易一世大桥、杜罗河边。20:50 从波尔图弗朗西斯科卡内罗机场起飞，09/28 00:25 落地阿姆斯特丹史基浦机场，航班荷兰泛航 HV6004；飞行 2 小时 35 分，无中转。"],
        ["09/28", "抵达阿姆斯特丹", "00:25 落地阿姆斯特丹史基浦机场；今天开始不跟建皇组合去巴黎/冰岛，按阿姆斯特丹工作节奏安排。"],
        ["09/28-10/08", "阿姆斯特丹上班", "娘娘不去冰岛，在审计公司要加班；冰岛段在页面里不算入人数。"],
        ["10/09", "阿姆斯特丹本地和赶海组汇合", "运河区、博物馆区、荷兰国家博物馆 / 梵高博物馆二选一、晚饭。"],
        ["10/10", "送赶海组回布鲁塞尔", "可一起走阿姆斯特丹 → 布鲁塞尔火车，或在阿姆斯特丹本地送行。"],
      ],
    },
  ],
  spotCategories: [
    ["iceland-six", "南岸共同段（7 人）"],
    ["jianhuang-spots", "建皇专属"],
    ["four-after", "冰岛后续段"],
    ["niangniang", "娘娘相关"],
    ["all", "全部"],
  ],
  spots: [
    {
      id: "sintra-day-tour",
      category: "portugal",
      segments: ["jianhuang-spots", "niangniang"],
      participant: "建皇组合 + 龙龙 + 娘娘（共 4 人）",
      transport: "好云旅游一日游 / 旅行社车；09:00 里斯本市区出发",
      date: "09/26",
      city: "里斯本周边",
      title: "里斯本郊区海边一日游",
      image: "assets/spots/portugal/cabo-da-roca-sunset.webp",
      images: ["assets/spots/portugal/cabo-da-roca-sunset.webp", "assets/spots/portugal/boca-do-inferno.webp", "assets/spots/portugal/regaleira-initiation-well.webp", "assets/spots/portugal/sintra-national-palace.webp", "assets/spots/portugal/pena-palace-exterior.webp"],
      bestTime: "09:00 出发，全天",
      open: "按旅行社确认单为准；截图行程为 09:00 里斯本市区出发。",
      sunset: "里斯本 09/26 日落约 19:28",
      viewpoint: "罗卡角看欧洲大陆西端海岸线；佩纳宫看彩色宫殿和辛特拉山景；雷加莱拉庄园看花园和井。",
      notes: [
        "截图行程：09:00 里斯本市区出发，10:00 地狱之口，10:50 罗卡角，12:00 雷加莱拉庄园，14:30 辛特拉王宫，16:00 佩纳宫。",
        "这是建皇组合 + 娘娘三个人想订的葡萄牙共同日；目前只有截图信息，暂无可点击购买链接。",
        "佩纳宫和雷加莱拉庄园步行不少，穿舒服鞋；罗卡角风大，带外套；当天不要再叠加里斯本市区重行程。",
      ],
    },
    {
      id: "belem",
      category: "portugal",
      segments: ["jianhuang-spots"],
      participant: "建皇组合",
      transport: "城市步行 / 打车 / 公共交通，不涉及冰岛包车",
      date: "10/07",
      city: "里斯本",
      title: "里斯本半日 CityWalk",
      image: "assets/spots/belem.webp",
      images: ["assets/spots/belem.webp", "assets/spots/gallery/belem-1.webp", "assets/spots/gallery/belem-2.webp"],
      bestTime: "半天轻量安排",
      open: "Jeronimos 修道院常规日间开放，周一通常关闭；2026 具体票务时间出发前复核。",
      sunset: "里斯本 10/07 日落约 19:10",
      viewpoint: "Belém 河边 / Alfama 观景台二选一，不要把半天走成满日。",
      notes: ["10/07 只留半天给里斯本 CityWalk。", "建议 Belém、Alfama、观景台按体力二选一，不再塞辛特拉。", "Pastéis de Belém 可当补给，晚上留时间去机场/整理行李。"],
    },
    {
      id: "porto",
      category: "portugal",
      segments: ["jianhuang-spots"],
      participant: "建皇组合",
      transport: "09/27 FlixBus 1000：08:00 Lisbon (Oriente) 39D 站台 → 11:15 Porto (TIC - Campanhã)，3 小时 15 分；本地步行 / 打车",
      date: "09/27",
      city: "波尔图",
      title: "路易一世大桥 + 老城河岸",
      image: "assets/spots/porto.webp",
      images: ["assets/spots/porto.webp", "assets/spots/gallery/porto-1.webp"],
      bestTime: "17:00-19:45",
      open: "桥梁和河岸全天可看；酒窖参观需看各酒庄预约。",
      sunset: "波尔图 09/27 日落约 19:24",
      viewpoint: "Jardim do Morro / Serra do Pilar，看大桥、老城和杜罗河日落。",
      notes: [lisbonPortoBusDetail, "下午只抓老城河岸、路易一世大桥、杜罗河边这些高性价比区域。", "娘娘 20:50 从波尔图飞阿姆斯特丹；建皇 09/28 09:05 从波尔图飞巴黎奥利机场，晚上别喝太晚。"],
    },
    {
      id: "paris-cruise",
      category: "paris",
      segments: ["jianhuang-spots"],
      participant: "建皇组合",
      transport: "奥利机场落地后直达已订的 LOCK & enjoy! 巴黎东站店寄存，再进城游玩",
      date: "09/28",
      city: "巴黎",
      title: "日落塞纳河游船",
      image: "assets/spots/paris-cruise.webp",
      images: ["assets/spots/paris-cruise.webp", "assets/spots/gallery/paris-cruise-1.webp"],
      bestTime: "18:30-19:45",
      open: "Bateaux Mouches 当前高季 10:00-22:00，每 30 分钟一班，船程约 1 小时。",
      sunset: "巴黎 09/28 日落约 19:37",
      viewpoint: "优先坐露天上层右侧，接近 Eiffel Tower 和 Alexandre III 时最好拍。",
      notes: ["已订 LOCK & enjoy! 巴黎东站店（82 Rue du Faubourg Saint-Martin）寄存：09/28 13:00–09/29 04:00，M+ 型 18 号柜，€16.90；当晚不住酒店，半夜取件后约 02:00 出发去戴高乐机场。", "18:30-19:00 上船最适合吃到日落光。", "游船结束立刻去特罗卡德罗广场，不要临时加卢浮宫。"],
    },
    {
      id: "eiffel-night",
      category: "paris",
      segments: ["jianhuang-spots"],
      participant: "建皇",
      transport: "巴黎转机短停：塞纳河游船后打车 / 地铁到 Trocadéro",
      date: "09/28",
      city: "巴黎",
      title: "亮灯埃菲尔铁塔",
      image: "assets/spots/eiffel.webp",
      images: ["assets/spots/eiffel.webp", "assets/spots/gallery/eiffel-1.webp", "assets/spots/gallery/eiffel-2.webp", "assets/spots/gallery/eiffel-3.webp"],
      bestTime: "19:50-20:10",
      open: "官方说明：铁塔夜幕后亮灯，整点开始闪灯 5 分钟，持续到闭塔。",
      sunset: "巴黎 09/28 日落约 19:37；20:00 大概率是第一场好看的整点闪灯。",
      viewpoint: "Trocadéro 平台第一选择；人多就退到 Pont d'Iéna 桥侧。",
      notes: ["夜间灯光有版权限制，自己朋友圈一般没问题，商业发布要注意。", "看完铁塔后继续在巴黎游玩，当晚不订酒店；半夜回 LOCK & enjoy! 巴黎东站店取行李，09/29 约 02:00 从寄存点出发去戴高乐机场 T2D，06:00 起飞去冰岛。", "地铁/打车预留堵车和安检时间。"],
    },
    {
      id: "snaefellsnes-booked",
      category: "iceland",
      segments: ["jianhuang-spots"],
      participant: "建皇组合 10/01 已订",
      transport: "Arctic Adventures 斯奈山半岛小团；08:00 在 Klettur Hótel（Mjölnisholt 12–14）接车，约 11 小时",
      date: "10/01",
      city: "斯奈山半岛",
      title: "斯奈山半岛小团（已订 ¥1796/2人，¥898/人）",
      image: "assets/spots/tourlink/snaefellsnes-aa-1.webp",
      images: ["assets/spots/tourlink/snaefellsnes-aa-1.webp", "assets/spots/tourlink/snaefellsnes-aa-2.webp", "assets/spots/tourlink/snaefellsnes-aa-3.webp"],
      bestTime: "08:00 在 Klettur Hótel 接车",
      open: "已订斯奈山半岛一日团；08:00 在 Klettur Hótel（Mjölnisholt 12–14）接车，接车可能需要 30 分钟；停靠顺序听向导安排。",
      sunset: "斯奈山 10/01 日出约 07:35 / 日落约 18:57",
      viewpoint: "教会山、黑教堂、海岸线、渔村和黑沙滩；按当天路线和天气调整。",
      notes: ["10/01 已订 Arctic Adventures 斯奈山半岛小团。", "车程长，建议带午餐、零食、水和晕车药。", "10 月风大路滑，穿防风防水外套和防水鞋。", "<a href=\"https://cn.adventures.is/iceland/day-tours/sightseeing-tours/snaefellsnes-peninsula-small-group-tour/\" target=\"_blank\" rel=\"noreferrer\">打开 Arctic Adventures 团页</a>"],
    },
    {
      id: "landmannalaugar-booked",
      category: "iceland",
      segments: ["jianhuang-spots"],
      participant: "建皇组合 10/02 已订",
      transport: "Arctic Adventures 超级吉普团；08:00 在 Klettur Hótel（Mjölnisholt 12–14）接车，实际返回听向导安排",
      date: "10/02",
      city: "冰岛高地",
      title: "兰德曼那劳卡高地超级吉普一日团（已订 ¥3260.37/2人）",
      image: "assets/spots/tourlink/landmannalaugar-aa-2.webp",
      images: ["assets/spots/tourlink/landmannalaugar-aa-2.webp", "assets/spots/tourlink/landmannalaugar-aa-3.webp", "assets/spots/iceland/landmannalaugar-1.webp"],
      bestTime: "08:00 在 Klettur Hótel 接车",
      open: "已订兰德曼那劳卡高地超级吉普一日团；08:00 在 Klettur Hótel（Mjölnisholt 12–14）接车；路线、温泉停留和实际返回时间听向导安排。",
      sunset: "雷克雅未克 10/02 日出约 07:38 / 日落约 18:54",
      viewpoint: "高地彩色山、熔岩地貌和温泉区；徒步安排以向导和当天安全条件为准。",
      notes: [
        "10/02 已订 Arctic Adventures 兰德曼那劳卡高地超级吉普一日团。",
        "带泳衣、毛巾、防水外套、防水鞋；高地风大，保暖层要足够。",
        "<a href=\"https://cn.adventures.is/iceland/day-tours/super-jeeps/landmannalaugar-safari/\" target=\"_blank\" rel=\"noreferrer\">打开 Arctic Adventures 团页</a>",
      ],
    },
    {
      id: "kerlingarfjoll",
      category: "iceland",
      segments: ["jianhuang-spots"],
      participant: "建皇组合 09/30 已订",
      transport: "Arctic Adventures Kerlingarfjoll 高地徒步团；08:00 在 Klettur Hótel（Mjölnisholt 12–14）接车",
      date: "09/30",
      city: "Kerlingarfjoll 高地",
      title: "Kerlingarfjoll 高地徒步团（已订 ¥2568.57/2人）",
      image: "assets/spots/tourlink/kerlingarfjoll-official-1.webp",
      images: ["assets/spots/tourlink/kerlingarfjoll-official-1.webp", "assets/spots/tourlink/kerlingarfjoll-official-2.webp", "assets/spots/tourlink/kerlingarfjoll-official-3.webp"],
      bestTime: "08:00 在 Klettur Hótel 接车",
      open: "已订 Kerlingarfjoll 高地徒步团；08:00 在 Klettur Hótel（Mjölnisholt 12–14）接车，接车可能需要 30 分钟；路线和返回时间听向导安排。",
      sunset: "Kerlingarfjoll 09/30 日出约 07:31 / 日落约 18:59",
      viewpoint: "高地地热区、山谷与徒步路线；当天严格按向导和天气安全要求行动。",
      notes: [
        "9/30 已订 Kerlingarfjoll Hiking Tour。",
        "高地天气变化快，按确认单准备保暖、防风防水衣物和徒步鞋。",
        "<a href=\"https://cn.adventures.is/iceland/day-tours/hiking/kerlingarfjoll-hiking-tour/\" target=\"_blank\" rel=\"noreferrer\">打开 Arctic Adventures 团页</a>",
      ],
    },
    {
      id: "silfra-snorkel",
      category: "iceland",
      segments: ["jianhuang-spots"],
      participant: "建皇组合 09/29 已订",
      transport: "Arctic Adventures 史费拉浮潜团；12:00 在 Klettur Hótel（Mjölnisholt 12–14）接车，包含雷市接送",
      date: "09/29",
      city: "辛格维利尔国家公园",
      title: "史费拉裂缝浮潜 + 雷克雅未克市区（已订 ¥2585.04/2人）",
      image: "assets/spots/tourlink/silfra-snorkel-1.webp",
      images: ["assets/spots/tourlink/silfra-snorkel-1.webp", "assets/spots/tourlink/silfra-snorkel-2.webp", "assets/spots/tourlink/silfra-snorkel-3.webp", "assets/spots/iceland/reykjavik-harpa.webp"],
      bestTime: "12:00 在 Klettur Hótel 等车；接车可能需要 30 分钟，返回时间听向导安排",
      open: "团页写全年运营，含专业向导、史费拉入场费、浮潜装备、干衣装备、热可可和导游拍照；订单含雷市接送，12:00 在 Klettur Hótel（Mjölnisholt 12–14）接车，结束时间听向导安排。",
      sunset: "雷克雅未克 09/29 日出约 07:29 / 日落约 19:04",
      viewpoint: "史费拉裂缝是在北美板块和欧亚板块之间浮潜，水非常清澈；回城后只安排雷克雅未克市区轻量散步。",
      notes: [
        "落地当天先放行李、吃东西、换保暖衣物，12:00 在 Klettur Hótel（Mjölnisholt 12–14）接车；上车点与住宿的 Fosshotel Lind 不同。",
        "穿贴身保暖内层和厚袜子，干衣里面也会冷；不要戴隐形眼镜以外不适合进水的物品。",
        "实际回城时间听向导安排，晚上只做吃饭、补给和早睡。",
        "<a href=\"https://cn.adventures.is/iceland/day-tours/snorkeling-and-diving/into-the-blue/\" target=\"_blank\" rel=\"noreferrer\">打开 Arctic Adventures 团页</a>",
      ],
    },
    {
      id: "south-coast-two-day",
      category: "iceland",
      segments: ["iceland-six"],
      participant: "南岸 7 人 10/04-10/05 已订，已全额支付",
      transport: "两日小巴团；雷克雅未克接送；蓝冰洞段换乘超级吉普",
      date: "10/04-10/05",
      city: "冰岛南岸",
      title: "南岸两日 + 蓝冰洞",
      image: "assets/spots/tourlink/nice-south-waterfall-1.webp",
      images: ["assets/spots/tourlink/nice-south-waterfall-1.webp", "assets/spots/reynisfjara.webp", "assets/spots/gallery/reynisfjara-seljalandsfoss.webp", "assets/spots/gallery/reynisfjara-skogafoss.webp", "assets/spots/iceland/jokulsarlon-1.webp", "assets/spots/iceland/diamond-beach-1.webp"],
      bestTime: "10/04 08:30 在 Bus Stop #13 等车，接车窗口 08:30–09:00；10/05 早晨集合听向导前一晚通知",
      open: "Nice Travel 团页：南岸两日、蓝冰洞、杰古沙龙冰河湖、黑沙滩和瀑布；10/04 08:30 在 Bus Stop #13（Rauðarárstígur）等车，接车窗口 08:30–09:00；具体住宿和行李规则以最终确认单为准。",
      sunset: "雷克雅未克 10/04 日落约 18:47，10/05 约 18:44",
      viewpoint: "塞里雅兰瀑布后方、斯科加瀑布正面水雾、雷尼斯黑沙滩玄武岩柱、杰古沙龙冰河湖湖边和钻石沙滩。",
      notes: ["7 人团已订：总价 509,400 ISK，已全额支付。", "10/04 08:30 在 Bus Stop #13（Rauðarárstígur）等 Nice Travel 接车，接车窗口 08:30–09:00；住宿、早餐和行李规则以 Nice Travel 确认单为准。", "黑沙滩不要靠近浪线；蓝冰洞必须听冰川向导指挥。", "<a href=\"https://nicetravel.is/iceland-tours/2-day-south-coast-tour-blue-ice-cave-jokulsarlon-black-beach-waterfalls/\" target=\"_blank\" rel=\"noreferrer\">打开 Nice Travel 团页</a>"],
    },
    {
      id: "golden-circle",
      category: "iceland",
      segments: ["jianhuang-spots", "four-after"],
      participant: "建皇组合 + 赶海组 10/03 已订",
      transport: "Arctic Adventures 黄金圈下午团；12:00 在 Klettur Hótel（Mjölnisholt 12–14）接车，接车可能等待最多 30 分钟",
      date: "10/03",
      city: "雷克雅未克 / 黄金圈",
      title: "已订：黄金圈下午团（¥691.31/人）",
      image: "assets/spots/gullfoss.webp",
      images: ["assets/spots/gullfoss.webp", "assets/spots/iceland/thingvellir-1.webp", "assets/spots/iceland/strokkur-1.webp"],
      bestTime: "12:00 在 Klettur Hótel 等车；接车可能等待最多 30 分钟",
      open: "已订 Arctic Adventures 黄金圈下午团；建皇上午休息，约 10:00 与赶海组会合、吃早午饭，12:00 在 Klettur Hótel（Mjölnisholt 12–14）等车。",
      sunset: "雷克雅未克 10/03 日落约 18:50",
      viewpoint: "辛格维利尔国家公园、盖歇尔间歇泉、黄金瀑布。",
      notes: ["10/03 已订 Arctic Adventures 黄金圈下午团，价格 ¥691.31/人。", "建皇上午休息，等待赶海组约 10:00 到达；12:00 在 Klettur Hótel（Mjölnisholt 12–14）等车，接车可能等待最多 30 分钟。", "10/03 晚间休息，不安排追极光；为次日南岸两日团做准备。", "<a href=\"https://cn.adventures.is/iceland/day-tours/golden-circle-tours/golden-circle-afternoon/\" target=\"_blank\" rel=\"noreferrer\">打开 Arctic Adventures 团页</a>"],
    },
    {
      id: "snaefellsnes",
      category: "iceland",
      segments: ["four-after"],
      participant: "赶海组与彤彤等 5 人，10/07",
      transport: "Bus Stop #9 集合；08:00 前到，预计 19:00 回城",
      date: "10/07",
      city: "斯奈山半岛",
      title: "斯奈山半岛一日游（5 人）",
      image: "assets/spots/tourlink/snaefellsnes-aa-1.webp",
      images: ["assets/spots/tourlink/snaefellsnes-aa-1.webp", "assets/spots/tourlink/snaefellsnes-aa-2.webp", "assets/spots/tourlink/snaefellsnes-aa-3.webp"],
      bestTime: "08:00 前集合，预计 19:00 回城",
      open: "10/07 斯奈山半岛一日游，原 Bus Stop #12 改为 Bus Stop #9 集合。",
      sunset: "雷克雅未克 10/07 日落约 18:36",
      viewpoint: "教会山、黑教堂、海岸线、渔村、黑沙滩；按当天路线和天气调整。",
      notes: ["10/07 08:00 前到 Bus Stop #9 集合，预计 19:00 回城；不含餐，中途有餐厅。", "车程长，建议带午餐、零食、水和晕车药。", "10 月风大路滑，穿防风防水外套和防水鞋。", "<a href=\"https://cn.adventures.is/iceland/day-tours/sightseeing-tours/snaefellsnes-peninsula-small-group-tour/\" target=\"_blank\" rel=\"noreferrer\">打开 Arctic Adventures 团页</a>"],
    },
    {
      id: "jokulsarlon",
      category: "iceland",
      segments: ["iceland-six"],
      participant: "南岸同行 7 人",
      transport: "南岸两日小巴团，不自驾",
      date: "10/04-10/05",
      city: "东南冰岛",
      title: "杰古沙龙冰河湖 / 钻石沙滩",
      image: "assets/spots/iceland/jokulsarlon-1.webp",
      images: ["assets/spots/iceland/jokulsarlon-1.webp", "assets/spots/iceland/jokulsarlon-2.webp", "assets/spots/iceland/diamond-beach-1.webp"],
      bestTime: "白天",
      open: "南岸两日团会到冰河湖和钻石沙滩；蓝冰洞是否进入哪一处，以当天安全条件和向导安排为准。",
      sunset: "雷克雅未克 10/04 日落约 18:47，10/05 约 18:44",
      viewpoint: "杰古沙龙冰河湖湖边和钻石沙滩适合低角度光线。",
      notes: ["这是 10/04-10/05 7 人南岸两日团的核心亮点。", "冰河湖看漂浮冰山，钻石沙滩看被海浪推上黑沙滩的冰块。", "风大、浪大、冰面滑，拍照不要越过安全线。"],
    },
    {
      id: "sky-lagoon-booked",
      category: "iceland",
      segments: ["jianhuang-spots"],
      participant: "建皇组合 10/06 已订",
      transport: "Sky Lagoon 温泉；13:00 入场，无接送，自行乘公共交通；结束后预留取行李、机场交通和值机时间",
      date: "10/06",
      city: "Sky Lagoon / 雷克雅未克 / 凯夫拉维克",
      title: "Sky Lagoon 温泉（已订 ¥1441.87/2人）",
      image: "assets/spots/iceland/sky-lagoon-official.webp",
      images: ["assets/spots/iceland/sky-lagoon-official.webp", "assets/spots/iceland/reykjavik-coast.webp", "assets/spots/iceland/reykjavik-harpa.webp"],
      bestTime: "13:00 到场入场；往返公共交通班次需提前查询",
      open: "已重新预订 Sky Lagoon 温泉，13:00 入场；不含接送，需自行乘公共交通。结束后取行李并前往机场，19:20 飞米兰。",
      sunset: "雷克雅未克 10/06 日落约 18:40",
      viewpoint: "Sky Lagoon 海水温泉、无边际池和海岸景观；结束后以取行李和机场交通为主。",
      notes: ["10/06 已订 Sky Lagoon 温泉，价格 ¥1441.87/2人。", "13:00 到场入场，不含接送，需自行乘公共交通；提前查询往返班次，预留步行和换乘时间。", "从酒店退房后确认行李寄存或直接带行李转移；傍晚提前去凯夫拉维克机场，19:20 飞米兰。", "<a href=\"https://www.google.com/maps/dir/?api=1&origin=Fosshotel%20Lind%20Reykjavik&destination=Sky%20Lagoon%20Kopavogur&travelmode=transit\" target=\"_blank\" rel=\"noreferrer\">查看公共交通路线</a>"],
    },
    {
      id: "copenhagen-layover",
      category: "copenhagen",
      segments: ["jianhuang-spots"],
      participant: "建皇组合",
      transport: "哥本哈根机场火车 / 地铁进城；轻量步行，不租车",
      date: "10/08",
      city: "哥本哈根",
      title: "哥本哈根转机一日游",
      image: "assets/spots/copenhagen.webp",
      images: ["assets/spots/copenhagen.webp"],
      bestTime: "10:00-16:00",
      open: "10/07 23:00 到哥本哈根机场，10/08 19:05 从哥本哈根机场飞北京；按机场行李、安检和值机情况动态压缩。",
      sunset: "哥本哈根 10/08 日落约 18:20",
      viewpoint: "新港彩色房子、国王新广场、阿美琳堡王宫广场；有余力再去小美人鱼。",
      notes: [
        "建议 09:30-10:00 进城，先走新港 / 国王新广场 / 王宫广场。",
        "午餐放新港或 Torvehallerne 附近，别排太远的餐厅。",
        "16:00 左右回哥本哈根机场更稳；若有托运行李或值机压力，删掉小美人鱼。",
      ],
    },
    {
      id: "amsterdam",
      category: "amsterdam",
      segments: ["niangniang"],
      participant: "赶海组 + 娘娘",
      transport: "阿姆斯特丹本地步行 / 电车 / 地铁；10/10 赶海组火车回布鲁塞尔",
      date: "10/09",
      city: "阿姆斯特丹",
      title: "运河 + 博物馆区",
      image: "assets/spots/city/amsterdam-canal.webp",
      images: ["assets/spots/city/amsterdam-canal.webp", "assets/spots/city/amsterdam-rijksmuseum.webp", "assets/spots/city/amsterdam-magere-brug.webp"],
      bestTime: "10:30-20:00",
      open: "荷兰国家博物馆当前常规 09:00-17:00；梵高博物馆需预约时段，以官网为准。",
      sunset: "阿姆斯特丹 10/09 日落约 19:00",
      viewpoint: "Magere Brug / Herengracht 运河桥，日落后蓝调时刻很好看。",
      notes: ["娘娘和赶海组在阿姆本地汇合。", "博物馆二选一，不要一天塞两个大馆。", "10/10 火车回布鲁塞尔，前一晚别太晚。"],
    },
  ],
  lastYearReference: {
    source: "去年 25国庆冰岛攻略.xlsx",
    summary: [
      { label: "去年实走窗口", value: "10/01-10/12", note: "奥斯陆进出，10/02-10/09 在冰岛" },
      { label: "核心玩法", value: "5 个当地团", note: "黄金圈、南岸两日、斯奈山、观鲸、米湖" },
      { label: "典型个人样本", value: "LJ 列", note: "直接参考 Excel D 列这个人的开销" },
      { label: "LJ 样本合计", value: "¥35,663", note: "含个人大交通、当地团、住宿、餐饮和购物" },
    ],
    yearLinks: [
      "今年 10/04-10/05 把南岸两日 + 蓝冰洞安排为 7 人共同段，去年这条路线的拆法可直接参考。",
      "去年南岸两日团花销最高，但它覆盖瀑布、黑沙滩、冰河湖、蓝冰洞和一晚住宿，信息密度也最高。",
      "今年建皇与赶海组 10/03 走黄金圈；赶海组与彤彤等 5 人 10/07 走斯奈山，彤彤等 3 人 10/08 走黄金圈。",
      "机场交通、超市补给、防风防水装备是去年攻略里最有复用价值的部分。",
    ],
    itinerary: [
      { date: "10/01", title: "抵达奥斯陆", transport: "杭州 → 迪拜 → 奥斯陆", focus: "Tim Wendelboe 咖啡、蒙克美术馆", stay: "", note: "提前 48 小时免费办理值机手续" },
      { date: "10/02", title: "抵达雷克雅未克", transport: "奥斯陆 → 雷克雅未克凯夫拉维克机场；机场巴士 / 55 路进城", focus: "落地、进城、补给", stay: "", note: "机场巴士班次多；55 路便宜但班次少" },
      { date: "10/03", title: "黄金圈一日游", transport: "跟团车", focus: "BusTravel / Reykjavík Excursions 可订黄金圈", stay: "", note: "经典路线，景点固定，适合大巴团或包车" },
      { date: "10/04", title: "南岸两日游第一天", transport: "Troll 跟团车", focus: "塞里雅兰瀑布、斯科加瀑布、冰洞 / 冰川徒步", stay: "团含住宿", note: "去年表里写约 ¥4,732/人，含早餐和住宿" },
      { date: "10/05", title: "南岸两日游第二天", transport: "Troll 跟团车", focus: "黑沙滩，返回雷克雅未克", stay: "", note: "南岸两日适合拆开，不建议硬塞成一日" },
      { date: "10/06", title: "斯奈山半岛一日游", transport: "Troll 跟团车", focus: "8:00-20:00，行程很满", stay: "", note: "今年 10/07 已安排 5 人斯奈山一日游，可参考这条路线并预留体力" },
      { date: "10/07", title: "雷克雅未克 → 阿克雷里", transport: "国内航班 11:05-11:50", focus: "13:00 观鲸团", stay: "", note: "适合想加北部玩法的人参考" },
      { date: "10/08", title: "米湖温泉 + 众神瀑布", transport: "跟团车；晚间回雷克雅未克", focus: "The Traveling Viking 米湖经典一日团", stay: "", note: "表内写 9:00-15:00，晚班交通回雷市" },
      { date: "10/09", title: "雷克雅未克 → 奥斯陆", transport: "雷克雅未克凯夫拉维克机场 → 奥斯陆；机场火车进城", focus: "奥斯陆王宫、艺术博物馆", stay: "The Thief", note: "购买 48 小时奥斯陆通票" },
      { date: "10/10", title: "奥斯陆", transport: "公交 + 小火车", focus: "民俗博物馆、雕塑博物馆、国家博物馆、阿克尔码头", stay: "The Thief", note: "Oslo Pass 覆盖多处博物馆和交通" },
      { date: "10/11", title: "奥斯陆 → 迪拜", transport: "Vy 火车去机场；奥斯陆 → 迪拜", focus: "返程", stay: "", note: "阿联酋航空可按规则申请住宿、交通和膳食" },
      { date: "10/12", title: "抵达杭州", transport: "迪拜 → 杭州；杭州 → 上海顺风车", focus: "回国落地", stay: "", note: "去年路线收尾" },
    ],
    tips: [
      { group: "冰岛", title: "一日团", body: "当地一日团可直接在官网预定。去年朋友反馈小巴团体验更好，Troll 体验不错；Nice Travel 也可选但热门时段可能订不到。经典团：黄金圈一日游、南岸两日游、斯奈山一日游、雷市飞阿克雷里后观鲸和米湖一日游。", source: "re.is / bustravel.is / troll.is / nicetravel.is / ttv.is / elding.is" },
      { group: "冰岛", title: "购物", body: "小猪超市 Bonus 便宜，推荐酸奶、腊肠、土豆泥、三文鱼、火腿、巧克力。巧克力可做纪念品，通常比机场便宜。", source: "" },
      { group: "冰岛", title: "住宿", body: "可以考虑 Airbnb / 民宿，优点是能自己做饭，适合多人分摊和超市补给。", source: "" },
      { group: "冰岛", title: "美食", body: "推荐 Salka Valka Eldhus、Mar Seafood；去年攻略特别标注不推荐 Eiriksson Brasserie。", source: "" },
      { group: "冰岛", title: "交通", body: "机场往返市区可选 Flybus 或 55 路公交。Flybus 班次多，机场到巴士总站约 ¥230；55 路便宜约 ¥138，但班次少。市区公交约 ¥35/人，70 分钟内可换乘。", source: "re.is/tour/flybus" },
      { group: "奥斯陆", title: "交通", body: "Vy 火车可做机场-市区交通，约 ¥185；Oslo Pass 有 24h / 48h / 72h，可覆盖 Vy、公交、小火车和部分博物馆门票。", source: "" },
      { group: "奥斯陆", title: "住宿", body: "去年提到可以在 Choice 官网买积分预定 The Thief，约 2 万积分一晚，折合约 ¥900。", source: "choicehotels.com" },
      { group: "奥斯陆", title: "景点与美食", body: "博物馆可看国家博物馆、蒙克美术馆、民俗博物馆。美食推荐 W.B. Samson 肉桂卷、Tim Wendelboe 咖啡、Fiskeriet 海鲜店。", source: "" },
    ],
    packing: {
      note: "冰岛风很大、随时可能下雨，一定要准备好防风防雨外套。",
      items: [
        "两件羊毛速干衣",
        "两件羽绒内胆",
        "抓绒一件",
        "两条羊毛打底裤",
        "两条防水裤",
        "防水徒步鞋",
        "防水厚手套",
        "冲锋衣：一件防水、一件防泼水",
        "三双羊毛袜",
        "羊毛帽和拍照帽",
        "转换头、插线板",
        "Vodafone 电话卡（挪威和冰岛）",
        "围巾",
        "一次性内裤",
        "速干毛巾",
        "牙膏牙刷、小瓶洗护、一次性拖鞋、凉拖",
        "保湿面霜、防晒霜、洗面奶",
        "墨镜",
        "吹风机",
        "速食产品和肉类小零食",
        "3C 充电宝",
        "感冒药、创可贴、碘伏、棉签、拉肚子药",
        "杯子",
        "扑克牌",
        "防水手机袋",
      ],
    },
    expenses: {
      gross: 75241.04,
      net: 72732.69,
      samplePerson: {
        name: "LJ",
        total: 35662.667,
        note: "直接读取 Excel D 列 LJ 的个人开销。",
      },
      people: [
        ["LJ", 35662.667],
        ["LYX", 14666.047],
        ["PP", 7236.902],
        ["XCF", 7236.902],
        ["ZYT", 7930.172],
      ],
      categories: [
        ["当地团/门票", 28081.27],
        ["交通/机票", 15450.4],
        ["住宿", 12666.51],
        ["购物/退税", 8654.59],
        ["餐饮/补给", 7093.11],
        ["其他", 786.81],
      ],
      perPersonItems: [
        ["出发前", "杭州往返奥斯陆", 6578, 1, "个人大交通"],
        ["10/01", "购物 + 纪念品", 6048, 1, "个人购物"],
        ["10/04-10/05", "南岸两日团", 4496, 5, "五人分摊"],
        ["出发前", "奥斯陆往返冰岛", 2251, 1, "个人机票"],
        ["10/07-10/08", "往返阿克雷里", 2053, 2, "两人段"],
        ["10/06", "购物", 1903, 1, "个人购物"],
        ["10/09", "纪念品", 1150, 1, "个人购物"],
        ["10/02-10/04", "民宿", 988, 5, "五人分摊"],
        ["10/06", "斯奈山半岛一日团", 956, 2, "两人段"],
        ["10/09-10/11", "The Thief 酒店", 883, 2, "两人分摊"],
        ["10/08", "米湖一日游", 839, 2, "两人段"],
        ["10/06", "酒店", 520, 3, "三人分摊"],
      ],
      sampleItems: [
        ["出发前", "杭州往返奥斯陆", 6578, "自己"],
        ["10/01", "购物 + 纪念品", 6048, "个人购物"],
        ["10/04-10/05", "南岸两日团", 4496, "已收款"],
        ["出发前", "奥斯陆往返冰岛", 2251, "自己"],
        ["10/07-10/08", "往返阿克雷里", 2053, "已收款"],
        ["10/06", "购物", 1903, "个人购物"],
        ["10/09", "纪念品", 1150, "个人购物"],
        ["10/02-10/04", "民宿", 988, "五人分摊"],
        ["10/06", "斯奈山半岛一日团", 956, "已收款"],
        ["10/09-10/11", "The Thief 酒店", 883, "两人分摊"],
        ["10/08", "米湖一日游", 839, "LYX 代付"],
        ["10/08", "阿克雷里-雷市大巴票", 778, ""],
        ["10/03", "黄金圈一日游", 625, "个人补记"],
        ["10/09", "两日 Oslo Pass", 566, ""],
        ["10/06", "酒店", 520, "三人分摊"],
        ["10/05", "民宿", 515, "五人分摊"],
        ["10/03", "黄金圈一日游", 509, "潘潘付"],
        ["10/07", "民宿", 491, ""],
      ],
    },
  },
};

// Register Yueyue before role IDs and URL selection are initialized.
data.groups.push({
  id: "yueyue",
  name: "深圳经哥本哈根出发：月月",
  shortName: "月月",
  color: "#B46B39",
  icelandWindow: {
    start: "2026-10-03T23:50:00",
    end: "2026-10-10T18:50:00",
    label: "10/03 23:50 → 10/10 18:50",
  },
  tags: ["1 人", "10/03 深夜到", "冰岛段随彤彤", "10/12 到广州"],
  summary: "09/30 深圳经上海出发，10/01 到哥本哈根并住 Cabinn Metro Hotel；10/03 23:50 到冰岛，10/04-10/09 与彤彤同行。10/10 晚经弗罗茨瓦夫、阿姆斯特丹返程，10/12 到广州。",
  flights: {
    europeLongHaul: [
      "09/30 深圳宝安机场 T3 21:30 → 上海 23:55｜东方航空 MU5360",
      "10/01 上海浦东机场 T1 13:15 → 哥本哈根机场 19:00｜东方航空 MU707",
      "10/11 阿姆斯特丹史基浦机场 13:20 → 10/12 广州 06:40｜南方航空 CZ308",
    ],
    icelandOutbound: [
      "10/03 哥本哈根凯斯楚普机场 T2 22:35 → 雷克雅未克凯夫拉维克机场 23:50｜冰岛航空 FI217",
    ],
    icelandReturn: [
      "10/10 雷克雅未克凯夫拉维克机场 18:50 → 10/11 弗罗茨瓦夫哥白尼机场 00:40｜W61898",
      "10/11 弗罗茨瓦夫哥白尼机场 06:00 → 阿姆斯特丹史基浦机场 07:45｜荷兰皇家航空 KL1336",
    ],
    afterIceland: [
      "10/11 弗罗茨瓦夫跨夜中转 5 小时 20 分；确认值机、行李提取和重新托运要求",
      "10/11 阿姆斯特丹中转 5 小时 35 分，13:20 飞广州；10/12 06:40 抵达",
    ],
  },
});
data.roleViews.push({
  id: "yueyue", name: "月月", title: "我是月月", groupId: "yueyue",
  spotSegments: ["iceland-six", "four-after"], accent: "#B46B39",
  summary: "深圳经上海、哥本哈根前往冰岛；10/03 深夜到达，10/04-10/09 与彤彤同游，10/10 晚独立返程。",
  notes: [
    "10/01、10/02 晚住 Cabinn Metro Hotel；10/03 22:35 飞冰岛，23:50 落地后进城可能已过午夜，提前确认机场交通与酒店晚到登记。",
    "月月已包含在南岸 7 人、后续 5 人 / 3 人及 Caruso 餐厅 7 人预订中，人数不变。",
    "10/10 18:50 离开冰岛，经弗罗茨瓦夫和阿姆斯特丹回广州；不走彤彤的布鲁塞尔返程。",
  ],
  facts: [
    ["哥本哈根", "10/01-10/03", "Cabinn Metro Hotel"],
    ["到冰岛", "10/03 23:50", "FI217；次日 08:30 前集合"],
    ["共同段", "10/04-10/08", "与彤彤相同的冰岛日程与住宿；10/09 晚改住林德城河酒店"],
    ["10/09-10/10", "林德城河酒店", "10/09 晚入住；10/10 白天退房后前往机场"],
    ["离开冰岛", "10/10 18:50", "W61898 飞弗罗茨瓦夫"],
    ["抵达广州", "10/12 06:40", "阿姆斯特丹转 CZ308"],
  ],
  focusDays: [], cta: "切到月月",
});
data.personPlans.push({
  id: "yueyue", name: "月月", color: "#B46B39",
  role: "1 人：09/30 深圳经上海出发，10/01-10/03 在哥本哈根；10/03 深夜抵达冰岛，10/04-10/09 跟随彤彤，10/10 晚经弗罗茨瓦夫、阿姆斯特丹返程，10/12 到广州。",
  days: [
    ["09/30", "深圳 → 上海跨夜中转", "21:30 从深圳宝安机场 T3 起飞，23:55 抵达上海，航班东方航空 MU5360。次日 13:15 从上海浦东机场 T1 飞哥本哈根；本段到达机场、跨夜休息与行李衔接以机票为准。"],
    ["10/01", "上海 → 哥本哈根 + 酒店入住", "13:15 从上海浦东机场 T1 起飞，19:00 抵达哥本哈根机场，航班东方航空 MU707。入住 Cabinn Metro Hotel，地址 Arne Jacobsens Allé 2；当晚以入住、吃饭和休息为主。"],
    ["10/02", "哥本哈根自由活动", "继续住 Cabinn Metro Hotel。白天可按体力轻量逛新港、国王新广场和阿美琳堡周边；具体游览未预订，按当天情况安排。次日晚飞冰岛，提前整理行李并确认机场交通。"],
    ["10/03", "哥本哈根 → 冰岛深夜抵达", "从 Cabinn Metro Hotel 退房，白天轻量活动并安排好行李寄存。22:35 从哥本哈根凯斯楚普机场 T2 起飞，23:50 抵达雷克雅未克凯夫拉维克机场，航班冰岛航空 FI217；时刻均为当地时间。随后前往林德城河酒店，与彤彤同住该酒店；进城可能已是 10/04 凌晨，提前确认深夜机场交通和 10/03 房晚的晚到登记。抵达后休息，不安排追极光；次日 08:30 在 Bus Stop #13（Rauðarárstígur）等 Nice Travel 接车，接车窗口 08:30–09:00。"],
    ["10/10", "冰岛 → 弗罗茨瓦夫跨夜中转", "从林德城河酒店退房，白天轻量安排并预留机场交通和值机时间。18:50 从雷克雅未克凯夫拉维克机场起飞，10/11 00:40 抵达弗罗茨瓦夫哥白尼机场，航班 W61898。下一班 10/11 06:00 起飞，中转 5 小时 20 分；提前核对行李是否直挂、是否需要重新值机，以及夜间候机安排。"],
    ["10/11-10/12", "弗罗茨瓦夫 → 阿姆斯特丹 → 广州", "10/11 00:40 抵达弗罗茨瓦夫后跨夜中转；06:00 从哥白尼机场起飞，07:45 抵达阿姆斯特丹史基浦机场，航班荷兰皇家航空 KL1336。中转 5 小时 35 分，13:20 从史基浦机场起飞，10/12 06:40 抵达广州，航班南方航空 CZ308；预留行李衔接和值机时间，抵达广州后返家休息。"],
  ],
});

const dailyVisuals = {
  "jianhuang|09/25": { city: "里斯本", sunrise: "07:26", sunset: "19:29", season: "9 月底里斯本傍晚温和，落地后适合只看老城夜色和休息。", images: ["assets/spots/belem.webp", "assets/spots/gallery/belem-1.webp"] },
  "jianhuang|09/26": { city: "里斯本周边", sunrise: "07:27", sunset: "19:27", season: "辛特拉山里偏凉，罗卡角海风大；9 月底海边光线很适合拍悬崖、海岸、庄园和宫殿。", images: ["assets/spots/portugal/cabo-da-roca-sunset.webp", "assets/spots/portugal/boca-do-inferno.webp", "assets/spots/portugal/regaleira-initiation-well.webp", "assets/spots/portugal/sintra-national-palace.webp", "assets/spots/portugal/pena-palace-exterior.webp"] },
  "jianhuang|09/27": { city: "波尔图", sunrise: "07:26", sunset: "19:23", season: "9 月底波尔图日落在杜罗河边最舒服，傍晚看大桥和老城灯光。", images: ["assets/spots/porto.webp", "assets/spots/gallery/porto-1.webp"] },
  "jianhuang|09/28": { city: "巴黎", sunrise: "07:45", sunset: "19:36", season: "9 月底巴黎入秋，傍晚塞纳河和埃菲尔铁塔亮灯最值得留时间。", images: ["assets/spots/eiffel.webp", "assets/spots/gallery/eiffel-1.webp", "assets/spots/gallery/eiffel-2.webp", "assets/spots/gallery/eiffel-3.webp", "assets/spots/paris-cruise.webp"] },
  "jianhuang|09/29": { city: "雷克雅未克 / 史费拉", sunrise: "07:29", sunset: "19:04", season: "刚到冰岛，9 月底白天还有足够光线；史费拉水温很低，浮潜后只适合雷克雅未克市区轻量吃饭和散步。", images: ["assets/spots/tourlink/silfra-snorkel-1.webp", "assets/spots/tourlink/silfra-snorkel-2.webp", "assets/spots/tourlink/silfra-snorkel-3.webp", "assets/spots/iceland/reykjavik-harpa.webp"] },
  "jianhuang|09/30": { city: "Kerlingarfjoll 高地", sunrise: "07:31", sunset: "18:59", season: "Kerlingarfjoll 高地 9 月底天气变化很快，徒步必须以向导和当天安全判断为准。", images: ["assets/spots/tourlink/kerlingarfjoll-official-1.webp", "assets/spots/tourlink/kerlingarfjoll-official-2.webp", "assets/spots/tourlink/kerlingarfjoll-official-3.webp"] },
  "jianhuang|10/01": { city: "斯奈山半岛", sunrise: "07:35", sunset: "18:57", season: "斯奈山 10 月初海风强、云层变化快，半岛瀑布、海岸线、黑教堂和教会山都适合阴天氛围。", images: ["assets/spots/tourlink/snaefellsnes-aa-1.webp", "assets/spots/tourlink/snaefellsnes-aa-2.webp", "assets/spots/tourlink/snaefellsnes-aa-3.webp"] },
  "jianhuang|10/02": { city: "雷克雅未克 / 兰德曼那劳卡高地", sunrise: "07:38", sunset: "18:54", season: "10 月初高地天气变化很快，彩色山、熔岩地貌和温泉区很美，但必须听专业团安排。", images: ["assets/spots/tourlink/landmannalaugar-aa-2.webp", "assets/spots/tourlink/landmannalaugar-aa-3.webp", "assets/spots/iceland/landmannalaugar-1.webp"] },
  "jianhuang|10/03": { city: "雷克雅未克 / 黄金圈", sunrise: "07:41", sunset: "18:50", season: "10 月初黄金圈白天风冷，下午光线适合看辛格维利尔、盖歇尔和黄金瀑布；建皇上午休息，晚间休息，不安排追极光。", images: ["assets/spots/gullfoss.webp", "assets/spots/iceland/thingvellir-1.webp", "assets/spots/iceland/strokkur-1.webp"] },
  "jianhuang|10/04": { city: "冰岛南岸", sunrise: "07:33", sunset: "18:38", season: "10 月初南岸瀑布水雾大，黑沙滩风浪也大，照片很出片但要离浪线远一点。", images: ["assets/spots/tourlink/nice-south-waterfall-1.webp", "assets/spots/reynisfjara.webp", "assets/spots/gallery/reynisfjara-seljalandsfoss.webp", "assets/spots/gallery/reynisfjara-skogafoss.webp"] },
  "jianhuang|10/05": { city: "冰岛南岸", sunrise: "07:36", sunset: "18:34", season: "10 月初蓝冰洞季刚开始，冰河湖和钻石沙滩的光线偏冷，很适合看冰川景观。", images: ["assets/spots/iceland/jokulsarlon-1.webp", "assets/spots/iceland/jokulsarlon-2.webp", "assets/spots/iceland/diamond-beach-1.webp"] },
  "jianhuang|10/06": { city: "Sky Lagoon / 雷克雅未克 / 凯夫拉维克", sunrise: "07:50", sunset: "18:40", season: "10 月初泡温泉很适合放松；13:00 入场，无接送，自行乘公共交通。结束后预留取行李、机场交通和值机时间。", images: ["assets/spots/iceland/sky-lagoon-official.webp", "assets/spots/iceland/reykjavik-coast.webp", "assets/spots/iceland/reykjavik-harpa.webp"] },
  "jianhuang|10/07": { city: "里斯本", sunrise: "07:37", sunset: "19:10", season: "10 月初里斯本仍然明亮温暖，半日城市步行适合河边、观景台和蛋挞。", images: ["assets/spots/belem.webp", "assets/spots/gallery/belem-1.webp", "assets/spots/gallery/belem-2.webp"] },
  "jianhuang|10/08": { city: "哥本哈根", sunrise: "07:25", sunset: "18:28", season: "10 月初哥本哈根白天不长，适合新港、王宫和市中心轻量线。", images: ["assets/spots/copenhagen.webp"] },
  "jianhuang|10/09": { city: "北京", sunrise: "06:17", sunset: "17:45", season: "回到北京后只做恢复日，不再安排旅行强度。", images: ["assets/spots/beijing.webp"] },

  "haigang|09/30": { city: "上海", sunrise: "按当地", sunset: "按当地", season: "晚间抵达浦东机场 T1，跨夜中转以休息和补给为主，次日中午继续飞阿姆斯特丹。", images: ["assets/spots/shanghai.webp"] },
  "haigang|10/01": { city: "阿姆斯特丹", sunrise: "按当地", sunset: "按当地", season: "傍晚抵达荷兰，入秋后注意保暖；当晚以休息为主，为次日大巴和航班衔接留足精力。", images: ["assets/spots/city/amsterdam-canal.webp"] },
  "haigang|10/02": { city: "布鲁塞尔 / 哥本哈根", sunrise: "07:13", sunset: "18:43", season: "当天从阿姆斯特丹乘大巴到布鲁塞尔，再飞哥本哈根过夜；优先确保大巴、机场转场和航班衔接。", images: ["assets/spots/brussels.webp", "assets/spots/copenhagen.webp"] },
  "haigang|10/03": { city: "雷克雅未克 / 黄金圈", sunrise: "07:41", sunset: "18:50", season: "10 月初冰岛早晚冷；早上落地后先寄存行李，约 10:00 跟建皇组合会合、吃早午饭，下午看黄金圈，晚间休息，不安排追极光。", images: ["assets/spots/gullfoss.webp", "assets/spots/iceland/thingvellir-1.webp", "assets/spots/iceland/strokkur-1.webp"] },
  "haigang|10/04": { city: "冰岛南岸", sunrise: "07:33", sunset: "18:38", season: "南岸瀑布和黑沙滩在 10 月初很有戏剧感，防风防水最重要。", images: ["assets/spots/tourlink/nice-south-waterfall-1.webp", "assets/spots/reynisfjara.webp", "assets/spots/gallery/reynisfjara-seljalandsfoss.webp", "assets/spots/gallery/reynisfjara-skogafoss.webp"] },
  "haigang|10/05": { city: "冰岛南岸", sunrise: "07:36", sunset: "18:34", season: "蓝冰洞、冰河湖和钻石沙滩是这天的核心，光线偏冷，拍照很好看。", images: ["assets/spots/iceland/jokulsarlon-1.webp", "assets/spots/iceland/jokulsarlon-2.webp", "assets/spots/iceland/diamond-beach-1.webp"] },
  "haigang|10/06": { city: "雷克雅未克", sunrise: "07:50", sunset: "18:40", season: "建皇离开后，5 人参加兰德曼那劳卡高地超级吉普，酒店门口接送，08:30-20:00，自备午餐。", images: ["assets/spots/iceland/reykjavik-hallgrimskirkja.webp", "assets/spots/iceland/reykjavik-harpa.webp", "assets/spots/iceland/reykjavik-coast.webp"] },
  "haigang|10/07": { city: "雷克雅未克 / 斯奈山", sunrise: "07:53", sunset: "18:36", season: "如果天气稳，斯奈山半岛的海岸线和教会山适合放在这天。", images: ["assets/spots/season/snaefellsnes-autumn.webp", "assets/spots/snaefellsnes.webp"] },
  "haigang|10/08": { city: "雷克雅未克 / 阿姆斯特丹", sunrise: "07:55", sunset: "18:33", season: "离开冰岛当天不要跑远，适合蓝湖或机场附近轻量收尾。", images: ["assets/spots/iceland/blue-lagoon-1.webp", "assets/spots/iceland/reykjavik-coast.webp", "assets/spots/city/amsterdam-canal.webp"] },
  "haigang|10/09": { city: "阿姆斯特丹", sunrise: "07:54", sunset: "19:00", season: "10 月初阿姆斯特丹运河区入秋，傍晚蓝调时刻很好看。", images: ["assets/spots/city/amsterdam-canal.webp", "assets/spots/city/amsterdam-rijksmuseum.webp", "assets/spots/city/amsterdam-magere-brug.webp"] },
  "haigang|10/10": { city: "布鲁塞尔", sunrise: "07:56", sunset: "19:01", season: "布鲁塞尔 10 月初适合广场、巧克力和轻量城市步行。", images: ["assets/spots/brussels.webp"] },
  "haigang|10/11-10/12": { city: "布鲁塞尔 / 上海", sunrise: "07:58", sunset: "18:59", season: "返程两天只看转机和休息，欧洲段已进入明显秋天。", images: ["assets/spots/brussels.webp", "assets/spots/shanghai.webp"] },

  "tongyan|10/02": { city: "深圳 / 上海", sunrise: "06:16", sunset: "18:10", season: "出发日以机场节奏为主，深圳和上海都还偏暖。", images: ["assets/spots/shenzhen.webp", "assets/spots/shanghai.webp"] },
  "tongyan|10/03": { city: "布鲁塞尔 / 雷克雅未克", sunrise: "07:41", sunset: "18:50", season: "抵达冰岛后先去酒店会合和保暖，晚上休息，为次日南岸团做准备。", images: ["assets/spots/brussels.webp", "assets/spots/iceland/reykjavik-harpa.webp"] },
  "tongyan|10/04": { city: "冰岛南岸", sunrise: "07:33", sunset: "18:38", season: "南岸 10 月初瀑布、黑沙滩和低云很有冰岛感。", images: ["assets/spots/tourlink/nice-south-waterfall-1.webp", "assets/spots/reynisfjara.webp", "assets/spots/gallery/reynisfjara-dyrholaey.webp", "assets/spots/gallery/reynisfjara-skogafoss.webp"] },
  "tongyan|10/05": { city: "冰岛南岸", sunrise: "07:36", sunset: "18:34", season: "冰河湖、钻石沙滩和蓝冰洞是冷色系景观，注意保暖和防滑。", images: ["assets/spots/iceland/jokulsarlon-1.webp", "assets/spots/iceland/jokulsarlon-2.webp", "assets/spots/iceland/diamond-beach-1.webp"] },
  "tongyan|10/06": { city: "雷克雅未克", sunrise: "07:50", sunset: "18:40", season: "5 人参加兰德曼那劳卡高地超级吉普，酒店门口接送，08:30-20:00，自备午餐。", images: ["assets/spots/gullfoss.webp", "assets/spots/gallery/gullfoss-strokkur.webp"] },
  "tongyan|10/07": { city: "雷克雅未克 / 斯奈山", sunrise: "07:53", sunset: "18:36", season: "天气好再走斯奈山，天气差就留雷克雅内斯半岛和蓝湖。", images: ["assets/spots/season/snaefellsnes-autumn.webp", "assets/spots/snaefellsnes.webp"] },
  "tongyan|10/08": { city: "雷克雅未克", sunrise: "07:55", sunset: "18:33", season: "送赶海组离开后，适合蓝湖、机场附近或市区慢一点。", images: ["assets/spots/aurora.webp", "assets/spots/gullfoss.webp"] },
  "tongyan|10/09": { city: "雷克雅未克", sunrise: "07:58", sunset: "18:29", season: "早班机前一天不要跑远，留给蓝湖、补给和机场附近住宿。", images: ["assets/spots/aurora.webp", "assets/spots/gullfoss.webp"] },
  "tongyan|10/10": { city: "布鲁塞尔", sunrise: "07:56", sunset: "19:01", season: "从冰岛回到欧洲大陆，布鲁塞尔秋天适合轻量城市收尾。", images: ["assets/spots/brussels.webp"] },
  "tongyan|10/11-10/12": { city: "布鲁塞尔 / 北京 / 深圳", sunrise: "07:58", sunset: "18:59", season: "返程日只看航班和中转，别再安排城市项目。", images: ["assets/spots/brussels.webp", "assets/spots/shenzhen.webp"] },

  "niangniang|09/25": { city: "里斯本", sunrise: "07:26", sunset: "19:29", season: "9 月底从阿姆斯特丹飞到里斯本，晚上只适合入住和吃饭。", images: ["assets/spots/belem.webp", "assets/spots/sintra-pena.webp"] },
  "niangniang|09/26": { city: "里斯本周边", sunrise: "07:27", sunset: "19:27", season: "辛特拉和罗卡角是葡萄牙海边秋日感最强的一天。", images: ["assets/spots/portugal/cabo-da-roca-sunset.webp", "assets/spots/portugal/boca-do-inferno.webp", "assets/spots/portugal/regaleira-initiation-well.webp", "assets/spots/portugal/sintra-national-palace.webp", "assets/spots/portugal/pena-palace-exterior.webp"] },
  "niangniang|09/27": { city: "波尔图 / 阿姆斯特丹", sunrise: "07:26", sunset: "19:23", season: "白天看波尔图河岸，晚上飞回阿姆斯特丹，别把下午排太满。", images: ["assets/spots/city/porto-ribeira-bridge-1.webp", "assets/spots/city/porto-ribeira-bridge-2.webp", "assets/spots/city/amsterdam-canal.webp"] },
  "niangniang|09/28": { city: "阿姆斯特丹", sunrise: "07:35", sunset: "19:25", season: "9 月底阿姆斯特丹入秋，今天以恢复和工作节奏为主。", images: ["assets/spots/city/amsterdam-canal.webp", "assets/spots/city/amsterdam-rijksmuseum.webp", "assets/spots/city/amsterdam-magere-brug.webp"] },
  "niangniang|09/28-10/08": { city: "阿姆斯特丹", sunrise: "07:35-07:52", sunset: "19:25-19:02", season: "阿姆斯特丹这段是工作节奏，周末或下班后看运河区最合适。", images: ["assets/spots/city/amsterdam-canal.webp", "assets/spots/city/amsterdam-rijksmuseum.webp", "assets/spots/city/amsterdam-magere-brug.webp"] },
  "niangniang|10/09": { city: "阿姆斯特丹", sunrise: "07:54", sunset: "19:00", season: "10 月初阿姆斯特丹运河和博物馆区适合和赶海组汇合。", images: ["assets/spots/city/amsterdam-canal.webp", "assets/spots/city/amsterdam-rijksmuseum.webp", "assets/spots/city/amsterdam-magere-brug.webp"] },
  "niangniang|10/10": { city: "阿姆斯特丹 / 布鲁塞尔", sunrise: "07:56", sunset: "19:01", season: "如果一起去布鲁塞尔，秋天广场夜景比白天更有氛围。", images: ["assets/spots/city/amsterdam-canal.webp", "assets/spots/city/amsterdam-magere-brug.webp", "assets/spots/brussels.webp"] },
};

const fallbackDailyVisual = {
  city: "旅途中",
  sunrise: "按当地",
  sunset: "按当地",
  season: "按当天主要停留地看天气和日照，照片为同线路真实参考。",
  images: ["assets/route-hero.webp"],
};

const deferredImagePlaceholder =
  "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
const deferredImageObserver = "IntersectionObserver" in window
  ? new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const image = entry.target;
          const source = image.dataset.src;
          if (source) {
            image.src = source;
            image.removeAttribute("data-src");
          }
          observer.unobserve(image);
        });
      },
      { rootMargin: "480px 0px" },
    )
  : null;

function imageSourceAttrs(source, eager = false) {
  if (eager) {
    return `src="${source}" loading="eager" decoding="async" fetchpriority="high"`;
  }
  return `src="${deferredImagePlaceholder}" data-src="${source}" loading="lazy" decoding="async" fetchpriority="low"`;
}

function observeDeferredImages(root = document) {
  const images = root.querySelectorAll("img[data-src]");
  if (!deferredImageObserver) {
    images.forEach((image) => {
      image.src = image.dataset.src;
      image.removeAttribute("data-src");
    });
    return;
  }
  images.forEach((image) => deferredImageObserver.observe(image));
}

const iconicImageRules = [
  {
    match: (key) => key === "jianhuang|09/26" || key === "niangniang|09/26",
    images: ["assets/spots/portugal/cabo-da-roca-sunset.webp", "assets/spots/portugal/boca-do-inferno.webp", "assets/spots/portugal/regaleira-initiation-well.webp", "assets/spots/portugal/sintra-national-palace.webp", "assets/spots/portugal/pena-palace-exterior.webp"],
    replace: true,
  },
  {
    match: (key) => key === "jianhuang|09/30",
    images: ["assets/spots/tourlink/kerlingarfjoll-official-1.webp", "assets/spots/tourlink/kerlingarfjoll-official-2.webp", "assets/spots/tourlink/kerlingarfjoll-official-3.webp"],
    replace: true,
  },
  {
    match: (key) => key === "jianhuang|10/01",
    images: ["assets/spots/tourlink/snaefellsnes-aa-1.webp", "assets/spots/tourlink/snaefellsnes-aa-2.webp", "assets/spots/tourlink/snaefellsnes-aa-3.webp"],
    replace: true,
  },
  {
    match: (key) => key === "jianhuang|10/02",
    images: ["assets/spots/tourlink/landmannalaugar-aa-2.webp", "assets/spots/tourlink/landmannalaugar-aa-3.webp", "assets/spots/iceland/landmannalaugar-1.webp"],
    replace: true,
  },
  {
    match: (key) => key === "jianhuang|10/03",
    images: ["assets/spots/gullfoss.webp", "assets/spots/iceland/thingvellir-1.webp", "assets/spots/iceland/strokkur-1.webp"],
    replace: true,
  },
  {
    match: (key) => key === "haigang|10/08",
    images: ["assets/spots/iceland/blue-lagoon-1.webp", "assets/spots/iceland/reykjavik-coast.webp", "assets/spots/city/amsterdam-canal.webp"],
    replace: true,
  },
  { match: (_, visual) => visual.city.includes("阿姆斯特丹"), images: ["assets/spots/city/amsterdam-canal.webp", "assets/spots/city/amsterdam-rijksmuseum.webp", "assets/spots/city/amsterdam-magere-brug.webp"], replace: true },
  { match: (_, visual) => visual.city.includes("哥本哈根"), images: ["assets/spots/city/copenhagen-nyhavn.webp", "assets/spots/city/copenhagen-little-mermaid.webp", "assets/spots/city/copenhagen-amalienborg.webp"] },
  { match: (_, visual) => visual.city.includes("布鲁塞尔"), images: ["assets/spots/brussels.webp", "assets/spots/city/brussels-atomium.webp", "assets/spots/city/brussels-galeries.webp"] },
  { match: (_, visual) => visual.city.includes("上海"), images: ["assets/spots/city/shanghai-bund-promenade.webp", "assets/spots/city/shanghai-yuyuan.webp", "assets/spots/city/shanghai-lujiazui-bund.webp"], replace: true },
  { match: (_, visual) => visual.city.includes("深圳"), images: ["assets/spots/city/shenzhen-civic-center.webp", "assets/spots/city/shenzhen-pingan.webp", "assets/spots/city/shenzhen-oct-harbour.webp"], replace: true },
  { match: (_, visual) => visual.city.includes("北京"), images: ["assets/spots/city/beijing-forbidden-city.webp", "assets/spots/city/beijing-temple-heaven.webp", "assets/spots/city/beijing-tiananmen.webp"], replace: true },
  { match: (_, visual) => visual.city.includes("里斯本"), images: ["assets/spots/belem.webp", "assets/spots/gallery/belem-1.webp", "assets/spots/gallery/belem-2.webp"] },
  { match: (_, visual) => visual.city.includes("波尔图"), images: ["assets/spots/city/porto-ribeira-bridge-1.webp", "assets/spots/city/porto-ribeira-bridge-2.webp", "assets/spots/city/porto-ribeira-bridge-3.webp"], replace: true },
  { match: (_, visual) => visual.city.includes("雷克雅未克") && visual.city.includes("斯奈山"), images: ["assets/spots/tourlink/snaefellsnes-aa-1.webp", "assets/spots/tourlink/snaefellsnes-aa-2.webp", "assets/spots/tourlink/snaefellsnes-aa-3.webp"], replace: true },
  { match: (_, visual) => visual.city.includes("斯奈山"), images: ["assets/spots/tourlink/snaefellsnes-aa-1.webp", "assets/spots/tourlink/snaefellsnes-aa-2.webp", "assets/spots/tourlink/snaefellsnes-aa-3.webp"], replace: true },
  { match: (_, visual) => visual.city.includes("雷克雅未克") && !visual.city.includes("高地"), images: ["assets/spots/iceland/reykjavik-hallgrimskirkja.webp", "assets/spots/iceland/reykjavik-harpa.webp", "assets/spots/iceland/reykjavik-coast.webp"] },
  { match: (_, visual) => visual.city.includes("黄金圈"), images: ["assets/spots/gullfoss.webp", "assets/spots/iceland/thingvellir-1.webp", "assets/spots/iceland/strokkur-1.webp"] },
  { match: (_, visual) => visual.city.includes("冰岛南岸"), images: ["assets/spots/reynisfjara.webp", "assets/spots/gallery/reynisfjara-seljalandsfoss.webp", "assets/spots/gallery/reynisfjara-skogafoss.webp", "assets/spots/iceland/jokulsarlon-1.webp", "assets/spots/iceland/diamond-beach-1.webp"] },
];

Object.entries(dailyVisuals).forEach(([key, visual]) => {
  const rule = iconicImageRules.find((item) => item.match(key, visual));
  if (!rule) return;
  const baseImages = rule.replace ? [] : visual.images.filter((image) => image !== "assets/spots/amsterdam.webp");
  visual.images = [...new Set([...baseImages, ...rule.images])].slice(0, Math.max(3, rule.images.length));
});

function getDailyVisual(personId, date, title, detail) {
  const direct = dailyVisuals[`${personId}|${date}`];
  if (direct) return direct;
  const text = `${date} ${title} ${detail}`;
  const keywordMap = [
    ["巴黎", dailyVisuals["jianhuang|09/28"]],
    ["埃菲尔", dailyVisuals["jianhuang|09/28"]],
    ["索斯莫克", dailyVisuals["jianhuang|09/30"]],
    ["兰德曼", dailyVisuals["jianhuang|10/02"]],
    ["斯奈山", dailyVisuals["jianhuang|10/01"]],
    ["黄金圈", dailyVisuals["jianhuang|10/03"]],
    ["蓝湖", dailyVisuals["haigang|10/08"]],
    ["南岸", dailyVisuals["jianhuang|10/04"]],
    ["蓝冰洞", dailyVisuals["jianhuang|10/05"]],
    ["杰古沙龙", dailyVisuals["jianhuang|10/05"]],
    ["里斯本", dailyVisuals["jianhuang|10/07"]],
    ["波尔图", dailyVisuals["jianhuang|09/27"]],
    ["哥本哈根", dailyVisuals["jianhuang|10/08"]],
    ["阿姆斯特丹", dailyVisuals["haigang|10/09"]],
    ["布鲁塞尔", dailyVisuals["haigang|10/10"]],
    ["上海", dailyVisuals["haigang|09/30"]],
    ["深圳", dailyVisuals["tongyan|10/02"]],
  ];
  return keywordMap.find(([keyword]) => text.includes(keyword))?.[1] || fallbackDailyVisual;
}

function getDailyStay(personId, date, title) {
  const lisbonStay = {
    label: "住宿（¥223.43/人/晚）",
    name: "The Delight Hostel（欢乐青年旅馆）",
    detail: "09/25-09/27 豪华四人间已订；建皇（两人）、龙龙、娘娘共 4 人入住。实付总价 ¥1,787.44，按 4 人、2 晚为 ¥223.43/人/晚；点开可跳转谷歌地图。",
    url: "https://www.google.com/maps/search/?api=1&query=The%20Delight%20Hostel%20R.%20Tomas%20Ribeiro%2095%20Lisbon",
  };
  const portoStay = {
    label: "住宿（¥181.65/人）",
    name: "波尔图盖亚美居酒店（Mercure Porto Gaia Hotel）",
    detail: "09/27 晚约 21:00 办理入住、09/28 退房；建皇（两人）和龙龙共 3 人入住，实付 ¥544.94；点开可跳转谷歌地图。",
    url: "https://www.google.com/maps/search/?api=1&query=Mercure%20Porto%20Gaia%20Hotel",
  };
  const hotelStay = {
    label: "住宿",
    name: "林德城河酒店",
    detail: "当天住这里；点开可跳转谷歌地图。",
    url: data.hotel.mapUrl,
  };
  const tourStay = {
    label: "住宿",
    name: "南岸两日团含住宿",
    detail: "10/04 晚住旅行团安排的冰岛南部住宿，以最终确认单为准。",
    url: "",
  };
  const airportStay = {
    label: "住宿",
    name: "林德城河酒店",
    detail: "白天从酒店退房并安排好行李寄存；自行乘公共交通去 Sky Lagoon，13:00 入场。结束后取行李并前往凯夫拉维克机场，19:20 飞米兰。",
    url: data.hotel.mapUrl,
  };
  const copenhagenAirportStay = {
    label: "住宿",
    name: "Cabinn Metro Hotel",
    detail: "10/07 晚入住、10/08 退房；Arne Jacobsens Allé 2；电话 +4532465700。点开可跳转谷歌地图。",
    url: "https://www.google.com/maps/search/?api=1&query=Cabinn%20Metro%20Hotel%20Arne%20Jacobsens%20All%C3%A9%202%20Copenhagen",
  };

  if (personId === "jianhuang") {
    if (["09/25", "09/26"].includes(date)) return lisbonStay;
    if (date === "09/27") return portoStay;
    if (date === "09/28") return parisLuggage;
    if (["09/29", "09/30", "10/01", "10/02", "10/03", "10/05"].includes(date)) return hotelStay;
    if (date === "10/04") return tourStay;
    if (date === "10/06") return airportStay;
    if (date === "10/07") return copenhagenAirportStay;
  }

  if (personId === "haigang") {
    if (["10/03", "10/05", "10/06", "10/07"].includes(date)) return hotelStay;
    if (date === "10/04") return tourStay;
    if (date === "10/08") {
      return {
        ...hotelStay,
        detail: "白天从林德城河酒店出发去雷克雅未克凯夫拉维克机场；晚上飞阿姆斯特丹。",
      };
    }
  }

  if (personId === "tongyan") {
    if (["10/03", "10/05", "10/06", "10/07", "10/08", "10/09"].includes(date)) return hotelStay;
    if (date === "10/04") return tourStay;
    if (date === "10/10") {
      return {
        ...hotelStay,
        detail: "清晨从林德城河酒店出发去雷克雅未克凯夫拉维克机场；这天离开冰岛。",
      };
    }
  }

  if (personId === "niangniang" && ["09/25", "09/26"].includes(date)) return lisbonStay;

  return null;
}

// Collection details checked against the booked vouchers, in each destination's local time.
const kletturPickup = {
  place: "Klettur Hótel",
  address: "Mjölnisholt 12–14，Reykjavík",
  url: "https://www.google.com/maps/search/?api=1&query=Klettur%20Hotel%20Mjolnisholt%2012-14%20Reykjavik",
  note: "Arctic Adventures 接车；请在上方时间前到 Klettur 酒店门外显眼处候车，带好电子票并主动核对团名。接车可持续 30 分钟，不代表可以晚到；这里不是住宿的 Fosshotel Lind。超时未接到车请联系 +354 562 7000。出发前复核团方最新接车通知。",
};
const dailyMeetings = [
  { ...lisbonPortoBus, roles: ["jianhuang", "niangniang"], date: "09/27", time: "08:00", label: "大巴发车", localTime: "葡萄牙当地时间" },
  { ...kletturPickup, roles: ["jianhuang"], date: "09/29", time: "12:00", label: "接车", note: `${kletturPickup.note} 浮潜订单含雷市接送，无需自行前往史费拉。` },
  { ...kletturPickup, roles: ["jianhuang"], date: "09/30", time: "08:00", label: "接车" },
  { ...kletturPickup, roles: ["jianhuang"], date: "10/01", time: "08:00", label: "接车" },
  { ...kletturPickup, roles: ["jianhuang"], date: "10/02", time: "08:00", label: "接车", note: `${kletturPickup.note} 高地超级吉普的实际路线和返回时间听向导安排。` },
  { ...kletturPickup, roles: ["jianhuang", "haigang"], date: "10/03", time: "12:00", label: "接车" },
  {
    roles: ["jianhuang", "haigang", "tongyan", "yueyue"], date: "10/04", time: "08:30", label: "到站等车",
    place: "Bus Stop #13 · Rauðarárstígur", address: "认“13 Rauðarárstígur”蓝底、红／粉色巴士图案的旅游接车站牌（不是公交 13 路）",
    url: "https://www.google.com/maps/search/?api=1&query=64.142658%2C-21.913866",
    links: [
      { url: "https://nicetravel.is/bus-stops/bus-stop-13-raudararstigur/", label: "Nice 官方站点说明" },
      { url: "https://busstop.is/assets/images/busstops/13_a.jpg", label: "查看官方站牌照片" },
    ],
    note: "Nice Travel 南岸团；08:30 前到站，接车窗口 08:30–09:00，不要等到 09:00 才到。导航用于找到所在街段，现场认 13 号站牌；不在 Fosshotel Lind 酒店门口等。带好电子票，主动核对团名；超时未接到车请联系 +354 419 0100。以团方最新通知为准。",
  },
  {
    roles: ["jianhuang", "haigang", "tongyan", "yueyue"], date: "10/05", time: "待向导确认", label: "次晨集合", pending: true,
    place: "南岸团住宿处，具体位置待向导通知",
    note: "10/04 晚向导说明时，确认次晨集合时间和位置。预计约 21:00 回雷市，受天气路况影响；与 20:30 Caruso 订位有冲突，需提前协调。",
  },
  {
    roles: ["jianhuang"], date: "10/06", time: "13:00", label: "到场入场", place: "Sky Lagoon", address: "Vesturvör 44–48，Kópavogur",
    url: "https://www.google.com/maps/dir/?api=1&origin=Fosshotel%20Lind%20Reykjavik&destination=Sky%20Lagoon%20Kopavogur&travelmode=transit",
    linkLabel: "查看公共交通路线",
    note: "13:00 是温泉预约入场时间；订单不含接送，不在酒店等车。自行乘公共交通前往，出发当天查往返班次，预留步行、换乘、取行李和机场交通时间；19:20 从凯夫拉维克机场起飞。",
  },
];

function getDailyMeeting(personId, date) {
  return dailyMeetings.find((meeting) => meeting.date === date && meeting.roles.includes(personId));
}

function renderDailyMeeting(personId, date) {
  const meeting = getDailyMeeting(personId, date);
  if (!meeting) return "";
  return `<aside class="daily-meeting${meeting.pending ? " daily-meeting--pending" : ""}" aria-label="${date} ${meeting.label}">
    <div class="daily-meeting__heading"><span>${meeting.label} · ${meeting.localTime || "冰岛当地时间"}</span><strong>${meeting.time}</strong></div>
    <p class="daily-meeting__place">${meeting.url ? `<a href="${meeting.url}" target="_blank" rel="noopener noreferrer">${meeting.place} · ${meeting.linkLabel || "打开地图"} ↗</a>` : meeting.place}</p>
    ${meeting.address ? `<p class="daily-meeting__address">${meeting.address}</p>` : ""}
    <div class="daily-meeting__note"><ul>${splitDailyDetail(meeting.note).map((part) => `<li>${highlightDailyTimes(part)}</li>`).join("")}</ul></div>
    ${meeting.links ? `<p class="daily-meeting__note">${meeting.links.map((link) => `<a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label} ↗</a>`).join(" · ")}</p>` : ""}
  </aside>`;
}

function splitDailyDetail(detail) {
  const parts = [];
  let current = "";
  let bracketDepth = 0;
  // Keep links intact, including punctuation in their labels and URLs.
  for (const token of detail.split(/(<a\b[^>]*>[\s\S]*?<\/a>)/gi)) {
    if (/^<a\b/i.test(token)) {
      current += token;
      continue;
    }
    for (const char of token) {
      current += char;
      if ("（([{【".includes(char)) bracketDepth += 1;
      else if ("）)]}】".includes(char)) bracketDepth = Math.max(0, bracketDepth - 1);
      else if (bracketDepth === 0 && "。！？；".includes(char)) {
        if (current.trim()) parts.push(current.trim());
        current = "";
      }
    }
  }
  if (current.trim()) parts.push(current.trim());
  return parts;
}

function highlightDailyTimes(value) {
  return value
    .split(/(<[^>]+>)/g)
    .map((part) => {
      if (part.startsWith("<")) return part;
      return part.replace(/(^|[^\d])([01]?\d|2[0-3]):([0-5]\d)(?!\d)/g, "$1<b class=\"daily-detail__time\">$2:$3</b>");
    })
    .join("");
}

function getDailyDetailSections(personId, date, detail) {
  const fallback = [{ items: splitDailyDetail(detail) }];
  if (date === "09/27" && ["jianhuang", "niangniang"].includes(personId)) {
    const starts = [0, detail.indexOf("12:00 已订"), detail.indexOf("下午玩")];
    if (starts.some((start, index) => index > 0 && start <= starts[index - 1])) return fallback;
    const labels = ["大巴 · 已订车票", "午餐 · 已订", "下午与晚间"];
    return starts.map((start, index) => ({ label: labels[index], items: splitDailyDetail(detail.slice(start, starts[index + 1])) }));
  }
  if (personId === "jianhuang" && date === "09/28") {
    const markers = ["落地后从奥利机场直接前往", "寄存后在巴黎游玩", "半夜返回同一门店取行李", "门店法国客服电话："];
    const starts = [0, ...markers.map((marker) => detail.indexOf(marker))];
    if (starts.some((start, index) => index > 0 && start <= starts[index - 1])) return fallback;
    const labels = ["航班 · 抵达巴黎", "寄存 · 已订订单与导航", "白天与晚间 · 巴黎游玩", "跨夜交通 · 取件后去机场", "门店联系"];
    return starts.map((start, index) => ({
      label: labels[index],
      items: splitDailyDetail(detail.slice(start, starts[index + 1])),
    }));
  }
  if (date !== "09/26" || !["jianhuang", "niangniang"].includes(personId)) return fallback;
  const markers = [
    ["上午 · 海岸线", ""],
    ["午餐 · 二选一", personId === "jianhuang" ? "午餐按当天情况二选一：" : "午餐有两个已订备选，按当天情况二选一：", "choices"],
    ["雷加莱拉庄园 · 固定入场", personId === "jianhuang" ? "两种方案均以" : "14:30 凭已购"],
    ["佩纳公园 · 花园票", personId === "jianhuang" ? "16:10 左右离开，" : "16:45 左右进入"],
    ["辛特拉王宫 · 可选外观", personId === "jianhuang" ? "原先的辛特拉王宫" : "辛特拉王宫改为", "optional"],
    ["返程 · 已订晚餐", personId === "jianhuang" ? "18:10 后返回" : "18:10 后回里斯本"],
  ];
  const positions = markers.map(([, marker]) => detail.indexOf(marker));
  // If the authored itinerary changes, fall back to lossless paragraphs.
  if (positions.some((position, index) => position < 0 || (index > 0 && position <= positions[index - 1]))) return fallback;
  return markers.map(([label, , kind], index) => {
    const text = detail.slice(positions[index], positions[index + 1] ?? detail.length);
    if (kind !== "choices") return { label, kind, items: splitDailyDetail(text) };
    const endOfIntro = text.indexOf("：") + 1;
    const options = text.slice(endOfIntro);
    return { label, kind, intro: text.slice(0, endOfIntro), items: personId === "niangniang" ? options.split(/(?=或 12:30)/) : splitDailyDetail(options) };
  });
}

function renderDailyDetail(personId, date, detail) {
  return `<div class="daily-detail">${getDailyDetailSections(personId, date, detail).map((section) => `<div class="daily-detail__section${section.kind ? ` daily-detail__section--${section.kind}` : ""}">
${section.label ? `<h4 class="daily-detail__label">${section.label}</h4>` : ""}
${section.intro ? `<p class="daily-detail__intro">${highlightDailyTimes(section.intro)}</p>` : ""}
    <ul class="daily-detail__items">${section.items.map((part) => `<li${section.kind === "choices" ? ' class="daily-detail__option"' : /^<a\b[^>]*>[^<]*<\/a>$/.test(part.trim()) ? ' class="daily-detail__action"' : ""}>${highlightDailyTimes(part)}</li>`).join("")}</ul>
  </div>`).join("")}</div>`;
}

function dailyCardId(personId, date) {
  return `day-${personId}-${date.replaceAll("/", "-")}`;
}

function renderDailyJump(personId, days) {
  return `<nav class="daily-jump" aria-label="日程日期定位">
    <label for="dailyJump">跳到日期</label>
    <select id="dailyJump">
      <option value="">选择日期 · ${days.length} 条</option>
      ${days.map(([date, title]) => `<option value="${dailyCardId(personId, date)}">${date} · ${escapeHtml(title)}</option>`).join("")}
    </select>
  </nav>`;
}

function renderDailyCard(personId, date, title, detail, { priority = false } = {}) {
  const visual = getDailyVisual(personId, date, title, detail);
  const images = visual.images || fallbackDailyVisual.images;
  const stay = getDailyStay(personId, date, title);
  return `
    <article class="daily-card" id="${dailyCardId(personId, date)}" tabindex="-1">
      <header class="daily-card__header">
        <div class="daily-card__top">
          <time>${date}</time>
          <div class="daily-card__sun">
            <span>日出 ${visual.sunrise}</span>
            <span>日落 ${visual.sunset}</span>
          </div>
        </div>
        <h3 class="daily-card__title">${title}</h3>
      </header>
      <div class="daily-card__media" tabindex="0" aria-label="${date} ${title} 真实照片，可左右滑动或使用方向键">
        ${images
          .map(
            (image, index) => `
              <figure>
                <img ${imageSourceAttrs(image, priority && index === 0)} alt="${title}真实景色 ${index + 1}" draggable="false" />
                <figcaption class="daily-card__photo-count">${index + 1} / ${images.length} · 左右滑动</figcaption>
              </figure>
            `,
          )
          .join("")}
      </div>
      <div class="daily-card__body">
        ${renderDailyMeeting(personId, date)}
        ${renderDailyDetail(personId, date, detail)}
        ${typeof renderDailyWeather === "function" ? renderDailyWeather(personId, date, visual) : `<p class="daily-card__season"><span class="daily-card__season-label">天气与风景 · 预报未加载</span>${visual.city}：${visual.season}</p>`}
        ${
          stay
            ? `<p class="daily-card__stayline">
                ${stay.label}：${
                  stay.url
                    ? `<a href="${stay.url}" target="_blank" rel="noopener">${stay.name}</a>`
                    : `<strong>${stay.name}</strong>`
                }
              </p>`
            : ""
        }
      </div>
    </article>
  `;
}

const timelineStart = asDate(data.meta.timelineStart);
const timelineEnd = asDate(data.meta.timelineEnd);
const totalMs = timelineEnd - timelineStart;

const roleChooserEl = document.querySelector("#roleChooser");
const roleDashboardEl = document.querySelector("#roleDashboard");
const rowsEl = document.querySelector("#timelineRows");
const gridEl = document.querySelector("#timelineGrid");
const canvasEl = document.querySelector("#timelineCanvas");
const sharedEl = document.querySelector("#sharedWindow");
const contextEl = document.querySelector("#contextPanel");
const dayGridEl = document.querySelector("#dayGrid");
const flightGridEl = document.querySelector("#flightGrid");
const coreGridEl = document.querySelector("#coreGrid");
const hotelCardEl = document.querySelector("#hotelCard");
const stayListEl = document.querySelector("#stayList");
const referenceGuideEl = document.querySelector("#referenceGuide");
const personTabsEl = document.querySelector("#personTabs");
const spotFiltersEl = document.querySelector("#spotFilters");
const spotGridEl = document.querySelector("#spotGrid");
const mobileTimelineEl = document.querySelector("#mobileTimelineList");
const tooltipEl = document.querySelector("#tooltip");
const routeAtlasDaysEl = document.querySelector("#routeAtlasDays");
const routeAtlasLinesEl = document.querySelector("#routeAtlasLines");
const routeAtlasStopsEl = document.querySelector("#routeAtlasStops");
const routeAtlasDetailEl = document.querySelector("#routeAtlasDetail");
const referenceTabIds = ["route", "cost", "tips", "packing"];
let roleRenderToken = 0;

const icelandRouteDays = [
  {
    id: "0929",
    date: "09/29",
    title: "抵达冰岛 + 史费拉裂缝浮潜",
    color: "#197b8b",
    route: "凯夫拉未克机场 → 雷克雅未克 → Þingvellir 辛格维利尔 → Silfra 史费拉 → 雷克雅未克",
    roads: "机场与市区走 41 号路；去 Þingvellir 走 36 号路。浮潜结束后返回雷克雅未克。",
    terrain: "北美板块与欧亚板块之间的裂谷水道，清澈冷泉、黑色火山岩和苔原草地。",
    stay: "Fosshotel Lind（林德城河酒店），雷克雅未克",
    caution: "浮潜团含雷市接送；12:00 在 Klettur Hótel（Mjölnisholt 12–14）等车，接车可能需要 30 分钟。落地后先放行李、换保暖衣物。",
    images: ["assets/spots/tourlink/silfra-snorkel-1.webp", "assets/spots/tourlink/silfra-snorkel-2.webp"],
    points: [
      [120, 474, "凯夫拉未克机场", "机场"],
      [183, 452, "雷克雅未克", "城市 / 住宿"],
      [270, 399, "辛格维利尔", "裂谷国家公园"],
      [286, 391, "史费拉", "浮潜"],
      [183, 452, "雷克雅未克", "回城住宿"],
    ],
  },
  {
    id: "0930",
    date: "09/30",
    title: "Kerlingarfjöll 高地徒步团",
    color: "#c76b35",
    route: "雷克雅未克 → Selfoss → Gullfoss → F35 高地公路 → Kerlingarfjöll → 原路返回",
    roads: "跟团车从雷克雅未克出发，沿 1 号路与 F35 / 高地道路前往 Kerlingarfjöll；道路是否开放由团方和天气决定。",
    terrain: "彩色流纹岩山、地热蒸汽、黑色砾石和无植被高地，是真正的内陆高地景观。",
    stay: "Fosshotel Lind（林德城河酒店），雷克雅未克",
    caution: "08:00 在 Klettur Hótel（Mjölnisholt 12–14）接车；不自驾进入高地，徒步路线和是否可进入听向导安排。",
    images: ["assets/spots/tourlink/kerlingarfjoll-official-1.webp", "assets/spots/tourlink/kerlingarfjoll-official-2.webp"],
    points: [
      [183, 452, "雷克雅未克", "出发 / 住宿"],
      [300, 444, "Selfoss", "南部平原"],
      [391, 428, "Gullfoss", "黄金瀑布"],
      [431, 327, "Kerlingarfjöll", "高地徒步"],
      [183, 452, "雷克雅未克", "回城住宿"],
    ],
  },
  {
    id: "1001",
    date: "10/01",
    title: "斯奈山半岛小团",
    color: "#356f9f",
    route: "雷克雅未克 → Borgarnes → Búðir → Arnarstapi → Djúpalónssandur → Kirkjufell → 雷克雅未克",
    roads: "1 号路向北，经 Borgarnes 转 54 号路环行斯奈山半岛，再从西侧返回雷克雅未克。",
    terrain: "海蚀悬崖、黑沙滩、熔岩原、黑教堂与教会山，西部海岸线风力强。",
    stay: "Fosshotel Lind（林德城河酒店），雷克雅未克",
    caution: "08:00 在 Klettur Hótel（Mjölnisholt 12–14）接车；全天小团车程长，海岸步道按风况开放，停靠顺序听向导安排。",
    images: ["assets/spots/season/snaefellsnes-autumn.webp", "assets/spots/tourlink/snaefellsnes-aa-1.webp"],
    points: [
      [183, 452, "雷克雅未克", "出发 / 住宿"],
      [156, 352, "Borgarnes", "北上转弯"],
      [112, 277, "Búðir", "黑教堂"],
      [145, 245, "Arnarstapi", "海蚀崖"],
      [203, 282, "Djúpalónssandur", "黑沙滩"],
      [246, 310, "Kirkjufell", "教会山"],
      [183, 452, "雷克雅未克", "回城住宿"],
    ],
  },
  {
    id: "1002",
    date: "10/02",
    title: "兰德曼那劳卡高地超级吉普",
    color: "#9a5b35",
    route: "雷克雅未克 → Hella → F225 / F208 → Landmannalaugar → 高地温泉区 → 原路返回",
    roads: "跟团超级吉普进入 F225 / F208 高地道路；路线会根据河流、风雪和道路状态调整。",
    terrain: "彩色山脉、黑色熔岩原、温泉溪流与火山口地貌，属于冰岛内陆高原。",
    stay: "Fosshotel Lind（林德城河酒店），雷克雅未克",
    caution: "08:00 在 Klettur Hótel（Mjölnisholt 12–14）接车；高地道路不适合普通车辆，徒步时长、温泉停留与实际回城时间听向导安排。",
    images: ["assets/spots/tourlink/landmannalaugar-aa-1.webp", "assets/spots/iceland/landmannalaugar-3.webp"],
    points: [
      [183, 452, "雷克雅未克", "出发 / 住宿"],
      [273, 478, "Hella", "高地入口"],
      [394, 430, "F225 / F208", "高地道路"],
      [452, 389, "Landmannalaugar", "彩色山与温泉"],
      [183, 452, "雷克雅未克", "回城住宿"],
    ],
  },
  {
    id: "1003",
    date: "10/03",
    title: "黄金圈下午团",
    color: "#d29b32",
    route: "雷克雅未克 → Þingvellir → Geysir → Gullfoss → 雷克雅未克",
    roads: "黄金圈主线走 36 号路、37 号路和 35 号路；下午团结束后回雷克雅未克休息，当晚不安排追极光。",
    terrain: "裂谷断层、间歇泉地热区与宽阔瀑布峡谷，是冰岛最集中的地质景观组合。",
    stay: "Fosshotel Lind（林德城河酒店），雷克雅未克",
    caution: "建皇上午休息，约 10:00 和赶海组会合吃早午饭；12:00 在 Klettur Hótel（Mjölnisholt 12–14）接车参加已订黄金圈下午团。",
    images: ["assets/spots/tourlink/whale-golden-thingvellir.webp", "assets/spots/gallery/gullfoss-strokkur.webp"],
    points: [
      [183, 452, "雷克雅未克", "早午饭 / 出发"],
      [270, 399, "辛格维利尔", "裂谷"],
      [350, 402, "Geysir", "间歇泉"],
      [391, 428, "Gullfoss", "黄金瀑布"],
      [183, 452, "雷克雅未克", "回酒店休息"],
    ],
  },
  {
    id: "1004",
    date: "10/04",
    title: "南岸两日团第 1 天",
    color: "#bd4f4d",
    route: "雷克雅未克 → Seljalandsfoss → Skógafoss → Reynisfjara → Vík / 南部团含住宿",
    roads: "沿 1 号环岛公路向东，瀑布与黑沙滩均在南岸主线附近；当天不自驾。",
    terrain: "冰川融水瀑布、海岸玄武岩、黑沙滩和海蚀柱，风浪大时远离浪线。",
    stay: "Nice Travel 南岸两日团含住宿（具体酒店以确认单为准）",
    caution: "10/04 08:30 在 Bus Stop #13（Rauðarárstígur）等车，接车窗口 08:30–09:00；当晚为团含住宿，次日含早餐，具体酒店听团方安排。",
    images: ["assets/spots/tourlink/nice-south-waterfall-1.webp", "assets/spots/gallery/reynisfjara-seljalandsfoss.webp"],
    points: [
      [183, 452, "雷克雅未克", "出发"],
      [385, 476, "Seljalandsfoss", "瀑布"],
      [433, 491, "Skógafoss", "瀑布"],
      [501, 498, "Reynisfjara", "黑沙滩"],
      [548, 492, "Vík / 南部住宿", "团含住宿"],
    ],
  },
  {
    id: "1005",
    date: "10/05",
    title: "南岸两日团第 2 天 + 蓝冰洞",
    color: "#5a76a7",
    route: "南部住宿 → 蓝冰洞接驳区 → Jökulsárlón → Diamond Beach → 雷克雅未克",
    roads: "沿 1 号环岛公路继续向东到瓦特纳冰川国家公园一带，下午沿 1 号路回雷克雅未克。",
    terrain: "冰川舌、蓝冰洞、冰河湖浮冰和黑沙钻石海滩；冰洞进入必须听向导安排。",
    stay: "Fosshotel Lind（林德城河酒店），雷克雅未克",
    caution: `10/05 次晨集合时间和具体位置，10/04 晚向导说明时确认；蓝冰洞入洞时间与路线以向导安排为准。 ${southCoastDinner}`,
    images: ["assets/spots/iceland/jokulsarlon-1.webp", "assets/spots/iceland/diamond-beach-1.webp"],
    points: [
      [548, 492, "南部住宿", "出发"],
      [621, 486, "蓝冰洞接驳区", "冰川向导"],
      [700, 463, "Jökulsárlón", "冰河湖"],
      [735, 462, "Diamond Beach", "钻石海滩"],
      [183, 452, "雷克雅未克", "回城住宿"],
    ],
  },
  {
    id: "1006",
    date: "10/06",
    title: "Sky Lagoon 温泉 + 飞往米兰",
    color: "#8a5f9e",
    route: "林德城河酒店 → Sky Lagoon → 雷克雅未克市区 → 凯夫拉未克机场 → 米兰",
    roads: "温泉订单不含接送，自行乘公共交通前往 Sky Lagoon；提前查询往返公交班次，预留步行、换乘与取行李时间，再转乘机场交通前往 KEF。",
    terrain: "海湾城市、黑色火山海岸和地热温泉；这是离开冰岛前的收尾日，不再安排远途景点。",
    stay: "当晚无冰岛住宿：19:20 从凯夫拉未克机场飞往米兰",
    caution: "13:00 到 Sky Lagoon 入场，温泉 ¥1441.87/2人，不含接送。自行安排公共交通，并预留取行李、机场交通和值机时间；19:20 飞米兰。",
    images: ["assets/spots/iceland/sky-lagoon-official.webp", "assets/spots/iceland/reykjavik-coast.webp"],
    points: [
      [183, 452, "林德城河酒店", "退房 / 出发"],
      [171, 435, "Sky Lagoon", "13:00 入场 / 无接送"],
      [183, 452, "雷克雅未克市区", "取行李 / 换乘机场交通"],
      [120, 474, "凯夫拉未克机场", "19:20 飞米兰"],
    ],
  },
];

let activeRouteDayId = icelandRouteDays[0].id;
let referenceExpanded = false;
const selectableRoles = ["jianhuang", "tongyan", "yueyue", "haigang", "niangniang"].map((id) => data.roleViews.find((role) => role.id === id));
const roleIds = selectableRoles.map((role) => role.id);
const queryRole = new URLSearchParams(window.location.search).get("role");
const hashRole = window.location.hash.replace("#", "");
const roleParam = queryRole || hashRole;
let activeRoleId = roleIds.includes(roleParam) ? roleParam : null;
const shouldNormalizeRoleUrl = roleIds.includes(roleParam);

function asDate(value) {
  return new Date(value);
}

function percentAt(value) {
  return ((asDate(value) - timelineStart) / totalMs) * 100;
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function routePoints(points) {
  return points.map(([x, y]) => `${x},${y}`).join(" ");
}

function renderRouteAtlas(dayId = activeRouteDayId) {
  if (!routeAtlasDaysEl || !routeAtlasLinesEl || !routeAtlasStopsEl || !routeAtlasDetailEl) return;
  const selectedDay = icelandRouteDays.find((day) => day.id === dayId) || icelandRouteDays[0];
  activeRouteDayId = selectedDay.id;

  if (!routeAtlasDaysEl.firstElementChild) routeAtlasDaysEl.innerHTML = icelandRouteDays
    .map(
      (day) => `
        <button class="route-atlas__day ${day.id === activeRouteDayId ? "is-active" : ""}" type="button" data-route-day="${day.id}" aria-pressed="${day.id === activeRouteDayId}">
          <span>${day.date}</span>
          <strong>${day.title}</strong>
        </button>
      `,
    )
    .join("");

  routeAtlasDaysEl.querySelectorAll("[data-route-day]").forEach((button) => {
    const selected = button.dataset.routeDay === activeRouteDayId;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });

  routeAtlasLinesEl.innerHTML = icelandRouteDays
    .map(
      (day) => `
        <polyline class="route-map__route ${day.id === activeRouteDayId ? "is-selected" : "is-muted"}" data-route-day="${day.id}" points="${routePoints(day.points)}" stroke="${day.color}" />
      `,
    )
    .join("");

  const markerMap = new Map();
  icelandRouteDays.forEach((day) => {
    day.points.forEach(([x, y, label, kind]) => {
      const key = `${x}-${y}-${label}`;
      const current = markerMap.get(key) || { x, y, label, kind, dayIds: [] };
      current.dayIds.push(day.id);
      markerMap.set(key, current);
    });
  });

  routeAtlasStopsEl.innerHTML = [...markerMap.values()]
    .map((stop) => {
      const isSelected = stop.dayIds.includes(activeRouteDayId);
      const isStay = stop.kind.includes("住宿");
      return `
        <g class="route-map__stop ${isSelected ? "is-selected" : "is-muted"} ${isStay ? "is-stay" : ""}" tabindex="0" role="img" aria-label="${escapeHtml(stop.label)}：${escapeHtml(stop.kind)}">
          <circle cx="${stop.x}" cy="${stop.y}" r="${isStay ? 9 : 7}" fill="${isStay ? "#fff" : selectedDay.color}" />
          <circle class="route-map__stop-core" cx="${stop.x}" cy="${stop.y}" r="${isStay ? 4 : 3}" fill="${isStay ? selectedDay.color : "#fff"}" />
          ${isSelected ? `<text x="${stop.x + 12}" y="${stop.y - 10}">${escapeHtml(stop.label)}</text>` : ""}
        </g>
      `;
    })
    .join("");

  routeAtlasDetailEl.querySelectorAll("img[data-src]").forEach((image) => {
    deferredImageObserver?.unobserve(image);
  });
  routeAtlasDetailEl.innerHTML = `
    <div class="route-day-detail__copy">
      <div class="route-day-detail__eyebrow">${selectedDay.date} / ${selectedDay.title}</div>
      <h3>${selectedDay.route}</h3>
      <p>${selectedDay.roads}</p>
      <div class="route-day-detail__facts">
        <div><span>地貌</span><strong>${selectedDay.terrain}</strong></div>
        <div><span>住宿</span><strong>${selectedDay.stay}</strong></div>
        <div><span>提醒</span><strong>${selectedDay.caution}</strong></div>
      </div>
      <ol class="route-stop-list">
        ${selectedDay.points
          .filter((point, index, points) => index === 0 || point[2] !== points[index - 1][2])
          .map(([x, y, label, kind]) => `<li><b>${escapeHtml(label)}</b><span>${escapeHtml(kind)}</span></li>`)
          .join("")}
      </ol>
    </div>
    <div class="route-day-detail__media">
      ${selectedDay.images.map((image, index) => `<figure><img ${imageSourceAttrs(image)} alt="${selectedDay.title}景观缩影 ${index + 1}" /><figcaption>${index === 0 ? selectedDay.terrain : "当天路线相关景观"}</figcaption></figure>`).join("")}
    </div>
  `;
  observeDeferredImages(routeAtlasDetailEl);
}

function getRole(roleId = activeRoleId) {
  return data.roleViews.find((role) => role.id === roleId) || selectableRoles[0];
}

function isForRole(item, roleId = activeRoleId) {
  if (!roleId) return false;
  return roleId === "all" || !item.audiences || item.audiences.includes(roleId);
}

function updateRoleUrl(roleId) {
  const url = new URL(window.location.href);
  url.searchParams.delete("v");
  if (roleId && roleIds.includes(roleId)) {
    url.searchParams.set("role", roleId);
  } else {
    url.searchParams.delete("role");
  }
  if (roleIds.includes(url.hash.slice(1))) url.hash = "";
  window.history.replaceState({}, "", url);
}

function setWindowPosition(el, start, end) {
  const left = percentAt(start);
  const right = percentAt(end);
  el.style.left = `${left}%`;
  el.style.width = `${Math.max(right - left, 1.2)}%`;
}

function renderRoleChooser(roleId = activeRoleId) {
  if (!roleChooserEl.firstElementChild) roleChooserEl.innerHTML = `
    <div class="role-cards" aria-label="选择角色">
      ${selectableRoles
        .map(
          (role) => `
            <button
              class="role-card ${role.id === roleId ? "is-active" : ""}"
              type="button"
              data-role="${role.id}"
              style="--accent:${role.accent}"
              aria-pressed="${role.id === roleId}"
            >
              <strong>${role.name}</strong>
            </button>
          `,
        )
        .join("")}
    </div>
  `;
  roleChooserEl.querySelectorAll("[data-role]").forEach((button) => {
    const selected = button.dataset.role === roleId;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-pressed", String(selected));
    button.querySelector("strong").textContent = getRole(button.dataset.role).name;
  });
}

function getItineraryForRole(roleId) {
  if (roleId === "all") return null;
  return data.personPlans.find((person) => person.id === roleId) || null;
}

function renderRoleDashboard(roleId = activeRoleId) {
  roleDashboardEl.querySelectorAll("img[data-src]").forEach((image) => {
    deferredImageObserver?.unobserve(image);
  });
  if (!roleId || !roleIds.includes(roleId)) {
    roleDashboardEl.innerHTML = "";
    roleDashboardEl.classList.remove("is-entering");
    return;
  }
  const role = getRole(roleId);
  const itinerary = getItineraryForRole(roleId);
  const days = itinerary ? itinerary.days : role.focusDays;
  roleDashboardEl.innerHTML = `
    <div class="dashboard-plan" style="--accent:${role.accent}">
      <div class="dashboard-plan__title">
        <strong>${role.name}完整日程</strong>
      </div>
      ${renderDailyJump(roleId, days)}
      <div class="dashboard-days">
        ${days
          .map(([date, title, detail], index) => renderDailyCard(roleId, date, title, detail, { priority: index === 0 }))
          .join("")}
      </div>
    </div>
  `;
  roleDashboardEl.classList.remove("is-entering");
  roleDashboardEl.classList.add("is-entering");
  window.requestAnimationFrame(() => roleDashboardEl.classList.remove("is-entering"));
  observeDeferredImages(roleDashboardEl);
}

function isRenderTargetVisible(element) {
  const section = element?.closest("section");
  return Boolean(section && window.getComputedStyle(section).display !== "none");
}

function scheduleRoleSecondaryRender(roleId) {
  const token = ++roleRenderToken;
  const role = getRole(roleId);
  const render = () => {
    if (token !== roleRenderToken || roleId !== activeRoleId) return;

    if (isRenderTargetVisible(coreGridEl)) renderCoreDays(roleId);
    if (isRenderTargetVisible(stayListEl)) renderStayList(roleId);
    if (isRenderTargetVisible(dayGridEl)) renderDays(roleId);
    if (isRenderTargetVisible(flightGridEl)) renderFlights(roleId);
    if (isRenderTargetVisible(spotFiltersEl)) renderSpotFilters("__role");
    if (isRenderTargetVisible(personTabsEl)) renderPersonTabs(roleId);
    if (isRenderTargetVisible(canvasEl)) applyFilter(role.groupId || "all");

    const renderSpotsWhenIdle = () => {
      if (token !== roleRenderToken || roleId !== activeRoleId) return;
      if (isRenderTargetVisible(spotGridEl)) {
        renderSpots(`role:${roleId}`);
        observeDeferredImages(spotGridEl);
      }
      roleDashboardEl.removeAttribute("aria-busy");
    };

    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(renderSpotsWhenIdle, { timeout: 700 });
    } else {
      window.setTimeout(renderSpotsWhenIdle, 0);
    }
  };

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(render);
  });
}

function renderGrid() {
  const ticks = [];
  for (let day = 29; day <= 30; day += 1) {
    ticks.push({ label: `09/${day}`, date: `2026-09-${day}T00:00:00` });
  }
  for (let day = 1; day <= 10; day += 1) {
    ticks.push({ label: `10/${String(day).padStart(2, "0")}`, date: `2026-10-${String(day).padStart(2, "0")}T00:00:00` });
  }

  gridEl.innerHTML = ticks
    .map((tick) => `<div class="tick" style="left:${percentAt(tick.date)}%"><span>${tick.label}</span></div>`)
    .join("");
}

function renderRows() {
  rowsEl.innerHTML = data.groups
    .map((group) => {
      const left = percentAt(group.icelandWindow.start);
      const right = percentAt(group.icelandWindow.end);
      const width = Math.max(right - left, 1.5);

      return `
        <div class="row" data-row="${group.id}">
          <div>
            <span class="row__name">${group.name}</span>
            <span class="row__meta">${group.tags.join(" / ")}</span>
          </div>
          <div class="track">
            <button
              class="bar"
              type="button"
              data-group="${group.id}"
              style="--bar-color:${group.color}; left:${left}%; width:${width}%"
              aria-label="${group.name}冰岛停留 ${group.icelandWindow.label}"
            >
              <span>${group.icelandWindow.label}</span>
            </button>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderHighlights() {
  setWindowPosition(sharedEl, data.overlap.start, data.overlap.end);
  setWindowPosition(document.querySelector(".day-one"), "2026-10-04T00:00:00", "2026-10-05T00:00:00");
  setWindowPosition(document.querySelector(".day-two"), "2026-10-05T00:00:00", "2026-10-06T00:00:00");
}

function renderDays(roleId = activeRoleId) {
  const days = data.recommendedPlan.filter((day) => isForRole(day, roleId));
  dayGridEl.innerHTML = days
    .map(
      (day) => `
      <article class="day" style="--accent:${day.accent}">
        <span class="day__status">${day.date}</span>
        <strong>${day.title}</strong>
        <p>${day.status}</p>
        <p>${day.plan}</p>
        <div class="day__stay">${day.stay}</div>
        <div class="day__avoid">${day.avoid}</div>
      </article>
    `,
    )
    .join("") || `<p class="empty-state">这个角色没有需要单独跟进的每日行动卡。</p>`;
}

function renderCoreDays(roleId = activeRoleId) {
  const days = data.coreDays.filter((day) => isForRole(day, roleId));
  coreGridEl.innerHTML = days
    .map(
      (day) => `
        <article class="core-card" style="--accent:${day.accent}">
          <div class="core-card__date">${day.date}</div>
          <h3>${day.title}</h3>
          <p class="core-card__route">${day.route}</p>
          <p>${day.why}</p>
          <div class="core-card__chips">
            ${day.checkpoints.map((item) => `<span>${item}</span>`).join("")}
          </div>
          ${
            day.details
              ? `<div class="core-card__details">
                  ${day.details
                    .map(
                      ([time, detail]) => `
                        <div>
                          <b>${time}</b>
                          <span>${detail}</span>
                        </div>
                      `,
                    )
                    .join("")}
                </div>`
              : ""
          }
          <div class="core-card__sleep">${day.sleep}</div>
        </article>
      `,
    )
    .join("") || `<p class="empty-state">这个组合没有需要单独跟进的冰岛核心段。</p>`;
}

function renderStayList(roleId = activeRoleId) {
  const stays = data.staySchedule.filter((stay) => isForRole(stay, roleId));
  stayListEl.innerHTML = `
    <div class="stay-list">
      ${stays
        .map(
          (stay) => `
            <article class="stay-item ${stay.status === "已订" ? "is-booked" : ""}" style="--accent:${stay.accent}">
              <div class="stay-item__top">
                <span>${stay.date}</span>
                <b>${stay.status}</b>
              </div>
              <h3>${stay.name}</h3>
              <p class="stay-item__meta">${stay.city} · ${stay.people} · ${stay.nights}</p>
              <p>${stay.detail}</p>
              ${stay.mapUrl ? `<a href="${stay.mapUrl}" target="_blank" rel="noopener">地图</a>` : ""}
            </article>
          `,
        )
        .join("") || `<p class="empty-state">这个视角暂无需要关注的住宿订单。</p>`}
    </div>
  `;
}

function renderHotel() {
  const hotel = data.hotel;
  hotelCardEl.innerHTML = `
    <div class="hotel-layout">
      <div class="hotel-main">
        <span class="hotel-badge">共同住宿基地</span>
        <h3>${hotel.cnName}</h3>
        <p class="hotel-name">${hotel.name}</p>
        <p class="hotel-address">${hotel.address}</p>
        <a class="hotel-map" href="${hotel.mapUrl}" target="_blank" rel="noopener">打开地图导航</a>
      </div>
      <div class="hotel-facts" aria-label="住宿关键信息">
        <div><span>入住日期</span><strong>${hotel.dates}</strong></div>
        <div><span>入住 / 退房</span><strong>${hotel.checkin}；${hotel.checkout}</strong></div>
        <div><span>房间</span><strong>${hotel.rooms}</strong></div>
        <div><span>适用人员</span><strong>${hotel.people}</strong></div>
        <div><span>付款</span><strong>${hotel.payment}</strong></div>
        <div><span>取消政策</span><strong>${hotel.cancel}</strong></div>
      </div>
      <div class="hotel-notes">
        ${hotel.notes.map((note) => `<p>${note}</p>`).join("")}
      </div>
    </div>
  `;
}

function renderSpotFilters(active = "iceland-six") {
  spotFiltersEl.innerHTML = data.spotCategories
    .map(
      ([id, label]) => `
        <button class="spot-filter ${id === active ? "is-active" : ""}" type="button" data-spot-filter="${id}">
          ${label}
        </button>
      `,
    )
    .join("");
}

function money(value) {
  return `¥${Math.round(value).toLocaleString("zh-CN")}`;
}

function textBlock(value) {
  return escapeHtml(value || "").replaceAll("\n", "<br>");
}

function renderReferenceGuide(active = "route", expanded = referenceExpanded) {
  const ref = data.lastYearReference;
  const tabs = [
    ["route", "行程参考"],
    ["cost", "花销参考"],
  ];

  referenceExpanded = expanded;

  if (!expanded) {
    referenceGuideEl.innerHTML = `
      <div class="reference-collapsed">
        <div>
          <strong>朋友 2025 实走参考</strong>
          <p>不影响主行程，需要时再打开。</p>
        </div>
        <div class="reference-actions">
          <button class="reference-expand" type="button" data-reference-expand="route" aria-expanded="false">行程参考</button>
          <button class="reference-expand reference-expand--light" type="button" data-reference-expand="cost" aria-expanded="false">花销参考</button>
        </div>
      </div>
    `;
    return;
  }

  referenceGuideEl.innerHTML = `
    <div class="reference-full-head">
      <strong>朋友 2025 实走参考</strong>
      <button class="reference-collapse" type="button" data-reference-collapse aria-expanded="true" aria-controls="referenceView">收起</button>
    </div>
    <div class="reference-kpis">
      ${ref.summary
        .map(
          (item) => `
            <article>
              <span>${item.label}</span>
              <strong>${item.value}</strong>
              <p>${item.note}</p>
            </article>
          `,
        )
        .join("")}
    </div>
    <div class="reference-bridge">
      <strong>去年对今年的直接参考</strong>
      <ul>${ref.yearLinks.map((item) => `<li>${item}</li>`).join("")}</ul>
    </div>
    <div class="reference-tabs" aria-label="去年参考视图">
      ${tabs
        .map(
          ([id, label]) => `
            <button class="reference-tab ${id === active ? "is-active" : ""}" type="button" data-reference-tab="${id}" aria-pressed="${id === active}" aria-controls="referenceView">
              ${label}
            </button>
          `,
        )
        .join("")}
    </div>
    <div class="reference-view" id="referenceView">
      ${renderReferenceView(active)}
    </div>
  `;
}

function renderReferenceView(active) {
  if (active === "cost") return renderReferenceCosts();
  if (active === "tips") return renderReferenceTips();
  if (active === "packing") return renderReferencePacking();
  return renderReferenceRoute();
}

function renderReferenceRoute() {
  const ref = data.lastYearReference;
  return `
    <div class="reference-route">
      ${ref.itinerary
        .map(
          (day, index) => `
            <article class="reference-day" style="--step:${index + 1}">
              <time>${day.date}</time>
              <div>
                <h3>${day.title}</h3>
                <p>${textBlock(day.focus)}</p>
                <dl>
                  <div><dt>交通</dt><dd>${textBlock(day.transport)}</dd></div>
                  ${day.stay ? `<div><dt>住宿</dt><dd>${textBlock(day.stay)}</dd></div>` : ""}
                  ${day.note ? `<div><dt>备注</dt><dd>${textBlock(day.note)}</dd></div>` : ""}
                </dl>
              </div>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderReferenceCosts() {
  const ref = data.lastYearReference;
  const maxItem = Math.max(...ref.expenses.sampleItems.map(([, , value]) => value));

  return `
    <div class="cost-summary">
      <article>
        <span>费用口径</span>
        <strong>参考 LJ 单人列</strong>
        <p>直接读取 Excel D 列 LJ 的个人开销，用这个人作为典型参考样本。</p>
      </article>
      <article>
        <span>LJ 样本合计</span>
        <strong>${money(ref.expenses.samplePerson.total)}</strong>
        <p>含杭州往返奥斯陆、奥斯陆往返冰岛、当地团、住宿、餐饮和个人购物。</p>
      </article>
      <article>
        <span>今年相关参考</span>
        <strong>南岸两日 ¥4,496</strong>
        <p>LJ 列 10/04-10/05 南岸两日团金额；可作为今年南岸两日团的典型参考项。</p>
      </article>
      <article>
        <span>后续候选参考</span>
        <strong>斯奈山 ¥956</strong>
        <p>LJ 列 10/06 斯奈山半岛一日团金额；今年可作为斯奈山半岛行程参考。</p>
      </article>
    </div>
    <section class="top-spend">
      <h3>LJ 单人开销明细参考</h3>
      <div>
        ${ref.expenses.sampleItems
          .map(
            ([date, item, value, note]) => `
              <article>
                <span>${date}</span>
                <strong>${item}</strong>
                <div class="mini-meter"><i style="width:${(value / maxItem) * 100}%"></i></div>
                <p>${money(value)}${note ? ` · ${note}` : ""}</p>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderReferenceTips() {
  const ref = data.lastYearReference;
  return `
    <div class="tips-grid">
      ${ref.tips
        .map(
          (tip) => `
            <article>
              <span>${tip.group}</span>
              <h3>${tip.title}</h3>
              <p>${textBlock(tip.body)}</p>
              ${tip.source ? `<small>${textBlock(tip.source)}</small>` : ""}
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderReferencePacking() {
  const ref = data.lastYearReference;
  return `
    <div class="packing-board">
      <div class="packing-note">
        <span>去年行李提醒</span>
        <strong>${ref.packing.note}</strong>
        <p>今年 10 月冰岛依旧按“防风、防水、保暖、可分层”准备。</p>
      </div>
      <div class="packing-list">
        ${ref.packing.items.map((item) => `<label><input type="checkbox" /> <span>${item}</span></label>`).join("")}
      </div>
    </div>
  `;
}

function applySpotFilter(filter) {
  document.querySelectorAll(".spot-filter").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.spotFilter === filter);
  });
  renderSpots(filter);
}

window.applySpotFilter = applySpotFilter;

function renderSpots(active = "iceland-six") {
  const roleMatch = typeof active === "string" && active.startsWith("role:");
  const role = roleMatch ? getRole(active.replace("role:", "")) : null;
  const spots = role
    ? data.spots.filter((spot) => spot.segments.some((segment) => role.spotSegments.includes(segment)))
    : active === "all"
      ? data.spots
      : data.spots.filter((spot) => spot.segments.includes(active));
  spotGridEl.innerHTML = spots
    .map(
      (spot, spotIndex) => `
        <article class="spot-card">
          <div class="spot-gallery" aria-label="${spot.title}真实照片">
            ${(spot.images || [spot.image])
              .map(
                (image, index, arr) => `
                  <figure class="spot-card__image">
                    <img ${imageSourceAttrs(image, spotIndex === 0 && index === 0)} alt="${spot.title}真实照片 ${index + 1}" />
                    <figcaption>
                      <span>${spot.date} · ${spot.city}</span>
                      <b>${index + 1}/${arr.length}</b>
                    </figcaption>
                  </figure>
                `,
              )
              .join("")}
          </div>
          <div class="spot-card__body">
            <h3>${spot.title}</h3>
            <div class="spot-audience">
              <span>${spot.participant}</span>
              <span>${spot.transport}</span>
            </div>
            <div class="spot-meta">
              <div><b>建议时段</b><span>${spot.bestTime}</span></div>
              <div><b>开放 / 可进入</b><span>${spot.open}</span></div>
              <div><b>日落</b><span>${spot.sunset}</span></div>
              <div><b>最佳观景点</b><span>${spot.viewpoint}</span></div>
            </div>
            <ul>${spot.notes.map((note) => `<li>${note}</li>`).join("")}</ul>
          </div>
        </article>
      `,
    )
    .join("") || `<p class="empty-state">这个视角暂无需要关注的景点卡。</p>`;
  observeDeferredImages(spotGridEl);
}

function renderPersonTabs(activeId = data.personPlans[0].id) {
  personTabsEl.innerHTML = data.personPlans
    .map(
      (person) => `
        <button
          class="person-tab ${person.id === activeId ? "is-active" : ""}"
          type="button"
          data-person="${person.id}"
          style="--accent:${person.color}"
        >
          ${person.name}
        </button>
      `,
    )
    .join("");
}

function renderMobileTimeline() {
  mobileTimelineEl.innerHTML = data.groups
    .map((group) => {
      const [start, end] = group.icelandWindow.label.split(" → ");
      const primaryTag = group.tags[1] || group.tags[0];
      return `
        <article class="mobile-person" data-mobile-person="${group.id}" style="--accent:${group.color}">
          <div class="mobile-person__top">
            <strong>${group.shortName}</strong>
            <span class="mobile-person__tag">${primaryTag}</span>
          </div>
          <div class="mobile-person__times">
            <div>
              <span>到冰岛</span>
              <b>${start}</b>
            </div>
            <div>
              <span>离开冰岛</span>
              <b>${end}</b>
            </div>
          </div>
          <p>${group.summary}</p>
        </article>
      `;
    })
    .join("");
}

function listItems(items) {
  return items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function renderFlights(roleId = activeRoleId) {
  const role = getRole(roleId);
  const groups =
    roleId === "all"
      ? data.groups
      : role.groupId
        ? data.groups.filter((group) => group.id === role.groupId)
        : [];

  if (!groups.length) {
    flightGridEl.innerHTML = `<p class="empty-state">这个视角没有冰岛航班卡；娘娘主要看葡萄牙和阿姆斯特丹本地汇合。</p>`;
    return;
  }

  flightGridEl.innerHTML = groups
    .map(
      (group, index) => `
      <details class="flight-card" ${roleId !== "all" || index === 1 ? "open" : ""}>
        <summary>
          <span class="flight-card__head">
            <strong>${group.name}</strong>
            <span class="tag-row">
              ${group.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
            </span>
          </span>
        </summary>
        <div class="flight-card__body">
          <h4>欧洲大交通</h4>
          <ul>${listItems(group.flights.europeLongHaul)}</ul>
          <h4>冰岛去程</h4>
          <ul>${listItems(group.flights.icelandOutbound)}</ul>
          <h4>冰岛返程</h4>
          <ul>${listItems(group.flights.icelandReturn)}</ul>
          <h4>后续安排</h4>
          <ul>${listItems(group.flights.afterIceland)}</ul>
        </div>
      </details>
    `,
    )
    .join("");
}

function setContext(filter) {
  const group = data.groups.find((item) => item.id === filter);

  if (filter === "overlap") {
    contextEl.innerHTML = `
      <span class="context__chip">当前视角</span>
      <h3>只看重合窗口</h3>
      <p>${data.overlap.context}</p>
    `;
    return;
  }

  if (group) {
    contextEl.innerHTML = `
      <span class="context__chip">当前视角</span>
      <h3>${group.name}</h3>
      <p>${group.summary}</p>
    `;
    return;
  }

  contextEl.innerHTML = `
    <span class="context__chip">当前视角</span>
    <h3>全部冰岛同行组合</h3>
    <p>${data.overlap.context}</p>
  `;
}

function applyFilter(filter) {
  document.querySelectorAll(".filter").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.filter === filter);
  });

  const isPerson = data.groups.some((group) => group.id === filter);
  canvasEl.classList.toggle("is-filtered", isPerson);
  canvasEl.classList.toggle("is-overlap", filter === "overlap");

  document.querySelectorAll(".row").forEach((row) => {
    row.classList.toggle("is-selected", row.dataset.row === filter);
  });
  document.querySelectorAll(".bar").forEach((bar) => {
    bar.classList.toggle("is-selected", bar.dataset.group === filter);
  });

  document.querySelectorAll(".mobile-person").forEach((card) => {
    const isTarget = card.dataset.mobilePerson === filter;
    card.classList.toggle("is-selected", isTarget);
    card.classList.toggle("is-dimmed", isPerson && !isTarget);
  });

  setContext(filter);
}

function showTooltip(groupId, event) {
  const group = data.groups.find((item) => item.id === groupId);
  if (!group) return;

  tooltipEl.innerHTML = `
    <strong>${group.name}</strong>
    冰岛停留：${group.icelandWindow.label}<br>
    ${group.summary}
  `;
  tooltipEl.style.display = "block";
  moveTooltip(event);
}

function moveTooltip(event) {
  const margin = 16;
  const x = Math.min(event.clientX + margin, window.innerWidth - tooltipEl.offsetWidth - margin);
  const y = Math.min(event.clientY + margin, window.innerHeight - tooltipEl.offsetHeight - margin);
  tooltipEl.style.transform = `translate(${Math.max(margin, x)}px, ${Math.max(margin, y)}px)`;
}

function hideTooltip() {
  tooltipEl.style.display = "none";
}

function applyRoleView(roleId = activeRoleId, { persist = true } = {}) {
  activeRoleId = roleIds.includes(roleId) ? roleId : null;
  roleRenderToken += 1;

  document.body.dataset.role = activeRoleId || "none";
  if (persist) {
    updateRoleUrl(activeRoleId);
  }

  renderRoleChooser(activeRoleId);
  renderRoleDashboard(activeRoleId);

  if (!activeRoleId) {
    roleDashboardEl.removeAttribute("aria-busy");
    document.querySelector(".role-dashboard")?.setAttribute("hidden", "");
    return;
  }

  document.querySelector(".role-dashboard")?.removeAttribute("hidden");
  roleDashboardEl.setAttribute("aria-busy", "true");
  scheduleRoleSecondaryRender(activeRoleId);
}

renderGrid();
renderRows();
renderHighlights();
renderHotel();
const requestedReferenceTab = new URLSearchParams(window.location.search).get("ref");
renderReferenceGuide(
  referenceTabIds.includes(requestedReferenceTab) ? requestedReferenceTab : "route",
  referenceTabIds.includes(requestedReferenceTab),
);
renderMobileTimeline();
renderRouteAtlas();
applyRoleView(activeRoleId, { persist: shouldNormalizeRoleUrl });

roleChooserEl.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-role]");
  if (!button || button.dataset.role === activeRoleId) return;
  applyRoleView(button.dataset.role);
});

function syncRoleFromUrl() {
  const url = new URL(window.location.href);
  const requestedRole = url.searchParams.get("role") || url.hash.slice(1);
  const roleId = roleIds.includes(requestedRole) ? requestedRole : selectableRoles[0].id;
  if (roleId !== activeRoleId) applyRoleView(roleId, { persist: false });
  if (roleIds.includes(url.hash.slice(1))) updateRoleUrl(roleId);
}

window.addEventListener("popstate", syncRoleFromUrl);
window.addEventListener("hashchange", syncRoleFromUrl);
window.addEventListener("load", () => {
  const target = document.getElementById(window.location.hash.slice(1));
  if (target) target.scrollIntoView({ behavior: "instant" });
}, { once: true });

roleDashboardEl.addEventListener("change", (event) => {
  if (event.target.id !== "dailyJump" || !event.target.value) return;
  const target = document.getElementById(event.target.value);
  if (!target || !roleDashboardEl.contains(target)) return;
  target.focus({ preventScroll: true });
  target.scrollIntoView({ behavior: "instant", block: "start" });
  event.target.value = "";
});

let galleryDrag = null;
roleDashboardEl.addEventListener("pointerdown", (event) => {
  const gallery = event.target.closest(".daily-card__media");
  if (!gallery || event.pointerType !== "mouse" || event.button !== 0) return;
  galleryDrag = { gallery, startX: event.clientX, scrollLeft: gallery.scrollLeft };
  gallery.setPointerCapture(event.pointerId);
});

roleDashboardEl.addEventListener("pointermove", (event) => {
  if (!galleryDrag) return;
  const { gallery, startX, scrollLeft } = galleryDrag;
  if (Math.abs(event.clientX - startX) < 4 && !gallery.classList.contains("is-dragging")) return;
  gallery.classList.add("is-dragging");
  gallery.scrollLeft = scrollLeft + startX - event.clientX;
});

function endGalleryDrag() {
  if (!galleryDrag) return;
  galleryDrag.gallery.classList.remove("is-dragging");
  galleryDrag = null;
}

roleDashboardEl.addEventListener("pointerup", endGalleryDrag);
roleDashboardEl.addEventListener("pointercancel", endGalleryDrag);
roleDashboardEl.addEventListener("lostpointercapture", endGalleryDrag);

roleDashboardEl.addEventListener(
  "click",
  (event) => {
    if (!event.target.closest(".daily-card__media")) return;
    event.preventDefault();
    event.stopPropagation();
  },
  true,
);

roleDashboardEl.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-role]");
  if (!button || button.dataset.role === activeRoleId) return;
  applyRoleView(button.dataset.role);
});

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => applyFilter(button.dataset.filter));
});

document.querySelectorAll(".bar").forEach((bar) => {
  bar.addEventListener("mouseenter", (event) => showTooltip(bar.dataset.group, event));
  bar.addEventListener("mousemove", moveTooltip);
  bar.addEventListener("mouseleave", hideTooltip);
  bar.addEventListener("click", (event) => {
    applyFilter(bar.dataset.group);
    showTooltip(bar.dataset.group, event);
    window.setTimeout(hideTooltip, 2200);
  });
});

personTabsEl.addEventListener("click", (event) => {
  const button = event.target.closest("[data-person]");
  if (!button) return;
  const personId = button.dataset.person;
  applyRoleView(personId);
});

spotFiltersEl.addEventListener("click", (event) => {
  const button = event.target.closest("[data-spot-filter]");
  if (!button) return;
  applySpotFilter(button.dataset.spotFilter);
});

referenceGuideEl.addEventListener("click", (event) => {
  const expandButton = event.target.closest("[data-reference-expand]");
  if (expandButton) {
    renderReferenceGuide(expandButton.dataset.referenceExpand || "route", true);
    referenceGuideEl.querySelector(".reference-tab.is-active")?.focus({ preventScroll: true });
    return;
  }

  const collapseButton = event.target.closest("[data-reference-collapse]");
  if (collapseButton) {
    const activeTab = referenceGuideEl.querySelector(".reference-tab.is-active")?.dataset.referenceTab || "route";
    renderReferenceGuide("route", false);
    referenceGuideEl.querySelector(`[data-reference-expand="${activeTab}"]`)?.focus({ preventScroll: true });
    return;
  }

  const tabButton = event.target.closest("[data-reference-tab]");
  if (!tabButton) return;
  renderReferenceGuide(tabButton.dataset.referenceTab, true);
  referenceGuideEl.querySelector(".reference-tab.is-active")?.focus({ preventScroll: true });
});

routeAtlasDaysEl?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-route-day]");
  if (!button || button.dataset.routeDay === activeRouteDayId) return;
  renderRouteAtlas(button.dataset.routeDay);
});
