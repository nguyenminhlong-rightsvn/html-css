# CHƯƠNG 1 — Thiết lập công cụ & Kiến thức cơ bản HTML

---

# Slide 1 — Chương 1: Thiết lập công cụ & Kiến thức cơ bản HTML

## Mục tiêu chương học

Sau khi hoàn thành chương này, bạn sẽ có thể:

- Hiểu HTML và CSS là gì.
- Hiểu vai trò của HTML trong việc xây dựng website.
- Cài đặt đầy đủ môi trường lập trình.
- Sử dụng VS Code và Live Server.
- Biết sử dụng DevTools để kiểm tra website.
- Viết được một file HTML chuẩn.
- Hiểu các thẻ HTML thông dụng.
- Hoàn thành một trang giới thiệu bản thân chỉ bằng HTML.

---

## Kết quả đạt được

Đến cuối chương, bạn sẽ tự tạo được một trang web đơn giản gồm:

- Tiêu đề
- Hình ảnh
- Đoạn văn
- Danh sách
- Liên kết

Mặc dù chưa có CSS, nhưng đây sẽ là nền tảng để xây dựng các website hoàn chỉnh ở các chương tiếp theo.

---

# Slide 2 — 1.1 Bạn sẽ làm được gì sau khóa học?

## Mục tiêu

Hiểu lộ trình của khóa học và biết mình sẽ đạt được những gì sau khi hoàn thành.

---

## Thành quả cuối khóa

Sau khóa học, bạn sẽ có khả năng xây dựng một Landing Page hoàn chỉnh như:

- Website giới thiệu doanh nghiệp
- Website giới thiệu sản phẩm
- Portfolio cá nhân
- Landing Page bán hàng

Website sẽ có:

- Header
- Banner
- Navigation
- Các Section nội dung
- Footer
- Responsive trên điện thoại

> Giảng viên nên trình chiếu sản phẩm cuối khóa để tạo động lực học tập.

---

# Slide 3 — Lộ trình khóa học

## Chúng ta sẽ học theo từng bước

```text
HTML
↓
CSS
↓
Box Model
↓
Flexbox
↓
Position
↓
Responsive
↓
Hoàn thành Landing Page
```

---

## Ý nghĩa của từng giai đoạn

**HTML**

- Tạo nội dung
- Tạo cấu trúc website

**CSS**

- Làm đẹp website

**Layout**

- Sắp xếp bố cục

**Responsive**

- Hiển thị đẹp trên mọi thiết bị

---

## Ghi nhớ

Không cần học tất cả cùng lúc.

Chúng ta sẽ đi từ những kiến thức đơn giản nhất đến dự án thực tế.

---

# Slide 4 — HTML và CSS có vai trò gì?

Một website thường được tạo thành từ 3 thành phần chính:

| Thành phần | Vai trò |
|------------|----------|
| HTML | Tạo nội dung |
| CSS | Trang trí giao diện |
| JavaScript | Tạo tương tác |

---

Ví dụ

HTML tạo:

- Tiêu đề
- Đoạn văn
- Hình ảnh
- Nút bấm

CSS tạo:

- Màu sắc
- Font chữ
- Khoảng cách
- Hiệu ứng

JavaScript tạo:

- Slider
- Popup
- Form
- Animation

---

# Slide 5 — 1.2 HTML là gì?

## HTML

HTML là viết tắt của

**HyperText Markup Language**

---

## HTML dùng để làm gì?

HTML dùng để mô tả cấu trúc của một trang web.

Ví dụ:

- Đây là tiêu đề.
- Đây là đoạn văn.
- Đây là hình ảnh.
- Đây là nút bấm.

HTML không quyết định giao diện của website.

---

## Hình dung đơn giản

Nếu website là một ngôi nhà thì:

HTML chính là phần khung của ngôi nhà.

---

# Slide 6 — CSS là gì?

CSS là viết tắt của

**Cascading Style Sheets**

---

## CSS dùng để làm gì?

CSS giúp website trở nên đẹp hơn.

Ví dụ CSS có thể:

- Đổi màu chữ
- Đổi font
- Tăng kích thước
- Canh giữa
- Thêm khoảng cách
- Tạo bố cục

---

## So sánh

HTML

↓

Ngôi nhà vừa xây xong.

CSS

↓

Sơn tường, lát gạch, trang trí nội thất.

---

# Slide 7 — HTML và CSS hoạt động cùng nhau

Ví dụ

HTML

```html
<h1>Khóa học HTML CSS</h1>

<p>Học lập trình web từ cơ bản.</p>
```

Sau khi thêm CSS

- Tiêu đề có màu xanh
- Font lớn hơn
- Canh giữa
- Khoảng cách đẹp hơn

---

## Ghi nhớ

HTML và CSS luôn đi cùng nhau.

HTML tạo nội dung.

CSS làm đẹp nội dung.

---

# Slide 8 — Website hoạt động như thế nào?

Khi người dùng truy cập một website

```text
Nhập địa chỉ website

↓

Trình duyệt gửi yêu cầu

↓

Máy chủ (Server)

↓

Trả về

HTML
CSS
JavaScript

↓

Trình duyệt hiển thị website
```

---

## Điều cần nhớ

Trình duyệt là chương trình có nhiệm vụ đọc HTML và hiển thị thành giao diện.

