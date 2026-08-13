# CHƯƠNG 6 — Thiết kế bố cục bằng Flexbox

---

# Slide 1 — Chương 6: Thiết kế bố cục bằng Flexbox

## Mục tiêu chương học

Sau khi hoàn thành chương này, bạn sẽ có thể:

- Hiểu Flexbox là gì và dùng để làm gì.
- Phân biệt flex container và flex items.
- Hiểu trục chính (main axis) và trục phụ (cross axis).
- Sử dụng các thuộc tính của container.
- Sử dụng các thuộc tính của item.
- Áp dụng các mẫu bố cục thường gặp.

---

## Kết quả đạt được

Đến cuối chương, bạn sẽ tự dựng được:

- Một thanh navbar (logo bên trái, menu bên phải).
- Một hàng 3–4 card tự xuống dòng khi màn hình hẹp.

Tất cả dùng `gap` thay cho margin.

---

# Slide 2 — Vì sao cần Flexbox?

Trước đây, để dàn các phần tử nằm ngang, ta phải dùng nhiều mẹo phức tạp.

Ví dụ:

- `float`
- `inline-block`
- margin thủ công

Những cách này rối và khó căn chỉnh.

---

## Flexbox giải quyết vấn đề đó

Flexbox giúp dàn hàng, căn chỉnh và phân bổ khoảng cách một cách **đơn giản và linh hoạt**.

---

# Slide 3 — 6.1 Giới thiệu Flexbox

## Flexbox là gì?

Flexbox là mô hình bố cục **một chiều**.

Nghĩa là sắp xếp phần tử theo:

- Một **hàng** ngang, hoặc
- Một **cột** dọc.

---

## Ghi nhớ

Flexbox làm việc theo một chiều tại một thời điểm.

Bố cục hai chiều sẽ dùng CSS Grid (giới thiệu ở Chương 7).

---

# Slide 4 — Container và Items

Flexbox có hai thành phần:

```text
Flex Container (cha)

└── Flex Items (con)
```

---

## Kích hoạt Flexbox

Chỉ cần đặt `display: flex` cho phần tử cha.

```css
.container {
    display: flex;
}
```

Các phần tử con lập tức trở thành flex items.

---

# Slide 5 — Ví dụ đầu tiên

```html
<div class="container">
    <div>A</div>
    <div>B</div>
    <div>C</div>
</div>
```

```css
.container {
    display: flex;
}
```

---

Kết quả

Ba khối A, B, C nằm trên **cùng một hàng ngang**.

(Bình thường các `div` sẽ nằm trên ba dòng riêng.)

---

# Slide 6 — Trục chính và trục phụ

Flexbox có hai trục.

```text
Main axis (trục chính)   →  hướng sắp xếp item

Cross axis (trục phụ)    →  vuông góc với trục chính
```

---

## Mặc định

- Trục chính: **ngang** (trái → phải).
- Trục phụ: **dọc** (trên → dưới).

---

## Ghi nhớ

Hiểu hai trục là nền tảng để dùng đúng các thuộc tính căn chỉnh.

---

# Slide 7 — 6.2 Thuộc tính của Container

Các thuộc tính đặt trên **flex container**:

```text
flex-direction

justify-content

align-items

flex-wrap

gap

align-content
```

Chúng ta sẽ đi qua từng cái.

---

# Slide 8 — flex-direction

Xác định hướng của trục chính.

```css
.container {
    flex-direction: row;    /* ngang (mặc định) */
}

.container {
    flex-direction: column; /* dọc */
}
```

---

## Ghi nhớ

- `row` → item xếp ngang.
- `column` → item xếp dọc.

---

# Slide 9 — justify-content

Căn chỉnh item theo **trục chính**.

```css
.container {
    justify-content: center;
}
```

---

## Các giá trị

```text
flex-start     →  dồn về đầu

center         →  vào giữa

flex-end       →  dồn về cuối

space-between  →  cách đều, sát hai mép

space-around   →  cách đều, có lề hai bên

space-evenly   →  khoảng cách bằng nhau hoàn toàn
```

---

# Slide 10 — Minh họa justify-content

