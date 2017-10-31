var jungleSets;
var jungleSetIndexes = [];

var displayWelcomeText = function() {
  var textBox = document.getElementById("text-box2");
  var pTag = document.getElementById("welcome-text");
  pTag.innerHTML = "";
  pTag.innerText = "Welcome to the Jungle Quiz!";
}

var createNextButton = function() {
  if(!document.getElementById("quiz-next-button")) {
    var buttonsWrapper = document.getElementById("text-box-wrapper");
    var nextButton = document.createElement("button");
    nextButton.setAttribute("id", "quiz-next-button");
    nextButton.setAttribute("class", "quiz-button");
    nextButton.innerText = "NEXT";
    buttonsWrapper.appendChild(nextButton);
    nextButton.addEventListener("click", function(){
      var textBoxText = document.getElementById("welcome-text");
      textBoxText.innerText = "Choose one of the answers above!";
      initializeQuiz(jungleSetIndexes);
    });
  }
}

var incorrectAnswerClicked = function(){
  this.style.visibility = "hidden";
  var textBoxText = document.getElementById("welcome-text");
  textBoxText.innerText = "Wrong! Try again!";
}

var correctAnswerClicked = function(){
  var textBoxText = document.getElementById("welcome-text");
  textBoxText.innerText = "Correct! Press NEXT to move to the next question!";
  if(jungleSetIndexes.length > 0){
    createNextButton();
  } else {
    var nextButton = document.getElementById("quiz-next-button");
    nextButton.innerHTML = "";
    textBoxText.innerText = "You've finished the quiz! Press HOME to get back to the map view!";
  }
}

var cleanQuiz = function(){
  var question = document.getElementById("quiz-journal-box");
  question.innerHTML = "";
}

var initializeQuiz = function(indexesArray) {
  cleanQuiz();
  // get random index to select a random set from the question-answers array
  var index = getRandomArrayIndex(indexesArray);
  console.log("MAIN INDEX: ", index);
  console.log("ALL INDEXES: ", jungleSetIndexes);
// create h1 element displaying the question from the selected set
  var journalDiv = document.getElementById("quiz-journal-box");
  var questionText = document.createElement("h1");
  questionText.innerText = jungleSets[index].question;
  journalDiv.appendChild(questionText);

// display image from the selected set
  var pic = document.createElement("img");
  pic.setAttribute("id", "quiz-img");
  pic.src = jungleSets[index].img;
  journalDiv.appendChild(pic);

// create a div for the three answers to be displayed
  var answersWrapper = document.createElement("div");
  answersWrapper.setAttribute("id", "quiz-answers-wrapper");
  journalDiv.appendChild(answersWrapper);

// since there are always be three possible answers to a question I create an array of indexes for them
  var answersIndexes = [0, 1, 2];
// I choose random indexes of the questions to be displayed so that the order
// of answers will be different every time you view the question
  var firstIndex = getRandomArrayIndex(answersIndexes);
  var answer1Index = answersIndexes[firstIndex];
  answersIndexes.splice(firstIndex, 1);
  var secondIndex = getRandomArrayIndex(answersIndexes);
  var answer2Index = answersIndexes[secondIndex];
  answersIndexes.splice(secondIndex, 1);
  var answer3Index = answersIndexes[0];


// create buttons with 3 questions in random order using the indexes that have just been generated
  var answer1 = document.createElement("button");
  answer1.setAttribute("class", "quiz-button");
  answer1.innerText = jungleSets[index].answers[answer1Index].text;
  answersWrapper.appendChild(answer1);

  var answer2 = document.createElement("button");
  answer2.setAttribute("class", "quiz-button");
  answer2.innerText = jungleSets[index].answers[answer2Index].text;
  answersWrapper.appendChild(answer2);

  var answer3 = document.createElement("button");
  answer3.setAttribute("class", "quiz-button");
  answer3.innerText = jungleSets[index].answers[answer3Index].text;
  answersWrapper.appendChild(answer3);

// add appropriate event listeners based on the correctness of the answer
  if (jungleSets[index].answers[answer1Index].correct){
    answer1.addEventListener("click", correctAnswerClicked);
  } else {
    answer1.addEventListener("click", incorrectAnswerClicked);
  }

  if (jungleSets[index].answers[answer2Index].correct){
    answer2.addEventListener("click", correctAnswerClicked);
  } else {
    answer2.addEventListener("click", incorrectAnswerClicked);
  }

  if (jungleSets[index].answers[answer3Index].correct){
    answer3.addEventListener("click", correctAnswerClicked);
  } else {
    answer3.addEventListener("click", incorrectAnswerClicked);
  }

  jungleSets.splice(index, 1);
  jungleSetIndexes.splice(index, 1);
  console.log("SPLICED INDEXES: ", jungleSetIndexes);
}

var displayHomeButton = function(){
  var textBoxWrapper = document.getElementById("text-box-wrapper");
  var homeButton = document.createElement("button");
  homeButton.setAttribute("id", "quiz-home-button");
  homeButton.setAttribute("class", "quiz-button");
  homeButton.innerText = "HOME";
  textBoxWrapper.appendChild(homeButton);
}

var displayJournal = function() {
  var main = document.getElementById("background-image-wrapper");
  main.id = "quiz-background-image-wrapper";
  var journalDiv = document.createElement("div");
  journalDiv.setAttribute("id", "quiz-journal-box");
  main.appendChild(journalDiv);
  displayHomeButton();
}

var getRandomArrayIndex = function(array){
  return Math.floor(Math.random()*(array.length));
}

var getIndexes = function(){
  for (var i = 0; i < jungleSets.length; i++){
    jungleSetIndexes.push(i);
  }
  console.log("indexes: ", jungleSetIndexes);
  initializeQuiz(jungleSetIndexes);
}

var getJungleSets = function(data){
  jungleSets = data.filter(function(set){
    return set.habitat === "Jungle";
  });
  console.log("jungleSets: ", jungleSets);
  getIndexes();
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

var initializeJungleQuiz = function() {
  var main = document.getElementById("background-image-wrapper");
  main.innerHTML = "";
  console.log("initializeJungleQuiz gets called");
  displayWelcomeText();
  displayJournal();
  makeRequest("http://localhost:3000/api/quiz", getJungleSets);
}

// window.addEventListener("load", initialize);
