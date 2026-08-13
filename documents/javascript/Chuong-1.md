# CHƯƠNG 1 — Cú pháp cơ bản JavaScript

---

# Slide 1 — Chương 1: Cú pháp cơ bản JavaScript

## Mục tiêu chương học

Sau khi hoàn thành chương này, bạn sẽ có thể:

- Hiểu JavaScript là gì và vai trò của nó trong một website.
- Nhúng và chạy được file JavaScript đầu tiên.
- Dùng `console.log()` để kiểm tra kết quả.
- Khai báo biến đúng cách với `let` và `const`.
- Phân biệt các kiểu dữ liệu nguyên thủy.
- Sử dụng toán tử số học, so sánh và logic.
- Viết câu lệnh điều kiện và vòng lặp.
- Viết hàm và gọi hàm.

---

## Kết quả đạt được

Đến cuối chương, bạn sẽ tự viết được:

- Hàm phân loại điểm số (A/B/C/F).
- Hàm kiểm tra số chẵn/lẻ.
- Vòng lặp in bảng cửu chương.

**Thời lượng:** 2 buổi

---

# Slide 2 — Website được tạo bởi ba thứ

| Thành phần | Vai trò | Ví dụ |
|------------|---------|-------|
| HTML | Nội dung | Tiêu đề, ảnh, nút |
| CSS | Trình bày | Màu sắc, bố cục |
| JavaScript | Hành vi | Bấm nút thì làm gì |

---

## Ẩn dụ quen thuộc

```text
HTML  →  bộ xương

CSS   →  quần áo

JS    →  cơ bắp (làm cho cử động được)
```

---

# Slide 3 — 1.1 JavaScript làm được gì?

Không có JavaScript, trang web chỉ là một tờ giấy.

Có JavaScript, trang web biết phản ứng:

- Bấm nút → hiện popup.
- Gõ vào ô input → hiện lỗi ngay.
- Cuộn xuống → tải thêm nội dung.
- Chọn sản phẩm → cập nhật giỏ hàng.

---

## Ghi nhớ

JavaScript làm trang web **tương tác** được với người dùng.

---

# Slide 4 — Cách nhúng JavaScript

Viết code vào một file riêng, ví dụ `app.js`.

Sau đó nhúng vào HTML:

```html
<body>
  <h1>Xin chào</h1>

  <script src="app.js"></script>
</body>
```

---

## Vì sao đặt trước thẻ đóng `</body>`?

Để trình duyệt đọc xong toàn bộ HTML rồi mới chạy JS.

Nếu đặt ở `<head>`, JS chạy khi HTML chưa có gì → tìm không thấy phần tử.

---

## Ghi nhớ

Quy tắc an toàn: đặt `<script>` ngay trước `</body>`.

---

# Slide 5 — console.log và Dev tools

`console.log()` in giá trị ra tab **Console** của Dev tools.

```js
console.log("Xin chào JavaScript!");
console.log(1 + 2);
```

---

## Cách xem kết quả

1. Mở trang bằng Live Server.
2. Nhấn `F12` để mở Dev tools.
3. Chọn tab **Console**.

---

## Ghi nhớ

`console.log()` là công cụ kiểm tra quan trọng nhất khi mới học.

Không chắc giá trị là gì? → in nó ra.

---

# Slide 6 — Vài quy tắc cú pháp

```js
let ten = "Long";        // kết thúc câu lệnh bằng ;

// đây là comment một dòng

/*
  comment nhiều dòng
*/
```

---

## Lưu ý quan trọng

JavaScript **phân biệt chữ hoa và chữ thường**.

```js
let ten = "Long";
console.log(Ten);   // ❌ lỗi: Ten khác ten
```

---

# Slide 7 — 1.2 Biến là gì?

Biến là một cái **hộp có tên** dùng để chứa dữ liệu.

```js
let diem = 8;
```

```text
diem  →  [ 8 ]
```

Khi cần dùng lại giá trị, ta gọi tên biến.

---

## Vì sao cần biến?

Để giá trị có tên gọi rõ ràng và có thể dùng lại nhiều nơi.

---

# Slide 8 — let và const

```js
const PI = 3.14;    // không đổi giá trị được
let count = 0;      // đổi được

count = count + 1;  // ✔ hợp lệ
PI = 3.15;          // ❌ lỗi
```

---

## Quy tắc thực tế

- Mặc định dùng `const`.
- Chỉ dùng `let` khi thật sự cần gán lại.

Vì sao? Code an toàn hơn — đọc thấy `const` là biết giá trị không đổi.

---