---

# Slide 9 — HTML có cần cài đặt để chạy không?

Không.

HTML rất đặc biệt.

Chỉ cần:

1. Tạo file

```
index.html
```

2. Mở bằng trình duyệt.

Website sẽ chạy ngay.

---

## Demo

Tạo file

```html
<h1>Hello HTML</h1>
```

Lưu lại.

Click đúp để mở bằng Chrome.

---

# Slide 10 — 1.3 Làm quen với DevTools

## DevTools là gì?

DevTools là bộ công cụ dành cho lập trình viên được tích hợp sẵn trong trình duyệt.

Có thể mở bằng:

- F12
- Ctrl + Shift + I
- Chuột phải → Inspect

---

## DevTools giúp gì?

- Xem HTML
- Xem CSS
- Kiểm tra lỗi
- Giả lập điện thoại
- Kiểm tra hiệu suất

---

# Slide 11 — Tab Elements

Đây là tab được sử dụng nhiều nhất.

Có thể:

- Xem HTML
- Xem CSS
- Chỉnh sửa trực tiếp giao diện

---

## Demo

Truy cập:

https://www.wikipedia.org

Thay đổi:

- Tiêu đề
- Màu chữ
- Nội dung

Quan sát website thay đổi ngay lập tức.

---

## Ghi nhớ

Những thay đổi trong DevTools chỉ là tạm thời.

Sau khi tải lại trang, mọi thay đổi sẽ mất.

---

# Slide 12 — Tab Console

Console là nơi hiển thị:

- Thông báo
- Cảnh báo
- Lỗi JavaScript

---

Ví dụ

```text
Uncaught ReferenceError
```

Là một thông báo lỗi.

---

## Sau này

Trong khóa học JavaScript, Console sẽ là công cụ được sử dụng rất thường xuyên.

---

# Slide 13 — Device Toolbar

Biểu tượng hình điện thoại trong DevTools.

Cho phép giả lập:

- iPhone
- iPad
- Android
- Tablet

---

## Công dụng

Kiểm tra website có hiển thị tốt trên điện thoại hay không.

---

## Lưu ý

Chúng ta sẽ sử dụng tính năng này rất nhiều ở chương Responsive.

---

# Slide 14 — Thực hành DevTools

## Bài tập

Mở một website bất kỳ.

Ví dụ:

- Google
- Wikipedia
- F8
- Shopee

Thực hiện:

- Thay đổi màu chữ.
- Thay đổi tiêu đề.
- Thay đổi kích thước font.
- Quan sát sự thay đổi.

---

## Mục tiêu

Làm quen với DevTools trước khi bắt đầu viết code.

---

# Slide 15 — Tổng kết phần 1

Trong phần này chúng ta đã học:

✅ Mục tiêu của khóa học

✅ HTML là gì

✅ CSS là gì

✅ HTML và CSS khác nhau như thế nào

✅ Website hoạt động ra sao

✅ HTML có thể chạy trực tiếp

✅ DevTools

Ở phần tiếp theo, chúng ta sẽ cài đặt VS Code, Live Server và bắt đầu viết file HTML đầu tiên.

# Slide 16 — 1.4 Cài đặt VS Code + Extensions

## Mục tiêu

Chuẩn bị môi trường lập trình để bắt đầu viết mã HTML.

---

## VS Code là gì?

Visual Studio Code (VS Code) là trình soạn thảo mã nguồn (Code Editor) được phát triển bởi Microsoft.

VS Code là công cụ được rất nhiều lập trình viên trên thế giới sử dụng nhờ:

- Miễn phí
- Nhẹ
- Dễ sử dụng
- Hỗ trợ nhiều ngôn ngữ lập trình
- Có kho Extension rất phong phú

---

## Chúng ta sẽ sử dụng VS Code trong suốt khóa học.

---

# Slide 17 — Cài đặt VS Code

## Các bước cài đặt

1. Truy cập website chính thức của VS Code.
2. Chọn phiên bản phù hợp với hệ điều hành.
3. Tiến hành cài đặt.
4. Khởi động VS Code.

---

## Sau khi cài đặt

Tạo một thư mục mới, ví dụ:

```
html-css-course
```

Sau đó mở thư mục này bằng VS Code.

---

## Ghi nhớ

Mỗi dự án nên đặt trong một thư mục riêng để dễ quản lý.

---

# Slide 18 — Làm quen giao diện VS Code

## Một số khu vực quan trọng

- Explorer
- Editor
- Activity Bar
- Status Bar
- Terminal

---

### Explorer

Quản lý file và thư mục của dự án.

---

### Editor

Nơi viết mã nguồn.

---

### Terminal

Thực hiện các lệnh nếu cần.

Ở chương đầu chúng ta chưa sử dụng nhiều.

---

# Slide 19 — Extension là gì?

Extension là những tiện ích mở rộng giúp VS Code mạnh hơn.

Có thể hiểu giống như:

> Ứng dụng cài thêm cho điện thoại.

---

Ví dụ

Không cài Extension

↓

VS Code chỉ có chức năng cơ bản.

Có Extension

↓

VS Code hỗ trợ tự động hoàn thành code, format code, chạy website...

---

# Slide 20 — Live Server

## Live Server là gì?

Live Server giúp mở website trên trình duyệt và tự động tải lại khi lưu file.

