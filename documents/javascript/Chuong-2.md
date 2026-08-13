# CHƯƠNG 2 — Kiểu dữ liệu: String, Number, Array, Object

---

# Slide 1 — Chương 2: String, Number, Array, Object

## Mục tiêu chương học

Sau khi hoàn thành chương này, bạn sẽ có thể:

- Nối chuỗi bằng template literal.
- Dùng thành thạo các method chuỗi thông dụng.
- Chuyển đổi và làm tròn số.
- Hiểu mảng và các thao tác cơ bản.
- Hiểu object và cách truy cập thuộc tính.
- Làm việc với mảng các object — dạng dữ liệu API hay trả về.

---

## Kết quả đạt được

Đến cuối chương, bạn sẽ tự viết được đoạn code:

- Nhận vào một mảng sản phẩm dạng `{ ten, gia }`.
- In ra danh sách sản phẩm.
- Tính tổng giá tiền.

**Thời lượng:** 2 buổi

---

# Slide 2 — Bốn kiểu dữ liệu dùng hằng ngày

```text
String   →  chữ, văn bản

Number   →  số, tính toán

Array    →  danh sách

Object   →  một đối tượng có nhiều thuộc tính
```

---

## Ghi nhớ

Gần như mọi dữ liệu thực tế đều là tổ hợp của bốn kiểu này.

---

# Slide 3 — 2.1 String — chuỗi

Chuỗi được viết trong nháy đơn hoặc nháy kép.

```js
const a = "Xin chào";
const b = 'Xin chào';
```

Cả hai đều đúng. Chọn một kiểu và dùng nhất quán.

---

## Nối chuỗi bằng dấu +

```js
const name = "Long";
const msg = "Xin chào " + name + "!";
// "Xin chào Long!"
```

Cách này dài dòng và dễ quên dấu cách.

---

# Slide 4 — Template literal

Dùng dấu backtick `` ` `` và cú pháp `${...}`.

```js
const name = "Long";
const msg = `Xin chào ${name}!`;
```

Gọn hơn nhiều so với nối bằng `+`.

---

## Chèn được cả biểu thức

```js
const gia = 100000;
const soLuong = 3;

console.log(`Tổng: ${gia * soLuong} đồng`);
// "Tổng: 300000 đồng"
```

---

# Slide 5 — Template literal xuống dòng

Backtick giữ nguyên xuống dòng, không cần `\n`.

```js
const html = `
  <div class="card">
    <h3>${name}</h3>
  </div>
`;
```

---

## Ghi nhớ

Đây là cách tạo HTML từ JS — sẽ dùng rất nhiều ở Chương 4.

---

# Slide 6 — Method chuỗi thông dụng

```js
const s = "  JavaScript Cơ Bản  ";

s.length              // 21   - độ dài
s.trim()              // "JavaScript Cơ Bản" - bỏ khoảng trắng 2 đầu
s.toUpperCase()       // "  JAVASCRIPT CƠ BẢN  "
s.toLowerCase()       // "  javascript cơ bản  "
```

---

## Lưu ý quan trọng

Các method chuỗi **không sửa** chuỗi gốc, mà **trả về chuỗi mới**.

```js
let s = "  abc  ";
s.trim();          // trả về "abc" nhưng s không đổi
s = s.trim();      // ✔ phải gán lại
```

---

# Slide 7 — Tìm kiếm trong chuỗi

```js
const email = "long@gmail.com";

email.includes("@")       // true  - có chứa không?
email.startsWith("long")  // true
email.endsWith(".com")    // true
email.indexOf("@")        // 4     - vị trí, không có thì -1
```

---

## Ứng dụng

Kiểm tra email có ký tự `@` — sẽ dùng ở Chương 6 khi validate form.

---

# Slide 8 — Cắt và tách chuỗi

```js
const s = "JavaScript";

s.slice(0, 4)     // "Java"   - cắt từ vị trí 0 đến trước 4
s.slice(4)        // "Script" - từ vị trí 4 đến hết
s.slice(-6)       // "Script" - 6 ký tự cuối
```

---

`split` tách chuỗi thành mảng

```js
"a,b,c".split(",")        // ["a", "b", "c"]
"long@gmail.com".split("@")  // ["long", "gmail.com"]
"Xin chào".split("")      // ["X","i","n"," ","c","h","à","o"]
```

---

# Slide 9 — Thay thế trong chuỗi

```js
const s = "Xin chào Long";

