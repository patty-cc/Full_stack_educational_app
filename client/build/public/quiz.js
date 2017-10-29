var displayWelcomeText = function() {
  var textBox = document.getElementById("text-box");
  var pTag = document.createElement("p");
  pTag.setAttribute("id", "text-box-text");
  pTag.innerText = "Welcome to the Jungle Quiz! Choose the correct answer or press HOME to get back to the map view.";
  textBox.appendChild(pTag);
}

var createNextButton = function() {
  var buttonsWrapper = document.getElementById("text-box-buttons-wrapper");
  var nextButton = document.createElement("button");
  nextButton.setAttribute("id", "next-button");
  nextButton.innerText = "NEXT";
  buttonsWrapper.appendChild(nextButton);
}

var incorrectAnswerClicked = function(){
  this.style.visibility = "hidden"
  var textBoxText = document.getElementById("text-box-text");
  textBoxText.innerText = "Wrong! Try again!";
}

var correctAnswerClicked = function(){
  var textBoxText = document.getElementById("text-box-text");
  textBoxText.innerText = "Correct! Press NEXT to move to the next question!";
  createNextButton();
}

var initializeQuiz = function(data) {
  var journalDiv = document.getElementById("quiz-journal-box");
  var questionText = document.createElement("h1");
  questionText.innerText = data[0].question;
  journalDiv.appendChild(questionText);
  console.log("question: ", data[0].question);

  var jaguar = document.createElement("img");
  jaguar.setAttribute("id", "quiz-img");
  jaguar.src = data[0].img;
  journalDiv.appendChild(jaguar);

  var answersWrapper = document.createElement("div");
  answersWrapper.setAttribute("id", "quiz-answers-wrapper");
  journalDiv.appendChild(answersWrapper);

  var answer1 = document.createElement("button");
  answer1.innerText = data[0].correctAnswer[0];
  answersWrapper.appendChild(answer1);

  var answer2 = document.createElement("button");
  answer2.innerText = data[0].incorrectAnswer[0];
  answersWrapper.appendChild(answer2);

  var answer3 = document.createElement("button");
  answer3.innerText = data[0].incorrectAnswer[1];
  answersWrapper.appendChild(answer3);

  answer1.addEventListener("click", correctAnswerClicked);
  answer2.addEventListener("click", incorrectAnswerClicked);
  answer3.addEventListener("click", incorrectAnswerClicked);
}

var displayHomeButton = function(){
  var textBox = document.getElementById("text-box");
  var buttonsDiv = document.createElement("div");
  buttonsDiv.setAttribute("id", "text-box-buttons-wrapper");
  textBox.appendChild(buttonsDiv);
  var homeButton = document.createElement("button");
  homeButton.setAttribute("id", "home-button");
  homeButton.innerText = "HOME";
  buttonsDiv.appendChild(homeButton);
}

var displayJournal = function() {
  var main = document.getElementById("background-image-wrapper");
  var journalDiv = document.createElement("div");
  journalDiv.setAttribute("id", "quiz-journal-box");
  main.appendChild(journalDiv);
  displayHomeButton();
}

var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest();
    request.open( "GET", url);
    request.addEventListener( "load", function() {
      var data = JSON.parse(this.responseText);
      console.log(data);
      console.log("request is made")
      callback(data);
  });
  request.send();
}

var initialize = function() {
  displayWelcomeText();
  displayJournal();
  makeRequest("http://localhost:3000/api/quiz", initializeQuiz);
}

window.addEventListener("load", initialize);
