# CHƯƠNG 6 — Thực hành: Form Validation

---

# Slide 1 — Chương 6: Form Validation

## Mục tiêu chương học

Sau khi hoàn thành chương này, bạn sẽ có thể:

- Bắt sự kiện `submit` và chặn gửi form khi dữ liệu sai.
- Đọc và kiểm tra giá trị từ ô input.
- Kiểm tra email bằng regex đơn giản.
- Hiển thị thông báo lỗi rõ ràng cho người dùng.
- Kiểm tra realtime khi người dùng đang gõ.
- Kết hợp với HTML5 constraint validation.

---

## Kết quả đạt được

Đến cuối chương, bạn sẽ hoàn thiện một **Form đăng ký** đầy đủ:

- Họ tên, email, mật khẩu, xác nhận mật khẩu, đồng ý điều khoản.
- Validate realtime, hiện lỗi rõ ràng.
- Chỉ cho submit khi hợp lệ.

**Thời lượng:** 2 buổi

---

# Slide 2 — Vì sao cần validate ở phía client?

| | Lợi ích |
|---|---------|
| Người dùng | Biết sai ngay, không phải chờ tải lại trang |
| Server | Bớt request rác |
| Trải nghiệm | Form mượt, chuyên nghiệp |

---

## Cảnh báo quan trọng

Validate phía client **không phải bảo mật**.

Kẻ xấu bỏ qua JS được. Server **luôn phải** validate lại.

Đây là kiến thức bạn sẽ dùng lại khi học Rails.

---

# Slide 3 — Chương này ghép mọi thứ đã học

```text
Chương 1  →  if / else, hàm

Chương 2  →  string, method chuỗi

Chương 3  →  array method để gom lỗi

Chương 4  →  DOM, events, classList

Chương 5  →  fetch để gửi form
```

Đây là dự án tổng hợp cuối khóa.

---

# Slide 4 — 6.1 Cấu trúc một form HTML

```html
<form id="register-form">
  <label for="name">Họ tên</label>
  <input id="name" name="name" type="text">
  <span class="form__error" data-error="name"></span>

  <button type="submit">Đăng ký</button>
</form>
```

---

## Ghi nhớ

- `label` gắn với input qua `for` = `id` — quan trọng cho accessibility.
- Mỗi trường có một chỗ để hiện lỗi.

---

# Slide 5 — Bắt sự kiện submit

```js
const form = document.querySelector("#register-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();     // chặn tải lại trang
  console.log("Đã submit");
});
```

---

## Ghi nhớ

Luôn bắt `submit` trên **form**, không phải `click` trên nút.

Vì người dùng có thể nhấn Enter để gửi form.

---

# Slide 6 — Chặn gửi khi dữ liệu sai

```js
form.addEventListener("submit", (e) => {
  if (!isValid()) {
    e.preventDefault();   // sai → chặn lại
    return;
  }
  // hợp lệ → cho gửi hoặc xử lý bằng JS
});
```

---

# Slide 7 — 6.2 Đọc giá trị input

```js
const nameInput = document.querySelector("#name");

const value = nameInput.value.trim();
```

---

## Vì sao cần trim?

```js
"   ".trim() === ""     // true → phát hiện được ô chỉ toàn dấu cách
```

Không có `trim()`, người dùng gõ vài dấu cách vẫn qua được.

---

## Ghi nhớ

`input.value` **luôn là chuỗi**, kể cả `type="number"`.

---

# Slide 8 — Kiểm tra rỗng và độ dài

```js
function validateName(value) {
  if (value === "") {
    return "Vui lòng nhập họ tên";
  }
  if (value.length < 2) {
    return "Họ tên quá ngắn";
  }
  return "";     // chuỗi rỗng = hợp lệ
}
```

---

## Quy ước

```text
trả về chuỗi rỗng  →  hợp lệ

trả về thông báo   →  có lỗi
```

Quy ước này giúp code kiểm tra rất gọn.

