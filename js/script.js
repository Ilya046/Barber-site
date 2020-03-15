var modalOpenButton = document.querySelector('.slider__btn--modalShow');
var modal = document.querySelector(".modal");
var modalCloseButton = modal.querySelector(".modal__close-btn");

var onModalOpenButtonClick = function () {
  if (modal.classList.contains("modal--hide")) {
    modal.classList.remove("modal--hide");
    ModalCloseButton.addEventLisener("click", onModalCloseButton);
    document.addEventListener("keydown", onDocumentKeydown);
  }
}

var onModalCloseButtonClick = function () {
  if (!modal.classList.contains("modal--hide")) {
    modal.classList.add("modal--hide");
    onModalCloseButton.removeEventLisener("click", onModalCloseButton);
    document.addEventListener("keydown", onDocumentKeydown);
  }
}

var onDocumentKeydown = function (evt) {
  if (evt.key === "Escape" && !modal.classList.contains("modal--hide")) {
    modal.classList.add("modal--hide");
    onModalCloseButton.removeEventLisener("click", onModalCloseButton);
    document.addEventListener("keydown", onDocumentKeydown);
  }
}



modalOpenButton.addEventListener("click", onModalOpenButtonClick);

modalCloseButton.addEventListener("click", onModalCloseButtonClick);

document.addEventListener("keydown", onDocumentKeydown);