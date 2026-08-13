# Portfolio - HTML/CSS Issue List (GitHub-ready)

## [HTML/CSS] Issue 1.1 - Tạo layout tổng thể của portfolio

### Mục tiêu
Tạo layout tổng thể của portfolio theo cấu trúc cơ bản: sidebar trái và nội dung phải.

### Nhiệm vụ
- Tạo cấu trúc HTML cơ bản cho trang portfolio.
- Chia layout thành sidebar và main content.
- Tạo các section chính: Home, About, Resume, Portfolio, Blog, Contact.
- Đặt id rõ ràng cho từng section để dùng cho JS sau này.

### Acceptance Criteria
- Trang có layout tổng thể rõ ràng.
- Sidebar và nội dung được tách đúng vị trí.
- Mỗi section có id rõ ràng và dễ quản lý.

---

## [HTML/CSS] Issue 1.2 - Tạo sidebar và thông tin cá nhân

### Mục tiêu
Xây dựng phần sidebar đầu tiên của portfolio, bao gồm thông tin cá nhân và menu điều hướng.

### Nhiệm vụ
- Thêm avatar, tên, chức danh và phần mô tả ngắn.
- Thêm các icon mạng xã hội.
- Tạo menu điều hướng chính.
- Thêm phần copyright ở cuối sidebar.

### Acceptance Criteria
- Sidebar hiển thị đúng vị trí và gọn gàng.
- Menu có các item rõ ràng và dễ click.
- Không có phần tử lệch layout hoặc bị tràn.

---

## [HTML/CSS] Issue 1.3 - Tạo section Home / Hero

### Mục tiêu
Thiết kế phần hero của portfolio để trang chủ đẹp và dễ nhìn.

### Nhiệm vụ
- Tạo tiêu đề chính và subtitle.
- Thêm ảnh nền cho hero section.
- Thêm lớp phủ mờ để chữ dễ đọc.
- Căn giữa nội dung theo kiểu hero.

### Acceptance Criteria
- Section Home hiển thị rõ ràng và đẹp mắt.
- Chữ dễ đọc trên nền ảnh.
- Layout gọn, sạch và phù hợp với portfolio.

---

## [HTML/CSS] Issue 2.1 - Tạo biến màu và style chung

### Mục tiêu
Thiết lập theme màu cho portfolio bằng CSS variables.

### Nhiệm vụ
- Tạo `:root` với màu chính, nền, chữ, border.
- Định nghĩa màu cho accent, text, background, surface.
- Dùng biến màu cho các phần chính của layout.

### Acceptance Criteria
- Toàn bộ trang dùng chung một theme màu nhất quán.
- CSS dễ chỉnh sửa khi cần thay đổi màu.
- Không dùng quá nhiều màu hardcode.

---

## [HTML/CSS] Issue 2.2 - Thiết lập typography và spacing chung

### Mục tiêu
Đặt các style cơ bản cho text và khoảng cách để trang thống nhất.

### Nhiệm vụ
- Thiết lập font-size cho h1 đến h6.
- Thiết lập line-height và color cho text.
- Thiết lập spacing cơ bản cho body, p, a, img, ul.
- Chỉnh sửa margin/padding cho các phần tử chung.

### Acceptance Criteria
- Tiêu đề và đoạn văn có kích thước hợp lý.
- Trang nhìn thống nhất, dễ đọc.
- Không có khoảng cách quá chật hoặc quá rộng.

---

## [HTML/CSS] Issue 2.3 - Style menu, nút và section wrapper

### Mục tiêu
Tạo style cho menu, button và các khối section chính.

### Nhiệm vụ
- Style menu điều hướng ở desktop.
- Thêm hover effect cho menu.
- Style button cơ bản.
- Thiết lập style cho `page`, `page-content` và `animated-section`.

### Acceptance Criteria
- Menu và button rõ ràng, đẹp và dễ nhìn.
- Các section có nền và khoảng cách phù hợp.
- Layout tổng thể gọn, rõ và dễ nâng cấp.

---

## [HTML/CSS] Issue 3.1 - Thiết kế section About

### Mục tiêu
Xây dựng phần giới thiệu bản thân và thông tin sơ lược trong portfolio.

### Nhiệm vụ
- Tạo phần mô tả ngắn về bản thân.
- Thêm list thông tin cá nhân như email, địa chỉ, kỹ năng.
- Style block thông tin theo dạng clean và dễ đọc.

### Acceptance Criteria
- Section About rõ ràng, ngắn gọn và dễ đọc.
- Thông tin được sắp xếp hợp lý.
- Không có layout quá rối hoặc quá dài.

---

## [HTML/CSS] Issue 3.2 - Thiết kế section Resume

### Mục tiêu
Tạo phần hồ sơ nghề nghiệp và học vấn.

### Nhiệm vụ
- Tạo các item học vấn và kinh nghiệm.
- Thêm mốc thời gian, nơi làm việc và tên công việc.
- Style border trái và badge thời gian.
- Sắp xếp nội dung rõ ràng theo từng item.

### Acceptance Criteria
- Resume có bố cục rõ ràng.
- Mỗi item dễ đọc.
- Layout không bị lệch hoặc chồng chéo.

---

## [HTML/CSS] Issue 3.3 - Thiết kế form liên hệ

### Mục tiêu
Xây dựng form liên hệ cho portfolio với layout đơn giản và dễ dùng.

### Nhiệm vụ
- Tạo form gồm họ tên, email, tiêu đề và nội dung.
- Style label, input và textarea.
- Style button gửi tin nhắn.
- Chỉnh sửa spacing cho form.

