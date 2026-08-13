// Active menu
const menuLinks = document.querySelectorAll('.main-menu a');
const sections = document.querySelectorAll('.animated-section');

function setActiveMenu(id) {
  menuLinks.forEach((link) => {
    const isActive = link.getAttribute('href') === `#${id}`;
    link.classList.toggle('active', isActive);
  });
}

function showSection(id) {
  sections.forEach((section) => {
    section.style.display = section.id === id ? 'block' : 'none';
  });
}

menuLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const id = link.getAttribute('href').replace('#', '');
    event.preventDefault();
    setActiveMenu(id);
    showSection(id);
    history.pushState(null, '', `#${id}`);
  });
});

const hash = window.location.hash.replace('#', '');
if (hash) {
  setActiveMenu(hash);
  showSection(hash);
}

// Ảnh ngẫu nhiên cho dự án và bài viết
function loadRandomImages(selector, width, height, prefix) {
  document.querySelectorAll(selector).forEach((img, index) => {
    const seed = `${prefix}-${index + 1}-${Date.now()}`;
    img.src = `https://picsum.photos/seed/${seed}/${width}/${height}`;
  });
}

loadRandomImages('.portfolio-item-img img', 600, 450, 'portfolio');
loadRandomImages('.blog-card .media-block img', 640, 300, 'blog');
