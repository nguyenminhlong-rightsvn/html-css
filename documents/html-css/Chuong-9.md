# CHƯƠNG 9 — Quy ước đặt tên BEM + Kebab-case + Utility class

---

# Slide 1 — Chương 9: Quy ước đặt tên BEM

## Mục tiêu chương học

Sau khi hoàn thành chương này, bạn sẽ có thể:

- Hiểu BEM là gì và vì sao cần dùng.
- Phân biệt Block, Element và Modifier.
- Đặt tên class nhất quán, dễ đọc.
- Xử lý đúng khi các block lồng nhau.
- Tránh các lỗi thường gặp khi dùng BEM.
- Viết tên class theo chuẩn kebab-case.
- Biết utility class là gì và khi nào nên dùng.

---

## Kết quả đạt được

Đến cuối chương, bạn sẽ đặt lại toàn bộ class của card sản phẩm theo BEM:

- Block: `card`
- Các element: `card__thumb`, `card__title`...
- Một modifier: `card--featured`
- Tên nhiều chữ viết kebab-case: `card__old-price`
- Một vài utility class dùng chung: `.text-center`, `.mt-16`

---

# Slide 2 — Vấn đề khi đặt tên tùy tiện

Khi dự án lớn dần, tên class dễ trở nên lộn xộn.

```css
.box { ... }
.box2 { ... }
.red-title { ... }
.title-big { ... }
```

---

## Hậu quả

- Không biết class nào thuộc thành phần nào.
- Dễ trùng tên, đè lên nhau.
- Rất khó bảo trì và làm việc nhóm.

---

# Slide 3 — BEM giải quyết vấn đề đó

BEM là một **quy ước đặt tên class** giúp CSS:

- Rõ ràng.
- Nhất quán.
- Dễ bảo trì.
- Tránh xung đột style.

---

## Ghi nhớ

BEM không phải công cụ hay thư viện — chỉ là một cách đặt tên.

---

# Slide 4 — 9.1 BEM là gì?

BEM là viết tắt của ba thành phần:

```text
B  →  Block

E  →  Element

M  →  Modifier
```

---

## Ý nghĩa

- **Block** — một thành phần độc lập.
- **Element** — một phần bên trong block.
- **Modifier** — một biến thể hoặc trạng thái.

---

# Slide 5 — Block

Block là một thành phần đứng độc lập, có ý nghĩa riêng.

Ví dụ:

```text
card

menu

button

header
```

---

Cách viết

```html
<div class="card"></div>
```

---

## Ghi nhớ

Block là "khối" lớn nhất trong một thành phần.

---

# Slide 6 — Element

Element là một phần **bên trong** block, viết bằng hai dấu gạch dưới `__`.

```text
block__element
```

---

Ví dụ

```html
<div class="card">
    <img class="card__thumb">
    <h3 class="card__title">Tên</h3>
</div>
```

---

## Ghi nhớ

Element luôn gắn với block bằng `__`.

---

# Slide 7 — Modifier

Modifier là một **biến thể** hoặc **trạng thái**, viết bằng hai dấu gạch ngang `--`.

```text
block--modifier

block__element--modifier
```

---

Ví dụ

```html
<button class="card__btn card__btn--primary">
    Mua
</button>
```

---

## Ghi nhớ

Modifier mô tả sự khác biệt so với mặc định.

---

# Slide 8 — Ví dụ BEM hoàn chỉnh

```html
<div class="card">
    <img class="card__thumb">
    <h3 class="card__title">Tên sản phẩm</h3>
    <button class="card__btn card__btn--primary">
        Mua
    </button>
</div>
```

---

## Đọc tên là hiểu vai trò

```text
card              →  khối card

card__title       →  tiêu đề trong card

card__btn         →  nút trong card

card__btn--primary → nút chính
```

---

# Slide 9 — Lợi ích của BEM

- Tên "phẳng" → độ ưu tiên thấp, dễ ghi đè.
- Đọc tên là biết ngay vai trò.
- Không lo trùng tên giữa các thành phần.
- Rất phù hợp làm việc nhóm.

---

## Ghi nhớ

BEM giúp CSS trở nên có tổ chức và dễ mở rộng.

---

# Slide 10 — 9.2 Đặt tên khi Block lồng nhau

## Nguyên tắc quan trọng

Element **không nối nhiều cấp**.

✔ Đúng

```html
<h3 class="card__title"></h3>
```

❌ Sai

```html
<h3 class="card__body__title"></h3>
```

---

## Ghi nhớ