---

### Nếu không có Live Server

- Sửa code
- Lưu file
- Quay sang trình duyệt
- Nhấn F5

Lặp lại rất nhiều lần.

---

### Có Live Server

- Sửa code
- Lưu

↓

Website tự cập nhật.

---

# Slide 21 — Demo Live Server

## Thực hành

Tạo file

```
index.html
```

Nhập

```html
<h1>Hello HTML</h1>
```

Lưu file.

---

Chuột phải

↓

Open with Live Server

---

Thay đổi

```html
<h1>Hello HTML</h1>
```

thành

```html
<h1>Xin chào HTML</h1>
```

Lưu lại.

Quan sát trình duyệt tự cập nhật.

---

# Slide 22 — Emmet là gì?

## Emmet

Emmet là công cụ giúp viết HTML nhanh hơn.

Thay vì gõ rất nhiều ký tự, chỉ cần nhập một cú pháp ngắn.

---

Ví dụ

Gõ

```
!
```

↓

Nhấn

```
Tab
```

↓

VS Code tự sinh toàn bộ khung HTML5.

---

## Ghi nhớ

Emmet giúp tiết kiệm rất nhiều thời gian khi lập trình.

---

# Slide 23 — Emmet cơ bản

## Ví dụ 1

Nhập

```
div
```

↓

```html
<div></div>
```

---

## Ví dụ 2

Nhập

```
div.box
```

↓

```html
<div class="box"></div>
```

---

## Ví dụ 3

Nhập

```
#header
```

↓

```html
<div id="header"></div>
```

---

# Slide 24 — Emmet nâng cao

## Ví dụ

Nhập

```
ul>li*3
```

↓

```html
<ul>
    <li></li>
    <li></li>
    <li></li>
</ul>
```

---

Nhập

```
nav>ul>li*5>a
```

↓

VS Code sẽ tự tạo toàn bộ menu điều hướng.

---

## Ghi nhớ

Không cần cố nhớ tất cả.

Trong quá trình học, chúng ta sẽ sử dụng Emmet thường xuyên.

---

# Slide 25 — Thực hành Emmet

## Bài tập

Sử dụng Emmet để tạo:

### Bài 1

```
div.container
```

---

### Bài 2

```
ul>li*5
```

---

### Bài 3

```
header>nav>ul>li*4>a
```

---

Quan sát kết quả được tạo ra.

---

# Slide 26 — 1.5 Cấu trúc một file HTML

## Một trang HTML chuẩn

```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trang đầu tiên</title>
</head>

<body>

    <h1>Xin chào!</h1>

</body>
</html>
```

---

Đây là cấu trúc chuẩn mà mọi file HTML đều nên có.

---

# Slide 27 — Phân tích cấu trúc HTML

Một file HTML gồm hai phần chính:

```
<html>

↓

<head>

↓

<body>

</html>
```

---

### head

Chứa thông tin dành cho trình duyệt.

---

### body

Chứa toàn bộ nội dung người dùng nhìn thấy.

---

## Ghi nhớ

Mọi nội dung hiển thị trên website đều nằm trong `<body>`.

---

# Slide 28 — DOCTYPE

```html
<!DOCTYPE html>
```

## Vai trò

Thông báo cho trình duyệt biết đây là tài liệu HTML5.

---

Nếu thiếu DOCTYPE

Website vẫn có thể hoạt động.

Tuy nhiên trình duyệt có thể chuyển sang chế độ tương thích (Compatibility Mode), dẫn đến việc hiển thị không đúng như mong muốn.

---

## Ghi nhớ

Nên luôn đặt DOCTYPE ở dòng đầu tiên.

---

# Slide 29 — Thẻ html

```html
<html lang="vi">
```

## Đây là thẻ gốc của toàn bộ tài liệu HTML.

Tất cả các thẻ khác đều nằm bên trong.

---

## Thuộc tính lang

Cho biết ngôn ngữ của website.

Ví dụ

```
vi
```

Tiếng Việt.

```
en
```

Tiếng Anh.

```
ja
```

Tiếng Nhật.

---

## Lợi ích

- Hỗ trợ SEO
- Hỗ trợ trình đọc màn hình
- Giúp trình duyệt xử lý ngôn ngữ chính xác hơn

---

# Slide 30 — Thẻ head và body

## head

Chứa các thông tin như:

- title
- meta
- css
- favicon

Những nội dung này thường không hiển thị trực tiếp trên trang web.

---

## body

Là nơi chứa:

- Tiêu đề
- Đoạn văn
- Hình ảnh
- Danh sách
- Nút bấm
- Menu

---

## Ghi nhớ

Nếu người dùng nhìn thấy nội dung trên website thì gần như chắc chắn nó nằm trong `<body>`.

# Slide 31 — Thẻ meta charset

```html
<meta charset="UTF-8">
```

## Vai trò

Khai báo bảng mã ký tự mà website sử dụng.

Trong hầu hết các dự án hiện nay, chúng ta sử dụng **UTF-8**.

---

## Tại sao cần UTF-8?

UTF-8 giúp trình duyệt hiển thị đúng các ký tự đặc biệt và tiếng Việt có dấu.

Ví dụ:

```
Xin chào
```

Nếu không khai báo đúng bảng mã, trình duyệt có thể hiển thị thành:

