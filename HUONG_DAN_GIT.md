# Hướng dẫn push code lên GitHub

## Yêu cầu
- Git đã được cài đặt (tải tại: https://git-scm.com/download/win)
- Đã có tài khoản GitHub và quyền truy cập vào repository https://github.com/huyvq8/tchtml

## Các bước thực hiện

### Cách 1: Sử dụng script tự động
Chạy file `setup_git_repo.ps1`:
```powershell
.\setup_git_repo.ps1
```

### Cách 2: Chạy thủ công từng lệnh

1. **Khởi tạo git repository** (nếu chưa có):
```bash
git init
```

2. **Thêm remote repository**:
```bash
git remote add origin https://github.com/huyvq8/tchtml.git
```
(Nếu đã có remote, dùng: `git remote set-url origin https://github.com/huyvq8/tchtml.git`)

3. **Thêm tất cả các file vào staging**:
```bash
git add .
```

4. **Commit các file**:
```bash
git commit -m "Initial commit: Add all project files"
```

5. **Đổi tên branch thành main** (nếu cần):
```bash
git branch -M main
```

6. **Push lên GitHub**:
```bash
git push -u origin main
```

## Lưu ý về xác thực
GitHub có thể yêu cầu xác thực. Bạn có thể:
- Sử dụng Personal Access Token (PAT) thay vì password
- Hoặc cấu hình SSH keys

Để tạo Personal Access Token:
1. Vào GitHub Settings > Developer settings > Personal access tokens > Tokens (classic)
2. Tạo token mới với quyền `repo`
3. Sử dụng token này khi push
