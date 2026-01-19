# Script để khởi động HTTP server để xem HTML trên điện thoại
# Sử dụng: .\start_server.ps1

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  HTTP Server cho Mobile HTML Testing" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Kiểm tra Python
try {
    $pythonVersion = python --version 2>&1
    Write-Host "✓ Python đã được cài đặt: $pythonVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ LỖI: Python chưa được cài đặt" -ForegroundColor Red
    Write-Host "Vui lòng cài đặt Python từ: https://www.python.org/downloads/" -ForegroundColor Yellow
    exit 1
}

# Lấy địa chỉ IP
Write-Host ""
Write-Host "Đang lấy địa chỉ IP của máy tính..." -ForegroundColor Yellow
$ipAddresses = ipconfig | Select-String "IPv4" | ForEach-Object { ($_ -split ':')[1].Trim() }
$localIP = $ipAddresses | Where-Object { $_ -notlike "127.*" } | Select-Object -First 1

if ($localIP) {
    Write-Host "✓ Địa chỉ IP: $localIP" -ForegroundColor Green
} else {
    Write-Host "⚠ Không tìm thấy IP. Sử dụng localhost" -ForegroundColor Yellow
    $localIP = "localhost"
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  HƯỚNG DẪN SỬ DỤNG" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Đảm bảo điện thoại và máy tính cùng WiFi" -ForegroundColor White
Write-Host "2. Mở trình duyệt trên điện thoại" -ForegroundColor White
Write-Host "3. Truy cập:" -ForegroundColor White
Write-Host ""
Write-Host "   http://$localIP`:8000" -ForegroundColor Yellow
Write-Host ""
Write-Host "4. Vào thư mục: html/mobile/" -ForegroundColor White
Write-Host "5. Click vào file HTML muốn xem" -ForegroundColor White
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Đang khởi động server..." -ForegroundColor Yellow
Write-Host "Nhấn Ctrl+C để dừng server" -ForegroundColor Gray
Write-Host ""

# Khởi động server
python -m http.server 8000

