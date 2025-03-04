// Функция для установки темы
function setTheme(theme) {
  document.body.dataset.theme = theme;
  localStorage.setItem('theme', theme); // Сохраняем тему в localStorage
}

// Функция для получения сохранённой темы из localStorage
function getSavedTheme() {
  return localStorage.getItem('theme') || 'white'; // Возвращаем сохранённую тему или дефолтную
}

// При загрузке страницы устанавливаем сохранённую тему
document.addEventListener('DOMContentLoaded', () => {
  let savedTheme = getSavedTheme();
  setTheme(savedTheme);

  // Устанавливаем активный класс для кнопки, соответствующей сохранённой теме
  let activeButton = document.querySelector(`button[data-theme="${savedTheme}"]`);
  if (activeButton) activeButton.classList.add('is_active');
});



// Обработчик для текста с анимацией hover
document.querySelectorAll('.text_roll').forEach(link => {
  let span = link.querySelector('span');
  span.dataset.hover = span.textContent;
});




