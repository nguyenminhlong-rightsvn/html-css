# CHƯƠNG 4 — Nền & Màu sắc

---

# Slide 1 — Chương 4: Nền & Màu sắc

## Mục tiêu chương học

Sau khi hoàn thành chương này, bạn sẽ có thể:

- Hiểu các cách khai báo màu trong CSS.
- Sử dụng HEX, RGB và RGBA.
- Dùng `background-color` và `background-image`.
- Phân biệt `cover` và `contain`.
- Điều chỉnh vị trí và cách lặp của ảnh nền.
- Viết `background` bằng cú pháp shorthand.
- Dựng một "hero section" có ảnh nền và lớp phủ.

---

## Kết quả đạt được

Đến cuối chương, bạn sẽ tự dựng được một **banner đầu trang** gồm:

- Ảnh nền phủ kín (`cover`).
- Một lớp phủ tối bằng màu trong suốt.
- Tiêu đề màu trắng.
- Một nút kêu gọi hành động (CTA).

---

# Slide 2 — Vì sao màu sắc quan trọng?

Màu sắc và nền là yếu tố đầu tiên tạo ấn tượng cho website.

Chúng giúp:

- Làm nổi bật nội dung.
- Thể hiện thương hiệu.
- Tạo cảm xúc cho người xem.

---

## Ghi nhớ

Chỉ cần vài dòng CSS về màu và nền, trang web đã thay đổi hoàn toàn.

---

# Slide 3 — 4.1 Các giá trị màu trong CSS

## Mục tiêu

Biết các cách khác nhau để khai báo một màu.

---

## Ba cách phổ biến

```text
Từ khóa

↓

HEX

↓

RGB / RGBA
```

Chúng ta sẽ tìm hiểu lần lượt.

---

# Slide 4 — Màu bằng từ khóa

CSS hỗ trợ nhiều tên màu có sẵn.

```css
h1 {
    color: red;
}

p {
    color: blue;
}
```

---

Một số từ khóa thường gặp

```text
red    blue    green

black  white   gray

orange  purple  pink
```

---

## Ghi nhớ

Từ khóa dễ nhớ nhưng số lượng hạn chế.

---

# Slide 5 — Màu HEX

Màu HEX bắt đầu bằng dấu `#`, theo sau là 6 ký tự.

```css
.box {
    color: #ff5722;
}
```

---

## Cấu trúc

```text
#  RR  GG  BB

R → đỏ
G → xanh lá
B → xanh dương
```

Mỗi cặp có giá trị từ `00` đến `ff`.

---

## Ghi nhớ

HEX là cách khai báo màu được dùng phổ biến nhất.

---

# Slide 6 — Một số màu HEX thường gặp

```text
#000000  →  đen

#ffffff  →  trắng

#ff0000  →  đỏ

#00ff00  →  xanh lá

#0000ff  →  xanh dương

#ff5722  →  cam
```

---

## Mẹo

Có thể lấy mã màu HEX nhanh bằng công cụ **Color Picker** trong DevTools.

---

# Slide 7 — Màu RGB

RGB khai báo màu theo ba giá trị: đỏ, xanh lá, xanh dương.

```css
.box {
    color: rgb(255, 87, 34);
}
```

---

## Giá trị

Mỗi thành phần từ `0` đến `255`.

```text
rgb(255, 0, 0)   →  đỏ

rgb(0, 0, 0)     →  đen

rgb(255, 255, 255) →  trắng
```

---

# Slide 8 — Màu RGBA

RGBA giống RGB nhưng có thêm giá trị **độ trong suốt (alpha)**.

```css
.box {
    background: rgba(0, 0, 0, 0.5);
}
```

---

## Giá trị alpha

```text
0    →  trong suốt hoàn toàn

0.5  →  trong suốt một nửa

1    →  đục hoàn toàn
```

---

## Ghi nhớ

RGBA rất hữu ích khi cần tạo lớp phủ mờ.

---

# Slide 9 — Khi nào dùng loại màu nào?

