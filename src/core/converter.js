/**
 * Vietnamese Lunar Calendar - Date Converter & Month Utilities
 * Provides conversion between Gregorian (Solar) and Vietnamese Lunar calendar,
 * leap month detection, and month day counts.
 */

import { DEFAULT_TIMEZONE, THU, THANG_AM } from './constants.js';
import {
  INT,
  jdFromDate,
  jdToDate,
  getNewMoonDay,
  getLunarMonth11,
  getLeapMonthOffset
} from './astronomy.js';

/**
 * Check if a solar year is a leap year (Gregorian)
 * @param {number} year
 * @returns {boolean}
 */
export function isSolarLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

/**
 * Get number of days in a solar month
 * @param {number} month - Month (1-12)
 * @param {number} year - Year
 * @returns {number} 28, 29, 30, or 31
 */
export function getDaysInSolarMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

/**
 * Get day of week index (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
 * @param {number} dd - Solar day
 * @param {number} mm - Solar month
 * @param {number} yy - Solar year
 * @returns {number} 0-6
 */
export function getDayOfWeek(dd, mm, yy) {
  const jd = jdFromDate(dd, mm, yy);
  return (jd + 1) % 7;
}

/**
 * Get localized Vietnamese day of week name
 * @param {number} dd
 * @param {number} mm
 * @param {number} yy
 * @returns {string} e.g. "Chủ Nhật", "Thứ Hai", ...
 */
export function getDayOfWeekName(dd, mm, yy) {
  const dow = getDayOfWeek(dd, mm, yy);
  return THU[dow];
}

/**
 * Check which lunar month is a leap month in a given lunar year.
 * Returns 0 if the year has no leap month.
 *
 * @param {number} lunarYear - Lunar year
 * @param {number} [timeZone=DEFAULT_TIMEZONE]
 * @returns {number} Leap month number (1-12) or 0
 */
export function getLeapMonthInYear(lunarYear, timeZone = DEFAULT_TIMEZONE) {
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

/**
 * Convert solar (Gregorian) date to Vietnamese lunar date
 *
 * @param {number} dd - Solar day (1-31)
 * @param {number} mm - Solar month (1-12)
 * @param {number} yy - Solar year (e.g. 2026)
 * @param {number} [timeZone=DEFAULT_TIMEZONE] - Timezone offset in hours (default 7.0)
 * @returns {{ day: number, month: number, year: number, isLeapMonth: boolean, jd: number }}
 */
export function convertSolar2Lunar(dd, mm, yy, timeZone = DEFAULT_TIMEZONE) {
  const dayNumber = jdFromDate(dd, mm, yy);
  const k = INT((dayNumber - 2415021.076998695) / 29.530588853);
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

/**
 * Convert Vietnamese lunar date to solar (Gregorian) date
 *
 * @param {number} lunarDay - Lunar day (1-30)
 * @param {number} lunarMonth - Lunar month (1-12)
 * @param {number} lunarYear - Lunar year
 * @param {boolean} [isLeapMonth=false] - Whether the month is a leap month
 * @param {number} [timeZone=DEFAULT_TIMEZONE] - Timezone offset in hours
 * @returns {{ day: number, month: number, year: number, jd: number } | null} Solar date or null if invalid
 */
export function convertLunar2Solar(lunarDay, lunarMonth, lunarYear, isLeapMonth = false, timeZone = DEFAULT_TIMEZONE) {
  let a11, b11;
  if (lunarMonth < 11) {
    a11 = getLunarMonth11(lunarYear - 1, timeZone);
    b11 = getLunarMonth11(lunarYear, timeZone);
  } else {
    a11 = getLunarMonth11(lunarYear, timeZone);
    b11 = getLunarMonth11(lunarYear + 1, timeZone);
  }

  const k = INT(0.5 + (a11 - 2415021.076998695) / 29.530588853);
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
      return null; // Invalid leap month requested
    } else if (isLeapMonth || off >= leapOff) {
      off += 1;
    }
  } else if (isLeapMonth) {
    return null; // Year has no leap month
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

/**
 * Get number of days in a lunar month (29 or 30 days)
 *
 * @param {number} lunarMonth - Lunar month (1-12)
 * @param {number} lunarYear - Lunar year
 * @param {boolean} [isLeapMonth=false] - Whether it is a leap month
 * @param {number} [timeZone=DEFAULT_TIMEZONE]
 * @returns {number} 29 (tháng thiếu) or 30 (tháng đủ), or 0 if invalid
 */
export function getDaysInLunarMonth(lunarMonth, lunarYear, isLeapMonth = false, timeZone = DEFAULT_TIMEZONE) {
  const currentStart = convertLunar2Solar(1, lunarMonth, lunarYear, isLeapMonth, timeZone);
  if (!currentStart) return 0;

  const leapMonthInYear = getLeapMonthInYear(lunarYear, timeZone);

  let nextMonth = lunarMonth;
  let nextYear = lunarYear;
  let nextIsLeap = false;

  if (!isLeapMonth && leapMonthInYear === lunarMonth) {
    // Next month is the leap month of same number
    nextIsLeap = true;
  } else {
    // Regular advance to next month
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

/**
 * Get traditional Vietnamese lunar month name
 * e.g. "Tháng Giêng", "Tháng Chạp", "Tháng Bảy nhuận"
 *
 * @param {number} lunarMonth (1-12)
 * @param {boolean} [isLeapMonth=false]
 * @returns {string}
 */
export function getLunarMonthName(lunarMonth, isLeapMonth = false) {
  if (lunarMonth < 1 || lunarMonth > 12) return '';
  const baseName = `Tháng ${THANG_AM[lunarMonth - 1]}`;
  return isLeapMonth ? `${baseName} (nhuận)` : baseName;
}
