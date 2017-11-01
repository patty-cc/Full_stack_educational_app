var habitatSets;
var habitatSetIndexes = [];

var displayWelcomeText = function(habitat) {
  var textBox = document.getElementById("text-box2");
  var pTag = document.getElementById("welcome-text");
  pTag.innerHTML = "";
  pTag.innerText = "Welcome to the "+ habitat + " Quiz!";
}

var createNextButton = function() {
  if(!document.getElementById("quiz-next-button")) {
    var backgroundImageWrapper = document.getElementById('quiz-background-image-wrapper')
    var nextButtonDiv = document.createElement('div')
    nextButtonDiv.id = "next-page-button"
    nextButtonDiv.className = "pulse"
    nextButtonDiv.style.backgroundImage = "url(./public/images/arrows.png)";
    backgroundImageWrapper.appendChild(nextButtonDiv)
    nextButtonDiv.addEventListener("click", function(){
      var textBoxText = document.getElementById("welcome-text");
      textBoxText.innerText = "Choose one of the answers above!";
      initializeQuiz(habitatSetIndexes);
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
  if(habitatSetIndexes.length > 0){
    createNextButton();
    textBoxText.innerText = "Correct! Press NEXT to move to the next question!";
  } else {
    textBoxText.innerText = "Correct! Press HOME to get back to the map view!";
  }
}

var cleanQuiz = function(){
  var question = document.getElementById("quiz-journal-box");
  question.innerHTML = "";
}

var initializeQuiz = function(indexesArray) {
  cleanQuiz();
  var imgWrapper = document.querySelector("#quiz-background-image-wrapper")
  var nextButton = document.querySelector("#next-page-button");
  if(nextButton) imgWrapper.removeChild(nextButton)
  // get random index to select a random set from the question-answers array
  var index = getRandomArrayIndex(indexesArray);
  console.log("MAIN INDEX: ", index);
  console.log("ALL INDEXES: ", habitatSetIndexes);
// create h1 element displaying the question from the selected set
  var journalDiv = document.getElementById("quiz-journal-box");
  var questionText = document.createElement("h1");
  console.log("habitatSets[index] ", habitatSets[index]);
  questionText.innerText = habitatSets[index].question;
  journalDiv.appendChild(questionText);

// display image from the selected set
  var pic = document.createElement("img");
  pic.setAttribute("id", "quiz-img");
  pic.src = habitatSets[index].img;
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
  answer1.innerText = habitatSets[index].answers[answer1Index].text;
  answersWrapper.appendChild(answer1);

  var answer2 = document.createElement("button");
  answer2.setAttribute("class", "quiz-button");
  answer2.innerText = habitatSets[index].answers[answer2Index].text;
  answersWrapper.appendChild(answer2);

  var answer3 = document.createElement("button");
  answer3.setAttribute("class", "quiz-button");
  answer3.innerText = habitatSets[index].answers[answer3Index].text;
  answersWrapper.appendChild(answer3);

// add appropriate event listeners based on the correctness of the answer
  if (habitatSets[index].answers[answer1Index].correct){
    answer1.addEventListener("click", correctAnswerClicked);
  } else {
    answer1.addEventListener("click", incorrectAnswerClicked);
  }

  if (habitatSets[index].answers[answer2Index].correct){
    answer2.addEventListener("click", correctAnswerClicked);
  } else {
    answer2.addEventListener("click", incorrectAnswerClicked);
  }

  if (habitatSets[index].answers[answer3Index].correct){
    answer3.addEventListener("click", correctAnswerClicked);
  } else {
    answer3.addEventListener("click", incorrectAnswerClicked);
  }

  habitatSets.splice(index, 1);
  habitatSetIndexes.splice(index, 1);
  console.log("SPLICED INDEXES: ", habitatSetIndexes);
}

var displayHomeButton = function(){
  var backgroundImageWrapper = document.getElementById('quiz-background-image-wrapper');
  var homeButton = document.createElement('div');
  homeButton.id = "home-button";
  backgroundImageWrapper.appendChild(homeButton);
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
  for (var i = 0; i < habitatSets.length; i++){
    habitatSetIndexes.push(i);
  }
  console.log("indexes: ", habitatSetIndexes);
  initializeQuiz(habitatSetIndexes);
}

var getSetsByHabitat = function(data, habitat){
  habitatSets = data.filter(function(set){
    return set.habitat === habitat;
  });
  console.log("habitatSets: ", habitatSets);
  getIndexes();
}

var makeQuizRequest = function(url, callback, habitat) {
  var request = new XMLHttpRequest();
    request.open( "GET", url);
    request.addEventListener( "load", function() {
      var data = JSON.parse(this.responseText);
      console.log("Quiz makeRequest data: ", data);
      console.log("request is made")
      callback(data, habitat);
  });
  request.send();
}

var initializeQuizSection = function(habitat) {
  var main = document.getElementById("background-image-wrapper");
  main.innerHTML = "";
  console.log("initializeQuiz gets called");
  displayWelcomeText(habitat);
  displayJournal();
  makeQuizRequest("http://localhost:3000/api/quiz", getSetsByHabitat, habitat);
}
