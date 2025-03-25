
function animationGif(){
  const hero = document.querySelector('.u-hero__container');

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
}

if (window.matchMedia('(min-width: 641px)').matches) {
  animationGif()

}
