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
        end: "2026-10-06T08:00:00",
        label: "09/29 07:50 → 10/06 08:00",
      },
      tags: ["2 人", "最早到冰岛", "10/06 早班机离开"],
      summary:
        "最早到冰岛，可在朋友到达前先玩非核心路线。10/06 08:00 从 KEF 离开。",
      flights: {
        europeLongHaul: [
          "09/25 PEK 北京首都 T3 13:35 → LHR 伦敦希思罗 T2 17:40｜TP8329",
          "09/25 LHR 伦敦希思罗 T2 18:45 → LIS 里斯本 T1 21:35｜TP1357",
          "10/07 LIS 里斯本 T1 18:15 → CPH 哥本哈根 T3 23:00｜TP756",
          "10/08 CPH 哥本哈根 T3 19:05 → 10/09 PEK 北京首都 T3 09:55｜TP8782",
        ],
        icelandOutbound: [
          "09/28 OPO 波尔图 09:20 → BVA 巴黎博韦 12:30｜瑞安航空 FR594",
          "09/29 CDG 巴黎戴高乐 06:00 → KEF 雷克雅未克 07:50｜易捷航空 EZY4629",
        ],
        icelandReturn: [
          "10/06 KEF 雷克雅未克 08:00 → MAN 曼彻斯特 T2 11:40",
          "10/06 MAN 曼彻斯特 T3 20:05 → LIS 里斯本 T1 23:00",
        ],
        afterIceland: [
          "09/28 巴黎短停：日落塞纳河游船 + 20:00 埃菲尔铁塔亮灯 / 闪灯",
          "10/06 曼彻斯特短停：机场火车进城，北区 / 国家足球博物馆 / 大教堂轻量线",
          "10/07 里斯本半日 CityWalk",
          "10/08 哥本哈根转机一日游：市区轻量 CityWalk，19:05 CPH 飞北京",
        ],
      },
    },
    {
      id: "haigang",
      name: "1号出发布鲁塞尔：海港组",
      shortName: "海港组",
      color: "#F2994A",
      icelandWindow: {
        start: "2026-10-03T07:40:00",
        end: "2026-10-08T19:15:00",
        label: "10/03 07:40 → 10/08 19:15",
      },
      tags: ["2 人", "10/03 早上到", "10/09 阿姆斯特丹", "10/10 火车回布鲁塞尔"],
      summary:
        "10/03 早上到 KEF，可以当天开始轻量活动。10/08 晚离开冰岛，10/09 阿姆斯特丹玩 1 天，10/10 火车回布鲁塞尔。",
      flights: {
        europeLongHaul: [
          "10/01 PKX 北京大兴 11:40 → PVG 上海浦东 T2 13:55｜吉祥航空 HO1258",
          "10/02 PVG 上海浦东 T2 01:35 → BRU 布鲁塞尔 07:30｜吉祥航空 HO1659",
          "10/11 BRU 布鲁塞尔 12:20 → 10/12 PVG 上海浦东 T2 05:20｜吉祥航空 HO1660",
          "10/12 PVG 上海浦东 T2 08:20 → PKX 北京大兴 10:35｜吉祥航空 HO1257",
        ],
        icelandOutbound: [
          "10/02 BRU 布鲁塞尔 15:15 → CPH 哥本哈根 16:45｜SAS SK1594",
          "10/03 CPH 哥本哈根 06:20 → KEF 雷克雅未克 07:40｜SAS SK2595",
        ],
        icelandReturn: [
          "10/08 KEF 雷克雅未克 19:15 → 10/09 AMS 阿姆斯特丹 00:20｜HV6886",
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
        "10/03 15:10 到 KEF，是冰岛六人真正齐的开始点。10/10 早上离开冰岛回布鲁塞尔。",
      flights: {
        europeLongHaul: [
          "10/02 SZX 深圳宝安 T3 17:10 → PVG 上海 19:40｜海南航空 HU6205",
          "10/03 PVG 上海浦东 T2 02:10 → BRU 布鲁塞尔 08:10｜海南航空 HU7921",
          "10/11 BRU 布鲁塞尔 13:20 → 10/12 PEK 北京 05:00｜海南航空 HU492",
          "10/12 PEK 北京首都 T2 08:30 → SZX 深圳 11:50｜海南航空 HU7701",
        ],
        icelandOutbound: [
          "10/03 BRU 布鲁塞尔 13:50 → KEF 雷克雅未克 15:10｜冰岛航空 FI555",
        ],
        icelandReturn: [
          "10/10 KEF 雷克雅未克 07:35 → BRU 布鲁塞尔 12:55｜冰岛航空 FI554",
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
      summary: "看所有人的重合窗口、共同住宿、六人核心段和后续分流。",
      notes: ["适合发起人或临时查全局时使用。", "默认显示六人共同段，保留去年参考和完整时间轴。", "如果只想看自己的每天安排，切到下面任意组合。"],
      facts: [
        ["共同窗口", "10/03 15:10-10/06 08:00", "六个人真正一起在冰岛"],
        ["六人核心", "10/04-10/05", "南岸两日 + 蓝冰洞"],
        ["住宿动作", "取消/改订 10/04", "Fosshotel Lind 原订单要处理"],
      ],
      focusDays: [
        ["10/03", "六人会合 + 追极光", "Fosshotel Lind 会合，晚上报团。"],
        ["10/04", "南岸两日 Day 1", "08:15 Bus Stop 13 集合，08:30 出发。"],
        ["10/05", "蓝冰洞 Day 2", "晚上回雷克雅未克，建皇准备早班机。"],
        ["10/06+", "建皇离开，四人继续", "海港组 + 彤燕组补黄金圈/斯奈山/Reykjanes。"],
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
      summary: "9/26 三人辛特拉一日游，9/27 早上大巴去波尔图，9/28 经巴黎去冰岛；10/07 里斯本半日，10/08 哥本哈根转机一日游。",
      notes: ["重点看：9/26 辛特拉团、9/27 里斯本到波尔图大巴、9/28 波尔图飞巴黎转冰岛、10/04-10/05 六人南岸两日、10/07 里斯本半日、10/08 哥本哈根转机。", "10/05 晚回雷克雅未克后不要安排太晚，第二天 08:00 KEF 飞走。", "娘娘 9/28 早上直飞阿姆，后面不进入冰岛主线。"],
      facts: [
        ["到冰岛", "09/29 07:50", "你们最早到，可先玩提前段"],
        ["共同段", "10/04-10/05", "南岸两日 + 蓝冰洞"],
        ["离开冰岛", "10/06 08:00", "04:45-05:00 建议从酒店出发"],
        ["回国转机", "10/08 CPH", "哥本哈根轻量一日游"],
      ],
      focusDays: [
        ["09/26", "三人辛特拉一日游", "建皇 + 建建 + 娘娘，08:30 集合，18:00 回集合点。"],
        ["09/27", "早上大巴去波尔图", "里斯本到波尔图约 3.5 小时，下午玩波尔图。"],
        ["09/28", "波尔图飞巴黎转冰岛", "一早从 OPO 出发，经巴黎，最后去雷克雅未克。"],
        ["10/03", "Fosshotel Lind 会合", "下午等彤燕组到齐，晚上追极光。"],
        ["10/04", "08:15 集合", "Bus Stop 13，上南岸两日小巴。"],
        ["10/05", "蓝冰洞后回雷市", "晚上不要太晚，确认次日去 KEF 的车。"],
        ["10/06", "清晨去机场", "KEF 08:00 飞曼彻斯特。"],
        ["10/07", "里斯本半日 CityWalk", "回到里斯本后只做半日轻量城市步行。"],
        ["10/08", "哥本哈根转机一日游", "23:00 前一晚到 CPH，19:05 飞北京；白天只走市区轻量线。"],
      ],
      cta: "切到建皇",
    },
    {
      id: "haigang",
      name: "海港组",
      title: "我是海港组",
      groupId: "haigang",
      spotSegments: ["iceland-six", "four-after", "niangniang"],
      accent: "#F2994A",
      summary: "10/03 早到冰岛，10/04-10/05 六人南岸两日；10/08 晚飞阿姆，10/09 和娘娘汇合。",
      notes: ["重点看：10/03 酒店会合、六人南岸两日、10/06 后四人补线、10/08 KEF 飞 AMS。", "10/08 白天不要排太远，必须留还车、行李和值机时间。", "阿姆段只看你们和娘娘相关内容即可。"],
      facts: [
        ["到冰岛", "10/03 07:40", "先到酒店寄存/入住"],
        ["共同段", "10/04-10/05", "南岸两日 + 蓝冰洞"],
        ["离开冰岛", "10/08 19:15", "KEF 飞阿姆斯特丹"],
      ],
      focusDays: [
        ["10/03", "先到雷市", "去 Fosshotel Lind 放行李，晚上六人追极光。"],
        ["10/04", "08:15 集合", "Bus Stop 13，上南岸两日小巴。"],
        ["10/06", "四人继续", "建皇离开后，和彤燕组补线。"],
        ["10/08", "晚飞 AMS", "白天轻量，留足还车/值机。"],
        ["10/09", "阿姆汇合", "和娘娘本地玩一天。"],
      ],
      cta: "切到海港组",
    },
    {
      id: "tongyan",
      name: "彤燕组",
      title: "我是彤燕组",
      groupId: "tongyan",
      spotSegments: ["iceland-six", "four-after"],
      accent: "#27AE60",
      summary: "10/03 下午到 KEF 后六人齐；10/04-10/05 六人南岸两日，10/10 早上离开冰岛。",
      notes: ["重点看：10/03 抵达后会合、六人南岸两日、10/06 后四人补线、10/10 早班机。", "10/09 晚建议住机场交通稳定的位置，避免 10/10 早班机压力。", "阿姆斯特丹段与你们无关，默认弱化。"],
      facts: [
        ["到冰岛", "10/03 15:10", "你们到后六人正式齐"],
        ["共同段", "10/04-10/05", "南岸两日 + 蓝冰洞"],
        ["离开冰岛", "10/10 07:35", "前一晚住机场交通稳的位置"],
      ],
      focusDays: [
        ["10/03", "到 KEF 会合", "去 Fosshotel Lind，晚上追极光。"],
        ["10/04", "08:15 集合", "Bus Stop 13，上南岸两日小巴。"],
        ["10/06", "四人继续", "建皇离开后，和海港组补线。"],
        ["10/09", "离开前轻量", "不要跑远，优先机场交通稳定。"],
        ["10/10", "早班机", "07:35 KEF 飞布鲁塞尔。"],
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
      summary: "9/26 和建皇、建建一起走辛特拉一日游；9/28 早上从葡萄牙直飞阿姆，后面不进冰岛主线。",
      notes: ["重点看：9/26 辛特拉一日游、9/28 早上直飞阿姆、10/09 和海港组阿姆本地汇合。", "9/27 波尔图和 9/28 巴黎转机不是你的主线。", "冰岛住宿、南岸两日、机场转移默认不进入你的主视角。"],
      facts: [
        ["你的主线", "辛特拉 + 阿姆", "不去冰岛"],
        ["葡萄牙", "09/26", "三人辛特拉一日游"],
        ["去阿姆", "09/28 早上", "葡萄牙直飞阿姆斯特丹"],
      ],
      focusDays: [
        ["09/26", "辛特拉一日游", "08:30 集合，地狱之口、罗卡角、佩纳宫、辛特拉、雷加莱拉庄园。"],
        ["09/28", "早上直飞阿姆", "和建皇/建建分开；他们走波尔图-巴黎-冰岛。"],
        ["09/28-10/08", "阿姆上班", "冰岛段与你无关，默认不看。"],
        ["10/09", "阿姆汇合", "运河区、Museumplein、博物馆二选一、晚饭。"],
        ["10/10", "送海港回布鲁塞尔", "可一起坐火车或本地送行。"],
      ],
      cta: "切到娘娘",
    },
  ],
  overlap: {
    start: "2026-10-03T15:10:00",
    end: "2026-10-06T08:00:00",
    label: "冰岛六人都在：10/03 15:10 后 - 10/06 08:00 前",
    context:
      "这是唯一冰岛六人全部在的时间段。10/03 晚六个人报追极光团；10/04-10/05 六人一起走南岸两日 + 蓝冰洞小巴团，全程无人自驾；10/06 建皇 08:00 飞走。",
  },
  hotel: {
    name: "Fosshotel Lind",
    cnName: "林德城河酒店",
    address: "Rauðarárstígur 18, Reykjavík",
    dates: "保留 10/03 晚 + 10/05 晚；10/04 晚改住南岸团含住宿",
    checkin: "10/03 15:00 后入住；10/05 晚回雷市再入住/续住",
    checkout: "10/06 12:00 前退房",
    rooms: "3 间房 × 2 晚目标，原 3 晚订单需改",
    people: "三拨人六个人共同住宿",
    payment: "原订单已预付 ¥3169.83，需按改订结果更新",
    cancel: "酒店当地时间 2026-10-01 15:00 前可免费取消/调整，优先处理 10/04 晚",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Fosshotel%20Lind%20Raudararstigur%2018%20Reykjavik",
    notes: [
      "10/03 建皇和海港组先到，可先问前台寄存行李；彤燕组 15:10 落地后到酒店会合。",
      "10/04-10/05 南岸两日团接送点选 Fosshótel Lind 对应的 Bus Stop 13 (Rauðarárstígur)，以确认单最终写法为准。",
      "10/04 晚南岸两日团已含冰岛南部住宿和早餐；Fosshotel Lind 原 10/04 晚需要取消或改订，避免双付。",
      "建皇 10/06 08:00 KEF 起飞，建议 04:45-05:00 从酒店出发去机场；提前订机场巴士、包车或出租车。",
      "订单号和酒店确认号不放在公开分享页，需要时看预订截图。"
    ],
  },
  staySchedule: [
    {
      date: "10/03 + 10/05",
      nights: "2 晚目标",
      people: "冰岛六人",
      city: "雷克雅未克",
      name: "Fosshotel Lind（林德城河酒店）",
      status: "需改订",
      detail: "原订 10/03-10/06 三晚；因 10/04 晚南岸团含住宿，需取消/改订 10/04 晚，保留 10/03 和 10/05 雷市住宿。",
      audiences: ["jianhuang", "haigang", "tongyan"],
      accent: "#174e78",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Fosshotel%20Lind%20Raudararstigur%2018%20Reykjavik",
    },
    {
      date: "10/04",
      nights: "1 晚",
      people: "冰岛六人",
      city: "冰岛南部",
      name: "南岸两日团含住宿",
      status: "团含",
      detail: "Guide to Iceland 南岸两日 + 蓝冰洞团含南部住宿一晚和早餐；具体酒店可能是 Gerði Guesthouse / Hotel Smyrlabjörg 或同级替代，以确认单为准。",
      audiences: ["jianhuang", "haigang", "tongyan"],
      accent: "#2f6f7e",
    },
    {
      date: "09/28",
      nights: "1 晚",
      people: "建皇",
      city: "巴黎 / CDG 附近",
      name: "转机前夜住宿",
      status: "待补订单",
      detail: "09/29 06:00 从 CDG 飞 KEF，建议住 CDG 附近或机场交通稳定的位置。",
      audiences: ["jianhuang"],
      accent: "#2f80ed",
    },
    {
      date: "09/29-10/02",
      nights: "4 晚",
      people: "建皇",
      city: "雷克雅未克",
      name: "冰岛提前段住宿",
      status: "待补订单",
      detail: "建皇 09/29 早到冰岛，10/03 再换到六人共同酒店；建议仍住雷克雅未克市区。",
      audiences: ["jianhuang"],
      accent: "#2f80ed",
    },
    {
      date: "10/06-10/08",
      nights: "2 晚",
      people: "海港组 + 彤燕组",
      city: "冰岛四人后续段",
      name: "四人后续住宿",
      status: "待补订单",
      detail: "六人段已覆盖南岸和冰河湖，四人后续更适合补黄金圈、斯奈山或 Reykjanes / 蓝湖；10/08 海港 19:15 飞 AMS，最后一晚位置要方便回 KEF。",
      audiences: ["haigang", "tongyan"],
      accent: "#4ca88f",
    },
    {
      date: "10/08-10/10",
      nights: "2 晚",
      people: "海港组",
      city: "阿姆斯特丹",
      name: "海港组阿姆住宿",
      status: "待补订单",
      detail: "10/09 和娘娘阿姆本地汇合，10/10 坐火车回布鲁塞尔；建议住火车站 / 运河区交通方便处。",
      audiences: ["haigang", "niangniang"],
      accent: "#f2994a",
    },
    {
      date: "10/08-10/10",
      nights: "2 晚",
      people: "彤燕组",
      city: "雷克雅未克 / KEF 附近",
      name: "彤燕组离开前住宿",
      status: "待补订单",
      detail: "10/10 07:35 从 KEF 飞布鲁塞尔，10/09 晚建议住机场交通稳定的位置。",
      audiences: ["tongyan"],
      accent: "#27ae60",
    },
  ],
  recommendedPlan: [
    {
      date: "10/03 周六",
      title: "会合 + 六人追极光",
      status: "彤燕组 15:10 到 KEF 后，冰岛六人齐",
      plan: "六个人住 Fosshotel Lind；白天只做酒店会合、晚饭、超市补给；晚上六个人报一个追极光团。",
      avoid: "不要排黄金圈、斯奈山半岛、冰河湖这种长距离路线，晚上留体力；第二天 08:30 南岸团出发。",
      stay: "住 Fosshotel Lind；同时确认 10/04 南岸团接送点 Bus Stop 13 和行李限制。",
      audiences: ["jianhuang", "haigang", "tongyan"],
      accent: "#7bb8d8",
    },
    {
      date: "10/04 周日",
      title: "六人核心日 1",
      status: "南岸两日团 Day 1：雷克雅未克 08:30 出发",
      plan: "08:15 左右到 Fosshotel Lind 对应 Bus Stop 13 等车；小巴沿南岸走 Seljalandsfoss、Skógafoss、Reynisfjara 黑沙滩，继续向东到 Jökulsárlón 冰河湖一带。",
      avoid: "今天不要再排黄金圈或市区项目；只带 1 件手提行李，大件行李留在雷克雅未克寄存或酒店协调。",
      stay: "住南岸团含住宿（含早餐）；取消/改订 Fosshotel Lind 10/04 这一晚。",
      audiences: ["jianhuang", "haigang", "tongyan"],
      accent: "#2f6f7e",
    },
    {
      date: "10/05 周一",
      title: "六人核心日 2",
      status: "南岸两日团 Day 2：蓝冰洞 + 返回雷克雅未克",
      plan: "穿高帮防水登山鞋，导游发头盔和冰爪后坐超级吉普去瓦特纳冰川蓝冰洞；看当天最佳可进入冰洞、钻石沙滩/冰河湖，晚上回雷克雅未克。",
      avoid: "不要安排 10/05 晚从 KEF 离开的航班；回城可能受天气和路况影响。建皇 10/06 早班机需提前订清晨去 KEF 的车。",
      stay: "回雷克雅未克住 Fosshotel Lind；10/06 中午前退房。",
      audiences: ["jianhuang", "haigang", "tongyan"],
      accent: "#54a7c7",
    },
    {
      date: "10/06 周二",
      title: "建皇离开 / 四人继续",
      status: "建皇 08:00 从 KEF 飞走",
      plan: "建皇中午到曼彻斯特后进城短停：Piccadilly、Northern Quarter、国家足球博物馆 / 大教堂；海港组 + 彤燕组四个人开始包车继续冰岛路线。",
      avoid: "建皇 17:30 左右回到 MAN 机场更稳；四人包车也不要从机场直接冲太远，司机/向导路线要提前确认。",
      stay: "六人共同酒店今天退房；四人后续住宿待补订单。",
      audiences: ["jianhuang", "haigang", "tongyan"],
      accent: "#2f80ed",
    },
    {
      date: "10/07 周三",
      title: "四人包车继续",
      status: "海港组 + 彤燕组",
      plan: "六人段已经走南岸、冰河湖和蓝冰洞，四人后续建议补黄金圈、斯奈山半岛，或改 Reykjanes / 蓝湖轻量收尾，按天气、住宿和司机建议决定。",
      avoid: "10 月天气变化大，不要重复冲东南长线；10/08 海港晚航班必须留回程余量。",
      stay: "四人包车段住宿待补订单，建议按最终路线订。",
      audiences: ["haigang", "tongyan"],
      accent: "#4ca88f",
    },
    {
      date: "10/08 周四",
      title: "海港离开冰岛",
      status: "19:15 KEF → AMS",
      plan: "白天可做轻量安排，晚上飞阿姆斯特丹。",
      avoid: "注意还车、行李和 KEF 值机时间。",
      stay: "海港组阿姆住宿待补订单；彤燕组继续冰岛住宿待补订单。",
      audiences: ["haigang", "tongyan"],
      accent: "#f2994a",
    },
    {
      date: "10/09 周五",
      title: "海港组 + 娘娘阿姆斯特丹",
      status: "阿姆斯特丹本地玩 1 天",
      plan: "娘娘不去冰岛，但这天和海港组在阿姆斯特丹本地一起玩；彤燕组仍在冰岛。",
      avoid: "这天不是冰岛六人同游日。",
      stay: "海港组住阿姆待补订单；彤燕组 10/10 早班机前夜住宿待补订单。",
      audiences: ["haigang", "tongyan", "niangniang"],
      accent: "#f2994a",
    },
    {
      date: "10/10 周六",
      title: "回布鲁塞尔",
      status: "海港火车，彤燕飞机",
      plan: "海港从阿姆斯特丹坐火车回布鲁塞尔；彤燕 07:35 从 KEF 飞布鲁塞尔。",
      avoid: "两组可在布鲁塞尔重新汇合。",
      stay: "冰岛段结束；布鲁塞尔住宿如已订，后续可继续补进总表。",
      audiences: ["haigang", "tongyan", "niangniang"],
      accent: "#27ae60",
    },
  ],
  coreDays: [
    {
      date: "10/03 周六夜",
      title: "六人追极光团",
      route: "雷克雅未克会合 → 晚饭 / 超市补给 → 追极光团",
      why: "彤燕组 15:10 到 KEF 后，冰岛六人正式齐；第一晚不自驾追，直接报团更省心。",
      checkpoints: ["六人会合", "晚饭", "超市补给", "追极光团", "不要跑长线"],
      details: [
        ["15:10 后", "彤燕组落地 KEF，六个人正式齐；先到酒店放行李。"],
        ["晚饭前后", "确认第二天南岸团接送点：Fosshótel Lind 对应 Bus Stop 13 (Rauðarárstígur)。"],
        ["21:00-01:00", "追极光团按旅行社通知出发；第二天早出发，今晚别熬太满。"],
      ],
      sleep: "住 Fosshotel Lind，10/03 15:00 后入住；大件行李提前问前台能否寄存到 10/05 晚回雷市。",
      audiences: ["jianhuang", "haigang", "tongyan"],
      accent: "#7bb8d8",
    },
    {
      date: "10/04 周日",
      title: "南岸两日团 Day 1",
      route: "雷克雅未克 → Seljalandsfoss → Skógafoss → Reynisfjara → Jökulsárlón / 南部住宿",
      why: "把六个人共同段最值得远行的南岸、冰河湖和蓝冰洞集中在 10/04-10/05；小巴接送，不需要大家自驾和找路。",
      checkpoints: ["08:15 集合", "08:30 出发", "塞里雅兰瀑布", "斯科加瀑布", "雷尼斯黑沙滩", "冰河湖区域"],
      details: [
        ["08:15", "在 Bus Stop 13 (Rauðarárstígur) 集合；这是 Fosshótel Lind 对应接送点，最终以确认单为准。"],
        ["08:30", "雷克雅未克出发，小巴交通，司机/本地向导全程带队。"],
        ["上午", "看 Seljalandsfoss 塞里雅兰瀑布：天气和步道允许时可从瀑布后方看水帘。"],
        ["中午前后", "看 Skógafoss 斯科加瀑布：高崖落差大，水汽重，防水外套和防水鞋很重要。"],
        ["下午", "Reynisfjara 黑沙滩和 Reynisdrangar 玄武岩海蚀柱；远离海浪，注意 sneaker waves 暗浪警示。"],
        ["傍晚", "继续向东穿过火山沙原、熔岩地貌和冰川河区域，抵达 Jökulsárlón 冰河湖一带。"],
        ["晚上", "住旅行团安排的南部住宿，含早餐；远离光污染，天气好有机会看极光。"],
      ],
      sleep: "团含冰岛南部住宿 1 晚和早餐；需要取消/改订 Fosshotel Lind 10/04 晚。",
      audiences: ["jianhuang", "haigang", "tongyan"],
      accent: "#2f6f7e",
    },
    {
      date: "10/05 周一",
      title: "蓝冰洞 + 返回雷克雅未克",
      route: "南部住宿 → Vatnajökull 蓝冰洞 → Jökulsárlón / Diamond Beach → 雷克雅未克",
      why: "蓝冰洞是 10 月到 4 月的季节性重点项目，跟专业冰川向导进入更稳妥；晚上回雷克雅未克接上 10/06 建皇早班机。",
      checkpoints: ["高帮登山鞋", "头盔 + 冰爪", "超级吉普", "蓝冰洞至少约 30 分钟", "钻石沙滩", "晚回雷克雅未克"],
      details: [
        ["早餐后", "从南部住宿出发，带好相机、手套和防水外层；穿超过脚踝的结实登山鞋。"],
        ["白天", "导游提供头盔和冰爪，换乘超级吉普进入瓦特纳冰川可进入区域。"],
        ["冰洞体验", "向导按当天能见度和安全条件选择最佳蓝冰洞；在冰洞内看蓝色冰层、冰壁纹理和天然冰洞形态。"],
        ["冰河湖", "看 Jökulsárlón 冰河湖的浮冰、冰川边缘和低光环境；附近 Diamond Beach 可看被海浪推上海滩的透明冰块。"],
        ["返程", "小巴返回雷克雅未克，路上继续走南岸；天气和路况会影响抵达时间。"],
        ["晚上", "回 Fosshotel Lind 住 10/05 晚；建皇提前确认 10/06 04:45-05:00 去 KEF 的车。"],
      ],
      sleep: "住 Fosshotel Lind；10/06 中午前退房。",
      audiences: ["jianhuang", "haigang", "tongyan"],
      accent: "#54a7c7",
    },
    {
      date: "10/06-10/08",
      title: "四人后续补线",
      route: "建皇离开后：海港组 + 彤燕组四个人包车继续",
      why: "六人段已经覆盖南岸、冰河湖和蓝冰洞，四人后续更适合补黄金圈、斯奈山半岛、Reykjanes 或蓝湖，不再重复东南长线。",
      checkpoints: ["黄金圈候选", "斯奈山候选", "Reykjanes 备选", "蓝湖候选", "10/08 海港飞 AMS"],
      details: [
        ["10/06", "建皇离开后，四个人按天气和住宿决定补黄金圈或雷克雅未克周边轻量线。"],
        ["10/07", "若天气稳定可走斯奈山半岛；若风雪或雨大，改 Reykjanes / 蓝湖 / 市区。"],
        ["10/08", "海港 19:15 从 KEF 飞 AMS，当天必须留足还车、行李和值机时间。"],
      ],
      sleep: "四人后续住宿待补订单；最后一晚尽量方便回 KEF。",
      audiences: ["haigang", "tongyan"],
      accent: "#4ca88f",
    },
  ],
  personPlans: [
    {
      id: "jianhuang",
      name: "建皇",
      role: "建皇组合：9/26 和娘娘三人走辛特拉一日游，9/27 早上大巴去波尔图，9/28 从波尔图经巴黎去冰岛；10/06 曼彻斯特短停后回里斯本，10/07 半日 CityWalk，10/08 哥本哈根转机一日游。",
      color: "#2F80ED",
      days: [
        ["09/25", "北京 → 伦敦 → 里斯本", "晚上到里斯本，今天只做落地、入住、吃饭。"],
        ["09/26", "三人辛特拉一日游", "建皇组合 + 娘娘三个人报里斯本周边一日游：08:30 集合，地狱之口、罗卡角、佩纳宫、辛特拉小镇、雷加莱拉庄园，18:00 回集合点。"],
        ["09/27", "里斯本 → 波尔图", "早上坐约 3.5 小时大巴从里斯本到波尔图；下午玩 Ribeira 河岸、路易一世大桥、杜罗河边，晚上早点收行李。"],
        ["09/28", "波尔图 → 巴黎 → 冰岛", "一大早从波尔图出发，09:20 OPO 飞 BVA，巴黎中转后接 09/29 06:00 CDG → KEF；这天和娘娘分开，娘娘早上直飞阿姆。"],
        ["09/29", "清晨 CDG → 冰岛", "06:00 CDG 飞 KEF，07:50 到冰岛；Reykjanes 半岛、蓝湖或雷克雅未克补给，早点睡。"],
        ["09/30", "高地候选 1", "天气和路况允许时选 Landmannalaugar / Þórsmörk 专业 Super Jeep；10 月不自己开 F 路。"],
        ["10/01", "高地候选 2 / 备选线", "高地团不开就走 Reykjanes、蓝湖或雷克雅未克周边；黄金圈/斯奈山可以留给 10/06 后四人补线。"],
        ["10/02", "雷克雅未克慢日", "市区、Hallgrímskirkja、Harpa、超市补给，等朋友陆续到欧洲。"],
        ["10/03", "酒店会合 + 追极光团", "六个人住 Fosshotel Lind，15:00 后入住；下午彤燕组到后冰岛六人齐，晚上报追极光团。"],
        ["10/04", "六人南岸两日团 Day 1", "08:15 左右到 Bus Stop 13 集合，08:30 从雷克雅未克出发；看 Seljalandsfoss、Skógafoss、Reynisfjara 黑沙滩，晚上住团含南部住宿。"],
        ["10/05", "六人蓝冰洞 Day 2", "坐超级吉普去瓦特纳冰川蓝冰洞，看冰洞、Jökulsárlón 冰河湖和 Diamond Beach，晚上回 Fosshotel Lind；提前确认 10/06 清晨去 KEF 的车。"],
        ["10/06", "KEF → 曼彻斯特短停 → 里斯本", "建议 04:45-05:00 从 Fosshotel Lind 出发去 KEF；11:40 到 MAN T2，若入境顺利且无托运行李，12:45 左右坐火车到 Piccadilly；17:30 左右回到机场，20:05 MAN T3 飞 LIS。"],
        ["10/07", "里斯本半日 CityWalk", "回到里斯本后只做半日轻量城市步行，市区收尾、吃饭、买伴手礼。"],
        ["10/08", "哥本哈根转机一日游", "10/07 23:00 到 CPH，10/08 19:05 飞北京；白天走 Nyhavn、国王新广场、新港运河、Amalienborg / 小美人鱼轻量线，16:00 左右回机场更稳。"],
      ],
    },
    {
      id: "haigang",
      name: "海港组",
      role: "两个人：10/03 早到冰岛；10/06 建皇离开后，和彤燕组四个人包车；10/08 晚飞阿姆斯特丹。",
      color: "#F2994A",
      days: [
        ["10/01", "北京 → 上海", "跨天中转，核心是行李和休息。"],
        ["10/02", "上海 → 布鲁塞尔 → 哥本哈根", "到欧洲后继续转冰岛前夜。"],
        ["10/03", "哥本哈根 → KEF + 酒店会合", "07:40 到冰岛，先去 Fosshotel Lind 寄存行李 / 入住；下午等彤燕组，晚上六个人报追极光团。"],
        ["10/04", "六人南岸两日团 Day 1", "08:15 左右到 Bus Stop 13 集合，08:30 从雷克雅未克出发；看瀑布、黑沙滩，晚上住团含南部住宿。"],
        ["10/05", "六人蓝冰洞 Day 2", "看瓦特纳冰川蓝冰洞、Jökulsárlón 冰河湖和 Diamond Beach，晚上回 Fosshotel Lind。"],
        ["10/06", "四人包车开始", "建皇离开后，海港组 + 彤燕组四个人补黄金圈、雷克雅未克周边或 Reykjanes / 蓝湖轻量线；四人段住宿待补订单。"],
        ["10/07", "四人冰岛加玩", "天气稳定可走斯奈山半岛；天气差就走 Reykjanes / 蓝湖 / 市区备选；住宿按路线待补。"],
        ["10/08", "雷克雅未克 / 蓝湖 → AMS", "白天轻量，19:15 KEF 飞阿姆斯特丹；阿姆住宿待补订单。"],
        ["10/09", "阿姆斯特丹本地游", "和娘娘本地汇合：运河、市区、Rijksmuseum / Van Gogh Museum 二选一；阿姆住宿待补订单。"],
        ["10/10", "火车回布鲁塞尔", "娘娘可一起走阿姆 → 布鲁塞尔，或在阿姆本地送行；海港组坐火车回 BRU。"],
      ],
    },
    {
      id: "tongyan",
      name: "彤燕组",
      role: "两个人：10/03 下午到冰岛；10/06 建皇离开后，和海港组四个人包车；10/10 早上回布鲁塞尔。",
      color: "#27AE60",
      days: [
        ["10/02", "深圳 → 上海", "晚上到上海，准备跨天飞布鲁塞尔。"],
        ["10/03", "上海 → 布鲁塞尔 → KEF + 酒店会合", "15:10 到 KEF，去 Fosshotel Lind 和大家会合；晚上六个人报追极光团。"],
        ["10/04", "六人南岸两日团 Day 1", "08:15 左右到 Bus Stop 13 集合，08:30 从雷克雅未克出发；看瀑布、黑沙滩，晚上住团含南部住宿。"],
        ["10/05", "六人蓝冰洞 Day 2", "看瓦特纳冰川蓝冰洞、Jökulsárlón 冰河湖和 Diamond Beach，晚上回 Fosshotel Lind。"],
        ["10/06", "四人包车开始", "建皇离开后，和海港组一起补黄金圈、雷克雅未克周边或 Reykjanes / 蓝湖轻量线；四人段住宿待补订单。"],
        ["10/07", "四人冰岛加玩", "天气稳定可走斯奈山半岛；天气差就走 Reykjanes / 蓝湖 / 市区备选；住宿按路线待补。"],
        ["10/08", "海港离开后", "送海港去 KEF；自己留雷克雅未克、蓝湖或 Reykjanes；住宿待补订单。"],
        ["10/09", "离开前轻量日", "不要跑远，建议 Reykjanes、蓝湖、机场附近住宿；10/10 早班机前夜要优先订。"],
        ["10/10", "KEF → 布鲁塞尔", "07:35 飞布鲁塞尔，和海港布鲁塞尔段重新接上。"],
        ["10/11-10/12", "回国", "布鲁塞尔 → 北京 → 深圳。"],
      ],
    },
    {
      id: "niangniang",
      name: "娘娘",
      role: "住阿姆斯特丹，在审计公司要加班，不去冰岛；9/26 和建皇组合三人辛特拉一日游，9/28 早上直飞阿姆，海港组到阿姆后再本地汇合。",
      color: "#8E6AC8",
      days: [
        ["09/26", "三人辛特拉一日游", "和建皇组合一起报里斯本周边一日游：08:30 集合，地狱之口、罗卡角、佩纳宫、辛特拉小镇、雷加莱拉庄园，18:00 回集合点。"],
        ["09/28", "葡萄牙 → 阿姆斯特丹", "早上直飞阿姆斯特丹；从这天开始不跟建皇组合去波尔图/巴黎/冰岛。"],
        ["09/28-10/08", "阿姆上班", "娘娘不去冰岛，在审计公司要加班；冰岛段在页面里不算入人数。"],
        ["10/09", "阿姆斯特丹本地和海港组汇合", "运河区、Museumplein、Rijksmuseum / Van Gogh Museum 二选一、晚饭。"],
        ["10/10", "送海港回布鲁塞尔", "可一起走阿姆 → 布鲁塞尔火车，或在阿姆本地送行。"],
      ],
    },
  ],
  spotCategories: [
    ["iceland-six", "冰岛六人"],
    ["jianhuang-spots", "建皇专属"],
    ["four-after", "四人后续"],
    ["niangniang", "娘娘相关"],
    ["all", "全部"],
  ],
  spots: [
    {
      id: "sintra-day-tour",
      category: "portugal",
      segments: ["jianhuang-spots", "niangniang"],
      participant: "建皇组合 + 娘娘（三人）",
      transport: "飞猪一日游小团 / 旅行社车；08:30 集合点出发",
      date: "09/26",
      city: "里斯本周边",
      title: "辛特拉 + 罗卡角一日游",
      image: "assets/spots/sintra-pena.jpg",
      images: ["assets/spots/sintra-pena.jpg", "assets/spots/gallery/cabo-da-roca.jpg"],
      bestTime: "08:30-18:00",
      open: "按旅行社确认单为准；截图行程为 08:30 集合，18:00 回到集合点。",
      sunset: "里斯本 09/26 日落约 19:28",
      viewpoint: "罗卡角看欧洲大陆西端海岸线；佩纳宫看彩色宫殿和辛特拉山景；雷加莱拉庄园看花园和井。",
      notes: [
        "截图行程：09:30 地狱之口，10:30 罗卡角，12:00 佩纳宫，14:00 辛特拉小镇，15:00 雷加莱拉庄园，17:00 返程。",
        "这是建皇组合 + 娘娘三个人的葡萄牙共同日。",
        "佩纳宫和雷加莱拉庄园步行不少，穿舒服鞋；当天不要再叠加里斯本市区重行程。",
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
      image: "assets/spots/belem.jpg",
      images: ["assets/spots/belem.jpg", "assets/spots/gallery/belem-1.jpg", "assets/spots/gallery/belem-2.jpg"],
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
      transport: "09/27 早上里斯本 → 波尔图大巴约 3.5 小时；本地步行 / 打车",
      date: "09/27",
      city: "波尔图",
      title: "路易一世大桥 + Ribeira",
      image: "assets/spots/porto.jpg",
      images: ["assets/spots/porto.jpg", "assets/spots/gallery/porto-1.jpg"],
      bestTime: "17:00-19:45",
      open: "桥梁和河岸全天可看；酒窖参观需看各酒庄预约。",
      sunset: "波尔图 09/27 日落约 19:24",
      viewpoint: "Jardim do Morro / Serra do Pilar，看大桥、老城和杜罗河日落。",
      notes: ["早上从里斯本坐约 3.5 小时大巴到波尔图。", "下午只抓 Ribeira、路易一世大桥、杜罗河边这些高性价比区域。", "第二天 09/28 一大早飞巴黎，晚上别喝太晚。"],
    },
    {
      id: "paris-cruise",
      category: "paris",
      segments: ["jianhuang-spots"],
      participant: "建皇",
      transport: "巴黎转机短停：机场巴士 / RER / 打车组合，先存包",
      date: "09/28",
      city: "巴黎",
      title: "日落塞纳河游船",
      image: "assets/spots/paris-cruise.jpg",
      images: ["assets/spots/paris-cruise.jpg", "assets/spots/gallery/paris-cruise-1.jpg"],
      bestTime: "18:30-19:45",
      open: "Bateaux Mouches 当前高季 10:00-22:00，每 30 分钟一班，船程约 1 小时。",
      sunset: "巴黎 09/28 日落约 19:37",
      viewpoint: "优先坐露天上层右侧，接近 Eiffel Tower 和 Alexandre III 时最好拍。",
      notes: ["BVA 到巴黎市区时间长，先存包再去游船。", "18:30-19:00 上船最适合吃到日落光。", "游船结束立刻去 Trocadéro，不要临时加卢浮宫。"],
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
      image: "assets/spots/eiffel.jpg",
      images: ["assets/spots/eiffel.jpg", "assets/spots/gallery/eiffel-1.jpg", "assets/spots/gallery/eiffel-2.jpg", "assets/spots/gallery/eiffel-3.jpg"],
      bestTime: "19:50-20:10",
      open: "官方说明：铁塔夜幕后亮灯，整点开始闪灯 5 分钟，持续到闭塔。",
      sunset: "巴黎 09/28 日落约 19:37；20:00 大概率是第一场好看的整点闪灯。",
      viewpoint: "Trocadéro 平台第一选择；人多就退到 Pont d'Iéna 桥侧。",
      notes: ["夜间灯光有版权限制，自己朋友圈一般没问题，商业发布要注意。", "20:10 后马上去 CDG 附近休息，第二天 06:00 飞冰岛。", "地铁/打车预留堵车和安检时间。"],
    },
    {
      id: "landmannalaugar",
      category: "iceland",
      segments: ["jianhuang-spots"],
      participant: "建皇提前到冰岛可选",
      transport: "只报专业高地团 / Super Jeep；无人自驾，不自己开 F 路",
      date: "09/30-10/01",
      city: "冰岛高地",
      title: "Landmannalaugar / 高地候选",
      image: "assets/spots/landmannalaugar.jpg",
      images: ["assets/spots/landmannalaugar.jpg"],
      bestTime: "白天，按团出发",
      open: "高地 F 路季节性关闭，9 月底/10 月初不写死开放；以 road.is / safetravel.is 和专业团通知为准。",
      sunset: "雷克雅未克 09/29 日落约 19:05，10/03 日落约 18:51",
      viewpoint: "彩色山徒步短线 / 温泉区视野；天气差则取消。",
      notes: ["建皇提前到冰岛才考虑。", "10 月不自驾 F 路，只能看专业团是否发团。", "备选：Reykjanes、蓝湖、雷克雅未克市区；黄金圈和斯奈山可留给 10/06 后四人补线。"],
    },
    {
      id: "aurora",
      category: "iceland",
      segments: ["iceland-six"],
      participant: "冰岛六人",
      transport: "六个人报追极光团；无人自驾",
      date: "10/03 夜",
      city: "雷克雅未克",
      title: "六人追极光团",
      image: "assets/spots/aurora.jpg",
      images: ["assets/spots/aurora.jpg"],
      bestTime: "21:00-01:00",
      open: "极光无固定开放时间；看云量、太阳活动和旅行社当晚通知。",
      sunset: "雷克雅未克 10/03 日落约 18:51，天黑后才适合追。",
      viewpoint: "跟团去城市光害外，自己不要夜间乱开陌生路。",
      notes: ["六个人第一晚报团，不自驾追极光。", "穿防风、防水、保暖鞋，带热饮。", "若取消，很多团可改期，订票时确认政策。"],
    },
    {
      id: "south-coast-two-day",
      category: "iceland",
      segments: ["iceland-six"],
      participant: "冰岛六人",
      transport: "两日小巴团；雷克雅未克接送；蓝冰洞段换乘超级吉普",
      date: "10/04-10/05",
      city: "冰岛南岸",
      title: "南岸两日 + 蓝冰洞",
      image: "assets/spots/reynisfjara.jpg",
      images: ["assets/spots/reynisfjara.jpg", "assets/spots/gallery/reynisfjara-seljalandsfoss.jpg", "assets/spots/gallery/reynisfjara-skogafoss.jpg", "assets/spots/gallery/reynisfjara-dyrholaey.jpg", "assets/spots/jokulsarlon.jpg"],
      bestTime: "10/04 08:15 集合；10/05 晚回雷克雅未克",
      open: "Guide to Iceland 团：10 月-4 月运营；08:30 从 Reykjavík 出发；含南部住宿、早餐、蓝冰洞和雷克雅未克接送。",
      sunset: "雷克雅未克 10/04 日落约 18:47，10/05 约 18:44",
      viewpoint: "Seljalandsfoss 瀑布后方、Skógafoss 正面水雾、Reynisfjara 玄武岩柱、Jökulsárlón 湖边和 Diamond Beach。",
      notes: ["接送点选 Fosshótel Lind 对应 Bus Stop 13，最终以确认单为准。", "只允许携带 1 件手提行李，大件行李要寄存在雷克雅未克。", "黑沙滩不要靠近浪线；蓝冰洞必须听冰川向导指挥。"],
    },
    {
      id: "golden-circle",
      category: "iceland",
      segments: ["four-after"],
      participant: "海港组 + 彤燕组四人候选",
      transport: "四人包车 / 当地团，不自驾",
      date: "10/06-10/08 候选",
      city: "黄金圈",
      title: "Þingvellir + Geysir + Gullfoss + Kerið",
      image: "assets/spots/gullfoss.jpg",
      images: ["assets/spots/gullfoss.jpg", "assets/spots/gallery/gullfoss-strokkur.jpg", "assets/spots/gallery/gullfoss-thingvellir.jpg"],
      bestTime: "09:00-18:30",
      open: "多数自然景点户外可看；停车场、游客中心和 Kerið 收费/开放时间以当天公告为准。",
      sunset: "雷克雅未克 10/04 日落约 18:47",
      viewpoint: "Gullfoss 上层观景台和 Kerið 火山口边缘适合收尾光线。",
      notes: ["10/04-10/05 已改南岸两日团，黄金圈顺延为四人后续候选。", "Strokkur 喷泉别站在下风口太久。", "10 月路面可能湿滑，所有人穿防水鞋。"],
    },
    {
      id: "snaefellsnes",
      category: "iceland",
      segments: ["four-after"],
      participant: "海港组 + 彤燕组四人候选",
      transport: "四人包车 / 当地团，不自驾",
      date: "10/06-10/08 候选",
      city: "斯奈山半岛",
      title: "Kirkjufell + 黑教堂 + 海岸线",
      image: "assets/spots/snaefellsnes.jpg",
      images: ["assets/spots/snaefellsnes.jpg"],
      bestTime: "08:00-19:00",
      open: "多数自然景点户外可看；10 月风大路滑，按司机和 road.is 当天情况调整停留。",
      sunset: "雷克雅未克 10/05 日落约 18:44",
      viewpoint: "Kirkjufellsfoss 看 Kirkjufell 教会山；Arnarstapi 海岸线适合短走和拍海蚀柱。",
      notes: ["10/04-10/05 已改南岸两日团，斯奈山顺延为四人后续候选。", "车程较长，午餐、厕所和加油点让司机提前规划。", "若 10/07 天气差，宁愿改 Reykjanes / 蓝湖轻量线。"],
    },
    {
      id: "jokulsarlon",
      category: "iceland",
      segments: ["iceland-six"],
      participant: "冰岛六人",
      transport: "南岸两日小巴团，不自驾",
      date: "10/04-10/05",
      city: "东南冰岛",
      title: "Jökulsárlón 冰河湖 / 钻石沙滩",
      image: "assets/spots/jokulsarlon.jpg",
      images: ["assets/spots/jokulsarlon.jpg"],
      bestTime: "白天",
      open: "南岸两日团会到冰河湖和钻石沙滩；蓝冰洞是否进入哪一处，以当天安全条件和向导安排为准。",
      sunset: "雷克雅未克 10/04 日落约 18:47，10/05 约 18:44",
      viewpoint: "Jökulsárlón 湖边和 Diamond Beach 适合低角度光线。",
      notes: ["这是 10/04-10/05 六人两日团的核心亮点。", "冰河湖看漂浮冰山，钻石沙滩看被海浪推上黑沙滩的冰块。", "风大、浪大、冰面滑，拍照不要越过安全线。"],
    },
    {
      id: "manchester",
      category: "manchester",
      segments: ["jianhuang-spots"],
      participant: "建皇",
      transport: "曼彻斯特转机短停：机场火车 / 步行，不租车",
      date: "10/06",
      city: "曼彻斯特",
      title: "Piccadilly + Northern Quarter + 国家足球博物馆",
      image: "assets/spots/manchester.jpg",
      images: ["assets/spots/manchester.jpg"],
      bestTime: "12:45-17:00",
      open: "National Football Museum 当前常规 10:00-17:00；机场到 Piccadilly 火车约 20 分钟。",
      sunset: "曼彻斯特 10/06 日落约 18:35",
      viewpoint: "Manchester Cathedral / Exchange Square 轻量收尾，别跑太远。",
      notes: ["建皇无托运行李才适合进城。", "17:30 左右回到 MAN 机场更稳。", "若入境排队久，改机场吃饭休息。"],
    },
    {
      id: "copenhagen-layover",
      category: "copenhagen",
      segments: ["jianhuang-spots"],
      participant: "建皇组合",
      transport: "CPH 机场火车 / 地铁进城；轻量步行，不租车",
      date: "10/08",
      city: "哥本哈根",
      title: "哥本哈根转机一日游",
      image: "assets/spots/copenhagen.jpg",
      images: ["assets/spots/copenhagen.jpg"],
      bestTime: "10:00-16:00",
      open: "10/07 23:00 到 CPH，10/08 19:05 CPH 飞北京；按机场行李、安检和值机情况动态压缩。",
      sunset: "哥本哈根 10/08 日落约 18:20",
      viewpoint: "Nyhavn 新港彩色房子、Kongens Nytorv、Amalienborg 王宫广场；有余力再去小美人鱼。",
      notes: [
        "建议 09:30-10:00 进城，先走 Nyhavn / 国王新广场 / 王宫广场。",
        "午餐放新港或 Torvehallerne 附近，别排太远的餐厅。",
        "16:00 左右回 CPH 机场更稳；若有托运行李或值机压力，删掉小美人鱼。",
      ],
    },
    {
      id: "amsterdam",
      category: "amsterdam",
      segments: ["niangniang"],
      participant: "海港组 + 娘娘",
      transport: "阿姆斯特丹本地步行 / 电车 / 地铁；10/10 海港组火车回布鲁塞尔",
      date: "10/09",
      city: "阿姆斯特丹",
      title: "运河 + Museumplein",
      image: "assets/spots/amsterdam.jpg",
      images: ["assets/spots/amsterdam.jpg"],
      bestTime: "10:30-20:00",
      open: "Rijksmuseum 当前常规 09:00-17:00；Van Gogh Museum 需预约时段，以官网为准。",
      sunset: "阿姆斯特丹 10/09 日落约 19:00",
      viewpoint: "Magere Brug / Herengracht 运河桥，日落后蓝调时刻很好看。",
      notes: ["娘娘和海港组在阿姆本地汇合。", "博物馆二选一，不要一天塞两个大馆。", "10/10 火车回布鲁塞尔，前一晚别太晚。"],
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
      "今年 10/04-10/05 已把南岸两日 + 蓝冰洞放进六人共同段，去年这条路线的拆法可直接参考。",
      "去年南岸两日团花销最高，但它覆盖瀑布、黑沙滩、冰河湖、蓝冰洞和一晚住宿，信息密度也最高。",
      "黄金圈和斯奈山今年不再占 10/04-10/05，可留给 10/06 后四人按天气补线。",
      "机场交通、超市补给、防风防水装备是去年攻略里最有复用价值的部分。",
    ],
    itinerary: [
      { date: "10/01", title: "抵达奥斯陆", transport: "杭州 → 迪拜 → 奥斯陆", focus: "Tim Wendelboe 咖啡、蒙克美术馆", stay: "", note: "提前 48 小时免费办理值机手续" },
      { date: "10/02", title: "抵达雷克雅未克", transport: "奥斯陆 → KEF；Flybus / 55 路进城", focus: "落地、进城、补给", stay: "", note: "Flybus 班次多；55 路便宜但班次少" },
      { date: "10/03", title: "黄金圈一日游", transport: "跟团车", focus: "BusTravel / Reykjavík Excursions 可订黄金圈", stay: "", note: "经典路线，景点固定，适合大巴团或包车" },
      { date: "10/04", title: "南岸两日游 Day 1", transport: "Troll 跟团车", focus: "塞里雅兰瀑布、斯科加瀑布、冰洞 / 冰川徒步", stay: "团含住宿", note: "去年表里写约 ¥4,732/人，含早餐和住宿" },
      { date: "10/05", title: "南岸两日游 Day 2", transport: "Troll 跟团车", focus: "黑沙滩，返回雷克雅未克", stay: "", note: "南岸两日适合拆开，不建议硬塞成一日" },
      { date: "10/06", title: "斯奈山半岛一日游", transport: "Troll 跟团车", focus: "8:00-20:00，行程很满", stay: "", note: "今年可作为 10/06 后四人补线参考，要预留体力" },
      { date: "10/07", title: "雷克雅未克 → 阿克雷里", transport: "国内航班 11:05-11:50", focus: "13:00 观鲸团", stay: "", note: "适合想加北部玩法的人参考" },
      { date: "10/08", title: "米湖温泉 + 众神瀑布", transport: "跟团车；晚间回雷克雅未克", focus: "The Traveling Viking 米湖经典一日团", stay: "", note: "表内写 9:00-15:00，晚班交通回雷市" },
      { date: "10/09", title: "雷克雅未克 → 奥斯陆", transport: "KEF → 奥斯陆；Vy 火车进城", focus: "奥斯陆王宫、艺术博物馆", stay: "The Thief", note: "购买 48h Oslo Pass" },
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
const personPanelEl = document.querySelector("#personPanel");
const spotFiltersEl = document.querySelector("#spotFilters");
const spotGridEl = document.querySelector("#spotGrid");
const mobileTimelineEl = document.querySelector("#mobileTimelineList");
const tooltipEl = document.querySelector("#tooltip");
const referenceTabIds = ["route", "cost", "tips", "packing"];
let referenceExpanded = false;
const roleIds = data.roleViews.map((role) => role.id);
const queryRole = new URLSearchParams(window.location.search).get("role");
const hashRole = window.location.hash.replace("#", "");
const roleParam = queryRole || hashRole;
let activeRoleId = roleIds.includes(roleParam) ? roleParam : "all";
if (!roleIds.includes(activeRoleId)) activeRoleId = "all";
const shouldNormalizeRoleUrl = roleIds.includes(queryRole || "");

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

function getRole(roleId = activeRoleId) {
  return data.roleViews.find((role) => role.id === roleId) || data.roleViews[0];
}

function isForRole(item, roleId = activeRoleId) {
  return roleId === "all" || !item.audiences || item.audiences.includes(roleId);
}

function updateRoleUrl(roleId) {
  const url = new URL(window.location.href);
  url.searchParams.delete("role");
  url.searchParams.delete("v");
  if (roleId === "all") {
    url.hash = "";
  } else {
    url.hash = roleId;
  }
  window.history.replaceState({}, "", url);
}

function setWindowPosition(el, start, end) {
  const left = percentAt(start);
  const right = percentAt(end);
  el.style.left = `${left}%`;
  el.style.width = `${Math.max(right - left, 1.2)}%`;
}

function renderRoleChooser(roleId = activeRoleId) {
  roleChooserEl.innerHTML = `
    <div class="role-cards" aria-label="选择角色">
      ${data.roleViews
        .map(
          (role) => `
            <button
              class="role-card ${role.id === roleId ? "is-active" : ""}"
              type="button"
              data-role="${role.id}"
              style="--accent:${role.accent}"
              aria-pressed="${role.id === roleId}"
            >
              <span>${role.title}</span>
              <strong>${role.name}</strong>
            </button>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderRoleDashboard(roleId = activeRoleId) {
  const role = getRole(roleId);
  const showGlobalButton = roleId !== "all";
  roleDashboardEl.innerHTML = `
    <div class="dashboard-head" style="--accent:${role.accent}">
      <div>
        <span>我的重点</span>
        <h2>${role.name}</h2>
        <p>${role.summary}</p>
      </div>
      <div class="dashboard-actions">
        ${showGlobalButton ? `<button type="button" data-role="all">看总览</button>` : ""}
        <a href="#core">看细节</a>
      </div>
    </div>
    <div class="dashboard-facts">
      ${role.facts
        .map(
          ([label, value, note]) => `
            <article>
              <span>${label}</span>
              <strong>${value}</strong>
              <p>${note}</p>
            </article>
          `,
        )
        .join("")}
    </div>
    <div class="dashboard-plan">
      <div class="dashboard-plan__title">
        <span>只看这几天</span>
        <strong>${roleId === "all" ? "全局关键节点" : "你的关键节点"}</strong>
      </div>
      <div class="dashboard-days">
        ${role.focusDays
          .map(
            ([date, title, detail]) => `
              <article>
                <time>${date}</time>
                <div>
                  <strong>${title}</strong>
                  <p>${detail}</p>
                </div>
              </article>
            `,
          )
          .join("")}
      </div>
    </div>
    <div class="dashboard-next">
      <a href="#hotel">住宿</a>
      <a href="#spots">景点</a>
      <a href="#flights">交通</a>
      ${showGlobalButton ? `<button type="button" data-role="all">进入完整总览</button>` : `<a href="#timeline">完整时间轴</a>`}
    </div>
  `;
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
    .join("") || `<p class="empty-state">这个视角不需要看冰岛六人核心段；如要统筹全部内容，请切回“总览”。</p>`;
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
        <span class="hotel-badge">六人共同基地</span>
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
        <button class="spot-filter ${id === active ? "is-active" : ""}" type="button" data-spot-filter="${id}" onclick="window.applySpotFilter('${id}')">
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
    ["route", "路线复盘"],
    ["cost", "费用参考"],
    ["tips", "经验 Tips"],
    ["packing", "行李清单"],
  ];

  referenceExpanded = expanded;

  if (!expanded) {
    referenceGuideEl.innerHTML = `
      <div class="reference-collapsed">
        <div>
          <span>轻量参考</span>
          <strong>去年路线、LJ 单人费用样本、Tips 和行李清单已整理好</strong>
          <p>默认先不占页面篇幅；需要复盘去年朋友路线或查费用样本时再展开。</p>
        </div>
        <div class="reference-collapsed__chips">
          <span>10/01-10/12</span>
          <span>5 个当地团</span>
          <span>LJ 样本 ¥35,663</span>
          <span>25 项行李</span>
        </div>
        <button class="reference-expand" type="button" data-reference-expand="route">展开去年参考</button>
      </div>
    `;
    return;
  }

  referenceGuideEl.innerHTML = `
    <div class="reference-full-head">
      <span>已展开</span>
      <button class="reference-collapse" type="button" data-reference-collapse>收起去年参考</button>
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
            <button class="reference-tab ${id === active ? "is-active" : ""}" type="button" data-reference-tab="${id}">
              ${label}
            </button>
          `,
        )
        .join("")}
    </div>
    <div class="reference-view">
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
        <p>LJ 列 10/04-10/05 南岸两日团金额；可作为今年六人两日团的典型参考项。</p>
      </article>
      <article>
        <span>后续候选参考</span>
        <strong>斯奈山 ¥956</strong>
        <p>LJ 列 10/06 斯奈山半岛一日团金额；今年可作为四人后续补线参考。</p>
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
      (spot) => `
        <article class="spot-card">
          <div class="spot-gallery" aria-label="${spot.title}真实照片">
            ${(spot.images || [spot.image])
              .map(
                (image, index, arr) => `
                  <figure class="spot-card__image">
                    <img src="${image}" alt="${spot.title}真实照片 ${index + 1}" loading="lazy" />
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

function renderPersonPanel(personId = data.personPlans[0].id) {
  const person = data.personPlans.find((item) => item.id === personId) || data.personPlans[0];
  personPanelEl.innerHTML = `
    <div class="person-panel__head" style="--accent:${person.color}">
      <span>当前个人视角</span>
      <h3>${person.name}</h3>
      <p>${person.role}</p>
    </div>
    <div class="person-days">
      ${person.days
        .map(
          ([date, title, detail]) => `
            <article class="person-day">
              <time>${date}</time>
              <strong>${title}</strong>
              <p>${detail}</p>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
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
    <h3>全部三组</h3>
    <p>先看三条时间条的交集：10/03 下午冰岛六人齐，10/03 晚追极光团，10/04-10/05 六人南岸两日 + 蓝冰洞小巴团，全程无人自驾，10/06 建皇早班机离开。</p>
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
  activeRoleId = roleIds.includes(roleId) ? roleId : "all";
  const role = getRole(activeRoleId);

  document.body.dataset.role = activeRoleId;
  if (persist) {
    updateRoleUrl(activeRoleId);
  }

  renderRoleChooser(activeRoleId);
  renderRoleDashboard(activeRoleId);
  renderCoreDays(activeRoleId);
  renderStayList(activeRoleId);
  renderDays(activeRoleId);
  renderFlights(activeRoleId);

  if (activeRoleId === "all") {
    renderSpotFilters("iceland-six");
    renderSpots("iceland-six");
    renderPersonTabs();
    renderPersonPanel();
    applyFilter("all");
    return;
  }

  renderSpotFilters("__role");
  renderSpots(`role:${activeRoleId}`);
  renderPersonTabs(activeRoleId);
  renderPersonPanel(activeRoleId);
  applyFilter(role.groupId || "all");
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
applyRoleView(activeRoleId, { persist: shouldNormalizeRoleUrl });

roleChooserEl.addEventListener("click", (event) => {
  const button = event.target.closest("[data-role]");
  if (!button) return;
  applyRoleView(button.dataset.role);
});

roleDashboardEl.addEventListener("click", (event) => {
  const button = event.target.closest("[data-role]");
  if (!button) return;
  applyRoleView(button.dataset.role);
  document.querySelector("#roleGate")?.scrollIntoView({ behavior: "smooth", block: "start" });
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
    return;
  }

  const collapseButton = event.target.closest("[data-reference-collapse]");
  if (collapseButton) {
    renderReferenceGuide("route", false);
    return;
  }

  const tabButton = event.target.closest("[data-reference-tab]");
  if (!tabButton) return;
  renderReferenceGuide(tabButton.dataset.referenceTab, true);
});
