var link = document.querySelector(".contacts__button");
var modal = document.querySelector(".feedback");
var overlay = document.querySelector(".modal-overlay");
var close = modal.querySelector(".modal__close");
var form = modal.querySelector(".feedback-form");
var userName = modal.querySelector("[name=username]");
var userMail = modal.querySelector("[name=usermail]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("userName");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal-show");
  overlay.style.display = "block";

  if (storage) {
    userName.value = storage;
    userMail.focus();
  } else {
    userName.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-show");
  modal.classList.remove("modal-error");
  overlay.style.display = '';
});

form.addEventListener("submit", function (evt) {
  if(!userName.value || !userMail.value) {
    evt.preventDefault();
    modal.classList.remove("modal-error");
    loginPopup.offsetWidth = loginPopup.offsetWidth;
    modal.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("userName" , userName.value);
    }
  }
});

window.addEventListener("keydown" , function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal-show")) {
      evt.preventDefault();
      modal.classList.remove("modal-show");
      modal.classList.remove("modal-error");
      overlay.style.display = '';
    }
  }
});