s.replace("Long", "Nam")    // "Xin chào Nam"
```

`replace` chỉ đổi **lần xuất hiện đầu tiên**.

```js
"a-b-c".replace("-", "+")      // "a+b-c"
"a-b-c".replaceAll("-", "+")   // "a+b+c"
```

---

# Slide 10 — Truy cập ký tự

```js
const s = "JavaScript";

s[0]           // "J"   - ký tự đầu, đếm từ 0
s[1]           // "a"
s[s.length-1]  // "t"   - ký tự cuối
```

---

## Ghi nhớ

Trong JavaScript, chỉ số luôn bắt đầu từ **0**.

Đây là nguồn gốc của rất nhiều lỗi "lệch một đơn vị".

---

# Slide 11 — 2.2 Number — số

JavaScript chỉ có **một** kiểu số, không phân biệt int/float.

```js
const a = 10;
const b = 3.14;
const c = -5;

typeof a;   // "number"
typeof b;   // "number"
```

---

# Slide 12 — Chuyển chuỗi thành số

Dữ liệu từ ô input **luôn là chuỗi**, phải chuyển sang số trước khi tính.

```js
Number("12")        // 12
Number("12.5")      // 12.5
Number("abc")       // NaN  - Not a Number

parseInt("12.9")    // 12   - lấy phần nguyên
parseFloat("12.9")  // 12.9
parseInt("12px")    // 12   - bỏ qua phần chữ phía sau
```

---

## Ghi nhớ

Không chuyển kiểu → `"5" + 5` ra `"55"` chứ không phải `10`.

---

# Slide 13 — Kiểm tra NaN

`NaN` xuất hiện khi phép tính không ra số hợp lệ.

```js
Number("abc")     // NaN
0 / 0             // NaN
```

---

## Cách kiểm tra

```js
NaN === NaN          // false  ← NaN không bằng chính nó!

Number.isNaN(x)      // ✔ cách đúng để kiểm tra
```

---

# Slide 14 — Làm tròn và hiển thị

```js
const x = 3.14159;

x.toFixed(2)      // "3.14"  ← trả về CHUỖI
Math.round(3.6)   // 4   - làm tròn gần nhất
Math.floor(3.9)   // 3   - làm tròn xuống
Math.ceil(3.1)    // 4   - làm tròn lên
```

---

## Lưu ý

`toFixed()` trả về **chuỗi**, không phải số.

```js
const gia = 1000.5;
gia.toFixed(2) + 1;           // "1000.501"  ← nối chuỗi!
Number(gia.toFixed(2)) + 1;   // 1001.5      ← đúng
```

---

# Slide 15 — Cảnh báo về số thực

```js
0.1 + 0.2 === 0.3    // false !!
0.1 + 0.2            // 0.30000000000000004
```

Đây không phải lỗi của JavaScript — mọi ngôn ngữ đều vậy do cách máy tính lưu số thực.

---

## Cách xử lý

Khi hiển thị tiền, luôn dùng `toFixed`.

```js
const tong = 0.1 + 0.2;
console.log(tong.toFixed(2));   // "0.30"
```

---

# Slide 16 — Math.random

Sinh số ngẫu nhiên từ 0 đến gần 1.

```js
Math.random()              // 0.6482...
```

Sinh số nguyên từ 1 đến 10:

```js
Math.floor(Math.random() * 10) + 1;
```

---

# Slide 17 — Tổng kết phần 1

Trong phần này chúng ta đã học:

✅ Template literal và các method chuỗi.

✅ `trim`, `includes`, `slice`, `split`, `replace`.

✅ Chuyển chuỗi sang số và `NaN`.

✅ `toFixed`, `Math.round/floor/ceil/random`.

Ở phần tiếp theo, chúng ta sẽ học cách lưu **nhiều giá trị** cùng lúc bằng Array và Object.

---

# Slide 18 — 2.3 Array — mảng

Mảng là một **danh sách có thứ tự**.

```js
const fruits = ["táo", "cam", "xoài"];
```

```text
index:    0       1       2
value: "táo"   "cam"  "xoài"
```

---

## Truy cập phần tử

```js
fruits[0];        // "táo"
fruits[2];        // "xoài"
fruits.length;    // 3
fruits[fruits.length - 1];   // "xoài" - phần tử cuối
```

---

# Slide 19 — Thêm và xóa phần tử

```js
const fruits = ["táo", "cam"];

