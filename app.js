const students = [
  ["丁骏凡", "ENTP", "企业雇员", "教师"],
  ["位雅琪", "INFP", "企业雇员", "企业雇员"],
  ["刘悦璇", "ENFJ", "医生", "企业雇员"],
  ["刘轩毓", "ESFJ", "教师", "企业雇员"],
  ["吴秋伊", "ESTJ", "教师", "企业雇员"],
  ["常一铭", "ESFP", "企业雇员", "企业雇员"],
  ["张冰柠", "ESFP", "企业雇员", "企业雇员"],
  ["张冰珂", "INFP", "企业雇员", "企业雇员"],
  ["张天语", "ENFJ", "企业雇员", "自由职业"],
  ["弭云曦", "ENFJ", "企业雇员", "企业雇员"],
  ["支广菲", "ISTP", "企业雇员", "企业雇员"],
  ["曹芊蕴", "INFJ", "教师", "企业雇员"],
  ["朱俊宇", "ISTJ", "企业雇员", "医生"],
  ["李亦靳", "ESFJ", "企业雇员", "教师"],
  ["李和展", "ESTJ", "教师", "教师"],
  ["李天瑞", "ESFP", "企业雇员", "企业雇员"],
  ["李海源", "ESFP", "企业雇员", "自由职业"],
  ["杨博文", "ISTP", "企业雇员", "医生"],
  ["欧若熙", "INFJ", "企业雇员", "公务员"],
  ["王姿艺", "ISTJ", "教师", "教师"],
  ["王怡可", "ESFP", "自由职业", "自由职业"],
  ["田嘉齐", "ESFP", "企业雇员", "企业雇员"],
  ["祁鑫呈", "ISTP", "企业雇员", "企业雇员"],
  ["耿浩茗", "ESFP", "企业雇员", "企业雇员"],
  ["胡铎曦", "INFP", "企业雇员", "企业雇员"],
  ["贺峻茂", "ENFJ", "教师", "教师"],
  ["赵子涵", "ESFP", "企业雇员", "企业雇员"],
  ["陈茹艺", "ISTP", "企业雇员", "企业雇员"],
  ["韩心仪", "ESFP", "军人", "教师"],
  ["黄芃博", "INFP", "企业雇员", "自由职业"],
  ["黄子淳", "ENFJ", "企业雇员", "企业雇员"],
];

const virtues = [
  { key: "de", name: "德育", color: "#d75f50", scene: "内核" },
  { key: "zhi", name: "智育", color: "#8d6ccf", scene: "科技" },
  { key: "ti", name: "体育", color: "#4f92b8", scene: "水源" },
  { key: "mei", name: "美育", color: "#d8a236", scene: "花火" },
  { key: "lao", name: "劳育", color: "#4d9a66", scene: "森林" },
];

const lightVirtues = virtues.filter((virtue) => virtue.key !== "de");
const ORBIT_PLANE_Y_SCALE = 0.24;
const ORBIT_PLANE_ROTATION = -0.08;

const parentMap = {
  企业雇员: { virtue: "劳育", color: "#4d9a66" },
  军人: { virtue: "德育", color: "#d75f50" },
  教师: { virtue: "智育", color: "#8d6ccf" },
  医生: { virtue: "智育", color: "#8d6ccf" },
  自由职业: { virtue: "体育", color: "#4f92b8" },
  公务员: { virtue: "美育", color: "#d8a236" },
};

const semesterActivities = [
  {
    name: "一年级上 2021秋",
    activities: [
      activity("9月", "入学适应与班规共建班会", { de: 10, lao: 10 }),
      activity("10月", "山东师大附属小学经典诵读启蒙", { zhi: 10, mei: 10 }),
      activity("11月", "整理书包和课桌劳动打卡", { lao: 20 }),
      activity("12月", "我的校园我的家主题分享", { de: 10, mei: 10 }),
    ],
  },
  {
    name: "一年级下 2022春",
    activities: [
      activity("3月", "春日阅读小队与亲子共读", { zhi: 10, mei: 10 }),
      activity("4月30日", "山东师大附属小学运动会", { ti: 20, de: 10 }),
      activity("5月", "向劳动者致敬实践活动", { lao: 20, de: 10 }),
      activity("6月", "童声合唱与节奏展示", { mei: 20 }),
    ],
  },
  {
    name: "二年级上 2022秋",
    activities: [
      activity("9月", "大国崛起主题班会", { de: 20, zhi: 10 }),
      activity("10月", "向老一辈革命先烈致敬", { de: 20 }),
      activity("11月", "汉字之美与古典文学讲座", { zhi: 20, mei: 10 }),
      activity("12月", "家庭文学基础素养交流", { zhi: 10, de: 10 }),
    ],
  },
  {
    name: "二年级下 2023春",
    activities: [
      activity("3月", "梦想不可辜负主题班会", { de: 10, zhi: 10 }),
      activity("4月30日", "山东师大附属小学运动会", { ti: 20, de: 10 }),
      activity("5月", "我的梦想我的国交流会", { de: 20, mei: 10 }),
      activity("6月", "我的偶像主题班会", { de: 10, zhi: 10 }),
    ],
  },
  {
    name: "三年级上 2023秋",
    activities: [
      activity("9月", "共同创造我们的未来班会", { de: 10, zhi: 10 }),
      activity("10月", "校园植物观察与护绿劳动", { lao: 20, mei: 10 }),
      activity("11月", "跳绳挑战与课间陪跑", { ti: 20 }),
      activity("12月", "家校共育成长交流会", { de: 10, lao: 10 }),
    ],
  },
  {
    name: "三年级下 2024春",
    activities: [
      activity("3月", "雷锋精神与身边好事记录", { de: 20, lao: 10 }),
      activity("4月30日", "山东师大附属小学运动会", { ti: 20, de: 10 }),
      activity("5月", "艺术节手指操展示", { mei: 20, ti: 10 }),
      activity("6月", "班级合唱比赛", { mei: 20, de: 10 }),
    ],
  },
  {
    name: "四年级上 2024秋",
    activities: [
      activity("9月", "全市优秀班集体经验整理", { de: 10, lao: 10 }),
      activity("10月", "古诗词星空朗读会", { zhi: 20, mei: 10 }),
      activity("11月", "校园岗位责任制实践", { lao: 20, de: 10 }),
      activity("12月", "冬季体能打卡与跳绳统计", { ti: 20 }),
    ],
  },
  {
    name: "四年级下 2025春",
    activities: [
      activity("3月", "我的家乡与国家发展主题班会", { de: 20, zhi: 10 }),
      activity("4月30日", "山东师大附属小学运动会", { ti: 20, de: 10 }),
      activity("5月", "劳动技能小达人展示", { lao: 20, mei: 10 }),
      activity("6月", "班级艺术节节目排练", { mei: 20, ti: 10 }),
    ],
  },
  {
    name: "五年级上 2025秋",
    activities: [
      activity("9月", "阅读是一生的必修课讲座", { zhi: 20, mei: 10 }),
      activity("10月", "与家长读过的书对话", { zhi: 10, de: 10 }),
      activity("11月", "自我进步与自我批评班会", { de: 20 }),
      activity("12月", "共同创造我们的未来家长会", { de: 10, zhi: 10, lao: 10 }),
    ],
  },
];

