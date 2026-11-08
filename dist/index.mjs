/**
 * @chonoi/vietnamese-lunar-calendar (ESM)
 * Copyright (c) 2026 Chonoi & Contributors
 * MIT License
 */

// src/core/constants.js
var DEFAULT_TIMEZONE = 7;
var CAN = [
  "Gi\xE1p",
  "\u1EA4t",
  "B\xEDnh",
  "\u0110inh",
  "M\u1EADu",
  "K\u1EF7",
  "Canh",
  "T\xE2n",
  "Nh\xE2m",
  "Qu\xFD"
];
var CHI = [
  "T\xFD",
  "S\u1EEDu",
  "D\u1EA7n",
  "M\xE3o",
  "Th\xECn",
  "T\u1EF5",
  "Ng\u1ECD",
  "M\xF9i",
  "Th\xE2n",
  "D\u1EADu",
  "Tu\u1EA5t",
  "H\u1EE3i"
];
var CON_GIAP = [
  "Chu\u1ED9t",
  "Tr\xE2u",
  "H\u1ED5",
  "M\xE8o",
  "R\u1ED3ng",
  "R\u1EAFn",
  "Ng\u1EF1a",
  "D\xEA",
  "Kh\u1EC9",
  "G\xE0",
  "Ch\xF3",
  "L\u1EE3n"
];
var THANG_AM = [
  "Gi\xEAng",
  "Hai",
  "Ba",
  "T\u01B0",
  "N\u0103m",
  "S\xE1u",
  "B\u1EA3y",
  "T\xE1m",
  "Ch\xEDn",
  "M\u01B0\u1EDDi",
  "M\u01B0\u1EDDi M\u1ED9t",
  "Ch\u1EA1p"
];
var THU = [
  "Ch\u1EE7 Nh\u1EADt",
  "Th\u1EE9 Hai",
  "Th\u1EE9 Ba",
  "Th\u1EE9 T\u01B0",
  "Th\u1EE9 N\u0103m",
  "Th\u1EE9 S\xE1u",
  "Th\u1EE9 B\u1EA3y"
];
var THU_NGAN = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
var KHUNG_GIO_CHI = [
  { chi: "T\xFD", start: "23:00", end: "01:00", startHour: 23, endHour: 1 },
  { chi: "S\u1EEDu", start: "01:00", end: "03:00", startHour: 1, endHour: 3 },
  { chi: "D\u1EA7n", start: "03:00", end: "05:00", startHour: 3, endHour: 5 },
  { chi: "M\xE3o", start: "05:00", end: "07:00", startHour: 5, endHour: 7 },
  { chi: "Th\xECn", start: "07:00", end: "09:00", startHour: 7, endHour: 9 },
  { chi: "T\u1EF5", start: "09:00", end: "11:00", startHour: 9, endHour: 11 },
  { chi: "Ng\u1ECD", start: "11:00", end: "13:00", startHour: 11, endHour: 13 },
  { chi: "M\xF9i", start: "13:00", end: "15:00", startHour: 13, endHour: 15 },
  { chi: "Th\xE2n", start: "15:00", end: "17:00", startHour: 15, endHour: 17 },
  { chi: "D\u1EADu", start: "17:00", end: "19:00", startHour: 17, endHour: 19 },
  { chi: "Tu\u1EA5t", start: "19:00", end: "21:00", startHour: 19, endHour: 21 },
  { chi: "H\u1EE3i", start: "21:00", end: "23:00", startHour: 21, endHour: 23 }
];
var TIET_KHI = [
  { id: "xuan_phan", name: "Xu\xE2n ph\xE2n", degree: 0, approximateDate: "20-21/03" },
  { id: "thanh_minh", name: "Thanh minh", degree: 15, approximateDate: "04-05/04" },
  { id: "coc_vu", name: "C\u1ED1c v\u0169", degree: 30, approximateDate: "20-21/04" },
  { id: "lap_ha", name: "L\u1EADp h\u1EA1", degree: 45, approximateDate: "05-06/05" },
  { id: "tieu_man", name: "Ti\u1EC3u m\xE3n", degree: 60, approximateDate: "21-22/05" },
  { id: "mang_chung", name: "Mang ch\u1EE7ng", degree: 75, approximateDate: "05-06/06" },
  { id: "ha_chi", name: "H\u1EA1 ch\xED", degree: 90, approximateDate: "21-22/06" },
  { id: "tieu_thu", name: "Ti\u1EC3u th\u1EED", degree: 105, approximateDate: "07-08/07" },
  { id: "dai_thu", name: "\u0110\u1EA1i th\u1EED", degree: 120, approximateDate: "22-23/07" },
  { id: "lap_thu", name: "L\u1EADp thu", degree: 135, approximateDate: "07-08/08" },
  { id: "xu_thu", name: "X\u1EED th\u1EED", degree: 150, approximateDate: "23-24/08" },
  { id: "bach_lo", name: "B\u1EA1ch l\u1ED9", degree: 165, approximateDate: "07-08/09" },
  { id: "thu_phan", name: "Thu ph\xE2n", degree: 180, approximateDate: "23-24/09" },
  { id: "han_lo", name: "H\xE0n l\u1ED9", degree: 195, approximateDate: "08-09/10" },
  { id: "suong_giang", name: "S\u01B0\u01A1ng gi\xE1ng", degree: 210, approximateDate: "23-24/10" },
  { id: "lap_dong", name: "L\u1EADp \u0111\xF4ng", degree: 225, approximateDate: "07-08/11" },
  { id: "tieu_tuyet", name: "Ti\u1EC3u tuy\u1EBFt", degree: 240, approximateDate: "22-23/11" },
  { id: "dai_tuyet", name: "\u0110\u1EA1i tuy\u1EBFt", degree: 255, approximateDate: "07-08/12" },
  { id: "dong_chi", name: "\u0110\xF4ng ch\xED", degree: 270, approximateDate: "21-22/12" },
  { id: "tieu_han", name: "Ti\u1EC3u h\xE0n", degree: 285, approximateDate: "05-06/01" },
  { id: "dai_han", name: "\u0110\u1EA1i h\xE0n", degree: 300, approximateDate: "20-21/01" },
  { id: "lap_xuan", name: "L\u1EADp xu\xE2n", degree: 315, approximateDate: "04-05/02" },
  { id: "vu_thuy", name: "V\u0169 th\u1EE7y", degree: 330, approximateDate: "18-19/02" },
  { id: "kinh_trap", name: "Kinh tr\u1EADp", degree: 345, approximateDate: "05-06/03" }
];
var GIO_HOANG_DAO_BITS = [
  "110100101100",
  // Ngày Tý, Ngọ
  "001101001011",
  // Ngày Sửu, Mùi
  "110011010010",
  // Ngày Dần, Thân
  "101100110100",
  // Ngày Mão, Dậu
  "001011001101",
  // Ngày Thìn, Tuất
  "010010110011"
  // Ngày Tỵ, Hợi
];
var THAN_SAT_GIO = [
  { name: "Thanh Long", isAuspicious: true, type: "Ho\xE0ng \u0111\u1EA1o" },
  { name: "Minh \u0110\u01B0\u1EDDng", isAuspicious: true, type: "Ho\xE0ng \u0111\u1EA1o" },
  { name: "Thi\xEAn H\xECnh", isAuspicious: false, type: "H\u1EAFc \u0111\u1EA1o" },
  { name: "Chu T\u01B0\u1EDBc", isAuspicious: false, type: "H\u1EAFc \u0111\u1EA1o" },
  { name: "Kim Qu\u1EF9", isAuspicious: true, type: "Ho\xE0ng \u0111\u1EA1o" },
  { name: "Thi\xEAn \u0110\u1EE9c", isAuspicious: true, type: "Ho\xE0ng \u0111\u1EA1o" },
  { name: "B\u1EA1ch H\u1ED5", isAuspicious: false, type: "H\u1EAFc \u0111\u1EA1o" },
  { name: "Ng\u1ECDc \u0110\u01B0\u1EDDng", isAuspicious: true, type: "Ho\xE0ng \u0111\u1EA1o" },
  { name: "Thi\xEAn Lao", isAuspicious: false, type: "H\u1EAFc \u0111\u1EA1o" },
  { name: "Huy\u1EC1n V\u0169", isAuspicious: false, type: "H\u1EAFc \u0111\u1EA1o" },
  { name: "T\u01B0 M\u1EC7nh", isAuspicious: true, type: "Ho\xE0ng \u0111\u1EA1o" },
  { name: "C\xE2u Tr\u1EADn", isAuspicious: false, type: "H\u1EAFc \u0111\u1EA1o" }
];
var NAP_AM_60 = {
  "Gi\xE1p T\xFD": "H\u1EA3i Trung Kim",
  "\u1EA4t S\u1EEDu": "H\u1EA3i Trung Kim",
  "B\xEDnh D\u1EA7n": "L\u01B0 Trung H\u1ECFa",
  "\u0110inh M\xE3o": "L\u01B0 Trung H\u1ECFa",
  "M\u1EADu Th\xECn": "\u0110\u1EA1i L\xE2m M\u1ED9c",
  "K\u1EF7 T\u1EF5": "\u0110\u1EA1i L\xE2m M\u1ED9c",
  "Canh Ng\u1ECD": "L\u1ED9 B\xE0ng Th\u1ED5",
  "T\xE2n M\xF9i": "L\u1ED9 B\xE0ng Th\u1ED5",
  "Nh\xE2m Th\xE2n": "Ki\u1EBFm Phong Kim",
  "Qu\xFD D\u1EADu": "Ki\u1EBFm Phong Kim",
  "Gi\xE1p Tu\u1EA5t": "S\u01A1n \u0110\u1EA7u H\u1ECFa",
  "\u1EA4t H\u1EE3i": "S\u01A1n \u0110\u1EA7u H\u1ECFa",
  "B\xEDnh T\xFD": "Gi\u1EA3n H\u1EA1 Th\u1EE7y",
  "\u0110inh S\u1EEDu": "Gi\u1EA3n H\u1EA1 Th\u1EE7y",
  "M\u1EADu D\u1EA7n": "Th\xE0nh \u0110\u1EA7u Th\u1ED5",
  "K\u1EF7 M\xE3o": "Th\xE0nh \u0110\u1EA7u Th\u1ED5",
  "Canh Th\xECn": "B\u1EA1ch L\u1EA1p Kim",
  "T\xE2n T\u1EF5": "B\u1EA1ch L\u1EA1p Kim",
  "Nh\xE2m Ng\u1ECD": "D\u01B0\u01A1ng Li\u1EC5u M\u1ED9c",
  "Qu\xFD M\xF9i": "D\u01B0\u01A1ng Li\u1EC5u M\u1ED9c",
  "Gi\xE1p Th\xE2n": "Tuy\u1EC1n Trung Th\u1EE7y",
  "\u1EA4t D\u1EADu": "Tuy\u1EC1n Trung Th\u1EE7y",
  "B\xEDnh Tu\u1EA5t": "\u1ED0c Th\u01B0\u1EE3ng Th\u1ED5",
  "\u0110inh H\u1EE3i": "\u1ED0c Th\u01B0\u1EE3ng Th\u1ED5",
  "M\u1EADu T\xFD": "T\xEDch L\u1ECBch H\u1ECFa",
  "K\u1EF7 S\u1EEDu": "T\xEDch L\u1ECBch H\u1ECFa",
  "Canh D\u1EA7n": "T\xF9ng B\xE1ch M\u1ED9c",
  "T\xE2n M\xE3o": "T\xF9ng B\xE1ch M\u1ED9c",
  "Nh\xE2m Th\xECn": "Tr\u01B0\u1EDDng L\u01B0u Th\u1EE7y",
  "Qu\xFD T\u1EF5": "Tr\u01B0\u1EDDng L\u01B0u Th\u1EE7y",
  "Gi\xE1p Ng\u1ECD": "Sa Trung Kim",
  "\u1EA4t M\xF9i": "Sa Trung Kim",
  "B\xEDnh Th\xE2n": "S\u01A1n H\u1EA1 H\u1ECFa",
  "\u0110inh D\u1EADu": "S\u01A1n H\u1EA1 H\u1ECFa",
  "M\u1EADu Tu\u1EA5t": "B\xECnh \u0110\u1ECBa M\u1ED9c",
  "K\u1EF7 H\u1EE3i": "B\xECnh \u0110\u1ECBa M\u1ED9c",
  "Canh T\xFD": "B\xEDch Th\u01B0\u1EE3ng Th\u1ED5",
  "T\xE2n S\u1EEDu": "B\xEDch Th\u01B0\u1EE3ng Th\u1ED5",
  "Nh\xE2m D\u1EA7n": "Kim B\u1EA1ch Kim",
  "Qu\xFD M\xE3o": "Kim B\u1EA1ch Kim",
  "Gi\xE1p Th\xECn": "Ph\xFAc \u0110\u0103ng H\u1ECFa",
  "\u1EA4t T\u1EF5": "Ph\xFAc \u0110\u0103ng H\u1ECFa",
  "B\xEDnh Ng\u1ECD": "Thi\xEAn H\xE0 Th\u1EE7y",
  "\u0110inh M\xF9i": "Thi\xEAn H\xE0 Th\u1EE7y",
  "M\u1EADu Th\xE2n": "\u0110\u1EA1i Tr\u1EA1ch Th\u1ED5",
  "K\u1EF7 D\u1EADu": "\u0110\u1EA1i Tr\u1EA1ch Th\u1ED5",
  "Canh Tu\u1EA5t": "Thoa Xuy\u1EBFn Kim",
  "T\xE2n H\u1EE3i": "Thoa Xuy\u1EBFn Kim",
  "Nh\xE2m T\xFD": "Tang \u0110\u1ED1 M\u1ED9c",
  "Qu\xFD S\u1EEDu": "Tang \u0110\u1ED1 M\u1ED9c",
  "Gi\xE1p D\u1EA7n": "\u0110\u1EA1i Kh\xEA Th\u1EE7y",
  "\u1EA4t M\xE3o": "\u0110\u1EA1i Kh\xEA Th\u1EE7y",
  "B\xEDnh Th\xECn": "Sa Trung Th\u1ED5",
  "\u0110inh T\u1EF5": "Sa Trung Th\u1ED5",
  "M\u1EADu Ng\u1ECD": "Thi\xEAn Th\u01B0\u1EE3ng H\u1ECFa",
  "K\u1EF7 M\xF9i": "Thi\xEAn Th\u01B0\u1EE3ng H\u1ECFa",
  "Canh Th\xE2n": "Th\u1EA1ch L\u1EF1u M\u1ED9c",
  "T\xE2n D\u1EADu": "Th\u1EA1ch L\u1EF1u M\u1ED9c",
  "Nh\xE2m Tu\u1EA5t": "\u0110\u1EA1i H\u1EA3i Th\u1EE7y",
  "Qu\xFD H\u1EE3i": "\u0110\u1EA1i H\u1EA3i Th\u1EE7y"
};

