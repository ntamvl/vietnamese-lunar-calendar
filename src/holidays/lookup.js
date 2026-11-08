/**
 * Vietnamese Lunar Calendar - Holidays Lookup Service
 * Provides queries for holidays by date, month, and year,
 * including official public holidays with solar/lunar conversions.
 */

import { SOLAR_HOLIDAYS, LUNAR_HOLIDAYS, HOLIDAY_TYPE_EMOJI, HOLIDAY_TYPE_LABEL } from './data.js';
import { convertSolar2Lunar, convertLunar2Solar, getDaysInSolarMonth } from '../core/converter.js';
import { DEFAULT_TIMEZONE } from '../core/constants.js';

// Pre-build O(1) hash maps
const solarMap = new Map();
SOLAR_HOLIDAYS.forEach(h => {
  const key = `${h.month}-${h.day}`;
  if (!solarMap.has(key)) solarMap.set(key, []);
  solarMap.get(key).push(h);
});

const lunarMap = new Map();
LUNAR_HOLIDAYS.forEach(h => {
  const key = `${h.lunarMonth}-${h.lunarDay}`;
  if (!lunarMap.has(key)) lunarMap.set(key, []);
  lunarMap.get(key).push(h);
});

/**
 * Get solar holidays for a given month and day
 * @param {number} month (1-12)
 * @param {number} day (1-31)
 * @returns {Array}
 */
export function getHolidaysBySolarDate(month, day) {
  return solarMap.get(`${month}-${day}`) || [];
}

/**
 * Get lunar holidays for a given lunar month and lunar day
 * @param {number} lunarMonth (1-12)
 * @param {number} lunarDay (1-30)
 * @returns {Array}
 */
export function getHolidaysByLunarDate(lunarMonth, lunarDay) {
  return lunarMap.get(`${lunarMonth}-${lunarDay}`) || [];
}

/**
 * Get all holidays (solar + lunar) matching a specific solar date
 *
 * @param {number} solarDay - Day of month (1-31)
 * @param {number} solarMonth - Month (1-12)
 * @param {number} solarYear - Year
 * @param {number} [timeZone=DEFAULT_TIMEZONE]
 * @returns {Array<Object>}
 */
export function getHolidaysForDate(solarDay, solarMonth, solarYear, timeZone = DEFAULT_TIMEZONE) {
  const results = [];

  // 1. Solar holidays
  const solarHolidays = getHolidaysBySolarDate(solarMonth, solarDay);
  solarHolidays.forEach(h => {
    results.push({
      ...h,
      calendarType: 'solar',
      emoji: HOLIDAY_TYPE_EMOJI[h.type] || '📌',
      typeLabel: HOLIDAY_TYPE_LABEL[h.type] || 'Khác'
    });
  });

  // 2. Lunar holidays
  const lunar = convertSolar2Lunar(solarDay, solarMonth, solarYear, timeZone);
  const lunarHolidays = getHolidaysByLunarDate(lunar.month, lunar.day);
  lunarHolidays.forEach(h => {
    results.push({
      ...h,
      calendarType: 'lunar',
      lunarInfo: `${lunar.day}/${lunar.month}${lunar.isLeapMonth ? ' nhuận' : ''} ÂL`,
      emoji: HOLIDAY_TYPE_EMOJI[h.type] || '📌',
      typeLabel: HOLIDAY_TYPE_LABEL[h.type] || 'Khác'
    });
  });

  return results;
}

/**
 * Check if a given solar date is an official Vietnamese public holiday
 *
 * @param {number} solarDay
 * @param {number} solarMonth
 * @param {number} solarYear
 * @param {number} [timeZone=DEFAULT_TIMEZONE]
 * @returns {boolean}
 */
export function isPublicHoliday(solarDay, solarMonth, solarYear, timeZone = DEFAULT_TIMEZONE) {
  const holidays = getHolidaysForDate(solarDay, solarMonth, solarYear, timeZone);
  return holidays.some(h => h.official === true);
}

/**
 * Get all holidays in a given solar month
 *
 * @param {number} month - Solar month (1-12)
 * @param {number} year - Solar year
 * @param {number} [timeZone=DEFAULT_TIMEZONE]
 * @returns {Array<Object>}
 */
