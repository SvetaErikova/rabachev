function modalImage(section) {
  let modal = document.getElementById("fullscreen-modal");
  let modalContainer = modal.querySelector(".fullscreen-modal_container");
  let modalPicture = modalContainer.querySelector("picture");

  let modalImg = document.createElement("img");

  let closeBtn = modal.querySelector(".close");

  section.querySelectorAll(".card__image").forEach((imgContainer) => {
    let btn = document.createElement("div");
    btn.classList.add("btn-full-img");
    btn.textContent = "click to open";
    imgContainer.append(btn);

    btn.addEventListener("click", () => {
      // Получаем изображение и source из карточки
      let cardImg = imgContainer.querySelector("img");
      let cardSources = imgContainer.querySelectorAll("source");

      // Очищаем существующие source в модальном окне
      modalPicture.innerHTML = "";

      // Добавляем только source с разрешением 1640
      cardSources.forEach((cardSource) => {
        if (cardSource.srcset.includes("1640")) {
          let newSource = document.createElement("source");
          newSource.srcset = cardSource.srcset;
          newSource.type = cardSource.type;
          newSource.media = cardSource.media;
          modalPicture.appendChild(newSource);
        }
      });
      modalPicture.append(modalImg);
      // Устанавливаем изображение для модального окна
      modalImg.src = cardImg.src.replace("960", "1640"); // Заменяем 960 на 1640 в src
      console.log(cardImg.src.replace("960", "1640"));
      // Открываем модальное окно
      modal.classList.add("is_active");
    });
  });

  // Закрываем модальное окно при клике на крестик
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("is_active");
    modalPicture.innerHTML = "";
  });
  // Закрываем модальное окно при клике вне изображения
  modal.addEventListener("click", (e) => {
    if (e.target !== modalContainer.querySelector("img")) {
      modal.classList.remove("is_active");
      modalPicture.innerHTML = "";
    }
  });
}
