# CHƯƠNG 4 — DOM & Events

---

# Slide 1 — Chương 4: DOM & Events

## Mục tiêu chương học

Sau khi hoàn thành chương này, bạn sẽ có thể:

- Hiểu DOM là gì và vì sao cần nó.
- Chọn phần tử bằng `querySelector`.
- Đọc và sửa nội dung, thuộc tính, class.
- Tạo và chèn phần tử mới vào trang.
- Render một danh sách từ mảng dữ liệu.
- Bắt sự kiện người dùng bằng `addEventListener`.
- Hiểu event delegation.

---

## Kết quả đạt được

Đến cuối chương, bạn sẽ tự dựng được một **Todo list thuần JavaScript**:

- Nhập việc → bấm nút → hiện ra danh sách.
- Bấm vào việc → đánh dấu hoàn thành.
- Xóa việc khỏi danh sách.

**Thời lượng:** 2 buổi

---

# Slide 2 — Vấn đề

Đến giờ, mọi thứ ta viết chỉ hiện trong Console.

```js
console.log("Xin chào");
```

Người dùng không nhìn thấy Console.

Chương này học cách đưa kết quả **ra trang web thật**.

---

# Slide 3 — 4.1 DOM là gì?

Khi trình duyệt đọc file HTML, nó biến HTML thành một **cây đối tượng** trong bộ nhớ.

Cây đó gọi là **DOM** — Document Object Model.

---

```html
<body>
  <h1>Tiêu đề</h1>
  <ul>
    <li>Mục 1</li>
  </ul>
</body>
```

```text
body
├── h1
└── ul
    └── li
```

---

# Slide 4 — JavaScript thao tác trên cây đó

JS không sửa file HTML. JS sửa **cây DOM** trong bộ nhớ.

Trình duyệt thấy cây đổi → vẽ lại giao diện ngay.

---

## Ghi nhớ

Nhờ DOM, trang web thay đổi được **mà không cần tải lại**.

Đây chính là điều làm nên web hiện đại.

---

# Slide 5 — Đối tượng document

`document` là điểm bắt đầu để truy cập DOM.

```js
document.title;      // tiêu đề trang
document.body;       // thẻ body
```

Mọi thao tác DOM đều bắt đầu từ `document`.

---

# Slide 6 — 4.2 querySelector

Chọn **một** phần tử đầu tiên khớp với selector CSS.

```js
document.querySelector(".btn");      // class
document.querySelector("#app");      // id
document.querySelector("h1");        // thẻ
document.querySelector(".card .title");   // lồng nhau
```

---

## Ghi nhớ

Cú pháp giống hệt selector trong CSS.

Đã biết CSS là dùng được ngay.

---

# Slide 7 — querySelectorAll

Chọn **tất cả** phần tử khớp, trả về một NodeList.

```js
const items = document.querySelectorAll(".item");

items.length;    // số phần tử
items[0];        // phần tử đầu
```

---

## Duyệt NodeList

```js
items.forEach(item => {
  console.log(item.textContent);
});
```

---

## Ghi nhớ

NodeList **không phải mảng thật**, nhưng dùng được `forEach`.

Cần `map` / `filter` → chuyển sang mảng: `[...items]`.

---

# Slide 8 — Các cách chọn khác

```js
document.getElementById("app");          // theo id, không cần #
document.getElementsByClassName("item"); // theo class
document.getElementsByTagName("li");     // theo thẻ
```

---

## Nên dùng cái nào?

`querySelector` và `querySelectorAll` là đủ cho mọi trường hợp.

Các hàm còn lại chỉ cần biết khi đọc code cũ.

---

# Slide 9 — Khi không tìm thấy phần tử

```js
const el = document.querySelector(".khong-ton-tai");

console.log(el);            // null
el.textContent = "abc";     // ❌ lỗi: Cannot set property of null
```

---

## Nguyên nhân thường gặp

1. Sai tên class / id.
2. Script chạy trước khi HTML được đọc xong.

---

## Cách phòng tránh

Đặt `<script>` ngay trước `</body>` — như đã học ở Chương 1.

