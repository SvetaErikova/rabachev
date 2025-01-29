function modalImage(section) {
  const modal = document.getElementById('fullscreen-modal');
  const modalContainer = modal.querySelector('.fullscreen-modal_container');
  const modalPicture = modalContainer.querySelector('picture');

  const modalImg = document.createElement('img');
  const modalSources = modalPicture.querySelectorAll('source');

  const closeBtn = modal.querySelector('.close');

  section.querySelectorAll('.card__image').forEach(imgContainer => {
    const btn = document.createElement('div');
    btn.classList.add('btn-full-img');
    btn.textContent = 'click to open';
    imgContainer.append(btn);

    btn.addEventListener('click', () => {
      // Получаем изображение и source из карточки
      const cardImg = imgContainer.querySelector('img');
      const cardSources = imgContainer.querySelectorAll('source');

      // Очищаем существующие source в модальном окне
      modalPicture.innerHTML = '';


      // Добавляем только source с разрешением 1640
      cardSources.forEach(cardSource => {
        if (cardSource.srcset.includes('1640')) {
          const newSource = document.createElement('source');
          newSource.srcset = cardSource.srcset;
          newSource.type = cardSource.type;
          newSource.media = cardSource.media;
          modalPicture.appendChild(newSource);
        }
      });
      modalPicture.append(modalImg)
      // Устанавливаем изображение для модального окна
      modalImg.src = cardImg.src.replace('960', '1640'); // Заменяем 960 на 1640 в src
      console.log(cardImg.src.replace('960', '1640'))
      // Открываем модальное окно
      modal.classList.add('is_active');
    });
  });


// Закрываем модальное окно при клике на крестик
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('is_active');
    modalPicture.innerHTML = ''
  });
// Закрываем модальное окно при клике вне изображения
  modal.addEventListener('click', (e) => {
    if (e.target !== modalContainer.querySelector('img')) {
      modal.classList.remove('is_active');
      modalPicture.innerHTML = '';
    }
  });
}