# Slide 9 — Vì sao tránh var?

`var` là cách khai báo cũ, có nhiều hành vi khó lường.

```js
var x = 1;
var x = 2;   // khai báo lại vẫn được — dễ ghi đè nhầm
```

```js
let y = 1;
let y = 2;   // ❌ báo lỗi ngay — an toàn hơn
```

---

## Ghi nhớ

Code hiện đại gần như không dùng `var` nữa.

Chỉ cần biết nó tồn tại khi đọc code cũ.

---

# Slide 10 — Đặt tên biến

✔ Nên

```js
let userName = "Long";
let totalPrice = 100000;
let isActive = true;
```

❌ Không nên

```js
let a = "Long";
let x1 = 100000;
```

---

## Quy ước

- JavaScript dùng **camelCase**: `totalPrice`, `userName`.
- Tên mô tả đúng nội dung bên trong.
- Biến `boolean` thường bắt đầu bằng `is`, `has`, `can`.

---

# Slide 11 — 1.3 Kiểu dữ liệu nguyên thủy

```js
let ten = "Long";        // string  - chuỗi
let tuoi = 25;           // number  - số
let daKichHoat = true;   // boolean - đúng/sai
let diaChi = null;       // null    - cố ý để trống
let email;               // undefined - chưa gán gì
```

---

## Ghi nhớ

Năm kiểu này là nền tảng, xuất hiện ở mọi đoạn code.

---

# Slide 12 — typeof

Dùng `typeof` để kiểm tra kiểu của một giá trị.

```js
typeof "Long";   // "string"
typeof 25;       // "number"
typeof true;     // "boolean"
typeof undefined // "undefined"
```

---

## Một điểm kỳ lạ

```js
typeof null;     // "object"  ← sai, nhưng đây là lỗi lịch sử của JS
```

Chỉ cần biết để không bị bất ngờ.

---

# Slide 13 — null và undefined khác nhau thế nào?

| | Ý nghĩa |
|---|---------|
| `undefined` | Chưa được gán giá trị |
| `null` | **Cố ý** gán là "không có gì" |

---

Ví dụ

```js
let email;              // undefined - quên chưa gán
let avatar = null;      // null - biết là user chưa có avatar
```

---

# Slide 14 — 1.4 Toán tử số học

```js
10 + 3    // 13   cộng
10 - 3    // 7    trừ
10 * 3    // 30   nhân
10 / 3    // 3.333...  chia
10 % 3    // 1    chia lấy DƯ
10 ** 3   // 1000 lũy thừa
```

---

## Toán tử % rất hay dùng

```js
6 % 2   // 0  → chia hết cho 2 → số chẵn
7 % 2   // 1  → dư 1 → số lẻ
```

Đây chính là cách kiểm tra chẵn/lẻ.

---

# Slide 15 — Toán tử gán

```js
let x = 10;

x += 5;   // x = x + 5  → 15
x -= 3;   // x = x - 3  → 12
x *= 2;   // x = x * 2  → 24
x /= 4;   // x = x / 4  → 6
```

---

Tăng/giảm 1 đơn vị

```js
x++;   // tăng 1
x--;   // giảm 1
```

---

# Slide 16 — Toán tử so sánh

Kết quả luôn là `true` hoặc `false`.

```js
5 > 3     // true
5 < 3     // false
5 >= 5    // true
5 <= 4    // false

5 === 5   // true   bằng
5 !== 3   // true   khác
```

---

## Ghi nhớ

Toán tử so sánh cho ra `boolean` — dùng làm điều kiện cho `if`.

---

# Slide 17 — Luôn dùng === thay vì ==

`==` so sánh **lỏng** — tự ép kiểu, dễ sai.

```js
5 == "5"    // true   ← số 5 bằng chuỗi "5"?!
0 == false  // true
```

---

`===` so sánh **chặt** — so cả giá trị và kiểu.

```js
5 === "5"     // false  ← đúng như mong đợi
0 === false   // false
5 === 5       // true
```

---

## Ghi nhớ

**Luôn dùng `===` và `!==`.**

Đây là quy tắc số một của người mới học JS.

---

# Slide 18 — Toán tử logic

```js
&&   // AND - và    → cả hai đúng mới đúng
||   // OR  - hoặc  → một cái đúng là đúng
!    // NOT - phủ định
```

---

Ví dụ

```js
const tuoi = 20;
const coCMND = true;

tuoi >= 18 && coCMND    // true  - đủ cả hai
tuoi >= 18 || coCMND    // true  - chỉ cần một
!coCMND                 // false - đảo ngược
```

---