const staticTalents = ["爆发力", "柔韧性", "节奏感", "空间感", "观察力", "平衡感", "耐力基础", "手眼协调"];
const dynamicTalents = ["动作模仿快", "团队协作强", "临场表现稳", "坚持度高", "节拍捕捉准", "策略意识好", "舞台适应快", "恢复速度快"];
const sportOptions = ["跳绳", "羽毛球", "短跑", "篮球基础", "足球协调", "啦啦操", "乒乓球", "长跑", "体能循环", "韵律操"];
const artOptions = ["合唱", "朗诵", "手指操", "舞蹈律动", "色彩搭配", "书法线条", "戏剧表达", "节奏打击", "校园摄影", "古诗词吟诵"];
const aestheticFocuses = ["色彩敏感", "音乐节奏", "舞台表现", "画面构图", "语言韵律", "动作美感", "情绪表达", "传统文化审美"];

const communicationMap = {
  ENTP: {
    entry: "给开放问题和挑战任务",
    method: "先认可想法，再一起验证边界",
    reminder: "少用简单否定，多用“还有没有第二种方案”",
    quote: "很高兴你在把奇思妙想变成可以落地的办法。",
  },
  INFP: {
    entry: "从感受和价值感进入",
    method: "一对一轻声交流，给足表达时间",
    reminder: "避免公开比较，用作品和文字看见内心",
    quote: "很高兴你在安静地守护那个真诚又闪光的自己。",
  },
  ENFJ: {
    entry: "给集体服务和表达机会",
    method: "让他参与组织，再复盘责任与边界",
    reminder: "注意别让过度负责变成压力",
    quote: "很高兴你在照亮别人时，也记得照顾自己的光。",
  },
  ESFJ: {
    entry: "从班级秩序和伙伴关系切入",
    method: "用具体肯定强化稳定贡献",
    reminder: "提醒他允许不同节奏，不必事事完美",
    quote: "很高兴你在用温暖和秩序让班级更安心。",
  },
  ESTJ: {
    entry: "给清晰规则和目标清单",
    method: "让他承担小岗位，用结果反馈成长",
    reminder: "引导他听见他人的不同想法",
    quote: "很高兴你在把目标一步一步做成真实成果。",
  },
  ESFP: {
    entry: "从活动、舞台和运动体验进入",
    method: "先调动热情，再把热情转化为坚持",
    reminder: "把即时兴趣变成可记录的长期习惯",
    quote: "很高兴你在热烈地参与，也在认真地坚持。",
  },
  ISTP: {
    entry: "给动手任务和可观察结果",
    method: "少说教，多让他在实践中证明自己",
    reminder: "沟通要简洁具体，尊重独立空间",
    quote: "很高兴你在用行动说明，自己一直在进步。",
  },
  INFJ: {
    entry: "从意义、目标和深度交流进入",
    method: "私下谈长期愿望，再拆成小步骤",
    reminder: "避免过度理想化，帮助他看见阶段成果",
    quote: "很高兴你在认真寻找更有意义的自己。",
  },
  ISTJ: {
    entry: "给稳定安排和明确标准",
    method: "用事实记录进步，用小目标建立安全感",
    reminder: "鼓励尝试新方法，不把一次失误看重",
    quote: "很高兴你在踏实地把每一步都走稳。",
  },
};

const notes = [
  "很高兴你在做更好的自己。",
  "很高兴你在坚持做那个不服输的自己。",
  "很高兴你在安静地做那个闪光的自己。",
  "很高兴你又遇见了一个更具可能性的自己。",
];

const levelNames = ["萌芽", "成长", "繁茂", "闪光", "远航"];
const canvas = document.querySelector("#galaxyCanvas");
const ctx = canvas.getContext("2d");
const radarCanvas = document.querySelector("#radarCanvas");
const radarCtx = radarCanvas.getContext("2d");
const studentList = document.querySelector("#studentList");
const cardName = document.querySelector("#cardName");
const cardOrbit = document.querySelector("#cardOrbit");
const cardLevel = document.querySelector("#cardLevel");
const virtueBars = document.querySelector("#virtueBars");
const parentMoons = document.querySelector("#parentMoons");
const caseNote = document.querySelector("#caseNote");
const talentArchive = document.querySelector("#talentArchive");
const communicationGuide = document.querySelector("#communicationGuide");
const mbtiBadge = document.querySelector("#mbtiBadge");
const viewToggle = document.querySelector("#viewToggle");
const studentCard = document.querySelector("#studentCard");
const semesterSelect = document.querySelector("#semesterSelect");
const activityList = document.querySelector("#activityList");
const applySemester = document.querySelector("#applySemester");
const applyHistory = document.querySelector("#applyHistory");
const toast = document.querySelector("#toast");

let width = 0;
let height = 0;
let dpr = 1;
let time = 0;
let selected = 17;
let pointer = { x: 0, y: 0 };
let focusMode = false;
let toastTimer = 0;
let cardFloating = false;
const stars = [];
const clouds = [];

