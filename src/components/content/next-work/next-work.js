if (window.matchMedia('(min-width: 641px)').matches) {
  let progress_link = document.querySelector('.next-work');
  let progress = 0;
  let interval;

  function updateProgress(step) {
    if (interval) {
      clearInterval(interval);
    }

    interval = setInterval(() => {
      progress += step;
      progress_link.style.setProperty('--progressValue', `${progress}%`);

      if ((step > 0 && progress >= 100) || (step < 0 && progress <= 0)) {
        clearInterval(interval);
        interval = null;
        if (step > 0) {
          window.location.href = progress_link.href;
        }
      }
    }, 30);
  }

  progress_link.addEventListener('mouseenter', () => updateProgress(1));
  progress_link.addEventListener('mouseleave', () => updateProgress(-1));

}
