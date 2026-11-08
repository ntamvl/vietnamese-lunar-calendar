# @chonoi/vietnamese-lunar-calendar 🇻🇳

> Thư viện Lịch Âm Việt Nam đầy đủ, chính xác và hiện đại nhất dành cho JavaScript, TypeScript và Node.js.

[![npm version](https://img.shields.io/npm/v/@chonoi/vietnamese-lunar-calendar.svg)](https://www.npmjs.com/package/@chonoi/vietnamese-lunar-calendar)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-success.svg)](package.json)
[![TypeScript Ready](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](index.d.ts)

Thư viện dựa trên các thuật toán thiên văn chính xác của nhà nghiên cứu **Hồ Ngọc Đức** (2006) và cuốn sách kinh điển *"Astronomical Algorithms"* của **Jean Meeus** (1998), được tối ưu hóa chuẩn xác cho múi giờ Việt Nam (UTC+7:00).

---

## 🌟 Điểm Nổi Bật

- 🚀 **Zero Dependencies**: Không phụ thuộc bất kỳ thư viện bên ngoài nào, bundle siêu nhẹ (~15KB).
- 🔄 **Dual Module Support**: Hỗ trợ chuẩn cả **ESM** (`import`) lẫn **CommonJS** (`require`).
- 💎 **Full TypeScript Support**: Cung cấp sẵn file định nghĩa kiểu dữ liệu `index.d.ts` hoàn chỉnh, autocomplete thông minh trong VS Code / WebStorm.
- 🎯 **Chính xác tuyệt đối**: Tính toán theo chu kỳ thiên văn Mặt Trăng và Mặt Trời, xử lý chính xác các năm nhuận, tháng thiếu (29 ngày), tháng đủ (30 ngày).
- 🧭 **Đầy đủ Can Chi & Con Giáp**: Tính Can Chi năm, tháng, ngày và 12 canh giờ trong ngày (theo quy tắc Ngũ Thử Độn).
- 🔮 **Ngũ Hành Nạp Âm**: Tra cứu bản mệnh trong 60 Hoa Giáp (Hải Trung Kim, Lư Trung Hỏa, Thiên Hà Thủy...).
- ☀️ **24 Tiết Khí**: Tính kinh độ Mặt Trời, xác định tiết khí hiện tại và tìm ngày bắt đầu của từng tiết khí trong năm.
- ⏰ **Giờ Hoàng Đạo / Hắc Đạo**: Danh sách 12 canh giờ kèm trạng thái tốt/xấu, khung giờ và sao trực nhật.
- 🎊 **Ngày Lễ Việt Nam**: Tra cứu đầy đủ các ngày lễ Dương lịch, Âm lịch, ngày nghỉ lễ chính thức (Labor Law), ngày truyền thống dân gian và Phật giáo.
- 📅 **Month Grid Generator**: Sinh ma trận lưới lịch tháng dạng tuần và ngày, giúp render UI trong React, Vue, Svelte, Next.js cực kỳ dễ dàng.

---

## 📦 Cài Đặt

Cài đặt thông qua npm, yarn hoặc pnpm:

```bash
# npm
npm install @chonoi/vietnamese-lunar-calendar

# yarn
yarn add @chonoi/vietnamese-lunar-calendar

# pnpm
pnpm add @chonoi/vietnamese-lunar-calendar
```

---

## ⚡ Bắt Đầu Nhanh (Quick Start)

### Sử dụng ESM (ES Modules / TypeScript / Next.js / Vite)

```javascript
import {
  convertSolar2Lunar,
  convertLunar2Solar,
  getLunarDateInfo,
  formatFullDateString
} from '@chonoi/vietnamese-lunar-calendar';

// 1. Chuyển ngày Dương sang Âm
const lunar = convertSolar2Lunar(10, 2, 2024);
console.log(lunar);
// Kết quả: { day: 1, month: 1, year: 2024, isLeapMonth: false, jd: 2460351 }

// 2. Chuỗi thông tin đầy đủ
console.log(formatFullDateString(10, 2, 2024));
// "Thứ Bảy, 10/02/2024 Dương lịch - Mùng 1 tháng giêng năm Giáp Thìn (Rồng)"

// 3. Lấy trọn bộ thông tin phong thủy, hoàng đạo, ngày lễ chỉ với 1 hàm
const info = getLunarDateInfo(10, 2, 2024);
console.log(info.canChi.year.full);          // "Giáp Thìn"
console.log(info.canChi.year.napAm);         // "Phúc Đăng Hỏa"
console.log(info.astrology.solarTerm.name);  // "Lập xuân"
console.log(info.isPublicHoliday);           // true
```

### Sử dụng CommonJS (Node.js cũ)

```javascript
const {
  convertSolar2Lunar,
  getYearCanChi,
  getAuspiciousHoursSummary
} = require('@chonoi/vietnamese-lunar-calendar');

const lunar = convertSolar2Lunar(29, 1, 2025);
console.log(`Mùng ${lunar.day} tháng ${lunar.month} ÂL`);
```

---

## 📖 Hướng Dẫn Sử Dụng Chi Tiết

### 1. Chuyển đổi Dương lịch sang Âm lịch

```javascript
import { convertSolar2Lunar } from '@chonoi/vietnamese-lunar-calendar';

// Ngày 10 tháng 02 năm 2024 (Mùng 1 Tết Giáp Thìn)
const lunar = convertSolar2Lunar(10, 2, 2024);

console.log(lunar);
/*
{
  day: 1,               // Ngày âm lịch
  month: 1,             // Tháng âm lịch
  year: 2024,           // Năm âm lịch
  isLeapMonth: false,   // Có phải tháng nhuận không
  jd: 2460351           // Số ngày Julian (JDN)
}
*/
```

### 2. Chuyển đổi Âm lịch sang Dương lịch

```javascript
import { convertLunar2Solar } from '@chonoi/vietnamese-lunar-calendar';

// Tìm ngày Dương lịch của Mùng 1 Tết năm Giáp Thìn (01/01/2024 ÂL)
const solar = convertLunar2Solar(1, 1, 2024, false);

console.log(solar);
/*
{
  day: 10,
  month: 2,
  year: 2024,
  jd: 2460351
}
*/
```

### 3. Kiểm tra Tháng Nhuận và Số ngày trong tháng

```javascript
import {
  getLeapMonthInYear,
  getDaysInLunarMonth,
  getDaysInSolarMonth
} from '@chonoi/vietnamese-lunar-calendar';

// Kiểm tra năm âm lịch có tháng nào nhuận:
console.log(getLeapMonthInYear(2023)); // 2 (Năm 2023 nhuận tháng 2)
console.log(getLeapMonthInYear(2024)); // 0 (Năm 2024 không có tháng nhuận)
console.log(getLeapMonthInYear(2025)); // 6 (Năm 2025 nhuận tháng 6)

// Kiểm tra tháng âm lịch là tháng thiếu (29 ngày) hay tháng đủ (30 ngày)
console.log(getDaysInLunarMonth(1, 2024)); // 30 ngày (tháng đủ)
console.log(getDaysInLunarMonth(2, 2024)); // 29 ngày (tháng thiếu)

// Số ngày của tháng dương lịch
console.log(getDaysInSolarMonth(2, 2024)); // 29 ngày (năm nhuận dương lịch)
```

### 4. Can Chi và Con Giáp

Hỗ trợ tính Can Chi đầy đủ của **Năm**, **Tháng**, **Ngày** và **12 canh Giờ trong ngày**:

```javascript
import {
  getYearCanChi,
  getMonthCanChi,
  getDayCanChi,
  getHourCanChi,
  getAll12HoursCanChi
} from '@chonoi/vietnamese-lunar-calendar';

// 1. Can Chi Năm
const yearCC = getYearCanChi(2024);
console.log(yearCC.full);    // "Giáp Thìn"
console.log(yearCC.conGiap); // "Rồng"
console.log(yearCC.napAm);   // "Phúc Đăng Hỏa"

// 2. Can Chi Tháng
const monthCC = getMonthCanChi(1, 2024);
console.log(monthCC.full);   // "Bính Dần"

// 3. Can Chi Ngày
const dayCC = getDayCanChi(10, 2, 2024);
console.log(dayCC.full);     // "Giáp Thìn"

// 4. Can Chi của một giờ cụ thể trong ngày (ví dụ: 14 giờ chiều)
const hourCC = getHourCanChi(14, 10, 2, 2024);
console.log(hourCC.full);      // "Tân Mùi"
console.log(hourCC.timeRange); // "13:00 - 15:00"

// 5. Danh sách toàn bộ 12 canh giờ trong ngày (Tý đến Hợi)
const allHours = getAll12HoursCanChi(10, 2, 2024);
allHours.forEach(h => {
  console.log(`Giờ ${h.full} (${h.timeRange})`);
});
```

### 5. Ngũ Hành Nạp Âm (Lục Thập Hoa Giáp)

```javascript
import { getNapAm } from '@chonoi/vietnamese-lunar-calendar';

console.log(getNapAm('Giáp', 'Tý'));  // "Hải Trung Kim"
console.log(getNapAm('Bính', 'Dần')); // "Lư Trung Hỏa"
console.log(getNapAm('Mậu', 'Thìn')); // "Đại Lâm Mộc"
console.log(getNapAm('Bính', 'Ngọ')); // "Thiên Hà Thủy"
```

### 6. 24 Tiết Khí

```javascript
import { getSolarTerm, getSolarTermsOfYear } from '@chonoi/vietnamese-lunar-calendar';

// Lấy tiết khí của ngày hôm nay
const term = getSolarTerm(21, 3, 2024);
console.log(term.name);   // "Xuân phân"
console.log(term.degree); // 0 độ kinh độ Mặt Trời

// Lấy danh sách ngày bắt đầu của tất cả 24 tiết khí trong năm 2024
const termsOfYear = getSolarTermsOfYear(2024);
termsOfYear.forEach(t => {
  console.log(`${t.day}/${t.month}/${t.year}: ${t.name} (${t.degree}°)`);
});
```

### 7. Giờ Hoàng Đạo / Hắc Đạo

```javascript
import {
  getAuspiciousHours,
  isHourAuspicious,
  getAuspiciousHoursSummary
} from '@chonoi/vietnamese-lunar-calendar';

// Tóm tắt các giờ hoàng đạo trong ngày
console.log(getAuspiciousHoursSummary(10, 2, 2024));
// "Tý (23-1), Sửu (1-3), Mão (5-7), Ngọ (11-13), Thân (15-17), Dậu (17-19)"

// Kiểm tra lúc 9h sáng có phải giờ hoàng đạo không
console.log(isHourAuspicious(9, 10, 2, 2024)); // false (Giờ Tỵ - Hắc đạo)

// Xem chi tiết 12 canh giờ (tên sao, loại hoàng/hắc đạo, khung giờ)
const hours = getAuspiciousHours(10, 2, 2024);
hours.forEach(h => {
  console.log(`Giờ ${h.chi} (${h.timeRange}): ${h.type}`);
});
```

### 8. Tra cứu Ngày Lễ & Ngày Nghỉ Chính Thức

```javascript
import {
  getHolidaysForDate,
  isPublicHoliday,
  getPublicHolidaysInYear,
  getHolidaysInSolarMonth
} from '@chonoi/vietnamese-lunar-calendar';

// 1. Kiểm tra ngày bất kỳ có ngày lễ gì không
const holidays = getHolidaysForDate(30, 4, 2024);
console.log(holidays[0].name); // "Ngày Giải phóng miền Nam"
console.log(holidays[0].type); // "public"

// 2. Kiểm tra xem ngày đó có phải ngày nghỉ lễ chính thức theo Luật Lao động không
console.log(isPublicHoliday(30, 4, 2024)); // true
console.log(isPublicHoliday(14, 2, 2024)); // false (Lễ tình nhân Valentine không phải ngày nghỉ lễ công vụ)

// 3. Lấy tất cả ngày nghỉ lễ chính thức trong năm 2024 (kèm ngày Dương lịch tương ứng)
const publicHolidays = getPublicHolidaysInYear(2024);
publicHolidays.forEach(h => {
  console.log(`${h.day}/${h.month}/${h.year}: ${h.name} (${h.origin})`);
});
/*
Output:
01/01/2024: Tết Dương lịch (Dương lịch 01/01)
10/02/2024: Mùng 1 Tết Nguyên Đán (Âm lịch 01/01)
11/02/2024: Mùng 2 Tết (Âm lịch 02/01)
12/02/2024: Mùng 3 Tết (Âm lịch 03/01)
18/04/2024: Giỗ Tổ Hùng Vương (Âm lịch 10/03)
30/04/2024: Ngày Giải phóng miền Nam (Dương lịch 30/04)
01/05/2024: Ngày Quốc tế Lao động (Dương lịch 01/05)
02/09/2024: Quốc khánh Việt Nam (Dương lịch 02/09)
*/
```

### 9. Sinh Lưới Lịch Tháng (Month Calendar Matrix)

Cực kỳ tiện lợi để render giao diện Calendar trong React, Vue, Svelte, hoặc in ra CLI:

```javascript
import { getMonthCalendar } from '@chonoi/vietnamese-lunar-calendar';

// Sinh lịch tháng 2 năm 2024, bắt đầu tuần từ Thứ Hai (weekStartsOn: 1)
const cal = getMonthCalendar(2, 2024, { weekStartsOn: 1 });

console.log(`Tháng ${cal.month}/${cal.year} có ${cal.totalDays} ngày, gồm ${cal.weeksCount} tuần:`);

cal.weeks.forEach((week, wIndex) => {
  const line = week.map(d => {
    const mark = d.isCurrentMonth ? `${d.solarDay}(${d.lunarText})` : `.${d.solarDay}`;
    return mark.padEnd(12);
  }).join(' ');
  console.log(`Tuần ${wIndex + 1}: ${line}`);
});
```

### 10. Định dạng chuỗi Ngày Âm lịch (Formatting)

```javascript
import { formatLunarDate, formatFullDateString } from '@chonoi/vietnamese-lunar-calendar';

const lunar = { day: 1, month: 1, year: 2024, isLeapMonth: false };

// Format theo các tokens: DD, D, MM, M, MMMM, YYYY, yyyy, W
console.log(formatLunarDate(lunar, 'DD/MM/YYYY'));     // "01/01/Giáp Thìn"
console.log(formatLunarDate(lunar, 'D MMMM năm YYYY (con W)'));
// "1 Tháng Giêng năm Giáp Thìn (con Rồng)"

// Chuỗi diễn giải đầy đủ
console.log(formatFullDateString(10, 2, 2024));
// "Thứ Bảy, 10/02/2024 Dương lịch - Mùng 1 tháng giêng năm Giáp Thìn (Rồng)"
```

---

## 💻 Ví Dụ Tích Hợp Frontend (React / React Native / Vue)

```jsx
import React from 'react';
import { getMonthCalendar, isPublicHoliday } from '@chonoi/vietnamese-lunar-calendar';

export function LunarCalendarView({ month, year }) {
  const calendar = getMonthCalendar(month, year, { weekStartsOn: 1 });

  return (
    <div className="calendar-grid">
      <div className="weekdays">
        {['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'].map(t => (
          <div key={t} className="weekday-header">{t}</div>
        ))}
      </div>

      {calendar.weeks.map((week, wIdx) => (
        <div key={wIdx} className="calendar-row">
          {week.map((cell, cIdx) => (
            <div
              key={cIdx}
              className={`calendar-cell ${cell.isCurrentMonth ? 'active' : 'faded'} ${cell.isPublicHoliday ? 'holiday' : ''}`}
            >
              <span className="solar-day">{cell.solarDay}</span>
              <span className="lunar-day">{cell.lunarDay === 1 ? `${cell.lunarDay}/${cell.lunarMonth}` : cell.lunarDay}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
```

---

## 🖥️ Chạy Trực Tiếp Qua CLI (Command Line Interface)

Bạn có thể chạy ngay trên terminal mà không cần cài đặt:

```bash
# Xem thông tin ngày hôm nay
npx @chonoi/vietnamese-lunar-calendar today

# Xem bảng lịch tháng 2 năm 2024
npx @chonoi/vietnamese-lunar-calendar month 2 2024

# Tra cứu ngày cụ thể (ngày 10 tháng 2 năm 2024)
npx @chonoi/vietnamese-lunar-calendar date 10 2 2024
```

---

## 🚀 Hướng Dẫn Chia Sẻ Lên NPM (Publishing to npmjs.com)

Package đã được cấu hình sẵn dưới tên scope `@chonoi/vietnamese-lunar-calendar`. Để chia sẻ lên npm:

### Bước 1: Đăng ký tài khoản npm
Nếu bạn chưa có tài khoản, hãy truy cập [https://www.npmjs.com/signup](https://www.npmjs.com/signup) để tạo tài khoản miễn phí.

> **Lưu ý về Organization / Scope:**  
> Nếu tài khoản hoặc tổ chức trên npm của bạn có tên là `chonoi`, bạn có thể publish trực tiếp. Nếu username của bạn khác (ví dụ `myuser`), bạn có thể đổi `"@chonoi/vietnamese-lunar-calendar"` thành `"@myuser/vietnamese-lunar-calendar"` trong `package.json` hoặc tạo Organization `chonoi` trên npmjs.com.

### Bước 2: Đăng nhập vào npm CLI từ terminal
Chạy lệnh sau:
```bash
npm login
```
Kiểm tra đăng nhập thành công:
```bash
npm whoami
```

### Bước 3: Build và Chạy Kiểm Thử
```bash
cd packages/vietnamese-lunar-calendar
npm test
npm run build
```

### Bước 4: Publish công khai lên NPM
Vì package có scope (`@chonoi/...`), npm yêu cầu flag `--access public`:
```bash
npm publish --access public
```

Sau khi publish, trang package sẽ hoạt động công khai tại:  
👉 [https://www.npmjs.com/package/@chonoi/vietnamese-lunar-calendar](https://www.npmjs.com/package/@chonoi/vietnamese-lunar-calendar)

---

## 💡 Gợi Ý Các Hướng Mở Rộng Tiếp Theo (Recommendations)

1. **Thập Nhị Trực (12 Trực)**: Bổ sung cách tính Kiến, Trừ, Mãn, Bình, Định, Chấp, Phá, Nguy, Thành, Thâu, Khai, Bế (dùng để chọn ngày khởi công, khai trương, xuất hành).
2. **Nhị Thập Bát Tú (28 Chòm sao)**: Tính sao chủ nhật theo chu kỳ 28 ngày (Giác, Cang, Đê, Phòng, Tâm, Vĩ, Cơ...).
3. **Tuổi Xung / Hợp ngày**: Tính tam hợp, lục hợp, tứ hành xung giữa tuổi gia chủ và ngày âm lịch.
4. **React Hook Package**: Tạo thêm subpath hoặc wrapper hook `useLunarDate(date)` giúp dev React tự động cập nhật lịch theo thời gian thực.
5. **Tự động hóa CI/CD**: Thiết lập GitHub Action `.github/workflows/publish.yml` để mỗi khi tạo git release tag `v*.*.*`, hệ thống sẽ tự động chạy test, build và publish lên npm.

---

## 📜 Giấy Phép (License)

Dự án phát hành theo giấy phép [MIT License](LICENSE).  
Thuật toán thiên văn bản quyền của tác giả Hồ Ngọc Đức (2006) và Jean Meeus (1998).
