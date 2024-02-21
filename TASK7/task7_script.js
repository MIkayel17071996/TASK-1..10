var paragraph = document.getElementById("paragraph");
var button = document.getElementById("button");
var display = 0;
function myFunction() {
  if (display == 1) {
    paragraph.style.display = "block";
    display = 0;
    button.innerHTML = "Hidden";
  } else {
    paragraph.style.display = "none";
    display = 1;
    button.innerHTML = "Shown";
  }
}
