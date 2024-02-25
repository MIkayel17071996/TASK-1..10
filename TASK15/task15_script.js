const menuToggle = document.getElementById("menu__toggle");
const menuBox = document.querySelector(".menu__box");

menuToggle.addEventListener("change", function () {
  if (this.checked) {
    menuBox.style.left = "0";
  } else {
    menuBox.style.left = "-100%";
  }
});
