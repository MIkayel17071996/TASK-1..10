var button = document.getElementById("button");
var display = 0;
button.onclick = function () {
  if (display == 1) {
    button.innerText = "Hello";
    display = 0;
  } else {
    button.innerText = "GoodBye";
    display = 1;
  }
};
