/**
 * Vietnamese Lunar Calendar - Constants
 * Copyright (c) 2026 Chonoi & Contributors
 * Licensed under the MIT License
 */

export const DEFAULT_TIMEZONE = 7.0; // Vietnam Timezone UTC+7

// 10 Thiên Can (Heavenly Stems)
export const CAN = [
  'Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu',
  'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý'
];

// 12 Địa Chi (Earthly Branches)
export const CHI = [
  'Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tỵ',
  'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi'
];

// 12 Con Giáp tương ứng Địa Chi
export const CON_GIAP = [
  'Chuột', 'Trâu', 'Hổ', 'Mèo', 'Rồng', 'Rắn',
  'Ngựa', 'Dê', 'Khỉ', 'Gà', 'Chó', 'Lợn'
];

// Tên 12 tháng âm lịch truyền thống
export const THANG_AM = [
  'Giêng', 'Hai', 'Ba', 'Tư', 'Năm', 'Sáu',
  'Bảy', 'Tám', 'Chín', 'Mười', 'Mười Một', 'Chạp'
];

// Tên ngày trong tuần (0: Chủ Nhật -> 6: Thứ Bảy)
export const THU = [
  'Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư',
  'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'
];

// Tên viết tắt các ngày trong tuần
export const THU_NGAN = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];

// Khung giờ của 12 Địa Chi trong ngày
export const KHUNG_GIO_CHI = [
  { chi: 'Tý', start: '23:00', end: '01:00', startHour: 23, endHour: 1 },
  { chi: 'Sửu', start: '01:00', end: '03:00', startHour: 1, endHour: 3 },
  { chi: 'Dần', start: '03:00', end: '05:00', startHour: 3, endHour: 5 },
  { chi: 'Mão', start: '05:00', end: '07:00', startHour: 5, endHour: 7 },
  { chi: 'Thìn', start: '07:00', end: '09:00', startHour: 7, endHour: 9 },
  { chi: 'Tỵ', start: '09:00', end: '11:00', startHour: 9, endHour: 11 },
  { chi: 'Ngọ', start: '11:00', end: '13:00', startHour: 11, endHour: 13 },
  { chi: 'Mùi', start: '13:00', end: '15:00', startHour: 13, endHour: 15 },
  { chi: 'Thân', start: '15:00', end: '17:00', startHour: 15, endHour: 17 },
  { chi: 'Dậu', start: '17:00', end: '19:00', startHour: 17, endHour: 19 },
  { chi: 'Tuất', start: '19:00', end: '21:00', startHour: 19, endHour: 21 },
  { chi: 'Hợi', start: '21:00', end: '23:00', startHour: 21, endHour: 23 }
];

// 24 Tiết khí theo góc kinh độ Mặt Trời (mỗi tiết khí 15 độ, bắt đầu từ Xuân Phân = 0 độ)
export const TIET_KHI = [
  { id: 'xuan_phan', name: 'Xuân phân', degree: 0, approximateDate: '20-21/03' },
  { id: 'thanh_minh', name: 'Thanh minh', degree: 15, approximateDate: '04-05/04' },
  { id: 'coc_vu', name: 'Cốc vũ', degree: 30, approximateDate: '20-21/04' },
  { id: 'lap_ha', name: 'Lập hạ', degree: 45, approximateDate: '05-06/05' },
  { id: 'tieu_man', name: 'Tiểu mãn', degree: 60, approximateDate: '21-22/05' },
  { id: 'mang_chung', name: 'Mang chủng', degree: 75, approximateDate: '05-06/06' },
  { id: 'ha_chi', name: 'Hạ chí', degree: 90, approximateDate: '21-22/06' },
  { id: 'tieu_thu', name: 'Tiểu thử', degree: 105, approximateDate: '07-08/07' },
  { id: 'dai_thu', name: 'Đại thử', degree: 120, approximateDate: '22-23/07' },
  { id: 'lap_thu', name: 'Lập thu', degree: 135, approximateDate: '07-08/08' },
  { id: 'xu_thu', name: 'Xử thử', degree: 150, approximateDate: '23-24/08' },
  { id: 'bach_lo', name: 'Bạch lộ', degree: 165, approximateDate: '07-08/09' },
  { id: 'thu_phan', name: 'Thu phân', degree: 180, approximateDate: '23-24/09' },
  { id: 'han_lo', name: 'Hàn lộ', degree: 195, approximateDate: '08-09/10' },
  { id: 'suong_giang', name: 'Sương giáng', degree: 210, approximateDate: '23-24/10' },
  { id: 'lap_dong', name: 'Lập đông', degree: 225, approximateDate: '07-08/11' },
  { id: 'tieu_tuyet', name: 'Tiểu tuyết', degree: 240, approximateDate: '22-23/11' },
  { id: 'dai_tuyet', name: 'Đại tuyết', degree: 255, approximateDate: '07-08/12' },
  { id: 'dong_chi', name: 'Đông chí', degree: 270, approximateDate: '21-22/12' },
  { id: 'tieu_han', name: 'Tiểu hàn', degree: 285, approximateDate: '05-06/01' },
  { id: 'dai_han', name: 'Đại hàn', degree: 300, approximateDate: '20-21/01' },
  { id: 'lap_xuan', name: 'Lập xuân', degree: 315, approximateDate: '04-05/02' },
  { id: 'vu_thuy', name: 'Vũ thủy', degree: 330, approximateDate: '18-19/02' },
  { id: 'kinh_trap', name: 'Kinh trập', degree: 345, approximateDate: '05-06/03' }
];