```
Xin chÃ o
```

---

## Ghi nhớ

Đây là một thẻ gần như luôn có trong mọi file HTML.

---

# Slide 32 — Thẻ meta viewport

```html
<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0">
```

## Vai trò

Giúp website hiển thị đúng kích thước trên các thiết bị di động.

---

## Nếu không có viewport

Website vẫn mở được.

Nhưng trên điện thoại:

- Nội dung rất nhỏ
- Khó đọc
- Không responsive

---

## Ghi nhớ

Sau này khi học Responsive, chúng ta sẽ thấy vai trò rất quan trọng của thẻ này.

---

# Slide 33 — Thẻ title

```html
<title>Trang đầu tiên</title>
```

## Vai trò

Xác định tiêu đề của trang web.

---

## Tiêu đề sẽ hiển thị ở đâu?

- Tab của trình duyệt.
- Danh sách Bookmark.
- Kết quả tìm kiếm của Google.

---

## Demo

Đổi

```html
<title>Trang đầu tiên</title>
```

thành

```html
<title>Khóa học HTML CSS</title>
```

Quan sát tiêu đề trên tab trình duyệt thay đổi.

---

# Slide 34 — Tổng kết cấu trúc HTML

Một file HTML chuẩn gồm:

```text
DOCTYPE

↓

html

↓

head

↓

body
```

---

Trong đó:

**DOCTYPE**

Thông báo phiên bản HTML.

---

**html**

Thẻ gốc của tài liệu.

---

**head**

Thông tin dành cho trình duyệt.

---

**body**

Toàn bộ nội dung hiển thị.

---

## Ghi nhớ

Đây là cấu trúc sẽ được sử dụng trong mọi dự án HTML.

---

# Slide 35 — Thực hành tạo file HTML đầu tiên

## Yêu cầu

Tạo file

```
index.html
```

Sử dụng Emmet

```
!
```

để sinh cấu trúc HTML.

---

Sau đó sửa:

- title
- h1

Thành nội dung của riêng bạn.

---

## Mục tiêu

Làm quen với:

- VS Code
- Emmet
- Live Server

---

# Slide 36 — 1.6 Comments trong HTML

## Comment là gì?

Comment là phần ghi chú dành cho lập trình viên.

Comment sẽ **không hiển thị trên website**.

---

## Cú pháp

```html
<!-- Đây là comment -->
```

---

## Demo

```html
<!-- Tiêu đề website -->

<h1>Khóa học HTML CSS</h1>
```

Trang web chỉ hiển thị:

```
Khóa học HTML CSS
```

---

# Slide 37 — Tại sao cần Comment?

Trong những dự án nhỏ, comment có thể chưa cần thiết.

Nhưng với những dự án lớn, comment giúp:

- Giải thích đoạn code.
- Đánh dấu các khu vực.
- Dễ bảo trì.
- Dễ làm việc nhóm.

---

Ví dụ

```html
<!-- Header -->

...

<!-- Banner -->

...

<!-- Footer -->
```

---

## Ghi nhớ

Comment giúp code dễ đọc hơn.

---

# Slide 38 — Tạm ẩn một đoạn HTML

Comment còn được dùng để tạm thời vô hiệu hóa một đoạn mã.

Ví dụ

```html
<!--

<h1>Hello HTML</h1>

-->
```

---

Kết quả

Tiêu đề sẽ không hiển thị trên website.

---

## Khi nào nên dùng?

- Kiểm tra giao diện.
- Thử nghiệm.
- Chưa muốn xóa code.

---

# Slide 39 — Những lưu ý khi sử dụng Comment

## Nên

✔ Đặt comment để chia các khu vực.

✔ Giải thích những đoạn code phức tạp.

✔ Ghi chú khi làm việc nhóm.

---

## Không nên

❌ Comment cho những thứ quá hiển nhiên.

Ví dụ

```html
<!-- Đây là thẻ h1 -->

<h1>Hello</h1>
```

Comment này không mang lại giá trị.

---

# Slide 40 — Thực hành Comments

## Bài tập

Tạo một trang HTML gồm:

- Header
- Nội dung chính
- Footer

Sử dụng Comment để phân chia.

Ví dụ

```html
<!-- Header -->

...

<!-- Main Content -->

...

<!-- Footer -->

...
```

---

## Mục tiêu

Làm quen với việc tổ chức mã nguồn ngay từ những bài học đầu tiên.

---

# Slide 41 — Tổng kết phần 2

Trong phần này chúng ta đã học:

✅ Cài đặt VS Code.

✅ Live Server.

✅ Emmet.

✅ Cấu trúc chuẩn của một file HTML.

✅ Vai trò của DOCTYPE.

✅ html, head, body.

✅ meta charset.

✅ meta viewport.

✅ title.

✅ Comment trong HTML.

---

## Chuẩn bị cho phần tiếp theo

Ở phần tiếp theo, chúng ta sẽ học những thẻ HTML được sử dụng nhiều nhất trong thực tế như:

- Heading
- Paragraph
- Danh sách
- Liên kết
- Hình ảnh
- div
- span
- Semantic HTML

# Slide 42 — 1.7 Các thẻ HTML thông dụng

## Mục tiêu

Trong bài học này, chúng ta sẽ làm quen với những thẻ HTML được sử dụng thường xuyên nhất.

