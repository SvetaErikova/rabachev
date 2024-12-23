let burger = document.querySelector('.u-header__burger');
let header_menu = document.querySelector('.u-header__menu');

burger.addEventListener('click', () => {
  // header_menu.classList.toggle('opening_menu'); // Переключаем класс для .u-header
  document.querySelector('html').classList.toggle('opening-menu')
});
// header var
let header = document.querySelector('.u-header');
window.addEventListener('load', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`)

  let scrollbar_width = window.innerWidth - document.documentElement.clientWidth
  document.documentElement.style.setProperty('--scrollbarWidth', `${scrollbar_width}px`)

  let header_height = header.getBoundingClientRect().height
  document.documentElement.style.setProperty('--headerHeight', `${header_height}px`)

  if (window.matchMedia('(min-width: 641px)').matches) {
    window.addEventListener('scroll', function() {
      if (window.scrollY >= header_height) {
        header.classList.add('is_scrolled');
      } else {
        header.classList.remove('is_scrolled');
      }
    });
  }
});
