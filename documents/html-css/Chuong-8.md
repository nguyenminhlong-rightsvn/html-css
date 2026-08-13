# CHƯƠNG 8 — Thiết kế web đáp ứng (Responsive)

---

# Slide 1 — Chương 8: Thiết kế web đáp ứng (Responsive)

## Mục tiêu chương học

Sau khi hoàn thành chương này, bạn sẽ có thể:

- Hiểu Responsive là gì và vì sao cần thiết.
- Biết vai trò của thẻ meta viewport.
- Sử dụng media queries.
- Áp dụng tư duy mobile-first.
- Dùng các kỹ thuật hỗ trợ: ảnh co giãn, đơn vị linh hoạt, `clamp()`, grid tự động.

---

## Kết quả đạt được

Đến cuối chương, bạn sẽ biến trang card ở Chương 7 thành responsive:

```text
Mobile   →  1 cột

Tablet   →  2 cột

Desktop  →  3–4 cột
```

---

# Slide 2 — Vấn đề khi không có Responsive

Một website chỉ thiết kế cho máy tính khi xem trên điện thoại sẽ:

- Chữ quá nhỏ.
- Phải phóng to mới đọc được.
- Bố cục bị tràn ngang.
- Trải nghiệm rất tệ.

---

## Thực tế

Phần lớn người dùng hiện nay truy cập web bằng **điện thoại**.

Vì vậy Responsive là bắt buộc.

---

# Slide 3 — 8.1 Responsive là gì?

## Định nghĩa

Responsive là kỹ thuật giúp một layout **tự co giãn** theo kích thước màn hình.

Cùng một trang web sẽ hiển thị đẹp trên:

- Điện thoại
- Máy tính bảng
- Máy tính

---

# Slide 4 — Ba trụ cột của Responsive

```text
Đơn vị linh hoạt

↓

Media queries

↓

Ảnh co giãn
```

Kết hợp cả ba sẽ tạo nên một trang responsive hoàn chỉnh.

---

## Ghi nhớ

Responsive không phải một thuộc tính duy nhất, mà là sự kết hợp nhiều kỹ thuật.

---

# Slide 5 — Thẻ meta viewport

Đây là thẻ **bắt buộc** để responsive hoạt động.

```html
<meta name="viewport"
      content="width=device-width, initial-scale=1">
```

Đặt trong phần `<head>`.

---

## Giải thích

- `width=device-width` → chiều rộng bằng đúng màn hình thiết bị.
- `initial-scale=1` → tỉ lệ zoom ban đầu là 1.

---

# Slide 6 — Nếu thiếu viewport thì sao?

Không có thẻ viewport, trên điện thoại:

- Trình duyệt giả lập màn hình rộng như desktop.
- Toàn bộ trang bị thu nhỏ lại.
- Media queries **không hoạt động đúng**.

---

## Ghi nhớ

Thiếu thẻ viewport là nguyên nhân số một khiến responsive không chạy.

---

# Slide 7 — 8.2 Media queries

## Media query là gì?

Media query cho phép áp dụng CSS **tùy theo kích thước màn hình**.

```css
@media (min-width: 768px) {
    .container {
        flex-direction: row;
    }
}
```

---

## Ghi nhớ

CSS bên trong media query chỉ chạy khi điều kiện được thỏa mãn.

---

# Slide 8 — Cú pháp media query

```css
@media (điều kiện) {
    /* CSS áp dụng khi điều kiện đúng */
}
```

---

Ví dụ

```css
@media (min-width: 768px) {
    body {
        background: lightblue;
    }
}
```

Nền chỉ đổi màu khi màn hình rộng từ 768px trở lên.

---

# Slide 9 — min-width và max-width

```text
min-width  →  áp dụng khi màn hình RỘNG HƠN mức này

max-width  →  áp dụng khi màn hình HẸP HƠN mức này
```

---

Ví dụ

```css
@media (min-width: 768px) { ... }  /* từ tablet trở lên */

@media (max-width: 767px) { ... }  /* chỉ mobile */
```

---

# Slide 10 — Mobile-first vs Desktop-first

**Mobile-first** (`min-width`)

- Viết CSS mặc định cho mobile.
- Mở rộng dần lên màn hình lớn.

**Desktop-first** (`max-width`)

- Viết CSS cho desktop trước.
- Thu nhỏ dần xuống mobile.

---

## Ghi nhớ

Nên dạy và dùng **mobile-first**.

---

# Slide 11 — Tư duy Mobile-first

```css
/* Mặc định: mobile */
.container {
    flex-direction: column;
}

/* Mở rộng lên tablet */
@media (min-width: 768px) {
    .container {
        flex-direction: row;
    }
}
```

---

## Ghi nhớ

Bắt đầu từ nhỏ, rồi mở rộng lên — dễ kiểm soát hơn.

---

# Slide 12 — Các breakpoint gợi ý

Breakpoint là các mốc chiều rộng để chuyển bố cục.

```text
576px   →  điện thoại lớn

768px   →  tablet

992px   →  desktop nhỏ

1200px  →  desktop lớn
```

---

## Ghi nhớ

Không có con số cố định tuyệt đối. Đây chỉ là các mốc phổ biến.

---

# Slide 13 — Ví dụ responsive với media query

```css
/* Mobile: 1 cột */
.cards {
    display: flex;
    flex-direction: column;
}

/* Tablet: hàng ngang */
@media (min-width: 768px) {
    .cards {
        flex-direction: row;
        flex-wrap: wrap;
    }
}
```