Đây là những thẻ xuất hiện trong hầu hết mọi website.

---

## Các nhóm thẻ sẽ học

- Thẻ tiêu đề (Heading)
- Thẻ văn bản
- Danh sách
- Liên kết
- Hình ảnh
- Thẻ nhóm nội dung
- Semantic HTML

---

## Ghi nhớ

Không cần học thuộc tất cả các thẻ HTML.

Chỉ cần thành thạo những thẻ phổ biến là có thể xây dựng được phần lớn giao diện website.

---

# Slide 43 — Thẻ Heading (h1 đến h6)

HTML cung cấp 6 cấp tiêu đề.

```html
<h1>Tiêu đề cấp 1</h1>

<h2>Tiêu đề cấp 2</h2>

<h3>Tiêu đề cấp 3</h3>

<h4>Tiêu đề cấp 4</h4>

<h5>Tiêu đề cấp 5</h5>

<h6>Tiêu đề cấp 6</h6>
```

---

## Vai trò

Heading giúp chia nội dung thành các cấp rõ ràng.

Tiêu đề càng quan trọng thì cấp càng cao.

---

# Slide 44 — Khi nào sử dụng h1, h2, h3?

Ví dụ cấu trúc một bài viết

```text
Khóa học HTML CSS
│
├── Giới thiệu
│
├── Nội dung khóa học
│   ├── HTML
│   ├── CSS
│
└── Giảng viên
```

---

Tương ứng

```html
<h1>Khóa học HTML CSS</h1>

<h2>Giới thiệu</h2>

<h2>Nội dung khóa học</h2>

<h3>HTML</h3>

<h3>CSS</h3>

<h2>Giảng viên</h2>
```

---

## Ghi nhớ

Không chọn Heading vì kích thước chữ.

Hãy chọn theo ý nghĩa của nội dung.

---

# Slide 45 — Best Practice khi sử dụng Heading

## Nên

✔ Mỗi trang chỉ nên có một thẻ `<h1>`.

✔ Sử dụng h2 để chia các mục lớn.

✔ h3 dùng cho các mục nhỏ bên trong.

---

## Không nên

❌ Dùng nhiều h1 chỉ vì chữ to.

❌ Bỏ qua thứ tự heading.

Ví dụ

```html
<h1></h1>

<h4></h4>
```

khi chưa có h2 và h3.

---

# Slide 46 — Thẻ Paragraph (p)

Thẻ `<p>` dùng để hiển thị một đoạn văn.

Ví dụ

```html
<p>Đây là đoạn văn đầu tiên.</p>

<p>Đây là đoạn văn thứ hai.</p>
```

---

Trình duyệt sẽ tự tạo khoảng cách giữa các đoạn văn.

---

## Ghi nhớ

Mỗi đoạn nội dung nên được đặt trong một thẻ `<p>`.

---

# Slide 47 — Thẻ strong

Thẻ `<strong>` dùng để nhấn mạnh nội dung quan trọng.

Ví dụ

```html
<p>

Học <strong>HTML</strong> trước khi học CSS.

</p>
```

---

Thông thường trình duyệt sẽ hiển thị chữ in đậm.

---

## Lưu ý

Ý nghĩa của strong là "quan trọng", không đơn thuần chỉ để in đậm.

---

# Slide 48 — Thẻ em

Thẻ `<em>` dùng để nhấn mạnh một phần nội dung.

Ví dụ

```html
<p>

Tôi rất thích học <em>HTML</em>.

</p>
```

---

Thông thường trình duyệt sẽ hiển thị chữ in nghiêng.

---

## Ghi nhớ

`em`

↓

Nhấn mạnh.

`strong`

↓

Quan trọng.

---

# Slide 49 — Thẻ span

Thẻ `<span>` dùng để bao một phần nhỏ của nội dung.

Ví dụ

```html
<p>

Xin chào

<span>Long</span>

</p>
```

---

## Khi nào dùng?

Sau này khi học CSS.

Ví dụ

- Đổi màu riêng một từ.
- Tăng kích thước một chữ.
- Thêm hiệu ứng cho một phần nội dung.

---

## Ghi nhớ

span là thẻ **inline**.

Không tạo dòng mới.

---

# Slide 50 — Thẻ br

`<br>` dùng để xuống dòng.

Ví dụ

```html
Địa chỉ:

123 Lê Lợi

<br>

Đà Nẵng
```

---

## Khi nào dùng?

- Địa chỉ
- Thơ
- Lời bài hát
- Nội dung cần xuống dòng

---

## Không nên

Dùng nhiều `<br>` để tạo khoảng cách.

Việc tạo khoảng cách sẽ được thực hiện bằng CSS.

---

# Slide 51 — Thẻ hr

`<hr>` tạo một đường kẻ ngang.

Ví dụ

```html
<h2>Giới thiệu</h2>

<hr>

<p>...</p>
```

---

## Vai trò

Ngăn cách các phần nội dung.

Giúp bố cục dễ nhìn hơn.

---

# Slide 52 — Thực hành nhóm thẻ văn bản

## Bài tập

Viết đoạn HTML gồm:

- 1 h1
- 2 h2
- 2 đoạn văn
- 1 strong
- 1 em
- 1 span
- 1 hr

---

