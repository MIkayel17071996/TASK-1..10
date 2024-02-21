document.getElementById("submit").onclick = function () {
  var string = document.getElementById("email_string").value;
  if (string == "") {
    alert("Please enter an email address");
  }
};
