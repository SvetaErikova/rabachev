let activateProcessSlider = (swiper_item) => {
  // Находим слайдер
  let slider = swiper_item.querySelector('.u-process-slider__list');

  // Создаем элементы для пагинации и прогресс-бара
  let slider_pagination = document.createElement('div');
  slider_pagination.classList.add('slider--pagination');

  let slider_progressbar = document.createElement('div');
  slider_progressbar.classList.add('slider--progressbar');
  console.log(slider_pagination)

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

  // Инициализация Swiper
  const processSliderDesk = new Swiper(slider, {
    createElements: true,
    slideClass: 'card',
    grabCursor: true,
    simulateTouch: true,
    freeMode: false,
    allowTouchMove: true,
    uniqueNavElements: true,
    loop: true,
    slidesPerView: 3,
    spaceBetween: 8, // Отключаем стандартные отступы
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
  slider_progressbar.append(slider_pagination);
  swiper_item.querySelector('.container').append(slider_controls);

};





let u_process_slider= document.querySelectorAll('.u-process-slider');

u_process_slider.forEach(section => {
  activateProcessSlider(section)

})
