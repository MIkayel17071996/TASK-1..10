var button = document.getElementById("button"); //
var p = document.getElementById("Change_text");
var flag = 1;

button.addEventListener("click", function () {
  if (flag === 1) {
    p.textContent = "TEXT1: Click to Change text to TEXT2";
    flag = 2;
  } else {
    p.textContent = "TEXT2!!!: Click to Change text to TEXT1!!!";
    flag = 1;
  }
});
