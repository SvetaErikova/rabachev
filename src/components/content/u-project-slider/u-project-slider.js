/* Слайдер  */
let activateProjectSliderDesk = (swiper_item) => {
  // Находим слайдер
  let slider = swiper_item.querySelector('.u-project-slider__list');

  // Создаем элементы для пагинации и прогресс-бара
  let slider_pagination = document.createElement('div');
  slider_pagination.classList.add('u-project-slider--pagination');

  let slider_progressbar = document.createElement('div');
  slider_progressbar.classList.add('u-project-slider--progressbar');


  let slider_controls = document.createElement('div');
  slider_controls.classList.add('u-project-slider-slider_controls');


  slider_controls.append(slider_progressbar);
  slider_progressbar.append(slider_pagination);

  // Создаем кнопки навигации
  let swiper_nav_prev = document.createElement('div');
  swiper_nav_prev.classList.add('swiper--prev');
  slider_controls.append(swiper_nav_prev);

  let swiper_nav_next = document.createElement('div');
  swiper_nav_next.classList.add('swiper--next');
  slider_controls.append(swiper_nav_next);

  // Инициализация Swiper
  const projectSliderDesk = new Swiper(slider, {
    createElements: true,
    slideClass: 'card',
    grabCursor: true,
    draggable: true,
    simulateTouch: true,
    freeMode: false,
    loop: true,
    slidesPerView: 2.5,
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
    on: {
      init: function () {
        updatePagination(this); // Обновление пагинации
      },
      slideChange: function () {

        updatePagination(this); // Обновление пагинации
      },
    },
  });
  // swiper.update();
  // Функция для обновления пагинации
  function updatePagination(swiper) {
    const currentSlide = swiper.realIndex + 1; // Текущий слайд (начинаем с 1)
    const totalSlides = swiper.slides.length; // Общее количество слайдов
    slider_pagination.textContent = `${currentSlide} OFF ${totalSlides}`;
  }

  swiper_item.querySelector('.container').append(slider_controls);

};





let u_project_slider= document.querySelectorAll('.u-project-slider');

u_project_slider.forEach(section => {

  if (window.matchMedia('(min-width: 641px)').matches) {

    activateProjectSliderDesk(section)

  } else {
    activateProjectSliderMob(section)

  }

})