---

# Slide 10 — 4.3 Đọc và sửa nội dung

```js
const title = document.querySelector("h1");

title.textContent;              // đọc nội dung chữ
title.textContent = "Xin chào"; // ghi nội dung chữ
```

---

## textContent vs innerHTML

```js
el.textContent = "<b>đậm</b>";   // hiện đúng chữ "<b>đậm</b>"
el.innerHTML   = "<b>đậm</b>";   // hiện chữ ĐẬM
```

---

## Ghi nhớ

Mặc định dùng `textContent`.

Chỉ dùng `innerHTML` khi thật sự cần chèn thẻ HTML.

---

# Slide 11 — Cảnh báo về innerHTML

Nếu chèn nội dung do **người dùng nhập** bằng `innerHTML`, kẻ xấu có thể chèn mã độc.

```js
// ❌ nguy hiểm
list.innerHTML = userInput;

// ✔ an toàn
li.textContent = userInput;
```

---

## Ghi nhớ

Dữ liệu người dùng → luôn dùng `textContent`.

---

# Slide 12 — Làm việc với class

```js
el.classList.add("active");        // thêm class
el.classList.remove("active");     // xóa class
el.classList.toggle("open");       // có thì xóa, không thì thêm
el.classList.contains("active");   // true / false
```

---

## Ghi nhớ

**Không** đổi style trực tiếp bằng JS:

```js
el.style.color = "red";            // ❌ hạn chế dùng
el.classList.add("text-error");    // ✔ style vẫn nằm trong CSS
```

CSS lo giao diện, JS lo bật/tắt class.

---

# Slide 13 — Thuộc tính (attribute)

```js
img.src = "anh.jpg";
link.href = "https://...";
input.value = "";
button.disabled = true;
```

---

Cách tổng quát

```js
el.setAttribute("disabled", "");
el.getAttribute("href");
el.removeAttribute("disabled");
```

---

# Slide 14 — dataset

Đọc các thuộc tính `data-*` trong HTML.

```html
<button data-id="12" data-role="delete">Xóa</button>
```

```js
btn.dataset.id;      // "12"
btn.dataset.role;    // "delete"
```

---

## Ghi nhớ

`data-*` là cách chuẩn để gắn dữ liệu vào phần tử HTML.

Rất hay dùng khi cần biết "người dùng vừa bấm vào item nào".

---

# Slide 15 — Tổng kết phần 1

Trong phần này chúng ta đã học:

✅ DOM là gì.

✅ `querySelector` và `querySelectorAll`.

✅ `textContent` và `innerHTML`.

✅ `classList` để bật/tắt class.

✅ Thuộc tính và `dataset`.

Ở phần tiếp theo, chúng ta sẽ **tạo phần tử mới** và bắt **sự kiện** người dùng.

---

# Slide 16 — 4.4 Tạo phần tử mới

Ba bước: tạo → gán nội dung → chèn vào trang.

```js
const li = document.createElement("li");   // 1. tạo
li.textContent = "Mục mới";                // 2. gán nội dung
list.appendChild(li);                      // 3. chèn vào
```

---

## Ghi nhớ

Phần tử vừa `createElement` chưa nằm trên trang.

Phải `appendChild` thì mới hiển thị.

---

# Slide 17 — Các cách chèn phần tử

```js
parent.appendChild(el);        // thêm vào CUỐI
parent.prepend(el);            // thêm vào ĐẦU
parent.append(el1, el2);       // thêm nhiều cùng lúc

el.remove();                   // xóa chính nó
parent.innerHTML = "";         // xóa toàn bộ con
```

---

# Slide 18 — Hai cách render danh sách

**Cách 1 — map + innerHTML** (ngắn gọn)

```js
list.innerHTML = products
  .map(p => `<li>${p.ten}</li>`)
  .join("");
```

---

**Cách 2 — createElement** (an toàn hơn)

```js
products.forEach(p => {
  const li = document.createElement("li");
  li.textContent = p.ten;
  list.appendChild(li);
});
```

---

## Chọn cách nào?

