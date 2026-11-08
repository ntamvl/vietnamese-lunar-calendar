import test from 'node:test';
import assert from 'node:assert/strict';

import {
  getHolidaysForDate,
  isPublicHoliday,
  getHolidaysInSolarMonth,
  getHolidaysInLunarMonth,
  getPublicHolidaysInYear
} from '../src/index.js';

test('Fixed solar holidays lookups', () => {
  // 01/01 Tet Duong lich
  const newYear = getHolidaysForDate(1, 1, 2024);
  assert.ok(newYear.length > 0);
  assert.ok(newYear.some(h => h.id === 'new_year'));
  assert.equal(isPublicHoliday(1, 1, 2024), true);

  // 30/04 Giai phong mien Nam
  const apr30 = getHolidaysForDate(30, 4, 2024);
  assert.ok(apr30.some(h => h.id === 'reunification_day'));
  assert.equal(isPublicHoliday(30, 4, 2024), true);

  // 01/05 Quoc te Lao dong
  const may1 = getHolidaysForDate(1, 5, 2024);
  assert.ok(may1.some(h => h.id === 'labor_day'));
  assert.equal(isPublicHoliday(1, 5, 2024), true);

  // 02/09 Quoc khanh
  const sep2 = getHolidaysForDate(2, 9, 2024);
  assert.ok(sep2.some(h => h.id === 'independence_day'));
  assert.equal(isPublicHoliday(2, 9, 2024), true);
});

test('Lunar holidays lookups by solar date', () => {
  // Tet Nguyen Dan 2024 (10/02/2024 = 01/01/2024 AL)
  const tetDay1 = getHolidaysForDate(10, 2, 2024);
  assert.ok(tetDay1.some(h => h.id === 'tet_nguyen_dan'));
  assert.equal(isPublicHoliday(10, 2, 2024), true);

  // Gio To Hung Vuong 2024 (10/03 AL -> 18/04/2024 DL)
  const hungKings = getHolidaysForDate(18, 4, 2024);
  assert.ok(hungKings.some(h => h.id === 'hung_kings'));
  assert.equal(isPublicHoliday(18, 4, 2024), true);
});

test('Holidays in month queries', () => {
  const aprilHolidays = getHolidaysInSolarMonth(4, 2024);
  assert.ok(aprilHolidays.length > 0);

  const lunarM1Holidays = getHolidaysInLunarMonth(1, 2024);
  assert.ok(lunarM1Holidays.length >= 3);
  assert.ok(lunarM1Holidays.some(h => h.id === 'tet_nguyen_dan'));
});

test('getPublicHolidaysInYear returns official holidays with Gregorian dates', () => {
  const public2024 = getPublicHolidaysInYear(2024);
  assert.ok(public2024.length >= 5);

  const names = public2024.map(h => h.name);
  assert.ok(names.includes('Tết Dương lịch'));
  assert.ok(names.includes('Ngày Giải phóng miền Nam'));
  assert.ok(names.includes('Ngày Quốc tế Lao động'));
  assert.ok(names.includes('Quốc khánh Việt Nam'));
  assert.ok(names.includes('Giỗ Tổ Hùng Vương'));
  assert.ok(names.includes('Mùng 1 Tết Nguyên Đán'));
});
