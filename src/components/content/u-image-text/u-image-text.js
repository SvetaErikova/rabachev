let activateImageTextSliderMob = (swiper_item) => {
  // Находим слайдер
  let slider = swiper_item.querySelector(".u-image-text__image");

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

  // swiper_item.querySelectorAll(".card img").forEach((img) => {
  //   img.classList.add("swiper-gl-image");
  // });
  // Инициализация Swiper
  const projectSliderMob = new Swiper(slider, {
    // modules: [SwiperGL],
    // effect: "gl",
    // gl: {
    //   shader: "morph-x",
    // },
    createElements: true,
    slideClass: "card",
    grabCursor: true,
    simulateTouch: true,
    freeMode: false,
    allowTouchMove: true,
    uniqueNavElements: true,
    slidesPerView: 1,
    spaceBetween: 8,
    mousewheel: {
      forceToAxis: true,
    },
    navigation: {
      nextEl: swiper_nav_next,
      prevEl: swiper_nav_prev,
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

  if (window.matchMedia("(min-width: 641px)").matches) {
    slider_progressbar.append(slider_pagination);
    swiper_item.querySelector(".container").append(slider_controls);
  } else {
    slider_controls.append(slider_pagination);
    slider.append(slider_controls);
  }
};
let u_image_text = document.querySelectorAll(".u-image-text");
u_image_text.forEach((section) => {
  if (window.matchMedia("(max-width: 640px)").matches) {
    activateImageTextSliderMob(section);
  }
});