// src/core/astronomy.js
var PI = Math.PI;
function INT(d) {
  return Math.floor(d);
}
function jdFromDate(dd, mm, yy) {
  const a = INT((14 - mm) / 12);
  const y = yy + 4800 - a;
  const m = mm + 12 * a - 3;
  let jd = dd + INT((153 * m + 2) / 5) + 365 * y + INT(y / 4) - INT(y / 100) + INT(y / 400) - 32045;
  if (jd < 2299161) {
    jd = dd + INT((153 * m + 2) / 5) + 365 * y + INT(y / 4) - 32083;
  }
  return jd;
}
function jdToDate(jd) {
  let a, b, c;
  if (jd > 2299160) {
    a = jd + 32044;
    b = INT((4 * a + 3) / 146097);
    c = a - INT(b * 146097 / 4);
  } else {
    b = 0;
    c = jd + 32082;
  }
  const d = INT((4 * c + 3) / 1461);
  const e = c - INT(1461 * d / 4);
  const m = INT((5 * e + 2) / 153);
  const day = e - INT((153 * m + 2) / 5) + 1;
  const month = m + 3 - 12 * INT(m / 10);
  const year = b * 100 + d - 4800 + INT(m / 10);
  return { day, month, year };
}
function NewMoon(k) {
  const T = k / 1236.85;
  const T2 = T * T;
  const T3 = T2 * T;
  const dr = PI / 180;
  let Jd1 = 241502075933e-5 + 29.53058868 * k + 1178e-7 * T2 - 155e-9 * T3;
  Jd1 += 33e-5 * Math.sin((166.56 + 132.87 * T - 9173e-6 * T2) * dr);
  const M = 359.2242 + 29.10535608 * k - 333e-7 * T2 - 347e-8 * T3;
  const Mpr = 306.0253 + 385.81691806 * k + 0.0107306 * T2 + 1236e-8 * T3;
  const F = 21.2964 + 390.67050646 * k - 16528e-7 * T2 - 239e-8 * T3;
  let C1 = (0.1734 - 393e-6 * T) * Math.sin(M * dr) + 21e-4 * Math.sin(2 * dr * M);
  C1 = C1 - 0.4068 * Math.sin(Mpr * dr) + 0.0161 * Math.sin(dr * 2 * Mpr);
  C1 = C1 - 4e-4 * Math.sin(dr * 3 * Mpr);
  C1 = C1 + 0.0104 * Math.sin(dr * 2 * F) - 51e-4 * Math.sin(dr * (M + Mpr));
  C1 = C1 - 74e-4 * Math.sin(dr * (M - Mpr)) + 4e-4 * Math.sin(dr * (2 * F + M));
  C1 = C1 - 4e-4 * Math.sin(dr * (2 * F - M)) - 6e-4 * Math.sin(dr * (2 * F + Mpr));
  C1 = C1 + 1e-3 * Math.sin(dr * (2 * F - Mpr)) + 5e-4 * Math.sin(dr * (2 * Mpr + M));
  let deltat;
  if (T < -11) {
    deltat = 1e-3 + 839e-6 * T + 2261e-7 * T2 - 845e-8 * T3 - 81e-9 * T * T3;
  } else {
    deltat = -278e-6 + 265e-6 * T + 262e-6 * T2;
  }
  return Jd1 + C1 - deltat;
}
function SunLongitude(jdn) {
  const T = (jdn - 2451545) / 36525;
  const T2 = T * T;
  const dr = PI / 180;
  const M = 357.5291 + 35999.0503 * T - 1559e-7 * T2 - 48e-8 * T * T2;
  const L0 = 280.46645 + 36000.76983 * T + 3032e-7 * T2;
  let DL = (1.9146 - 4817e-6 * T - 14e-7 * T2) * Math.sin(dr * M);
  DL += (0.019993 - 101e-6 * T) * Math.sin(dr * 2 * M) + 29e-5 * Math.sin(dr * 3 * M);
  let L = (L0 + DL) * dr;
  L = L - PI * 2 * INT(L / (PI * 2));
  if (L < 0) L += PI * 2;
  return L;
}
function getSunLongitudeSector(dayNumber, timeZone) {
  return INT(SunLongitude(dayNumber - 0.5 - timeZone / 24) / PI * 6);
}
function getSunLongitude24(dayNumber, timeZone) {
  return INT(SunLongitude(dayNumber - 0.5 - timeZone / 24) / PI * 12);
}
function getNewMoonDay(k, timeZone) {
  return INT(NewMoon(k) + 0.5 + timeZone / 24);
}
function getLunarMonth11(yy, timeZone) {
  const off = jdFromDate(31, 12, yy) - 2415021;
  const k = INT(off / 29.530588853);
  let nm = getNewMoonDay(k, timeZone);
  const sunLong = getSunLongitudeSector(nm, timeZone);
  if (sunLong >= 9) {
    nm = getNewMoonDay(k - 1, timeZone);
  }
  return nm;
}
function getLeapMonthOffset(a11, timeZone) {
  const k = INT((a11 - 2415021076998695e-9) / 29.530588853 + 0.5);
  let last = 0;
  let i = 1;
  let arc = getSunLongitudeSector(getNewMoonDay(k + i, timeZone), timeZone);
  do {
    last = arc;
    i++;
    arc = getSunLongitudeSector(getNewMoonDay(k + i, timeZone), timeZone);
  } while (arc !== last && i < 14);
  return i - 1;
}

