// Получаем элементы
const hero = document.querySelector('.u-hero');
const gif = document.querySelector('.u-gif');

// Создаем анимацию с помощью GSAP и ScrollTrigger
gsap.to(hero, {
  scrollTrigger: {
    trigger: hero,
    start: 'bottom bottom', // Начинаем анимацию, когда верхний край .u-hero достигает верха окна просмотра
    end: 'bottom end: `+=${window.innerHeight}`,', // Заканчиваем анимацию, когда нижний край .u-hero достигает нижнего края окна просмотра
    scrub: true, // Анимация будет плавно изменяться при прокрутке
    pin: true, // Фиксируем .u-hero на месте
    pinSpacing: false, // Не добавляем отступы вокруг фиксированного блока
    markers: true,
  }
});

// Дополнительная анимация для .u-gif (если нужно)
// gsap.to(gif, {
//   scrollTrigger: {
//     trigger: gif,
//     start: 'top bottom', // Начинаем анимацию, когда верхний край .u-gif достигает нижнего края окна просмотра
//     end: 'bottom top', // Заканчиваем анимацию, когда нижний край .u-gif достигает верхнего края окна просмотра
//     scrub: true // Анимация будет плавно изменяться при прокрутке
//   },
//   y: '-100%', // Прокручиваем .u-gif вверх
//   ease: 'none' // Без плавности (для более резкого эффекта)
// });