```text
Dữ liệu cố định, cần HTML phức tạp  →  cách 1

Dữ liệu do người dùng nhập          →  cách 2
```

---

# Slide 19 — Ví dụ render danh sách sản phẩm

```html
<ul id="product-list"></ul>
```

```js
const products = [
  { ten: "Áo thun", gia: 150000 },
  { ten: "Quần jean", gia: 350000 }
];

const list = document.querySelector("#product-list");

list.innerHTML = products
  .map(p => `<li>${p.ten} - ${p.gia.toLocaleString()}đ</li>`)
  .join("");
```

---

## Ghi nhớ

Đây là công thức chuẩn: **dữ liệu → map → HTML → gắn vào trang**.

Bạn sẽ dùng lại nó ở mọi dự án.

---

# Slide 20 — 4.5 Sự kiện là gì?

Sự kiện là những gì người dùng làm với trang:

- Bấm chuột.
- Gõ bàn phím.
- Gửi form.
- Cuộn trang.

JavaScript "lắng nghe" các sự kiện đó và phản ứng.

---

# Slide 21 — addEventListener

```js
const button = document.querySelector(".btn");

button.addEventListener("click", () => {
  console.log("Đã bấm!");
});
```

---

## Cấu trúc

```text
phần_tử.addEventListener( "tên_sự_kiện", hàm_xử_lý )
```

Hàm xử lý chính là một **callback** — đã học ở Chương 3.

---

# Slide 22 — Các sự kiện hay dùng

| Sự kiện | Xảy ra khi |
|---------|-----------|
| `click` | Bấm chuột |
| `input` | Gõ vào ô nhập (mỗi ký tự) |
| `change` | Giá trị đổi và rời khỏi ô |
| `submit` | Gửi form |
| `keyup` | Nhả phím |

---

## input vs change

```text
input   →  chạy ngay khi gõ từng ký tự (kiểm tra realtime)

change  →  chỉ chạy khi gõ xong và click ra ngoài
```

---

# Slide 23 — Đối tượng event

Hàm xử lý nhận được một tham số chứa thông tin sự kiện.

```js
button.addEventListener("click", (event) => {
  console.log(event.target);     // phần tử vừa bị bấm
  console.log(event.type);       // "click"
});
```

---

## event.target

Là phần tử **thực sự** nhận sự kiện.

Rất quan trọng khi làm event delegation ở slide sau.

---

# Slide 24 — preventDefault

Chặn hành vi mặc định của trình duyệt.

```js
form.addEventListener("submit", (event) => {
  event.preventDefault();    // không tải lại trang
  console.log("Xử lý bằng JS");
});
```

---

## Khi nào cần?

- Form: chặn tải lại trang.
- Thẻ `<a>`: chặn chuyển trang.

---

## Ghi nhớ

Quên `preventDefault()` → form gửi đi và trang tải lại, mọi xử lý JS mất hết.

---

# Slide 25 — Đọc giá trị từ input

```html
<input id="task-input" type="text">
<button id="add-btn">Thêm</button>
```

```js
const input = document.querySelector("#task-input");
const btn = document.querySelector("#add-btn");

btn.addEventListener("click", () => {
  const value = input.value.trim();
  if (value === "") return;      // bỏ qua nếu rỗng

  console.log(value);
  input.value = "";              // xóa ô nhập
});
```

---

## Ghi nhớ

`input.value` luôn là **chuỗi**, kể cả `type="number"`.

Luôn `.trim()` trước khi kiểm tra rỗng.

---

# Slide 26 — Vấn đề với phần tử tạo động

```js
document.querySelectorAll(".item").forEach(item => {
  item.addEventListener("click", () => { /* ... */ });
});
```

Gắn listener xong, sau đó thêm item mới → **item mới không có listener**.

---

## Vì sao?

`querySelectorAll` chỉ chọn những phần tử **đang tồn tại lúc đó**.

---

# Slide 27 — Event delegation

Giải pháp: gắn **một** listener ở phần tử **cha**.

```js
list.addEventListener("click", (event) => {
  if (event.target.matches(".item")) {
    event.target.classList.toggle("done");
  }
});
```

