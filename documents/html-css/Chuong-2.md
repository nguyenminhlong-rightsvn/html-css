# CHƯƠNG 2 — Kiến thức cơ bản & khái niệm cốt lõi CSS

---

# Slide 1 — Chương 2: Kiến thức cơ bản & khái niệm cốt lõi CSS

## Mục tiêu chương học

Sau khi hoàn thành chương này, bạn sẽ có thể:

- Hiểu CSS được viết ở đâu và hoạt động như thế nào.
- Biết 3 cách nhúng CSS vào HTML.
- Phân biệt và sử dụng đúng `id` và `class`.
- Sử dụng các CSS selector cơ bản.
- Hiểu độ ưu tiên (Specificity) khi các style xung đột.
- Khai báo và sử dụng biến trong CSS.
- Chọn đúng đơn vị cho font, khoảng cách và bố cục.
- Sử dụng pseudo-class và pseudo-element.

---

## Kết quả đạt được

Đến cuối chương, bạn sẽ tự tay tô điểm lại trang **Giới thiệu bản thân** ở Chương 1 với:

- Một file CSS ngoài riêng biệt.
- Màu sắc khai báo bằng biến.
- Nút bấm có hiệu ứng khi rê chuột.

Đây là bước đầu tiên biến những trang HTML "trơ" trở nên đẹp mắt.

---

# Slide 2 — Nhắc lại: CSS là gì?

Ở Chương 1, chúng ta đã biết:

- HTML tạo nội dung.
- CSS làm đẹp nội dung.

CSS là viết tắt của

**Cascading Style Sheets**

---

## Trong chương này

Chúng ta sẽ học cách **viết CSS thật sự**, thay vì chỉ chỉnh tạm trong DevTools.

Từ đây, mọi thứ liên quan đến giao diện đều là CSS.

---

# Slide 3 — 2.1 Ba cách sử dụng CSS

## Mục tiêu

Biết CSS có thể được đặt ở những đâu, và cách nào là chuẩn trong thực tế.

---

## CSS có thể được viết ở 3 nơi

```text
Inline

↓

Internal

↓

External
```

Chúng ta sẽ tìm hiểu lần lượt từng cách.

---

# Slide 4 — Cú pháp cơ bản của CSS

Một quy tắc CSS luôn có dạng:

```css
selector {
    property: value;
}
```

---

Ví dụ

```css
h1 {
    color: blue;
    font-size: 32px;
}
```

---

## Giải thích

- `selector` → chọn phần tử cần trang trí (ở đây là `h1`).
- `property` → thuộc tính muốn thay đổi (`color`, `font-size`).
- `value` → giá trị của thuộc tính (`blue`, `32px`).

---

## Ghi nhớ

Mỗi dòng khai báo kết thúc bằng dấu chấm phẩy `;`.

---

# Slide 5 — Cách 1: Inline CSS

Inline CSS được viết trực tiếp trong thẻ HTML bằng thuộc tính `style`.

Ví dụ

```html
<h1 style="color: red;">Xin chào</h1>
```

---

Có thể viết nhiều thuộc tính cùng lúc:

```html
<p style="color: green; font-size: 20px;">
Đoạn văn
</p>
```

---

## Ghi nhớ

Inline CSS chỉ ảnh hưởng đến đúng thẻ chứa nó.

---

# Slide 6 — Nhược điểm của Inline CSS

Inline CSS nghe có vẻ tiện, nhưng gây ra nhiều vấn đề:

- Code HTML bị rối.
- Khó tái sử dụng.
- Không thể áp dụng cho nhiều phần tử cùng lúc.
- Rất khó bảo trì.

---

Ví dụ

```html
<p style="color: red;">Dòng 1</p>

<p style="color: red;">Dòng 2</p>

<p style="color: red;">Dòng 3</p>
```

Muốn đổi màu, phải sửa từng dòng một.

---

## Ghi nhớ

Trong thực tế, hạn chế sử dụng Inline CSS.

---

# Slide 7 — Cách 2: Internal CSS

Internal CSS được viết bên trong thẻ `<style>`, đặt trong phần `<head>`.

```html
<head>
    <style>
        h1 {
            color: blue;
        }
    </style>
</head>
```

---

## Ưu điểm

