# GIÁO ÁN HTML & CSS — 10 CHƯƠNG

# CHƯƠNG 1 — Thiết lập công cụ & Kiến thức cơ bản HTML

**Mục tiêu:** Cài đặt xong môi trường, hiểu vai trò HTML/CSS, viết được một trang HTML có cấu trúc chuẩn với các thẻ thông dụng.

### 1.1 Bạn sẽ làm được gì sau khóa học?
- Cho xem trước ảnh/GIF sản phẩm cuối khóa (landing page) → tạo động lực.
- Lộ trình: HTML (khung xương) → CSS (trang trí) → bố cục → responsive → dự án.
- ✏️ Không code — chỉ trình chiếu demo.

### 1.2 Tìm hiểu về HTML, CSS
- **HTML** = *nội dung & cấu trúc* (chữ, ảnh, nút…). **CSS** = *trình bày* (màu, khoảng cách, bố cục).
- Ẩn dụ: HTML là bộ xương, CSS là quần áo.
- Website chạy trong trình duyệt; file `.html` mở trực tiếp được.

### 1.3 Làm quen với Dev tools
- Mở bằng `F12` / chuột phải → *Inspect*.
- 3 tab hay dùng: **Elements** (xem/sửa HTML-CSS trực tiếp), **Console** (báo lỗi), **Device toolbar** (giả lập mobile — dùng lại ở Chương 8).
- ✏️ Vào 1 trang bất kỳ, đổi màu chữ ngay trong Elements.

### 1.4 Cài đặt VS Code + extensions
- Cài **VS Code**, extension **Live Server** (tự reload).
- Emmet: gõ `!` + Tab để sinh khung HTML5. ➕ Giới thiệu vài shortcut Emmet: `div.box`, `ul>li*3`.
- ✏️ Tạo `index.html`, mở bằng Live Server, sửa chữ và thấy tự cập nhật.

### 1.5 Cấu trúc một file HTML
```html
<!DOCTYPE html>
<html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Trang đầu tiên</title>
  </head>
  <body>
    <h1>Xin chào!</h1>
  </body>
</html>
```
- Vai trò từng phần: `DOCTYPE`, `html lang`, `head` (metadata) vs `body` (nội dung hiển thị).

### 1.6 Comments trong HTML
- Cú pháp `<!-- ghi chú -->`; dùng để giải thích/tạm ẩn code; không hiển thị ra trang.

### 1.7 Các thẻ HTML thông dụng
- Văn bản: `h1–h6`, `p`, `span`, `strong`, `em`, `br`, `hr`.
- Danh sách: `ul/ol/li`. Liên kết & ảnh: `a` (thuộc tính `href`), `img` (`src`, `alt`).
- Nhóm: `div` (block) vs `span` (inline).
- **Thẻ semantic**: `header`, `nav`, `main`, `section`, `article`, `footer`.

### 1.8 Attribute trong HTML
- Cấu trúc `tên="giá trị"` đặt trong thẻ mở. Ví dụ `href`, `src`, `alt`, `id`, `class`, `target="_blank"`.

> 🎯 **Bài tập chương 1:** Dựng một trang "Giới thiệu bản thân" gồm tiêu đề, 1 ảnh, 1 đoạn văn, 1 danh sách sở thích, 1 link mạng xã hội. Chỉ HTML, chưa CSS.

---

# CHƯƠNG 2 — Kiến thức cơ bản & khái niệm cốt lõi CSS

**Mục tiêu:** Biết 3 cách nhúng CSS, dùng selector/độ ưu tiên đúng, khai báo biến, chọn đơn vị hợp lý và dùng pseudo-class/element.

### 2.1 Ba cách sử dụng CSS
- **Inline** (`style="..."` — hạn chế dùng), **Internal** (`<style>` trong `head`), **External** (`<link rel="stylesheet" href="style.css">` — chuẩn thực tế).
- Cú pháp quy tắc: `selector { property: value; }`.

### 2.2 ID và Class
- `id` = duy nhất (`#ten`), `class` = tái sử dụng nhiều nơi (`.ten`). Thực tế **ưu tiên class**.
```css
#logo { width: 120px; }
.btn  { padding: 8px 16px; }
```

### 2.3 CSS selectors cơ bản
- Kiểu thẻ (`p`), class (`.box`), id (`#top`), nhóm (`h1, h2`), hậu duệ (`.nav a`), con trực tiếp (`.nav > li`), universal (`*`).

