/**
 * Vietnamese Lunar Calendar Library
 * The most comprehensive and accurate Vietnamese Lunar Calendar package for Node.js and browsers.
 *
 * @license MIT
 * @copyright 2026 Chonoi & Contributors
 */

// 1. Constants
export {
  DEFAULT_TIMEZONE,
  CAN,
  CHI,
  CON_GIAP,
  THANG_AM,
  THU,
  THU_NGAN,
  KHUNG_GIO_CHI,
  TIET_KHI,
  GIO_HOANG_DAO_BITS,
  THAN_SAT_GIO,
  NAP_AM_60
} from './core/constants.js';

// 2. Astronomy & Core Algorithms
export {
  INT,
  jdFromDate,
  jdToDate,
  NewMoon,
  SunLongitude,
  getSunLongitudeSector,
  getSunLongitude24,
  getNewMoonDay,
  getLunarMonth11,
  getLeapMonthOffset
} from './core/astronomy.js';

// 3. Date Converters & Month Utilities
export {
  isSolarLeapYear,
  getDaysInSolarMonth,
  getDayOfWeek,
  getDayOfWeekName,
  getLeapMonthInYear,
  convertSolar2Lunar,
  convertLunar2Solar,
  getDaysInLunarMonth,
  getLunarMonthName
} from './core/converter.js';

// 4. Sexagenary Cycle (Can Chi & Nạp Âm)
export {
  getYearCanChi,
  getMonthCanChi,
  getDayCanChi,
  getTyHourCanIndex,
  getHourChiIndex,
  getHourCanChi,
  getAll12HoursCanChi,
  getNapAm,
  getConGiap
} from './sexagenary/canchi.js';

// 5. 24 Solar Terms (Tiết Khí)
export {
  getSolarTerm,
  getSolarTermsOfYear
} from './astrology/solar-terms.js';

// 6. Auspicious Hours (Giờ Hoàng Đạo)
export {
  getAuspiciousHours,
  isHourAuspicious,
  getAuspiciousHoursSummary
} from './astrology/auspicious.js';

// 7. Holidays & Observances (Ngày Lễ)
export {
  SOLAR_HOLIDAYS,
  LUNAR_HOLIDAYS,
  HOLIDAY_TYPE_EMOJI,
  HOLIDAY_TYPE_LABEL
} from './holidays/data.js';

export {
  getHolidaysBySolarDate,
  getHolidaysByLunarDate,
  getHolidaysForDate,
  isPublicHoliday,
  getHolidaysInSolarMonth,
  getHolidaysInLunarMonth,
  getPublicHolidaysInYear,
  getHolidayEmoji,
  getHolidayTypeLabel
} from './holidays/lookup.js';

// 8. Calendar Grid & Complete Day Info
export {
  getLunarDateInfo,
  getMonthCalendar
} from './calendar/month-grid.js';

// 9. Formatters
export {
  padZero,
  formatLunarDate,
  formatFullDateString
} from './format/formatter.js';
