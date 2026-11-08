/**
 * Vietnamese Lunar Calendar - String Formatting Utilities
 * Helpers for pretty printing lunar dates and can chi combinations.
 */

import { THANG_AM, CON_GIAP, CHI } from '../core/constants.js';
import { getYearCanChi } from '../sexagenary/canchi.js';
import { getDayOfWeekName, convertSolar2Lunar, getLunarMonthName } from '../core/converter.js';
import { DEFAULT_TIMEZONE } from '../core/constants.js';

/**
 * Pad a number with leading zeros
 * @param {number} n
 * @param {number} [width=2]
 * @returns {string}
 */
export function padZero(n, width = 2) {
  return String(n).padStart(width, '0');
}

/**
 * Format a lunar date object according to a pattern.
 * Tokens:
 * - `DD`: Two-digit day (01-30)
 * - `D`: Day of month (1-30)
 * - `MM`: Two-digit month (01-12)
 * - `M`: Month (1-12)
 * - `MMMM`: Full month name (e.g. "Tháng Giêng", "Tháng Tư nhuận")
 * - `YYYY`: Can Chi of year (e.g. "Giáp Thìn")
 * - `yyyy`: Numeric year (e.g. 2024)
 * - `W`: Zodiac animal (e.g. "Rồng")
 * - `N`: Leap indicator (' (nhuận)' or '')
 *
 * @param {{ day: number, month: number, year: number, isLeapMonth?: boolean }} lunar
 * @param {string} [pattern='DD/MM/yyyy']
 * @returns {string} Formatted string
 */
export function formatLunarDate(lunar, pattern = 'DD/MM/yyyy') {
  if (!lunar) return '';

  const { day, month, year, isLeapMonth = false } = lunar;
  const yearCanChi = getYearCanChi(year);
  const monthName = getLunarMonthName(month, isLeapMonth);

  return pattern
    .replace(/YYYY/g, yearCanChi.full)
    .replace(/yyyy/g, String(year))
    .replace(/MMMM/g, monthName)
    .replace(/MM/g, padZero(month))
    .replace(/\bM\b/g, String(month))
    .replace(/DD/g, padZero(day))
    .replace(/\bD\b/g, String(day))
    .replace(/W/g, yearCanChi.conGiap)
    .replace(/N/g, isLeapMonth ? ' (nhuận)' : '');
}

/**
 * Produce a readable full descriptive string for a solar date
 * e.g. "Thứ Hai, ngày 10/02/2024 - Mùng 1 tháng Giêng năm Giáp Thìn (Rồng)"
 *
 * @param {number} dd - Solar day
 * @param {number} mm - Solar month
 * @param {number} yy - Solar year
 * @param {number} [timeZone=DEFAULT_TIMEZONE]
 * @returns {string}
 */
export function formatFullDateString(dd, mm, yy, timeZone = DEFAULT_TIMEZONE) {
  const lunar = convertSolar2Lunar(dd, mm, yy, timeZone);
  const dowName = getDayOfWeekName(dd, mm, yy);
  const yearCanChi = getYearCanChi(lunar.year);

  const dayPrefix = lunar.day <= 10 ? `Mùng ${lunar.day}` : `Ngày ${lunar.day}`;
  const monthStr = getLunarMonthName(lunar.month, lunar.isLeapMonth).toLowerCase();

  return `${dowName}, ${padZero(dd)}/${padZero(mm)}/${yy} Dương lịch - ${dayPrefix} ${monthStr} năm ${yearCanChi.full} (${yearCanChi.conGiap})`;
}
