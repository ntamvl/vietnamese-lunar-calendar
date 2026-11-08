/**
 * Vietnamese Lunar Calendar - Holidays Data
 * Comprehensive list of Vietnamese public holidays, traditional festivals,
 * commemorative observances, and Buddhist celebrations.
 */

export const SOLAR_HOLIDAYS = [
  { id: 'new_year', month: 1, day: 1, name: 'Tết Dương lịch', type: 'public', official: true, tags: ['holiday', 'global'] },
  { id: 'party_founding', month: 2, day: 3, name: 'Ngày thành lập Đảng CSVN', type: 'commemorative', official: false, tags: ['national'] },
  { id: 'valentine', month: 2, day: 14, name: 'Lễ tình nhân (Valentine)', type: 'commemorative', official: false, tags: ['social', 'global'] },
  { id: 'doctor_day', month: 2, day: 27, name: 'Ngày Thầy thuốc Việt Nam', type: 'commemorative', official: false, tags: ['social'] },
  { id: 'women_intl', month: 3, day: 8, name: 'Ngày Quốc tế Phụ nữ', type: 'commemorative', official: false, tags: ['social', 'global'] },
  { id: 'youth_union', month: 3, day: 26, name: 'Ngày thành lập Đoàn TNCS HCM', type: 'commemorative', official: false, tags: ['national'] },
  { id: 'earth_day', month: 4, day: 22, name: 'Ngày Trái Đất', type: 'commemorative', official: false, tags: ['global'] },
  { id: 'ip_day', month: 4, day: 26, name: 'Ngày Sở hữu trí tuệ thế giới', type: 'commemorative', official: false, tags: ['global'] },
  { id: 'reunification_day', month: 4, day: 30, name: 'Ngày Giải phóng miền Nam', type: 'public', official: true, tags: ['national', 'holiday'] },
  { id: 'labor_day', month: 5, day: 1, name: 'Ngày Quốc tế Lao động', type: 'public', official: true, tags: ['holiday', 'global'] },
  { id: 'dien_bien_phu', month: 5, day: 7, name: 'Chiến thắng Điện Biên Phủ', type: 'commemorative', official: false, tags: ['national'] },
  { id: 'hcm_birthday', month: 5, day: 19, name: 'Ngày sinh Chủ tịch Hồ Chí Minh', type: 'commemorative', official: false, tags: ['national'] },
  { id: 'children_day', month: 6, day: 1, name: 'Ngày Quốc tế Thiếu nhi', type: 'commemorative', official: false, tags: ['social', 'global'] },
  { id: 'family_day', month: 6, day: 28, name: 'Ngày Gia đình Việt Nam', type: 'commemorative', official: false, tags: ['social'] },
  { id: 'veterans_day', month: 7, day: 27, name: 'Ngày Thương binh Liệt sĩ', type: 'commemorative', official: false, tags: ['national'] },
  { id: 'august_revolution', month: 8, day: 19, name: 'Cách mạng Tháng Tám', type: 'commemorative', official: false, tags: ['national'] },
  { id: 'independence_day', month: 9, day: 2, name: 'Quốc khánh Việt Nam', type: 'public', official: true, tags: ['national', 'holiday'] },
  { id: 'hanoi_liberation', month: 10, day: 10, name: 'Ngày Giải phóng Thủ đô', type: 'commemorative', official: false, tags: ['national'] },
  { id: 'women_vn', month: 10, day: 20, name: 'Ngày Phụ nữ Việt Nam', type: 'commemorative', official: false, tags: ['social'] },
  { id: 'teachers_day', month: 11, day: 20, name: 'Ngày Nhà giáo Việt Nam', type: 'commemorative', official: false, tags: ['education'] },
  { id: 'army_day', month: 12, day: 22, name: 'Ngày thành lập QĐNDVN', type: 'commemorative', official: false, tags: ['national'] },
  { id: 'christmas_eve', month: 12, day: 24, name: 'Đêm Giáng sinh (Noel)', type: 'commemorative', official: false, tags: ['social', 'global'] },
  { id: 'christmas', month: 12, day: 25, name: 'Giáng sinh (Noel)', type: 'commemorative', official: false, tags: ['social', 'global'] }
];

