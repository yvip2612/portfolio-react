# Kế hoạch cải thiện tính năng Đa ngôn ngữ (i18n)

Hiện tại, nút chuyển đổi ngôn ngữ (VN/EN) chỉ đổi chữ trên nút mà chưa thực sự dịch nội dung của trang web. Để làm cho tính năng này hoạt động mượt mà và thực tế, tôi đề xuất kế hoạch sau:

## 1. Thiết lập Từ điển ngôn ngữ (Dictionary) trong JavaScript
- Tạo một bộ từ điển (Object) trong file `main.js` chứa các đoạn văn bản cho hai ngôn ngữ: Tiếng Việt (`vn`) và Tiếng Anh (`en`).
- Từ điển này sẽ bao gồm các phần: Thanh điều hướng (Navbar), Phần giới thiệu (Hero, About), Chỉ số (Metrics), Dịch vụ (Services), và Form Liên hệ (Contact).

## 2. Gắn thẻ dữ liệu vào HTML (`data-i18n`)
- Cập nhật toàn bộ file `index.html`: Thêm thuộc tính `data-i18n="tên_khóa"` vào tất cả các thẻ chứa văn bản cần dịch.
- Việc này giúp JavaScript biết chính xác vị trí nào cần thay đổi chữ khi người dùng bấm nút đổi ngôn ngữ.

## 3. Cập nhật logic JavaScript
- Cải tiến lại sự kiện click của nút chuyển đổi ngôn ngữ `VN/EN`.
- Khi bấm nút:
  1. Thay đổi ngôn ngữ hiện tại.
  2. Lấy toàn bộ các phần tử có chứa `data-i18n` và thay thế văn bản tương ứng từ bộ từ điển.
  3. Cập nhật lại hiệu ứng "Typing Animation" (Digital Marketing / Full Stack...) sang tiếng Anh.
  4. Lưu lựa chọn ngôn ngữ vào `localStorage` để lần sau khách vào web vẫn giữ nguyên ngôn ngữ đã chọn.

---

## User Review Required

> [!IMPORTANT]
> - Việc này sẽ thay đổi khá nhiều dòng code trong file `index.html` (để gắn thẻ) và thêm nội dung dịch thuật vào `main.js`. 
> - Tôi sẽ dịch trước toàn bộ nội dung hiện tại sang tiếng Anh một cách tự nhiên nhất.
> 
> Bạn có đồng ý với kế hoạch triển khai tính năng đa ngôn ngữ này không? Hãy phản hồi để tôi bắt đầu thực hiện!