- Style tập trung tại một nơi.
- Áp dụng được cho nhiều phần tử.

---

## Nhược điểm

- Chỉ dùng được cho **một** trang HTML.
- Nhiều trang thì phải chép đi chép lại.

---

# Slide 8 — Cách 3: External CSS

External CSS được viết trong một file `.css` riêng.

Ví dụ, tạo file:

```
style.css
```

Nội dung

```css
h1 {
    color: blue;
}
```

---

Sau đó liên kết vào HTML bằng thẻ `<link>` trong `<head>`:

```html
<head>
    <link rel="stylesheet" href="style.css">
</head>
```

---

## Ghi nhớ

External CSS là cách **chuẩn** được sử dụng trong hầu hết các dự án thực tế.

---

# Slide 9 — Vì sao nên dùng External CSS?

- Tách biệt nội dung (HTML) và giao diện (CSS).
- Một file CSS dùng chung cho nhiều trang.
- Dễ đọc, dễ bảo trì.
- Dễ làm việc nhóm.

---

Ví dụ

Một file `style.css` có thể được dùng cho:

```text
index.html

about.html

contact.html
```

Đổi màu một lần → tất cả các trang đều thay đổi.

---

# Slide 10 — So sánh 3 cách sử dụng CSS

| Cách | Viết ở đâu | Dùng khi |
|------|------------|----------|
| Inline | Trong thẻ HTML | Rất hiếm, thử nhanh |
| Internal | Trong `<style>` | Trang nhỏ, một file |
| External | File `.css` riêng | Dự án thực tế |

---

## Ghi nhớ

Thứ tự ưu tiên khi học:

```text
External  ✔ (chuẩn)

Internal  (tạm được)

Inline    ❌ (hạn chế)
```

---

# Slide 11 — Thực hành 3 cách CSS

## Bài tập

Tạo một tiêu đề `<h1>` màu xanh bằng cả 3 cách:

- Cách 1: Inline.
- Cách 2: Internal.
- Cách 3: External.

---

## Mục tiêu

Cảm nhận sự khác nhau và hiểu vì sao External là lựa chọn tốt nhất.

---

# Slide 12 — Tổng kết phần 1

Trong phần này chúng ta đã học:

✅ Cú pháp cơ bản của CSS.

✅ Inline CSS.

✅ Internal CSS.

✅ External CSS.

✅ Vì sao nên dùng External CSS.

Ở phần tiếp theo, chúng ta sẽ học cách chọn phần tử để trang trí bằng `id` và `class`.

---

# Slide 13 — 2.2 ID và Class

## Mục tiêu

Hiểu hai cách đặt tên phổ biến nhất để CSS có thể "nhắm trúng" phần tử cần trang trí.

---

## Vấn đề

Làm sao để CSS chỉ trang trí đúng một phần tử, thay vì tất cả?

Câu trả lời: dùng `id` và `class`.

---

# Slide 14 — Class là gì?

`class` là tên nhóm đặt cho phần tử.

Trong HTML

```html
<p class="note">Ghi chú</p>
```

Trong CSS, chọn class bằng dấu chấm `.`

```css
.note {
    color: gray;
}
```

---

## Ghi nhớ

Một `class` có thể được dùng lại ở **nhiều** phần tử.

---

# Slide 15 — Class dùng lại được nhiều nơi

Ví dụ

```html
<p class="highlight">Dòng 1</p>

<p class="highlight">Dòng 2</p>
```

CSS

```css
.highlight {
    color: orange;
}
```

Cả hai đoạn văn đều đổi màu.

---

## Ghi nhớ

Đây chính là điểm mạnh của `class`: viết một lần, dùng nhiều nơi.

---

# Slide 16 — ID là gì?

`id` là định danh **duy nhất** cho một phần tử.

Trong HTML

```html
<h1 id="logo">Tên website</h1>
```

Trong CSS, chọn id bằng dấu thăng `#`

```css
#logo {
    font-size: 40px;
}
```

---

## Ghi nhớ

Mỗi `id` chỉ nên xuất hiện **một lần** trên trang.

---

# Slide 17 — So sánh ID và Class

| | id | class |
|---|-----|-------|
| Ký hiệu CSS | `#` | `.` |
| Số lần dùng | Duy nhất | Nhiều lần |
| Độ ưu tiên | Cao hơn | Thấp hơn |
| Mục đích | Định danh riêng | Nhóm dùng chung |