fruits.push("xoài");     // thêm vào CUỐI    → ["táo","cam","xoài"]
fruits.pop();            // xóa ở CUỐI       → ["táo","cam"]

fruits.unshift("lê");    // thêm vào ĐẦU     → ["lê","táo","cam"]
fruits.shift();          // xóa ở ĐẦU        → ["táo","cam"]
```

---

## Ghi nhớ

```text
push / pop        →  làm việc ở cuối mảng

unshift / shift   →  làm việc ở đầu mảng
```

`push` là method được dùng nhiều nhất.

---

# Slide 20 — Tìm kiếm trong mảng

```js
const fruits = ["táo", "cam", "xoài"];

fruits.includes("cam")    // true  - có trong mảng không?
fruits.indexOf("cam")     // 1     - ở vị trí nào, không có thì -1
```

---

## Ứng dụng

```js
if (fruits.includes("cam")) {
  console.log("Đã có cam trong giỏ");
}
```

---

# Slide 21 — slice và splice

`slice` — **cắt ra** một phần, không đổi mảng gốc.

```js
const arr = [1, 2, 3, 4, 5];

arr.slice(1, 3);   // [2, 3]   - mảng gốc không đổi
```

---

`splice` — **sửa trực tiếp** mảng gốc.

```js
const arr = [1, 2, 3, 4, 5];

arr.splice(1, 2);   // xóa 2 phần tử từ vị trí 1
console.log(arr);   // [1, 4, 5]  ← mảng gốc ĐÃ ĐỔI
```

---

## Ghi nhớ

```text
slice   →  an toàn, trả về mảng mới

splice  →  sửa mảng gốc, cẩn thận khi dùng
```

---

# Slide 22 — join

Nối các phần tử của mảng thành một chuỗi.

```js
const fruits = ["táo", "cam", "xoài"];

fruits.join(", ");    // "táo, cam, xoài"
fruits.join(" - ");   // "táo - cam - xoài"
fruits.join("");      // "táocamxoài"
```

---

## Ứng dụng

Hiển thị danh sách tag, danh mục sản phẩm trên giao diện.

---

# Slide 23 — Duyệt mảng

```js
const fruits = ["táo", "cam", "xoài"];

for (const fruit of fruits) {
  console.log(fruit);
}
```

Đây là cách gọn nhất để đi qua từng phần tử.

---

## Lưu ý về const với mảng

```js
const arr = [1, 2];
arr.push(3);       // ✔ được - vẫn là mảng đó, chỉ thêm phần tử
arr = [4, 5];      // ❌ lỗi - gán lại biến thì không được
```

---

# Slide 24 — 2.4 Object — đối tượng

Object mô tả **một thứ có nhiều thuộc tính**.

```js
const user = {
  id: 1,
  name: "Long",
  active: true
};
```

```text
key    :  value
id     :  1
name   :  "Long"
active :  true
```

---

# Slide 25 — Truy cập thuộc tính

Hai cách:

```js
user.name;          // "Long"   - dấu chấm, dùng nhiều nhất
user["active"];     // true     - ngoặc vuông
```

---

## Khi nào dùng ngoặc vuông?

Khi tên thuộc tính nằm trong một biến.

```js
const key = "name";
user[key];      // "Long"
user.key;       // undefined  ← tìm thuộc tính tên là "key"
```

---

# Slide 26 — Thêm, sửa, xóa thuộc tính

```js
const user = { id: 1, name: "Long" };

user.email = "a@b.c";     // thêm mới
user.name = "Nam";        // sửa giá trị
delete user.email;        // xóa