### 2.4 Độ ưu tiên (Specificity)
- Thứ tự: `!important` > inline > id > class/pseudo-class/attribute > thẻ.
- Khi bằng điểm → **quy tắc viết sau thắng**.
- 💡 Tránh lạm dụng `!important`; ưu tiên tăng độ cụ thể bằng class.

### 2.5 Biến trong CSS (Custom Properties)
- **Vấn đề khi không dùng biến:** đổi màu thương hiệu phải sửa hàng chục chỗ.
```css
:root {
  --primary: #ff5722;
  --radius: 8px;
}
.btn { background: var(--primary); border-radius: var(--radius); }
```

### 2.6 Các đơn vị trong CSS
- Tuyệt đối: `px`. Tương đối: `%`, `em` (theo font cha), `rem` (theo root), `vw/vh` (theo viewport).
- 💡 Quy tắc: `rem` cho font/spacing, `%`/`vw` cho bố cục — chuẩn bị cho responsive.

### 2.7 Pseudo-classes
- `:hover`, `:focus`, `:active`, `:first-child`, `:last-child`, `:nth-child(n)`.

### 2.8 Pseudo-elements
- `::before`, `::after` (bắt buộc có `content`), `::first-line`, `::placeholder`.
```css
.badge::after { content: " ★"; color: gold; }
```

> 🎯 **Bài tập chương 2:** Style lại trang "Giới thiệu bản thân" ở Chương 1: dùng file CSS ngoài, đặt màu bằng biến, nút có hiệu ứng hover.

---

# CHƯƠNG 3 — Box Model

**Mục tiêu:** Hiểu 4 lớp của box, phân biệt `content-box`/`border-box`, và các kiểu hiển thị `display`.

### 3.1 Khái niệm Box Model
- Mọi phần tử = 1 hộp gồm 4 lớp: **content → padding → border → margin**.

### 3.2 Padding (đệm trong)
- Khoảng cách content ↔ border. Cú pháp 1/2/4 giá trị.
```css
.card { padding: 16px; }          /* đều 4 phía */
.card { padding: 8px 16px; }      /* trên-dưới | trái-phải */
.card { padding: 8px 12px 16px 14px; } /* trên - phải - dưới - trái */
```

### 3.3 Border (đường viền)
- `border: 1px solid #ccc;`, `border-radius`, `border-top`… 
- Bo tròn: `border-radius: 50%` = hình tròn.

### 3.4 Margin (lề ngoài)
- Khoảng cách giữa các hộp. Căn giữa khối: `margin: 0 auto;`.

### 3.5 box-sizing
- `content-box` (mặc định): `width` chỉ tính content → dễ vỡ layout.
- `border-box`: `width` gồm cả padding + border → dễ tính.
```css
*, *::before, *::after { box-sizing: border-box; }  /* reset nên dùng */
```

### 3.6 ➕ Thuộc tính display
- `block` (chiếm cả dòng, nhận width/height), `inline` (không nhận width/height), `inline-block` (vừa inline vừa nhận kích thước), `none` (ẩn hoàn toàn).
- ➕ `width/height`, `max-width`, `overflow: hidden/auto/scroll`.

> 🎯 **Bài tập chương 3:** Dựng 1 "card sản phẩm" (ảnh + tên + giá + nút) dùng `border-box`, padding/margin/border hợp lý, bo góc.

---

# CHƯƠNG 4 — Nền & Màu sắc

**Mục tiêu:** Dùng thành thạo các giá trị màu và nhóm thuộc tính `background`.

### 4.1 Các giá trị màu trong CSS
- Từ khóa (`red`), **HEX** (`#ff5722`), **RGB/RGBA** (`rgba(0,0,0,.5)` — có độ trong suốt)

### 4.2 background-color & background-image
```css
.hero {
  background-color: #111;
  background-image: url("hero.jpg");
}
```

### 4.3 background-size: cover vs contain
- `cover`: phủ kín, có thể cắt ảnh. `contain`: hiện đủ ảnh, có thể chừa khoảng trống. `100% 100%`: kéo méo.

### 4.4 background-repeat, background-position, background-origin
- `background-repeat: no-repeat;` · `background-position: center;` · `background-origin` (mốc tính từ border/padding/content-box).

### 4.5 Cú pháp shorthand
```css
.hero {
  background: #111 url("hero.jpg") center / cover no-repeat;
}
```
- Nhắc thứ tự: color · image · position `/` size · repeat.
- ✏️ Dựng "hero section" full màn hình có ảnh nền + lớp phủ tối + chữ trắng ở giữa.