---

Ví dụ

```html
<div id="header" class="box">
    ...
</div>
```

Một phần tử có thể có cả `id` lẫn `class`.

---

# Slide 18 — Một phần tử nhiều class

Một phần tử có thể mang nhiều class cùng lúc, cách nhau bằng dấu cách.

```html
<button class="btn btn-primary">
Mua ngay
</button>
```

---

CSS

```css
.btn {
    padding: 8px 16px;
}

.btn-primary {
    background: blue;
    color: white;
}
```

---

## Ghi nhớ

Nhiều class giúp kết hợp nhiều nhóm style lại với nhau.

---

# Slide 19 — Nên ưu tiên Class

Trong thực tế, lập trình viên **ưu tiên dùng class** hơn id.

Lý do:

- Dùng lại được nhiều nơi.
- Độ ưu tiên thấp → dễ ghi đè khi cần.
- Phù hợp với các quy ước đặt tên (học ở Chương 9 — BEM).

---

## Ghi nhớ

`id` thường dùng để định danh, còn `class` mới là công cụ chính khi viết CSS.

---

# Slide 20 — Thực hành ID và Class

## Bài tập

Tạo một trang gồm:

- Một tiêu đề có `id="title"`.
- Ba đoạn văn cùng `class="text"`.

Sau đó dùng CSS để:

- Đổi màu tiêu đề.
- Đổi cỡ chữ của cả ba đoạn văn.

---

## Mục tiêu

Phân biệt rõ khi nào dùng `id`, khi nào dùng `class`.

---

# Slide 21 — 2.3 CSS Selectors cơ bản

## Mục tiêu

Học các cách chọn phần tử phổ biến nhất trong CSS.

---

## Selector là gì?

Selector là phần đứng trước dấu `{` — dùng để chỉ định phần tử cần trang trí.

```css
selector {
    property: value;
}
```

---

# Slide 22 — Selector theo kiểu thẻ

Chọn tất cả phần tử của một loại thẻ.

```css
p {
    color: gray;
}
```

Tất cả thẻ `<p>` trên trang đều đổi màu.

---

## Ghi nhớ

Selector kiểu thẻ ảnh hưởng đến **mọi** thẻ cùng loại.

---

# Slide 23 — Selector theo Class

Chọn phần tử theo class, dùng dấu chấm `.`

```css
.box {
    border: 1px solid black;
}
```

Áp dụng cho mọi phần tử có `class="box"`.

---

# Slide 24 — Selector theo ID

Chọn phần tử theo id, dùng dấu thăng `#`

```css
#top {
    background: yellow;
}
```

Áp dụng cho phần tử có `id="top"`.

---

# Slide 25 — Selector nhóm

Áp dụng cùng một style cho nhiều selector cùng lúc, cách nhau bằng dấu phẩy `,`

```css
h1, h2, h3 {
    color: navy;
}
```

---

## Ghi nhớ

Selector nhóm giúp tránh viết lại nhiều lần cùng một quy tắc.

---

# Slide 26 — Selector hậu duệ

Chọn phần tử nằm **bên trong** một phần tử khác, cách nhau bằng dấu cách.

```css
.nav a {
    color: white;
}
```

Chọn mọi thẻ `<a>` nằm trong phần tử có `class="nav"`.

---

Ví dụ HTML

```html
<div class="nav">
    <a href="#">Trang chủ</a>
    <a href="#">Liên hệ</a>
</div>
```

---

# Slide 27 — Selector con trực tiếp

Chọn phần tử là **con trực tiếp**, dùng dấu `>`

```css
.nav > li {
    list-style: none;
}
```

Chỉ chọn `<li>` là con ngay bên dưới `.nav`, không tính cháu chắt.

---

## So sánh nhanh

```text
.nav a    → mọi <a> bên trong (mọi cấp)

.nav > li → chỉ con trực tiếp
```

---

# Slide 28 — Universal Selector

Dấu `*` chọn **tất cả** các phần tử.

```css
* {
    margin: 0;
    padding: 0;
}
```

Thường dùng để "reset" style mặc định của trình duyệt.

---

## Ghi nhớ