## Mục tiêu

Làm quen với các thẻ văn bản cơ bản.

# Slide 53 — Danh sách trong HTML

## Tại sao cần danh sách?

Trong thực tế, rất nhiều nội dung được trình bày dưới dạng danh sách, ví dụ:

- Danh sách khóa học
- Danh sách sản phẩm
- Danh sách menu
- Danh sách tính năng
- Danh sách công việc

HTML cung cấp hai loại danh sách phổ biến:

- Danh sách không có thứ tự (`ul`)
- Danh sách có thứ tự (`ol`)

---

## Ghi nhớ

Mọi danh sách đều được tạo từ các thẻ:

- `ul` hoặc `ol`
- `li`

---

# Slide 54 — Danh sách không có thứ tự (ul)

`ul` là viết tắt của **Unordered List**.

Danh sách sẽ được hiển thị với dấu chấm đầu dòng.

Ví dụ

```html
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>
```

Hiển thị

• HTML

• CSS

• JavaScript

---

## Khi nào sử dụng?

- Menu
- Danh sách sản phẩm
- Danh sách sở thích
- Danh sách tính năng

---

# Slide 55 — Danh sách có thứ tự (ol)

`ol` là viết tắt của **Ordered List**.

Danh sách sẽ được đánh số thứ tự.

Ví dụ

```html
<ol>
    <li>Cài đặt VS Code</li>
    <li>Viết HTML</li>
    <li>Học CSS</li>
</ol>
```

Hiển thị

1. Cài đặt VS Code

2. Viết HTML

3. Học CSS

---

## Khi nào sử dụng?

Những nội dung có trình tự rõ ràng.

Ví dụ:

- Các bước hướng dẫn
- Quy trình
- Thứ hạng

---

# Slide 56 — Thẻ li

Thẻ `<li>` là viết tắt của **List Item**.

Mỗi mục trong danh sách đều phải nằm trong một thẻ `<li>`.

Ví dụ

```html
<ul>
    <li>Táo</li>
    <li>Cam</li>
    <li>Xoài</li>
</ul>
```

---

## Lưu ý

❌ Sai

```html
<ul>

Táo

Cam

</ul>
```

✔ Đúng

```html
<ul>

<li>Táo</li>

<li>Cam</li>

</ul>
```

---

# Slide 57 — Thực hành danh sách

## Bài tập

Tạo hai danh sách.

Danh sách sở thích

- Đọc sách
- Nghe nhạc
- Chơi thể thao

Danh sách các bước học HTML

1. Cài VS Code
2. Tạo file HTML
3. Viết code
4. Mở bằng Live Server

---

## Mục tiêu

Làm quen với `ul`, `ol` và `li`.

---

# Slide 58 — Thẻ liên kết (a)

Website không chỉ có nội dung.

Các trang còn liên kết với nhau bằng **Hyperlink**.

Trong HTML, chúng ta sử dụng thẻ `<a>`.

Ví dụ

```html
<a href="https://google.com">

Google

</a>
```

---

Khi người dùng nhấn vào liên kết, trình duyệt sẽ chuyển sang trang web tương ứng.

---

# Slide 59 — Thuộc tính href

`href` là thuộc tính quan trọng nhất của thẻ `<a>`.

Nó cho biết địa chỉ mà liên kết sẽ mở.

Ví dụ

```html
<a href="https://facebook.com">

Facebook

</a>
```

---

Nếu không có `href`

```html
<a>Facebook</a>
```

Liên kết sẽ không hoạt động.

---

## Ghi nhớ

Thẻ `<a>` gần như luôn đi cùng thuộc tính `href`.

---

# Slide 60 — Mở liên kết ở tab mới

Muốn mở website ở tab mới, sử dụng

```html
target="_blank"
```

Ví dụ

```html
<a
href="https://google.com"
target="_blank">

Google

</a>
```

---

## Khi nào sử dụng?

- Liên kết sang website khác.
- Tài liệu tham khảo.
- Link tải xuống.

---

## Lưu ý

Sau này khi làm dự án, nên kết hợp thêm:

```html
rel="noopener noreferrer"
```

để tăng tính bảo mật.

---

# Slide 61 — Thẻ hình ảnh (img)

Muốn hiển thị hình ảnh trên website, sử dụng thẻ `<img>`.

Ví dụ

```html
<img
src="avatar.jpg"
alt="Ảnh đại diện">
```

---

Khác với nhiều thẻ khác,

`img` không có thẻ đóng.

---

## Ghi nhớ

Đây là một **thẻ rỗng (Void Element)**.

---

# Slide 62 — Thuộc tính src

`src` là viết tắt của **Source**.

Cho biết vị trí của hình ảnh.

Ví dụ

```html
<img src="images/avatar.jpg">
```

---

Nếu đường dẫn sai

↓

Ảnh sẽ không hiển thị.

---

## Demo

Đổi tên file ảnh.

Quan sát website.

Ảnh sẽ biến mất.

---

# Slide 63 — Thuộc tính alt

`alt` là viết tắt của **Alternative Text**.

Đây là đoạn mô tả của hình ảnh.

Ví dụ

```html
<img
src="avatar.jpg"
alt="Ảnh đại diện của Long">
```

---

## Vai trò

