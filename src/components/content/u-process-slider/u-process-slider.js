let activateProcessSlider = (swiper_item) => {
  // Находим слайдер
  let slider = swiper_item.querySelector(".u-process-slider__list");

  // Создаем элементы для пагинации и прогресс-бара
  let slider_pagination = document.createElement("div");
  slider_pagination.classList.add("slider--pagination");

  let slider_progressbar = document.createElement("div");
  slider_progressbar.classList.add("slider--progressbar");

  let slider_controls = document.createElement("div");
  slider_controls.classList.add("slider_controls");

  slider_controls.append(slider_progressbar);

  // Создаем кнопки навигации
  let swiper_nav_prev = document.createElement("div");
  swiper_nav_prev.classList.add("swiper--prev");
  slider_controls.append(swiper_nav_prev);

  let swiper_nav_next = document.createElement("div");
  swiper_nav_next.classList.add("swiper--next");
  slider_controls.append(swiper_nav_next);

  // Инициализация Swiper
  if (window.matchMedia("(min-width: 641px)").matches) {
    const processSliderDesk = new Swiper(slider, {
      createElements: true,
      slideClass: "card",
      slidesPerView: 1,
      spaceBetween: 32,
      initialSlide: 1,
      loop: true,
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
      breakpoints: {
        640: {
          slidesPerView: 2.5,
          spaceBetween: 8,
        },
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
  } else {
    swiper_item.querySelectorAll(".card .card__image img").forEach((img) => {
      img.classList.add("swiper-gl-image");
    });
    const processSliderMob = new Swiper(slider, {
      modules: [SwiperGL],
      effect: "gl",
      // SwiperGL module parameters
      gl: {
        // specify required shader effect
        shader: "morph-x",
      },
      createElements: true,
      slideClass: "card",
      slidesPerView: 1,
      spaceBetween: 32,
      initialSlide: 1,
      mousewheel: {
        forceToAxis: true,
      },
      navigation: {
        nextEl: swiper_nav_next,
        prevEl: swiper_nav_prev,
      },
      breakpoints: {
        640: {
          slidesPerView: 2.5,
          spaceBetween: 8,
        },
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
  }

  // Инициализация Swiper

  // Функция для обновления пагинации
  function updatePagination(swiper) {
    const currentSlide = swiper.realIndex + 1; // Текущий слайд (начинаем с 1)
    const totalSlides = swiper.slides.length; // Общее количество слайдов
    slider_pagination.textContent = `${currentSlide} OFF ${totalSlides}`;
  }
  if (window.matchMedia("(min-width: 641px)").matches) {
    slider_progressbar.append(slider_pagination);
    swiper_item.querySelector(".container").append(slider_controls);
  } else {
    slider_controls.append(slider_pagination);
    slider.append(slider_controls);
  }
};

let u_process_slider = document.querySelectorAll(".u-process-slider");
u_process_slider.forEach((section) => {
  activateProcessSlider(section);
});