---

# Slide 14 — Tổng kết phần 1

Trong phần này chúng ta đã học:

✅ Responsive là gì.

✅ Ba trụ cột của responsive.

✅ Thẻ meta viewport.

✅ Media queries.

✅ min-width và max-width.

✅ Tư duy mobile-first.

✅ Các breakpoint gợi ý.

Ở phần tiếp theo, chúng ta sẽ học responsive cho tablet và các kỹ thuật hỗ trợ.

---

# Slide 15 — 8.3 Responsive cho Tablet

Trên tablet, thường cần điều chỉnh so với desktop:

- Chuyển từ 3 cột xuống 2 cột.
- Thu gọn menu.
- Tăng khoảng cách để dễ chạm.

---

Ví dụ

```css
@media (min-width: 768px) and (max-width: 991px) {
    .cards {
        /* hiển thị 2 cột */
    }
}
```

---

# Slide 16 — Menu trên màn hình nhỏ

Trên desktop: menu ngang.

Trên mobile: menu thường chuyển thành **hamburger** (biểu tượng ba gạch).

```text
Desktop:  Trang chủ  Khóa học  Liên hệ

Mobile:   ☰
```

---

## Lưu ý

Menu hamburger cần JavaScript để đóng/mở.

Phần này sẽ học ở khóa JavaScript sau.

---

# Slide 17 — 8.4 Kỹ thuật hỗ trợ responsive

Ngoài media queries, còn nhiều kỹ thuật giúp trang tự co giãn:

```text
Ảnh co giãn

Đơn vị linh hoạt

clamp()

Grid tự động
```

---

# Slide 18 — Ảnh co giãn

Giúp ảnh không bị tràn khỏi khung.

```css
img {
    max-width: 100%;
    height: auto;
}
```

---

## Giải thích

- `max-width: 100%` → ảnh không rộng quá khung chứa.
- `height: auto` → giữ đúng tỉ lệ, không bị méo.

---

## Ghi nhớ

Đây là dòng CSS nên có cho mọi ảnh.

---

# Slide 19 — Đơn vị linh hoạt

Nhắc lại từ Chương 2, các đơn vị tương đối rất hữu ích cho responsive:

```text
%     →  bố cục

vw/vh →  theo màn hình

rem   →  font và spacing
```

---

## Ghi nhớ

Dùng đơn vị tương đối giúp trang tự co giãn mà ít cần media query.

---

# Slide 20 — clamp()

`clamp()` giúp một giá trị **co giãn trong giới hạn**.

```text
clamp(giá trị nhỏ nhất, giá trị lý tưởng, giá trị lớn nhất)
```

---

Ví dụ typography co giãn

```css
h1 {
    font-size: clamp(1.5rem, 4vw, 3rem);
}
```

Chữ nhỏ nhất 1.5rem, lớn nhất 3rem, còn lại co giãn theo màn hình.

---

# Slide 21 — Grid tự động

Grid có thể tự sắp số cột theo không gian có sẵn.

```css
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 16px;
}
```

---

## Giải thích

- `auto-fit` → tự thêm/bớt số cột.
- `minmax(250px, 1fr)` → mỗi cột tối thiểu 250px.

Bố cục tự responsive mà **không cần media query**.

---

# Slide 22 — Test bằng Device Toolbar

Nhắc lại từ Chương 1: dùng **Device Toolbar** trong DevTools để kiểm tra responsive.

- Mở DevTools (`F12`).
- Bấm biểu tượng điện thoại.
- Chọn thiết bị hoặc kéo đổi kích thước.

---

## Ghi nhớ

Luôn kiểm tra trang trên nhiều kích thước trước khi hoàn thành.

---

# Slide 23 — Thực hành kỹ thuật responsive

## Bài tập nhỏ

- Thêm `img { max-width: 100%; height: auto; }`.
- Đặt tiêu đề dùng `clamp()`.
- Tạo một grid dùng `auto-fit` + `minmax`.

Thu nhỏ trình duyệt và quan sát.

---

# Slide 24 — Bài tập cuối chương

## Yêu cầu

Lấy trang card ở Chương 7 và làm responsive:

```text
Mobile   →  1 cột

Tablet   →  2 cột

Desktop  →  3–4 cột
```

---

## Yêu cầu kỹ thuật

- Có thẻ meta viewport.
- Dùng mobile-first.
- Ảnh co giãn đúng tỉ lệ.

---

# Slide 25 — Gợi ý bài tập

```css
/* Mobile: 1 cột (mặc định) */
.cards {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
}

/* Tablet: 2 cột */
@media (min-width: 768px) {
    .cards {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Desktop: 4 cột */
@media (min-width: 1024px) {
    .cards {
        grid-template-columns: repeat(4, 1fr);
    }
}
```

---

# Slide 26 — Tổng kết Chương 8

🎉 Chúc mừng!

Bạn đã hoàn thành chương thứ tám của khóa học.

---

## Kiến thức đã học

✅ Responsive là gì.

✅ Thẻ meta viewport.

✅ Media queries.

✅ min-width, max-width.

✅ Tư duy mobile-first.

✅ Breakpoint gợi ý.

✅ Ảnh co giãn, clamp(), grid tự động.

---

## Sau chương này

Bạn đã có thể làm cho website hiển thị đẹp trên mọi thiết bị.

Ở chương tiếp theo, chúng ta sẽ học cách đặt tên class nhất quán và dễ bảo trì với quy ước **BEM**.