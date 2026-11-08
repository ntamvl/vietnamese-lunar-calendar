/**
 * Vietnamese Lunar Calendar - Auspicious Hours (Giờ Hoàng Đạo / Hắc Đạo)
 */

import { CHI, KHUNG_GIO_CHI, GIO_HOANG_DAO_BITS } from '../core/constants.js';
import { jdFromDate } from '../core/astronomy.js';
import { getHourChiIndex, getHourCanChi } from '../sexagenary/canchi.js';

/**
 * Get the auspicious status of all 12 two-hour intervals of the day
 *
 * @param {number} dd - Solar day
 * @param {number} mm - Solar month
 * @param {number} yy - Solar year
 * @returns {Array<{ chiIndex: number, chi: string, can: string, full: string, isAuspicious: boolean, type: string, timeRange: string, startHour: number, endHour: number }>}
 */
export function getAuspiciousHours(dd, mm, yy) {
  const jd = jdFromDate(dd, mm, yy);
  const chiOfDay = (jd + 1) % 12;
  const bits = GIO_HOANG_DAO_BITS[chiOfDay % 6];

  return CHI.map((chiName, i) => {
    const isAuspicious = bits.charAt(i) === '1';
    const khung = KHUNG_GIO_CHI[i];
    const hourInfo = getHourCanChi(khung.startHour, dd, mm, yy);

    return {
      chiIndex: i,
      chi: chiName,
      can: hourInfo.can,
      full: hourInfo.full,
      isAuspicious,
      type: isAuspicious ? 'Hoàng đạo' : 'Hắc đạo',
      timeRange: `${khung.start} - ${khung.end}`,
      startHour: khung.startHour,
      endHour: khung.endHour
    };
  });
}

/**
 * Check if a specific solar hour of the day is auspicious (Hoàng đạo)
 *
 * @param {number} hour - Hour of day (0-23)
 * @param {number} dd - Solar day
 * @param {number} mm - Solar month
 * @param {number} yy - Solar year
 * @returns {boolean}
 */
export function isHourAuspicious(hour, dd, mm, yy) {
  const jd = jdFromDate(dd, mm, yy);
  const chiOfDay = (jd + 1) % 12;
  const bits = GIO_HOANG_DAO_BITS[chiOfDay % 6];
  const chiIdx = getHourChiIndex(hour);
  return bits.charAt(chiIdx) === '1';
}

/**
 * Get a formatted string listing all auspicious hours of the day
 * e.g. "Tý (23-1), Sửu (1-3), Mão (5-7), Ngọ (11-13), Thân (15-17), Dậu (17-19)"
 *
 * @param {number} dd - Solar day
 * @param {number} mm - Solar month
 * @param {number} yy - Solar year
 * @returns {string}
 */
export function getAuspiciousHoursSummary(dd, mm, yy) {
  const hours = getAuspiciousHours(dd, mm, yy);
  return hours
    .filter(h => h.isAuspicious)
    .map(h => `${h.chi} (${(h.chiIndex * 2 + 23) % 24}-${(h.chiIndex * 2 + 1) % 24})`)
    .join(', ');
}
