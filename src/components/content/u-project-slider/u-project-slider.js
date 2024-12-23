/* Слайдер  */
let activateProjectSliderDesk = (swiper_item) => {
  let thumbsSlider = document.querySelector('.fullscreen-modal_container');
 let slides = swiper_item.querySelectorAll('.u-project-slider__card .card--image img')


  // Находим слайдер
  let slider = swiper_item.querySelector('.u-project-slider__list');

  // Создаем элементы для пагинации и прогресс-бара
  let slider_pagination = document.createElement('div');
  slider_pagination.classList.add('u-project-slider--pagination');

  let slider_progressbar = document.createElement('div');
  slider_progressbar.classList.add('u-project-slider--progressbar');

  // Создаем контейнер для кнопок навигации
  let slider_controls = document.createElement('div');
  slider_controls.classList.add('u-project-slider-slider_controls');

  slider_controls.append(slider_progressbar);

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
    grabCursor: false,
    draggable: false,
    simulateTouch: true,
    freeMode: false,
    allowTouchMove: false,
    uniqueNavElements: true,
    loop: true,
    slidesPerView: 2.35,
    speed: 660,
    mousewheel: {
      forceToAxis: true,
    },
    effect: "creative",
    creativeEffect: {
      prev: {
        translate: ["-100%", 0, 0],
      },
      next: {
        translate: ["100%", 0, 0],
        scale: 0.8,
        opacity: 0.5,
      },
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
        // Обновляем пагинацию при инициализации
        updatePagination(this);
      },
      slideChange: function () {
        // Обновляем пагинацию и прогресс-бар при смене слайда
        updatePagination(this);
      },
    },

  });

  // Функция для обновления пагинации
  function updatePagination(swiper) {
    const currentSlide = swiper.realIndex + 1; // Текущий слайд (начинаем с 1)
    const totalSlides = swiper.slides.length; // Общее количество слайдов
    slider_pagination.textContent = `${currentSlide} OFF ${totalSlides}`;
  }

  // Добавляем пагинацию, прогресс-бар и кнопки навигации в DOM
  swiper_item.querySelector('.u-project-slider__pagination').append(slider_pagination);
  swiper_item.querySelector('.container').append(slider_controls);

  // Добавляем обработчик клавиатурных событий
  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      // Переход к предыдущему слайду
      projectSliderDesk.slidePrev();
    } else if (event.key === 'ArrowRight') {
      // Переход к следующему слайду
      projectSliderDesk.slideNext();
    }
  });


  slides.forEach((slide) => {
    let thumbSlide = document.createElement('div');
    thumbSlide.classList.add('card');

    let thumbImage = document.createElement('img');
    thumbImage.src = slide.src; // Копируем src из основного слайда
    thumbSlide.appendChild(thumbImage);

    thumbsSlider.appendChild(thumbSlide);
  });

  // Инициализация Thumbs слайдера
  const thumbsSwiper = new Swiper(thumbsSlider, {
    createElements: true,
    slideClass: 'card',
    spaceBetween: 10,
    slidesPerView: 1,
    loop: true,
    freeMode: false,
    watchSlidesProgress: true,

  });

  // Связываем Thumbs с основным слайдером
  projectSliderDesk.thumbs = {
    swiper: thumbsSwiper,
  };


// Функция для получения значения CSS-переменной
  function getCSSVariable(variableName) {
    return getComputedStyle(document.documentElement).getPropertyValue(variableName);
  }
// Функция для создания сетки квадратов внутри элемента
  function createSquareGrid(element, width, height) {
    // Получаем значение переменной
    const ritmoVerticaleVW = parseFloat(getCSSVariable('--u-ritmo-verticale-vw'));

  // Вычисляем результат
    const result = ritmoVerticaleVW * 4;
    const resultInPixels = result * (window.innerWidth / 100);
    // Вычисляем размер квадрата
    const squareSize = resultInPixels; // Умножаем на 4, как в calc(var(--u-ritmo-verticale-vw) * 4)


    // Вычисляем количество квадратов по горизонтали и вертикали
    const columns = Math.floor(width / squareSize);
    const rows = Math.floor(height / squareSize);

    // Создаем квадраты
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        const square = document.createElement('span');
        square.classList.add('square');

        // Устанавливаем позицию квадрата
        square.style.position = 'absolute';
        square.style.top = `${row * squareSize}px`;
        square.style.left = `${col * squareSize}px`;
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        // Добавляем квадрат в элемент
        element.appendChild(square);
        let timeoutId;
        square.addEventListener("mouseover", () => {
          clearTimeout(timeoutId);
          square.classList.add("active");
          timeoutId = setTimeout(() => {
            square.classList.remove("active");
          }, 400);
        });
      }
    }
  }

// Находим все элементы .card--image
  const cardImages = document.querySelectorAll('.card--image');
  document.addEventListener('DOMContentLoaded', () => {

    // Применяем функцию к каждому элементу
    cardImages.forEach((cardImage) => {
      // Устанавливаем позицию relative для элемента, чтобы квадраты были абсолютно позиционированы относительно него
      cardImage.style.position = 'relative';

      // createSquareGrid(cardImage,projectSliderDesk.slidesSizesGrid[0],projectSliderDesk.height);
    });


    // Функция для обработки наведения курсора
    function handleCardHover(card) {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect(); // Получаем размеры и позицию карточки
        const x = e.clientX - rect.left; // Позиция курсора по оси X внутри карточки
        const y = e.clientY - rect.top; // Позиция курсора по оси Y внутри карточки

        const centerX = rect.width / 2; // Центр карточки по оси X
        const centerY = rect.height / 2; // Центр карточки по оси Y

        const rotateX = (y - centerY) / 20; // Вращение по оси X (вверх/вниз)
        const rotateY = (centerX - x) / 20; // Вращение по оси Y (влево/вправо)

        // Применяем трансформацию
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });

      // Сбрасываем трансформацию при уходе курсора
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
      });
    }

// Применяем обработчик ко всем элементам .card--image
    document.querySelectorAll('.card--image').forEach(handleCardHover);

  })
};

let activateProjectSliderMob= (swiper_item) => {
    // Находим слайдер
    let slider = swiper_item.querySelector('.u-project-slider__list');

    let slider_progressbar = document.createElement('div');
    slider_progressbar.classList.add('u-project-slider--progressbar');


    // Инициализация Swiper
    const projectSliderMob = new Swiper(slider, {
        createElements: true,
        slideClass: 'card',
        grabCursor: true,
        simulateTouch: true,
        freeMode: false,
        allowTouchMove: true,
        uniqueNavElements: true,
        loop: true,
        slidesPerView: 1,
        mousewheel: {
            forceToAxis: true,
        },
        pagination: {
            el: slider_progressbar,
            type: "progressbar",
        },
    });


    // Добавляем прогресс-бар
    if (swiper_item && swiper_item.closest('.u-project-slider')) {
        swiper_item.prepend(slider_progressbar);
    }

};



let u_project_slider= document.querySelectorAll('.u-project-slider');

u_project_slider.forEach(section => {

  if (window.matchMedia('(min-width: 641px)').matches) {

    activateProjectSliderDesk(section)

  } else {
    activateProjectSliderMob(section)

  }

})
