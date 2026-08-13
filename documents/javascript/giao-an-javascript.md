# GIÁO ÁN JAVASCRIPT 
# CHƯƠNG 1 — Cú pháp cơ bản JavaScript

**Mục tiêu:** Chạy được JS, khai báo biến đúng, dùng toán tử/điều kiện/vòng lặp/hàm.
**Thời lượng:** 2 buổi

### 1.1 JavaScript là gì & cách chạy
- JS làm trang web *tương tác* (HTML=nội dung, CSS=trình bày, JS=hành vi).
- Nhúng: `<script src="app.js"></script>` trước `</body>`; `console.log()` để in ra Console (Dev tools).

### 1.2 Biến: `let`, `const`, (và vì sao tránh `var`)
```js
const PI = 3.14;   // không đổi giá trị
let count = 0;     // đổi được
count = count + 1;
```
- 💡 Mặc định dùng `const`, chỉ dùng `let` khi cần gán lại. `var` gần như không dùng nữa.

### 1.3 Kiểu dữ liệu nguyên thủy & `typeof`
- `string`, `number`, `boolean`, `null`, `undefined`. Kiểm tra bằng `typeof x`.

### 1.4 Toán tử
- Số học `+ - * / % **`; gán `= += -=`; so sánh `=== !== > <`.
- 💡 **Luôn dùng `===`** (so sánh cả kiểu) thay vì `==` để tránh ép kiểu ngầm.
- Logic `&& || !`.

### 1.5 Điều kiện
```js
if (score >= 80) {
  grade = "A";
} else if (score >= 50) {
  grade = "B";
} else {
  grade = "F";
}
```
- Toán tử 3 ngôi: `const label = isActive ? "Bật" : "Tắt";`
- `switch` (giới thiệu ngắn).

### 1.6 Vòng lặp
- `for`, `while`, và `for...of` (duyệt mảng — dùng nhiều nhất).
```js
for (const item of ["a", "b", "c"]) console.log(item);
```

### 1.7 Hàm
```js
function add(a, b) { return a + b; }
const multiply = (a, b) => a * b;   // arrow function (dùng nhiều ở ES6)
```
- Tham số mặc định: `function greet(name = "bạn") {}`.

> 🎯 **Bài tập ch.1:** Viết hàm phân loại điểm (A/B/C/F), hàm kiểm tra số chẵn/lẻ, dùng vòng lặp in bảng cửu chương.

---

# CHƯƠNG 2 — Kiểu dữ liệu: String, Number, Array, Object

**Mục tiêu:** Thao tác thành thạo 4 kiểu dữ liệu dùng hằng ngày.
**Thời lượng:** 2 buổi

### 2.1 String
- Nối chuỗi & **template literal** (backtick):
```js
const name = "Long";
const msg = `Xin chào ${name}, hôm nay là ${new Date().getFullYear()}`;
```
- Method hay dùng: `.length`, `.toUpperCase()`, `.trim()`, `.includes()`, `.slice()`, `.split()`, `.replace()`.

### 2.2 Number
- `Number("12")`, `parseInt`, `parseFloat`, `.toFixed(2)`, `Math.round/floor/ceil/random`.
- 💡 Cảnh báo `0.1 + 0.2 !== 0.3` (số thực) — dùng `.toFixed` khi hiển thị tiền.

### 2.3 Array (mảng)
```js
const fruits = ["táo", "cam"];
fruits.push("xoài");     // thêm cuối
fruits[0];               // truy cập theo index
fruits.length;
```
- Method cơ bản: `push/pop/shift/unshift`, `indexOf`, `includes`, `slice`, `splice`, `join`.

### 2.4 Object (đối tượng)
```js
const user = { id: 1, name: "Long", active: true };
user.name;            // "Long"
user["active"];       // true
user.email = "a@b.c"; // thêm thuộc tính
```
- Duyệt: `Object.keys(user)`, `Object.values(user)`, `Object.entries(user)`.
- Mảng của object (dạng dữ liệu API hay trả về):
```js
const users = [{ id: 1, name: "A" }, { id: 2, name: "B" }];
```

> 🎯 **Bài tập ch.2:** Cho mảng sản phẩm (mỗi phần tử là object `{ ten, gia }`), in ra danh sách và tính tổng giá.

---

# CHƯƠNG 3 — Array methods + ES6+

**Mục tiêu:** Xử lý danh sách bằng method hiện đại và dùng cú pháp ES6 gọn gàng.
**Thời lượng:** 2 buổi

### 3.1 Callback là gì
- Hàm truyền vào hàm khác — nền tảng để hiểu các method dưới đây.

### 3.2 Bộ method quan trọng nhất
```js
const nums = [1, 2, 3, 4];

nums.forEach(n => console.log(n));      // duyệt, không trả về
nums.map(n => n * 2);                   // [2,4,6,8] — biến đổi
nums.filter(n => n % 2 === 0);          // [2,4] — lọc
nums.find(n => n > 2);                  // 3 — phần tử đầu thỏa
nums.reduce((sum, n) => sum + n, 0);    // 10 — gộp về 1 giá trị
nums.some(n => n > 3);                  // true
nums.every(n => n > 0);                 // true
```
- 💡 Trọng tâm: `map` (render danh sách), `filter` (lọc), `reduce` (tính tổng/gom nhóm).

