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
  let savedTheme = getSavedTheme();
  setTheme(savedTheme);

  // Устанавливаем активный класс для кнопки, соответствующей сохранённой теме
  let activeButton = document.querySelector(`button[data-theme="${savedTheme}"]`);
  if (activeButton) activeButton.classList.add('is_active');
});

// Обработчик для кнопок переключения темы комп
if (window.matchMedia('(min-width: 641px)').matches) {
  document.querySelectorAll('button[data-theme]').forEach(btn => {
    btn.addEventListener('click', e => {
      let selectedTheme = e.currentTarget.dataset.theme;
      setTheme(selectedTheme); // Устанавливаем выбранную тему

      // Убираем активный класс у всех кнопок и добавляем его к текущей
      document.querySelectorAll('button[data-theme]').forEach(t => {
        t.classList.toggle('is_active', t === e.currentTarget);
      });
    });
  });
}

// Обработчик для кнопок переключения темы моб
if (window.matchMedia('(max-width: 640px)').matches) {
  // Функция для получения следующей темы
  function getNextTheme(currentTheme) {
    let themes = ['white', 'dark', 'color'];
    let currentIndex = themes.indexOf(currentTheme);
    let nextIndex = (currentIndex + 1) % themes.length; // Переход к следующей теме по кругу
    return themes[nextIndex];
  }
  // Обработчик клика на кнопку
  document.querySelector('.u-header__theme').addEventListener('click', function() {
    console.log('ok')
    let currentTheme = document.body.dataset.theme;
    let nextTheme = getNextTheme(currentTheme);
    setTheme(nextTheme); // Устанавливаем следующую тему
  });
}

// Обработчик для кнопок переключения сетки
document.querySelectorAll('button[data-grid]').forEach(btn => {
  btn.addEventListener('click', e => {
    let gridState = e.currentTarget.dataset.grid === 'ON' ? 'OFF' : 'ON';
    e.currentTarget.dataset.grid = gridState;
    document.body.dataset.grid = gridState;
  });
});

// Обработчик для текста с анимацией hover
document.querySelectorAll('.text_roll').forEach(link => {
  let span = link.querySelector('span');
  span.dataset.hover = span.textContent;
});