# Slide 19 — Bảng logic

| A | B | A && B | A \|\| B |
|---|---|--------|----------|
| true | true | true | true |
| true | false | false | true |
| false | true | false | true |
| false | false | false | false |

---

## Ghi nhớ

- `&&` khó tính — đòi hỏi tất cả.
- `||` dễ tính — chỉ cần một.

---

# Slide 20 — Tổng kết phần 1

Trong phần này chúng ta đã học:

✅ JavaScript là gì và cách nhúng.

✅ `console.log()` và Dev tools.

✅ Biến với `let`, `const`.

✅ Năm kiểu dữ liệu nguyên thủy.

✅ Toán tử số học, gán, so sánh, logic.

Ở phần tiếp theo, chúng ta sẽ dùng những toán tử này để **ra quyết định** trong code.

---

# Slide 21 — 1.5 Câu lệnh điều kiện if

`if` cho phép code chạy theo nhánh khác nhau tùy tình huống.

```js
const diem = 85;

if (diem >= 80) {
  console.log("Giỏi");
}
```

Chỉ khi điều kiện trong `()` là `true` thì khối `{}` mới chạy.

---

# Slide 22 — if / else

```js
const tuoi = 16;

if (tuoi >= 18) {
  console.log("Đủ tuổi");
} else {
  console.log("Chưa đủ tuổi");
}
```

```text
điều kiện đúng  →  chạy khối if

điều kiện sai   →  chạy khối else
```

---

# Slide 23 — if / else if / else

Khi có nhiều hơn hai nhánh:

```js
let grade;

if (score >= 80) {
  grade = "A";
} else if (score >= 50) {
  grade = "B";
} else {
  grade = "F";
}
```

---

## Ghi nhớ

JavaScript kiểm tra **từ trên xuống**, gặp điều kiện đúng đầu tiên là dừng.

Vì vậy thứ tự các nhánh rất quan trọng.

---

# Slide 24 — Lỗi thứ tự điều kiện

❌ Sai

```js
if (score >= 50) {
  grade = "B";
} else if (score >= 80) {
  grade = "A";     // không bao giờ chạy tới
}
```

Điểm 90 đã khớp `>= 50` ở nhánh đầu → luôn ra "B".

---

✔ Đúng

Xếp điều kiện **chặt nhất lên trước**.

```js
if (score >= 80) { grade = "A"; }
else if (score >= 50) { grade = "B"; }
```

---

# Slide 25 — Toán tử 3 ngôi (ternary)

Cách viết gọn cho `if / else` đơn giản.

```js
const label = isActive ? "Bật" : "Tắt";
```

Tương đương với:

```js
let label;
if (isActive) {
  label = "Bật";
} else {
  label = "Tắt";
}
```

---

## Cú pháp

```text
điều kiện ? giá_trị_nếu_đúng : giá_trị_nếu_sai
```

Chỉ dùng khi ngắn gọn. Logic phức tạp thì viết `if` cho dễ đọc.

---

# Slide 26 — switch

Khi so sánh **một biến** với nhiều giá trị cố định.

```js
switch (day) {
  case "mon":
    console.log("Thứ hai");
    break;
  case "tue":
    console.log("Thứ ba");
    break;
  default:
    console.log("Không rõ");
}
```

---

## Lưu ý

- Thiếu `break` → chạy tràn xuống case dưới.
- `default` là trường hợp còn lại.

Thực tế `if / else if` được dùng nhiều hơn.

---

# Slide 27 — 1.6 Vòng lặp for

Lặp lại một khối lệnh nhiều lần.

```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
// in ra 1 2 3 4 5
```

---

## Ba phần trong ngoặc

```text
let i = 1   →  khởi tạo (chạy 1 lần)

i <= 5      →  điều kiện (kiểm tra mỗi vòng)

i++         →  bước nhảy (sau mỗi vòng)
```

---

# Slide 28 — Vòng lặp while

Lặp khi **chưa biết trước** số lần.

```js
let count = 0;

while (count < 3) {
  console.log(count);
  count++;      // ⚠ bắt buộc, nếu không sẽ lặp vô tận
}
```

---

## Ghi nhớ

`while` phải có gì đó làm điều kiện sai đi.

Quên bước này → trình duyệt treo.

---

# Slide 29 — for...of (dùng nhiều nhất)

Duyệt qua từng phần tử của mảng, không cần quan tâm chỉ số.

```js
for (const item of ["a", "b", "c"]) {
  console.log(item);
}
// a
// b
// c
```

---

## So sánh