// src/core/converter.js
function isSolarLeapYear(year) {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
function getDaysInSolarMonth(month, year) {
  return new Date(year, month, 0).getDate();
}
function getDayOfWeek(dd, mm, yy) {
  const jd = jdFromDate(dd, mm, yy);
  return (jd + 1) % 7;
}
function getDayOfWeekName(dd, mm, yy) {
  const dow = getDayOfWeek(dd, mm, yy);
  return THU[dow];
}
function getLeapMonthInYear(lunarYear, timeZone = DEFAULT_TIMEZONE) {
  const a11 = getLunarMonth11(lunarYear - 1, timeZone);
  const b11 = getLunarMonth11(lunarYear, timeZone);
  if (b11 - a11 > 365) {
    const leapOff = getLeapMonthOffset(a11, timeZone);
    let leapMonth = leapOff - 2;
    if (leapMonth < 0) {
      leapMonth += 12;
    }
    if (leapMonth === 0) leapMonth = 12;
    return leapMonth;
  }
  return 0;
}
function convertSolar2Lunar(dd, mm, yy, timeZone = DEFAULT_TIMEZONE) {
  const dayNumber = jdFromDate(dd, mm, yy);
  const k = INT((dayNumber - 2415021076998695e-9) / 29.530588853);
  let monthStart = getNewMoonDay(k + 1, timeZone);
  if (monthStart > dayNumber) {
    monthStart = getNewMoonDay(k, timeZone);
  }
  let a11 = getLunarMonth11(yy, timeZone);
  let b11 = a11;
  let lunarYear;
  if (a11 >= monthStart) {
    lunarYear = yy;
    a11 = getLunarMonth11(yy - 1, timeZone);
  } else {
    lunarYear = yy + 1;
    b11 = getLunarMonth11(yy + 1, timeZone);
  }
  const lunarDay = dayNumber - monthStart + 1;
  const diff = INT((monthStart - a11) / 29);
  let isLeapMonth = false;
  let lunarMonth = diff + 11;
  if (b11 - a11 > 365) {
    const leapMonthDiff = getLeapMonthOffset(a11, timeZone);
    if (diff >= leapMonthDiff) {
      lunarMonth = diff + 10;
      if (diff === leapMonthDiff) {
        isLeapMonth = true;
      }
    }
  }
  if (lunarMonth > 12) {
    lunarMonth = lunarMonth - 12;
  }
  if (lunarMonth >= 11 && diff < 4) {
    lunarYear -= 1;
  }
  return {
    day: lunarDay,
    month: lunarMonth,
    year: lunarYear,
    isLeapMonth,
    jd: dayNumber
  };
}
function convertLunar2Solar(lunarDay, lunarMonth, lunarYear, isLeapMonth = false, timeZone = DEFAULT_TIMEZONE) {
  let a11, b11;
  if (lunarMonth < 11) {
    a11 = getLunarMonth11(lunarYear - 1, timeZone);
    b11 = getLunarMonth11(lunarYear, timeZone);
  } else {
    a11 = getLunarMonth11(lunarYear, timeZone);
    b11 = getLunarMonth11(lunarYear + 1, timeZone);
  }
  const k = INT(0.5 + (a11 - 2415021076998695e-9) / 29.530588853);
  let off = lunarMonth - 11;
  if (off < 0) {
    off += 12;
  }
  if (b11 - a11 > 365) {
    const leapOff = getLeapMonthOffset(a11, timeZone);
    let leapMonth = leapOff - 2;
    if (leapMonth < 0) {
      leapMonth += 12;
    }
    if (isLeapMonth && lunarMonth !== leapMonth) {
      return null;
    } else if (isLeapMonth || off >= leapOff) {
      off += 1;
    }
  } else if (isLeapMonth) {
    return null;
  }
  const monthStart = getNewMoonDay(k + off, timeZone);
  const targetJd = monthStart + lunarDay - 1;
  const solar = jdToDate(targetJd);
  return {
    day: solar.day,
    month: solar.month,
    year: solar.year,
    jd: targetJd
  };
}
function getDaysInLunarMonth(lunarMonth, lunarYear, isLeapMonth = false, timeZone = DEFAULT_TIMEZONE) {
  const currentStart = convertLunar2Solar(1, lunarMonth, lunarYear, isLeapMonth, timeZone);
  if (!currentStart) return 0;
  const leapMonthInYear = getLeapMonthInYear(lunarYear, timeZone);
  let nextMonth = lunarMonth;
  let nextYear = lunarYear;
  let nextIsLeap = false;
  if (!isLeapMonth && leapMonthInYear === lunarMonth) {
    nextIsLeap = true;
  } else {
    if (lunarMonth === 12) {
      nextMonth = 1;
      nextYear = lunarYear + 1;
    } else {
      nextMonth = lunarMonth + 1;
    }
  }
  const nextStart = convertLunar2Solar(1, nextMonth, nextYear, nextIsLeap, timeZone);
  if (!nextStart) return 0;
  return nextStart.jd - currentStart.jd;
}
function getLunarMonthName(lunarMonth, isLeapMonth = false) {
  if (lunarMonth < 1 || lunarMonth > 12) return "";
  const baseName = `Th\xE1ng ${THANG_AM[lunarMonth - 1]}`;
  return isLeapMonth ? `${baseName} (nhu\u1EADn)` : baseName;
}

// src/sexagenary/canchi.js
function getYearCanChi(year) {
  const canIndex = (year + 6) % 10;
  const chiIndex = (year + 8) % 12;
  const can = CAN[canIndex];
  const chi = CHI[chiIndex];
  const full = `${can} ${chi}`;
  const conGiap = CON_GIAP[chiIndex];
  const napAm = NAP_AM_60[full] || "";
  return {
    can,
    chi,
    conGiap,
    full,
    napAm
  };
}
function getMonthCanChi(lunarMonth, lunarYear) {
  const canIndex = (lunarYear * 12 + lunarMonth + 3) % 10;
  const chiIndex = (lunarMonth + 1) % 12;
  const can = CAN[canIndex];
  const chi = CHI[chiIndex];
  return {
    can,
    chi,
    full: `${can} ${chi}`
  };
}
function getDayCanChi(dd, mm, yy) {
  const jd = jdFromDate(dd, mm, yy);
  const canIndex = (jd + 9) % 10;
  const chiIndex = (jd + 1) % 12;
  const can = CAN[canIndex];
  const chi = CHI[chiIndex];
  const full = `${can} ${chi}`;
  const napAm = NAP_AM_60[full] || "";
  return {
    can,
    chi,
    full,
    jd,
    napAm
  };
}
function getTyHourCanIndex(dayCanIndex) {
  return dayCanIndex % 5 * 2;
}
function getHourChiIndex(hour) {
  return Math.floor((hour + 1) % 24 / 2);
}
function getHourCanChi(hour, dd, mm, yy) {
  const jd = jdFromDate(dd, mm, yy);
  const dayCanIndex = (jd + 9) % 10;
  const chiIndex = getHourChiIndex(hour);
  const tyCanIndex = getTyHourCanIndex(dayCanIndex);
  const hourCanIndex = (tyCanIndex + chiIndex) % 10;
  const can = CAN[hourCanIndex];
  const chi = CHI[chiIndex];
  const khung = KHUNG_GIO_CHI[chiIndex];
  return {
    can,
    chi,
    full: `${can} ${chi}`,
    chiIndex,
    timeRange: `${khung.start} - ${khung.end}`
  };
}
function getAll12HoursCanChi(dd, mm, yy) {
  const jd = jdFromDate(dd, mm, yy);
  const dayCanIndex = (jd + 9) % 10;
  const tyCanIndex = getTyHourCanIndex(dayCanIndex);
  return CHI.map((chiName, chiIdx) => {
    const hourCanIndex = (tyCanIndex + chiIdx) % 10;
    const canName = CAN[hourCanIndex];
    const khung = KHUNG_GIO_CHI[chiIdx];
    return {
      can: canName,
      chi: chiName,
      full: `${canName} ${chiName}`,
      chiIndex: chiIdx,
      timeRange: `${khung.start} - ${khung.end}`,
      startHour: khung.startHour,
      endHour: khung.endHour
    };
  });
}
function getNapAm(can, chi) {
  return NAP_AM_60[`${can} ${chi}`] || "";
}
function getConGiap(chi) {
  const idx = CHI.indexOf(chi);
  return idx >= 0 ? CON_GIAP[idx] : "";
}

// src/astrology/solar-terms.js
function getSolarTerm(dd, mm, yy, timeZone = DEFAULT_TIMEZONE) {
  const jd = jdFromDate(dd, mm, yy);
  const termIndex = getSunLongitude24(jd, timeZone);
  const term = TIET_KHI[termIndex];
  const rad = SunLongitude(jd - 0.5 - timeZone / 24);
  const deg = rad * 180 / Math.PI;
  return {
    id: term.id,
    name: term.name,
    index: termIndex,
    degree: term.degree,
    approximateDate: term.approximateDate,
    longitudeDegrees: Math.round(deg * 100) / 100
  };
}
function getSolarTermsOfYear(year, timeZone = DEFAULT_TIMEZONE) {
  const results = [];
  const startJd = jdFromDate(1, 1, year);
  const endJd = jdFromDate(31, 12, year);
  let prevTerm = getSunLongitude24(startJd, timeZone);
  for (let jd = startJd + 1; jd <= endJd; jd++) {
    const curTerm = getSunLongitude24(jd, timeZone);
    if (curTerm !== prevTerm) {
      const date = jdToDate(jd);
      const termInfo = TIET_KHI[curTerm];
      results.push({
        id: termInfo.id,
        name: termInfo.name,
        degree: termInfo.degree,
        day: date.day,
        month: date.month,
        year: date.year
      });
      prevTerm = curTerm;
    }
  }
  return results;
}

// src/astrology/auspicious.js
function getAuspiciousHours(dd, mm, yy) {
  const jd = jdFromDate(dd, mm, yy);
  const chiOfDay = (jd + 1) % 12;
  const bits = GIO_HOANG_DAO_BITS[chiOfDay % 6];
  return CHI.map((chiName, i) => {
    const isAuspicious = bits.charAt(i) === "1";
    const khung = KHUNG_GIO_CHI[i];
    const hourInfo = getHourCanChi(khung.startHour, dd, mm, yy);
    return {
      chiIndex: i,
      chi: chiName,
      can: hourInfo.can,
      full: hourInfo.full,
      isAuspicious,
      type: isAuspicious ? "Ho\xE0ng \u0111\u1EA1o" : "H\u1EAFc \u0111\u1EA1o",
      timeRange: `${khung.start} - ${khung.end}`,
      startHour: khung.startHour,
      endHour: khung.endHour
    };
  });
}
function isHourAuspicious(hour, dd, mm, yy) {
  const jd = jdFromDate(dd, mm, yy);
  const chiOfDay = (jd + 1) % 12;
  const bits = GIO_HOANG_DAO_BITS[chiOfDay % 6];
  const chiIdx = getHourChiIndex(hour);
  return bits.charAt(chiIdx) === "1";
}
function getAuspiciousHoursSummary(dd, mm, yy) {
  const hours = getAuspiciousHours(dd, mm, yy);
  return hours.filter((h) => h.isAuspicious).map((h) => `${h.chi} (${(h.chiIndex * 2 + 23) % 24}-${(h.chiIndex * 2 + 1) % 24})`).join(", ");
}

// src/holidays/data.js
var SOLAR_HOLIDAYS = [
  { id: "new_year", month: 1, day: 1, name: "T\u1EBFt D\u01B0\u01A1ng l\u1ECBch", type: "public", official: true, tags: ["holiday", "global"] },
  { id: "party_founding", month: 2, day: 3, name: "Ng\xE0y th\xE0nh l\u1EADp \u0110\u1EA3ng CSVN", type: "commemorative", official: false, tags: ["national"] },
  { id: "valentine", month: 2, day: 14, name: "L\u1EC5 t\xECnh nh\xE2n (Valentine)", type: "commemorative", official: false, tags: ["social", "global"] },
  { id: "doctor_day", month: 2, day: 27, name: "Ng\xE0y Th\u1EA7y thu\u1ED1c Vi\u1EC7t Nam", type: "commemorative", official: false, tags: ["social"] },
  { id: "women_intl", month: 3, day: 8, name: "Ng\xE0y Qu\u1ED1c t\u1EBF Ph\u1EE5 n\u1EEF", type: "commemorative", official: false, tags: ["social", "global"] },
  { id: "youth_union", month: 3, day: 26, name: "Ng\xE0y th\xE0nh l\u1EADp \u0110o\xE0n TNCS HCM", type: "commemorative", official: false, tags: ["national"] },
  { id: "earth_day", month: 4, day: 22, name: "Ng\xE0y Tr\xE1i \u0110\u1EA5t", type: "commemorative", official: false, tags: ["global"] },
  { id: "ip_day", month: 4, day: 26, name: "Ng\xE0y S\u1EDF h\u1EEFu tr\xED tu\u1EC7 th\u1EBF gi\u1EDBi", type: "commemorative", official: false, tags: ["global"] },
  { id: "reunification_day", month: 4, day: 30, name: "Ng\xE0y Gi\u1EA3i ph\xF3ng mi\u1EC1n Nam", type: "public", official: true, tags: ["national", "holiday"] },
  { id: "labor_day", month: 5, day: 1, name: "Ng\xE0y Qu\u1ED1c t\u1EBF Lao \u0111\u1ED9ng", type: "public", official: true, tags: ["holiday", "global"] },
  { id: "dien_bien_phu", month: 5, day: 7, name: "Chi\u1EBFn th\u1EAFng \u0110i\u1EC7n Bi\xEAn Ph\u1EE7", type: "commemorative", official: false, tags: ["national"] },
  { id: "hcm_birthday", month: 5, day: 19, name: "Ng\xE0y sinh Ch\u1EE7 t\u1ECBch H\u1ED3 Ch\xED Minh", type: "commemorative", official: false, tags: ["national"] },
  { id: "children_day", month: 6, day: 1, name: "Ng\xE0y Qu\u1ED1c t\u1EBF Thi\u1EBFu nhi", type: "commemorative", official: false, tags: ["social", "global"] },
  { id: "family_day", month: 6, day: 28, name: "Ng\xE0y Gia \u0111\xECnh Vi\u1EC7t Nam", type: "commemorative", official: false, tags: ["social"] },
  { id: "veterans_day", month: 7, day: 27, name: "Ng\xE0y Th\u01B0\u01A1ng binh Li\u1EC7t s\u0129", type: "commemorative", official: false, tags: ["national"] },
  { id: "august_revolution", month: 8, day: 19, name: "C\xE1ch m\u1EA1ng Th\xE1ng T\xE1m", type: "commemorative", official: false, tags: ["national"] },
  { id: "independence_day", month: 9, day: 2, name: "Qu\u1ED1c kh\xE1nh Vi\u1EC7t Nam", type: "public", official: true, tags: ["national", "holiday"] },
  { id: "hanoi_liberation", month: 10, day: 10, name: "Ng\xE0y Gi\u1EA3i ph\xF3ng Th\u1EE7 \u0111\xF4", type: "commemorative", official: false, tags: ["national"] },
  { id: "women_vn", month: 10, day: 20, name: "Ng\xE0y Ph\u1EE5 n\u1EEF Vi\u1EC7t Nam", type: "commemorative", official: false, tags: ["social"] },
  { id: "teachers_day", month: 11, day: 20, name: "Ng\xE0y Nh\xE0 gi\xE1o Vi\u1EC7t Nam", type: "commemorative", official: false, tags: ["education"] },
  { id: "army_day", month: 12, day: 22, name: "Ng\xE0y th\xE0nh l\u1EADp Q\u0110NDVN", type: "commemorative", official: false, tags: ["national"] },
  { id: "christmas_eve", month: 12, day: 24, name: "\u0110\xEAm Gi\xE1ng sinh (Noel)", type: "commemorative", official: false, tags: ["social", "global"] },
  { id: "christmas", month: 12, day: 25, name: "Gi\xE1ng sinh (Noel)", type: "commemorative", official: false, tags: ["social", "global"] }
];
var LUNAR_HOLIDAYS = [
  { id: "tet_nguyen_dan", lunarMonth: 1, lunarDay: 1, name: "T\u1EBFt Nguy\xEAn \u0110\xE1n (M\xF9ng 1)", type: "public", official: true, tags: ["holiday", "lunar"] },
  { id: "m2_tet", lunarMonth: 1, lunarDay: 2, name: "M\xF9ng 2 T\u1EBFt", type: "public", official: true, tags: ["holiday", "lunar"] },
  { id: "m3_tet", lunarMonth: 1, lunarDay: 3, name: "M\xF9ng 3 T\u1EBFt", type: "public", official: true, tags: ["holiday", "lunar"] },
  { id: "m4_tet", lunarMonth: 1, lunarDay: 4, name: "M\xF9ng 4 T\u1EBFt", type: "traditional", official: false, tags: ["folk", "lunar"] },
  { id: "m5_tet", lunarMonth: 1, lunarDay: 5, name: "M\xF9ng 5 T\u1EBFt", type: "traditional", official: false, tags: ["folk", "lunar"] },
  { id: "via_than_tai", lunarMonth: 1, lunarDay: 10, name: "V\xEDa Th\u1EA7n T\xE0i", type: "traditional", official: false, tags: ["folk", "lunar"] },
  { id: "ram_thang_gieng", lunarMonth: 1, lunarDay: 15, name: "T\u1EBFt Nguy\xEAn Ti\xEAu (R\u1EB1m th\xE1ng Gi\xEAng)", type: "traditional", official: false, tags: ["buddhist", "lunar"] },
  { id: "via_quan_am_2", lunarMonth: 2, lunarDay: 19, name: "V\xEDa Quan Th\u1EBF \xC2m B\u1ED3 T\xE1t", type: "buddhist", official: false, tags: ["buddhist", "lunar"] },
  { id: "tet_han_thuc", lunarMonth: 3, lunarDay: 3, name: "T\u1EBFt H\xE0n th\u1EF1c", type: "traditional", official: false, tags: ["folk", "lunar"] },
  { id: "hung_kings", lunarMonth: 3, lunarDay: 10, name: "Gi\u1ED7 T\u1ED5 H\xF9ng V\u01B0\u01A1ng", type: "public", official: true, tags: ["national", "holiday", "lunar"] },
  { id: "phat_dan", lunarMonth: 4, lunarDay: 15, name: "L\u1EC5 Ph\u1EADt \u0110\u1EA3n (Vesak)", type: "buddhist", official: false, tags: ["buddhist", "lunar"] },
  { id: "tet_doan_ngo", lunarMonth: 5, lunarDay: 5, name: "T\u1EBFt \u0110oan Ng\u1ECD", type: "traditional", official: false, tags: ["folk", "lunar"] },
  { id: "via_quan_am_6", lunarMonth: 6, lunarDay: 19, name: "V\xEDa Quan Th\u1EBF \xC2m B\u1ED3 T\xE1t", type: "buddhist", official: false, tags: ["buddhist", "lunar"] },
  { id: "vu_lan", lunarMonth: 7, lunarDay: 15, name: "L\u1EC5 Vu Lan B\xE1o Hi\u1EBFu (R\u1EB1m th\xE1ng B\u1EA3y)", type: "traditional", official: false, tags: ["buddhist", "folk", "lunar"] },
  { id: "trung_thu", lunarMonth: 8, lunarDay: 15, name: "T\u1EBFt Trung Thu (R\u1EB1m th\xE1ng T\xE1m)", type: "traditional", official: false, tags: ["folk", "lunar"] },
  { id: "tet_trung_cuu", lunarMonth: 9, lunarDay: 9, name: "T\u1EBFt Tr\xF9ng C\u1EEDu", type: "traditional", official: false, tags: ["folk", "lunar"] },
  { id: "via_quan_am_9", lunarMonth: 9, lunarDay: 19, name: "V\xEDa Quan Th\u1EBF \xC2m B\u1ED3 T\xE1t", type: "buddhist", official: false, tags: ["buddhist", "lunar"] },
  { id: "via_phat_a_di_da", lunarMonth: 11, lunarDay: 17, name: "V\xEDa Ph\u1EADt A Di \u0110\xE0", type: "buddhist", official: false, tags: ["buddhist", "lunar"] },
  { id: "ong_cong_ong_tao", lunarMonth: 12, lunarDay: 23, name: "T\u1EBFt \xD4ng C\xF4ng \xD4ng T\xE1o", type: "traditional", official: false, tags: ["folk", "lunar"] },
  { id: "tat_nien_29", lunarMonth: 12, lunarDay: 29, name: "29 T\u1EBFt (T\u1EA5t ni\xEAn)", type: "traditional", official: false, tags: ["folk", "lunar"] },
  { id: "tat_nien_30", lunarMonth: 12, lunarDay: 30, name: "Giao Th\u1EEBa (30 T\u1EBFt)", type: "public", official: true, tags: ["holiday", "lunar"] }
];
var HOLIDAY_TYPE_EMOJI = {
  public: "\u{1F534}",
  commemorative: "\u{1F535}",
  traditional: "\u{1F7E1}",
  buddhist: "\u2638\uFE0F"
};
var HOLIDAY_TYPE_LABEL = {
  public: "Ngh\u1EC9 l\u1EC5",
  commemorative: "K\u1EF7 ni\u1EC7m",
  traditional: "Truy\u1EC1n th\u1ED1ng",
  buddhist: "Ph\u1EADt gi\xE1o"
};

// src/holidays/lookup.js
var solarMap = /* @__PURE__ */ new Map();
SOLAR_HOLIDAYS.forEach((h) => {
  const key = `${h.month}-${h.day}`;
  if (!solarMap.has(key)) solarMap.set(key, []);
  solarMap.get(key).push(h);
});
var lunarMap = /* @__PURE__ */ new Map();
LUNAR_HOLIDAYS.forEach((h) => {
  const key = `${h.lunarMonth}-${h.lunarDay}`;
  if (!lunarMap.has(key)) lunarMap.set(key, []);
  lunarMap.get(key).push(h);
});
function getHolidaysBySolarDate(month, day) {
  return solarMap.get(`${month}-${day}`) || [];
}
function getHolidaysByLunarDate(lunarMonth, lunarDay) {
  return lunarMap.get(`${lunarMonth}-${lunarDay}`) || [];
}
function getHolidaysForDate(solarDay, solarMonth, solarYear, timeZone = DEFAULT_TIMEZONE) {
  const results = [];
  const solarHolidays = getHolidaysBySolarDate(solarMonth, solarDay);
  solarHolidays.forEach((h) => {
    results.push({
      ...h,
      calendarType: "solar",
      emoji: HOLIDAY_TYPE_EMOJI[h.type] || "\u{1F4CC}",
      typeLabel: HOLIDAY_TYPE_LABEL[h.type] || "Kh\xE1c"
    });
  });
  const lunar = convertSolar2Lunar(solarDay, solarMonth, solarYear, timeZone);
  const lunarHolidays = getHolidaysByLunarDate(lunar.month, lunar.day);
  lunarHolidays.forEach((h) => {
    results.push({
      ...h,
      calendarType: "lunar",
      lunarInfo: `${lunar.day}/${lunar.month}${lunar.isLeapMonth ? " nhu\u1EADn" : ""} \xC2L`,
      emoji: HOLIDAY_TYPE_EMOJI[h.type] || "\u{1F4CC}",
      typeLabel: HOLIDAY_TYPE_LABEL[h.type] || "Kh\xE1c"
    });
  });
  return results;
}
function isPublicHoliday(solarDay, solarMonth, solarYear, timeZone = DEFAULT_TIMEZONE) {
  const holidays = getHolidaysForDate(solarDay, solarMonth, solarYear, timeZone);
  return holidays.some((h) => h.official === true);
}
function getHolidaysInSolarMonth(month, year, timeZone = DEFAULT_TIMEZONE) {
  const daysInMonth = getDaysInSolarMonth(month, year);
  const results = [];
  for (let d = 1; d <= daysInMonth; d++) {
    const holidays = getHolidaysForDate(d, month, year, timeZone);
    if (holidays.length > 0) {
      results.push({
        day: d,
        month,
        year,
        holidays
      });
    }
  }
  return results;
}
function getHolidaysInLunarMonth(lunarMonth, lunarYear) {
  const results = [];
  LUNAR_HOLIDAYS.forEach((h) => {
    if (h.lunarMonth === lunarMonth) {
      results.push({
        ...h,
        lunarYear,
        emoji: HOLIDAY_TYPE_EMOJI[h.type] || "\u{1F4CC}",
        typeLabel: HOLIDAY_TYPE_LABEL[h.type] || "Kh\xE1c"
      });
    }
  });
  return results;
}
function getPublicHolidaysInYear(solarYear, timeZone = DEFAULT_TIMEZONE) {
  const list = [];
  list.push({
    id: "new_year",
    name: "T\u1EBFt D\u01B0\u01A1ng l\u1ECBch",
    day: 1,
    month: 1,
    year: solarYear,
    origin: "D\u01B0\u01A1ng l\u1ECBch 01/01"
  });
  list.push({
    id: "reunification_day",
    name: "Ng\xE0y Gi\u1EA3i ph\xF3ng mi\u1EC1n Nam",
    day: 30,
    month: 4,
    year: solarYear,
    origin: "D\u01B0\u01A1ng l\u1ECBch 30/04"
  });
  list.push({
    id: "labor_day",
    name: "Ng\xE0y Qu\u1ED1c t\u1EBF Lao \u0111\u1ED9ng",
    day: 1,
    month: 5,
    year: solarYear,
    origin: "D\u01B0\u01A1ng l\u1ECBch 01/05"
  });
  list.push({
    id: "independence_day",
    name: "Qu\u1ED1c kh\xE1nh Vi\u1EC7t Nam",
    day: 2,
    month: 9,
    year: solarYear,
    origin: "D\u01B0\u01A1ng l\u1ECBch 02/09"
  });
  const hungKings = convertLunar2Solar(10, 3, solarYear, false, timeZone);
  if (hungKings && hungKings.year === solarYear) {
    list.push({
      id: "hung_kings",
      name: "Gi\u1ED7 T\u1ED5 H\xF9ng V\u01B0\u01A1ng",
      day: hungKings.day,
      month: hungKings.month,
      year: hungKings.year,
      origin: "\xC2m l\u1ECBch 10/03"
    });
  }
  for (let m = 1; m <= 3; m++) {
    const tetDay = convertLunar2Solar(m, 1, solarYear, false, timeZone);
    if (tetDay && tetDay.year === solarYear) {
      list.push({
        id: `tet_m${m}`,
        name: m === 1 ? "M\xF9ng 1 T\u1EBFt Nguy\xEAn \u0110\xE1n" : `M\xF9ng ${m} T\u1EBFt`,
        day: tetDay.day,
        month: tetDay.month,
        year: tetDay.year,
        origin: `\xC2m l\u1ECBch 0${m}/01`
      });
    }
  }
  list.sort((a, b) => {
    if (a.month !== b.month) return a.month - b.month;
    return a.day - b.day;
  });
  return list;
}
function getHolidayEmoji(type) {
  return HOLIDAY_TYPE_EMOJI[type] || "\u{1F4CC}";
}
function getHolidayTypeLabel(type) {
  return HOLIDAY_TYPE_LABEL[type] || "Kh\xE1c";
}

// src/calendar/month-grid.js
function getLunarDateInfo(dd, mm, yy, timeZone = DEFAULT_TIMEZONE) {
  const lunar = convertSolar2Lunar(dd, mm, yy, timeZone);
  const dayOfWeek = getDayOfWeek(dd, mm, yy);
  const dayOfWeekName = getDayOfWeekName(dd, mm, yy);
  const yearCanChi = getYearCanChi(lunar.year);
  const monthCanChi = getMonthCanChi(lunar.month, lunar.year);
  const dayCanChi = getDayCanChi(dd, mm, yy);
  const solarTerm = getSolarTerm(dd, mm, yy, timeZone);
  const auspiciousHours = getAuspiciousHours(dd, mm, yy);
  const auspiciousSummary = getAuspiciousHoursSummary(dd, mm, yy);
  const holidays = getHolidaysForDate(dd, mm, yy, timeZone);
  const publicHoliday = isPublicHoliday(dd, mm, yy, timeZone);
  const leapMonthInYear = getLeapMonthInYear(lunar.year, timeZone);
  return {
    solar: {
      day: dd,
      month: mm,
      year: yy,
      dayOfWeek,
      dayOfWeekName
    },
    lunar: {
      day: lunar.day,
      month: lunar.month,
      year: lunar.year,
      isLeapMonth: lunar.isLeapMonth,
      monthName: getLunarMonthName(lunar.month, lunar.isLeapMonth),
      leapMonthInYear,
      hasLeapMonth: leapMonthInYear > 0
    },
    canChi: {
      year: yearCanChi,
      month: monthCanChi,
      day: dayCanChi
    },
    astrology: {
      solarTerm,
      auspiciousHours,
      auspiciousSummary
    },
    holidays,
    isPublicHoliday: publicHoliday
  };
}
function getMonthCalendar(month, year, options = {}) {
  const { weekStartsOn = 1, timeZone = DEFAULT_TIMEZONE } = options;
  const totalDays = getDaysInSolarMonth(month, year);
  const firstDayDow = getDayOfWeek(1, month, year);
  let leadDays = (firstDayDow - weekStartsOn + 7) % 7;
  const prevMonth = month === 1 ? 12 : month - 1;
  const prevYear = month === 1 ? year - 1 : year;
  const prevMonthDays = getDaysInSolarMonth(prevMonth, prevYear);
  const days = [];
  for (let i = leadDays - 1; i >= 0; i--) {
    const d = prevMonthDays - i;
    days.push(createCalendarDay(d, prevMonth, prevYear, false, timeZone));
  }
  for (let d = 1; d <= totalDays; d++) {
    days.push(createCalendarDay(d, month, year, true, timeZone));
  }
  const remainingCells = (7 - days.length % 7) % 7;
  const nextMonth = month === 12 ? 1 : month + 1;
  const nextYear = month === 12 ? year + 1 : year;
  for (let d = 1; d <= remainingCells; d++) {
    days.push(createCalendarDay(d, nextMonth, nextYear, false, timeZone));
  }
  const weeks = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }
  return {
    month,
    year,
    totalDays,
    weeksCount: weeks.length,
    weekStartsOn,
    weeks
  };
}
function createCalendarDay(day, month, year, isCurrentMonth, timeZone) {
  const lunar = convertSolar2Lunar(day, month, year, timeZone);
  const dayOfWeek = getDayOfWeek(day, month, year);
  const holidays = getHolidaysForDate(day, month, year, timeZone);
  const isHoliday = holidays.some((h) => h.official);
  return {
    solarDay: day,
    solarMonth: month,
    solarYear: year,
    isCurrentMonth,
    dayOfWeek,
    dayOfWeekName: THU[dayOfWeek],
    lunarDay: lunar.day,
    lunarMonth: lunar.month,
    lunarYear: lunar.year,
    isLeapMonth: lunar.isLeapMonth,
    lunarText: `${lunar.day}/${lunar.month}${lunar.isLeapMonth ? "N" : ""}`,
    isPublicHoliday: isHoliday,
    holidays
  };
}

