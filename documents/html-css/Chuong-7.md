
# CHƯƠNG 7 — CSS Grid, Transition & Transform

---

# Slide 1 — Chương 7: CSS Grid, Transition & Transform

## Mục tiêu chương học

Sau khi hoàn thành chương này, bạn sẽ có thể:

- Hiểu và sử dụng CSS Grid để tạo bố cục hai chiều.
- Phân biệt rõ khi nào dùng Flexbox, khi nào dùng Grid.
- Tạo hiệu ứng mượt mà bằng `transition`.
- Biến đổi phần tử bằng `transform`.
- Làm quen với `animation` và `@keyframes`.

---

## Kết quả đạt được

Đến cuối chương, bạn sẽ tự tạo được:

- Một lưới card bằng CSS Grid.
- Hàng card có hiệu ứng nhấc lên và đổ bóng khi rê chuột.
- Một tiêu đề hero xuất hiện mượt mà (fade-in) khi tải trang.

---

# Slide 2 — Chương này gồm hai phần

```text
Phần 1
↓
CSS Grid (bố cục hai chiều)

Phần 2
↓
Hiệu ứng chuyển động
(transition, transform, animation)
```

---

## Ghi nhớ

Grid giúp bạn dựng bố cục mạnh mẽ.  
Chuyển động giúp giao diện sống động hơn.

---

# Slide 3 — 7.1 CSS Grid là gì?

## Flexbox vs Grid

- **Flexbox**: Bố cục **một chiều** (hàng hoặc cột).
- **CSS Grid**: Bố cục **hai chiều** (hàng và cột cùng lúc).

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
```

---

## Ghi nhớ

Grid không thay thế Flexbox.  
Hai công cụ bổ trợ cho nhau.

---

# Slide 4 — Kích hoạt CSS Grid

```css
.container {
  display: grid;
}
```

Khi dùng `display: grid`, các phần tử con trở thành **grid items**.

---

# Slide 5 — grid-template-columns

Dùng để định nghĩa **số cột** và **độ rộng** của từng cột.

```css
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;   /* 3 cột bằng nhau */
}
```

### Cách viết ngắn gọn:

```css
grid-template-columns: repeat(3, 1fr);
```

---

# Slide 6 — Đơn vị fr

`fr` là viết tắt của **fraction** (phần).

```css
grid-template-columns: 1fr 2fr;
```

→ Cột thứ hai rộng gấp đôi cột thứ nhất.

---

# Slide 7 — gap

Tạo khoảng cách giữa các ô trong Grid.

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;                 /* cả hàng và cột */
  /* hoặc */
  row-gap: 20px;
  column-gap: 16px;
}
```

---

# Slide 8 — grid-template-rows

Tương tự columns, nhưng dùng cho **hàng**.

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 200px;
  gap: 16px;
}
```

---

# Slide 9 — Ví dụ thực tế: Lưới card

```css
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
```

```html
<div class="cards">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
</div>
```

---

# Slide 10 — Khi nào dùng Flexbox, khi nào dùng Grid?

| Tiêu chí       | Flexbox              | Grid                     |
|----------------|----------------------|--------------------------|
| Chiều          | Một chiều            | Hai chiều                |
| Phù hợp        | Navbar, nhóm nút, card theo hàng | Dashboard, gallery, bố cục trang |
| Tư duy         | Theo dòng chảy       | Theo lưới                |

---

## Ghi nhớ

- Cần sắp xếp theo **một chiều** → Flexbox  
- Cần chia **hàng + cột** rõ ràng → Grid

---

# Slide 11 — Tổng kết phần 1

Trong phần này chúng ta đã học:

✅ CSS Grid là gì  
✅ `display: grid`  
✅ `grid-template-columns` & `repeat()`  
✅ Đơn vị `fr`  
✅ `gap`  
✅ Phân biệt Flexbox và Grid  

Ở phần tiếp theo, chúng ta sẽ thêm chuyển động cho website.

---

# Slide 12 — 7.2 transition

## transition là gì?

`transition` làm cho sự thay đổi giá trị diễn ra **mượt mà** thay vì đột ngột.  
Thường đi kèm với `:hover`.

```css
.btn {
  background: #ff5722;
  transition: background 0.3s ease;
}

