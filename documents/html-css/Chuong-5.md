# CHƯƠNG 5 — Đặt vị trí bằng Position

---

# Slide 1 — Chương 5: Đặt vị trí bằng Position

## Mục tiêu chương học

Sau khi hoàn thành chương này, bạn sẽ có thể:

- Hiểu thuộc tính `position` dùng để làm gì.
- Phân biệt 5 giá trị: `static`, `relative`, `absolute`, `fixed`, `sticky`.
- Sử dụng các tọa độ `top`, `right`, `bottom`, `left`.
- Dùng `relative` làm mốc cho `absolute`.
- Tạo header cố định và nút "back to top".
- Hiểu `z-index` và cách xếp lớp các phần tử.

---

## Kết quả đạt được

Đến cuối chương, bạn sẽ tự dựng được:

- Một card sản phẩm có nhãn "-20%" ở góc.
- Một thanh nav dính đầu trang khi cuộn.
- Một nút "back to top" cố định ở góc màn hình.

---

# Slide 2 — Vì sao cần Position?

Cho đến giờ, các phần tử được sắp xếp theo thứ tự tự nhiên từ trên xuống.

Nhưng đôi khi ta cần:

- Đặt một nhãn lên góc của ảnh.
- Giữ menu luôn cố định trên cùng.
- Đặt nút nổi ở góc màn hình.

`position` giúp làm được những điều đó.

---

# Slide 3 — 5.1 Tổng quan về Position

## Năm giá trị của position

```text
static

relative

absolute

fixed

sticky
```

Mỗi giá trị định vị phần tử theo một cách khác nhau.

---

# Slide 4 — Các tọa độ định vị

Khi dùng position, ta điều chỉnh vị trí bằng bốn thuộc tính:

```text
top

right

bottom

left
```

---

Ví dụ

```css
.box {
    top: 20px;
    left: 30px;
}
```

---

## Ghi nhớ

Các tọa độ này chỉ có hiệu lực khi `position` **khác** `static`.

---

# Slide 5 — position: static

`static` là giá trị **mặc định** của mọi phần tử.

- Phần tử nằm theo luồng tự nhiên.
- Không chịu tác động của `top`, `left`...

```css
.box {
    position: static;
}
```

---

## Ghi nhớ

Đây là trạng thái bình thường, không cần khai báo.

---

# Slide 6 — 5.2 position: relative

`relative` dịch phần tử so với **chính vị trí gốc của nó**.

```css
.box {
    position: relative;
    top: 20px;
    left: 30px;
}
```

Phần tử dịch xuống 20px, sang phải 30px.

---

## Đặc điểm quan trọng

Phần tử **vẫn giữ chỗ cũ** — chỗ trống ban đầu không bị lấp.

---

# Slide 7 — relative làm mốc cho absolute

Công dụng lớn nhất của `relative`: làm **mốc** cho phần tử con dùng `absolute`.

```css
.card {
    position: relative;
}
```

Phần tử con `absolute` sẽ định vị dựa theo `.card` này.

---

## Ghi nhớ

Rất thường gặp: cha `relative`, con `absolute`.

---

# Slide 8 — 5.3 position: absolute

`absolute` **thoát khỏi luồng** tự nhiên của trang.

- Không còn giữ chỗ cũ.
- Định vị theo **tổ tiên gần nhất** có `position` khác `static`.

---

Nếu không có tổ tiên phù hợp → định vị theo `body`.

```css
.badge {
    position: absolute;
    top: 8px;
    right: 8px;
}
```

---

# Slide 9 — Ví dụ nhãn trên card

Đặt nhãn "Sale" vào góc trên bên phải của card.

```css
.card {
    position: relative;
}

.card .badge {
    position: absolute;
    top: 8px;
    right: 8px;
}
```

---

Ví dụ HTML

```html
<div class="card">
    <span class="badge">Sale</span>
    <img src="product.jpg">
</div>
```

---

# Slide 10 — Ghi nhớ về absolute

- `absolute` thoát khỏi luồng.
- Cần một tổ tiên `relative` làm mốc.
- Nếu quên đặt mốc, phần tử sẽ nhảy theo `body`.

Đây là lỗi rất thường gặp với người mới.

---

# Slide 11 — 5.4 position: fixed

`fixed` neo phần tử theo **màn hình (viewport)**.

- Không cuộn theo trang.
- Luôn ở đúng vị trí dù cuộn lên hay xuống.

```css
.top-btn {
    position: fixed;
    bottom: 20px;
    right: 20px;
}
```

---

## Ứng dụng

- Header cố định.
- Nút "back to top".
- Nút chat.

---

# Slide 12 — Ví dụ nút back to top

```css
.back-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
```

Nút luôn ở góc phải dưới màn hình.

---

## Ghi nhớ

`fixed` rất hữu ích cho các nút cần luôn hiển thị.

---

# Slide 13 — 5.5 position: sticky

`sticky` là sự lai giữa `relative` và `fixed`.

