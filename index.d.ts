/**
 * TypeScript Definitions for @chonoi/vietnamese-lunar-calendar
 * Comprehensive types for lunar calculations, sexagenary cycles,
 * auspicious hours, solar terms, and holiday lookups.
 */

export interface SolarDate {
  day: number;
  month: number;
  year: number;
  dayOfWeek?: number;
  dayOfWeekName?: string;
  jd?: number;
}

export interface LunarDate {
  day: number;
  month: number;
  year: number;
  isLeapMonth: boolean;
  jd?: number;
  monthName?: string;
  leapMonthInYear?: number;
  hasLeapMonth?: boolean;
}

export interface YearCanChi {
  can: string;
  chi: string;
  conGiap: string;
  full: string;
  napAm: string;
}

export interface MonthCanChi {
  can: string;
  chi: string;
  full: string;
}

export interface DayCanChi {
  can: string;
  chi: string;
  full: string;
  jd: number;
  napAm: string;
}

export interface HourCanChi {
  can: string;
  chi: string;
  full: string;
  chiIndex: number;
  timeRange: string;
  startHour?: number;
  endHour?: number;
}

export interface AuspiciousHourItem {
  chiIndex: number;
  chi: string;
  can: string;
  full: string;
  isAuspicious: boolean;
  type: 'Hoàng đạo' | 'Hắc đạo';
  timeRange: string;
  startHour: number;
  endHour: number;
}

export interface SolarTermInfo {
  id: string;
  name: string;
  index: number;
  degree: number;
  approximateDate: string;
  longitudeDegrees: number;
}

export interface SolarTermOccurrence {
  id: string;
  name: string;
  degree: number;
  day: number;
  month: number;
  year: number;
}

export interface HolidayItem {
  id: string;
  name: string;
  type: 'public' | 'commemorative' | 'traditional' | 'buddhist';
  official: boolean;
  tags: string[];
  calendarType?: 'solar' | 'lunar';
  lunarInfo?: string;
  emoji?: string;
  typeLabel?: string;
  month?: number;
  day?: number;
  lunarMonth?: number;
  lunarDay?: number;
}

export interface PublicHolidayInYear {
  id: string;
  name: string;
  day: number;
  month: number;
  year: number;
  origin: string;
  note?: string;
}

export interface ComprehensiveDayInfo {
  solar: SolarDate;
  lunar: LunarDate;
  canChi: {
    year: YearCanChi;
    month: MonthCanChi;
    day: DayCanChi;
  };
  astrology: {
    solarTerm: SolarTermInfo;
    auspiciousHours: AuspiciousHourItem[];
    auspiciousSummary: string;
  };
  holidays: HolidayItem[];
  isPublicHoliday: boolean;
}

export interface CalendarDayCell {
  solarDay: number;
  solarMonth: number;
  solarYear: number;
  isCurrentMonth: boolean;
  dayOfWeek: number;
  dayOfWeekName: string;
  lunarDay: number;
  lunarMonth: number;
  lunarYear: number;
  isLeapMonth: boolean;
  lunarText: string;
  isPublicHoliday: boolean;
  holidays: HolidayItem[];
}

export interface MonthCalendarResult {
  month: number;
  year: number;
  totalDays: number;
  weeksCount: number;
  weekStartsOn: number;
  weeks: CalendarDayCell[][];
}

export interface MonthCalendarOptions {
  weekStartsOn?: 0 | 1;
  timeZone?: number;
}

// ================= CONSTANTS =================
export const DEFAULT_TIMEZONE: number;
export const CAN: string[];
export const CHI: string[];
export const CON_GIAP: string[];
export const THANG_AM: string[];
export const THU: string[];
export const THU_NGAN: string[];
export const KHUNG_GIO_CHI: Array<{ chi: string; start: string; end: string; startHour: number; endHour: number }>;
export const TIET_KHI: Array<{ id: string; name: string; degree: number; approximateDate: string }>;
export const GIO_HOANG_DAO_BITS: string[];
export const THAN_SAT_GIO: Array<{ name: string; isAuspicious: boolean; type: string }>;
export const NAP_AM_60: Record<string, string>;
export const SOLAR_HOLIDAYS: HolidayItem[];
export const LUNAR_HOLIDAYS: HolidayItem[];
export const HOLIDAY_TYPE_EMOJI: Record<string, string>;
export const HOLIDAY_TYPE_LABEL: Record<string, string>;

