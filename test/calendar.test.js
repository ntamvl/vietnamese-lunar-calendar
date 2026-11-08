import test from 'node:test';
import assert from 'node:assert/strict';

import {
  getMonthCalendar,
  getLunarDateInfo,
  formatLunarDate,
  formatFullDateString
} from '../src/index.js';

test('getMonthCalendar structure and week count', () => {
  const cal = getMonthCalendar(2, 2024, { weekStartsOn: 1 });
  assert.equal(cal.month, 2);
  assert.equal(cal.year, 2024);
  assert.equal(cal.totalDays, 29); // Leap year February
  assert.ok(cal.weeks.length >= 4 && cal.weeks.length <= 6);

  // Every week has 7 days
  for (const week of cal.weeks) {
    assert.equal(week.length, 7);
  }

  // Count days where isCurrentMonth === true
  let currentMonthCount = 0;
  for (const week of cal.weeks) {
    for (const day of week) {
      if (day.isCurrentMonth) currentMonthCount++;
    }
  }
  assert.equal(currentMonthCount, 29);
});

test('getLunarDateInfo returns comprehensive object', () => {
  const info = getLunarDateInfo(10, 2, 2024);

  // Solar check
  assert.equal(info.solar.day, 10);
  assert.equal(info.solar.month, 2);
  assert.equal(info.solar.year, 2024);
  assert.equal(info.solar.dayOfWeekName, 'Thứ Bảy');

  // Lunar check
  assert.equal(info.lunar.day, 1);
  assert.equal(info.lunar.month, 1);
  assert.equal(info.lunar.year, 2024);
  assert.equal(info.lunar.monthName, 'Tháng Giêng');

  // Can Chi check
  assert.equal(info.canChi.year.full, 'Giáp Thìn');
  assert.equal(info.canChi.year.conGiap, 'Rồng');
  assert.equal(info.canChi.year.napAm, 'Phúc Đăng Hỏa');

  // Astrology check
  assert.ok(info.astrology.solarTerm.name);
  assert.equal(info.astrology.auspiciousHours.length, 12);

  // Holidays check
  assert.equal(info.isPublicHoliday, true);
  assert.ok(info.holidays.some(h => h.id === 'tet_nguyen_dan'));
});

test('formatLunarDate string replacements', () => {
  const lunar = { day: 1, month: 1, year: 2024, isLeapMonth: false };

  const formatted1 = formatLunarDate(lunar, 'DD/MM/YYYY');
  assert.equal(formatted1, '01/01/Giáp Thìn');

  const formatted2 = formatLunarDate(lunar, 'D/M/yyyy (W)');
  assert.equal(formatted2, '1/1/2024 (Rồng)');

  const formatted3 = formatLunarDate(lunar, 'D MMMM');
  assert.equal(formatted3, '1 Tháng Giêng');
});

test('formatFullDateString creates readable output', () => {
  const fullStr = formatFullDateString(10, 2, 2024);
  assert.ok(fullStr.includes('Thứ Bảy'));
  assert.ok(fullStr.includes('10/02/2024'));
  assert.ok(fullStr.includes('Mùng 1 tháng giêng'));
  assert.ok(fullStr.includes('Giáp Thìn'));
  assert.ok(fullStr.includes('Rồng'));
});
