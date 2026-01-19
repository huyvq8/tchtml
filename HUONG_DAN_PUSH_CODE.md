# Hướng dẫn Push Code lên GitHub

## Bước 1: Cấu hình Git (chỉ cần làm 1 lần)

Mở PowerShell và chạy các lệnh sau (thay thế thông tin của bạn):

```powershell
git config --global user.name "Tên của bạn"
git config --global user.email "email@example.com"
```

Ví dụ:
```powershell
git config --global user.name "Huy Vo"
git config --global user.email "huyvq8@example.com"
```

## Bước 2: Kiểm tra và thiết lập repository

### Nếu repository chưa được khởi tạo:

```powershell
cd "C:\tc html login\tchtml"
git init
```

### Thêm remote repository:

```powershell
git remote add origin https://github.com/huyvq8/tchtml.git
```

(Nếu đã có remote, cập nhật bằng: `git remote set-url origin https://github.com/huyvq8/tchtml.git`)

## Bước 3: Thêm và commit các thay đổi

```powershell
# Thêm tất cả các file đã thay đổi
git add .

# Commit với message mô tả
git commit -m "Fix CSS and image paths for mobile HTML files"
```

## Bước 4: Push lên GitHub

### Cách 1: Sử dụng Personal Access Token (Khuyến nghị)

1. **Tạo Personal Access Token trên GitHub:**
   - Vào GitHub.com → Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Click "Generate new token (classic)"
   - Đặt tên token (ví dụ: "tchtml-push")
   - Chọn quyền: ✅ **repo** (full control of private repositories)
   - Click "Generate token"
   - **LƯU Ý: Copy token ngay** (chỉ hiện 1 lần)

2. **Push code:**
   ```powershell
   git branch -M main
   git push -u origin main
   ```
   
   Khi được hỏi:
   - **Username:** nhập `huyvq8` (hoặc username của bạn)
   - **Password:** nhập **Personal Access Token** (không phải password GitHub)

### Cách 2: Sử dụng GitHub CLI (nếu đã cài)

```powershell
gh auth login
git push -u origin main
```

### Cách 3: Sử dụng SSH (nếu đã setup SSH keys)

```powershell
git remote set-url origin git@github.com:huyvq8/tchtml.git
git push -u origin main
```

## Lưu ý quan trọng

1. **Nếu gặp lỗi 403 (Permission denied):**
   - Đảm bảo bạn có quyền truy cập vào repository
   - Sử dụng Personal Access Token thay vì password
   - Kiểm tra token có quyền `repo`

2. **Nếu đã có code trên GitHub:**
   - Có thể cần pull trước: `git pull origin main --allow-unrelated-histories`
   - Hoặc force push (cẩn thận): `git push -u origin main --force`

3. **Lần push tiếp theo:**
   Chỉ cần:
   ```powershell
   git add .
   git commit -m "Mô tả thay đổi"
   git push
   ```

## Kiểm tra kết quả

Sau khi push thành công, kiểm tra tại: https://github.com/huyvq8/tchtml

