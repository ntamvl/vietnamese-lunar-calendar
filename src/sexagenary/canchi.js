/**
 * Vietnamese Lunar Calendar - Sexagenary Cycle (Can Chi & Nạp Âm)
 * Provides stem-branch calculations for year, month, day, hour,
 * and 60-year cycle elemental music (Nạp Âm).
 */

import { CAN, CHI, CON_GIAP, KHUNG_GIO_CHI, NAP_AM_60 } from '../core/constants.js';
import { jdFromDate } from '../core/astronomy.js';

/**
 * Get Can Chi for a lunar year
 * @param {number} year - Lunar year (e.g. 2024 -> Giáp Thìn)
 * @returns {{ can: string, chi: string, conGiap: string, full: string, napAm: string }}
 */
export function getYearCanChi(year) {
  const canIndex = (year + 6) % 10;
  const chiIndex = (year + 8) % 12;
  const can = CAN[canIndex];
  const chi = CHI[chiIndex];
  const full = `${can} ${chi}`;
  const conGiap = CON_GIAP[chiIndex];
  const napAm = NAP_AM_60[full] || '';

  return {
    can,
    chi,
    conGiap,
    full,
    napAm
  };
}

/**
 * Get Can Chi for a lunar month
 * Follows the "Ngũ Hổ Độn" rule:
 * Month 1 (Tháng Giêng) is always Dần (Chi index 2).
 *
 * @param {number} lunarMonth - Month (1-12)
 * @param {number} lunarYear - Lunar year
 * @returns {{ can: string, chi: string, full: string }}
 */
export function getMonthCanChi(lunarMonth, lunarYear) {
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

/**
 * Get Can Chi for a solar date (day)
 *
 * @param {number} dd - Solar day
 * @param {number} mm - Solar month
 * @param {number} yy - Solar year
 * @returns {{ can: string, chi: string, full: string, jd: number, napAm: string }}
 */
export function getDayCanChi(dd, mm, yy) {
  const jd = jdFromDate(dd, mm, yy);
  const canIndex = (jd + 9) % 10;
  const chiIndex = (jd + 1) % 12;
  const can = CAN[canIndex];
  const chi = CHI[chiIndex];
  const full = `${can} ${chi}`;
  const napAm = NAP_AM_60[full] || '';

  return {
    can,
    chi,
    full,
    jd,
    napAm
  };
}

/**
 * Get Heavenly Stem of Tý hour (23:00 - 01:00) for a given day Can
 * Formula: Ngũ Thử Độn (Five Rats method)
 * - Giáp (0), Kỷ (5) -> Giáp (0)
 * - Ất (1), Canh (6) -> Bính (2)
 * - Bính (2), Tân (7) -> Mậu (4)
 * - Đinh (3), Nhâm (8) -> Canh (6)
 * - Mậu (4), Quý (9) -> Nhâm (8)
 *
 * @param {number} dayCanIndex - Can index of the day (0-9)
 * @returns {number} Can index of Tý hour (0-9)
 */
export function getTyHourCanIndex(dayCanIndex) {
  return (dayCanIndex % 5) * 2;
}

/**
 * Get Earthly Branch index (0-11) for a given hour of day (0-23)
 * 23:00-00:59 -> 0 (Tý)
 * 01:00-02:59 -> 1 (Sửu)
 * ...
 * 21:00-22:59 -> 11 (Hợi)
 *
 * @param {number} hour - Solar hour (0-23)
 * @returns {number} Branch index 0-11
 */
export function getHourChiIndex(hour) {
  return Math.floor(((hour + 1) % 24) / 2);
}

/**
 * Get Can Chi of a specific solar hour in a given date
 *
 * @param {number} hour - Hour of day (0-23)
 * @param {number} dd - Solar day
 * @param {number} mm - Solar month
 * @param {number} yy - Solar year
 * @returns {{ can: string, chi: string, full: string, chiIndex: number, timeRange: string }}
 */
export function getHourCanChi(hour, dd, mm, yy) {
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

/**
 * Get list of all 12 hours Can Chi for a given date
 *
 * @param {number} dd - Solar day
 * @param {number} mm - Solar month
 * @param {number} yy - Solar year
 * @returns {Array<{ can: string, chi: string, full: string, chiIndex: number, timeRange: string, startHour: number, endHour: number }>}
 */
export function getAll12HoursCanChi(dd, mm, yy) {
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

/**
 * Look up Nạp Âm for any Can Chi pair
 * @param {string} can - Heavenly stem
 * @param {string} chi - Earthly branch
 * @returns {string} Nạp Âm string or empty if invalid
 */
export function getNapAm(can, chi) {
  return NAP_AM_60[`${can} ${chi}`] || '';
}

/**
 * Get zodiac animal for an earthly branch
 * @param {string} chi
 * @returns {string}
 */
export function getConGiap(chi) {
  const idx = CHI.indexOf(chi);
  return idx >= 0 ? CON_GIAP[idx] : '';
}
