#!/usr/bin/env node

/**
 * Vietnamese Lunar Calendar - Command Line Interface (CLI)
 * Run via: npx vietnamese-lunar-calendar [command]
 */

import {
  getLunarDateInfo,
  getMonthCalendar,
  formatFullDateString,
  THU_NGAN
} from '../dist/index.mjs';

const args = process.argv.slice(2);
const command = args[0] || 'today';

if (command === 'today' || command === 'now') {
  printToday();
} else if (command === 'month') {
  const now = new Date();
  const mm = parseInt(args[1], 10) || (now.getMonth() + 1);
  const yy = parseInt(args[2], 10) || now.getFullYear();
  printMonth(mm, yy);
} else if (command === 'date') {
  const dd = parseInt(args[1], 10);
  const mm = parseInt(args[2], 10);
  const yy = parseInt(args[3], 10);
  if (!dd || !mm || !yy) {
    console.error('❌ Vui lòng nhập: npx @chonoi/vietnamese-lunar-calendar date <ngày> <tháng> <năm>');
    process.exit(1);
  }
  printDate(dd, mm, yy);
} else {
  printHelp();
}

function printToday() {
  const now = new Date();
  printDate(now.getDate(), now.getMonth() + 1, now.getFullYear());
}

function printDate(dd, mm, yy) {
  const info = getLunarDateInfo(dd, mm, yy);
  console.log('\n======================================================');
  console.log(` 🗓️  LỊCH VIỆT NAM: ${info.solar.dayOfWeekName}, ${info.solar.day}/${info.solar.month}/${info.solar.year}`);
  console.log('======================================================');
  console.log(` • Âm lịch:       ${info.lunar.day} ${info.lunar.monthName} năm ${info.canChi.year.full} (${info.canChi.year.conGiap})`);
  console.log(` • Can Chi:       Ngày ${info.canChi.day.full}, Tháng ${info.canChi.month.full}, Năm ${info.canChi.year.full}`);
  console.log(` • Nạp Âm năm:    ${info.canChi.year.napAm}`);
  console.log(` • Tiết khí:      ${info.astrology.solarTerm.name} (${info.astrology.solarTerm.approximateDate})`);
  console.log(` • Giờ hoàng đạo: ${info.astrology.auspiciousSummary}`);

  if (info.holidays.length > 0) {
    console.log(' • Sự kiện / Lễ:');
    info.holidays.forEach(h => {
      console.log(`   ${h.emoji}  ${h.name} [${h.typeLabel}]`);
    });
  }
  if (info.isPublicHoliday) {
    console.log(' • [🔴 NGÀY NGHỈ LỄ CHÍNH THỨC]');
  }
  console.log('======================================================\n');
}

function printMonth(mm, yy) {
  const cal = getMonthCalendar(mm, yy, { weekStartsOn: 1 });
  console.log(`\n============== THÁNG ${mm} / ${yy} ==============`);
  console.log(' T2    T3    T4    T5    T6    T7    CN');
  console.log('-----------------------------------------');

  cal.weeks.forEach(week => {
    const row = week.map(cell => {
      if (!cell.isCurrentMonth) {
        return '  .   ';
      }
      const solar = String(cell.solarDay).padStart(2, ' ');
      const lunar = String(cell.lunarDay).padStart(2, ' ');
      return `${solar}|${lunar}`;
    }).join(' ');
    console.log(` ${row}`);
  });
  console.log('-----------------------------------------');
  console.log(' (Quy ước: Dương|Âm, ví dụ 10|01 là ngày 10 DL / mùng 1 ÂL)\n');
}

function printHelp() {
  console.log(`
@chonoi/vietnamese-lunar-calendar CLI

Cách sử dụng:
  npx @chonoi/vietnamese-lunar-calendar today             Xem lịch hôm nay
  npx @chonoi/vietnamese-lunar-calendar month [tháng] [năm] Xem lịch tháng (VD: month 2 2024)
  npx @chonoi/vietnamese-lunar-calendar date <d> <m> <y>  Tra cứu ngày cụ thể (VD: date 10 2 2024)
`);
}
