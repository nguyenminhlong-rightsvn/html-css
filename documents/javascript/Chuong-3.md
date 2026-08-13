# CHƯƠNG 3 — Array methods + ES6+

---

# Slide 1 — Chương 3: Array methods + ES6+

## Mục tiêu chương học

Sau khi hoàn thành chương này, bạn sẽ có thể:

- Hiểu callback là gì.
- Dùng `forEach`, `map`, `filter`, `find`, `reduce`.
- Phân biệt khi nào dùng method nào.
- Dùng destructuring để lấy dữ liệu gọn gàng.
- Dùng spread / rest để sao chép và gộp.
- Xử lý dữ liệu thiếu bằng `?.` và `??`.
- Chia code thành module bằng `import` / `export`.

---

## Kết quả đạt được

Đến cuối chương, bạn sẽ xử lý được một mảng đơn hàng:

- `filter` lấy đơn đã thanh toán.
- `map` lấy danh sách tên khách.
- `reduce` tính tổng doanh thu.

**Thời lượng:** 2 buổi

---

# Slide 2 — Vì sao cần array methods?

Ở chương 2, ta duyệt mảng bằng vòng lặp.

```js
const doubled = [];

for (const n of nums) {
  doubled.push(n * 2);
}
```

Code này dài, và ý định "nhân đôi mọi phần tử" bị chôn trong vòng lặp.

---

## Cách viết hiện đại

```js
const doubled = nums.map(n => n * 2);
```

Một dòng, đọc là hiểu ngay.

---

# Slide 3 — 3.1 Callback là gì?

Callback là một **hàm được truyền vào hàm khác**.

```js
function chao(ten) {
  console.log(`Xin chào ${ten}`);
}

function xuLy(callback) {
  callback("Long");        // gọi hàm được truyền vào
}

xuLy(chao);   // "Xin chào Long"
```

---

## Ghi nhớ

Trong JavaScript, **hàm cũng là một giá trị** — truyền đi được như số hay chuỗi.

Đây là nền tảng của toàn bộ chương này.

---

# Slide 4 — Callback viết tại chỗ

Thường ta không đặt tên, mà viết luôn arrow function.

```js
nums.forEach(function (n) {
  console.log(n);
});

// viết gọn bằng arrow function
nums.forEach(n => console.log(n));
```

---

## Cách đọc

```text
nums.forEach( n => console.log(n) )
              │                │
       mỗi phần tử      làm gì với nó
```

---

# Slide 5 — 3.2 forEach

Duyệt qua từng phần tử, **không trả về gì**.

```js
const nums = [1, 2, 3, 4];

nums.forEach(n => console.log(n));
// 1
// 2
// 3
// 4
```

---

## Tham số đầy đủ

```js
nums.forEach((value, index) => {
  console.log(`${index}: ${value}`);
});
```

---

## Ghi nhớ

`forEach` chỉ để **làm gì đó** với từng phần tử.

Cần kết quả trả về → dùng `map`.

---

# Slide 6 — map — biến đổi mảng

`map` tạo ra một **mảng mới** cùng số phần tử.

```js
const nums = [1, 2, 3, 4];

nums.map(n => n * 2);      // [2, 4, 6, 8]
```

Mảng gốc `nums` không đổi.

---

## Ứng dụng thực tế

```js
const users = [
  { id: 1, name: "A" },
  { id: 2, name: "B" }
];

users.map(u => u.name);    // ["A", "B"]
```

---

# Slide 7 — map để render danh sách

Đây là cách dùng quan trọng nhất của `map`.

```js
const html = products
  .map(p => `<li>${p.ten} - ${p.gia}đ</li>`)
  .join("");

console.log(html);
// <li>Áo - 150000đ</li><li>Quần - 350000đ</li>
```

---

## Ghi nhớ

`map` biến mảng dữ liệu → mảng HTML.

`join("")` gộp lại thành một chuỗi để gắn vào trang.

Chương 4 sẽ dùng đúng công thức này.

---

# Slide 8 — filter — lọc mảng

`filter` giữ lại các phần tử **thỏa điều kiện**.

```js
const nums = [1, 2, 3, 4];

nums.filter(n => n % 2 === 0);    // [2, 4]
```

Callback trả về `true` → giữ lại. `false` → loại bỏ.

---

## Ứng dụng

