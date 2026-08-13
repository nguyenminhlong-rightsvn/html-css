# CHƯƠNG 5 — Bất đồng bộ: JSON, Promise, Fetch API

---

# Slide 1 — Chương 5: JSON, Promise, Fetch API

## Mục tiêu chương học

Sau khi hoàn thành chương này, bạn sẽ có thể:

- Hiểu JSON và chuyển đổi qua lại với object.
- Hiểu vì sao cần lập trình bất đồng bộ.
- Hiểu Promise và ba trạng thái của nó.
- Gọi API bằng `fetch`.
- Viết gọn bằng `async` / `await`.
- Xử lý lỗi bằng `try` / `catch`.
- Hiển thị trạng thái đang tải và trạng thái lỗi.

---

## Kết quả đạt được

Đến cuối chương, bạn sẽ tự viết được một trang:

- Gọi API công khai lấy danh sách user.
- `map` render danh sách ra giao diện.
- Hiện "Đang tải..." và báo lỗi khi thất bại.

**Thời lượng:** 2 buổi

---

# Slide 2 — Dữ liệu đến từ đâu?

Cho tới giờ, dữ liệu đều được viết cứng trong code.

```js
const products = [
  { ten: "Áo thun", gia: 150000 }
];
```

Thực tế, dữ liệu nằm ở **server** và phải lấy về.

---

## Ghi nhớ

Chương này học cách **lấy dữ liệu từ server** và hiển thị lên trang.

---

# Slide 3 — 5.1 JSON là gì?

JSON = **J**ava**S**cript **O**bject **N**otation.

Đây là định dạng chuẩn để trao đổi dữ liệu giữa JS và server.

```json
{
  "id": 1,
  "name": "Long",
  "active": true
}
```

---

## Trông giống object nhưng khác

JSON là **chuỗi văn bản**, không phải object.

---

# Slide 4 — Quy tắc của JSON

```json
{
  "name": "Long",
  "age": 25,
  "tags": ["a", "b"],
  "address": { "city": "Hà Nội" }
}
```

- Key **bắt buộc** có nháy kép.
- Chuỗi dùng nháy kép, không dùng nháy đơn.
- Không có comment, không có hàm.
- Không được có dấu phẩy thừa ở cuối.

---

## So sánh với object JS

```js
const obj = { name: "Long" };      // JS object - key không cần nháy
```

```json
{ "name": "Long" }
```

---

# Slide 5 — JSON.stringify

Chuyển **object → chuỗi JSON** để gửi đi.

```js
const user = { name: "Long", age: 25 };

const text = JSON.stringify(user);
// '{"name":"Long","age":25}'

typeof text;    // "string"
```

---

## In cho dễ đọc

```js
JSON.stringify(user, null, 2);
```

```json
{
  "name": "Long",
  "age": 25
}
```

---

# Slide 6 — JSON.parse

Chuyển **chuỗi JSON → object** để dùng trong JS.

```js
const text = '{"name":"Long","age":25}';

const obj = JSON.parse(text);

obj.name;    // "Long"
obj.age;     // 25
```

---

## Ghi nhớ

```text
stringify  →  gửi đi (object thành chuỗi)

parse      →  nhận về (chuỗi thành object)
```

---

# Slide 7 — 5.2 Vì sao cần bất đồng bộ?

Gọi server mất thời gian — có thể vài trăm mili giây, có thể vài giây.

Nếu JavaScript đứng chờ, cả trang sẽ **đứng hình**:

- Không bấm được nút.
- Không cuộn được.
- Không gõ được.

---

## Ghi nhớ

Bất đồng bộ = "cứ làm việc khác đi, có kết quả tôi báo".

---

# Slide 8 — Đồng bộ vs Bất đồng bộ

```js
console.log("1");
console.log("2");
console.log("3");
// 1 2 3  - chạy tuần tự
```

```js
console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");
// 1 3 2  - "2" chạy sau
```

---

## Ghi nhớ

Code bất đồng bộ **không chạy theo thứ tự viết**.

Đây là điểm khó nhất khi mới học.

---

# Slide 9 — Lỗi kinh điển của người mới

```js
let data;

fetch("/api/products")
  .then(res => res.json())
  .then(json => { data = json; });

console.log(data);    // undefined !!
```

`console.log` chạy **trước khi** dữ liệu về.

---

## Cách sửa

Mọi xử lý phải nằm **bên trong** phần nhận kết quả.

---

# Slide 10 — 5.3 Promise là gì?

Promise = **lời hứa** sẽ có kết quả trong tương lai.

Ẩn dụ: đặt món ở quán ăn.

```text
Đặt món     →  nhận phiếu chờ (Promise)

Món xong    →  fulfilled (thành công)

Hết nguyên liệu  →  rejected (thất bại)
```

---

