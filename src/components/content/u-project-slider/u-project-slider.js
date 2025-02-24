let activateProjectSliderDesk = (swiper_item) => {


  // Находим слайдер
  let slider = swiper_item.querySelector('.u-project-slider__list');

  // Создаем элементы для пагинации и прогресс-бара
  let slider_pagination = document.createElement('div');
  slider_pagination.classList.add('slider--pagination');
  let slider_progressbar = document.createElement('div');
  slider_progressbar.classList.add('slider--progressbar');
  let slider_controls = document.createElement('div');
  slider_controls.classList.add('slider_controls');
  slider_controls.append(slider_progressbar);

  // Создаем кнопки навигации
  let swiper_nav_prev = document.createElement('div');
  swiper_nav_prev.classList.add('swiper--prev');
  slider_controls.append(swiper_nav_prev);
  let swiper_nav_next = document.createElement('div');
  swiper_nav_next.classList.add('swiper--next');
  slider_controls.append(swiper_nav_next);

  // Проверяем ширину экрана
  const isMobile = window.matchMedia('(max-width: 640px)').matches;

  // Инициализация thumbs слайдера только для десктопов
  let thumbs = null;
  if (!isMobile) {
    // Создаем контейнер для thumbs
    let thumbsContainer = document.createElement('div');
    thumbsContainer.classList.add('u-project-slider__list-thumbs');
    let thumbsWrapper = document.createElement('div');
    thumbsWrapper.classList.add('swiper-wrapper');
    thumbsContainer.appendChild(thumbsWrapper);

    // Копируем слайды для thumbs
    let slides = slider.querySelectorAll('.card');
    slides.forEach((slide, index) => {
      let thumbSlide = document.createElement('div');
      thumbSlide.classList.add('swiper-slide');
      let thumbImage = slide.querySelector('.card__image img').cloneNode(true);
      thumbSlide.appendChild(thumbImage);
      thumbsWrapper.appendChild(thumbSlide);
    });

    // Добавляем thumbs контейнер в swiper_item.querySelector('.container')
    swiper_item.querySelector('.container').appendChild(thumbsContainer);

    // Инициализация thumbs слайдера
    thumbs = new Swiper(thumbsContainer, {
      spaceBetween: 24,
      slidesPerView: 2.5,
      freeMode: true,
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      speed: 2000,

    });
  }
  swiper_item.querySelectorAll('.card .card__image img').forEach(img => {
    img.classList.add('swiper-gl-image');
  });
  // Инициализация основного слайдера
  const projectSliderDesk = new Swiper(slider, {
    modules: [SwiperGL],
    effect: 'gl',
    // SwiperGL module parameters
    gl: {
      // specify required shader effect
      shader: 'morph-x',
    },
    createElements: true,
    slideClass: 'card',
    grabCursor: true,
    draggable: true,
    simulateTouch: true,
    freeMode: false,
    loop: true,
    slidesPerView: 1,
    loopAdditionalSlides: 10,
    loopPreventsSliding: false,
    spaceBetween: 8, // Отключаем стандартные отступы
    speed: 660,
    mousewheel: {
      forceToAxis: true,
    },
    navigation: {
      nextEl: swiper_nav_next,
      prevEl: swiper_nav_prev,
    },
    pagination: {
      el: slider_progressbar,
      type: "progressbar",
    },
    thumbs: isMobile ? null : { // Подключаем thumbs только для десктопов
      swiper: thumbs,
    },
    on: {
      init: function () {
        updatePagination(this); // Обновление пагинации
      },
      slideChange: function () {
        updatePagination(this); // Обновление пагинации
      },
    },
  });

  // Функция для обновления пагинации
  function updatePagination(swiper) {
    const currentSlide = swiper.realIndex + 1; // Текущий слайд (начинаем с 1)
    const totalSlides = swiper.slides.length; // Общее количество слайдов
    slider_pagination.textContent = `${currentSlide} OFF ${totalSlides}`;
  }

  slider_progressbar.append(slider_pagination);
  swiper_item.querySelector('.container').append(slider_controls);
};

// Инициализация всех слайдеров на странице
let u_project_slider = document.querySelectorAll('.u-project-slider');
u_project_slider.forEach(section => {
  activateProjectSliderDesk(section);
});