```text
flex-start:     [A][B][C]--------

center:         ----[A][B][C]----

flex-end:       --------[A][B][C]

space-between:  [A]----[B]----[C]

space-around:   --[A]--[B]--[C]--
```

---

## Ghi nhớ

`space-between` rất hay dùng cho navbar (logo trái, menu phải).

---

# Slide 11 — align-items

Căn chỉnh item theo **trục phụ**.

```css
.container {
    align-items: center;
}
```

---

## Các giá trị

```text
stretch     →  kéo giãn đầy chiều cao (mặc định)

center      →  vào giữa theo chiều dọc

flex-start  →  dồn lên trên

flex-end    →  dồn xuống dưới
```

---

# Slide 12 — flex-wrap

Mặc định, các item **không xuống dòng** dù bị tràn.

`flex-wrap: wrap` cho phép item tự xuống dòng.

```css
.container {
    flex-wrap: wrap;
}
```

---

## Ghi nhớ

`flex-wrap: wrap` rất quan trọng để card tự xuống dòng trên màn hình hẹp.

---

# Slide 13 — gap

`gap` tạo khoảng cách **giữa các item**.

```css
.container {
    display: flex;
    gap: 16px;
}
```

---

## Ưu điểm

Trước đây phải dùng `margin` để tách item — dễ rối.

`gap` gọn gàng và chính xác hơn nhiều.

---

## Ghi nhớ

Ưu tiên dùng `gap` thay cho margin giữa các item.

---

# Slide 14 — align-content

Khi các item **xuống nhiều dòng**, `align-content` căn chỉnh các dòng đó theo trục phụ.

```css
.container {
    flex-wrap: wrap;
    align-content: center;
}
```

---

## Lưu ý

`align-content` chỉ có tác dụng khi có **nhiều dòng**.

Nếu chỉ một dòng, hãy dùng `align-items`.

---

# Slide 15 — Tổng kết thuộc tính Container

| Thuộc tính | Tác dụng |
|------------|----------|
| flex-direction | Hướng trục chính |
| justify-content | Căn theo trục chính |
| align-items | Căn theo trục phụ |
| flex-wrap | Cho phép xuống dòng |
| gap | Khoảng cách giữa item |
| align-content | Căn nhiều dòng |

---

# Slide 16 — Tổng kết phần 1

Trong phần này chúng ta đã học:

✅ Flexbox là gì.

✅ Container và items.

✅ Trục chính và trục phụ.

✅ flex-direction.

✅ justify-content.

✅ align-items.

✅ flex-wrap, gap, align-content.

Ở phần tiếp theo, chúng ta sẽ học các thuộc tính đặt trên **item**.

---

# Slide 17 — 6.3 Thuộc tính của Item

Các thuộc tính đặt trên từng **flex item**:

```text
flex-grow

flex-shrink

flex-basis

flex (gộp)

align-self

order
```

---

# Slide 18 — flex-grow

`flex-grow` cho phép item **giãn ra** để lấp đầy khoảng trống.

```css
.item {
    flex-grow: 1;
}
```

---

Ví dụ

```css
.a { flex-grow: 1; }
.b { flex-grow: 2; }
```

`.b` sẽ rộng gấp đôi `.a`.

---

# Slide 19 — flex-shrink

`flex-shrink` cho phép item **co lại** khi không đủ chỗ.

```css
.item {
    flex-shrink: 1;   /* mặc định, cho phép co */
}

.item {
    flex-shrink: 0;   /* không cho co */
}
```

---

## Ghi nhớ

`flex-shrink: 0` giúp giữ nguyên kích thước, không bị bóp méo.

---

# Slide 20 — flex-basis

`flex-basis` đặt **kích thước gốc** của item trước khi giãn hoặc co.

```css
.item {
    flex-basis: 250px;
}
```

---

## Ghi nhớ

Có thể hiểu `flex-basis` gần giống như `width` ban đầu của item.

---

# Slide 21 — Thuộc tính flex (gộp)

Gộp ba thuộc tính trên vào một dòng.

```text
flex: grow shrink basis;
```

Ví dụ

```css
.item {
    flex: 1 1 250px;
}
```

---

Cách viết ngắn phổ biến

