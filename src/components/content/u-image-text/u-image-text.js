let activateImageTextSliderMob = (swiper_item) => {
  // Находим слайдер
  let slider = swiper_item.querySelector('.u-image-text__image');

  let slider_controls = document.createElement('div');
  slider_controls.classList.add('slider_controls');

  // Создаем кнопки навигации
  let swiper_nav_prev = document.createElement('div');
  swiper_nav_prev.classList.add('swiper--prev');
  slider_controls.append(swiper_nav_prev);

  let swiper_nav_next = document.createElement('div');
  swiper_nav_next.classList.add('swiper--next');
  slider_controls.append(swiper_nav_next);

  swiper_item.querySelectorAll('.card img').forEach(img => {
    img.classList.add('swiper-gl-image');
  });
  // Инициализация Swiper
  const projectSliderMob = new Swiper(slider, {
    modules: [SwiperGL],
    effect: 'gl',
    gl: {
      shader: 'morph-x',
    },
    createElements: true,
    slideClass: 'card',
    grabCursor: true,
    simulateTouch: true,
    freeMode: false,
    allowTouchMove: true,
    uniqueNavElements: true,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 8,
    mousewheel: {
      forceToAxis: true,
    },
    navigation: {
      nextEl: swiper_nav_next,
      prevEl: swiper_nav_prev,
    },
    lazy: {
      loadPrevNext: true,
      loadPrevNextAmount: 2
    },
  });

  // Добавляем прогресс-бар
  if (swiper_item && swiper_item.closest('.u-image-text')) {
    swiper_item.querySelector('.u-image-text__note').append(slider_controls);
  }
  // Массив с текстами для каждого слайда
  const slideTexts = [
    "Disposable in the Vasileostrovskaya metro station in Saint Petersburg",
    "He is a firm believer in the need to give contemporary photography a new look and pursues his goals day after day.",
    "Results and exhibitions"
  ];
  // Находим элемент для отображения текста
  const noteTextElement = swiper_item.querySelector('.u-image-text__note div p');

  // Обновляем текст при изменении слайда
  projectSliderMob.on('slideChange', function () {
    const activeIndex = projectSliderMob.realIndex; // Получаем индекс активного слайда
    noteTextElement.textContent = slideTexts[activeIndex]; // Обновляем текст
  });

  // Инициализация текста для первого слайда
  noteTextElement.textContent = slideTexts[0];

};
let u_image_text= document.querySelectorAll('.u-image-text');
u_image_text.forEach(section => {
  if (window.matchMedia('(max-width: 640px)').matches) {
    activateImageTextSliderMob(section)
  }
})
