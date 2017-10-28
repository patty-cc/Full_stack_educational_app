var displayWelcomeText = function() {
  var textBox = document.getElementById("text-box");
  var pTag = document.createElement("p");
  pTag.innerText = "Welcome to the Jungle Quiz! Choose the correct answer or click HOME to get back to the map view.";
  textBox.appendChild(pTag);
}

var initialize = function(){
  displayWelcomeText();
}

window.addEventListener("load", initialize);
