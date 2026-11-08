import test from 'node:test';
import assert from 'node:assert/strict';

import {
  getSolarTerm,
  getSolarTermsOfYear,
  getAuspiciousHours,
  isHourAuspicious,
  getAuspiciousHoursSummary,
  TIET_KHI
} from '../src/index.js';

test('24 Solar Terms constant length', () => {
  assert.equal(TIET_KHI.length, 24);
  assert.equal(TIET_KHI[0].name, 'Xuân phân');
  assert.equal(TIET_KHI[6].name, 'Hạ chí');
  assert.equal(TIET_KHI[12].name, 'Thu phân');
  assert.equal(TIET_KHI[18].name, 'Đông chí');
});

test('Solar term calculation for specific days', () => {
  // ~21/03 is Xuan phan (degree ~ 0)
  const xuanPhan = getSolarTerm(21, 3, 2024);
  assert.equal(xuanPhan.name, 'Xuân phân');

  // ~22/06 is Ha chi (degree ~ 90)
  const haChi = getSolarTerm(22, 6, 2024);
  assert.equal(haChi.name, 'Hạ chí');

  // ~22/12 is Dong chi (degree ~ 270)
  const dongChi = getSolarTerm(22, 12, 2024);
  assert.equal(dongChi.name, 'Đông chí');
});

test('getSolarTermsOfYear finds terms in a year', () => {
  const terms2024 = getSolarTermsOfYear(2024);
  assert.ok(terms2024.length >= 23, `Found ${terms2024.length} solar terms in 2024`);
  const names = terms2024.map(t => t.name);
  assert.ok(names.includes('Thanh minh'));
  assert.ok(names.includes('Hạ chí'));
  assert.ok(names.includes('Đông chí'));
});

test('Auspicious hours calculation', () => {
  const hours = getAuspiciousHours(10, 2, 2024);
  assert.equal(hours.length, 12);

  const auspiciousCount = hours.filter(h => h.isAuspicious).length;
  assert.equal(auspiciousCount, 6, 'A day must have exactly 6 auspicious hours');

  const inauspiciousCount = hours.filter(h => !h.isAuspicious).length;
  assert.equal(inauspiciousCount, 6, 'A day must have exactly 6 inauspicious hours');

  // Summary string
  const summary = getAuspiciousHoursSummary(10, 2, 2024);
  assert.ok(typeof summary === 'string' && summary.length > 0);

  // Check specific hour query
  const isTyAuspicious = isHourAuspicious(0, 10, 2, 2024);
  assert.equal(typeof isTyAuspicious, 'boolean');
});
