# CHƯƠNG 3 — Box Model

---

# Slide 1 — Chương 3: Box Model

## Mục tiêu chương học

Sau khi hoàn thành chương này, bạn sẽ có thể:

- Hiểu mọi phần tử HTML đều là một chiếc hộp.
- Nắm được 4 lớp của Box Model.
- Sử dụng `padding` để tạo đệm trong.
- Sử dụng `border` để tạo đường viền và bo góc.
- Sử dụng `margin` để tạo khoảng cách ngoài.
- Phân biệt `content-box` và `border-box`.
- Hiểu các kiểu hiển thị `display`.

---

## Kết quả đạt được

Đến cuối chương, bạn sẽ tự dựng được một **card sản phẩm** hoàn chỉnh gồm:

- Hình ảnh
- Tên sản phẩm
- Giá
- Nút bấm

Card được canh khoảng cách hợp lý, có viền và bo góc đẹp mắt.

---

# Slide 2 — Mọi phần tử đều là một chiếc hộp

Trong CSS, mỗi phần tử HTML được xem như một **chiếc hộp (box)**.

Dù là:

- Một tiêu đề
- Một đoạn văn
- Một hình ảnh
- Một nút bấm

Tất cả đều là các hộp có kích thước và khoảng cách riêng.

---

## Ghi nhớ

Hiểu Box Model là chìa khóa để sắp xếp bố cục trang web.

---

# Slide 3 — 3.1 Box Model là gì?

## Mục tiêu

Hiểu cấu tạo của một chiếc hộp trong CSS.

---

## Định nghĩa

Box Model mô tả cách một phần tử chiếm không gian trên trang.

Mỗi hộp gồm **4 lớp**, tính từ trong ra ngoài.

---

# Slide 4 — Bốn lớp của Box Model

```text
Content

↓

Padding

↓

Border

↓

Margin
```

---

## Ý nghĩa từng lớp

- **Content** — nội dung (chữ, ảnh...).
- **Padding** — đệm trong, giữa nội dung và viền.
- **Border** — đường viền bao quanh.
- **Margin** — lề ngoài, khoảng cách với các hộp khác.

---

# Slide 5 — Sơ đồ Box Model

```text
+-----------------------------+
|          Margin             |
|  +-----------------------+  |
|  |       Border          |  |
|  |  +-----------------+  |  |
|  |  |    Padding      |  |  |
|  |  |  +-----------+  |  |  |
|  |  |  | Content   |  |  |  |
|  |  |  +-----------+  |  |  |
|  |  +-----------------+  |  |
|  +-----------------------+  |
+-----------------------------+
```

---

## Ghi nhớ

Càng ra ngoài, lớp càng "xa" nội dung.

---

# Slide 6 — Xem Box Model trong DevTools

Mở DevTools bằng `F12`, chọn tab **Elements**.

Ở góc dưới bên phải sẽ thấy sơ đồ Box Model của phần tử đang chọn.

---

## DevTools hiển thị

- Kích thước content.
- padding.
- border.
- margin.

Đây là công cụ tuyệt vời để kiểm tra khoảng cách.

---

# Slide 7 — Ghi nhớ về Box Model

- Mọi phần tử đều là một hộp.
- Hộp có 4 lớp: content → padding → border → margin.
- DevTools giúp quan sát trực quan.

Bây giờ chúng ta sẽ đi vào từng lớp cụ thể.

---

# Slide 8 — 3.2 Padding (đệm trong)

## Padding là gì?

Padding là khoảng cách giữa **nội dung** và **đường viền**.

```text
Border
  ↓
[  Padding  ]
    ↓
  Content
```

---

Ví dụ

```css
.box {
    padding: 20px;
}
```

Nội dung sẽ cách viền 20px ở mọi phía.

---

# Slide 9 — Padding một giá trị

Một giá trị → áp dụng cho **cả 4 phía**.

```css
.card {
    padding: 16px;
}
```

```text
Trên    = 16px
Phải    = 16px
Dưới    = 16px
Trái    = 16px
```

---

# Slide 10 — Padding hai giá trị

Hai giá trị → **trên-dưới** và **trái-phải**.

```css
.card {
    padding: 8px 16px;
}
```

```text
Trên - Dưới  = 8px
Trái - Phải  = 16px
```

---

# Slide 11 — Padding bốn giá trị

Bốn giá trị → theo chiều **kim đồng hồ**: trên → phải → dưới → trái.

```css
.card {
    padding: 8px 12px 16px 14px;
}
```

```text
Trên  = 8px
Phải  = 12px
Dưới  = 16px
Trái  = 14px
```

---

## Ghi nhớ