- Hiển thị khi ảnh lỗi.
- Hỗ trợ Screen Reader.
- Tăng khả năng SEO.

---

## Ghi nhớ

Không nên bỏ qua thuộc tính `alt`.

---

# Slide 64 — Thực hành hình ảnh và liên kết

## Bài tập

Tạo một trang HTML gồm:

- Một ảnh đại diện.
- Một liên kết đến Facebook.
- Một liên kết đến GitHub mở ở tab mới.

---

## Mục tiêu

Làm quen với:

- `a`
- `href`
- `target`
- `img`
- `src`
- `alt`

---

# Slide 65 — Thẻ div

`div` là viết tắt của **Division**.

Đây là thẻ dùng để nhóm các phần tử lại với nhau.

Ví dụ

```html
<div>

<h2>Giới thiệu</h2>

<p>Xin chào mọi người.</p>

</div>
```

---

## Vai trò

- Chia bố cục.
- Gom nhóm nội dung.
- Hỗ trợ CSS.

---

## Ghi nhớ

`div` không mang ý nghĩa về nội dung.

---

# Slide 66 — div là Block Element

`div` thuộc nhóm **Block Element**.

Đặc điểm

- Luôn xuống dòng.
- Chiếm toàn bộ chiều ngang.
- Có thể chứa nhiều phần tử khác.

Ví dụ

```html
<div>Box 1</div>

<div>Box 2</div>
```

Hai `div` sẽ hiển thị trên hai dòng khác nhau.

---

# Slide 67 — div và span khác nhau như thế nào?

| div | span |
|------|------|
| Block | Inline |
| Chiếm cả dòng | Chỉ chiếm đúng nội dung |
| Dùng để chia bố cục | Dùng để chỉnh một phần nhỏ của văn bản |

---

Ví dụ

```html
<div>Hello</div>

<div>World</div>
```

↓

Hai dòng.

---

```html
<span>Hello</span>

<span>World</span>
```

↓

Cùng một dòng.

---

## Ghi nhớ

- `div` → bố cục.
- `span` → chỉnh sửa một phần nhỏ của văn bản.

# Slide 68 — Semantic HTML là gì?

Trước HTML5, lập trình viên thường sử dụng rất nhiều thẻ `<div>` để xây dựng giao diện.

Ví dụ

```html
<div class="header"></div>

<div class="menu"></div>

<div class="content"></div>

<div class="footer"></div>
```

Đoạn code vẫn hoạt động bình thường.

Tuy nhiên, khi nhìn vào mã nguồn, rất khó biết mỗi khu vực có ý nghĩa gì.

---

## HTML5 giới thiệu Semantic HTML

Semantic HTML cung cấp các thẻ có ý nghĩa rõ ràng hơn.

Ví dụ:

- `<header>`
- `<nav>`
- `<main>`
- `<section>`
- `<article>`
- `<footer>`

Chỉ cần nhìn tên thẻ là có thể hiểu ngay vai trò của khu vực đó.

---

# Slide 69 — Lợi ích của Semantic HTML

Semantic HTML không làm website đẹp hơn.

Nó giúp:

- Code dễ đọc.
- Dễ bảo trì.
- Dễ làm việc nhóm.
- Hỗ trợ SEO.
- Tăng khả năng hỗ trợ các công nghệ trợ năng (Accessibility).

---

## So sánh

❌ Chỉ dùng div

```html
<div class="header"></div>

<div class="content"></div>

<div class="footer"></div>
```

✔ Dùng Semantic HTML

```html
<header></header>

<main></main>

<footer></footer>
```

Đoạn code trở nên rõ ràng và dễ hiểu hơn rất nhiều.

---

# Slide 70 — Thẻ header

`<header>` đại diện cho phần đầu của một trang web hoặc một khu vực nội dung.

Thông thường chứa:

- Logo
- Tên website
- Thanh điều hướng
- Ô tìm kiếm

Ví dụ

```html
<header>

<h1>Khóa học HTML CSS</h1>

</header>
```

---

## Ghi nhớ

Một website thường chỉ có một phần Header chính.

---

# Slide 71 — Thẻ nav

`<nav>` đại diện cho khu vực điều hướng (Navigation).

Thông thường chứa các liên kết đến các trang khác.

Ví dụ

```html
<nav>

<ul>

<li><a href="#">Trang chủ</a></li>

<li><a href="#">Khóa học</a></li>

<li><a href="#">Liên hệ</a></li>

</ul>

</nav>
```

---

## Khi nào sử dụng?

- Menu ngang.
- Menu bên trái.
- Menu cuối trang.

---

# Slide 72 — Thẻ main

`<main>` chứa nội dung chính của trang web.

Đây là phần quan trọng nhất mà người dùng quan tâm.

Ví dụ

```html
<main>

<h2>Giới thiệu khóa học</h2>

<p>...</p>

</main>
```

---

## Lưu ý

Thông thường mỗi trang chỉ nên có **một** thẻ `<main>`.

---

# Slide 73 — section và article

## section

Dùng để chia nội dung thành các nhóm hoặc các phần lớn.

Ví dụ

- Giới thiệu
- Khóa học
- Đánh giá học viên

---

## article

Đại diện cho một nội dung độc lập.

Ví dụ

- Một bài blog.
- Một bài báo.
- Một bài đăng.
- Một sản phẩm.

---