> 🎯 **Bài tập chương 4:** Banner đầu trang: ảnh nền `cover`, overlay `rgba` tối, tiêu đề trắng + nút CTA.

---

# CHƯƠNG 5 — Đặt vị trí bằng Position

**Mục tiêu:** Phân biệt và áp dụng đúng 5 giá trị `position` cùng `z-index`.

### 5.1 Tổng quan
- `static` (mặc định), `relative`, `absolute`, `fixed`, `sticky`.
- Toạ độ: `top / right / bottom / left` chỉ hiệu lực khi position ≠ static.

### 5.2 relative
- Dịch phần tử so với **chính nó**, vẫn giữ chỗ cũ. Thường dùng làm **mốc** cho con `absolute`.

### 5.3 absolute
- Thoát khỏi luồng; định vị theo **tổ tiên gần nhất có position ≠ static** (nếu không có → theo `body`).
```css
.card { position: relative; }
.card .badge { position: absolute; top: 8px; right: 8px; }  /* nhãn "Sale" */
```

### 5.4 fixed
- Neo theo **viewport**, không cuộn theo trang. Dùng cho header cố định / nút "back to top".

### 5.5 sticky
- Lai giữa relative & fixed: dính lại khi cuộn tới ngưỡng. Cần đặt `top`.
```css
.navbar { position: sticky; top: 0; }
```

### 5.6 ➕ z-index & xếp lớp
- Số lớn nằm trên; chỉ áp dụng cho phần tử có position ≠ static. Cảnh báo "stacking context".

> 🎯 **Bài tập chương 5:** Card sản phẩm có nhãn "-20%" ở góc (absolute) + thanh nav dính đầu trang (sticky) + nút back-to-top (fixed).

---

# CHƯƠNG 6 — Thiết kế bố cục bằng Flexbox

**Mục tiêu:** Dùng Flexbox để căn chỉnh, dàn hàng ngang/dọc và phân bổ khoảng cách linh hoạt.

### 6.1 Giới thiệu Flexbox
- Mô hình 1 chiều (hàng **hoặc** cột). Khái niệm: **flex container** (cha) + **flex items** (con); trục chính (main axis) vs trục phụ (cross axis).
```css
.container { display: flex; }
```

### 6.2 Thuộc tính của CONTAINER
- `flex-direction: row | column`
- `justify-content` (trục chính): `flex-start / center / space-between / space-around / space-evenly`
- `align-items` (trục phụ): `stretch / center / flex-start / flex-end`
- `flex-wrap: wrap` (xuống dòng khi tràn)
- `gap: 16px` (khoảng cách giữa item — thay cho margin)
- `align-content` (khi có nhiều dòng)

### 6.3 Thuộc tính của ITEM
- `flex-grow` (giãn), `flex-shrink` (co), `flex-basis` (kích thước gốc) — gộp `flex: 1;`
- `align-self` (ghi đè align-items cho 1 item), `order` (đổi thứ tự hiển thị).

### 6.4 ➕ Mẫu thường gặp
- **Căn giữa tuyệt đối:** `display:flex; justify-content:center; align-items:center;`
- **Navbar:** logo trái, menu phải → `justify-content: space-between`.
- **Lưới card co giãn:** `flex-wrap: wrap; gap` + item `flex: 1 1 250px`.

> 🎯 **Bài tập chương 6:** Dựng navbar (logo + menu ngang) và một hàng 3–4 card tự xuống dòng khi hẹp, dùng `gap` thay margin.

---

# CHƯƠNG 7 — Mẫu bố cục, Transition & Transform 

**Mục tiêu:** Ghép các thành phần thành bố cục trang hoàn chỉnh và tạo hiệu ứng chuyển động cơ bản.

### 7.1 ➕ Các mẫu bố cục kinh điển
- Bố cục trang: `header / nav / main / aside / footer`.
- **Card grid**, **media object** (ảnh trái – nội dung phải), **hero + CTA**, **2 cột nội dung + sidebar**.
- 💡 Giới thiệu nhanh **CSS Grid** như lựa chọn 2 chiều bổ trợ Flexbox:
```css
.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
```

### 7.2 ➕ transition (chuyển tiếp)
- Làm mượt khi giá trị đổi (thường kèm `:hover`).
```css
.btn {
  background: var(--primary);
  transition: background .3s ease, transform .2s;
}
.btn:hover { background: #e64a19; }
```
- Thành phần: `property duration timing-function delay`. Timing hay dùng: `ease`, `linear`, `ease-in-out`.