```js
// for thường - phải tự quản lý i
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for...of - gọn và ít lỗi hơn
for (const item of arr) {
  console.log(item);
}
```

---

# Slide 30 — Chọn vòng lặp nào?

| Tình huống | Dùng |
|------------|------|
| Biết trước số lần lặp | `for` |
| Duyệt từng phần tử mảng | `for...of` |
| Lặp đến khi thỏa điều kiện | `while` |

---

# Slide 31 — 1.7 Hàm là gì?

Hàm là một **khối code có tên**, gọi lại được nhiều lần.

```js
function add(a, b) {
  return a + b;
}

add(2, 3);    // 5
add(10, 7);   // 17
```

---

## Vì sao cần hàm?

- Viết một lần, dùng nhiều nơi.
- Sửa một chỗ, tất cả cùng đổi.
- Đặt tên cho một đoạn logic → code dễ đọc.

---

# Slide 32 — Tham số và return

```js
function add(a, b) {
  return a + b;
}
```

```text
a, b        →  tham số (đầu vào)

return a+b  →  giá trị trả về (đầu ra)
```

---

## Lưu ý về return

`return` kết thúc hàm ngay lập tức.

```js
function check(n) {
  if (n < 0) return "Số âm";
  return "Số dương";       // không chạy nếu n < 0
}
```

Hàm không có `return` → trả về `undefined`.

---

# Slide 33 — Arrow function

Cách viết ngắn gọn của ES6, dùng rất nhiều.

```js
const multiply = (a, b) => a * b;
```

Tương đương:

```js
function multiply(a, b) {
  return a * b;
}
```

---

## Các dạng viết

```js
const double = n => n * 2;         // 1 tham số: bỏ được ()

const greet = () => "Xin chào";    // không tham số: giữ ()

const sum = (a, b) => {            // nhiều dòng: cần {} và return
  const total = a + b;
  return total;
};
```

---

## Ghi nhớ

Thân hàm một dòng → tự động `return`, không cần viết.

---

# Slide 34 — Tham số mặc định

```js
function greet(name = "bạn") {
  return `Xin chào ${name}`;
}

greet("Long");   // "Xin chào Long"
greet();         // "Xin chào bạn"
```

Khi không truyền tham số, giá trị mặc định được dùng.

---

# Slide 35 — Thực hành hàm

## Bài tập nhỏ

Viết hàm kiểm tra số chẵn/lẻ.

```js
function isEven(n) {
  // viết code ở đây
}

isEven(4);   // true
isEven(7);   // false
```

---

Gợi ý đáp án

```js
function isEven(n) {
  return n % 2 === 0;
}
```

Chia dư 2 bằng 0 → số chẵn.

---

# Slide 36 — Bài tập cuối chương

## Yêu cầu

Viết ba bài trong cùng một file `app.js`:

1. Hàm phân loại điểm `getGrade(score)` trả về A / B / C / F.
2. Hàm `isEven(n)` kiểm tra số chẵn/lẻ.
3. Dùng vòng lặp in bảng cửu chương.

---

## Yêu cầu kỹ thuật

- Dùng `const` / `let` đúng chỗ.
- Dùng `===` khi so sánh.
- Kiểm tra kết quả bằng `console.log()`.

---

# Slide 37 — Gợi ý bài tập

Phân loại điểm

```js
function getGrade(score) {
  if (score >= 80) return "A";
  if (score >= 65) return "B";
  if (score >= 50) return "C";
  return "F";
}

console.log(getGrade(90));   // A
console.log(getGrade(40));   // F
```

---

Bảng cửu chương

```js
const n = 7;

for (let i = 1; i <= 10; i++) {
  console.log(`${n} x ${i} = ${n * i}`);
}
```

---

# Slide 38 — Tổng kết Chương 1

🎉 Chúc mừng!

Bạn đã hoàn thành chương đầu tiên của khóa học JavaScript.

---

## Kiến thức đã học

✅ Vai trò của JavaScript và cách nhúng.

✅ `console.log()` và Dev tools.

✅ `let`, `const` và vì sao tránh `var`.

✅ Các kiểu dữ liệu nguyên thủy, `typeof`.

✅ Toán tử số học, so sánh, logic, và `===`.

✅ `if / else if / else`, ternary, `switch`.

✅ `for`, `while`, `for...of`.

✅ Hàm, tham số, `return`, arrow function.

---

## Sau chương này

Bạn đã viết được logic cơ bản bằng JavaScript.

Ở chương tiếp theo, chúng ta sẽ học bốn kiểu dữ liệu dùng hằng ngày: **String, Number, Array và Object**.
