# Hướng dẫn xin quyền push code vào repository của sếp

## Vấn đề hiện tại
Bạn đang gặp lỗi **403 Permission denied** vì tài khoản `namtm2309` chưa có quyền push vào repository `huyvq8/tchtml.git`.

## Giải pháp: Yêu cầu sếp thêm bạn làm Collaborator

### Bước 1: Liên hệ với sếp (huyvq8)

Gửi cho sếp thông tin sau:
- **Tài khoản GitHub của bạn:** `namtm2309`
- **Email GitHub:** `namht2309@gmail.com`
- **Repository cần quyền:** `huyvq8/tchtml`

### Bước 2: Sếp sẽ thêm bạn làm Collaborator

Sếp cần làm các bước sau trên GitHub:

1. Vào repository: https://github.com/huyvq8/tchtml
2. Click tab **"Settings"** (ở menu trên cùng)
3. Click **"Collaborators"** ở menu bên trái
4. Click **"Add people"**
5. Nhập username: `namtm2309` hoặc email: `namht2309@gmail.com`
6. Chọn quyền: **Write** (để có thể push code)
7. Click **"Add [username] to this repository"**

### Bước 3: Sau khi được thêm quyền

Sau khi sếp thêm bạn, bạn sẽ nhận được email thông báo từ GitHub. Sau đó:

1. **Kiểm tra lại remote:**
   ```powershell
   git remote -v
   ```
   (Nên giữ nguyên: `https://github.com/huyvq8/tchtml.git`)

2. **Push code:**
   ```powershell
   git push --set-upstream origin main
   ```

3. **Nếu được hỏi đăng nhập:**
   - **Username:** `namtm2309`
   - **Password:** Sử dụng **Personal Access Token** (xem hướng dẫn bên dưới)

## Tạo Personal Access Token (Nếu cần)

Nếu GitHub yêu cầu xác thực, bạn cần tạo Personal Access Token:

1. Vào GitHub.com → Click avatar (góc trên bên phải) → **Settings**
2. Scroll xuống → **Developer settings** (ở cuối menu bên trái)
3. Click **Personal access tokens** → **Tokens (classic)**
4. Click **"Generate new token"** → **"Generate new token (classic)"**
5. Đặt tên token: `tchtml-push` (hoặc tên khác)
6. Chọn thời hạn: `90 days` hoặc `No expiration`
7. Chọn quyền: ✅ **repo** (full control of private repositories)
8. Click **"Generate token"**
9. **COPY TOKEN NGAY** (chỉ hiện 1 lần, không thể xem lại)

Khi push code, dùng token này làm password (không phải password GitHub).

## Lưu ý

- Đảm bảo bạn đang đăng nhập đúng tài khoản GitHub `namtm2309`
- Sau khi được thêm quyền, có thể cần đợi vài phút để GitHub cập nhật
- Nếu vẫn lỗi sau khi được thêm quyền, thử logout và login lại GitHub trên trình duyệt