Universal selector rất mạnh, nên dùng cẩn thận.

---

# Slide 29 — Bảng tổng hợp Selector

| Selector | Ý nghĩa |
|----------|---------|
| `p` | Theo kiểu thẻ |
| `.box` | Theo class |
| `#top` | Theo id |
| `h1, h2` | Nhóm nhiều selector |
| `.nav a` | Hậu duệ (mọi cấp) |
| `.nav > li` | Con trực tiếp |
| `*` | Tất cả phần tử |

---

## Ghi nhớ

Đây là những selector được dùng nhiều nhất khi viết CSS.

---

# Slide 30 — Thực hành Selector

## Bài tập

Cho đoạn HTML

```html
<ul class="menu">
    <li><a href="#">Item 1</a></li>
    <li><a href="#">Item 2</a></li>
</ul>
```

Hãy viết CSS để:

- Bỏ dấu chấm đầu dòng của `<li>`.
- Đổi màu các thẻ `<a>` bên trong menu.

---

## Mục tiêu

Làm quen với selector hậu duệ và con trực tiếp.

---

# Slide 31 — 2.4 Độ ưu tiên (Specificity)

## Mục tiêu

Hiểu vì sao đôi khi CSS "không chịu ăn", và quy tắc nào sẽ thắng khi xung đột.

---

## Vấn đề

Điều gì xảy ra khi nhiều quy tắc cùng tác động lên một phần tử?

```css
p { color: red; }

.text { color: blue; }
```

```html
<p class="text">Tôi màu gì?</p>
```

---

# Slide 32 — Specificity là gì?

Khi nhiều quy tắc xung đột, trình duyệt sẽ chọn quy tắc có **độ ưu tiên cao hơn**.

Thứ tự từ cao đến thấp:

```text
!important

↓

Inline style

↓

id

↓

class / pseudo-class / attribute

↓

Thẻ
```

---

# Slide 33 — Ví dụ về độ ưu tiên

```css
p        { color: red; }    /* thẻ */

.text    { color: blue; }   /* class */

#special { color: green; }  /* id */
```

```html
<p id="special" class="text">Xin chào</p>
```

---

Kết quả

Chữ hiển thị màu **xanh lá** (green), vì `id` có độ ưu tiên cao nhất trong ba quy tắc trên.

---

# Slide 34 — Khi bằng điểm thì sao?

Nếu hai quy tắc có **cùng độ ưu tiên**, quy tắc nào **viết sau** sẽ thắng.

```css
.text { color: blue; }

.text { color: orange; }
```

---

Kết quả

Chữ màu **cam** (orange), vì nó được viết sau.

---

## Ghi nhớ

Cùng điểm → dòng viết sau thắng.

---

# Slide 35 — !important

`!important` sẽ ghi đè lên hầu hết mọi quy tắc khác.

```css
p {
    color: red !important;
}
```

Dù có class hay id, chữ vẫn màu đỏ.

---

## Cảnh báo

`!important` rất mạnh, nhưng lạm dụng sẽ khiến CSS khó kiểm soát.

---

# Slide 36 — Tránh lạm dụng !important

💡 Thay vì dùng `!important`, hãy tăng độ cụ thể bằng class.

❌ Không nên

```css
p {
    color: red !important;
}
```

✔ Nên

```css
.intro-text {
    color: red;
}
```

---

## Ghi nhớ

`!important` chỉ nên dùng trong trường hợp thật sự cần thiết.

---

# Slide 37 — Thực hành Specificity

## Bài tập

Cho đoạn CSS

```css
p        { color: black; }
.note    { color: blue; }
#warning { color: red; }
```

```html
<p id="warning" class="note">Chú ý</p>
```

Hãy đoán màu chữ trước khi chạy thử.

---

## Mục tiêu

Hiểu và dự đoán được kết quả khi các quy tắc xung đột.

---

# Slide 38 — Tổng kết phần 2

Trong phần này chúng ta đã học:

✅ `id` và `class`.

✅ Các selector cơ bản.

✅ Selector nhóm, hậu duệ, con trực tiếp.

✅ Universal selector.

✅ Độ ưu tiên (Specificity).

✅ Quy tắc viết sau thắng.

✅ `!important` và cách hạn chế.

