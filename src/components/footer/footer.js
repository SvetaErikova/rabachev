// function gsapScroll(){
//   //  gsap scroll
//   gsap.to(".panel", {
//     yPercent: -100,
//     ease: "none",
//     stagger: 0.5,
//     scrollTrigger: {
//       trigger: ".ritmo-scrolling__container",
//       pinnedContainer: ".ritmo-scrolling__container",
//       start: "top top",
//       end: `+=${window.innerHeight }`,
//       scrub: true,
//       pin: true,
//       markers: false,
//       pinSpacing: true,
//     }
//   });
//   gsap.set(".panel", {zIndex: (i, target, targets) => targets.length - i});
// }
// if (window.matchMedia("(min-width: 641px)").matches) {
//   gsapScroll()
// }

let footer_height = document.querySelector('.footer').getBoundingClientRect().height
document.documentElement.style.setProperty('--footerHeight', `${footer_height}px`)
//
// // Анимация для блока .u-image-text
// gsap.fromTo(".u-image-text", {
//   y: 0, // Смещаем блок вверх на высоту футера
//   },{
//   y: -footer_height, // Смещаем блок вверх на высоту футера
//   scrollTrigger: {
//     trigger: ".footer", // Триггер - блок .footer
//     start: "center bottom", // Анимация начнется, когда верх футера достигнет низа экрана
//     end: "bottom bottom", // Анимация закончится, когда низ футера достигнет низа экрана
//     scrub: true, // Плавное выполнение анимации при скролле
//     markers: false,
//   },
// });
