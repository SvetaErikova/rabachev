function animationGifDesk() {
  const hero = document.querySelector(".u-hero__container");

  // Создаем анимацию с помощью GSAP и ScrollTrigger
  gsap.to(hero, {
    scrollTrigger: {
      trigger: hero,
      start: "bottom bottom",
      end: "bottom end: `+=${window.innerHeight}`,",
      scrub: true, // Анимация будет плавно изменяться при прокрутке
      pin: true, // Фиксируем .u-hero на месте
      pinSpacing: false, // Не добавляем отступы вокруг фиксированного блока
      // markers: true,
    },
  });
}
function animationGifMob() {
  const hero = document.querySelector(".u-hero__container");

  gsap.to(hero, {
    scrollTrigger: {
      trigger: hero,
      start: "top top",
      end: "bottom end: `+=${window.innerHeight}`,",
      scrub: true,
      pin: true,
      pinSpacing: false,
      // markers: true,
    },
  });
  gsap.fromTo(
    ".u-gif__title",
    { bottom: "85%" },
    {
      bottom: "0%",
      scrollTrigger: {
        trigger: ".u-gif",
        start: "top 80%",
        end: `bottom top`,
        scrub: true,
        markers: false,
      },
    },
  );
}

if (window.matchMedia("(min-width: 641px)").matches) {
  animationGifDesk();
} else {
  animationGifMob();
}