// Chuỗi nhị phân xác định 6 giờ hoàng đạo trong ngày cho 6 cặp ngày đối xứng (Tý/Ngọ, Sửu/Mùi,...)
// '1' = Hoàng đạo, '0' = Hắc đạo
export const GIO_HOANG_DAO_BITS = [
  '110100101100', // Ngày Tý, Ngọ
  '001101001011', // Ngày Sửu, Mùi
  '110011010010', // Ngày Dần, Thân
  '101100110100', // Ngày Mão, Dậu
  '001011001101', // Ngày Thìn, Tuất
  '010010110011'  // Ngày Tỵ, Hợi
];

// 12 Thần sát chủ nhật tương ứng (6 Hoàng Đạo, 6 Hắc Đạo)
export const THAN_SAT_GIO = [
  { name: 'Thanh Long', isAuspicious: true, type: 'Hoàng đạo' },
  { name: 'Minh Đường', isAuspicious: true, type: 'Hoàng đạo' },
  { name: 'Thiên Hình', isAuspicious: false, type: 'Hắc đạo' },
  { name: 'Chu Tước', isAuspicious: false, type: 'Hắc đạo' },
  { name: 'Kim Quỹ', isAuspicious: true, type: 'Hoàng đạo' },
  { name: 'Thiên Đức', isAuspicious: true, type: 'Hoàng đạo' },
  { name: 'Bạch Hổ', isAuspicious: false, type: 'Hắc đạo' },
  { name: 'Ngọc Đường', isAuspicious: true, type: 'Hoàng đạo' },
  { name: 'Thiên Lao', isAuspicious: false, type: 'Hắc đạo' },
  { name: 'Huyền Vũ', isAuspicious: false, type: 'Hắc đạo' },
  { name: 'Tư Mệnh', isAuspicious: true, type: 'Hoàng đạo' },
  { name: 'Câu Trận', isAuspicious: false, type: 'Hắc đạo' }
];

// 30 Ngũ Hành Nạp Âm của 60 Hoa Giáp
export const NAP_AM_60 = {
  'Giáp Tý': 'Hải Trung Kim',
  'Ất Sửu': 'Hải Trung Kim',
  'Bính Dần': 'Lư Trung Hỏa',
  'Đinh Mão': 'Lư Trung Hỏa',
  'Mậu Thìn': 'Đại Lâm Mộc',
  'Kỷ Tỵ': 'Đại Lâm Mộc',
  'Canh Ngọ': 'Lộ Bàng Thổ',
  'Tân Mùi': 'Lộ Bàng Thổ',
  'Nhâm Thân': 'Kiếm Phong Kim',
  'Quý Dậu': 'Kiếm Phong Kim',
  'Giáp Tuất': 'Sơn Đầu Hỏa',
  'Ất Hợi': 'Sơn Đầu Hỏa',
  'Bính Tý': 'Giản Hạ Thủy',
  'Đinh Sửu': 'Giản Hạ Thủy',
  'Mậu Dần': 'Thành Đầu Thổ',
  'Kỷ Mão': 'Thành Đầu Thổ',
  'Canh Thìn': 'Bạch Lạp Kim',
  'Tân Tỵ': 'Bạch Lạp Kim',
  'Nhâm Ngọ': 'Dương Liễu Mộc',
  'Quý Mùi': 'Dương Liễu Mộc',
  'Giáp Thân': 'Tuyền Trung Thủy',
  'Ất Dậu': 'Tuyền Trung Thủy',
  'Bính Tuất': 'Ốc Thượng Thổ',
  'Đinh Hợi': 'Ốc Thượng Thổ',
  'Mậu Tý': 'Tích Lịch Hỏa',
  'Kỷ Sửu': 'Tích Lịch Hỏa',
  'Canh Dần': 'Tùng Bách Mộc',
  'Tân Mão': 'Tùng Bách Mộc',
  'Nhâm Thìn': 'Trường Lưu Thủy',
  'Quý Tỵ': 'Trường Lưu Thủy',
  'Giáp Ngọ': 'Sa Trung Kim',
  'Ất Mùi': 'Sa Trung Kim',
  'Bính Thân': 'Sơn Hạ Hỏa',
  'Đinh Dậu': 'Sơn Hạ Hỏa',
  'Mậu Tuất': 'Bình Địa Mộc',
  'Kỷ Hợi': 'Bình Địa Mộc',
  'Canh Tý': 'Bích Thượng Thổ',
  'Tân Sửu': 'Bích Thượng Thổ',
  'Nhâm Dần': 'Kim Bạch Kim',
  'Quý Mão': 'Kim Bạch Kim',
  'Giáp Thìn': 'Phúc Đăng Hỏa',
  'Ất Tỵ': 'Phúc Đăng Hỏa',
  'Bính Ngọ': 'Thiên Hà Thủy',
  'Đinh Mùi': 'Thiên Hà Thủy',
  'Mậu Thân': 'Đại Trạch Thổ',
  'Kỷ Dậu': 'Đại Trạch Thổ',
  'Canh Tuất': 'Thoa Xuyến Kim',
  'Tân Hợi': 'Thoa Xuyến Kim',
  'Nhâm Tý': 'Tang Đố Mộc',
  'Quý Sửu': 'Tang Đố Mộc',
  'Giáp Dần': 'Đại Khê Thủy',
  'Ất Mão': 'Đại Khê Thủy',
  'Bính Thìn': 'Sa Trung Thổ',
  'Đinh Tỵ': 'Sa Trung Thổ',
  'Mậu Ngọ': 'Thiên Thượng Hỏa',
  'Kỷ Mùi': 'Thiên Thượng Hỏa',
  'Canh Thân': 'Thạch Lựu Mộc',
  'Tân Dậu': 'Thạch Lựu Mộc',
  'Nhâm Tuất': 'Đại Hải Thủy',
  'Quý Hợi': 'Đại Hải Thủy'
};