| Loại | Khi nào dùng |
|------|--------------|
| Từ khóa | Thử nhanh, màu cơ bản |
| HEX | Phổ biến nhất, màu thương hiệu |
| RGB | Khi cần làm việc với số |
| RGBA | Khi cần độ trong suốt |

---

## Ghi nhớ

Trong thực tế, HEX và RGBA được dùng nhiều nhất.

---

# Slide 10 — Thực hành màu sắc

## Bài tập

Tạo ba đoạn văn:

- Đoạn 1 dùng từ khóa `blue`.
- Đoạn 2 dùng HEX `#ff5722`.
- Đoạn 3 dùng RGBA `rgba(0, 0, 0, 0.5)`.

Quan sát sự khác biệt, đặc biệt là độ trong suốt.

---

# Slide 11 — 4.2 background-color

## background-color là gì?

`background-color` đặt màu nền cho phần tử.

```css
.box {
    background-color: #111;
}
```

---

Ví dụ

```css
body {
    background-color: #f5f5f5;
}
```

Toàn bộ trang có nền xám nhạt.

---

## Ghi nhớ

Màu nền lấp đầy cả phần padding của phần tử.

---

# Slide 12 — background-image

`background-image` đặt một ảnh làm nền.

```css
.hero {
    background-image: url("hero.jpg");
}
```

---

## Lưu ý

- Đường dẫn ảnh đặt trong `url(...)`.
- Có thể dùng đường dẫn tương đối hoặc tuyệt đối.

---

# Slide 13 — Kết hợp màu nền và ảnh nền

Có thể dùng đồng thời cả hai.

```css
.hero {
    background-color: #111;
    background-image: url("hero.jpg");
}
```

Màu nền hiển thị trong lúc ảnh đang tải, hoặc khi ảnh không phủ kín.

---

## Ghi nhớ

Nên đặt một màu nền dự phòng phía sau ảnh.

---

# Slide 14 — 4.3 background-size

## Vấn đề

Ảnh nền thường không vừa khít với khung.

`background-size` giúp điều chỉnh cách ảnh lấp đầy khung.

---

## Ba giá trị thường gặp

```text
cover

contain

100% 100%
```

---

# Slide 15 — background-size: cover

`cover` phóng to ảnh để **phủ kín** toàn bộ khung.

```css
.hero {
    background-size: cover;
}
```

---

## Đặc điểm

- Ảnh luôn phủ kín.
- Có thể bị **cắt bớt** một phần.

Đây là giá trị được dùng nhiều nhất cho hero section.

---

# Slide 16 — background-size: contain

`contain` thu ảnh để **hiện đủ toàn bộ**, không bị cắt.

```css
.hero {
    background-size: contain;
}
```

---

## Đặc điểm

- Thấy được trọn vẹn ảnh.
- Có thể để lại **khoảng trống** ở hai bên.

---

# Slide 17 — So sánh cover và contain

| | cover | contain |
|---|-------|---------|
| Phủ kín | Có | Không |
| Bị cắt ảnh | Có thể | Không |
| Khoảng trống | Không | Có thể |

---

Còn `100% 100%` sẽ **kéo méo** ảnh cho vừa khung — thường nên tránh.

---

# Slide 18 — 4.4 background-repeat

Mặc định, ảnh nền nhỏ sẽ **tự lặp lại** để lấp đầy khung.

```css
.box {
    background-repeat: no-repeat;
}
```

---

## Các giá trị

```text
repeat     →  lặp cả hai chiều (mặc định)

no-repeat  →  không lặp

repeat-x   →  chỉ lặp ngang

repeat-y   →  chỉ lặp dọc
```

---

# Slide 19 — background-position

`background-position` xác định vị trí của ảnh nền.

```css
.hero {
    background-position: center;
}
```

---

## Một số giá trị

```text
center

top

bottom

left

right

top right
```

---

## Ghi nhớ

`center` thường được dùng để căn ảnh vào giữa khung.

---

# Slide 20 — background-origin

`background-origin` xác định **mốc** để tính ảnh nền.