console.log(user);        // { id: 1, name: "Nam" }
```

---

## Thuộc tính không tồn tại

```js
user.phone;    // undefined - không báo lỗi
```

Đây là lý do cần kiểm tra trước khi dùng.

---

# Slide 27 — Object lồng nhau

Giá trị của một thuộc tính có thể là object khác.

```js
const user = {
  name: "Long",
  address: {
    city: "Hà Nội",
    district: "Cầu Giấy"
  }
};

user.address.city;    // "Hà Nội"
```

---

## Cẩn thận

```js
user.company.name;    // ❌ lỗi - company là undefined
```

Chương 3 sẽ học `?.` để xử lý an toàn trường hợp này.

---

# Slide 28 — Duyệt object

```js
const user = { id: 1, name: "Long", active: true };

Object.keys(user);      // ["id", "name", "active"]
Object.values(user);    // [1, "Long", true]
Object.entries(user);   // [["id",1], ["name","Long"], ["active",true]]
```

---

Duyệt qua tất cả thuộc tính

```js
for (const key of Object.keys(user)) {
  console.log(`${key}: ${user[key]}`);
}
```

---

# Slide 29 — Mảng của object

Đây là dạng dữ liệu API trả về nhiều nhất.

```js
const users = [
  { id: 1, name: "A" },
  { id: 2, name: "B" }
];

users[0].name;      // "A"
users.length;       // 2
```

---

Duyệt qua danh sách

```js
for (const user of users) {
  console.log(`${user.id} - ${user.name}`);
}
```

---

## Ghi nhớ

Mảng object là cấu trúc dữ liệu quan trọng nhất bạn sẽ gặp trong công việc thực tế.

---

# Slide 30 — So sánh Array và Object

| | Array | Object |
|---|-------|--------|
| Dùng cho | Danh sách nhiều thứ giống nhau | Một thứ có nhiều thuộc tính |
| Truy cập bằng | Chỉ số `arr[0]` | Tên thuộc tính `obj.name` |
| Có thứ tự | Có | Không quan trọng |
| Ví dụ | Danh sách sản phẩm | Một sản phẩm |

---

# Slide 31 — Thực hành

## Bài tập nhỏ

Cho object sau, hãy in ra chuỗi `"Long - 25 tuổi"`.

```js
const user = { name: "Long", age: 25 };
```

---

Gợi ý đáp án

```js
console.log(`${user.name} - ${user.age} tuổi`);
```

---

# Slide 32 — Bài tập cuối chương

## Yêu cầu

Cho mảng sản phẩm:

```js
const products = [
  { ten: "Áo thun", gia: 150000 },
  { ten: "Quần jean", gia: 350000 },
  { ten: "Giày", gia: 500000 }
];
```

1. In ra danh sách từng sản phẩm kèm giá.
2. Tính tổng giá của tất cả sản phẩm.

---

## Yêu cầu kỹ thuật

- Dùng `for...of` để duyệt.
- Dùng template literal khi in.
- Hiển thị tổng tiền có dấu phân cách.

---

# Slide 33 — Gợi ý bài tập

```js
let tong = 0;

for (const p of products) {
  console.log(`${p.ten}: ${p.gia.toLocaleString()}đ`);
  tong += p.gia;
}

console.log(`Tổng: ${tong.toLocaleString()}đ`);
```

---

Kết quả

```text
Áo thun: 150.000đ
Quần jean: 350.000đ
Giày: 500.000đ
Tổng: 1.000.000đ
```

`toLocaleString()` tự thêm dấu phân cách hàng nghìn.

---

# Slide 34 — Tổng kết Chương 2

🎉 Chúc mừng!

Bạn đã hoàn thành chương thứ hai của khóa học.

---

## Kiến thức đã học

✅ Template literal và các method chuỗi.

✅ Chuyển kiểu số, `NaN`, `toFixed`, `Math`.

✅ Mảng: `push/pop/shift/unshift`, `includes`, `slice`, `join`.

✅ Object: truy cập, thêm/sửa/xóa thuộc tính.

✅ `Object.keys / values / entries`.

✅ Mảng của object — dạng dữ liệu thực tế.

---

## Sau chương này

Bạn đã làm chủ bốn kiểu dữ liệu dùng hằng ngày.

Ở chương tiếp theo, chúng ta sẽ học cách xử lý danh sách bằng **array methods hiện đại** và cú pháp **ES6+**.
