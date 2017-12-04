var openFeedback = document.querySelector(".contact__link");
var openMap = document.querySelector(".contact__map-link");

var feedbackWindow = document.querySelector(".popup_feedback");
var closeFeedback = document.querySelector(".popup__close-button_feedback");
var mapWindow = document.querySelector(".popup_map");
var closeMap = document.querySelector(".popup__close-button_map");

openFeedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackWindow.classList.add("popup-show");
  if (mapWindow.classList.contains("popup-show")) {
    mapWindow.classList.remove("popup-show");
  }
});

openMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapWindow.classList.add("popup-show");
  if (feedbackWindow.classList.contains("popup-show")) {
    feedbackWindow.classList.remove("popup-show");
  }
});

closeFeedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("close event");
  feedbackWindow.classList.remove("popup-show");
});

closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("close event");
  mapWindow.classList.remove("popup-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackWindow.classList.contains("popup-show")) {
      feedbackWindow.classList.remove("popup-show");
    }
    if (mapWindow.classList.contains("popup-show")) {
      mapWindow.classList.remove("popup-show");
    }
  }
});