Ở phần tiếp theo, chúng ta sẽ học cách quản lý màu sắc và giá trị bằng **biến CSS**.

---

# Slide 39 — 2.5 Biến trong CSS (Custom Properties)

## Mục tiêu

Học cách khai báo giá trị một lần và tái sử dụng ở nhiều nơi.

---

## Vấn đề khi không dùng biến

Giả sử màu thương hiệu là `#ff5722`, được dùng ở rất nhiều nơi:

```css
.btn    { background: #ff5722; }
.link   { color: #ff5722; }
.border { border: 1px solid #ff5722; }
```

---

Khi cần đổi màu thương hiệu

Phải sửa **từng chỗ một** — rất dễ sót và sai.

---

# Slide 40 — Biến CSS là gì?

Biến CSS cho phép lưu một giá trị và dùng lại nhiều lần.

Khai báo trong `:root`

```css
:root {
    --primary: #ff5722;
    --radius: 8px;
}
```

---

## Ghi nhớ

- Tên biến luôn bắt đầu bằng hai dấu gạch ngang `--`.
- `:root` đại diện cho toàn bộ tài liệu.

---

# Slide 41 — Sử dụng biến với var()

Dùng biến bằng hàm `var()`

```css
.btn {
    background: var(--primary);
    border-radius: var(--radius);
}
```

---

Ví dụ đầy đủ

```css
:root {
    --primary: #ff5722;
}

.btn  { background: var(--primary); }
.link { color: var(--primary); }
```

---

# Slide 42 — Lợi ích của biến CSS

Chỉ cần đổi giá trị ở **một nơi**, toàn bộ website cập nhật theo.

```css
:root {
    --primary: #2196f3;  /* đổi từ cam sang xanh */
}
```

Tất cả chỗ dùng `var(--primary)` đều đổi màu ngay lập tức.

---

## Ghi nhớ

Biến giúp CSS dễ bảo trì và nhất quán hơn.

---

# Slide 43 — Biến thường dùng cho gì?

- Màu sắc (màu chính, màu phụ, màu chữ).
- Khoảng cách (spacing).
- Bo góc (border-radius).
- Font chữ.

Ví dụ

```css
:root {
    --primary: #ff5722;
    --text: #333;
    --gap: 16px;
    --radius: 8px;
}
```

---

# Slide 44 — Thực hành biến CSS

## Bài tập

Khai báo các biến:

- `--primary` cho màu chính.
- `--radius` cho bo góc.

Sau đó tạo một nút bấm dùng hai biến này.

Cuối cùng, thử đổi giá trị `--primary` và quan sát.

---

## Mục tiêu

Hiểu sức mạnh của việc quản lý giá trị tập trung.

---

# Slide 45 — 2.6 Các đơn vị trong CSS

## Mục tiêu

Chọn đúng đơn vị cho font, khoảng cách và bố cục.

---

## Hai nhóm đơn vị

```text
Tuyệt đối

↓

px

Tương đối

↓

%  em  rem  vw  vh
```

---

# Slide 46 — Đơn vị px

`px` là đơn vị tuyệt đối, cố định.

```css
h1 {
    font-size: 32px;
}
```

---

## Đặc điểm

- Dễ hiểu, dễ hình dung.
- Không tự co giãn theo màn hình.

---

## Ghi nhớ

`px` phù hợp khi cần kích thước chính xác, cố định.

---

# Slide 47 — Đơn vị %

`%` là đơn vị tương đối, tính theo phần tử cha.

```css
.box {
    width: 50%;
}
```

`.box` sẽ rộng bằng một nửa phần tử cha.

---

## Ghi nhớ

`%` rất hữu ích cho bố cục co giãn.

---

# Slide 48 — Đơn vị em

`em` tính theo font-size của **phần tử cha**.

```css
.parent {
    font-size: 20px;
}

.child {
    font-size: 2em;   /* = 40px */
}
```

---

## Lưu ý

`em` có thể bị "nhân dồn" khi lồng nhiều cấp, nên đôi khi khó kiểm soát.

---

# Slide 49 — Đơn vị rem

`rem` tính theo font-size của **thẻ gốc** (`<html>` / `:root`).

Mặc định trình duyệt: `1rem = 16px`.

```css
h1 {
    font-size: 2rem;   /* = 32px */
}
```