// ================= FUNCTIONS =================
export function INT(d: number): number;
export function jdFromDate(dd: number, mm: number, yy: number): number;
export function jdToDate(jd: number): { day: number; month: number; year: number };
export function NewMoon(k: number): number;
export function SunLongitude(jdn: number): number;
export function getSunLongitudeSector(dayNumber: number, timeZone: number): number;
export function getSunLongitude24(dayNumber: number, timeZone: number): number;
export function getNewMoonDay(k: number, timeZone: number): number;
export function getLunarMonth11(yy: number, timeZone: number): number;
export function getLeapMonthOffset(a11: number, timeZone: number): number;

export function isSolarLeapYear(year: number): boolean;
export function getDaysInSolarMonth(month: number, year: number): number;
export function getDayOfWeek(dd: number, mm: number, yy: number): number;
export function getDayOfWeekName(dd: number, mm: number, yy: number): string;
export function getLeapMonthInYear(lunarYear: number, timeZone?: number): number;
export function convertSolar2Lunar(dd: number, mm: number, yy: number, timeZone?: number): LunarDate;
export function convertLunar2Solar(lunarDay: number, lunarMonth: number, lunarYear: number, isLeapMonth?: boolean, timeZone?: number): SolarDate | null;
export function getDaysInLunarMonth(lunarMonth: number, lunarYear: number, isLeapMonth?: boolean, timeZone?: number): number;
export function getLunarMonthName(lunarMonth: number, isLeapMonth?: boolean): string;

export function getYearCanChi(year: number): YearCanChi;
export function getMonthCanChi(lunarMonth: number, lunarYear: number): MonthCanChi;
export function getDayCanChi(dd: number, mm: number, yy: number): DayCanChi;
export function getTyHourCanIndex(dayCanIndex: number): number;
export function getHourChiIndex(hour: number): number;
export function getHourCanChi(hour: number, dd: number, mm: number, yy: number): HourCanChi;
export function getAll12HoursCanChi(dd: number, mm: number, yy: number): HourCanChi[];
export function getNapAm(can: string, chi: string): string;
export function getConGiap(chi: string): string;

export function getSolarTerm(dd: number, mm: number, yy: number, timeZone?: number): SolarTermInfo;
export function getSolarTermsOfYear(year: number, timeZone?: number): SolarTermOccurrence[];

export function getAuspiciousHours(dd: number, mm: number, yy: number): AuspiciousHourItem[];
export function isHourAuspicious(hour: number, dd: number, mm: number, yy: number): boolean;
export function getAuspiciousHoursSummary(dd: number, mm: number, yy: number): string;

export function getHolidaysBySolarDate(month: number, day: number): HolidayItem[];
export function getHolidaysByLunarDate(lunarMonth: number, lunarDay: number): HolidayItem[];
export function getHolidaysForDate(solarDay: number, solarMonth: number, solarYear: number, timeZone?: number): HolidayItem[];
export function isPublicHoliday(solarDay: number, solarMonth: number, solarYear: number, timeZone?: number): boolean;
export function getHolidaysInSolarMonth(month: number, year: number, timeZone?: number): Array<{ day: number; month: number; year: number; holidays: HolidayItem[] }>;
export function getHolidaysInLunarMonth(lunarMonth: number, lunarYear: number): HolidayItem[];
export function getPublicHolidaysInYear(solarYear: number, timeZone?: number): PublicHolidayInYear[];
export function getHolidayEmoji(type: string): string;
export function getHolidayTypeLabel(type: string): string;

export function getLunarDateInfo(dd: number, mm: number, yy: number, timeZone?: number): ComprehensiveDayInfo;
export function getMonthCalendar(month: number, year: number, options?: MonthCalendarOptions): MonthCalendarResult;

export function padZero(n: number, width?: number): string;
export function formatLunarDate(lunar: LunarDate, pattern?: string): string;
export function formatFullDateString(dd: number, mm: number, yy: number, timeZone?: number): string;
