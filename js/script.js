var link = document.querySelector(".contacts__button");
var modal = document.querySelector(".feedback");
var close = modal.querySelector(".modal__close");
var form = modal.querySelector(".feedback-form");
var userName = modal.querySelector("[name=username]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal-show");
  userName.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  console.log(username.value);
});

