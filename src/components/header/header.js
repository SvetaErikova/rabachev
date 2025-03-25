
// header var
let header = document.querySelector('.u-header');
let header_height = header.getBoundingClientRect().height
document.documentElement.style.setProperty('--headerHeight', `${header_height}px`)

if (window.matchMedia('(min-width: 641px)').matches)  {
  function throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  document.addEventListener('scroll', throttle(function() {
    const firstBlock = document.querySelector('main > div:first-child');
    const firstBlockRect = firstBlock.getBoundingClientRect();

    if (firstBlockRect.top < window.innerHeight && firstBlockRect.bottom >= 0) {
      header.classList.remove('is_scroll');
    } else {
      header.classList.add('is_scroll');
    }
  }, 100));

} else{
  let btn_open_menu = document.querySelector('.u-header__button-open-menu');

  btn_open_menu.addEventListener('click', () => {
    // header_menu.classList.toggle('opening_menu'); // Переключаем класс для .u-header
    document.querySelector('html').classList.toggle('opening-menu')
  });
}
