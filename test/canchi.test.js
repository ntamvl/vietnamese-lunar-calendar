import test from 'node:test';
import assert from 'node:assert/strict';

import {
  getYearCanChi,
  getMonthCanChi,
  getDayCanChi,
  getHourCanChi,
  getAll12HoursCanChi,
  getNapAm,
  getConGiap
} from '../src/index.js';

test('Can Chi of Lunar Year', () => {
  const y2024 = getYearCanChi(2024);
  assert.equal(y2024.can, 'Giáp');
  assert.equal(y2024.chi, 'Thìn');
  assert.equal(y2024.full, 'Giáp Thìn');
  assert.equal(y2024.conGiap, 'Rồng');
  assert.equal(y2024.napAm, 'Phúc Đăng Hỏa');

  const y2025 = getYearCanChi(2025);
  assert.equal(y2025.can, 'Ất');
  assert.equal(y2025.chi, 'Tỵ');
  assert.equal(y2025.full, 'Ất Tỵ');
  assert.equal(y2025.conGiap, 'Rắn');
  assert.equal(y2025.napAm, 'Phúc Đăng Hỏa');

  const y2026 = getYearCanChi(2026);
  assert.equal(y2026.can, 'Bính');
  assert.equal(y2026.chi, 'Ngọ');
  assert.equal(y2026.full, 'Bính Ngọ');
  assert.equal(y2026.conGiap, 'Ngựa');
  assert.equal(y2026.napAm, 'Thiên Hà Thủy');
});

test('Can Chi of Lunar Month', () => {
  // Thang Gieng nam 2024 (Giap Thin) -> Binh Dan
  const m1_2024 = getMonthCanChi(1, 2024);
  assert.equal(m1_2024.chi, 'Dần');
  assert.equal(m1_2024.can, 'Bính');
  assert.equal(m1_2024.full, 'Bính Dần');
});

test('Can Chi of Day', () => {
  // 10/02/2024 (Mung 1 Tet Giap Thin)
  const day = getDayCanChi(10, 2, 2024);
  assert.ok(day.can);
  assert.ok(day.chi);
  assert.ok(day.full);
  assert.ok(day.napAm);
});

test('Can Chi of Hours and 12-hour list', () => {
  // Hour at 00:30 is Ty hour
  const hTy = getHourCanChi(0, 10, 2, 2024);
  assert.equal(hTy.chi, 'Tý');

  // Hour at 12:00 is Ngo hour
  const hNgo = getHourCanChi(12, 10, 2, 2024);
  assert.equal(hNgo.chi, 'Ngọ');

  const all12 = getAll12HoursCanChi(10, 2, 2024);
  assert.equal(all12.length, 12);
  assert.equal(all12[0].chi, 'Tý');
  assert.equal(all12[11].chi, 'Hợi');
});

test('Nap Am lookup', () => {
  assert.equal(getNapAm('Giáp', 'Tý'), 'Hải Trung Kim');
  assert.equal(getNapAm('Bính', 'Dần'), 'Lư Trung Hỏa');
  assert.equal(getNapAm('Nhâm', 'Tuất'), 'Đại Hải Thủy');
});

test('Con Giap mapping', () => {
  assert.equal(getConGiap('Tý'), 'Chuột');
  assert.equal(getConGiap('Thìn'), 'Rồng');
  assert.equal(getConGiap('Dậu'), 'Gà');
});