.btn:hover {
  background: #e64a19;
}
```

---

# Slide 13 — Các thành phần của transition

```text
transition: property duration timing-function delay;
```

| Thành phần        | Ý nghĩa                          |
|-------------------|----------------------------------|
| property          | Thuộc tính cần làm mượt          |
| duration          | Thời gian (ví dụ: 0.3s)          |
| timing-function   | Kiểu tăng tốc (ease, linear…)    |
| delay             | Độ trễ trước khi bắt đầu         |

---

# Slide 14 — timing-function

```text
ease         → chậm - nhanh - chậm (mặc định)
linear       → đều
ease-in      → chậm lúc đầu
ease-out     → chậm lúc cuối
ease-in-out  → chậm hai đầu
```

**Ghi nhớ:** `ease` và `ease-in-out` cho cảm giác tự nhiên nhất.

---

# Slide 15 — Transition nhiều thuộc tính

```css
.btn {
  transition: background 0.3s ease, transform 0.2s;
}
```

Mỗi thuộc tính có thể có thời gian riêng.

---

# Slide 16 — 7.3 transform

## transform là gì?

`transform` giúp **biến đổi** phần tử: di chuyển, phóng to, xoay, nghiêng.

### Bốn phép biến đổi cơ bản

```text
translate()  → di chuyển
scale()      → phóng to / thu nhỏ
rotate()     → xoay
skew()       → nghiêng
```

---

# Slide 17 — translate

```css
.box {
  transform: translate(20px, 10px); /* phải 20px, xuống 10px */
}

/* Hoặc riêng biệt */
transform: translateX(20px);
transform: translateY(-10px);
```

---

# Slide 18 — scale

```css
.box {
  transform: scale(1.2); /* phóng to 1.2 lần */
}
```

```text
scale(1)    → giữ nguyên
scale(1.5)  → to hơn
scale(0.8)  → nhỏ hơn
```

---

# Slide 19 — rotate

```css
.box {
  transform: rotate(45deg); /* xoay 45 độ theo chiều kim đồng hồ */
}
```

Giá trị âm (`-45deg`) sẽ xoay ngược chiều kim đồng hồ.

---

# Slide 20 — Kết hợp transform với hover

```css
.card {
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-6px) scale(1.02);
}
```

Khi rê chuột, card nhấc lên và phóng to nhẹ.

---

# Slide 21 — Hiệu ứng nhấc card kèm đổ bóng

```css
.card {
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}
```

Đây là hiệu ứng card rất phổ biến trên các website hiện đại.

---

# Slide 22 — 7.4 animation và @keyframes

## animation là gì?

- `transition`: chỉ chạy khi có sự thay đổi (ví dụ `:hover`)
- `animation`: có thể chạy **tự động** và lặp lại

### @keyframes

```css
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
```

---

# Slide 23 — Sử dụng animation

```css
.hero-title {
  animation: fadeIn 0.8s ease both;
}
```

Tiêu đề xuất hiện mờ dần khi tải trang.

---

# Slide 24 — Các thuộc tính của animation

```text
animation-name            → tên keyframes
animation-duration        → thời gian
animation-iteration-count → số lần lặp
animation-direction       → chiều chạy
animation-fill-mode       → giữ trạng thái cuối
```

Ví dụ lặp vô hạn:

```css
.loading {
  animation: spin 1s linear infinite;
}
```

---

# Slide 25 — Ví dụ hiệu ứng xoay

```css
@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

.loader {
  animation: spin 1s linear infinite;
}
```

Thường dùng cho biểu tượng đang tải (loading).

---

# Slide 26 — Bài tập cuối chương

## Yêu cầu

**1. Lưới card bằng Grid**
- Dùng `display: grid` và `grid-template-columns`
- Khi `:hover`: nhấc lên + đổ bóng

**2. Tiêu đề hero**
- Fade-in khi tải trang
- Dùng `@keyframes`

---

# Slide 27 — Gợi ý bài tập

```css
/* Grid cards */
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.card {
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

/* Hero fade-in */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-title {
  animation: fadeIn 0.8s ease both;
}
```

---

# Slide 28 — Tổng kết Chương 7

🎉 Chúc mừng!  
Bạn đã hoàn thành chương thứ bảy của khóa học.

## Kiến thức đã học

✅ CSS Grid cơ bản  
✅ `grid-template-columns`, `fr`, `gap`  
✅ Phân biệt Flexbox và Grid  
✅ `transition` và `timing-function`  
✅ `transform`: translate, scale, rotate  
✅ Hiệu ứng hover cho card  
✅ `animation` và `@keyframes`

---

## Sau chương này

Bạn đã có thể tạo bố cục hai chiều mạnh mẽ và thêm chuyển động sinh động.  

Ở chương tiếp theo, chúng ta sẽ học cách làm cho website hiển thị tốt trên mọi thiết bị: **Responsive**.
````

---