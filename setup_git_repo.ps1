# Script để khởi tạo git repository và push lên GitHub
# Sử dụng: .\setup_git_repo.ps1

# Kiểm tra Git đã được cài đặt chưa
try {
    git --version | Out-Null
    Write-Host "Git đã được cài đặt" -ForegroundColor Green
} catch {
    Write-Host "LỖI: Git chưa được cài đặt. Vui lòng cài đặt Git trước." -ForegroundColor Red
    Write-Host "Tải Git tại: https://git-scm.com/download/win" -ForegroundColor Yellow
    exit 1
}

# Khởi tạo git repository (nếu chưa có)
if (-not (Test-Path .git)) {
    Write-Host "Đang khởi tạo git repository..." -ForegroundColor Yellow
    git init
}

# Thêm remote repository
Write-Host "Đang thêm remote repository..." -ForegroundColor Yellow
git remote remove origin 2>$null
git remote add origin https://github.com/huyvq8/tchtml.git

# Thêm tất cả các file
Write-Host "Đang thêm các file vào staging area..." -ForegroundColor Yellow
git add .

# Commit các thay đổi
Write-Host "Đang commit các file..." -ForegroundColor Yellow
$commitMessage = "Initial commit: Add all project files"
git commit -m $commitMessage

# Kiểm tra xem có branch main không, nếu không thì tạo
$currentBranch = git branch --show-current
if ([string]::IsNullOrEmpty($currentBranch)) {
    git branch -M main
}

# Push lên GitHub
Write-Host "Đang push lên GitHub..." -ForegroundColor Yellow
Write-Host "LƯU Ý: Bạn có thể cần nhập username và password/token của GitHub" -ForegroundColor Cyan
git push -u origin main

Write-Host "Hoàn thành!" -ForegroundColor Green
