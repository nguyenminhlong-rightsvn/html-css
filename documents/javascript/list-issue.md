# Portfolio - JavaScript Issue List (GitHub-ready)

## [JavaScript] Issue 1.1 - Lấy menu và section trong JavaScript

### Mục tiêu
Lấy các phần tử menu và section bằng JavaScript để chuẩn bị logic chuyển trang.

### Nhiệm vụ
- Chọn tất cả các link trong `.main-menu`.
- Chọn tất cả các section trong portfolio.
- Kiểm tra selector và phần tử đã lấy đúng chưa.

### Acceptance Criteria
- JavaScript truy cập được đúng menu và section.
- Không có lỗi khi chạy trên trang.

---

## [JavaScript] Issue 1.2 - Thêm logic active cho menu

### Mục tiêu
Khi người dùng click vào menu, item đang chọn sẽ hiển thị trạng thái active.

### Nhiệm vụ
- Khi click vào menu, thêm class `active` cho item đang chọn.
- Xóa class `active` ở các item còn lại.

### Acceptance Criteria
- Chỉ có 1 menu đang active.
- Khi click nhiều lần, trạng thái active vẫn đúng.

---

## [JavaScript] Issue 1.3 - Hiển thị section đúng khi click
### Mục tiêu
Khi click menu, hiển thị section tương ứng và ẩn các section khác.

### Nhiệm vụ
- Ẩn các section không được chọn.
- Chỉ hiển thị section đang active.
- Cập nhật hash trong URL nếu có.

### Acceptance Criteria
- Khi click menu, đúng section được hiển thị.
- Chỉ có 1 section xuất hiện trên màn hình.

---

## [JavaScript] Issue 2.1 - Chọn ảnh trong phần portfolio

### Mục tiêu
Lấy các ảnh của dự án để thay đổi hình ảnh bằng JavaScript.

### Nhiệm vụ
- Tìm tất cả ảnh trong phần portfolio.
- Kiểm tra selector đúng.
- Đảm bảo code không lỗi khi chạy.

### Acceptance Criteria
- JavaScript truy cập được đúng phần ảnh của dự án.
- Không có lỗi undefined khi load trang.

---

## [JavaScript] Issue 2.2 - Thêm ảnh ngẫu nhiên bằng Picsum

### Mục tiêu
Mỗi thẻ dự án sẽ có ảnh khác nhau khi load lại.

### Nhiệm vụ
- Sử dụng URL `https://picsum.photos` để tạo ảnh.
- Dùng seed khác nhau cho từng ảnh.
- Đặt kích thước phù hợp với card.

### Acceptance Criteria
- Mỗi lần load lại, dự án có ảnh khác nhau.
- Ảnh hiển thị đúng trên giao diện.

---

## [JavaScript] Issue 2.3 - Làm sạch code ảnh ngẫu nhiên

### Mục tiêu
Viết lại code ảnh ngẫu nhiên cho ngắn gọn và dễ hiểu hơn.

### Nhiệm vụ
- Kiểm tra đoạn code hiện tại.
- Xóa biến thừa nếu có.
- Viết code rõ ràng, dễ đọc cho người mới học.

### Acceptance Criteria
- Code ngắn gọn và dễ hiểu.
- Không lặp logic không cần thiết.

---

## [JavaScript] Issue 3.1 - Fetch dữ liệu blog từ API

### Mục tiêu
Lấy dữ liệu blog từ API miễn phí và chuẩn bị render ra giao diện.

### Nhiệm vụ
- Dùng `fetch('https://dummyjson.com/posts')`.
- Kiểm tra dữ liệu trả về từ API.
- Lấy các dữ liệu cần thiết cho card blog.

### Acceptance Criteria
- API trả dữ liệu thành công.
- Không có lỗi khi gọi fetch.

---

## [JavaScript] Issue 3.2 - Render card blog bằng JavaScript

### Mục tiêu
Hiển thị danh sách blog lên giao diện từ dữ liệu API.

### Nhiệm vụ
- Dùng `map()` để tạo HTML cho từng bài viết.
- Hiển thị title, description, tags và views.
- Chỉ render tối đa 4 bài đầu tiên.

### Acceptance Criteria
- Blog hiển thị đúng số lượng bài viết.
- Card blog render đúng nội dung từ API.

---

## [JavaScript] Issue 3.3 - Xử lý dữ liệu thiếu trong blog

### Mục tiêu
Đảm bảo trang không lỗi nếu dữ liệu API thiếu hoặc không đầy đủ.

### Nhiệm vụ
- Nếu `title`, `body`, `tags` thiếu thì dùng text mặc định.
- Nếu API lỗi thì không làm crash trang.
- Kiểm tra dữ liệu trước khi render.

