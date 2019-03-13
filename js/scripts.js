function change_color(obj) {
  obj.value && (document.body.style.backgroundColor = obj.value);
}

var link = document.querySelector(".login");
var popup = document.querySelector(".wrapper-form");
var feedback = document.querySelector(".feedback-form-link");
var feedbackForm = document.querySelector(".contacts-feedback-form");
var close = document.querySelector(".cross");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});

feedback.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedbackForm.classList.add("modal-show");
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedbackForm.classList.remove("modal-show");
});
