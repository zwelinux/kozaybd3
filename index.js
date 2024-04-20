
document.addEventListener("DOMContentLoaded", function() {
    var imagePopup = document.getElementById("imagePopup2");
    var popup = document.getElementById("popup2");
    var closeBtn = document.getElementById("close");
  
    imagePopup.addEventListener("click", function() {
      popup.style.display = "block";
    });
  
    closeBtn.addEventListener("click", function() {
      popup.style.display = "none";
    });
  });