### 3.3 ES6+ cần biết
- **Destructuring:**
```js
const { name, email } = user;
const [first, second] = fruits;
```
- **Spread / rest:** `const clone = { ...user }`, `const all = [...a, ...b]`.
- **Template literal** (đã học ch.2), **arrow function** (ch.1).
- **Optional chaining & nullish:** `user?.address?.city`, `const n = value ?? "mặc định"`.
- **Module import/export**
```js
export function formatPrice(x) { /* ... */ }
import { formatPrice } from "./utils";
```

> 🎯 **Bài tập ch.3:** Từ mảng đơn hàng, dùng `filter` lấy đơn đã thanh toán, `map` lấy danh sách tên, `reduce` tính tổng doanh thu.

---

# CHƯƠNG 4 — DOM & Events

**Mục tiêu:** Chọn, sửa phần tử HTML và phản hồi tương tác người dùng.
**Thời lượng:** 2 buổi

### 4.1 DOM là gì
- Trình duyệt biến HTML thành cây đối tượng; JS thao tác cây đó để thay đổi giao diện *không cần tải lại trang*.

### 4.2 Chọn phần tử
```js
document.querySelector(".btn");        // 1 phần tử đầu tiên
document.querySelectorAll(".item");    // NodeList (duyệt bằng forEach)
document.getElementById("app");
```

### 4.3 Đọc / sửa nội dung & thuộc tính
```js
el.textContent = "Xin chào";
el.innerHTML = "<b>đậm</b>";
el.classList.add("active");
el.classList.toggle("open");
el.setAttribute("disabled", "");
el.dataset.id;                         // đọc data-id="..."
```

### 4.4 Tạo & chèn phần tử
```js
const li = document.createElement("li");
li.textContent = "Mục mới";
list.appendChild(li);
```
- 💡 Render danh sách: kết hợp `map` + `innerHTML` hoặc `createElement`.

### 4.5 Sự kiện (Events)
```js
button.addEventListener("click", (event) => {
  event.preventDefault();      // chặn hành vi mặc định (vd: submit form)
  console.log("Đã bấm!");
});
```
- Sự kiện hay dùng: `click`, `input`, `change`, `submit`, `keyup`.
- Giới thiệu ngắn **event delegation** (gắn 1 listener ở cha để xử lý nhiều con).

> 🎯 **Bài tập ch.4:** Todo list thuần JS — nhập việc → bấm thêm → hiện ra danh sách, bấm vào việc để đánh dấu hoàn thành (toggle class).

---

# CHƯƠNG 5 — Bất đồng bộ: JSON, Promise, Fetch API

**Mục tiêu:** Lấy dữ liệu từ server và xử lý kết quả trả về.
**Thời lượng:** 2 buổi

### 5.1 JSON
- Định dạng trao đổi dữ liệu giữa JS và server (giống object nhưng key phải có nháy kép).
```js
const text = JSON.stringify({ name: "Long" }); // object → chuỗi (gửi đi)
const obj  = JSON.parse('{"name":"Long"}');     // chuỗi → object (nhận về)
```

### 5.2 Bất đồng bộ & Promise
- Vì sao cần: gọi server mất thời gian, không được "đứng hình" trang.
- Promise = lời hứa có kết quả sau này: `.then()` / `.catch()`.

### 5.3 Fetch API
```js
fetch("/api/products")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

### 5.4 async / await (cách viết gọn, nên dùng)
```js
async function loadProducts() {
  try {
    const res = await fetch("/api/products");
    const products = await res.json();
    render(products);
  } catch (err) {
    console.error("Lỗi tải:", err);
  }
}
```
> 🎯 **Bài tập ch.5:** Gọi 1 API công khai (vd danh sách user giả), `await` lấy dữ liệu, `map` render ra danh sách trên trang, có xử lý lỗi.

---

# CHƯƠNG 6 — Thực hành: Form Validation

**Mục tiêu:** Ghép toàn bộ kiến thức để validate form phía client — kỹ năng dùng trực tiếp trong Rails.
**Thời lượng:** 2 buổi

### 6.1 Bắt sự kiện submit
```js
form.addEventListener("submit", (e) => {
  if (!isValid()) e.preventDefault();  // chặn gửi nếu sai
});
```

### 6.2 Đọc & kiểm tra giá trị input
- Lấy `input.value.trim()`; kiểm tra rỗng, độ dài, định dạng.
- Email bằng regex đơn giản, mật khẩu tối thiểu ký tự, xác nhận mật khẩu khớp.

### 6.3 Hiển thị lỗi cho người dùng
- Thêm/xóa class lỗi (`classList`), chèn thông báo bằng `textContent` cạnh input.
- Kiểm tra realtime bằng sự kiện `input`.

### 6.4 Kết hợp HTML5 constraint validation
- Dùng `required`, `type="email"`, `minlength`; đọc `input.validity` để lấy trạng thái.

### 6.5 Dự án tổng hợp — Form đăng ký
- Các trường: họ tên, email, mật khẩu, xác nhận mật khẩu, đồng ý điều khoản.
- Yêu cầu: validate realtime, hiện lỗi rõ ràng, chỉ cho submit khi hợp lệ, hiển thị "Đăng ký thành công".
- Áp dụng: DOM (ch.4), events (ch.4), string/regex (ch.2), array method để gom lỗi (ch.3).

> 🎯 **Đồ án cuối khóa:** Hoàn thiện form đăng ký có validation đầy đủ; (mở rộng) gửi dữ liệu bằng `fetch` tới 1 endpoint và hiển thị phản hồi.

---