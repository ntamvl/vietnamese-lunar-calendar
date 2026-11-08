/**
 * Vietnamese Lunar Calendar - 24 Solar Terms (24 Tiết Khí)
 * Computes solar terms based on solar longitude according to Jean Meeus algorithms.
 */

import { DEFAULT_TIMEZONE, TIET_KHI } from '../core/constants.js';
import { jdFromDate, jdToDate, getSunLongitude24, SunLongitude } from '../core/astronomy.js';

/**
 * Get current solar term for a specific date
 *
 * @param {number} dd - Solar day
 * @param {number} mm - Solar month
 * @param {number} yy - Solar year
 * @param {number} [timeZone=DEFAULT_TIMEZONE]
 * @returns {{ id: string, name: string, index: number, degree: number, approximateDate: string, longitudeDegrees: number }}
 */
export function getSolarTerm(dd, mm, yy, timeZone = DEFAULT_TIMEZONE) {
  const jd = jdFromDate(dd, mm, yy);
  const termIndex = getSunLongitude24(jd, timeZone);
  const term = TIET_KHI[termIndex];
  const rad = SunLongitude(jd - 0.5 - timeZone / 24);
  const deg = (rad * 180) / Math.PI;

  return {
    id: term.id,
    name: term.name,
    index: termIndex,
    degree: term.degree,
    approximateDate: term.approximateDate,
    longitudeDegrees: Math.round(deg * 100) / 100
  };
}

/**
 * Get the exact solar date when each of the 24 solar terms begins in a given solar year.
 *
 * @param {number} year - Solar year
 * @param {number} [timeZone=DEFAULT_TIMEZONE]
 * @returns {Array<{ id: string, name: string, degree: number, day: number, month: number, year: number }>}
 */
export function getSolarTermsOfYear(year, timeZone = DEFAULT_TIMEZONE) {
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
