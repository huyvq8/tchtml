# Hướng dẫn xem HTML trên điện thoại

## Cách 1: Sử dụng Python HTTP Server (Khuyến nghị - Đơn giản nhất)

### Bước 1: Khởi động server trên máy tính

Mở PowerShell tại thư mục dự án và chạy:

```powershell
cd "C:\tc html login\tchtml"
python -m http.server 8000
```

Hoặc sử dụng script tự động:
```powershell
.\start_server.ps1
```

Server sẽ chạy tại: `http://localhost:8000`

### Bước 2: Tìm địa chỉ IP của máy tính

Trong PowerShell khác, chạy:
```powershell
ipconfig | findstr IPv4
```

Hoặc xem địa chỉ IP trong thông báo khi chạy server.

### Bước 3: Kết nối điện thoại vào cùng mạng WiFi

**QUAN TRỌNG:** Điện thoại và máy tính phải cùng một mạng WiFi.

### Bước 4: Mở trình duyệt trên điện thoại

Nhập địa chỉ vào trình duyệt điện thoại:
```
http://<IP-của-máy-tính>:8000
```

Ví dụ: `http://192.168.1.100:8000`

### Bước 5: Truy cập các file HTML mobile

Sau khi mở, bạn sẽ thấy danh sách file. Click vào:
- `html/mobile/login.html`
- `html/mobile/register.html`
- `html/mobile/active-account.html`
- `html/mobile/forgot-password.html`
- `html/mobile/otp.html`

## Cách 2: Sử dụng Node.js http-server

### Cài đặt (chỉ cần làm 1 lần):
```powershell
npm install -g http-server
```

### Chạy server:
```powershell
cd "C:\tc html login\tchtml"
http-server -p 8000
```

Sau đó làm tương tự như Cách 1.

## Cách 3: Sử dụng Live Server (VS Code Extension)

1. Cài extension **Live Server** trong VS Code
2. Click chuột phải vào file HTML → **Open with Live Server**
3. Server sẽ tự động mở và hiển thị địa chỉ IP

## Cách 4: Sử dụng ngrok (Truy cập từ xa)

Nếu muốn truy cập từ xa (không cần cùng WiFi):

1. Tải ngrok tại: https://ngrok.com/download
2. Chạy server Python như Cách 1
3. Trong terminal khác:
   ```powershell
   ngrok http 8000
   ```
4. Copy URL từ ngrok (ví dụ: `https://abc123.ngrok.io`)
5. Truy cập từ điện thoại bằng URL này

## Lưu ý quan trọng

1. **Firewall:** Nếu không truy cập được, có thể cần tắt Windows Firewall tạm thời hoặc cho phép Python qua firewall.

2. **Địa chỉ IP:** IP có thể thay đổi mỗi lần kết nối WiFi. Nếu không truy cập được, kiểm tra lại IP.

3. **Port:** Nếu port 8000 bị chiếm, có thể đổi sang port khác:
   ```powershell
   python -m http.server 8080
   ```

4. **Dừng server:** Nhấn `Ctrl + C` trong terminal để dừng server.

## Troubleshooting

- **Không truy cập được từ điện thoại:**
  - Kiểm tra cùng WiFi
  - Kiểm tra Firewall
  - Thử đổi port

- **CSS/Images không hiển thị:**
  - Đảm bảo đường dẫn trong HTML đúng
  - Kiểm tra console trên điện thoại (Chrome DevTools Remote)

- **Xem console trên điện thoại:**
  - Kết nối điện thoại USB
  - Mở Chrome trên máy tính: `chrome://inspect`
  - Chọn điện thoại và inspect