const planets = students.map(([realName, mbti, father, mother], index) => {
  const base = virtueSeed(index, mbti, father, mother);
  const orbitBand = Math.floor(index / 6);
  const baseOrbitRadius = 260 + orbitBand * 88 + (index % 3) * 18;
  return {
    id: index + 1,
    realName,
    displayName: realName.slice(0, 1) + "同学",
    mbti,
    parents: [father, mother],
    values: base,
    archive: buildTalentArchive(index, mbti, base),
    orbitRadius: baseOrbitRadius,
    baseOrbitRadius,
    fullSince: null,
    orbitSpeed: 0.0018 + (index % 9) * 0.00023,
    angle: (index / students.length) * Math.PI * 2,
    planetColor: planetColor(index, base),
    note: notes[index % notes.length],
    screen: { x: 0, y: 0, size: 1, depth: 0 },
  };
});

function virtueSeed(index, mbti, father, mother) {
  const rng = seededRandom(`${index + 1}-${students[index][0]}-${mbti}`);
  const values = {
    de: randomStep(rng, 20, 80),
    zhi: randomStep(rng, 20, 80),
    ti: randomStep(rng, 20, 80),
    mei: randomStep(rng, 20, 80),
    lao: randomStep(rng, 20, 80),
  };
  const mbtiBoosts = {
    ENFJ: ["de", "mei"],
    INFP: ["mei", "de"],
    ESFP: ["ti", "mei"],
    ISTP: ["lao", "ti"],
    ESFJ: ["de", "lao"],
    ESTJ: ["lao", "zhi"],
    INFJ: ["mei", "zhi"],
    ISTJ: ["zhi", "lao"],
    ENTP: ["zhi", "ti"],
  };
  (mbtiBoosts[mbti] || []).forEach((key) => {
    values[key] += 10;
  });
  [father, mother].forEach((job) => {
    const info = parentMap[job];
    const key = virtues.find((item) => item.name === info.virtue).key;
    values[key] = Math.min(100, values[key] + 10);
  });
  if (index === 17) {
    values.de = 30;
    values.zhi = 30;
    values.ti = 60;
    values.mei = 30;
    values.lao = 40;
  }
  if (index === 21) {
    values.de = 100;
    values.zhi = 100;
    values.ti = 100;
    values.mei = 100;
    values.lao = 100;
  }
  return values;
}

function seededRandom(seedText) {
  let seed = 2166136261;
  for (let i = 0; i < seedText.length; i += 1) {
    seed ^= seedText.charCodeAt(i);
    seed = Math.imul(seed, 16777619);
  }
  return () => {
    seed += 0x6d2b79f5;
    let value = seed;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function randomStep(rng, min, max) {
  const minStep = Math.ceil(min / 10);
  const maxStep = Math.floor(max / 10);
  return (minStep + Math.floor(rng() * (maxStep - minStep + 1))) * 10;
}

function activity(date, title, effects) {
  return { date, title, effects };
}

function pickMany(list, rng, count) {
  const pool = [...list];
  const picked = [];
  while (picked.length < count && pool.length) {
    const index = Math.floor(rng() * pool.length);
    picked.push(pool.splice(index, 1)[0]);
  }
  return picked;
}

function scoreFrom(rng, base, spread = 18) {
  return Math.max(40, Math.min(98, Math.round((base + rng() * spread - spread / 2) / 5) * 5));
}

function buildTalentArchive(index, mbti, values) {
  const rng = seededRandom(`archive-${index + 1}-${mbti}`);
  const staticPicked = pickMany(staticTalents, rng, 2);
  const dynamicPicked = pickMany(dynamicTalents, rng, 2);
  const sports = pickMany(sportOptions, rng, 2);
  const arts = pickMany(artOptions, rng, 2);
  const focus = pickMany(aestheticFocuses, rng, 2);
  const sportBase = 45 + values.ti * 0.34 + values.lao * 0.12;
  const artBase = 45 + values.mei * 0.34 + values.zhi * 0.12;
  const healthBase = 48 + values.ti * 0.24 + values.de * 0.12 + values.lao * 0.1;
  return {
    staticTalent: staticPicked.join("、"),
    dynamicTalent: dynamicPicked.join("、"),
    suitableSports: sports.join("、"),
    artDirection: arts.join("、"),
    aestheticAbility: focus.join("、"),
    scores: {
      sport: scoreFrom(rng, sportBase),
      art: scoreFrom(rng, artBase),
      health: scoreFrom(rng, healthBase),
    },
    observation: archiveObservation(index, sports[0], arts[0], focus[0]),
  };
}

function archiveObservation(index, sport, art, focus) {
  const observations = [
    `适合以${sport}建立每日运动习惯，并在${art}中增强自信表达。`,
    `${focus}表现突出，建议通过${art}和班级展示继续放大优势。`,
    `运动参与度稳定，可用${sport}带动耐力、协调和规则意识。`,
    `适合在小组合作中承担展示角色，把${focus}转化为审美表达。`,
  ];
  return observations[index % observations.length];
}

function planetColor(index, values) {
  const palette = ["#76a889", "#c98556", "#6fa8c7", "#d7ab57", "#a887c8", "#e38c7b", "#7ebc92"];
  const avg = average(values);
  return avg >= 92 ? "#f1ba56" : palette[index % palette.length];
}

function average(values) {
  return Object.values(values).reduce((sum, value) => sum + value, 0) / 5;
}

function levelFor(values) {
  const avg = average(values);
  if (virtues.every((virtue) => values[virtue.key] >= 100)) return "远航";
  return levelNames[Math.min(4, Math.max(0, Math.floor(avg / 20)))];
}

function tier(value) {
  return Math.max(0, Math.min(10, Math.floor(value / 10)));
}

function isPerfectPlanet(planet) {
  return virtues.every((virtue) => planet.values[virtue.key] >= 100);
}

function updatePlanetGravity(planet) {
  if (isPerfectPlanet(planet)) {
    if (planet.fullSince === null) planet.fullSince = time;
  } else {
    planet.fullSince = null;
  }
}

function effectiveOrbitRadius(planet) {
  if (planet.fullSince === null) return planet.baseOrbitRadius;
  const drift = Math.min(340, (time - planet.fullSince) * 0.16);
  return planet.baseOrbitRadius + drift;
}

function effectiveOrbitSpeed(planet) {
  if (planet.fullSince === null) return planet.orbitSpeed;
  const driftAge = Math.min(1, (time - planet.fullSince) / 1200);
  return planet.orbitSpeed * (1 - driftAge * 0.42);
}

function initials(job, role) {
  return `${role}${job}`;
}

function resize() {
  dpr = Math.min(window.devicePixelRatio || 1, 2);
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = Math.floor(width * dpr);
  canvas.height = Math.floor(height * dpr);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  seedSky();
}

function seedSky() {
  stars.length = 0;
  clouds.length = 0;
  for (let i = 0; i < 160; i += 1) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.7 + 0.35,
      a: Math.random() * 0.55 + 0.18,
    });
  }
  for (let i = 0; i < 12; i += 1) {
    clouds.push({
      x: Math.random() * width,
      y: Math.random() * height * 0.6,
      scale: 0.9 + Math.random() * 2.2,
      speed: 0.035 + Math.random() * 0.07,
    });
  }
}

