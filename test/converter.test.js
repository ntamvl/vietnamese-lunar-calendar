import test from 'node:test';
import assert from 'node:assert/strict';

import {
  convertSolar2Lunar,
  convertLunar2Solar,
  getDaysInLunarMonth,
  getDaysInSolarMonth,
  getLeapMonthInYear,
  isSolarLeapYear,
  jdFromDate,
  jdToDate,
  getDayOfWeek,
  getDayOfWeekName
} from '../src/index.js';

test('Julian Day Number conversion', () => {
  const jd = jdFromDate(1, 1, 2000);
  assert.equal(jd, 2451545);

  const date = jdToDate(2451545);
  assert.equal(date.day, 1);
  assert.equal(date.month, 1);
  assert.equal(date.year, 2000);
});

test('Solar to Lunar Conversion - Known Tet Dates', () => {
  // Tet 2024: 10/02/2024 -> 01/01/2024 AL (Giap Thin)
  const tet2024 = convertSolar2Lunar(10, 2, 2024);
  assert.equal(tet2024.day, 1);
  assert.equal(tet2024.month, 1);
  assert.equal(tet2024.year, 2024);
  assert.equal(tet2024.isLeapMonth, false);

  // Tet 2023: 22/01/2023 -> 01/01/2023 AL (Quy Mao)
  const tet2023 = convertSolar2Lunar(22, 1, 2023);
  assert.equal(tet2023.day, 1);
  assert.equal(tet2023.month, 1);
  assert.equal(tet2023.year, 2023);

  // Tet 2025: 29/01/2025 -> 01/01/2025 AL (At Ty)
  const tet2025 = convertSolar2Lunar(29, 1, 2025);
  assert.equal(tet2025.day, 1);
  assert.equal(tet2025.month, 1);
  assert.equal(tet2025.year, 2025);

  // Tet 2026: 17/02/2026 -> 01/01/2026 AL (Binh Ngo)
  const tet2026 = convertSolar2Lunar(17, 2, 2026);
  assert.equal(tet2026.day, 1);
  assert.equal(tet2026.month, 1);
  assert.equal(tet2026.year, 2026);
});

test('Historical dates conversion', () => {
  // 30/04/1975
  const gphm = convertSolar2Lunar(30, 4, 1975);
  assert.equal(gphm.day, 20);
  assert.equal(gphm.month, 3);
  assert.equal(gphm.year, 1975);

  // 02/09/1945
  const qk1945 = convertSolar2Lunar(2, 9, 1945);
  assert.equal(qk1945.day, 26);
  assert.equal(qk1945.month, 7);
  assert.equal(qk1945.year, 1945);
});

test('Lunar to Solar Conversion roundtrip', () => {
  // Mung 1 Tet Giap Thin 2024 -> 10/02/2024
  const solar = convertLunar2Solar(1, 1, 2024, false);
  assert.ok(solar);
  assert.equal(solar.day, 10);
  assert.equal(solar.month, 2);
  assert.equal(solar.year, 2024);

  // Roundtrip test for 100 days
  for (let d = 1; d <= 30; d++) {
    const l = convertSolar2Lunar(d, 5, 2024);
    const s = convertLunar2Solar(l.day, l.month, l.year, l.isLeapMonth);
    assert.ok(s);
    assert.equal(s.day, d);
    assert.equal(s.month, 5);
    assert.equal(s.year, 2024);
  }
});

test('Leap months detection', () => {
  // 2023 has leap month 2
  assert.equal(getLeapMonthInYear(2023), 2);

  // 2025 has leap month 6
  assert.equal(getLeapMonthInYear(2025), 6);

  // 2024 has no leap month
  assert.equal(getLeapMonthInYear(2024), 0);
});

test('Days in lunar month', () => {
  // Days in month must be either 29 or 30
  for (let m = 1; m <= 12; m++) {
    const days = getDaysInLunarMonth(m, 2024, false);
    assert.ok(days === 29 || days === 30, `Month ${m} in 2024 had ${days} days`);
  }
});

test('Days in solar month and solar leap year', () => {
  assert.equal(isSolarLeapYear(2024), true);
  assert.equal(isSolarLeapYear(2023), false);
  assert.equal(isSolarLeapYear(2000), true);
  assert.equal(isSolarLeapYear(1900), false);

  assert.equal(getDaysInSolarMonth(2, 2024), 29);
  assert.equal(getDaysInSolarMonth(2, 2023), 28);
  assert.equal(getDaysInSolarMonth(1, 2024), 31);
  assert.equal(getDaysInSolarMonth(4, 2024), 30);
});

test('Day of week calculation', () => {
  // 10/02/2024 was Saturday (index 6)
  assert.equal(getDayOfWeek(10, 2, 2024), 6);
  assert.equal(getDayOfWeekName(10, 2, 2024), 'Thứ Bảy');

  // 11/02/2024 was Sunday (index 0)
  assert.equal(getDayOfWeek(11, 2, 2024), 0);
  assert.equal(getDayOfWeekName(11, 2, 2024), 'Chủ Nhật');
});