export function getHolidaysInSolarMonth(month, year, timeZone = DEFAULT_TIMEZONE) {
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

/**
 * Get all holidays in a given lunar month
 *
 * @param {number} lunarMonth (1-12)
 * @param {number} lunarYear
 * @returns {Array<Object>}
 */
export function getHolidaysInLunarMonth(lunarMonth, lunarYear) {
  const results = [];
  LUNAR_HOLIDAYS.forEach(h => {
    if (h.lunarMonth === lunarMonth) {
      results.push({
        ...h,
        lunarYear,
        emoji: HOLIDAY_TYPE_EMOJI[h.type] || '📌',
        typeLabel: HOLIDAY_TYPE_LABEL[h.type] || 'Khác'
      });
    }
  });
  return results;
}

/**
 * Get all official public holidays in a given solar year with their exact Gregorian dates.
 * Useful for labor planning, calendar applications, and holiday reminders.
 *
 * @param {number} solarYear
 * @param {number} [timeZone=DEFAULT_TIMEZONE]
 * @returns {Array<{ name: string, day: number, month: number, year: number, origin: string, note?: string }>}
 */
export function getPublicHolidaysInYear(solarYear, timeZone = DEFAULT_TIMEZONE) {
  const list = [];

  // Fixed Solar Public Holidays
  list.push({
    id: 'new_year',
    name: 'Tết Dương lịch',
    day: 1,
    month: 1,
    year: solarYear,
    origin: 'Dương lịch 01/01'
  });
  list.push({
    id: 'reunification_day',
    name: 'Ngày Giải phóng miền Nam',
    day: 30,
    month: 4,
    year: solarYear,
    origin: 'Dương lịch 30/04'
  });
  list.push({
    id: 'labor_day',
    name: 'Ngày Quốc tế Lao động',
    day: 1,
    month: 5,
    year: solarYear,
    origin: 'Dương lịch 01/05'
  });
  list.push({
    id: 'independence_day',
    name: 'Quốc khánh Việt Nam',
    day: 2,
    month: 9,
    year: solarYear,
    origin: 'Dương lịch 02/09'
  });

  // Lunar Public Holidays in the same solar year:
  // Giỗ Tổ Hùng Vương (10/03 ÂL): Thường rơi vào solarYear
  const hungKings = convertLunar2Solar(10, 3, solarYear, false, timeZone);
  if (hungKings && hungKings.year === solarYear) {
    list.push({
      id: 'hung_kings',
      name: 'Giỗ Tổ Hùng Vương',
      day: hungKings.day,
      month: hungKings.month,
      year: hungKings.year,
      origin: 'Âm lịch 10/03'
    });
  }

  // Tết Nguyên Đán: 30 Tết (hoặc 29 nếu tháng chạp thiếu) + Mùng 1, 2, 3 Tết của năm solarYear
  // Chuyển Mùng 1, 2, 3 tháng Giêng năm solarYear:
  for (let m = 1; m <= 3; m++) {
    const tetDay = convertLunar2Solar(m, 1, solarYear, false, timeZone);
    if (tetDay && tetDay.year === solarYear) {
      list.push({
        id: `tet_m${m}`,
        name: m === 1 ? 'Mùng 1 Tết Nguyên Đán' : `Mùng ${m} Tết`,
        day: tetDay.day,
        month: tetDay.month,
        year: tetDay.year,
        origin: `Âm lịch 0${m}/01`
      });
    }
  }

  // Sắp xếp theo thứ tự ngày tăng dần
  list.sort((a, b) => {
    if (a.month !== b.month) return a.month - b.month;
    return a.day - b.day;
  });

  return list;
}

/**
 * Get emoji corresponding to holiday type
 * @param {string} type
 * @returns {string}
 */
export function getHolidayEmoji(type) {
  return HOLIDAY_TYPE_EMOJI[type] || '📌';
}

/**
 * Get readable label for holiday type
 * @param {string} type
 * @returns {string}
 */
export function getHolidayTypeLabel(type) {
  return HOLIDAY_TYPE_LABEL[type] || 'Khác';
}