```css
.item {
    flex: 1;   /* giãn đều, chia đều không gian */
}
```

---

# Slide 22 — align-self

`align-self` ghi đè `align-items` cho **riêng một item**.

```css
.item {
    align-self: flex-end;
}
```

Chỉ item này căn khác với các item còn lại.

---

## Ghi nhớ

Dùng khi cần một item "lệch" so với phần còn lại.

---

# Slide 23 — order

`order` thay đổi **thứ tự hiển thị** của item mà không đổi HTML.

```css
.item {
    order: 2;
}
```

Item có `order` nhỏ hơn sẽ hiển thị trước.

---

## Ghi nhớ

Mặc định mọi item có `order: 0`.

---

# Slide 24 — Tổng kết thuộc tính Item

| Thuộc tính | Tác dụng |
|------------|----------|
| flex-grow | Giãn ra |
| flex-shrink | Co lại |
| flex-basis | Kích thước gốc |
| flex | Gộp ba thuộc tính |
| align-self | Căn riêng một item |
| order | Đổi thứ tự hiển thị |

---

# Slide 25 — 6.4 Các mẫu bố cục thường gặp

Bây giờ ta ghép kiến thức để tạo các bố cục thực tế.

Ba mẫu phổ biến nhất:

```text
1. Căn giữa tuyệt đối

2. Navbar

3. Lưới card co giãn
```

---

# Slide 26 — Mẫu 1: Căn giữa tuyệt đối

Căn một phần tử vào **chính giữa** theo cả hai chiều.

```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
```

---

## Ghi nhớ

Đây là cách căn giữa gọn nhất trong CSS.

Chỉ ba dòng là xong.

---

# Slide 27 — Mẫu 2: Navbar

Logo bên trái, menu bên phải.

```css
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

---

Ví dụ HTML

```html
<nav class="navbar">
    <div class="logo">Logo</div>
    <ul class="menu">...</ul>
</nav>
```

`space-between` đẩy logo và menu về hai phía.

---

# Slide 28 — Mẫu 3: Lưới card co giãn

Hàng card tự xuống dòng khi màn hình hẹp.

```css
.grid {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
}

.card {
    flex: 1 1 250px;
}
```

---

## Giải thích

- `flex-wrap: wrap` → cho phép xuống dòng.
- `flex: 1 1 250px` → mỗi card rộng tối thiểu 250px, tự co giãn.

---

# Slide 29 — Thực hành Flexbox

## Bài tập nhỏ

Tạo một container với ba khối:

- `display: flex`.
- `justify-content: space-between`.
- `align-items: center`.
- `gap: 16px`.

Thử đổi qua các giá trị khác của `justify-content`.

---

## Mục tiêu

Làm quen với việc căn chỉnh bằng Flexbox.

---

# Slide 30 — Bài tập cuối chương

## Yêu cầu

Dựng hai thành phần bằng Flexbox:

**1. Navbar**

- Logo bên trái.
- Menu ngang bên phải.

**2. Hàng card**

- 3–4 card.
- Tự xuống dòng khi màn hình hẹp.
- Dùng `gap` thay cho margin.

---

# Slide 31 — Gợi ý cấu trúc bài tập

```text
nav (flex, space-between)

├── logo

└── menu (flex, gap)

section (flex, wrap, gap)

├── card

├── card

├── card

└── card
```

---

## Gợi ý style card

```css
.cards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.card {
    flex: 1 1 250px;
}
```

---

# Slide 32 — Tổng kết Chương 6

🎉 Chúc mừng!

Bạn đã hoàn thành chương thứ sáu của khóa học.

---

## Kiến thức đã học

✅ Flexbox và mô hình một chiều.

✅ Container và items.

✅ Trục chính và trục phụ.

✅ Thuộc tính của container.

✅ Thuộc tính của item.

✅ Các mẫu bố cục thường gặp.

---

## Sau chương này

Bạn đã có thể dàn bố cục ngang/dọc một cách linh hoạt.

Ở chương tiếp theo, chúng ta sẽ ghép các thành phần thành **bố cục trang hoàn chỉnh** và thêm hiệu ứng chuyển động với **transition và transform**.