---

## Vì sao hoạt động?

Sự kiện click "nổi bọt" từ con lên cha.

Cha bắt được, rồi kiểm tra `event.target` xem con nào vừa bị bấm.

---

## Ghi nhớ

Danh sách thêm/xóa động → **luôn dùng event delegation**.

---

# Slide 28 — Delegation với nhiều loại nút

```js
list.addEventListener("click", (event) => {
  const btn = event.target;

  if (btn.dataset.action === "delete") {
    btn.closest("li").remove();
  }

  if (btn.dataset.action === "done") {
    btn.closest("li").classList.toggle("done");
  }
});
```

---

## closest

`el.closest("li")` tìm tổ tiên gần nhất khớp selector.

Dùng để đi từ nút bấm → về đúng dòng chứa nó.

---

# Slide 29 — Thực hành DOM

## Bài tập nhỏ

Có sẵn HTML:

```html
<button id="toggle">Đổi màu</button>
<p id="text">Xin chào</p>
```

Bấm nút → chữ đổi màu (bật/tắt class `highlight`).

---

Gợi ý đáp án

```css
.highlight { color: red; }
```

```js
const btn = document.querySelector("#toggle");
const text = document.querySelector("#text");

btn.addEventListener("click", () => {
  text.classList.toggle("highlight");
});
```

---

# Slide 30 — Bài tập cuối chương

## Yêu cầu — Todo list thuần JS

1. Ô input + nút "Thêm".
2. Bấm thêm → việc mới hiện trong danh sách.
3. Bấm vào việc → gạch ngang (đánh dấu hoàn thành).
4. Có nút xóa từng việc.

---

## Yêu cầu kỹ thuật

- Không cho thêm việc rỗng.
- Xóa ô input sau khi thêm.
- Dùng **event delegation** cho việc toggle và xóa.
- Style trạng thái hoàn thành bằng class, không dùng `el.style`.

---

# Slide 31 — Gợi ý cấu trúc HTML

```html
<div class="todo">
  <input id="todo-input" type="text" placeholder="Nhập việc...">
  <button id="todo-add">Thêm</button>

  <ul id="todo-list"></ul>
</div>
```

```css
.todo__item--done {
  text-decoration: line-through;
  opacity: .5;
}
```

Đặt tên class theo BEM — như đã học ở Chương 9 HTML/CSS.

---

# Slide 32 — Gợi ý code

```js
const input = document.querySelector("#todo-input");
const addBtn = document.querySelector("#todo-add");
const list = document.querySelector("#todo-list");

addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (text === "") return;

  const li = document.createElement("li");
  li.className = "todo__item";
  li.textContent = text;

  const del = document.createElement("button");
  del.textContent = "Xóa";
  del.dataset.action = "delete";
  li.appendChild(del);

  list.appendChild(li);
  input.value = "";
});
```

---

Phần delegation

```js
list.addEventListener("click", (event) => {
  const item = event.target.closest(".todo__item");
  if (!item) return;

  if (event.target.dataset.action === "delete") {
    item.remove();
  } else {
    item.classList.toggle("todo__item--done");
  }
});
```

---

# Slide 33 — Tổng kết Chương 4

🎉 Chúc mừng!

Bạn đã hoàn thành chương thứ tư của khóa học.

---

## Kiến thức đã học

✅ DOM là gì.

✅ `querySelector` / `querySelectorAll`.

✅ `textContent`, `innerHTML` và cảnh báo bảo mật.

✅ `classList`, thuộc tính, `dataset`.

✅ `createElement`, `appendChild`, `remove`.

✅ Render danh sách bằng `map` + `innerHTML`.

✅ `addEventListener` và các sự kiện thông dụng.

✅ `preventDefault`, `event.target`, `closest`.

✅ Event delegation.

---

## Sau chương này

Bạn đã điều khiển được giao diện bằng JavaScript.

Ở chương tiếp theo, chúng ta sẽ lấy dữ liệu **từ server** bằng **JSON, Promise và Fetch API**.
