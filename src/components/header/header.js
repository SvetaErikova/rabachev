let btn_open_menu = document.querySelector('.u-header__button-open-menu');
let header_menu = document.querySelector('.u-header__menu');

btn_open_menu.addEventListener('click', () => {
  // header_menu.classList.toggle('opening_menu'); // Переключаем класс для .u-header
  document.querySelector('html').classList.toggle('opening-menu')
});
// header var
let header = document.querySelector('.u-header');
window.addEventListener('load', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`)

  let header_height = header.getBoundingClientRect().height
  document.documentElement.style.setProperty('--headerHeight', `${header_height}px`)

  // if (window.matchMedia('(max-width: 640px)').matches) {
  //   window.addEventListener('scroll', function() {
  //     if (window.scrollY >= header_height) {
  //       header.classList.add('is_scrolled');
  //     } else {
  //       header.classList.remove('is_scrolled');
  //     }
  //   });
  // }
});