function renderStudentList() {
  studentList.innerHTML = "";
  planets.forEach((planet, index) => {
    const row = document.createElement("button");
    row.type = "button";
    row.className = `student-row${index === selected ? " active" : ""}`;
    row.style.setProperty("--planet-color", planet.planetColor);
    row.innerHTML = `
      <span class="orbit-dot"></span>
      <strong>${planet.displayName}</strong>
      <small>${planet.mbti}</small>
      <span class="row-level">${levelFor(planet.values)}</span>
      <span class="mini-bars" aria-hidden="true">
        ${virtues
          .map(
            (virtue) =>
              `<span style="background:${virtue.color}; transform:scaleY(${Math.max(0.06, planet.values[virtue.key] / 100)})"></span>`,
          )
          .join("")}
      </span>
    `;
    row.addEventListener("mouseenter", (event) => {
      selectStudent(index, false);
      positionStudentCard(event);
    });
    row.addEventListener("mousemove", positionStudentCard);
    row.addEventListener("focus", () => selectStudent(index, false));
    row.addEventListener("click", () => selectStudent(index, false));
    row.addEventListener("dblclick", (event) => {
      selectStudent(index, true);
      positionStudentCard(event);
      showToast(`镜头开始跟随${planet.displayName}的运动轨迹。`);
    });
    studentList.appendChild(row);
  });
}

function renderSemesterOptions() {
  semesterSelect.innerHTML = semesterActivities
    .map((semester, index) => `<option value="${index}">${semester.name}</option>`)
    .join("");
  semesterSelect.value = String(semesterActivities.length - 1);
  renderActivityList();
}

function renderActivityList() {
  const semester = semesterActivities[Number(semesterSelect.value)] || semesterActivities[0];
  activityList.innerHTML = semester.activities
    .map((item, index) => {
      const tags = Object.entries(item.effects)
        .map(([key, value]) => `${virtues.find((virtue) => virtue.key === key).name}+${value}`)
        .join(" ");
      return `
        <button class="activity-item" type="button" data-activity="${index}">
          <b>${item.date}</b>
          <span title="${item.title}">${item.title}</span>
          <small>${tags}</small>
        </button>
      `;
    })
    .join("");
}

function applyActivityEffects(item, scale = 1) {
  planets.forEach((planet) => {
    Object.entries(item.effects).forEach(([key, value]) => {
      const rng = seededRandom(`${planet.id}-${item.date}-${item.title}-${key}`);
      const participation = 0.72 + rng() * 0.28;
      const step = Math.max(10, Math.round((value * scale * participation) / 10) * 10);
      planet.values[key] = Math.min(100, planet.values[key] + step);
    });
    updatePlanetGravity(planet);
    planet.planetColor = planetColor(planet.id, planet.values);
  });
}

function applySemesterActivities() {
  const semester = semesterActivities[Number(semesterSelect.value)] || semesterActivities[0];
  semester.activities.forEach((item) => applyActivityEffects(item, 1));
  showToast(`${semester.name}的活动已沉淀到31颗星球。`);
  updateStudentCard();
  renderStudentList();
}

function applyHistoryActivities() {
  semesterActivities.forEach((semester) => {
    semester.activities.forEach((item) => applyActivityEffects(item, 0.38));
  });
  showToast("九学期活动积累已写入星系，五育数值更接近长期成长状态。");
  updateStudentCard();
  renderStudentList();
}

function selectStudent(index, shouldFocus) {
  selected = index;
  if (shouldFocus) focusMode = true;
  viewToggle.textContent = focusMode ? "跟随模式" : "全景模式";
  updateStudentCard();
  syncActiveStudentRows();
}

function syncActiveStudentRows() {
  studentList.querySelectorAll(".student-row").forEach((row, index) => {
    row.classList.toggle("active", index === selected);
  });
}

function positionStudentCard(event) {
  if (width <= 760) return;
  cardFloating = true;
  studentCard.classList.add("floating");
  const cardWidth = studentCard.offsetWidth || 330;
  const cardHeight = studentCard.offsetHeight || 430;
  const margin = 18;
  let left = event.clientX + 18;
  let top = event.clientY + 14;
  if (left + cardWidth + margin > width) left = event.clientX - cardWidth - 18;
  if (top + cardHeight + margin > height) top = height - cardHeight - margin;
  left = Math.max(margin, left);
  top = Math.max(margin, top);
  studentCard.style.left = `${left}px`;
  studentCard.style.top = `${top}px`;
}

function resetStudentCardPosition() {
  if (!cardFloating) return;
  cardFloating = false;
  studentCard.classList.remove("floating");
  studentCard.style.left = "";
  studentCard.style.top = "";
}