Thứ tự luôn bắt đầu từ **trên** và đi theo chiều kim đồng hồ.

---

# Slide 12 — Padding từng phía

Có thể chỉ định padding cho riêng một phía.

```css
.box {
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 10px;
    padding-left: 20px;
}
```

---

## Ghi nhớ

Dùng khi chỉ cần chỉnh một phía duy nhất.

---

# Slide 13 — Thực hành Padding

## Bài tập

Tạo một khối `.box`:

- Nền màu xanh nhạt.
- `padding: 20px`.

Sau đó thử các giá trị:

- `padding: 10px 30px`
- `padding: 10px 20px 30px 40px`

Quan sát sự thay đổi trong DevTools.

---

# Slide 14 — 3.3 Border (đường viền)

## Border là gì?

Border là đường viền bao quanh phần tử, nằm giữa padding và margin.

Ví dụ

```css
.box {
    border: 1px solid #ccc;
}
```

---

## Ba thành phần của border

```text
1px       →  độ dày
solid     →  kiểu viền
#ccc      →  màu viền
```

---

# Slide 15 — Cú pháp border đầy đủ

Có thể viết tách riêng từng thuộc tính:

```css
.box {
    border-width: 2px;
    border-style: solid;
    border-color: red;
}
```

---

Hoặc viết gộp (shorthand):

```css
.box {
    border: 2px solid red;
}
```

---

## Ghi nhớ

Cách viết gộp ngắn gọn và được dùng nhiều nhất.

---

# Slide 16 — border-style

Một số kiểu viền thường gặp:

```css
border-style: solid;   /* nét liền */
border-style: dashed;  /* nét đứt */
border-style: dotted;  /* chấm */
border-style: none;    /* không viền */
```

---

## Ghi nhớ

`solid` là kiểu viền được dùng phổ biến nhất.

---

# Slide 17 — Border từng phía

Có thể tạo viền cho riêng một phía.

```css
.box {
    border-bottom: 2px solid black;
}
```

Chỉ có viền dưới, thường dùng để gạch chân tiêu đề.

---

Các thuộc tính tương ứng

```text
border-top
border-right
border-bottom
border-left
```

---

# Slide 18 — border-radius

`border-radius` giúp **bo tròn** các góc.

```css
.box {
    border-radius: 8px;
}
```

Bốn góc được bo tròn nhẹ.

---

## Ghi nhớ

Giá trị càng lớn, góc bo càng tròn.

---

# Slide 19 — Tạo hình tròn với border-radius

Đặt `border-radius: 50%` cho một phần tử vuông → thành hình tròn.

```css
.avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
}
```

---

## Ghi nhớ

Kỹ thuật này thường dùng cho ảnh đại diện.

---

# Slide 20 — Thực hành Border

## Bài tập

Tạo một khối `.box`:

- `border: 2px solid #333`.
- `border-radius: 12px`.

Sau đó tạo một `.avatar` hình tròn từ ảnh vuông.

---

## Mục tiêu

Làm quen với viền và bo góc.

---

# Slide 21 — Tổng kết phần 1

Trong phần này chúng ta đã học:

✅ Khái niệm Box Model.

✅ 4 lớp của box.

✅ Padding và các cách viết.

✅ Border và các thành phần.

✅ border-radius và cách tạo hình tròn.

Ở phần tiếp theo, chúng ta sẽ học lớp ngoài cùng: **margin**.

---

# Slide 22 — 3.4 Margin (lề ngoài)

## Margin là gì?

Margin là khoảng cách **giữa các hộp** với nhau.

Đây là lớp ngoài cùng của Box Model.

---

Ví dụ

```css
.box {
    margin: 20px;
}
```

Hộp sẽ cách các phần tử xung quanh 20px.

---

# Slide 23 — Cú pháp margin

Cách viết margin giống hệt padding.

```css
margin: 16px;               /* 4 phía */

margin: 8px 16px;           /* trên-dưới | trái-phải */

margin: 8px 12px 16px 14px; /* trên phải dưới trái */
```

---

Từng phía

```css
margin-top: 10px;
margin-bottom: 20px;
```

---

# Slide 24 — Padding và Margin khác nhau thế nào?

| | Padding | Margin |
|---|---------|--------|
| Vị trí | Bên trong viền | Bên ngoài viền |
| Tác dụng | Đệm quanh nội dung | Khoảng cách với hộp khác |
| Nền màu | Có tính nền | Trong suốt |

---

## Ghi nhớ

- Padding → không gian **bên trong**.
- Margin → không gian **bên ngoài**.

---

# Slide 25 — Căn giữa khối với margin auto