---

## Ghi nhớ

`rem` ổn định hơn `em` vì luôn tính theo một mốc chung.

---

# Slide 50 — Đơn vị vw và vh

Tính theo kích thước màn hình (viewport).

- `1vw` = 1% chiều rộng màn hình.
- `1vh` = 1% chiều cao màn hình.

```css
.hero {
    width: 100vw;
    height: 100vh;
}
```

---

## Ghi nhớ

`vw` / `vh` rất hữu ích cho các phần chiếm trọn màn hình.

---

# Slide 51 — Bảng so sánh đơn vị

| Đơn vị | Loại | Tính theo |
|--------|------|-----------|
| `px` | Tuyệt đối | Cố định |
| `%` | Tương đối | Phần tử cha |
| `em` | Tương đối | Font cha |
| `rem` | Tương đối | Font gốc |
| `vw` / `vh` | Tương đối | Màn hình |

---

# Slide 52 — Nên dùng đơn vị nào?

💡 Quy tắc gợi ý:

- `rem` → cho font và khoảng cách.
- `%` / `vw` → cho bố cục.
- `px` → khi cần cố định (viền, bóng nhỏ...).

---

## Ghi nhớ

Chọn đơn vị tương đối giúp website dễ dàng responsive sau này.

---

# Slide 53 — Thực hành đơn vị

## Bài tập

Tạo một khối `.box`:

- Chiều rộng `50%`.
- Chữ bên trong dùng `1.5rem`.

Thử thu nhỏ cửa sổ trình duyệt và quan sát.

---

## Mục tiêu

Cảm nhận sự khác biệt giữa đơn vị cố định và tương đối.

---

# Slide 54 — 2.7 Pseudo-classes

## Mục tiêu

Tạo hiệu ứng theo **trạng thái** của phần tử (rê chuột, chọn, nhấn...).

---

## Pseudo-class là gì?

Pseudo-class chọn phần tử ở một trạng thái đặc biệt.

Cú pháp: dùng dấu hai chấm `:`

```css
selector:trạng-thái {
    ...
}
```

---

# Slide 55 — :hover

Áp dụng khi người dùng **rê chuột** lên phần tử.

```css
.btn:hover {
    background: orange;
}
```

Khi rê chuột vào nút, nền chuyển sang màu cam.

---

## Ghi nhớ

`:hover` là pseudo-class được dùng nhiều nhất.

---

# Slide 56 — :focus

Áp dụng khi phần tử đang được **chọn / focus**, thường là ô nhập liệu.

```css
input:focus {
    border: 2px solid blue;
}
```

Khi bấm vào ô input, viền chuyển sang xanh.

---

## Ghi nhớ

`:focus` rất quan trọng với biểu mẫu (form).

---

# Slide 57 — :active

Áp dụng ngay tại thời điểm phần tử đang được **nhấn**.

```css
.btn:active {
    transform: scale(0.98);
}
```

Nút hơi thu nhỏ khi bị bấm, tạo cảm giác "nhấn thật".

---

# Slide 58 — :first-child và :last-child

Chọn phần tử **đầu tiên** hoặc **cuối cùng** trong nhóm.

```css
li:first-child {
    font-weight: bold;
}

li:last-child {
    color: gray;
}
```

---

Ví dụ HTML

```html
<ul>
    <li>Đầu tiên</li>
    <li>Ở giữa</li>
    <li>Cuối cùng</li>
</ul>
```

---

# Slide 59 — :nth-child(n)

Chọn phần tử theo **thứ tự** trong nhóm.

```css
li:nth-child(2) {
    color: red;
}
```

Chọn phần tử thứ 2.

---

Có thể dùng công thức

```css
li:nth-child(even) {  /* các dòng chẵn */
    background: #f2f2f2;
}
```

Thường dùng để tô màu xen kẽ cho bảng.

---

# Slide 60 — Thực hành Pseudo-classes

## Bài tập

Tạo một nút bấm:

- Bình thường: nền xanh.
- Khi `:hover`: nền xanh đậm hơn.
- Khi `:active`: hơi thu nhỏ.

---

## Mục tiêu

Làm quen với việc tạo hiệu ứng theo trạng thái.

---

# Slide 61 — 2.8 Pseudo-elements