// src/format/formatter.js
function padZero(n, width = 2) {
  return String(n).padStart(width, "0");
}
function formatLunarDate(lunar, pattern = "DD/MM/yyyy") {
  if (!lunar) return "";
  const { day, month, year, isLeapMonth = false } = lunar;
  const yearCanChi = getYearCanChi(year);
  const monthName = getLunarMonthName(month, isLeapMonth);
  return pattern.replace(/YYYY/g, yearCanChi.full).replace(/yyyy/g, String(year)).replace(/MMMM/g, monthName).replace(/MM/g, padZero(month)).replace(/\bM\b/g, String(month)).replace(/DD/g, padZero(day)).replace(/\bD\b/g, String(day)).replace(/W/g, yearCanChi.conGiap).replace(/N/g, isLeapMonth ? " (nhu\u1EADn)" : "");
}
function formatFullDateString(dd, mm, yy, timeZone = DEFAULT_TIMEZONE) {
  const lunar = convertSolar2Lunar(dd, mm, yy, timeZone);
  const dowName = getDayOfWeekName(dd, mm, yy);
  const yearCanChi = getYearCanChi(lunar.year);
  const dayPrefix = lunar.day <= 10 ? `M\xF9ng ${lunar.day}` : `Ng\xE0y ${lunar.day}`;
  const monthStr = getLunarMonthName(lunar.month, lunar.isLeapMonth).toLowerCase();
  return `${dowName}, ${padZero(dd)}/${padZero(mm)}/${yy} D\u01B0\u01A1ng l\u1ECBch - ${dayPrefix} ${monthStr} n\u0103m ${yearCanChi.full} (${yearCanChi.conGiap})`;
}
export {
  CAN,
  CHI,
  CON_GIAP,
  DEFAULT_TIMEZONE,
  GIO_HOANG_DAO_BITS,
  HOLIDAY_TYPE_EMOJI,
  HOLIDAY_TYPE_LABEL,
  INT,
  KHUNG_GIO_CHI,
  LUNAR_HOLIDAYS,
  NAP_AM_60,
  NewMoon,
  SOLAR_HOLIDAYS,
  SunLongitude,
  THANG_AM,
  THAN_SAT_GIO,
  THU,
  THU_NGAN,
  TIET_KHI,
  convertLunar2Solar,
  convertSolar2Lunar,
  formatFullDateString,
  formatLunarDate,
  getAll12HoursCanChi,
  getAuspiciousHours,
  getAuspiciousHoursSummary,
  getConGiap,
  getDayCanChi,
  getDayOfWeek,
  getDayOfWeekName,
  getDaysInLunarMonth,
  getDaysInSolarMonth,
  getHolidayEmoji,
  getHolidayTypeLabel,
  getHolidaysByLunarDate,
  getHolidaysBySolarDate,
  getHolidaysForDate,
  getHolidaysInLunarMonth,
  getHolidaysInSolarMonth,
  getHourCanChi,
  getHourChiIndex,
  getLeapMonthInYear,
  getLeapMonthOffset,
  getLunarDateInfo,
  getLunarMonth11,
  getLunarMonthName,
  getMonthCalendar,
  getMonthCanChi,
  getNapAm,
  getNewMoonDay,
  getPublicHolidaysInYear,
  getSolarTerm,
  getSolarTermsOfYear,
  getSunLongitude24,
  getSunLongitudeSector,
  getTyHourCanIndex,
  getYearCanChi,
  isHourAuspicious,
  isPublicHoliday,
  isSolarLeapYear,
  jdFromDate,
  jdToDate,
  padZero
};
/**
 * Vietnamese Lunar Calendar Library
 * The most comprehensive and accurate Vietnamese Lunar Calendar package for Node.js and browsers.
 *
 * @license MIT
 * @copyright 2026 Chonoi & Contributors
 */
//# sourceMappingURL=index.mjs.map