```js
const orders = [
  { id: 1, paid: true },
  { id: 2, paid: false },
  { id: 3, paid: true }
];

orders.filter(o => o.paid);    // 2 đơn đã thanh toán
```

---

# Slide 9 — map và filter khác nhau

| | Trả về | Số phần tử |
|---|--------|-----------|
| `map` | Mảng đã **biến đổi** | Giữ nguyên |
| `filter` | Mảng đã **lọc** | Ít hơn hoặc bằng |

---

Ví dụ so sánh

```js
const nums = [1, 2, 3, 4];

nums.map(n => n > 2);       // [false, false, true, true]  ← sai ý định
nums.filter(n => n > 2);    // [3, 4]                      ← đúng
```

---

# Slide 10 — find — tìm một phần tử

Trả về **phần tử đầu tiên** thỏa điều kiện.

```js
const nums = [1, 2, 3, 4];

nums.find(n => n > 2);     // 3   ← một giá trị, không phải mảng
```

Không tìm thấy → trả về `undefined`.

---

## Ứng dụng

```js
const user = users.find(u => u.id === 2);

if (user) {
  console.log(user.name);
}
```

---

## Ghi nhớ

```text
filter  →  trả về MẢNG các phần tử khớp

find    →  trả về MỘT phần tử đầu tiên khớp
```

---

# Slide 11 — some và every

Trả về `true` hoặc `false`.

```js
const nums = [1, 2, 3, 4];

nums.some(n => n > 3);     // true  - có ÍT NHẤT MỘT phần tử > 3
nums.every(n => n > 0);    // true  - TẤT CẢ đều > 0
nums.every(n => n > 2);    // false - có phần tử không thỏa
```

---

## Ứng dụng

```js
// Form hợp lệ khi mọi trường đều hợp lệ
const isValid = fields.every(f => f.valid);
```

Chương 6 sẽ dùng lại đúng mẫu này.

---

# Slide 12 — reduce — gộp về một giá trị

`reduce` gộp cả mảng thành **một** kết quả.

```js
const nums = [1, 2, 3, 4];

nums.reduce((sum, n) => sum + n, 0);    // 10
```

---

## Hai tham số

```text
(sum, n) => sum + n    →  cách gộp

0                      →  giá trị khởi đầu
```

---

# Slide 13 — reduce chạy như thế nào?

```js
[1, 2, 3, 4].reduce((sum, n) => sum + n, 0);
```

```text
vòng 1:  sum = 0,  n = 1  →  1
vòng 2:  sum = 1,  n = 2  →  3
vòng 3:  sum = 3,  n = 3  →  6
vòng 4:  sum = 6,  n = 4  →  10
```

Kết quả cuối: `10`.

---

# Slide 14 — reduce trong thực tế

Tính tổng tiền đơn hàng:

```js
const total = products.reduce((sum, p) => sum + p.gia, 0);
```

Đếm số lượng theo nhóm:

```js
const count = orders.reduce((acc, o) => {
  acc[o.status] = (acc[o.status] || 0) + 1;
  return acc;
}, {});
// { paid: 2, pending: 1 }
```

---

## Ghi nhớ

`reduce` mạnh nhưng khó đọc. Chỉ dùng khi thật sự cần gộp.

Tính tổng là trường hợp dùng nhiều nhất.

---

# Slide 15 — Bảng tra cứu array methods

| Method | Trả về | Dùng khi |
|--------|--------|----------|
| `forEach` | không có | Làm gì đó với từng phần tử |
| `map` | Mảng mới cùng độ dài | Biến đổi dữ liệu |
| `filter` | Mảng đã lọc | Lấy các phần tử thỏa điều kiện |
| `find` | Một phần tử | Tìm đúng một cái |
| `some` | boolean | Có ít nhất một? |
| `every` | boolean | Tất cả đều? |
| `reduce` | Một giá trị bất kỳ | Gộp lại (tổng, gom nhóm) |

---

# Slide 16 — Nối chuỗi các method

Các method trả về mảng nên nối tiếp nhau được.

```js
const total = orders
  .filter(o => o.paid)            // lọc đơn đã trả
  .map(o => o.amount)             // lấy số tiền
  .reduce((sum, x) => sum + x, 0); // cộng lại
```

---

## Ghi nhớ

Đọc từ trên xuống là hiểu được toàn bộ luồng xử lý.

Đây là lý do array methods được ưa dùng hơn vòng lặp.

