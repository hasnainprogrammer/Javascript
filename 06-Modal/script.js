"use strict";

// selecting elements from th DOM.
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".close-modal");
const showModals = document.querySelectorAll(".show-modal");

// open modal function.
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// close modal function.
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
for (let i = 0; i < showModals.length; i++) {
  showModals[i].addEventListener("click", openModal);
}

closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
