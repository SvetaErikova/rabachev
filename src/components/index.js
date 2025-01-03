// Функция для установки темы
function setTheme(theme) {
  document.body.dataset.theme = theme;
  localStorage.setItem('theme', theme); // Сохраняем тему в localStorage
}

// Функция для получения сохранённой темы из localStorage
function getSavedTheme() {
  return localStorage.getItem('theme') || 'default'; // Возвращаем сохранённую тему или дефолтную
}

// При загрузке страницы устанавливаем сохранённую тему
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = getSavedTheme();
  setTheme(savedTheme);

  // Устанавливаем активный класс для кнопки, соответствующей сохранённой теме
  const activeButton = document.querySelector(`button[data-theme="${savedTheme}"]`);
  if (activeButton) activeButton.classList.add('is_active');
});

// Обработчик для кнопок переключения темы
document.querySelectorAll('button[data-theme]').forEach(btn => {
  btn.addEventListener('click', e => {
    const selectedTheme = e.currentTarget.dataset.theme;
    setTheme(selectedTheme); // Устанавливаем выбранную тему

    // Убираем активный класс у всех кнопок и добавляем его к текущей
    document.querySelectorAll('button[data-theme]').forEach(t => {
      t.classList.toggle('is_active', t === e.currentTarget);
    });
  });
});

// Обработчик для кнопок переключения сетки
document.querySelectorAll('button[data-grid]').forEach(btn => {
  btn.addEventListener('click', e => {
    const gridState = e.currentTarget.dataset.grid === 'ON' ? 'OFF' : 'ON';
    e.currentTarget.dataset.grid = gridState;
    document.body.dataset.grid = gridState;
  });
});

// Обработчик для текста с анимацией hover
document.querySelectorAll('.text_roll').forEach(link => {
  const span = link.querySelector('span');
  span.dataset.hover = span.textContent;
});

// Обработчик для полноэкранного просмотра изображений
const modal = document.getElementById('fullscreen-modal');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.card--image').forEach(imgContainer => {
  const btn = document.createElement('div');
  btn.classList.add('btn-full-img');
  imgContainer.append(btn);

  btn.addEventListener('click', () => {
    modal.classList.add('is_active');
  });
});

// Закрываем модальное окно при клике на крестик
closeBtn.addEventListener('click', () => {
  modal.classList.remove('is_active');
});

// Закрываем модальное окно при клике вне изображения
window.addEventListener('click', event => {
  if (event.target === modal) modal.classList.remove('is_active');
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".u-project__card");

  cards.forEach((card, index) => {
    // Разная скорость для каждой карточки
    const speed = 0.3 + Math.random() * 1; // Случайная скорость от 0.5 до 1.5
    const delay = index * 0.2; // Задержка для каждой карточки
    const initialY = 50 + Math.random() * 300; // Случайное начальное смещение вниз от 50 до 150 пикселей

    gsap.fromTo(card, {
      y: initialY, // Случайное начальное смещение вниз
      opacity: 0.5,
      scale: 0.7
    }, {
      y: 0, // Конечное положение
      opacity: 1,
      scale: 1,
      // duration: speed, // Случайная скорость
      // delay: delay, // Задержка
      scrollTrigger: {
        trigger: card,
        start: "top 80%", // Анимация начинается, когда карточка на 80% в видимой области
        end: "bottom 50%", // Анимация заканчивается, когда карточка на 20% в видимой области
        toggleActions: "play none reverse none",
        markers: true, // Включите маркеры для отладки
      },
    });
  });
});