### Acceptance Criteria
- Trang vẫn hoạt động khi dữ liệu không đầy đủ.
- Nội dung fallback hợp lý.

---

## [JavaScript] Issue 4.1 - Chọn các input trong form liên hệ

### Mục tiêu
Lấy các field trong form liên hệ để validate bằng JavaScript.

### Nhiệm vụ
- Lấy các input: họ tên, email, tiêu đề, nội dung.
- Kiểm tra selector đúng.
- Đảm bảo form có thể validate đúng.

### Acceptance Criteria
- JavaScript truy cập được tất cả input cần validate.
- Không có lỗi undefined.

---

## [JavaScript] Issue 4.2 - Validate trường required

### Mục tiêu
Bắt lỗi khi người dùng để trống các trường bắt buộc.

### Nhiệm vụ
- Nếu họ tên trống => báo lỗi.
- Nếu tiêu đề trống => báo lỗi.
- Nếu nội dung trống => báo lỗi.
- Hiển thị lỗi ngay dưới input tương ứng.

### Acceptance Criteria
- Các trường bắt buộc không được submit khi trống.
- Lỗi hiển thị đúng vị trí.

---

## [JavaScript] Issue 4.3 - Validate email hợp lệ

### Mục tiêu
Kiểm tra email có đúng định dạng hay không.

### Nhiệm vụ
- Kiểm tra email có dạng `name@example.com`.
- Nếu sai => hiển thị lỗi.
- Nếu đúng => bỏ lỗi.

### Acceptance Criteria
- Form không submit nếu email không hợp lệ.
- Chỉ email đúng định dạng mới pass.

---

## [JavaScript] Issue 4.4 - Hiển thị thông báo thành công

### Mục tiêu
Hiển thị thông báo khi form hợp lệ.

### Nhiệm vụ
- Khi form hợp lệ, hiện message thành công trên màn hình.
- Reset form sau khi gửi.
- Đảm bảo message hiển thị ngay dưới form.

### Acceptance Criteria
- Người dùng thấy thông báo thành công.
- Form reset sau khi gửi thành công.

---

## [JavaScript] Issue 5.1 - Kiểm tra toàn bộ chức năng

### Mục tiêu
Kiểm tra lại tất cả tính năng chính của portfolio.

### Nhiệm vụ
- Test menu active.
- Test ảnh portfolio.
- Test blog render.
- Test form validation.

### Acceptance Criteria
- Tất cả chức năng chính hoạt động như mong đợi.
- Không còn lỗi lớn trong console.

---

## [JavaScript] Issue 5.2 - Dọn code JavaScript

### Mục tiêu
Làm sạch code JavaScript để dễ đọc và dễ học hơn.

### Nhiệm vụ
- Xóa đoạn code thừa.
- Chỉnh lại tên biến cho dễ hiểu.
- Viết code ngắn gọn hơn nhưng vẫn rõ ràng.

### Acceptance Criteria
- Code dễ đọc hơn.
- Học viên hiểu logic dễ hơn.
- Không lặp logic không cần thiết.

---

## [JavaScript] Issue 5.3 - Hoàn thiện và demo

### Mục tiêu
Hoàn thiện project và chuẩn bị demo cuối cùng.

### Nhiệm vụ
- Kiểm tra lại giao diện trên trình duyệt.
- Sửa lỗi nhỏ nếu còn.
- Tạo nội dung demo cuối cùng.

### Acceptance Criteria
- Portfolio chạy mượt.
- Demo sẵn sàng để trình bày.
- Mọi tính năng chính đã hoàn thành.

---

# Theo dõi tiến độ theo ngày

Làm từ ngày 10 đến ngày 17

## Ngày 10
- Hoàn thành phần menu active và chuyển section.
- Kiểm tra hoạt động trên browser.

## Ngày 11
- Hoàn thành thay ảnh dự án bằng ảnh ngẫu nhiên.
- Kiểm tra các ảnh hiển thị đúng và không lỗi.

## Ngày 14
- Hoàn thành fetch dữ liệu blog từ API.
- Kiểm tra dữ liệu trả về và render bài viết đầu tiên.

## Ngày 15
- Hoàn thành render blog card bằng JavaScript.
- Điều chỉnh title, tags, views và mô tả cho đúng layout.

## Ngày 16
- Hoàn thành validate form liên hệ.
- Kiểm tra required fields và email hợp lệ.

## Ngày 17
- Hoàn thành hiển thị message thành công và minh họa UX trên form.
- Chỉnh sửa lỗi nhỏ trong JS nếu có.
