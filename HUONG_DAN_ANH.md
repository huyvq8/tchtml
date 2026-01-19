# Hướng dẫn thêm ảnh nền cho trang chủ

## Các ảnh cần xuất từ Figma

Bạn cần xuất các ảnh sau từ Figma design (frame "trang chủ-web") và đặt vào thư mục `images/`:

### 1. Hero Background (Ảnh nền hero section)
- **Tên file**: `hero-bg.jpg`
- **Kích thước**: 1728 x 840 pixels
- **Vị trí trong Figma**: Background layer "bg 1 1" trong hero section
- **Vị trí trong HTML**: `.hero-bg-image` (background của section hero)

### 2. Hero Image (Ảnh chính hero)
- **Tên file**: `hero-image.png`
- **Kích thước**: 633 x 581 pixels
- **Vị trí trong Figma**: Layer "image-02 1" trong hero section
- **Vị trí trong HTML**: `.hero-image img`

### 3. Trading Chart Image (Ảnh biểu đồ trading)
- **Tên file**: `trading-chart.png`
- **Kích thước**: 605 x 530 pixels
- **Vị trí trong Figma**: Layer "ẢNH-BIỂU-ĐỒ 1" trong section "Trade In A More Convenient"
- **Vị trí trong HTML**: `.trading-image img`

### 4. Commission Image (Ảnh section commission)
- **Tên file**: `commission-image.png`
- **Kích thước**: 667 x 612 pixels
- **Vị trí trong Figma**: Layer "image-02 2" trong section "No commission fees"
- **Vị trí trong HTML**: `.commission-image img`

### 5. Explore Card Images (Ảnh cho 3 thẻ explore)
- **Tên file**: 
  - `explore-1.jpg` (Promotions card)
  - `explore-2.jpg` (About Us card)
  - `explore-3.jpg` (FAQ card)
- **Kích thước**: 439 x 232 pixels (mỗi ảnh)
- **Vị trí trong Figma**: Layer "Untitled-7 1" trong các explore cards
- **Vị trí trong HTML**: `.explore-card-image img`

## Cách xuất ảnh từ Figma

1. Mở file Figma: https://www.figma.com/design/lANWgRWaNZA6omY7h4yPNU/tc?node-id=7-811
2. Chọn frame "trang chủ-web"
3. Chọn từng layer/image cần xuất
4. Click chuột phải → "Export" hoặc dùng phím tắt Ctrl+Shift+E
5. Chọn format (JPG cho ảnh nền, PNG cho ảnh có nền trong suốt)
6. Đặt tên file đúng như hướng dẫn trên
7. Xuất với độ phân giải 1x hoặc 2x (tùy chất lượng cần)

## Sau khi xuất ảnh

1. Đặt tất cả các file ảnh vào thư mục `images/` (thư mục gốc của project)
2. Đảm bảo tên file chính xác như hướng dẫn
3. Mở file `html/home_final.html` trong trình duyệt để kiểm tra

## Lưu ý

- Đảm bảo các ảnh có kích thước đúng hoặc tỷ lệ tương tự
- Nếu ảnh lớn hơn, có thể tối ưu hóa để giảm dung lượng file
- HTML và CSS đã được cấu hình để hiển thị ảnh tự động
