/**
 * Vietnamese Lunar Calendar - Month Grid & Comprehensive Day Info
 * Generates month calendar matrices for rendering UIs and detailed single-day insights.
 */

import { DEFAULT_TIMEZONE, THU, THANG_AM } from '../core/constants.js';
import {
  convertSolar2Lunar,
  getDayOfWeek,
  getDayOfWeekName,
  getDaysInSolarMonth,
  getLeapMonthInYear,
  getLunarMonthName
} from '../core/converter.js';
import { getYearCanChi, getMonthCanChi, getDayCanChi } from '../sexagenary/canchi.js';
import { getSolarTerm } from '../astrology/solar-terms.js';
import { getAuspiciousHours, getAuspiciousHoursSummary } from '../astrology/auspicious.js';
import { getHolidaysForDate, isPublicHoliday } from '../holidays/lookup.js';

/**
 * Get comprehensive lunar and astrological information for a given solar date.
 * Single entry-point for all date information.
 *
 * @param {number} dd - Solar day
 * @param {number} mm - Solar month
 * @param {number} yy - Solar year
 * @param {number} [timeZone=DEFAULT_TIMEZONE]
 * @returns {Object} Complete day breakdown
 */
export function getLunarDateInfo(dd, mm, yy, timeZone = DEFAULT_TIMEZONE) {
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

/**
 * Generate a complete calendar month grid (weeks & days)
 *
 * @param {number} month - Solar month (1-12)
 * @param {number} year - Solar year
 * @param {Object} [options]
 * @param {number} [options.weekStartsOn=1] - 0 for Sunday, 1 for Monday (default 1)
 * @param {number} [options.timeZone=DEFAULT_TIMEZONE]
 * @returns {Object} Month calendar structure with weeks and days
 */
export function getMonthCalendar(month, year, options = {}) {
  const { weekStartsOn = 1, timeZone = DEFAULT_TIMEZONE } = options;

  const totalDays = getDaysInSolarMonth(month, year);
  const firstDayDow = getDayOfWeek(1, month, year); // 0 (Sun) to 6 (Sat)

  // Calculate days before the 1st of the month to fill the first row
  let leadDays = (firstDayDow - weekStartsOn + 7) % 7;

  // Previous month details
  const prevMonth = month === 1 ? 12 : month - 1;
  const prevYear = month === 1 ? year - 1 : year;
  const prevMonthDays = getDaysInSolarMonth(prevMonth, prevYear);

  const days = [];

  // 1. Days from previous month
  for (let i = leadDays - 1; i >= 0; i--) {
    const d = prevMonthDays - i;
    days.push(createCalendarDay(d, prevMonth, prevYear, false, timeZone));
  }

  // 2. Days of current month
  for (let d = 1; d <= totalDays; d++) {
    days.push(createCalendarDay(d, month, year, true, timeZone));
  }

  // 3. Days from next month to complete the last week (or 6 full weeks = 42 cells)
  const remainingCells = (7 - (days.length % 7)) % 7;
  const nextMonth = month === 12 ? 1 : month + 1;
  const nextYear = month === 12 ? year + 1 : year;

  for (let d = 1; d <= remainingCells; d++) {
    days.push(createCalendarDay(d, nextMonth, nextYear, false, timeZone));
  }

  // Split into weeks of 7 days
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

/**
 * Internal helper to create day cell for month grid
 */
function createCalendarDay(day, month, year, isCurrentMonth, timeZone) {
  const lunar = convertSolar2Lunar(day, month, year, timeZone);
  const dayOfWeek = getDayOfWeek(day, month, year);
  const holidays = getHolidaysForDate(day, month, year, timeZone);
  const isHoliday = holidays.some(h => h.official);

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
    lunarText: `${lunar.day}/${lunar.month}${lunar.isLeapMonth ? 'N' : ''}`,
    isPublicHoliday: isHoliday,
    holidays
  };
}