Dùng `margin: 0 auto` để canh giữa một khối theo chiều ngang.

```css
.box {
    width: 300px;
    margin: 0 auto;
}
```

---

## Lưu ý

Phần tử **phải có `width`** thì `margin: auto` mới căn giữa được.

---

## Ghi nhớ

Đây là cách căn giữa khối kinh điển trong CSS.

---

# Slide 26 — Margin âm (giới thiệu)

Margin có thể nhận giá trị **âm** để kéo phần tử lại gần hoặc chồng lên nhau.

```css
.box {
    margin-top: -10px;
}
```

---

## Lưu ý

Margin âm rất mạnh nhưng dễ gây rối bố cục.

Người mới nên hạn chế dùng.

---

# Slide 27 — Margin collapse (giới thiệu)

Khi hai margin dọc nằm cạnh nhau, chúng có thể **gộp lại** thành một.

Ví dụ

```text
Đoạn 1: margin-bottom: 20px
Đoạn 2: margin-top: 30px
```

Khoảng cách thực tế = 30px, **không phải** 50px.

---

## Ghi nhớ

Đây là hiện tượng bình thường của margin dọc. Chỉ cần biết để không bị bất ngờ.

---

# Slide 28 — Thực hành Margin

## Bài tập

Tạo ba khối `.box` xếp dọc:

- Mỗi khối có `margin-bottom: 16px`.
- Khối có `width` cố định và được căn giữa bằng `margin: 0 auto`.

---

## Mục tiêu

Làm quen với khoảng cách ngoài và cách căn giữa.

---

# Slide 29 — 3.5 box-sizing

## Vấn đề

Mặc định, khi thêm padding và border, kích thước thật của hộp sẽ **to hơn** giá trị `width` đã đặt.

Điều này dễ khiến bố cục bị vỡ.

---

Ví dụ

```css
.box {
    width: 200px;
    padding: 20px;
    border: 5px solid black;
}
```

Chiều rộng thật = 200 + 40 + 10 = **250px**.

---

# Slide 30 — content-box (mặc định)

Với `content-box`, `width` **chỉ tính phần content**.

```text
Chiều rộng thật
= width + padding + border
```

---

## Nhược điểm

Phải tự cộng nhẩm → dễ tính sai và làm vỡ layout.

---

# Slide 31 — border-box

Với `border-box`, `width` **bao gồm cả padding và border**.

```css
.box {
    box-sizing: border-box;
    width: 200px;
    padding: 20px;
    border: 5px solid black;
}
```

Chiều rộng thật = đúng **200px**.

---

## Ghi nhớ

`border-box` giúp tính toán kích thước dễ dàng và chính xác.

---

# Slide 32 — So sánh content-box và border-box

| | content-box | border-box |
|---|-------------|------------|
| width tính | Chỉ content | Content + padding + border |
| Dễ tính | Khó | Dễ |
| Khuyến nghị | Ít dùng | ✔ Nên dùng |

---

# Slide 33 — Reset box-sizing

Trong thực tế, lập trình viên thường đặt `border-box` cho toàn bộ trang.

```css
*, *::before, *::after {
    box-sizing: border-box;
}
```

---

## Ghi nhớ

Đây là dòng reset nên có ở đầu mọi file CSS.

---

# Slide 34 — Thực hành box-sizing

## Bài tập

Tạo hai khối cùng `width: 200px`, cùng `padding: 20px`:

- Khối A: `content-box`.
- Khối B: `border-box`.

Quan sát chiều rộng thật của mỗi khối trong DevTools.

---

## Mục tiêu

Hiểu rõ sự khác biệt và vì sao nên dùng `border-box`.

---

# Slide 35 — Tổng kết phần 2

Trong phần này chúng ta đã học:

✅ Margin và cách viết.

✅ Phân biệt padding và margin.

✅ Căn giữa bằng `margin: 0 auto`.

✅ content-box và border-box.

✅ Reset box-sizing.

Ở phần tiếp theo, chúng ta sẽ học thuộc tính **display**.

---

# Slide 36 — 3.6 Thuộc tính display

## Mục tiêu

Hiểu cách các phần tử hiển thị và chiếm không gian khác nhau.

---

## display là gì?

`display` quyết định cách một phần tử được hiển thị trên trang.

Bốn giá trị cơ bản:

```text
block

inline

inline-block

none
```

---

# Slide 37 — display: block

Phần tử block:

- Luôn xuống dòng mới.
- Chiếm toàn bộ chiều ngang.
- Nhận được `width` và `height`.

Ví dụ: `div`, `p`, `h1`, `section`.

---

```html
<div>Box 1</div>
<div>Box 2</div>
```

