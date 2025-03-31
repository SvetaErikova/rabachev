function preloaderStart() {
  let preloader = document.querySelector(".preloader");
  let preloaderLogo = preloader.querySelector(".preloader__logo");
  let preloaderLine = preloader.querySelector(".preloader__line");

  // Начальное состояние
  gsap.set(preloaderLine, {
    width: "0%",
    right: "0",
    left: "auto",
    transformOrigin: "right center",
  });

  // Кастомная кривая Безье для линии (ease: "power2.out" с модификацией)
  let customBezier = "M0,0 C0.33,0 0.44,0.5 0.66,0.7 0.88,0.9 1,1 1,1";
  let tl = gsap.timeline();
  // Анимация логотипа
  tl.to(
    preloaderLogo,
    {
      scale: 1.3,
      opacity: 1,
      filter: "blur(0px)",
      duration: 2,
      ease: "power2.out",
    },
    "start",
  );

  // Анимация линии с кастомной кривой Безье
  tl.to(
    preloaderLine,
    {
      width: "100%",
      duration: 2,
      ease: customBezier,
      onStart: () => {
        // Небольшая вибрация в середине анимации
        gsap.to(preloaderLine, {
          duration: 0.2,
          repeat: 1,
          yoyo: true,
          delay: 0.9,
        });
      },
    },
    "start",
  );

  // Финальная последовательность
  tl.call(() => {
    function preloaderAfterLoad() {
      gsap.to(preloader, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          preloader.style.display = "none";
          document.querySelector(".is_loading")?.classList.remove("is_loading");
        },
      });
    }

    function checkPageLoad() {
      if (document.readyState === "complete") {
        // Финальная анимация линии
        gsap.to(preloaderLine, {
          height: "100%",
          scale: 1.2,
          duration: 1,
          ease: "back.out(1.2)",
          onComplete: preloaderAfterLoad,
        });
      } else {
        window.addEventListener("load", () => {
          gsap.to(preloaderLine, {
            height: "100%",
            scale: 1.2,
            duration: 0.4,
            ease: "back.out(1.2)",
            onComplete: preloaderAfterLoad,
          });
        });
      }
    }
    checkPageLoad();
  });

  // Прокрутка страницы вверх
  setTimeout(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, 300);
}

// Прокрутка страницы вверх
setTimeout(() => {
  preloaderStart();
}, 500); // Учитываем задержку старта
