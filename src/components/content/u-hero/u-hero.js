let activateProjectSliderMob= (swiper_item) => {
  // Находим слайдер
  let slider = swiper_item.querySelector('.u-hero__list');

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
    spaceBetween: 8,
    mousewheel: {
      forceToAxis: true,
    },
    pagination: {
      el: slider_progressbar,
      type: "progressbar",
    },
  });


  // Добавляем прогресс-бар
  if (swiper_item && swiper_item.closest('.u-hero')) {
    swiper_item.prepend(slider_progressbar);
  }

};

let u_hero= document.querySelectorAll('.u-hero');

u_hero.forEach(section => {

  if (window.matchMedia('(max-width: 641px)').matches) {

    activateProjectSliderMob(section)

    document.addEventListener('DOMContentLoaded', function() {
      let heroList = document.querySelector('.u-hero__list');

      function stopAnimation() {
        // Завершаем анимацию после текущего цикла
        heroList.style.animationIterationCount = '1';
        heroList.style.animationFillMode = 'forwards'; // Останавливаем анимацию на последнем кадре
        heroList.removeEventListener('click', stopAnimation); // Удаляем слушатель события
      }

      heroList.addEventListener('click', stopAnimation);
    });

  } else {
    modalImage(section)
  }


})

// анимация карточек на декстопе

document.addEventListener("DOMContentLoaded", () => {
  if (window.matchMedia('(min-width: 641px)').matches) {

    let cards = document.querySelectorAll(".u-hero__card:nth-child(n+3)");
    let title = document.querySelector(".u-hero__title"); // Находим элемент с заголовком
    let heroBlock = document.querySelector(".u-hero"); // Находим блок .u-hero

// Функция для инициализации анимаций
    function initAnimations() {
      // Анимация для карточек
      cards.forEach((card, index) => {
        // Разная скорость для каждой карточки
        let speed = 0.3 + Math.random() * 1; // Случайная скорость от 0.5 до 1.5
        let initialY = 50 + Math.random() * 300; // Случайное начальное смещение вниз от 50 до 150 пикселей

        gsap.fromTo(card, {
          y: initialY, // Случайное начальное смещение вниз
          opacity: 0.5,
          scale: 0.7
        }, {
          y: 0, // Конечное положение
          opacity: 1,
          scale: 1,
          duration: speed, // Случайная скорость
          scrollTrigger: {
            trigger: card,
            start: "top 80%", // Анимация начинается, когда карточка на 80% в видимой области
            end: "bottom 50%", // Анимация заканчивается, когда карточка на 20% в видимой области
            toggleActions: "play none reverse none",
            scrub: true, // Плавное следование за прокруткой в обе стороны
            markers: false, // Включите маркеры для отладки
          },
        });
      });

      // Анимация для заголовка, привязанная к скроллу блока .u-hero
      gsap.fromTo(title, {
        scale: 1, // Начальный масштаб
      }, {
        scale: 5, // Конечный масштаб
        scrollTrigger: {
          trigger: heroBlock, // Привязываем анимацию к блоку .u-hero
          start: "top top", // Анимация начинается, когда верхняя граница .u-hero вверху экрана
          end: "bottom top", // Анимация заканчивается, когда нижняя граница .u-hero вверху экрана
          scrub: true, // Плавное следование за прокруткой в обе стороны
          markers: true, // Включите маркеры для отладки
        },
      });
    }

// Инициализация анимаций при загрузке страницы
    initAnimations();

// Обновление ScrollTrigger после загрузки страницы
    ScrollTrigger.refresh();

// Дополнительно: обновление анимаций при изменении размера окна
    window.addEventListener("resize", () => {
      ScrollTrigger.refresh();
    });
  }
});
