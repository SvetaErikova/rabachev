// Обработчик для полноэкранного просмотра изображений

function modalImage(section){
  let modal = document.getElementById('fullscreen-modal'),
    modal_container = modal.querySelector('.fullscreen-modal_container')

  let closeBtn = document.querySelector('.close');

  section.querySelectorAll('.card__image').forEach(imgContainer => {
    let btn = document.createElement('div');
    btn.classList.add('btn-full-img');
    btn.textContent = 'click to open'
    imgContainer.append(btn)
    let img = document.createElement('img')

    btn.addEventListener('click', () => {
      modal.classList.add('is_active');
      let img_card = btn.parentElement.querySelector('img').src,
        img = document.createElement('img');
      img.src = img_card
      modal_container.append(img)
    });

    // Закрываем модальное окно при клике на крестик
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('is_active');
      modal_container.innerHTML = ''
    });


  });



}