# Slide 11 — Ba trạng thái của Promise

| Trạng thái | Ý nghĩa |
|-----------|---------|
| `pending` | Đang chờ, chưa có kết quả |
| `fulfilled` | Thành công, có dữ liệu |
| `rejected` | Thất bại, có lỗi |

---

## Ghi nhớ

Promise chỉ chuyển trạng thái **một lần** rồi cố định.

---

# Slide 12 — then và catch

```js
somePromise
  .then(data => {
    console.log("Thành công:", data);
  })
  .catch(err => {
    console.error("Thất bại:", err);
  });
```

---

## Cấu trúc

```text
.then()    →  chạy khi thành công

.catch()   →  chạy khi có lỗi

.finally() →  chạy dù thành công hay thất bại
```

---

# Slide 13 — 5.4 Fetch API

`fetch` là hàm có sẵn của trình duyệt để gọi server.

```js
fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

---

## Vì sao có hai then?

```text
then thứ 1  →  res.json()  chuyển phản hồi thành object

then thứ 2  →  data        dữ liệu đã sẵn sàng dùng
```

`res.json()` cũng trả về một Promise, nên cần thêm một `.then`.

---

# Slide 14 — Đối tượng Response

```js
fetch(url).then(res => {
  res.ok;        // true nếu status 200-299
  res.status;    // 200, 404, 500...
  res.json();    // đọc body thành object
});
```

---

## Bẫy quan trọng

`fetch` **không** ném lỗi khi server trả 404 hay 500.

```js
// ✔ phải tự kiểm tra
if (!res.ok) {
  throw new Error(`Lỗi ${res.status}`);
}
```

`.catch()` chỉ bắt lỗi mạng (mất kết nối, sai domain).

---

# Slide 15 — Tổng kết phần 1

Trong phần này chúng ta đã học:

✅ JSON và `stringify` / `parse`.

✅ Vì sao cần bất đồng bộ.

✅ Promise và ba trạng thái.

✅ `.then()` / `.catch()`.

✅ `fetch` và đối tượng Response.

Ở phần tiếp theo, chúng ta sẽ học cách viết gọn hơn bằng **async / await**.

---

# Slide 16 — 5.5 async / await

Cách viết mới cho Promise, đọc như code đồng bộ.

```js
async function loadUsers() {
  const res = await fetch(url);
  const users = await res.json();
  console.log(users);
}
```

---

## Hai từ khóa

```text
async  →  đánh dấu hàm này là bất đồng bộ

await  →  chờ Promise xong rồi lấy kết quả
```

`await` chỉ dùng được **bên trong** hàm `async`.

---

# Slide 17 — So sánh then và await

**Dùng `.then()`**

```js
fetch(url)
  .then(res => res.json())
  .then(data => render(data))
  .catch(err => console.error(err));
```

---

**Dùng `async / await`**

```js
async function load() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    render(data);
  } catch (err) {
    console.error(err);
  }
}
```

---

## Ghi nhớ

Hai cách làm cùng một việc. Thực tế **nên dùng `async / await`** vì dễ đọc hơn.

---

# Slide 18 — try / catch

Bắt lỗi trong code bất đồng bộ.

```js
try {
  // code có thể lỗi
} catch (err) {
  // xử lý khi lỗi
} finally {
  // luôn chạy
}
```

---

## Ghi nhớ

Với `async / await`, `try / catch` thay cho `.catch()`.

Không có `try / catch` → lỗi mạng làm cả hàm im lặng chết.

---

# Slide 19 — Hàm gọi API hoàn chỉnh

```js
async function loadProducts() {
  try {
    const res = await fetch("/api/products");

    if (!res.ok) {
      throw new Error(`Lỗi ${res.status}`);
    }

    const products = await res.json();
    render(products);
  } catch (err) {
    console.error("Lỗi tải:", err);
  }
}
```

---

## Ghi nhớ

Đây là mẫu chuẩn. Ghi nhớ và dùng lại ở mọi dự án.

---

# Slide 20 — Ghép với DOM ở Chương 4

```js
const list = document.querySelector("#user-list");

async function loadUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  list.innerHTML = users
    .map(u => `<li>${u.name} — ${u.email}</li>`)
    .join("");
}

loadUsers();
```

---

## Ghi nhớ

```text
fetch  →  lấy dữ liệu

map    →  biến thành HTML  (Chương 3)