## Ví dụ

```html
<section>

<h2>Khóa học nổi bật</h2>

<article>

<h3>HTML CSS cho người mới</h3>

<p>...</p>

</article>

</section>
```

---

# Slide 74 — Thẻ footer

`<footer>` đại diện cho phần cuối của website.

Thông thường chứa:

- Thông tin bản quyền.
- Email.
- Địa chỉ.
- Chính sách.
- Liên kết mạng xã hội.

Ví dụ

```html
<footer>

<p>© 2026 HTML CSS Course</p>

</footer>
```

---

## Ghi nhớ

Footer thường xuất hiện ở cuối mọi trang.

---

# Slide 75 — Ví dụ bố cục một website

```text
+-----------------------------+
| Header                      |
+-----------------------------+
| Navigation                  |
+-----------------------------+
| Main                        |
| ├── Section                 |
| │     └── Article           |
| ├── Section                 |
| └── Section                 |
+-----------------------------+
| Footer                      |
+-----------------------------+
```

---

## HTML tương ứng

```html
<header></header>

<nav></nav>

<main>

<section>

<article></article>

</section>

</main>

<footer></footer>
```

---

## Ghi nhớ

Semantic HTML giúp mô tả đúng cấu trúc của website.

---

# Slide 76 — Tổng kết các thẻ HTML thông dụng

Trong phần này chúng ta đã học:

### Văn bản

- h1 → h6
- p
- strong
- em
- span
- br
- hr

---

### Danh sách

- ul
- ol
- li

---

### Liên kết & Hình ảnh

- a
- img

---

### Nhóm nội dung

- div

---

### Semantic HTML

- header
- nav
- main
- section
- article
- footer

---

## Ghi nhớ

Đây là những thẻ được sử dụng thường xuyên nhất trong HTML.

---

# Slide 77 — 1.8 Attribute trong HTML

## Attribute là gì?

Attribute (thuộc tính) cung cấp thêm thông tin cho một thẻ HTML.

Thuộc tính luôn được đặt trong **thẻ mở**.

Ví dụ

```html
<a href="https://google.com">

Google

</a>
```

Trong ví dụ trên:

- Thẻ là `<a>`
- Thuộc tính là `href`

---

## Cú pháp

```html
tên="giá trị"
```

---

# Slide 78 — Một số Attribute thường gặp

### href

Địa chỉ liên kết.

---

### src

Đường dẫn hình ảnh.

---

### alt

Mô tả hình ảnh.

---

### id

Định danh duy nhất cho một phần tử.

---

### class

Đặt tên nhóm cho phần tử.

Sau này CSS sẽ sử dụng rất nhiều.

---

### target

Điều khiển cách mở liên kết.

Ví dụ

```html
target="_blank"
```

---

# Slide 79 — Ví dụ sử dụng Attribute

```html
<a
href="https://github.com"
target="_blank">

GitHub

</a>
```

---

```html
<img

src="avatar.jpg"

alt="Ảnh đại diện"

>
```

---

```html
<p class="description">

Xin chào!

</p>
```

---

## Ghi nhớ

Một thẻ có thể có nhiều Attribute.

---

# Slide 80 — Quy tắc khi sử dụng Attribute

✔ Viết trong thẻ mở.

✔ Mỗi Attribute có một giá trị.

✔ Giá trị nên đặt trong dấu ngoặc kép.

Ví dụ

```html
<img
src="cat.jpg"
alt="Mèo">
```

---

## Không nên

```html
<img src=cat.jpg>
```

Mặc dù nhiều trình duyệt vẫn hiểu, nhưng không đúng chuẩn và khó đọc.

---

# Slide 81 — Bài tập cuối chương

## Yêu cầu

Tạo một trang **Giới thiệu bản thân** chỉ sử dụng HTML.

Trang web cần có:

- Tiêu đề chính.
- Một ảnh đại diện.
- Một đoạn giới thiệu.
- Danh sách sở thích.
- Liên kết đến Facebook hoặc GitHub.
- Sử dụng:
  - `header`
  - `main`
  - `footer`

---

## Mục tiêu

Ôn tập toàn bộ kiến thức của Chương 1.

---

# Slide 82 — Gợi ý cấu trúc bài tập

```text
Header

↓

Tên của bạn

↓

Ảnh đại diện

↓

Giới thiệu

↓

Sở thích

↓

Mạng xã hội

↓

Footer
```

---

## Không yêu cầu

- CSS
- Màu sắc
- Hiệu ứng
- Responsive

Chỉ tập trung vào HTML.

---

# Slide 83 — Tổng kết Chương 1

🎉 Chúc mừng!

Bạn đã hoàn thành chương đầu tiên của khóa học.

---

## Kiến thức đã học

✅ HTML và CSS là gì.

✅ DevTools.

✅ VS Code.

✅ Live Server.

✅ Emmet.

✅ Cấu trúc HTML.

✅ Comment.

✅ Các thẻ HTML thông dụng.

✅ Attribute.

---

## Sau chương này

Bạn đã có thể tự xây dựng một trang HTML hoàn chỉnh với cấu trúc chuẩn.

Ở chương tiếp theo, chúng ta sẽ bắt đầu học **CSS** để biến những trang HTML đơn giản này trở nên đẹp mắt và chuyên nghiệp hơn.