export const LUNAR_HOLIDAYS = [
  { id: 'tet_nguyen_dan', lunarMonth: 1, lunarDay: 1, name: 'Tết Nguyên Đán (Mùng 1)', type: 'public', official: true, tags: ['holiday', 'lunar'] },
  { id: 'm2_tet', lunarMonth: 1, lunarDay: 2, name: 'Mùng 2 Tết', type: 'public', official: true, tags: ['holiday', 'lunar'] },
  { id: 'm3_tet', lunarMonth: 1, lunarDay: 3, name: 'Mùng 3 Tết', type: 'public', official: true, tags: ['holiday', 'lunar'] },
  { id: 'm4_tet', lunarMonth: 1, lunarDay: 4, name: 'Mùng 4 Tết', type: 'traditional', official: false, tags: ['folk', 'lunar'] },
  { id: 'm5_tet', lunarMonth: 1, lunarDay: 5, name: 'Mùng 5 Tết', type: 'traditional', official: false, tags: ['folk', 'lunar'] },
  { id: 'via_than_tai', lunarMonth: 1, lunarDay: 10, name: 'Vía Thần Tài', type: 'traditional', official: false, tags: ['folk', 'lunar'] },
  { id: 'ram_thang_gieng', lunarMonth: 1, lunarDay: 15, name: 'Tết Nguyên Tiêu (Rằm tháng Giêng)', type: 'traditional', official: false, tags: ['buddhist', 'lunar'] },
  { id: 'via_quan_am_2', lunarMonth: 2, lunarDay: 19, name: 'Vía Quan Thế Âm Bồ Tát', type: 'buddhist', official: false, tags: ['buddhist', 'lunar'] },
  { id: 'tet_han_thuc', lunarMonth: 3, lunarDay: 3, name: 'Tết Hàn thực', type: 'traditional', official: false, tags: ['folk', 'lunar'] },
  { id: 'hung_kings', lunarMonth: 3, lunarDay: 10, name: 'Giỗ Tổ Hùng Vương', type: 'public', official: true, tags: ['national', 'holiday', 'lunar'] },
  { id: 'phat_dan', lunarMonth: 4, lunarDay: 15, name: 'Lễ Phật Đản (Vesak)', type: 'buddhist', official: false, tags: ['buddhist', 'lunar'] },
  { id: 'tet_doan_ngo', lunarMonth: 5, lunarDay: 5, name: 'Tết Đoan Ngọ', type: 'traditional', official: false, tags: ['folk', 'lunar'] },
  { id: 'via_quan_am_6', lunarMonth: 6, lunarDay: 19, name: 'Vía Quan Thế Âm Bồ Tát', type: 'buddhist', official: false, tags: ['buddhist', 'lunar'] },
  { id: 'vu_lan', lunarMonth: 7, lunarDay: 15, name: 'Lễ Vu Lan Báo Hiếu (Rằm tháng Bảy)', type: 'traditional', official: false, tags: ['buddhist', 'folk', 'lunar'] },
  { id: 'trung_thu', lunarMonth: 8, lunarDay: 15, name: 'Tết Trung Thu (Rằm tháng Tám)', type: 'traditional', official: false, tags: ['folk', 'lunar'] },
  { id: 'tet_trung_cuu', lunarMonth: 9, lunarDay: 9, name: 'Tết Trùng Cửu', type: 'traditional', official: false, tags: ['folk', 'lunar'] },
  { id: 'via_quan_am_9', lunarMonth: 9, lunarDay: 19, name: 'Vía Quan Thế Âm Bồ Tát', type: 'buddhist', official: false, tags: ['buddhist', 'lunar'] },
  { id: 'via_phat_a_di_da', lunarMonth: 11, lunarDay: 17, name: 'Vía Phật A Di Đà', type: 'buddhist', official: false, tags: ['buddhist', 'lunar'] },
  { id: 'ong_cong_ong_tao', lunarMonth: 12, lunarDay: 23, name: 'Tết Ông Công Ông Táo', type: 'traditional', official: false, tags: ['folk', 'lunar'] },
  { id: 'tat_nien_29', lunarMonth: 12, lunarDay: 29, name: '29 Tết (Tất niên)', type: 'traditional', official: false, tags: ['folk', 'lunar'] },
  { id: 'tat_nien_30', lunarMonth: 12, lunarDay: 30, name: 'Giao Thừa (30 Tết)', type: 'public', official: true, tags: ['holiday', 'lunar'] }
];

export const HOLIDAY_TYPE_EMOJI = {
  public: '🔴',
  commemorative: '🔵',
  traditional: '🟡',
  buddhist: '☸️'
};

export const HOLIDAY_TYPE_LABEL = {
  public: 'Nghỉ lễ',
  commemorative: 'Kỷ niệm',
  traditional: 'Truyền thống',
  buddhist: 'Phật giáo'
};
