/**
 * Vietnamese Lunar Calendar - Astronomical Calculations
 * Based on algorithms by Ho Ngoc Duc (2006) and "Astronomical Algorithms" by Jean Meeus (1998)
 */

const PI = Math.PI;

/**
 * Discard the fractional part of a number (floor)
 * @param {number} d
 * @returns {number}
 */
export function INT(d) {
  return Math.floor(d);
}

/**
 * Compute integral Julian day number of date dd/mm/yyyy.
 * Number of days between 1/1/4713 BC (Julian calendar) and dd/mm/yyyy.
 * Formula from Claus Tondering (http://www.tondering.dk/claus/calendar.html)
 *
 * @param {number} dd - Day of month (1-31)
 * @param {number} mm - Month of year (1-12)
 * @param {number} yy - Year (e.g. 2026)
 * @returns {number} Julian day number
 */
export function jdFromDate(dd, mm, yy) {
  const a = INT((14 - mm) / 12);
  const y = yy + 4800 - a;
  const m = mm + 12 * a - 3;
  let jd = dd + INT((153 * m + 2) / 5) + 365 * y + INT(y / 4) - INT(y / 100) + INT(y / 400) - 32045;
  if (jd < 2299161) {
    jd = dd + INT((153 * m + 2) / 5) + 365 * y + INT(y / 4) - 32083;
  }
  return jd;
}

/**
 * Convert Julian day number to Gregorian/Julian date {day, month, year}
 * @param {number} jd - Julian day number
 * @returns {{ day: number, month: number, year: number }}
 */
export function jdToDate(jd) {
  let a, b, c;
  if (jd > 2299160) {
    a = jd + 32044;
    b = INT((4 * a + 3) / 146097);
    c = a - INT((b * 146097) / 4);
  } else {
    b = 0;
    c = jd + 32082;
  }
  const d = INT((4 * c + 3) / 1461);
  const e = c - INT((1461 * d) / 4);
  const m = INT((5 * e + 2) / 153);
  const day = e - INT((153 * m + 2) / 5) + 1;
  const month = m + 3 - 12 * INT(m / 10);
  const year = b * 100 + d - 4800 + INT(m / 10);
  return { day, month, year };
}

/**
 * Compute the time of the k-th new moon after the new moon of 1/1/1900 13:52 UTC.
 * Measured in Julian day number (e.g., 2451545.125).
 * Algorithm from: "Astronomical Algorithms" by Jean Meeus, 1998
 *
 * @param {number} k - Index of new moon
 * @returns {number} Floating Julian date of new moon
 */
export function NewMoon(k) {
  const T = k / 1236.85;
  const T2 = T * T;
  const T3 = T2 * T;
  const dr = PI / 180;
  let Jd1 = 2415020.75933 + 29.53058868 * k + 0.0001178 * T2 - 0.000000155 * T3;
  Jd1 += 0.00033 * Math.sin((166.56 + 132.87 * T - 0.009173 * T2) * dr);

  const M = 359.2242 + 29.10535608 * k - 0.0000333 * T2 - 0.00000347 * T3;
  const Mpr = 306.0253 + 385.81691806 * k + 0.0107306 * T2 + 0.00001236 * T3;
  const F = 21.2964 + 390.67050646 * k - 0.0016528 * T2 - 0.00000239 * T3;

  let C1 = (0.1734 - 0.000393 * T) * Math.sin(M * dr) + 0.0021 * Math.sin(2 * dr * M);
  C1 = C1 - 0.4068 * Math.sin(Mpr * dr) + 0.0161 * Math.sin(dr * 2 * Mpr);
  C1 = C1 - 0.0004 * Math.sin(dr * 3 * Mpr);
  C1 = C1 + 0.0104 * Math.sin(dr * 2 * F) - 0.0051 * Math.sin(dr * (M + Mpr));
  C1 = C1 - 0.0074 * Math.sin(dr * (M - Mpr)) + 0.0004 * Math.sin(dr * (2 * F + M));
  C1 = C1 - 0.0004 * Math.sin(dr * (2 * F - M)) - 0.0006 * Math.sin(dr * (2 * F + Mpr));
  C1 = C1 + 0.0010 * Math.sin(dr * (2 * F - Mpr)) + 0.0005 * Math.sin(dr * (2 * Mpr + M));

  let deltat;
  if (T < -11) {
    deltat = 0.001 + 0.000839 * T + 0.0002261 * T2 - 0.00000845 * T3 - 0.000000081 * T * T3;
  } else {
    deltat = -0.000278 + 0.000265 * T + 0.000262 * T2;
  }
  return Jd1 + C1 - deltat;
}

