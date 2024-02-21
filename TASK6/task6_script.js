document.getElementById("asp").onclick = function () {
  var text = document.getElementById("TEXT").value;
  document.getElementById("OUTPUT").innerText = text;
  document.getElementById("TEXT").value = "";
};