---

# Slide 17 — Tổng kết phần 1

Trong phần này chúng ta đã học:

✅ Callback là gì.

✅ `forEach`, `map`, `filter`, `find`.

✅ `some`, `every`.

✅ `reduce` và cách nó hoạt động.

✅ Nối chuỗi các method.

Ở phần tiếp theo, chúng ta sẽ học các cú pháp **ES6+** giúp code ngắn gọn hơn.

---

# Slide 18 — 3.3 ES6+ là gì?

ES6 (2015) là bản nâng cấp lớn của JavaScript.

Các bản sau đó bổ sung thêm nhiều cú pháp tiện lợi.

---

## Những thứ đã học từ ES6

- Template literal (Chương 2).
- Arrow function (Chương 1).
- `let` / `const` (Chương 1).

Phần này học tiếp những cú pháp còn lại.

---

# Slide 19 — Destructuring với object

Lấy nhiều thuộc tính ra biến chỉ trong một dòng.

```js
const user = { name: "Long", email: "a@b.c", age: 25 };

// cách cũ
const name = user.name;
const email = user.email;

// destructuring
const { name, email } = user;
```

---

## Đổi tên biến

```js
const { name: userName } = user;
console.log(userName);   // "Long"
```

---

# Slide 20 — Destructuring với mảng

Lấy theo **vị trí**, không theo tên.

```js
const fruits = ["táo", "cam", "xoài"];

const [first, second] = fruits;
// first  = "táo"
// second = "cam"
```

---

## Bỏ qua phần tử

```js
const [, , third] = fruits;
console.log(third);   // "xoài"
```

---

# Slide 21 — Destructuring trong tham số hàm

Rất hay gặp khi làm việc với object.

```js
// cách thường
function showUser(user) {
  console.log(user.name, user.email);
}

// destructuring ngay ở tham số
function showUser({ name, email }) {
  console.log(name, email);
}
```

---

## Giá trị mặc định

```js
function showUser({ name, role = "user" }) {
  console.log(name, role);
}
```

---

# Slide 22 — Spread với object

Dấu `...` "trải" nội dung của object ra.

```js
const user = { id: 1, name: "Long" };

const clone = { ...user };                  // sao chép
const updated = { ...user, name: "Nam" };   // sao chép và sửa
// { id: 1, name: "Nam" }
```

---

## Ghi nhớ

Thuộc tính viết sau sẽ **ghi đè** thuộc tính viết trước.

Đây là cách cập nhật object mà không sửa bản gốc.

---

# Slide 23 — Spread với mảng

```js
const a = [1, 2];
const b = [3, 4];

const all = [...a, ...b];      // [1, 2, 3, 4]
const copy = [...a];           // [1, 2] - bản sao độc lập
const added = [...a, 5];       // [1, 2, 5]
```

---

## Vì sao cần bản sao?

```js
const a = [1, 2];
const b = a;         // ❌ cùng trỏ tới một mảng
b.push(3);
console.log(a);      // [1, 2, 3]  ← a cũng đổi!

const c = [...a];    // ✔ bản sao thật sự
```

---

# Slide 24 — Rest — gom phần còn lại

Cũng dùng `...` nhưng ngược lại: **gom** thay vì trải.

```js
const [first, ...rest] = [1, 2, 3, 4];
// first = 1
// rest  = [2, 3, 4]
```

```js
const { id, ...others } = { id: 1, name: "Long", age: 25 };
// id     = 1
// others = { name: "Long", age: 25 }
```

---

## Phân biệt

```text
Bên PHẢI dấu =  →  spread (trải ra)

Bên TRÁI dấu =  →  rest (gom lại)
```

---

# Slide 25 — Optional chaining `?.`

Truy cập thuộc tính lồng nhau mà không sợ lỗi.

```js
const user = { name: "Long" };

user.address.city;      // ❌ lỗi: address là undefined
user?.address?.city;    // ✔ undefined, không lỗi
```

---

## Ghi nhớ

`?.` gặp `undefined` hoặc `null` thì dừng lại và trả về `undefined`.

Rất hữu ích khi dữ liệu từ API có thể thiếu trường.

---

# Slide 26 — Nullish coalescing `??`

Dùng giá trị mặc định khi biến là `null` hoặc `undefined`.

```js
const n = value ?? "mặc định";
```

---

