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

/* dirty hack for IE grayscale */
(function() {

  if (getInternetExplorerVersion() >= 10){

    var logos = document.querySelectorAll(".makers-list__image");
    for (var i = 0; i < logos.length; i++) {
      var item = logos[i];

      item.addEventListener("mouseover", function (event) {
        makeColor(event.target);
      });
      item.addEventListener("mouseout", function (event) {
        makeGray(event.target);
      });

      makeGray(item);
    }

    function makeColor(item) {

      if (item.src.substr(item.src.length - 9) === "-gray.png") {
        item.src = item.src.substr(0, item.src.length - 9) + ".png";
      }
    }

    function makeGray(item) {
      item.src = item.src.substr(0, item.src.length - 4) + "-gray.png";
    }

  };

  function getInternetExplorerVersion(){
    var rv = -1;
    if (navigator.appName == 'Microsoft Internet Explorer'){
      var ua = navigator.userAgent;
      var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
      if (re.exec(ua) != null)
        rv = parseFloat( RegExp.$1 );
    }
    else if (navigator.appName == 'Netscape'){
      var ua = navigator.userAgent;
      var re  = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
      if (re.exec(ua) != null)
        rv = parseFloat( RegExp.$1 );
    }
    return rv;
  };

})();

