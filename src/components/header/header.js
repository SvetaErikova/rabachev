let btn_open_menu = document.querySelector('.u-header__button-open-menu');

btn_open_menu.addEventListener('click', () => {
  // header_menu.classList.toggle('opening_menu'); // Переключаем класс для .u-header
  document.querySelector('html').classList.toggle('opening-menu')
});
// header var
let header = document.querySelector('.u-header');
let header_height = header.getBoundingClientRect().height
document.documentElement.style.setProperty('--headerHeight', `${header_height}px`)
