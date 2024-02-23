
const colors = ["RED", "GREEN", "BLUE", "YELLOW", "PURPULE", "ORANGE", "WHITE", "BLACK", "BROWN", "GRAY", "PINK", "INDIGO"];

colors.forEach(color => {
  document.getElementById(color).addEventListener("click", function () {
    document.body.style.backgroundColor = color.toLowerCase();
    document.querySelector("ol").style.backgroundColor = color.toLowerCase();
  });
});
