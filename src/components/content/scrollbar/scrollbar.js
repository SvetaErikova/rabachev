function scrollbarHero() {
  let progressBar = document.querySelector(".scrollbar__progress");
  let progressValue = document.querySelector(".scrollbar__value");
  let heroBlock = document.querySelector(".u-hero"); // Находим блок u-hero
  let heroHeight = heroBlock.offsetHeight; // Высота блока u-hero

  window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY || window.pageYOffset; // Текущая прокрутка

    // Вычисляем прогресс: насколько блок "прокрутился" вниз
    let progress = (scrollTop / heroHeight) * 100;

    // Ограничиваем прогресс в пределах от 0 до 100
    progress = Math.max(0, Math.min(100, progress));

    // Обратная механика: вычитаем процент прокрутки из 100
    let reverseProgress = 100 - progress;
    progressBar.style.height = reverseProgress + "%"; // Устанавливаем высоту прогресс-бара
    progressValue.textContent = Math.round(reverseProgress) + "%"; // Устанавливаем текст процентов
  });
}