function updateStudentCard() {
  const planet = planets[selected];
  cardName.textContent = planet.displayName;
  cardOrbit.textContent = `星球 ${String(planet.id).padStart(2, "0")} / ${planet.mbti}`;
  cardLevel.textContent = levelFor(planet.values);
  mbtiBadge.textContent = planet.mbti;
  caseNote.textContent =
    planet.realName === "杨博文"
      ? "从最远、最贫瘠的一颗星球开始，因为陪伴、沟通和羽毛球，慢慢绿树成荫。"
      : planet.realName === "田嘉齐"
        ? "当一颗星球拥有足够强的内核、自然与科技，他就开始走向更宏大的星系。"
        : planet.note;
  virtueBars.innerHTML = virtues
    .map(
      (virtue) => `
        <div class="virtue-line">
          <span>${virtue.name}</span>
          <input class="virtue-slider" data-virtue="${virtue.key}" type="range" min="0" max="100" step="10"
            value="${planet.values[virtue.key]}" style="--value:${planet.values[virtue.key]};--color:${virtue.color}"
            aria-label="${planet.displayName}${virtue.name}等级" />
          <b>${planet.values[virtue.key]}</b>
        </div>
      `,
    )
    .join("");
  parentMoons.innerHTML = planet.parents
    .map((job, idx) => {
      const parent = parentMap[job];
      return `
        <span class="moon-pill">
          <span class="moon-dot" style="--moon-color:${parent.color}"></span>
          ${initials(job, idx === 0 ? "父" : "母")}：${parent.virtue}
        </span>
      `;
    })
    .join("");
  talentArchive.innerHTML = renderTalentArchive(planet.archive);
  communicationGuide.innerHTML = renderCommunicationGuide(planet.mbti);
  drawRadar(planet);
}

function renderTalentArchive(archive) {
  return `
    <div class="archive-scores">
      <span class="archive-score">运动素质<strong>${archive.scores.sport}</strong></span>
      <span class="archive-score">艺术素质<strong>${archive.scores.art}</strong></span>
      <span class="archive-score">健康习惯<strong>${archive.scores.health}</strong></span>
    </div>
    <div class="archive-line"><b>静态天赋</b><span>${archive.staticTalent}</span></div>
    <div class="archive-line"><b>动态天赋</b><span>${archive.dynamicTalent}</span></div>
    <div class="archive-line"><b>适合运动</b><span>${archive.suitableSports}</span></div>
    <div class="archive-line"><b>艺术方向</b><span>${archive.artDirection}</span></div>
    <div class="archive-line"><b>审美能力</b><span>${archive.aestheticAbility}</span></div>
    <div class="archive-line"><b>观察建议</b><span>${archive.observation}</span></div>
  `;
}

function renderCommunicationGuide(mbti) {
  const guide = communicationMap[mbti] || communicationMap.INFP;
  return `
    <div class="communication-line"><b>入口</b><span>${guide.entry}</span></div>
    <div class="communication-line"><b>方法</b><span>${guide.method}</span></div>
    <div class="communication-line"><b>提醒</b><span>${guide.reminder}</span></div>
    <div class="communication-quote">${guide.quote}</div>
  `;
}

function drawRadar(planet) {
  const w = radarCanvas.width;
  const h = radarCanvas.height;
  const cx = w / 2;
  const cy = h / 2 + 8;
  const radius = 66;
  radarCtx.clearRect(0, 0, w, h);
  radarCtx.lineWidth = 1;
  radarCtx.strokeStyle = "rgba(36,49,58,.16)";
  radarCtx.fillStyle = "rgba(255,255,255,.32)";
  for (let ring = 1; ring <= 5; ring += 1) {
    polygonPath(radarCtx, cx, cy, (radius * ring) / 5);
    radarCtx.stroke();
  }
  virtues.forEach((virtue, index) => {
    const point = radarPoint(cx, cy, radius, index, 5);
    radarCtx.beginPath();
    radarCtx.moveTo(cx, cy);
    radarCtx.lineTo(point.x, point.y);
    radarCtx.stroke();
    radarCtx.fillStyle = virtue.color;
    radarCtx.font = "12px Microsoft YaHei";
    radarCtx.textAlign = point.x < cx - 8 ? "right" : point.x > cx + 8 ? "left" : "center";
    radarCtx.fillText(virtue.name, point.x + (point.x < cx ? -8 : 8), point.y + 4);
  });
  radarCtx.beginPath();
  virtues.forEach((virtue, index) => {
    const point = radarPoint(cx, cy, (radius * planet.values[virtue.key]) / 100, index, 5);
    if (index === 0) radarCtx.moveTo(point.x, point.y);
    else radarCtx.lineTo(point.x, point.y);
  });
  radarCtx.closePath();
  radarCtx.fillStyle = "rgba(80, 148, 126, .26)";
  radarCtx.strokeStyle = "rgba(215, 142, 56, .82)";
  radarCtx.lineWidth = 2;
  radarCtx.fill();
  radarCtx.stroke();
}

function polygonPath(context, cx, cy, radius) {
  context.beginPath();
  for (let i = 0; i < 5; i += 1) {
    const point = radarPoint(cx, cy, radius, i, 5);
    if (i === 0) context.moveTo(point.x, point.y);
    else context.lineTo(point.x, point.y);
  }
  context.closePath();
}

function radarPoint(cx, cy, radius, index, total) {
  const angle = -Math.PI / 2 + (index / total) * Math.PI * 2;
  return { x: cx + Math.cos(angle) * radius, y: cy + Math.sin(angle) * radius };
}

function draw() {
  time += 1;
  ctx.clearRect(0, 0, width, height);
  drawSky();
  planets.forEach(updatePlanetGravity);
  const selectedPlanet = planets[selected];
  const center = galaxyCenter(selectedPlanet);
  drawOrbits(center);
  drawSun(center);
  const sorted = planets
    .map((planet) => ({ planet, coords: planetCoords(planet, center) }))
    .sort((a, b) => a.coords.depth - b.coords.depth);
  drawEducationLights(center, sorted, selectedPlanet);
  sorted.forEach(({ planet, coords }) => drawPlanet(planet, coords, planet === selectedPlanet));
  drawBridge(center, selectedPlanet.screen);
  requestAnimationFrame(draw);
}