### 7.3 ➕ transform (biến đổi)
- `translate(x, y)`, `scale()`, `rotate()`, `skew()`; gốc biến đổi `transform-origin`.
```css
.card:hover { transform: translateY(-6px) scale(1.02); }
```

### 7.4 ➕ animation & @keyframes (giới thiệu)
```css
@keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
.hero-title { animation: fadeIn .8s ease both; }
```
- Thuộc tính: `animation-name/duration/iteration-count/direction/fill-mode`.

> 🎯 **Bài tập chương 7:** Hàng card có hiệu ứng nhấc lên + đổ bóng khi hover (transition + transform); tiêu đề hero fade-in khi tải trang.

---

# CHƯƠNG 8 — Thiết kế web đáp ứng (Responsive)

**Mục tiêu:** Trang hiển thị tốt trên mobile, tablet, desktop theo tư duy mobile-first.

### 8.1 Responsive là gì?
- Một layout co giãn theo kích thước màn hình. Trụ cột: **đơn vị linh hoạt + media queries + ảnh co giãn**.
- ➕ Thẻ bắt buộc: `<meta name="viewport" content="width=device-width, initial-scale=1">` (giải thích vì sao thiếu là hỏng mobile).

### 8.2 Media queries
```css
/* mobile-first: viết mặc định cho mobile, rồi mở rộng lên */
.container { flex-direction: column; }

@media (min-width: 768px) {  /* tablet */
  .container { flex-direction: row; }
}
@media (min-width: 1024px) { /* desktop */ }
```
- ➕ **Mobile-first** (min-width) vs **desktop-first** (max-width) — nên dạy mobile-first.
- ➕ Breakpoint gợi ý: 576 / 768 / 992 / 1200px.

### 8.3 Tablet responsive
- Chuyển 3 cột → 2 cột; menu ngang → menu dọc/hamburger (giới thiệu ý tưởng, phần JS học sau).

### 8.4 ➕ Kỹ thuật hỗ trợ responsive
- Ảnh co giãn: `img { max-width: 100%; height: auto; }`.
- Đơn vị linh hoạt: `%`, `vw/vh`, `rem`, `clamp()` — ví dụ typography co giãn:
```css
h1 { font-size: clamp(1.5rem, 4vw, 3rem); }
```
- Grid tự động: `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));`
- 💡 Test bằng Device toolbar tại DevTools.

> 🎯 **Bài tập chương 8:** Lấy trang card ở Chương 7 làm responsive: 1 cột (mobile) → 2 cột (tablet) → 3–4 cột (desktop).

---

# CHƯƠNG 9 — Quy ước đặt tên BEM

**Mục tiêu:** Đặt tên class nhất quán, dễ bảo trì; tránh xung đột style.

### 9.1 BEM là gì?
- **B**lock (thành phần độc lập) – **E**lement (`block__element`) – **M**odifier (`block--modifier`).
```html
<div class="card">
  <img class="card__thumb" />
  <h3 class="card__title">Tên</h3>
  <button class="card__btn card__btn--primary">Mua</button>
</div>
```
- Lợi ích: tên "phẳng" (specificity thấp, dễ ghi đè), đọc là biết vai trò.

### 9.2 Đặt tên khi Block lồng nhau
- Element **không** nối nhiều cấp: dùng `card__title` chứ **không** `card__body__title`.
- Block có thể lồng trong block khác nhưng mỗi block giữ namespace riêng.

### 9.3 ➕ Modifier & lỗi thường gặp
- Modifier cho trạng thái/biến thể: `btn--large`, `nav__item--active`.
- ❌ Lỗi hay gặp: lồng element quá sâu, dùng modifier đứng một mình (phải đi kèm block/element gốc).

> 🎯 **Bài tập chương 9:** Đặt lại toàn bộ class của card sản phẩm theo BEM (block `card`, các element, 1 modifier `card--featured`).

---

# CHƯƠNG 10 — Dự án thực tế

**Mục tiêu:** Ghép mọi kiến thức để dựng một trang hoàn chỉnh, quy trình bài bản, đặt tên theo BEM, responsive.

### 10.1 ➕ Quy trình làm một trang web
1. Phân tích thiết kế → chia block (header, hero, features, footer…).
2. Dựng HTML semantic trước (khung xương, chưa style).
3. Khai báo biến (màu, font, spacing).
4. Style từng block theo BEM.
5. Làm responsive (mobile-first).
6. Thêm transition/transform tinh chỉnh.

### 10.2 Dự án chính — Landing Page
- Yêu cầu: dùng Flexbox/Grid, responsive 3 mốc, hover effect.

---