---

# Slide 9 — Kiểm tra email

Cách đơn giản nhất:

```js
if (!email.includes("@")) {
  return "Email không hợp lệ";
}
```

Đủ dùng cho bài học, nhưng chưa chặt.

---

## Dùng regex

```js
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!EMAIL_RE.test(email)) {
  return "Email không hợp lệ";
}
```

---

# Slide 10 — Đọc hiểu regex email

```text
/^[^\s@]+@[^\s@]+\.[^\s@]+$/

^          bắt đầu chuỗi
[^\s@]+    một hoặc nhiều ký tự không phải khoảng trắng và không phải @
@          dấu @
[^\s@]+    tên miền
\.         dấu chấm
[^\s@]+    phần đuôi (com, vn...)
$          kết thúc chuỗi
```

---

## Ghi nhớ

Không cần thuộc lòng regex.

Chỉ cần hiểu `.test(value)` trả về `true` / `false`.

---

# Slide 11 — Kiểm tra mật khẩu

```js
function validatePassword(value) {
  if (value === "") return "Vui lòng nhập mật khẩu";
  if (value.length < 8) return "Mật khẩu tối thiểu 8 ký tự";
  if (!/[0-9]/.test(value)) return "Mật khẩu phải có ít nhất 1 số";
  return "";
}
```

---

## Ghi nhớ

Kiểm tra từ điều kiện **dễ sai nhất trước** để báo lỗi hữu ích nhất.

---

# Slide 12 — Xác nhận mật khẩu

```js
function validateConfirm(password, confirm) {
  if (confirm === "") return "Vui lòng nhập lại mật khẩu";
  if (confirm !== password) return "Mật khẩu không khớp";
  return "";
}
```

---

## Ghi nhớ

Dùng `!==` — so sánh chặt như đã học ở Chương 1.

---

# Slide 13 — Kiểm tra checkbox

```html
<input id="terms" type="checkbox">
<label for="terms">Tôi đồng ý điều khoản</label>
```

```js
const terms = document.querySelector("#terms");

if (!terms.checked) {
  return "Bạn phải đồng ý điều khoản";
}
```

---

## Ghi nhớ

Checkbox dùng `.checked` (boolean), **không** dùng `.value`.

---

# Slide 14 — Tổng kết phần 1

Trong phần này chúng ta đã học:

✅ Bắt sự kiện `submit` và `preventDefault`.

✅ Đọc giá trị bằng `.value.trim()`.

✅ Kiểm tra rỗng, độ dài.

✅ Kiểm tra email bằng regex.

✅ Kiểm tra mật khẩu và xác nhận mật khẩu.

✅ Kiểm tra checkbox bằng `.checked`.

Ở phần tiếp theo, chúng ta sẽ **hiển thị lỗi** cho người dùng.

---

# Slide 15 — 6.3 Hiển thị lỗi

Hai việc cần làm khi có lỗi:

1. Thêm class lỗi vào ô input (viền đỏ).
2. Hiện thông báo bằng chữ cạnh ô đó.

---

```css
.form__input--error {
  border-color: #e53935;
}

.form__error {
  color: #e53935;
  font-size: 14px;
  min-height: 20px;
}
```

`min-height` giữ chỗ sẵn để layout không bị nhảy.

---

# Slide 16 — Hàm hiển thị lỗi

```js
function showError(input, message) {
  const errorEl = document.querySelector(`[data-error="${input.id}"]`);

  errorEl.textContent = message;
  input.classList.toggle("form__input--error", message !== "");
}
```

---

## Ghi nhớ

`classList.toggle(class, điều_kiện)` — có tham số thứ hai thì thêm/xóa theo điều kiện.

Một hàm lo được cả hai trường hợp: có lỗi và hết lỗi.

---

# Slide 17 — Dùng textContent, không dùng innerHTML