```css
.box {
    background-origin: content-box;
}
```

---

## Các giá trị

```text
border-box   →  tính từ viền

padding-box  →  tính từ padding (mặc định)

content-box  →  tính từ nội dung
```

---

## Ghi nhớ

Thuộc tính này ít dùng hơn, chỉ cần biết để nhận ra khi gặp.

---

# Slide 21 — Thực hành background

## Bài tập

Tạo một khối `.hero`:

- Có ảnh nền.
- `background-size: cover`.
- `background-position: center`.
- `background-repeat: no-repeat`.

Đặt chiều cao `400px` để nhìn rõ hiệu ứng.

---

# Slide 22 — 4.5 Cú pháp shorthand

## background shorthand

Có thể gộp nhiều thuộc tính nền vào **một dòng**.

```css
.hero {
    background: #111 url("hero.jpg") center / cover no-repeat;
}
```

---

## Ghi nhớ

Shorthand giúp CSS ngắn gọn và dễ đọc hơn.

---

# Slide 23 — Thứ tự trong shorthand

```text
color · image · position / size · repeat
```

Ví dụ

```css
background: #111 url("hero.jpg") center / cover no-repeat;
```

---

## Giải thích

```text
#111        →  màu nền

url(...)    →  ảnh nền

center      →  vị trí

/ cover     →  kích thước

no-repeat   →  không lặp
```

---

# Slide 24 — So sánh cách viết dài và shorthand

Cách viết dài

```css
.hero {
    background-color: #111;
    background-image: url("hero.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
```

---

Cách viết shorthand

```css
.hero {
    background: #111 url("hero.jpg") center / cover no-repeat;
}
```

Cùng một kết quả, nhưng ngắn gọn hơn nhiều.

---

# Slide 25 — Tạo lớp phủ tối trên ảnh nền

Để chữ trắng nổi trên ảnh, ta thêm một lớp phủ tối bằng màu gradient trong suốt.

```css
.hero {
    background:
        linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
        url("hero.jpg") center / cover no-repeat;
}
```

---

## Ghi nhớ

Lớp phủ giúp chữ dễ đọc hơn khi ảnh nền quá sáng.

---

# Slide 26 — Demo Hero Section

## Thực hành

Dựng một hero section full màn hình:

- Ảnh nền `cover`.
- Lớp phủ tối bằng `rgba`.
- Tiêu đề trắng nằm giữa.

---

Ví dụ CSS

```css
.hero {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background:
        linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
        url("hero.jpg") center / cover no-repeat;
}
```

---

# Slide 27 — Bài tập cuối chương

## Yêu cầu

Dựng một **banner đầu trang** gồm:

- Ảnh nền phủ kín (`cover`).
- Lớp phủ tối bằng `rgba`.
- Tiêu đề màu trắng.
- Một nút CTA (ví dụ: "Tìm hiểu thêm").

---

## Yêu cầu kỹ thuật

- Dùng `background` shorthand.
- Ảnh không bị lặp, được căn giữa.

---

# Slide 28 — Gợi ý cấu trúc banner

```text
.banner

├── overlay (lớp phủ tối)

├── h1        →  tiêu đề trắng

└── button    →  nút CTA
```

---

## Gợi ý style

```text
.banner

background: rgba overlay + ảnh cover

color: white

căn giữa nội dung
```

---

# Slide 29 — Tổng kết Chương 4

🎉 Chúc mừng!

Bạn đã hoàn thành chương thứ tư của khóa học.

---

## Kiến thức đã học

✅ Các giá trị màu: từ khóa, HEX, RGB, RGBA.

✅ background-color và background-image.

✅ background-size: cover vs contain.

✅ background-repeat và background-position.

✅ background-origin.

✅ Cú pháp shorthand.

✅ Tạo hero section với lớp phủ.

---

## Sau chương này

Bạn đã biết cách làm cho các khối trở nên sinh động bằng màu sắc và ảnh nền.

Ở chương tiếp theo, chúng ta sẽ học cách **đặt vị trí phần tử bằng Position**.