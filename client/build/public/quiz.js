var displayWelcomeText = function() {
  var textBox = document.getElementById("text-box");
  var pTag = document.createElement("p");
  pTag.innerText = "Welcome to the Jungle Quiz! Choose the correct answer or click HOME to get back to the map view.";
  textBox.appendChild(pTag);
}

var initializeQuiz = function() {

}

var displayJournal = function() {
  var main = document.getElementById("background-image-wrapper");
  var journalDiv = document.createElement("div");
  journalDiv.setAttribute("id", "quiz-journal-box");
  main.appendChild(journalDiv);
}

var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest();
    request.open( "GET", url);
    request.addEventListener( "load", function() {
      var data = JSON.parse(this.responseText);
      console.log("request is made")
      callback(data);
  });
  request.send();
}

var initialize = function() {
  displayWelcomeText();
  displayJournal();
}

window.addEventListener("load", initialize);