```js
errorEl.textContent = message;    // ✔ an toàn
errorEl.innerHTML = message;      // ❌ rủi ro
```

Thông báo lỗi có thể chứa dữ liệu người dùng nhập.

Đây là cảnh báo đã học ở Chương 4.

---

# Slide 18 — Gom các trường vào một cấu hình

Thay vì viết `if` cho từng ô, ta mô tả chúng thành dữ liệu.

```js
const fields = [
  { id: "name",     validate: validateName },
  { id: "email",    validate: validateEmail },
  { id: "password", validate: validatePassword }
];
```

---

## Vì sao?

Thêm trường mới chỉ cần thêm một dòng, không phải sửa logic.

---

# Slide 19 — Validate toàn bộ form

```js
function validateForm() {
  const errors = fields.map(f => {
    const input = document.querySelector(`#${f.id}`);
    const message = f.validate(input.value.trim());

    showError(input, message);
    return message;
  });

  return errors.every(msg => msg === "");
}
```

---

## Ghi nhớ

`map` gom tất cả thông báo lỗi, `every` kiểm tra tất cả đều rỗng.

Đây là array methods của Chương 3 dùng vào việc thật.

---

# Slide 20 — Vì sao không dừng ở lỗi đầu tiên?

❌ Cách kém

```js
if (!checkName()) return false;    // dừng luôn
if (!checkEmail()) return false;
```

Người dùng sửa xong lỗi 1 mới biết còn lỗi 2 → khó chịu.

---

✔ Cách tốt

Kiểm tra **tất cả** các trường, hiện **tất cả** lỗi cùng lúc.

---

# Slide 21 — 6.4 Kiểm tra realtime

Sự kiện `input` chạy mỗi khi người dùng gõ một ký tự.

```js
fields.forEach(f => {
  const input = document.querySelector(`#${f.id}`);

  input.addEventListener("input", () => {
    showError(input, f.validate(input.value.trim()));
  });
});
```

---

## Ghi nhớ

`input` → kiểm tra khi đang gõ.

`blur` → kiểm tra khi rời khỏi ô.

---

# Slide 22 — Đừng báo lỗi quá sớm

Người dùng vừa gõ chữ "a" đã báo "Email không hợp lệ" → khó chịu.

---

## Cách làm tốt hơn

```text
Lần đầu   →  chỉ validate khi rời ô (blur)