### Acceptance Criteria
- Form đẹp, dễ nhìn và dễ nhập.
- Input và textarea đủ rộng và nên căn đúng.
- Giao diện form phù hợp với theme chung.

---

## [HTML/CSS] Issue 4.1 - Tạo portfolio grid

### Mục tiêu
Thiết kế phần portfolio bằng layout grid.

### Nhiệm vụ
- Tạo grid cho danh sách dự án.
- Dùng 2 cột trên desktop.
- Thêm ảnh, tiêu đề và mô tả ngắn cho từng dự án.
- Điều chỉnh layout cho responsive.

### Acceptance Criteria
- Portfolio cards được sắp xếp rõ ràng.
- Không bị tràn hoặc lệch.
- Layout đẹp ở desktop và mobile.

---

## [HTML/CSS] Issue 4.2 - Tạo blog card

### Mục tiêu
Thiết kế phần blog bằng card layout rõ ràng.

### Nhiệm vụ
- Tạo card blog với ảnh, tag, tiêu đề, mô tả và ngày đăng.
- Style khoảng cách đúng và hover effect đơn giản.
- Sắp xếp blog theo grid 2 cột.

### Acceptance Criteria
- Card blog hiển thị rõ ràng và đẹp mắt.
- Các thông tin được căn chỉnh hợp lý.
- Hover effect đơn giản nhưng đủ thẩm mỹ.

---

## [HTML/CSS] Issue 4.3 - Tạo hover effect và polish card

### Mục tiêu
Tinh chỉnh các card để giao diện đẹp hơn và chuyên nghiệp hơn.

### Nhiệm vụ
- Thêm hover effect cho portfolio card và blog card.
- Chỉnh vị trí ảnh, khoảng cách text và border.
- Dùng shadow/border radius để làm card đẹp hơn.

### Acceptance Criteria
- Card nhìn hiện đại nhưng vẫn đơn giản.
- Hiệu ứng không quá phức tạp.
- Giao diện tổng thể vẫn mượt và rõ ràng.

---

## [HTML/CSS] Issue 5.1 - Thiết kế responsive cho tablet/mobile

### Mục tiêu
Đảm bảo portfolio hiển thị tốt trên mobile và tablet.

### Nhiệm vụ
- Viết media queries cho màn hình trung bình và nhỏ.
- Chuyển sidebar thành menu mobile nếu cần.
- Sắp xếp lại grid cho portfolio và blog.
- Chỉnh sửa spacing trên màn hình nhỏ.

### Acceptance Criteria
- Trang hiển thị đẹp trên desktop, tablet và mobile.
- Layout không bị vỡ.
- Nội dung dễ đọc ở màn hình nhỏ.

---

## [HTML/CSS] Issue 5.2 - Dọn CSS và kiểm tra cuối cùng

### Mục tiêu
Làm sạch CSS và kiểm tra lại toàn bộ giao diện.

### Nhiệm vụ
- Xóa CSS thừa hoặc không sử dụng.
- Kiểm tra lại gap, màu sắc, font-size và spacing.
- Sửa các lỗi nhỏ trong layout.
- Đảm bảo CSS còn dễ đọc và dễ bảo trì.

### Acceptance Criteria
- CSS sạch hơn và dễ duyệt.
- Không còn lỗi layout lớn.
- Giao diện ổn định và đẹp mắt.

---

## [HTML/CSS] Issue 5.3 - Kiểm tra tổng thể và chuẩn bị demo

### Mục tiêu
Kiểm tra toàn bộ portfolio trước khi demo.

### Nhiệm vụ
- Test lại trên trình duyệt.
- Kiểm tra menu, form, card và responsive.
- Chỉnh sửa lỗi nhỏ nếu còn.
- Chuẩn bị bản demo cuối cùng.

### Acceptance Criteria
- Portfolio chạy ổn định.
- Không còn lỗi lớn trong giao diện.
- Sẵn sàng để demo hoặc nộp bài.

---

# Theo dõi tiến độ theo ngày

Làm từ ngày 19 đến ngày 25

## Ngày 19
- Khởi tạo cấu trúc portfolio theo layout cơ bản: sidebar trái và nội dung chính phải.
- Hoàn thành các section chính: Home, About, Resume, Portfolio, Blog, Contact với nội dung rỗng.
- Xây dựng sidebar thông tin cá nhân, avatar, tên, chức danh, menu điều hướng và phần copyright.
- Thiết kế section Home/Hero với tiêu đề, hình ảnh và nội dung chào mừng.

## Ngày 20
- Thiết lập style chung cho màu sắc, typography và khoảng cách để trang thống nhất.
- Style menu, nút và section wrapper

## Ngày 21
- Hoàn thành section About và Resume với thông tin cá nhân, kinh nghiệm và học vấn.
- Xây dựng form liên hệ cơ bản với label, input, textarea và button gửi tin nhắn.

## Ngày 24
- Thiết kế portfolio grid và blog card theo dạng 2 cột, phù hợp với giao diện portfolio.
- Thêm mô tả, ảnh và bố cục rõ ràng cho từng card dự án và bài viết.
- Chỉnh sửa hover effect, polishing card và tối ưu khoảng cách cho các block.

## Ngày 25
- Kiểm tra responsive trên tablet và mobile, sửa các lỗi layout nhỏ.
- Dọn dẹp CSS, loại bỏ phần thừa và kiểm tra lại toàn bộ giao diện.
- Hoàn thiện demo cuối cùng, kiểm tra trạng thái ổn định trước khi báo cáo và nộp bài.
