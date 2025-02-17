let stickySection = document.querySelector(".u-image-text");
if (window.matchMedia('(min-width: 641px)').matches && stickySection) {
  let stickySection = document.querySelector(".u-image-text");
  let totalStickyHeight = window.innerHeight * stickySection.querySelectorAll('.card').length;

  // Создаем триггер для stickySection
  ScrollTrigger.create({
    trigger: stickySection,
    start: "top top",
    end: () => `+=${totalStickyHeight}`,
    pin: true,
    pinSpacing: true,
  });

// Создаем временную шкалу для последовательных анимаций
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: stickySection,
      start: "top top",
      end: () => `+=${totalStickyHeight}`,
      scrub: true,
    },
  });
// Анимация для каждой карточки
  gsap.utils.toArray(".u-image-text .card:not(:first-of-type)").forEach((card) => {
    tl.to(card, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "none",
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.set(card, {
          clipPath: `polygon(
            ${gsap.utils.interpolate(40, 0, progress)}% ${gsap.utils.interpolate(25, 0, progress)}%,
            ${gsap.utils.interpolate(60, 100, progress)}% ${gsap.utils.interpolate(25, 0, progress)}%,
            ${gsap.utils.interpolate(60, 100, progress)}% ${gsap.utils.interpolate(75, 100, progress)}%,
            ${gsap.utils.interpolate(40, 0, progress)}% ${gsap.utils.interpolate(75, 100, progress)}%
          )`,
        });
      },
    });
  });
}
