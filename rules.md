# QUY ĐỊNH LÀM BÀI TẬP — Trang Portfolio
---

## Nguyên tắc bắt buộc

### 1 — Mobile-first
- CSS mặc định (ngoài media query) là **CSS cho mobile**: 1 cột, menu dọc, ảnh full width.
- Mở rộng lên màn hình lớn **chỉ bằng `@media (min-width: ...)`**.
- Breakpoint dùng đúng 1 mốc: `768px` (tablet trở lên tính là PC luôn).

### 2 — Chỉ dùng thuộc tính đã học
Chỉ được dùng các thuộc tính/kỹ thuật đã học, Nếu dụng thuộc tính khác thì phải hiểu rõ vì sao dùng và thêm comment vào.

### 3 — Thứ tự khai báo thuộc tính trong 1 selector
Trong mỗi khối `{ }`, viết thuộc tính theo đúng 5 nhóm dưới đây, nhóm trên trước nhóm dưới.
Trong cùng nhóm thì tự do. Nhóm nào không có thì bỏ qua.

| # | Nhóm | Thuộc tính |
|---|---|---|
| 1 | **Hiển thị & bố cục** | `display`, `flex-direction`, `flex-wrap`, `justify-content`, `align-items`, `align-content`, `align-self`, `order`, `flex`, `grid-template-columns`, `gap` |
| 2 | **Vị trí** | `position`, `top`, `right`, `bottom`, `left`, `z-index` |
| 3 | **Box model** | `width`, `max-width`, `height`, `margin`, `padding`, `border`, `border-radius`, `box-sizing`, `overflow` |
| 4 | **Chữ** | `font-family`, `font-size`, `font-weight`, `line-height`, `letter-spacing`, `text-align`, `text-decoration`, `color`, `list-style` |
| 5 | **Trang trí & hiệu ứng** | `background`, `background-image/size/position/repeat`, `box-shadow`, `opacity`, `transition`, `transform`, `animation` |

```css
/* ✅ đúng thứ tự */
.portfolio-item-title {
  display: flex;          /* 1 */
  gap: 8px;               /* 1 */
  position: relative;     /* 2 */
  margin: 0 0 8px;        /* 3 */
  padding: 12px;          /* 3 */
  font-size: 1.125rem;    /* 4 */
  color: var(--text);     /* 4 */
  background: var(--surface-card); /* 5 */
  transition: transform 0.3s ease; /* 5 */
}

/* ❌ sai — trộn lẫn các nhóm */
.portfolio-item-title {
  color: var(--text);
  padding: 12px;
  display: flex;
  transition: transform 0.3s ease;
  position: relative;
}
```

### 4 — Đặt tên class kebab-case
- Tất cả class viết **chữ thường, các từ nối bằng dấu `-`**: `header-photo`, `main-menu`, `portfolio-item-title`, `btn-primary`.
- ❌ Không `camelCase` (`headerPhoto`), không `snake_case` (`header_photo`), không viết hoa, không tiếng Việt có dấu.
- Tên đặt theo **vai trò**, không theo hình thức: `btn-primary` ✅ — `btn-green`, `mt-20`, `text-red` ❌.
- Tên ghép theo cấu trúc `<block>-<thành-phần>`: `resume-item`, `resume-title`, `resume-period`. Tối đa 4 từ, không lồng sâu: `portfolio-item-title` ✅ — `portfolio-list-item-inner-title` ❌.
- Biến thể thêm hậu tố: `btn-primary`, `card-featured`, `menu-item-active`.
- Selector chỉ dùng **class**. ❌ Không style bằng `id`, không dùng `!important`.

### 5 — CSS
- 1 file CSS ngoài (`styles/style.css`).
- ❌ Không viết `style="..."` inline, không dùng thẻ `<style>`.
- Màu / khoảng cách lặp lại phải khai báo bằng biến `:root`
- Đơn vị: `rem` cho font còn lại dùng đơn vị tuyệt đối.

### 6 — Không dùng
- ❌ Bootstrap, Tailwind, thư viện CSS/icon ngoài (font-awesome...). Tự viết CSS.
- ❌ `float` để làm layout (dùng Flexbox/Grid).
- ❌ Copy-paste nguyên file CSS mẫu. Tự viết, được xem để hiểu.

---