innerHTML  →  đưa lên trang  (Chương 4)
```

Ba chương ghép lại thành một luồng hoàn chỉnh.

---

# Slide 21 — Trạng thái đang tải

Người dùng cần biết trang đang làm gì.

```js
async function loadUsers() {
  list.innerHTML = "<li>Đang tải...</li>";

  try {
    const res = await fetch(url);
    const users = await res.json();
    list.innerHTML = users.map(u => `<li>${u.name}</li>`).join("");
  } catch (err) {
    list.innerHTML = "<li>Không tải được dữ liệu</li>";
  }
}
```

---

## Ghi nhớ

Một màn hình gọi API tốt luôn có **ba trạng thái**:

```text
đang tải  →  có dữ liệu  →  lỗi
```

---

# Slide 22 — Trường hợp danh sách rỗng

```js
if (users.length === 0) {
  list.innerHTML = "<li>Chưa có dữ liệu</li>";
  return;
}
```

---

## Ghi nhớ

Bốn trạng thái cần xử lý:

```text
loading  →  empty  →  success  →  error
```

Quên `empty` là lỗi rất hay gặp.

---

# Slide 23 — Gửi dữ liệu lên server

`fetch` mặc định là GET. Muốn gửi dữ liệu thì cấu hình thêm.

```js
await fetch("/api/users", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Long" })
});
```

---

## Ghi nhớ

`body` phải là **chuỗi** → dùng `JSON.stringify`.

Đây là lúc kiến thức JSON ở đầu chương được dùng đến.

---

# Slide 24 — Gọi nhiều API cùng lúc

Gọi tuần tự — chậm:

```js
const a = await fetch(url1);   // chờ xong
const b = await fetch(url2);   // rồi mới gọi
```

---

Gọi song song — nhanh hơn:

```js
const [resA, resB] = await Promise.all([
  fetch(url1),
  fetch(url2)
]);
```

---

## Ghi nhớ

Các request **không phụ thuộc nhau** → dùng `Promise.all`.

---

# Slide 25 — API công khai để luyện tập

```text
https://jsonplaceholder.typicode.com/users

https://jsonplaceholder.typicode.com/posts

https://fakestoreapi.com/products
```

Các API này miễn phí, không cần đăng ký, dùng để học rất tiện.

---

## Cách khám phá dữ liệu

Mở URL trực tiếp trên trình duyệt để xem cấu trúc JSON trước khi code.

---

# Slide 26 — Thực hành

## Bài tập nhỏ

Gọi API sau và in ra Console tên của user đầu tiên.

```text
https://jsonplaceholder.typicode.com/users
```

---

Gợi ý đáp án

```js
async function test() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  console.log(users[0].name);
}

test();
```

---

# Slide 27 — Bài tập cuối chương

## Yêu cầu

Dựng một trang hiển thị danh sách user lấy từ API.

1. Gọi `https://jsonplaceholder.typicode.com/users`.
2. Dùng `await` lấy dữ liệu.
3. Dùng `map` render danh sách ra trang.
4. Có xử lý lỗi.

---

## Yêu cầu kỹ thuật

- Dùng `async / await` và `try / catch`.
- Kiểm tra `res.ok`.
- Hiện "Đang tải..." trước khi có dữ liệu.
- Hiện thông báo khi lỗi.

---

# Slide 28 — Gợi ý cấu trúc

```html
<h1>Danh sách người dùng</h1>
<ul id="user-list"></ul>

<script src="app.js"></script>
```

```css
.user-list__item {
  padding: 12px;
  border-bottom: 1px solid #eee;
}
```

---

# Slide 29 — Gợi ý code

```js
const list = document.querySelector("#user-list");
const API = "https://jsonplaceholder.typicode.com/users";

async function loadUsers() {
  list.innerHTML = "<li>Đang tải...</li>";

  try {
    const res = await fetch(API);
    if (!res.ok) throw new Error(`Lỗi ${res.status}`);

    const users = await res.json();

    if (users.length === 0) {
      list.innerHTML = "<li>Chưa có dữ liệu</li>";
      return;
    }

    list.innerHTML = users
      .map(u => `
        <li class="user-list__item">
          <strong>${u.name}</strong><br>
          ${u.email}
        </li>
      `)
      .join("");
  } catch (err) {
    list.innerHTML = `<li>Không tải được: ${err.message}</li>`;
  }
}

loadUsers();
```

---

# Slide 30 — Tổng kết Chương 5

🎉 Chúc mừng!

Bạn đã hoàn thành chương thứ năm của khóa học.

---

## Kiến thức đã học

✅ JSON và `stringify` / `parse`.

✅ Vì sao cần bất đồng bộ.

✅ Promise và ba trạng thái.

✅ `.then()` / `.catch()`.

✅ `fetch`, `res.ok`, `res.json()`.

✅ `async` / `await` và `try` / `catch`.

✅ Bốn trạng thái giao diện: loading / empty / success / error.

✅ Gửi dữ liệu bằng POST, `Promise.all`.

---

## Sau chương này

Bạn đã lấy được dữ liệu thật từ server và hiển thị lên trang.

Ở chương cuối cùng, chúng ta sẽ ghép **tất cả kiến thức** để làm một dự án thực tế: **Form Validation**.