Dù element nằm sâu bao nhiêu, chỉ nối **một cấp** với block.

---

# Slide 11 — Block lồng trong Block

Một block có thể chứa block khác, nhưng mỗi block giữ **namespace riêng**.

```html
<div class="card">
    <div class="badge">
        <span class="badge__text">Mới</span>
    </div>
</div>
```

---

## Giải thích

- `card` là một block.
- `badge` là một block riêng, không phải `card__badge`.
- `badge__text` thuộc về `badge`.

---

# Slide 12 — Khi nào là Element, khi nào là Block?

| Câu hỏi | Kết quả |
|---------|---------|
| Có thể dùng độc lập ở nơi khác? | → Block |
| Chỉ có ý nghĩa bên trong block cha? | → Element |

---

Ví dụ

- `button` dùng được ở nhiều nơi → nên là **block**.
- `card__title` chỉ thuộc card → là **element**.

---

# Slide 13 — 9.3 Modifier và lỗi thường gặp

## Modifier cho trạng thái / biến thể

```text
btn--large

nav__item--active

card--featured
```

---

Ví dụ

```html
<li class="nav__item nav__item--active">
    Trang chủ
</li>
```

Mục menu đang được chọn.

---

# Slide 14 — Lỗi thường gặp với BEM

❌ Lồng element quá sâu

```html
<div class="card__body__content__title"></div>
```

---

❌ Dùng modifier đứng một mình

```html
<button class="--primary"></button>
```

Modifier **phải đi kèm** block hoặc element gốc:

```html
<button class="btn btn--primary"></button>
```

---

# Slide 15 — Nên và Không nên

## Nên

✔ Đặt tên theo vai trò.

✔ Giữ element một cấp.

✔ Modifier luôn đi kèm block/element.

---

## Không nên

❌ Lồng element nhiều cấp.

❌ Dùng modifier độc lập.

❌ Đặt tên khó hiểu như `.box2`, `.red1`.

---

# Slide 16 — Thực hành BEM

## Bài tập nhỏ

Cho đoạn HTML

```html
<div class="menu">
    <a class="menu-link active">Trang chủ</a>
</div>
```

Hãy đặt lại tên theo đúng BEM.

---

Gợi ý đáp án

```html
<div class="menu">
    <a class="menu__link menu__link--active">
        Trang chủ
    </a>
</div>
```

---

# Slide 17 — Bài tập cuối chương

## Yêu cầu

Đặt lại toàn bộ class của **card sản phẩm** theo BEM.

Cần có:

- Block: `card`.
- Các element: thumb, title, price, button...
- Một modifier: `card--featured`.

---

## Mục tiêu

Thực hành đặt tên nhất quán cho một thành phần thật.

---

# Slide 18 — Gợi ý bài tập

```html
<div class="card card--featured">
    <img class="card__thumb" src="...">
    <h3 class="card__title">Tên sản phẩm</h3>
    <p class="card__price">100.000đ</p>
    <button class="card__btn card__btn--primary">
        Mua ngay
    </button>
</div>
```

---

```css
.card { ... }
.card--featured { ... }
.card__thumb { ... }
.card__title { ... }
.card__price { ... }
.card__btn { ... }
.card__btn--primary { ... }
```

---

# Slide 19 — 9.4 Kebab-case

Kebab-case là cách viết tên gồm nhiều chữ:

- Tất cả viết **chữ thường**.
- Các chữ nối với nhau bằng dấu gạch ngang `-`.

```text
product-card

old-price

main-nav
```

---

## Vì sao gọi là "kebab"?

Các chữ xâu vào một cái que `-` như xiên thịt nướng.

---

# Slide 20 — Các kiểu đặt tên khác

```text
camelCase     →  productCard

PascalCase    →  ProductCard

snake_case    →  product_card

kebab-case    →  product-card
```

---

## Ghi nhớ

CSS/HTML dùng **kebab-case**.

Vì CSS không phân biệt hoa thường, `.productCard` và `.productcard` dễ gây nhầm lẫn.

---

# Slide 21 — Kebab-case đi cùng BEM

BEM dùng `__` và `--` để nối các cấp.

Kebab-case dùng `-` để nối các chữ **bên trong** một cấp.

```text
product-card__old-price--sale

product-card   →  block

old-price      →  element

sale           →  modifier
```

---

Ví dụ

```html
<div class="product-card">
    <h3 class="product-card__title">Áo thun</h3>
    <p class="product-card__old-price">200.000đ</p>
</div>
```

---

## Ghi nhớ