function galaxyCenter(planet) {
  const baseX = width < 900 ? width * 0.57 : width * 0.6;
  const baseY = height * 0.5;
  if (!focusMode) return { x: baseX, y: baseY };
  const coords = planetCoordsRaw(planet);
  return {
    x: baseX - coords.x * 0.42,
    y: baseY - coords.y * 0.42,
  };
}

function planetCoordsRaw(planet) {
  const radius = effectiveOrbitRadius(planet);
  const angle = planet.angle + time * effectiveOrbitSpeed(planet);
  const planeX = Math.cos(angle) * radius;
  const planeDepth = Math.sin(angle) * radius;
  const x = planeX * Math.cos(ORBIT_PLANE_ROTATION) - planeDepth * ORBIT_PLANE_Y_SCALE * Math.sin(ORBIT_PLANE_ROTATION);
  const y = planeX * Math.sin(ORBIT_PLANE_ROTATION) + planeDepth * ORBIT_PLANE_Y_SCALE * Math.cos(ORBIT_PLANE_ROTATION);
  const z = planeDepth;
  return { x, y, z };
}

function planetCoords(planet, center) {
  const raw = planetCoordsRaw(planet);
  const perspective = 1 / (1 + (raw.z + 300) / 900);
  const x = center.x + raw.x * perspective;
  const y = center.y + raw.y * perspective;
  const size = (16 + tier(planet.values.de) * 2.6 + average(planet.values) * 0.05) * perspective;
  const depth = raw.z;
  planet.screen = { x, y, size, depth };
  return planet.screen;
}

