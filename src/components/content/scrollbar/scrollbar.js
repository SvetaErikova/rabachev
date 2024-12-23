if (window.matchMedia('(min-width: 641px)').matches) {
    document.addEventListener('DOMContentLoaded', function () {
        let progressBar = document.querySelector('.scrollbar__progress');
        let progressValue = document.querySelector('.scrollbar__value');
        window.addEventListener('scroll', function () {
            let scrollTop = window.scrollY || window.pageYOffset; // Текущая прокрутка
            let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight; // Общая высота прокрутки
            let progress = (scrollTop / scrollHeight) * 100; // Процент прокрутки

            // Обратная механика: вычитаем процент прокрутки из 100
            let reverseProgress = 100 - progress;
            progressBar.style.height = reverseProgress + '%'; // Устанавливаем высоту прогресс-бара
            progressValue.textContent = Math.round(reverseProgress) + '%'; // Устанавливаем текст процентов
        });
    });
}
