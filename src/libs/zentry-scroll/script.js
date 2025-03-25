function zentryScroll() {
  let stickySection = document.querySelector(".u-image-text")
  if (window.matchMedia('(min-width: 641px)').matches && stickySection) {
    let totalStickyHeight = window.innerHeight * stickySection.querySelectorAll('.card').length, cards = gsap.utils.toArray(".u-image-text .card:not(:first-of-type)"), textElements = gsap.utils.toArray(".u-image-text__note .-desk p");

// Создаем временную шкалу для последовательных анимаций
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: stickySection, start: "top top", end: () => `+=${totalStickyHeight}`, scrub: true, markers: true, pin: true,
      },
    });
// Анимация для каждой карточки
    gsap.utils.toArray(".u-image-text .card:not(:first-of-type)").forEach((card, index) => {
      // Анимация для картинок
      tl.to(card, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", ease: "none",

        onUpdate: function () {
          const progress = this.progress;
          gsap.set(card, {
            clipPath: `polygon(
          ${40 - progress * 40}% ${25 - progress * 25}%,
          ${60 + progress * 40}% ${25 - progress * 25}%,
          ${60 + progress * 40}% ${75 + progress * 25}%,
          ${40 - progress * 40}% ${75 + progress * 25}%
        )`,
          });
        },
      });

      // Анимация для текста
      const text = textElements[index]; // Используем index из forEach

      if (text) {
        tl.to(text, {
          y: -50, // Смещение текста вверх
          opacity: 0, // Исчезновение текста
          ease: "none",
        }, "<"); // Начинается одновременно с анимацией картинки

        // Появление следующего текста
        const nextText = textElements[index + 1]; // Следующий элемент текста
        if (nextText) {
          tl.fromTo(nextText, {
            y: '1em', // Начальное смещение следующего текста
            opacity: 0, // Начальная прозрачность
          }, {
            y: 0, // Конечное положение текста
            opacity: 1, // Появление текста
            ease: "none",
          }, "<"); // Начинается одновременно с предыдущей анимацией
        }
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", (event) => {
zentryScroll()
});
