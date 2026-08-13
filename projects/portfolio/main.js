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
    closeMenu();
    history.pushState(null, '', `#${id}`);
  });
});

const hash = window.location.hash.replace('#', '');
if (hash) {
  setActiveMenu(hash);
  showSection(hash);
}

// Menu toggle
const header = document.querySelector('.header');
const menuToggle = document.querySelector('.menu-toggle');
const menuClose = document.querySelector('.menu-close');
const menuBackdrop = document.querySelector('.menu-backdrop');

function openMenu(event) {
  event.preventDefault();
  header.classList.add('is-open');
}

function closeMenu(event) {
  if (event) event.preventDefault();
  header.classList.remove('is-open');
}

if (menuToggle) menuToggle.addEventListener('click', openMenu);
if (menuClose) menuClose.addEventListener('click', closeMenu);
if (menuBackdrop) menuBackdrop.addEventListener('click', closeMenu);

// Ảnh ngẫu nhiên cho dự án
function loadRandomImages(selector, width, height, prefix) {
  document.querySelectorAll(selector).forEach((img, index) => {
    const seed = `${prefix}-${index + 1}-${Date.now()}`;
    img.src = `https://picsum.photos/seed/${seed}/${width}/${height}`;
  });
}

loadRandomImages('.portfolio-item-img img', 600, 450, 'portfolio');

// Logic cho blog
const blogList = document.querySelector('#blog-list');

function renderBlog(posts) {
  if (!blogList) return;

  const items = posts.slice(0, 4);

  blogList.innerHTML = items
    .map((post, index) => {
      const title = post.title || `記事 ${index + 1}`;
      const tags = (post.tags || [])
        .map((tag) => `<span class="category">${tag}</span>`)
        .join('');
      const views = post.views ? `${post.views} 回閲覧` : 'ブログ';
      const content = post.body ? post.body.slice(0, 100) : '記事の本文';
      const image = `https://picsum.photos/seed/blog-${post.id}/640/300`;

      return `
        <article class="blog-card">
          <div class="media-block">
            <div class="blog-tags">
              <span class="category">${views}</span>
            </div>
            <img src="${image}" alt="${title}" />
          </div>
          <div class="post-info">
            <div class="post-date">${tags || '<span class="category">ブログ</span>'}</div>
            <h3 class="blog-item-title">${title}</h3>
            <p>${content}...</p>
          </div>
        </article>
      `;
    })
    .join('');
}

fetch('https://dummyjson.com/posts')
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    renderBlog(data.posts || []);
  });

// Logic validate form liên hệ
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  const formFields = {
    name: document.querySelector('#cf-name'),
    email: document.querySelector('#cf-email'),
    subject: document.querySelector('#cf-subject'),
    message: document.querySelector('#cf-message')
  };

  const successMessage = contactForm.querySelector('.form-success-message');

  function showError(input, text) {
    const errorBox = input.closest('.form-group').querySelector('.error-message');
    input.classList.add('is-invalid');
    errorBox.textContent = text;
  }

  function clearError(input) {
    const errorBox = input.closest('.form-group').querySelector('.error-message');
    input.classList.remove('is-invalid');
    errorBox.textContent = '';
  }

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let valid = true;

    if (!formFields.name.value.trim()) {
      showError(formFields.name, 'お名前を入力してください。');
      valid = false;
    } else clearError(formFields.name);

    if (!formFields.email.value.trim()) {
      showError(formFields.email, 'メールアドレスを入力してください。');
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formFields.email.value.trim())) {
      showError(formFields.email, 'メールアドレスの形式が正しくありません。');
      valid = false;
    } else clearError(formFields.email);

    if (!formFields.subject.value.trim()) {
      showError(formFields.subject, '件名を入力してください。');
      valid = false;
    } else clearError(formFields.subject);

    if (!formFields.message.value.trim()) {
      showError(formFields.message, 'お問い合わせ内容を入力してください。');
      valid = false;
    } else clearError(formFields.message);

    if (valid) {
      successMessage.textContent = '送信が完了しました。ありがとうございます。';
      successMessage.classList.add('show');
      contactForm.reset();
    }
  });
}