## Mục tiêu

Tạo và trang trí **một phần** của phần tử, hoặc chèn thêm nội dung bằng CSS.

---

## Pseudo-element là gì?

Pseudo-element chọn một phần cụ thể của phần tử.

Cú pháp: dùng **hai** dấu hai chấm `::`

```css
selector::phần {
    ...
}
```

---

# Slide 62 — ::before và ::after

Chèn thêm nội dung **trước** hoặc **sau** nội dung của phần tử.

```css
.badge::after {
    content: " ★";
    color: gold;
}
```

---

Kết quả

Một ngôi sao vàng được chèn ngay sau nội dung của `.badge`.

---

# Slide 63 — content là bắt buộc

`::before` và `::after` **bắt buộc** phải có thuộc tính `content`, nếu không sẽ không hiển thị.

```css
.box::before {
    content: "";        /* vẫn cần, dù để trống */
    display: block;
}
```

---

## Ghi nhớ

Không có `content` → pseudo-element sẽ không xuất hiện.

---

# Slide 64 — ::first-line

Trang trí riêng **dòng đầu tiên** của một đoạn văn.

```css
p::first-line {
    font-weight: bold;
    color: navy;
}
```

Chỉ dòng đầu tiên được in đậm và đổi màu.

---

# Slide 65 — ::placeholder

Trang trí phần chữ gợi ý (placeholder) trong ô nhập liệu.

```css
input::placeholder {
    color: #aaa;
}
```

---

Ví dụ HTML

```html
<input placeholder="Nhập tên của bạn">
```

Chữ gợi ý sẽ có màu xám nhạt.

---

# Slide 66 — Phân biệt Pseudo-class và Pseudo-element

| | Pseudo-class | Pseudo-element |
|---|-------------|----------------|
| Ký hiệu | `:` | `::` |
| Chọn theo | Trạng thái | Một phần của phần tử |
| Ví dụ | `:hover` | `::before` |

---

## Ghi nhớ

- Một dấu hai chấm → trạng thái.
- Hai dấu hai chấm → một phần của phần tử.

---

# Slide 67 — Thực hành Pseudo-elements

## Bài tập

Tạo một nhãn `.tag`:

- Dùng `::before` để chèn ký tự `#` trước nội dung.

Ví dụ hiển thị:

```text
#html
```

---

## Mục tiêu

Làm quen với việc chèn nội dung bằng CSS.

---

# Slide 68 — Bài tập cuối chương

## Yêu cầu

Tô điểm lại trang **Giới thiệu bản thân** đã làm ở Chương 1.

Trang web cần:

- Sử dụng một file **CSS ngoài** (`style.css`).
- Khai báo màu bằng **biến CSS**.
- Có một **nút bấm** với hiệu ứng `:hover`.

---

## Gợi ý

- Đặt màu chính trong `:root`.
- Dùng `class` để trang trí, hạn chế `id`.
- Chọn `rem` cho cỡ chữ.

---

# Slide 69 — Gợi ý cấu trúc bài tập

```text
style.css

↓

:root  →  khai báo biến màu

↓

.header    →  màu chữ, cỡ chữ

↓

.intro     →  đoạn giới thiệu

↓

.btn       →  nút bấm

↓

.btn:hover →  hiệu ứng rê chuột
```

---

## Không yêu cầu

- Flexbox
- Position
- Responsive

Những phần này sẽ học ở các chương sau.

---

# Slide 70 — Tổng kết Chương 2

🎉 Chúc mừng!

Bạn đã hoàn thành chương thứ hai của khóa học.

---

## Kiến thức đã học

✅ Ba cách sử dụng CSS.

✅ `id` và `class`.

✅ Các CSS selector cơ bản.

✅ Độ ưu tiên (Specificity).

✅ Biến trong CSS.

✅ Các đơn vị `px`, `%`, `em`, `rem`, `vw`, `vh`.

✅ Pseudo-classes.

✅ Pseudo-elements.

---

## Sau chương này

Bạn đã có thể dùng CSS để tô điểm cho trang HTML của mình một cách bài bản.

Ở chương tiếp theo, chúng ta sẽ tìm hiểu **Box Model** — nền tảng để hiểu cách các phần tử chiếm không gian và sắp xếp trên trang.