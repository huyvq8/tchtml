# Hướng Dẫn Chuyển Figma sang HTML

## Các bước cần thực hiện:

### 1. Phân tích thiết kế Figma
- Mở link Figma và xem kỹ thiết kế
- Xác định các components, layout, colors, fonts
- Lưu ý các breakpoints (responsive design)
- Export assets nếu cần (hình ảnh, icons)

### 2. Lấy thông tin từ Figma
- **Colors**: Copy màu sắc từ Figma (click vào màu → copy hex code)
- **Fonts**: Lưu ý font-family được sử dụng
- **Spacing**: Kiểm tra padding, margin, gaps
- **Assets**: Download hình ảnh, icons cần thiết

### 3. Tạo cấu trúc HTML
- Tạo file `index.html` (file chính)
- Tạo file `style.css` (hoặc `styles.css`) cho styling
- Tạo file `script.js` (nếu cần JavaScript)

### 4. Code HTML/CSS
- Viết HTML structure (semantic HTML)
- Áp dụng CSS theo thiết kế Figma
- Sử dụng CSS Grid hoặc Flexbox cho layout
- Responsive design với media queries

### 5. Tối ưu hóa
- Kiểm tra trên các trình duyệt khác nhau
- Tối ưu hình ảnh
- Kiểm tra responsive trên mobile/tablet/desktop

## Công cụ hỗ trợ:
- **Figma Dev Mode**: Xem CSS properties trực tiếp
- **Figma plugins**: HTML.to.design, Figma to CSS
- **Browser DevTools**: Inspect và debug

## Cấu trúc thư mục gợi ý:
```
TC/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js (nếu cần)
├── images/
│   └── (các file hình ảnh từ Figma)
└── assets/
    └── (icons, fonts, etc.)
```