## Khác gì với `||`?

```js
const count = 0;

count || 10;     // 10  ← sai! 0 là giá trị hợp lệ
count ?? 10;     // 0   ← đúng
```

`||` coi `0`, `""`, `false` là "rỗng". `??` chỉ quan tâm `null` / `undefined`.

---

## Ghi nhớ

Với số và chuỗi, **luôn ưu tiên `??`**.

---

# Slide 27 — Kết hợp `?.` và `??`

Mẫu code rất hay gặp khi xử lý dữ liệu API:

```js
const city = user?.address?.city ?? "Chưa cập nhật";
```

```text
Có address và city  →  lấy city

Thiếu bất kỳ đâu    →  "Chưa cập nhật"
```

---

# Slide 28 — 3.4 Module — chia nhỏ code

Khi file JS dài ra, ta tách thành nhiều file.

`utils.js`

```js
export function formatPrice(x) {
  return x.toLocaleString() + "đ";
}

export const TAX = 0.1;
```

---

`app.js`

```js
import { formatPrice, TAX } from "./utils.js";

console.log(formatPrice(150000));   // "150.000đ"
```

---

# Slide 29 — export default

Mỗi file có thể có **một** export mặc định.

`api.js`

```js
export default function fetchData() { /* ... */ }
```

```js
import fetchData from "./api.js";   // không cần {}
```

---

## Phân biệt

```text
export         →  import { ten }     - cần đúng tên

export default →  import batKyTen    - đặt tên tùy ý
```

---

# Slide 30 — Nhúng module vào HTML

Muốn dùng `import` / `export`, phải khai báo `type="module"`.

```html
<script type="module" src="app.js"></script>
```

---

## Lưu ý

- File phải chạy qua Live Server, không mở trực tiếp bằng `file://`.
- Đường dẫn import phải có đuôi `.js`.

---

# Slide 31 — Thực hành array methods

## Bài tập nhỏ

Cho mảng số, hãy lấy các số chẵn rồi nhân đôi.

```js
const nums = [1, 2, 3, 4, 5, 6];
// kết quả mong muốn: [4, 8, 12]
```

---

Gợi ý đáp án

```js
const result = nums
  .filter(n => n % 2 === 0)
  .map(n => n * 2);

console.log(result);   // [4, 8, 12]
```

---

# Slide 32 — Bài tập cuối chương

## Yêu cầu

Cho mảng đơn hàng:

```js
const orders = [
  { id: 1, khach: "An",  tien: 200000, daTra: true },
  { id: 2, khach: "Bình", tien: 350000, daTra: false },
  { id: 3, khach: "Chi",  tien: 150000, daTra: true }
];
```

1. Dùng `filter` lấy các đơn đã thanh toán.
2. Dùng `map` lấy danh sách tên khách.
3. Dùng `reduce` tính tổng doanh thu (chỉ đơn đã trả).

---

## Yêu cầu kỹ thuật

- Dùng arrow function.
- Nối chuỗi các method ở câu 3.
- Hiển thị tổng tiền bằng `toLocaleString()`.

---

# Slide 33 — Gợi ý bài tập

```js
// 1. Đơn đã thanh toán
const paid = orders.filter(o => o.daTra);

// 2. Danh sách tên khách
const names = orders.map(o => o.khach);
console.log(names.join(", "));   // "An, Bình, Chi"

// 3. Tổng doanh thu
const revenue = orders
  .filter(o => o.daTra)
  .reduce((sum, o) => sum + o.tien, 0);

console.log(`Doanh thu: ${revenue.toLocaleString()}đ`);
// "Doanh thu: 350.000đ"
```

---

# Slide 34 — Tổng kết Chương 3

🎉 Chúc mừng!

Bạn đã hoàn thành chương thứ ba của khóa học.

---

## Kiến thức đã học

✅ Callback và cách truyền hàm.

✅ `forEach`, `map`, `filter`, `find`, `some`, `every`, `reduce`.

✅ Nối chuỗi các array method.

✅ Destructuring object và mảng.

✅ Spread và rest.

✅ `?.` và `??`.

✅ Module `import` / `export`.

---

## Sau chương này

Bạn đã xử lý được dữ liệu bằng cú pháp hiện đại.

Ở chương tiếp theo, chúng ta sẽ đưa dữ liệu đó **lên giao diện** bằng **DOM và Events**.