Sau đó    →  validate realtime khi gõ (input)
```

Người dùng chỉ thấy lỗi sau khi đã nhập xong một lần.

---

# Slide 23 — 6.5 HTML5 constraint validation

Trình duyệt có sẵn một số kiểm tra cơ bản.

```html
<input type="email" required minlength="8" maxlength="50">
```

| Thuộc tính | Kiểm tra |
|-----------|----------|
| `required` | Bắt buộc nhập |
| `type="email"` | Đúng định dạng email |
| `minlength` | Độ dài tối thiểu |
| `pattern` | Khớp regex |

---

# Slide 24 — Đọc trạng thái validity

```js
input.validity.valid;        // true / false
input.validity.valueMissing; // bỏ trống mà có required
input.validity.typeMismatch; // sai định dạng type
input.validity.tooShort;     // ngắn hơn minlength
```

---

## Tắt giao diện lỗi mặc định

```html
<form novalidate>
```

`novalidate` tắt popup mặc định của trình duyệt, để ta tự hiện lỗi cho đẹp.

---

# Slide 25 — Kết hợp HTML5 và JS

```js
function validateField(input) {
  if (!input.validity.valid) {
    if (input.validity.valueMissing) return "Vui lòng nhập trường này";
    if (input.validity.typeMismatch) return "Định dạng không đúng";
    if (input.validity.tooShort) return `Tối thiểu ${input.minLength} ký tự`;
  }
  return "";
}
```

---

## Ghi nhớ

HTML5 lo các kiểm tra cơ bản.

JS lo các quy tắc riêng (mật khẩu khớp nhau, quy tắc nghiệp vụ).

---

# Slide 26 — Bật/tắt nút submit

```js
function updateSubmitState() {
  submitBtn.disabled = !isFormValid();
}
```

---

## Cân nhắc

Nút bị disable làm người dùng bối rối vì không biết còn thiếu gì.

Cách tốt hơn: **luôn cho bấm**, bấm xong thì hiện toàn bộ lỗi.

---

# Slide 27 — Thông báo thành công

```js
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  form.reset();
  message.textContent = "Đăng ký thành công!";
  message.className = "form__message form__message--success";
});
```

---

## Ghi nhớ

`form.reset()` xóa toàn bộ giá trị đã nhập.

Nhớ xóa luôn các thông báo lỗi cũ.

---

# Slide 28 — Gửi form bằng fetch (mở rộng)

```js
async function submitForm(data) {
  try {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (!res.ok) throw new Error("Đăng ký thất bại");

    message.textContent = "Đăng ký thành công!";
  } catch (err) {
    message.textContent = err.message;
  }
}
```

---

## Ghi nhớ

Đây chính là kiến thức Chương 5 áp dụng vào form.

---

# Slide 29 — Thu thập dữ liệu form

```js
const data = {
  name: document.querySelector("#name").value.trim(),
  email: document.querySelector("#email").value.trim()
};
```

---

Hoặc dùng FormData

```js
const data = Object.fromEntries(new FormData(form));
// { name: "...", email: "...", password: "..." }
```

Cách này tự lấy hết các input có thuộc tính `name`.

---

# Slide 30 — 6.6 Dự án tổng hợp

## Form đăng ký

Các trường cần có:

- Họ tên
- Email
- Mật khẩu
- Xác nhận mật khẩu
- Checkbox đồng ý điều khoản

---

## Yêu cầu chức năng

- Validate realtime khi gõ.
- Hiện lỗi rõ ràng dưới từng ô.
- Chỉ cho submit khi mọi trường hợp lệ.
- Hiển thị "Đăng ký thành công".

---

# Slide 31 — Quy tắc validate của dự án

| Trường | Quy tắc |
|--------|---------|
| Họ tên | Không rỗng, tối thiểu 2 ký tự |
| Email | Không rỗng, đúng định dạng |
| Mật khẩu | Tối thiểu 8 ký tự, có ít nhất 1 số |
| Xác nhận | Phải khớp với mật khẩu |
| Điều khoản | Phải được tick |

---

# Slide 32 — Gợi ý cấu trúc HTML

```html
<form id="register-form" class="form" novalidate>
  <div class="form__group">
    <label class="form__label" for="name">Họ tên</label>
    <input class="form__input" id="name" type="text">
    <span class="form__error" data-error="name"></span>
  </div>

  <!-- lặp lại cho email, password, confirm -->

  <div class="form__group">
    <input id="terms" type="checkbox">
    <label for="terms">Tôi đồng ý điều khoản</label>
    <span class="form__error" data-error="terms"></span>
  </div>

  <button class="form__submit" type="submit">Đăng ký</button>
  <p id="form-message" class="form__message"></p>
</form>
```

---

## Ghi nhớ

Class đặt theo BEM — đúng như Chương 9 của HTML/CSS.

---

# Slide 33 — Gợi ý code phần validate

```js
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const rules = {
  name: (v) => {
    if (!v) return "Vui lòng nhập họ tên";
    if (v.length < 2) return "Họ tên quá ngắn";
    return "";
  },
  email: (v) => {
    if (!v) return "Vui lòng nhập email";
    if (!EMAIL_RE.test(v)) return "Email không hợp lệ";
    return "";
  },
  password: (v) => {
    if (!v) return "Vui lòng nhập mật khẩu";
    if (v.length < 8) return "Mật khẩu tối thiểu 8 ký tự";
    if (!/[0-9]/.test(v)) return "Mật khẩu phải có ít nhất 1 số";
    return "";
  },
  confirm: (v) => {
    const pw = document.querySelector("#password").value;
    if (!v) return "Vui lòng nhập lại mật khẩu";
    if (v !== pw) return "Mật khẩu không khớp";
    return "";
  }
};
```

---

# Slide 34 — Gợi ý code phần hiển thị

```js
function showError(id, message) {
  const input = document.querySelector(`#${id}`);
  const errorEl = document.querySelector(`[data-error="${id}"]`);

  errorEl.textContent = message;
  input.classList.toggle("form__input--error", message !== "");
}