Hai khối nằm trên hai dòng khác nhau.

---

# Slide 38 — display: inline

Phần tử inline:

- Nằm trên cùng một dòng.
- Chỉ chiếm đúng phần nội dung.
- **Không** nhận `width` và `height`.

Ví dụ: `span`, `a`, `strong`, `em`.

---

```html
<span>Hello</span>
<span>World</span>
```

Hai phần tử nằm cùng một dòng.

---

# Slide 39 — display: inline-block

Phần tử inline-block:

- Nằm trên cùng một dòng (như inline).
- **Nhận được** `width` và `height` (như block).

```css
.tag {
    display: inline-block;
    width: 80px;
    height: 30px;
}
```

---

## Ghi nhớ

`inline-block` kết hợp ưu điểm của cả hai kiểu.

---

# Slide 40 — display: none

`display: none` ẩn hoàn toàn phần tử.

```css
.hidden {
    display: none;
}
```

Phần tử biến mất và **không chiếm chỗ** trên trang.

---

## Lưu ý

Khác với `visibility: hidden` (ẩn nhưng vẫn chiếm chỗ).

---

# Slide 41 — Bảng so sánh display

| Giá trị | Xuống dòng | Nhận width/height |
|---------|-----------|-------------------|
| `block` | Có | Có |
| `inline` | Không | Không |
| `inline-block` | Không | Có |
| `none` | Ẩn hoàn toàn | — |

---

## Ghi nhớ

Nắm bảng này giúp bạn hiểu vì sao phần tử hiển thị như vậy.

---

# Slide 42 — width, height và max-width

Điều khiển kích thước của phần tử.

```css
.box {
    width: 300px;
    height: 200px;
}
```

---

`max-width` giới hạn chiều rộng tối đa.

```css
.box {
    width: 100%;
    max-width: 600px;
}
```

Rộng tối đa 600px, nhưng co lại được trên màn hình nhỏ.

---

# Slide 43 — overflow

`overflow` xử lý khi nội dung tràn ra khỏi hộp.

```css
.box {
    overflow: hidden;  /* cắt phần tràn */
    overflow: auto;    /* tự thêm thanh cuộn */
    overflow: scroll;  /* luôn có thanh cuộn */
}
```

---

## Ghi nhớ

`overflow` giúp kiểm soát nội dung dài trong một khung cố định.

---

# Slide 44 — Thực hành display

## Bài tập

Tạo ba thẻ `<span>` với `display: inline-block`:

- Mỗi thẻ có `width`, `height`.
- Có nền màu và padding.

Quan sát chúng nằm cùng một hàng nhưng vẫn có kích thước.

---

## Mục tiêu

Hiểu sự khác biệt giữa các kiểu display.

---

# Slide 45 — Bài tập cuối chương

## Yêu cầu

Dựng một **card sản phẩm** gồm:

- Hình ảnh sản phẩm.
- Tên sản phẩm.
- Giá.
- Nút "Mua ngay".

---

## Yêu cầu kỹ thuật

- Dùng `box-sizing: border-box`.
- padding, margin, border hợp lý.
- Bo góc bằng `border-radius`.

---

# Slide 46 — Gợi ý cấu trúc card

```text
.card

├── img        →  hình sản phẩm

├── h3         →  tên sản phẩm

├── p .price   →  giá

└── button     →  nút Mua ngay
```

---

## Gợi ý style

```text
.card

border: 1px solid #eee

border-radius: 12px

padding: 16px

box-sizing: border-box
```

---

# Slide 47 — Gợi ý CSS cho card

```css
* {
    box-sizing: border-box;
}

.card {
    width: 250px;
    padding: 16px;
    border: 1px solid #eee;
    border-radius: 12px;
    margin: 0 auto;
}

.card img {
    width: 100%;
    border-radius: 8px;
}
```

---

## Ghi nhớ

Ráp từng phần một, kiểm tra bằng DevTools sau mỗi bước.

---

# Slide 48 — Tổng kết Chương 3

🎉 Chúc mừng!

Bạn đã hoàn thành chương thứ ba của khóa học.

---

## Kiến thức đã học

✅ Khái niệm Box Model.

✅ Padding.

✅ Border và border-radius.

✅ Margin.

✅ box-sizing (content-box vs border-box).

✅ Thuộc tính display.

✅ width, height, max-width, overflow.

---

## Sau chương này

Bạn đã hiểu cách các phần tử chiếm không gian và tạo khoảng cách trên trang.

Ở chương tiếp theo, chúng ta sẽ học về **Nền & Màu sắc** để khiến các chiếc hộp này trở nên sinh động hơn.