/**
 * Compute the longitude of the sun at any time (radians).
 * Parameter: floating number jdn, days since 1/1/4713 BC noon UTC.
 * Algorithm from: "Astronomical Algorithms" by Jean Meeus, 1998
 *
 * @param {number} jdn
 * @returns {number} Sun longitude in radians (0 to 2*PI)
 */
export function SunLongitude(jdn) {
  const T = (jdn - 2451545.0) / 36525;
  const T2 = T * T;
  const dr = PI / 180;
  const M = 357.52910 + 35999.05030 * T - 0.0001559 * T2 - 0.00000048 * T * T2;
  const L0 = 280.46645 + 36000.76983 * T + 0.0003032 * T2;
  let DL = (1.914600 - 0.004817 * T - 0.0000014 * T2) * Math.sin(dr * M);
  DL += (0.019993 - 0.000101 * T) * Math.sin(dr * 2 * M) + 0.000290 * Math.sin(dr * 3 * M);
  let L = (L0 + DL) * dr;
  L = L - PI * 2 * INT(L / (PI * 2));
  if (L < 0) L += PI * 2;
  return L;
}

/**
 * Compute sun longitude sector (0-11, each 30 degrees).
 * Used for leap month detection in lunar calendar.
 *
 * @param {number} dayNumber - Integral Julian day number
 * @param {number} timeZone - Local timezone (e.g. 7.0 for Vietnam)
 * @returns {number} Integer between 0 and 11
 */
export function getSunLongitudeSector(dayNumber, timeZone) {
  return INT((SunLongitude(dayNumber - 0.5 - timeZone / 24) / PI) * 6);
}

/**
 * Compute sun longitude in 24 terms (0-23, each 15 degrees).
 * Used for 24 solar terms (tiết khí).
 *
 * @param {number} dayNumber - Integral Julian day number
 * @param {number} timeZone - Local timezone (e.g. 7.0 for Vietnam)
 * @returns {number} Integer between 0 and 23
 */
export function getSunLongitude24(dayNumber, timeZone) {
  return INT((SunLongitude(dayNumber - 0.5 - timeZone / 24) / PI) * 12);
}

/**
 * Get Julian day of the k-th new moon in local timezone
 * @param {number} k
 * @param {number} timeZone
 * @returns {number}
 */
export function getNewMoonDay(k, timeZone) {
  return INT(NewMoon(k) + 0.5 + timeZone / 24);
}

/**
 * Find the day that starts the 11th lunar month of the given solar year
 * @param {number} yy - Solar year
 * @param {number} timeZone - Local timezone
 * @returns {number} Julian day number of start of 11th lunar month
 */
export function getLunarMonth11(yy, timeZone) {
  const off = jdFromDate(31, 12, yy) - 2415021;
  const k = INT(off / 29.530588853);
  let nm = getNewMoonDay(k, timeZone);
  const sunLong = getSunLongitudeSector(nm, timeZone);
  if (sunLong >= 9) {
    nm = getNewMoonDay(k - 1, timeZone);
  }
  return nm;
}

/**
 * Find the offset of the leap month after month 11 with start day a11
 * @param {number} a11 - Julian day number of month 11
 * @param {number} timeZone - Local timezone
 * @returns {number} Offset of leap month
 */
export function getLeapMonthOffset(a11, timeZone) {
  const k = INT((a11 - 2415021.076998695) / 29.530588853 + 0.5);
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