function validateAll() {
  const errors = Object.keys(rules).map(id => {
    const value = document.querySelector(`#${id}`).value.trim();
    const message = rules[id](value);
    showError(id, message);
    return message;
  });

  const terms = document.querySelector("#terms");
  const termsError = terms.checked ? "" : "Bạn phải đồng ý điều khoản";
  document.querySelector('[data-error="terms"]').textContent = termsError;

  return errors.every(m => m === "") && termsError === "";
}
```

---

# Slide 35 — Gợi ý code phần sự kiện

```js
const form = document.querySelector("#register-form");
const message = document.querySelector("#form-message");

// realtime
Object.keys(rules).forEach(id => {
  const input = document.querySelector(`#${id}`);
  input.addEventListener("input", () => {
    showError(id, rules[id](input.value.trim()));
  });
});

// submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!validateAll()) {
    message.textContent = "Vui lòng kiểm tra lại các trường";
    return;
  }

  form.reset();
  message.textContent = "Đăng ký thành công!";
});
```

---

# Slide 36 — Checklist nghiệm thu

- [ ] Form không tải lại trang khi submit
- [ ] Mọi trường rỗng đều báo lỗi
- [ ] Email sai định dạng bị chặn
- [ ] Mật khẩu dưới 8 ký tự bị chặn
- [ ] Xác nhận mật khẩu không khớp bị chặn
- [ ] Chưa tick điều khoản thì không submit được
- [ ] Lỗi biến mất khi người dùng sửa đúng
- [ ] Có thông báo thành công
- [ ] Class đặt theo BEM
- [ ] Dùng `textContent`, không dùng `innerHTML` cho lỗi

---

# Slide 37 — Đồ án cuối khóa

## Yêu cầu bắt buộc

Hoàn thiện form đăng ký đạt đủ checklist ở slide 36.

---

## Yêu cầu mở rộng

- Gửi dữ liệu bằng `fetch` tới một endpoint và hiển thị phản hồi.
- Thêm nút hiện/ẩn mật khẩu.
- Thêm thanh đo độ mạnh mật khẩu.
- Hiển thị trạng thái "Đang gửi..." khi submit.

---

# Slide 38 — Tổng kết Chương 6

🎉 Chúc mừng!

Bạn đã hoàn thành toàn bộ khóa học JavaScript.

---

## Kiến thức đã học

✅ Bắt `submit` và `preventDefault`.

✅ Đọc và kiểm tra giá trị input.

✅ Regex kiểm tra email.

✅ Hiển thị lỗi bằng class và `textContent`.

✅ Validate realtime bằng sự kiện `input`.

✅ HTML5 constraint validation và `validity`.

✅ Gom lỗi bằng `map` + `every`.

✅ Gửi form bằng `fetch`.

---

## Toàn bộ khóa học

```text
Ch.1  Cú pháp cơ bản

Ch.2  String, Number, Array, Object

Ch.3  Array methods + ES6+

Ch.4  DOM & Events

Ch.5  JSON, Promise, Fetch

Ch.6  Form Validation (dự án tổng hợp)
```

---

## Sau khóa học

Bạn đã có nền tảng JavaScript vững để:

- Làm việc với phần frontend của dự án Rails.
- Học tiếp một framework như React hoặc Vue.
- Tự đọc hiểu và sửa code JavaScript trong dự án thật.
