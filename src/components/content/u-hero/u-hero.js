
let activateHeroSliderMob = (swiper_item) => {
  swiper_item.querySelectorAll('.u-hero__card .card__image img').forEach(img => {
    img.classList.add('swiper-gl-image');
  });
  // Находим слайдер
  let slider = swiper_item.querySelector('.u-hero__list');
  let slider_progressbar = document.createElement('div');
  slider_progressbar.classList.add('u-hero-slider--progressbar');


  // Инициализация Swiper
  const HeroSliderMob = new Swiper(slider, {
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

// Функция для инициализации анимаций
function initAnimations() {
  let cards = document.querySelectorAll(".u-hero__card:nth-child(n+3)");
  let title = document.querySelector(".u-hero__title"); // Находим элемент с заголовком
  let heroBlock = document.querySelector(".u-hero"); // Находим блок .u-hero

  // Анимация для карточек
  cards.forEach((card, index) => {
    // Разная скорость для каждой карточки
    let speed = 0.3 + Math.random() * 1; // Случайная скорость от 0.5 до 1.5
    gsap.fromTo(card, {
      scale: 0.7,
      y: -250,
    }, {
      y: 0,
      scale: 1,
      duration: speed, // Случайная скорость
      scrollTrigger: {
        trigger: card,
        start: "top 80%", // Анимация начинается, когда карточка на 80% в видимой области
        end: "80% 60%", // Анимация заканчивается, когда карточка на 20% в видимой области
        toggleActions: "play none reverse none",
        scrub: true, // Плавное следование за прокруткой в обе стороны
        markers: false, // Включите маркеры для отладки
        onStart: () => {
          document.querySelector('.pin-spacer').style.zIndex = 3;
        }
      },
    });
  });

  // Анимация для заголовка, привязанная к скроллу блока .u-hero
  gsap.fromTo(title, {
    scale: 2,
    x: '-50%',
    opacity: '15%',
  }, {
    scale: 1,
    x: '0%',
    opacity: '100%',
    scrollTrigger: {
      trigger: heroBlock, // Привязываем анимацию к блоку .u-hero
      start: "top top", // Анимация начинается, когда верхняя граница .u-hero вверху экрана
      end: "bottom top", // Анимация заканчивается, когда нижняя граница .u-hero вверху экрана
      scrub: true, // Плавное следование за прокруткой в обе стороны
      markers: false, // Включите маркеры для отладки
    },
  });
}
function switchTheme(){
// Обработчик для кнопок переключения темы комп
  if (window.matchMedia('(min-width: 641px)').matches) {
    document.querySelectorAll('button[data-theme]').forEach(btn => {
      btn.addEventListener('click', e => {
        let selectedTheme = e.currentTarget.dataset.theme;
        setTheme(selectedTheme); // Устанавливаем выбранную тему

        // Убираем активный класс у всех кнопок и добавляем его к текущей
        document.querySelectorAll('button[data-theme]').forEach(t => {
          t.classList.toggle('is_active', t === e.currentTarget);
        });
      });
    });
  } else{
    // Обработчик для кнопок переключения темы моб

    // Функция для получения следующей темы
    function getNextTheme(currentTheme) {
      let themes = ['white', 'dark', 'color'];
      let currentIndex = themes.indexOf(currentTheme);
      let nextIndex = (currentIndex + 1) % themes.length; // Переход к следующей теме по кругу
      return themes[nextIndex];
    }
    // Обработчик клика на кнопку
    document.querySelector('.u-hero__btn-theme').addEventListener('click', function() {
      let currentTheme = document.body.dataset.theme;
      let nextTheme = getNextTheme(currentTheme);
      setTheme(nextTheme); // Устанавливаем следующую тему
    });
  }
}





let u_hero= document.querySelectorAll('.u-hero');

u_hero.forEach(section => {
  switchTheme()
  if (window.matchMedia('(max-width: 640px)').matches) {
    activateHeroSliderMob(section)
      let heroList = document.querySelector('.u-hero__list');
      function stopAnimation() {
        // Завершаем анимацию после текущего цикла
        heroList.style.animationIterationCount = '1';
        heroList.style.animationFillMode = 'forwards'; // Останавливаем анимацию на последнем кадре
        heroList.removeEventListener('pointerdown', stopAnimation); // Удаляем слушатель события
      }
      heroList.addEventListener('pointerdown', stopAnimation);

  } else {
    initAnimations();

    modalImage(section)
    // Обработчик для кнопок переключения сетки
    document.querySelectorAll('button[data-grid]').forEach(btn => {
      btn.addEventListener('click', e => {
        let gridState = e.currentTarget.dataset.grid === 'ON' ? 'OFF' : 'ON';
        e.currentTarget.dataset.grid = gridState;
        section.dataset.grid = gridState;
      });
    });

    document.addEventListener('DOMContentLoaded', function () {
      scrollbarHero()
      GradientsBack()
    });
  }
})