- `-` → nối chữ trong cùng một tên.
- `__` → nối block với element.
- `--` → nối với modifier.

---

# Slide 22 — Lỗi thường gặp với kebab-case

❌ Viết hoa

```css
.ProductCard { ... }
.productCard { ... }
```

---

❌ Dùng gạch dưới thay gạch ngang

```css
.product_card { ... }
```

---

❌ Viết dính liền, khó đọc

```css
.productcardoldprice { ... }
```

---

✔ Đúng

```css
.product-card__old-price { ... }
```

---

# Slide 23 — 9.5 Utility class là gì?

Utility class là class **chỉ làm đúng một việc**.

```css
.text-center { text-align: center; }
.mt-16       { margin-top: 16px; }
.hidden      { display: none; }
```

---

## Cách dùng

Ghép trực tiếp vào HTML, không cần viết CSS mới.

```html
<p class="text-center mt-16">
    Xin chào
</p>
```

---

# Slide 24 — Vì sao cần utility class?

Có những style rất nhỏ, lặp lại ở khắp nơi:

- Căn giữa chữ.
- Thêm khoảng cách trên/dưới.
- Ẩn/hiện một phần tử.

Viết riêng cho từng block là thừa.

---

## Ghi nhớ

Utility class giúp tránh viết đi viết lại vài dòng CSS giống nhau.

---

# Slide 25 — Đặt tên utility class

Tên mô tả đúng **việc nó làm**, không mô tả nơi nó được dùng.

```css
.text-center  { text-align: center; }
.text-right   { text-align: right; }

.mt-8         { margin-top: 8px; }
.mt-16        { margin-top: 16px; }
.mb-16        { margin-bottom: 16px; }

.w-full       { width: 100%; }
```

---

## Quy ước viết tắt hay gặp

```text
m  →  margin        p  →  padding

t  →  top           b  →  bottom

l  →  left          r  →  right

w  →  width         h  →  height
```

`mt-16` = margin-top: 16px.

---

# Slide 26 — BEM hay Utility?

| Tình huống | Dùng |
|------------|------|
| Style riêng của một thành phần | BEM |
| Style nhỏ, lặp lại ở nhiều nơi | Utility |
| Cần thay đổi nhiều thuộc tính cùng lúc | BEM |
| Chỉ chỉnh 1 thuộc tính | Utility |

---

Ví dụ dùng chung

```html
<div class="card mt-16">
    <h3 class="card__title text-center">
        Tên sản phẩm
    </h3>
</div>
```

BEM lo phần "là cái gì", utility lo phần "chỉnh nhẹ một chút".

---

# Slide 27 — Lỗi thường gặp với utility class

❌ Utility làm quá nhiều việc

```css
.box {
    margin-top: 16px;
    color: red;
    border: 1px solid #000;
}
```

Đây không còn là utility nữa.

---

❌ Tên gắn với nơi dùng

```css
.card-title-center { text-align: center; }
```

Đổi sang dùng chỗ khác là tên sai ngay.

---

❌ Lạm dụng utility

```html
<div class="mt-16 mb-16 ml-8 mr-8 text-center w-full ...">
```

HTML dài, khó đọc. Style thuộc về thành phần thì viết BEM.

---

# Slide 28 — Bài tập kebab-case + utility

Cho đoạn HTML

```html
<div class="ProductCard">
    <h3 class="product_card_Title" style="text-align: center">
        Áo thun
    </h3>
</div>
```

Hãy viết lại theo kebab-case + BEM, và dùng utility thay cho `style`.

---

Gợi ý đáp án

```html
<div class="product-card">
    <h3 class="product-card__title text-center">
        Áo thun
    </h3>
</div>
```

```css
.text-center { text-align: center; }
```

---

# Slide 29 — Tổng kết Chương 9

🎉 Chúc mừng!

Bạn đã hoàn thành chương thứ chín của khóa học.

---

## Kiến thức đã học

✅ BEM là gì.

✅ Block, Element, Modifier.

✅ Cách viết `__` và `--`.

✅ Đặt tên khi block lồng nhau.

✅ Element một cấp.

✅ Các lỗi thường gặp.

✅ Kebab-case: chữ thường, nối bằng `-`.

✅ Utility class: mỗi class một việc.

✅ Khi nào dùng BEM, khi nào dùng utility.

---

## Sau chương này

Bạn đã biết cách đặt tên class chuyên nghiệp, dễ bảo trì.

Ở chương cuối cùng, chúng ta sẽ ghép **tất cả kiến thức** để hoàn thiện một dự án thực tế: một Landing Page hoàn chỉnh.