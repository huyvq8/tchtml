# Báo cáo kiểm tra giao diện Mobile

## Tổng quan

File HTML hiện tại: `html/home_final.html`
File CSS: `css/tradecoin.css`

## Breakpoints hiện có

1. **max-width: 1400px** - Desktop nhỏ
2. **max-width: 1024px** - Tablet
3. **max-width: 768px** - Mobile lớn
4. **max-width: 480px** - Mobile nhỏ

## Kiểm tra từng phần

### ✅ Header (Đã có responsive)
- **768px**: Header chuyển thành column, buttons full width
- **Vấn đề tiềm ẩn**: Logo 72px có thể hơi lớn trên mobile nhỏ
- **Đề xuất**: Thêm responsive cho logo size ở 480px

### ✅ Hero Section (Đã có responsive)
- **1024px**: Grid chuyển thành 1 cột, image đưa lên trên
- **768px**: Font sizes giảm, padding giảm
- **480px**: Font sizes nhỏ hơn nữa
- **Vấn đề**: Hero background image cần kiểm tra hiển thị trên mobile

### ⚠️ Section Title White (Cần sửa)
- **Desktop**: 63px - quá lớn
- **768px**: Không có responsive rule cho `.section-title-white`
- **Đề xuất**: Thêm responsive cho `.section-title-white`

### ✅ Platform Benefits (Đã có responsive)
- **1024px**: 2 cột
- **768px**: 1 cột, font sizes giảm
- **480px**: Icon sizes giảm

### ✅ Trading Section (Đã có responsive)
- **1024px**: 1 cột layout
- **768px**: Font sizes giảm
- **480px**: Font sizes nhỏ hơn

### ⚠️ Explore Section (Cần kiểm tra)
- **768px**: Grid chuyển 1 cột
- **Vấn đề**: `.section-title-white` (63px) chưa có responsive
- **Đề xuất**: Thêm responsive rule

### ✅ Commission Section (Đã có responsive)
- **1024px**: 1 cột layout
- **768px**: Font sizes giảm
- **480px**: Font sizes nhỏ hơn

### ✅ Footer (Đã có responsive)
- **768px**: Flex column, text center

## Vấn đề cần sửa

### 1. Section Title White chưa có responsive
```css
.section-title-white {
    font-size: 63px; /* Quá lớn trên mobile */
}
```
**Cần thêm:**
- 768px: ~42px
- 480px: ~32px

### 2. Logo size trên mobile nhỏ
**Cần thêm:**
- 480px: Logo size giảm xuống ~50px

### 3. Hero background image
**Cần kiểm tra:**
- Background image có hiển thị đúng không
- Có cần mobile-specific image không

### 4. Header padding
- Desktop: 186px (quá lớn)
- 1024px: Cần điều chỉnh
- 768px: Đã có 20px ✅

## Đề xuất sửa đổi

1. Thêm responsive cho `.section-title-white`
2. Thêm responsive cho logo size ở mobile nhỏ
3. Kiểm tra và điều chỉnh hero background image
4. Điều chỉnh header padding cho tablet (1024px)

## Checklist so sánh với thiết kế Figma

- [ ] Header layout giống thiết kế
- [ ] Logo size phù hợp
- [ ] Hero section layout đúng
- [ ] Font sizes phù hợp với mobile
- [ ] Spacing/padding phù hợp
- [ ] Buttons size phù hợp
- [ ] Images hiển thị đúng
- [ ] Grid layouts chuyển đổi đúng
- [ ] Footer layout đúng

## Ghi chú

Cần xem thiết kế mobile trong Figma frame "trang chủ phone" để so sánh chi tiết.