- Ban đầu nằm bình thường như `relative`.
- Khi cuộn tới ngưỡng, nó **dính lại** như `fixed`.

```css
.navbar {
    position: sticky;
    top: 0;
}
```

---

## Lưu ý

`sticky` **bắt buộc** phải có `top` (hoặc `bottom`) để biết ngưỡng dính.

---

# Slide 14 — Ứng dụng của sticky

- Thanh menu dính đầu trang.
- Tiêu đề của một mục dài.
- Sidebar dính khi cuộn.

---

Ví dụ

```css
.navbar {
    position: sticky;
    top: 0;
    background: white;
}
```

Menu trôi cùng trang, rồi dính lại khi chạm đỉnh.

---

# Slide 15 — So sánh 5 giá trị Position

| Giá trị | Định vị theo | Giữ chỗ cũ | Cuộn theo trang |
|---------|--------------|-----------|-----------------|
| static | Luồng tự nhiên | Có | Có |
| relative | Chính nó | Có | Có |
| absolute | Tổ tiên định vị | Không | Có |
| fixed | Màn hình | Không | Không |
| sticky | Lai relative/fixed | Có | Dính khi tới ngưỡng |

---

# Slide 16 — Tổng kết phần 1

Trong phần này chúng ta đã học:

✅ Tổng quan về position.

✅ Các tọa độ top/right/bottom/left.

✅ static và relative.

✅ absolute và cách dùng mốc.

✅ fixed.

✅ sticky.

Ở phần tiếp theo, chúng ta sẽ học cách xếp lớp các phần tử bằng **z-index**.

---

# Slide 17 — 5.6 z-index và xếp lớp

## z-index là gì?

Khi các phần tử chồng lên nhau, `z-index` quyết định phần tử nào nằm **trên**.

```css
.box {
    position: relative;
    z-index: 10;
}
```

---

## Quy tắc

- Số càng lớn → nằm càng trên.
- Số nhỏ hoặc âm → nằm dưới.

---

# Slide 18 — z-index cần position

`z-index` **chỉ có tác dụng** khi phần tử có `position` khác `static`.

❌ Không hiệu lực

```css
.box {
    z-index: 10;   /* position mặc định là static */
}
```

✔ Có hiệu lực

```css
.box {
    position: relative;
    z-index: 10;
}
```

---

# Slide 19 — Ví dụ xếp lớp

```css
.back {
    position: absolute;
    z-index: 1;
}

.front {
    position: absolute;
    z-index: 2;
}
```

`.front` sẽ nằm đè lên `.back`.

---

## Ứng dụng

- Lớp phủ (overlay).
- Popup.
- Menu thả xuống.

---

# Slide 20 — Cảnh báo về Stacking Context

Đôi khi z-index lớn vẫn không nằm trên như mong đợi.

Lý do: mỗi phần tử định vị có thể tạo ra một **stacking context** riêng.

---

## Ghi nhớ

Ở giai đoạn này chỉ cần biết hiện tượng này tồn tại.

Nếu z-index "không ăn", hãy kiểm tra phần tử cha.

---

# Slide 21 — Thực hành Position

## Bài tập

Tạo một card có:

- `position: relative` cho card.
- Một nhãn "Mới" dùng `absolute` ở góc trên bên trái.

Quan sát nhãn bám đúng vào góc card.

---

## Mục tiêu

Làm quen với cặp relative + absolute.

---

# Slide 22 — Bài tập cuối chương

## Yêu cầu

Dựng một trang có ba thành phần position:

- Card sản phẩm có nhãn "-20%" ở góc (`absolute`).
- Thanh nav dính đầu trang (`sticky`).
- Nút "back to top" cố định ở góc (`fixed`).

---

## Yêu cầu kỹ thuật

- Card dùng `relative` làm mốc cho nhãn.
- Nav có `top: 0`.
- Nút back-to-top luôn hiển thị khi cuộn.

---

# Slide 23 — Gợi ý cấu trúc bài tập

```text
nav (sticky, top: 0)

↓

.card (relative)
   └── .badge "-20%" (absolute)

↓

nội dung dài để cuộn

↓

.back-to-top (fixed)
```

---

## Gợi ý style nhãn giảm giá

```css
.card {
    position: relative;
}

.card .badge {
    position: absolute;
    top: 10px;
    left: 10px;
    background: red;
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
}
```

---

# Slide 24 — Tổng kết Chương 5

🎉 Chúc mừng!

Bạn đã hoàn thành chương thứ năm của khóa học.

---

## Kiến thức đã học

✅ Tổng quan về position.

✅ static, relative, absolute, fixed, sticky.

✅ Các tọa độ top/right/bottom/left.

✅ Cặp relative + absolute.

✅ z-index và xếp lớp.

✅ Stacking context (giới thiệu).

---

## Sau chương này

Bạn đã biết cách đặt phần tử ở bất kỳ vị trí nào mong muốn.

Ở chương tiếp theo, chúng ta sẽ học công cụ mạnh mẽ để dàn bố cục: **Flexbox**.