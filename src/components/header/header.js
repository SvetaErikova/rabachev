
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

  const hero = document.querySelector('.u-hero').clientHeight;
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    // Если прокрутили ниже hero-секции, включаем логику скрытия/показа
    if (currentScroll > hero) {
      if (currentScroll > lastScroll) {
        // Скролл вниз — скрываем хедер
        header.classList.add('is_scroll');
      } else if (currentScroll < lastScroll) {
        // Скролл вверх — показываем хедер
        header.classList.remove('is_scroll');
      }
    } else {
      // Если мы выше hero-секции, всегда показываем хедер
      header.classList.remove('is_scroll');
    }
    lastScroll = currentScroll;
  });
}
