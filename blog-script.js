document.addEventListener("DOMContentLoaded", function() {
    var aFeatures = document.querySelectorAll(".grid-item");
    for (var i = 0; i < aFeatures.length; i++) {
      aFeatures[i].addEventListener('click', function() {
        window.location = this.querySelectorAll("a")[0].href;
        return false;
      });
    }
  });