function drawSky() {
  const sky = ctx.createLinearGradient(0, 0, 0, height);
  sky.addColorStop(0, "#f6d7a8");
  sky.addColorStop(0.28, "#c9dcc9");
  sky.addColorStop(0.58, "#7fb7be");
  sky.addColorStop(1, "#31596d");
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, width, height);

  drawWatercolorWashes();
  drawDistantCloudBanks();

  stars.forEach((star) => {
    ctx.globalAlpha = star.a + Math.sin(time * 0.018 + star.x) * 0.11;
    ctx.fillStyle = "#fff8cf";
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.globalAlpha = 1;

  clouds.forEach((cloud) => {
    const x = (cloud.x + time * cloud.speed) % (width + 360) - 180;
    drawCloud(x, cloud.y, cloud.scale);
  });
  drawWindStrokes();
}

function drawWatercolorWashes() {
  const washes = [
    { x: 0.22, y: 0.2, r: 260, color: "rgba(255, 247, 214, 0.18)" },
    { x: 0.76, y: 0.16, r: 300, color: "rgba(255, 236, 190, 0.16)" },
    { x: 0.62, y: 0.42, r: 240, color: "rgba(189, 228, 202, 0.12)" },
    { x: 0.36, y: 0.6, r: 280, color: "rgba(117, 184, 186, 0.12)" },
  ];
  washes.forEach((wash) => {
    const gradient = ctx.createRadialGradient(width * wash.x, height * wash.y, 0, width * wash.x, height * wash.y, wash.r);
    gradient.addColorStop(0, wash.color);
    gradient.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(width * wash.x, height * wash.y, wash.r, 0, Math.PI * 2);
    ctx.fill();
  });
}

function drawDistantCloudBanks() {
  ctx.save();
  ctx.fillStyle = "rgba(255, 250, 224, 0.12)";
  for (let bank = 0; bank < 3; bank += 1) {
    const baseY = height * (0.16 + bank * 0.16);
    const drift = (time * (0.015 + bank * 0.01)) % 160;
    for (let i = -1; i < 9; i += 1) {
      const x = i * width * 0.16 + drift - 120;
      ctx.beginPath();
      ctx.ellipse(x, baseY + Math.sin(i + bank) * 20, 120 + bank * 36, 30 + bank * 8, -0.08, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  ctx.restore();
}

function drawCloud(x, y, scale) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);
  ctx.fillStyle = "rgba(255, 251, 225, 0.18)";
  for (let i = 0; i < 7; i += 1) {
    ctx.beginPath();
    ctx.ellipse(i * 30, Math.sin(i) * 7, 58 - i * 3, 18 + (i % 2) * 9, -0.08, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
}

function drawWindStrokes() {
  ctx.save();
  ctx.strokeStyle = "rgba(255, 249, 219, 0.12)";
  ctx.lineWidth = 1;
  for (let i = 0; i < 22; i += 1) {
    const y = height * (0.2 + (i % 9) * 0.075) + Math.sin(time * 0.006 + i) * 12;
    const x = ((i * 173 + time * 0.22) % (width + 260)) - 180;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(x + 48, y - 8, x + 96, y + 10, x + 154, y - 2);
    ctx.stroke();
  }
  ctx.restore();
}

function drawOrbits(center) {
  ctx.save();
  ctx.translate(center.x, center.y);
  ctx.strokeStyle = "rgba(255, 249, 219, 0.18)";
  ctx.lineWidth = 1;
  for (let i = 0; i < 6; i += 1) {
    ctx.beginPath();
    const radius = 245 + i * 88;
    ctx.ellipse(0, 0, radius, radius * ORBIT_PLANE_Y_SCALE, ORBIT_PLANE_ROTATION, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.restore();
}

function drawSun(center) {
  const pulse = Math.sin(time * 0.03) * 3;
  const glow = ctx.createRadialGradient(center.x, center.y, 10, center.x, center.y, 128 + pulse * 2);
  glow.addColorStop(0, "rgba(255, 253, 177, .95)");
  glow.addColorStop(0.24, "rgba(248, 178, 70, .78)");
  glow.addColorStop(0.56, "rgba(218, 87, 63, .28)");
  glow.addColorStop(1, "rgba(218, 87, 63, 0)");
  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.arc(center.x, center.y, 128 + pulse * 2, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#f5ac43";
  ctx.beginPath();
  ctx.arc(center.x, center.y, 36 + pulse, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "rgba(255,255,205,.95)";
  ctx.beginPath();
  ctx.arc(center.x - 10, center.y - 12, 13, 0, Math.PI * 2);
  ctx.fill();
}

function drawEducationLights(center, sortedPlanets, selectedPlanet) {
  ctx.save();
  ctx.globalCompositeOperation = "screen";
  sortedPlanets.forEach(({ planet, coords }) => {
    const isActive = planet === selectedPlanet;
    lightVirtues.forEach((virtue, index) => {
      const level = tier(planet.values[virtue.key]);
      if (level <= 0) return;
      const alpha = isActive ? 0.28 + level * 0.025 : 0.035 + level * 0.006;
      const offset = (index - 1.5) * 7;
      drawLightBeam(center, coords, virtue.color, alpha, offset, index, isActive);
    });
  });
  ctx.restore();
}

function drawLightBeam(center, coords, color, alpha, offset, index, isActive) {
  const dx = coords.x - center.x;
  const dy = coords.y - center.y;
  const length = Math.max(1, Math.hypot(dx, dy));
  const nx = -dy / length;
  const ny = dx / length;
  const startX = center.x + nx * offset;
  const startY = center.y + ny * offset;
  const endX = coords.x + nx * offset * 0.45;
  const endY = coords.y + ny * offset * 0.45;
  const controlX = (startX + endX) / 2 + nx * (18 + index * 5) + Math.sin(time * 0.012 + index) * 6;
  const controlY = (startY + endY) / 2 + ny * (18 + index * 5) - 24;

  ctx.lineWidth = isActive ? 2.2 : 0.75;
  ctx.strokeStyle = hexToRgba(color, alpha);
  ctx.setLineDash(isActive ? [12, 12] : [8, 18]);
  ctx.lineDashOffset = -time * (0.55 + index * 0.12);
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.quadraticCurveTo(controlX, controlY, endX, endY);
  ctx.stroke();
  ctx.setLineDash([]);

  const t = (time * (0.006 + index * 0.0015) + index * 0.21) % 1;
  const particle = quadraticPoint(startX, startY, controlX, controlY, endX, endY, t);
  ctx.fillStyle = hexToRgba(color, isActive ? 0.78 : 0.22);
  ctx.beginPath();
  ctx.arc(particle.x, particle.y, isActive ? 2.6 : 1.2, 0, Math.PI * 2);
  ctx.fill();
}

function quadraticPoint(x0, y0, x1, y1, x2, y2, t) {
  const u = 1 - t;
  return {
    x: u * u * x0 + 2 * u * t * x1 + t * t * x2,
    y: u * u * y0 + 2 * u * t * y1 + t * t * y2,
  };
}

function hexToRgba(hex, alpha) {
  const clean = hex.replace("#", "");
  const value = Number.parseInt(clean, 16);
  const r = (value >> 16) & 255;
  const g = (value >> 8) & 255;
  const b = value & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function drawPlanet(planet, coords, active) {
  const { x, y, size } = coords;
  const values = planet.values;
  const avg = average(values);
  const gradient = ctx.createRadialGradient(x - size * 0.35, y - size * 0.4, 2, x, y, size * 1.35);
  gradient.addColorStop(0, "#fff7c8");
  gradient.addColorStop(0.22, planet.planetColor);
  gradient.addColorStop(1, "#38646b");
  if (active) {
    ctx.strokeStyle = "rgba(255, 238, 152, .78)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(x, y, size + 9 + Math.sin(time * 0.05) * 2, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fill();

  drawPlanetTexture(x, y, size, values, avg);
  drawMoons(planet, x, y, size);

  if (active || size > 24) {
    ctx.font = `${Math.max(11, size * 0.43)}px Microsoft YaHei`;
    ctx.textAlign = "center";
    ctx.fillStyle = "rgba(255, 253, 232, .92)";
    ctx.fillText(planet.displayName, x, y + size + 18);
  }
  if (isPerfectPlanet(planet)) {
    ctx.font = `${Math.max(10, size * 0.32)}px Microsoft YaHei`;
    ctx.textAlign = "center";
    ctx.fillStyle = "rgba(255, 245, 178, .92)";
    ctx.fillText("远航", x, y - size - 10);
  }
}

function drawPlanetTexture(x, y, size, values, avg) {
  const deTier = tier(values.de);
  const zhiTier = tier(values.zhi);
  const tiTier = tier(values.ti);
  const meiTier = tier(values.mei);
  const laoTier = tier(values.lao);
  ctx.save();
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.clip();

  const waterCoverage = Math.min(0.7, tiTier * 0.07);
  const waterBands = Math.ceil(tiTier * 0.8);
  for (let i = 0; i < waterBands; i += 1) {
    const bandOffset = (i - waterBands / 2) * size * 0.16;
    ctx.strokeStyle = `rgba(87,171,205,${0.24 + waterCoverage * 0.52})`;
    ctx.lineWidth = Math.max(1, size * (0.04 + waterCoverage * 0.045));
    ctx.beginPath();
    ctx.ellipse(x, y + bandOffset, size * (0.36 + waterCoverage * 0.72), size * (0.08 + waterCoverage * 0.12), -0.3, 0, Math.PI * 2);
    ctx.stroke();
  }

  for (let i = 0; i < laoTier; i += 1) {
    ctx.fillStyle = "rgba(77,154,102,.48)";
    ctx.beginPath();
    ctx.ellipse(
      x - size * 0.48 + i * size * 0.105,
      y + Math.sin(i + time * 0.02) * size * 0.28,
      size * (0.13 + laoTier * 0.012),
      size * (0.05 + laoTier * 0.004),
      0.4,
      0,
      Math.PI * 2,
    );
    ctx.fill();
  }

  for (let i = 0; i < zhiTier; i += 1) {
    ctx.fillStyle = "rgba(246,235,255,.65)";
    ctx.fillRect(x - size * 0.42 + i * size * 0.085, y - size * 0.32, size * 0.045, size * (0.12 + zhiTier * 0.012));
    ctx.fillStyle = "rgba(255,236,153,.78)";
    ctx.beginPath();
    ctx.arc(x - size * 0.4 + i * size * 0.085, y - size * 0.19, Math.max(0.7, size * 0.026), 0, Math.PI * 2);
    ctx.fill();
  }
  if (avg > 86) {
    ctx.fillStyle = "rgba(255,236,147,.64)";
    ctx.beginPath();
    ctx.arc(x + size * 0.2, y - size * 0.12, size * 0.18, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();

  ctx.strokeStyle = `rgba(215,95,80,${0.12 + deTier * 0.055})`;
  ctx.lineWidth = Math.max(2, deTier * 0.38);
  ctx.beginPath();
  ctx.arc(x, y, size * 0.48, 0, Math.PI * 2);
  ctx.stroke();

  for (let i = 0; i < meiTier; i += 1) {
    const angle = time * 0.012 + (i / Math.max(1, meiTier)) * Math.PI * 2;
    ctx.fillStyle = "rgba(255,219,123,.78)";
    ctx.beginPath();
    ctx.arc(x + Math.cos(angle) * size * 0.72, y + Math.sin(angle) * size * 0.72, Math.max(1.2, size * 0.055), 0, Math.PI * 2);
    ctx.fill();
    if (size > 16 && i % 2 === 0) {
      ctx.fillStyle = "rgba(255,248,211,.68)";
      ctx.beginPath();
      ctx.ellipse(
        x + Math.cos(angle + 0.24) * size * 0.5,
        y + Math.sin(angle + 0.24) * size * 0.46,
        Math.max(1.4, size * 0.04),
        Math.max(0.8, size * 0.025),
        angle,
        0,
        Math.PI * 2,
      );
      ctx.fill();
    }
  }
}

function drawMoons(planet, x, y, size) {
  planet.parents.forEach((job, index) => {
    const info = parentMap[job];
    const angle = time * 0.025 * (index ? -1 : 1) + index * Math.PI + planet.id;
    const mx = x + Math.cos(angle) * (size + 13 + index * 6);
    const my = y + Math.sin(angle) * (size * 0.55 + 8);
    ctx.fillStyle = info.color;
    ctx.beginPath();
    ctx.arc(mx, my, Math.max(3, size * 0.17), 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "rgba(255,255,255,.55)";
    ctx.lineWidth = 1;
    ctx.stroke();
  });
}

function drawBridge(center, target) {
  if (!target || !Number.isFinite(target.x)) return;
  const selectedPlanet = planets[selected];
  const bridgeAlpha = isPerfectPlanet(selectedPlanet) ? 0.36 : 1;
  const grad = ctx.createLinearGradient(center.x, center.y, target.x, target.y);
  grad.addColorStop(0, `rgba(255, 230, 145, ${0.72 * bridgeAlpha})`);
  grad.addColorStop(0.5, `rgba(135, 207, 194, ${0.32 * bridgeAlpha})`);
  grad.addColorStop(1, "rgba(255, 248, 205, .08)");
  ctx.strokeStyle = grad;
  ctx.lineWidth = 2;
  ctx.setLineDash([8, 10]);
  ctx.lineDashOffset = -time * 0.6;
  ctx.beginPath();
  ctx.moveTo(center.x, center.y);
  ctx.quadraticCurveTo((center.x + target.x) / 2, Math.min(center.y, target.y) - 80, target.x, target.y);
  ctx.stroke();
  ctx.setLineDash([]);
}

function addClassVirtue(key) {
  planets.forEach((planet) => {
    planet.values[key] = Math.min(100, planet.values[key] + 10);
    updatePlanetGravity(planet);
    planet.planetColor = planetColor(planet.id, planet.values);
  });
  const virtue = virtues.find((item) => item.key === key);
  showToast(`星际之桥已连通：全班${virtue.name}提升一级，${virtue.scene}正在生长。`);
  updateStudentCard();
  renderStudentList();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2400);
}

document.querySelectorAll(".action-grid button").forEach((button) => {
  button.addEventListener("click", () => addClassVirtue(button.dataset.virtue));
});

semesterSelect.addEventListener("change", renderActivityList);

activityList.addEventListener("click", (event) => {
  const button = event.target.closest(".activity-item");
  if (!button) return;
  const semester = semesterActivities[Number(semesterSelect.value)] || semesterActivities[0];
  const item = semester.activities[Number(button.dataset.activity)];
  applyActivityEffects(item, 1);
  showToast(`${item.date} ${item.title} 已转化为星球成长。`);
  updateStudentCard();
  renderStudentList();
});

applySemester.addEventListener("click", applySemesterActivities);
applyHistory.addEventListener("click", applyHistoryActivities);

virtueBars.addEventListener("input", (event) => {
  const slider = event.target.closest(".virtue-slider");
  if (!slider) return;
  const planet = planets[selected];
  planet.values[slider.dataset.virtue] = Number(slider.value);
  updatePlanetGravity(planet);
  planet.planetColor = planetColor(planet.id, planet.values);
  slider.style.setProperty("--value", slider.value);
  const valueLabel = slider.parentElement.querySelector("b");
  if (valueLabel) valueLabel.textContent = slider.value;
  cardLevel.textContent = levelFor(planet.values);
  drawRadar(planet);
  renderStudentList();
});

viewToggle.addEventListener("click", () => {
  focusMode = !focusMode;
  viewToggle.textContent = focusMode ? "跟随模式" : "全景模式";
  showToast(focusMode ? "镜头开始跟随选中星球。" : "镜头回到全班星系全景。");
});

canvas.addEventListener("mousemove", (event) => {
  resetStudentCardPosition();
  pointer = { x: event.clientX, y: event.clientY };
  let nearest = selected;
  let distance = 34;
  planets.forEach((planet, index) => {
    const dx = planet.screen.x - pointer.x;
    const dy = planet.screen.y - pointer.y;
    const d = Math.sqrt(dx * dx + dy * dy);
    if (d < distance + planet.screen.size * 0.3) {
      distance = d;
      nearest = index;
    }
  });
  if (nearest !== selected) selectStudent(nearest, false);
});

window.addEventListener("resize", resize);
resize();
renderStudentList();
renderSemesterOptions();
updateStudentCard();
requestAnimationFrame(draw);
