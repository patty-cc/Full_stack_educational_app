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

var renderJungleInfo = function(data){
  console.log(data);
  var jungleBtn = document.getElementById("jungle-button");
  var background = document.getElementById("background-image-wrapper");

  jungleBtn.style.display ="none";

  background.style.background = "url(./public/images/jungle.jpg)"



  createHtml()

  counter = 0
  renderAnimalsInfo(data, counter)
  counter ++

//add if statement here
  var nextButton = document.getElementById('button')
  nextButton.addEventListener('click', function(){
    renderAnimalsInfo(data, counter)
    counter ++
  })
}

var createHtml = function(){

  var backgroundImageWrapper = document.getElementById('background-image-wrapper')
  var journalImage = document.createElement('div')
  journalImage.id = 'journal-image'
  backgroundImageWrapper.appendChild(journalImage)

    var buttonDiv = document.createElement('div')
    buttonDiv.id = 'button'
    journalImage.appendChild(buttonDiv)

    var button = document.createElement('button')
    button.innerText = 'Next'
    buttonDiv.appendChild(button)


    var animalPictureWrapper = document.createElement('div')
    animalPictureWrapper.id = 'animal-picture-wrapper'
      var animalImg = document.createElement('img')
      animalImg.id = 'animalImg'
      var animalImgText = document.createElement('p')
      animalImgText.id = 'name'
      animalPictureWrapper.appendChild(animalImg)
      animalPictureWrapper.appendChild(animalImgText)
      journalImage.appendChild(animalPictureWrapper)


    var animalInfo = document.createElement('div')
    animalInfo.id = 'animal-info'
    journalImage.appendChild(animalInfo)

      var animalType = document.createElement('div')
      animalType.id = 'animalType'
      animalInfo.appendChild(animalType)
        var infoHeading = document.createElement('p')
        infoHeading.id = 'infoHeading'
        infoHeading.innerText = "Type of Animal"
        animalType.appendChild(infoHeading)

      var animalGroup = document.createElement('div')
      animalGroup.id = 'animalGroup'
      animalInfo.appendChild(animalGroup)
        var infoHeading = document.createElement('p')
        infoHeading.id = 'infoHeading'
        infoHeading.innerText = "Group Name"
        animalGroup.appendChild(infoHeading)

      var animalFunfact = document.createElement('div')
      animalFunfact.id = 'animalFunfact'
      animalInfo.appendChild(animalFunfact)
        var infoHeading = document.createElement('p')
        infoHeading.id = 'infoHeading'
        infoHeading.innerText = "Fun Fact"
        animalFunfact.appendChild(infoHeading)

}

var renderAnimalsInfo = function(animals, counter) {

  var journalImage = document.getElementById('journal-image')

var animalImg = document.getElementById('animalImg')
  var animalImgText = document.getElementById('name')
  var pictures = ['/public/images/Macaw.png','/public/images/tree-jaguar.png','/public/images/Dart-frog.png']
  animalImg.src = pictures[counter]
  animalImgText.innerText = animals[counter].name

  var animalType = document.getElementById('animalType');
  var animalTypeText = document.getElementById('animal-type-text')
  if (!animalTypeText) {
    animalTypeText = document.createElement('p')
    animalTypeText.id = 'animal-type-text'
  }

  var animalGroup = document.getElementById('animalGroup');
  var animalGroupText = document.getElementById('animal-group-text')
  if (!animalGroupText) {
    animalGroupText = document.createElement('p')
    animalGroupText.id = 'animal-group-text'
  }

  var animalFunfact = document.getElementById('animalFunfact');
  var animalFunfactText = document.getElementById('animal-funfact-text')
  if (!animalFunfactText) {
    animalFunfactText = document.createElement('p')
    animalFunfactText.id = 'animal-funfact-text'
  }



  animalTypeText.innerText = animals[counter].type;
  animalGroupText.innerText = animals[counter].group;
  animalFunfactText.innerText = animals[counter].funFact;

  animalType.appendChild(animalTypeText)
  animalGroup.appendChild(animalGroupText)
  animalFunfact.appendChild(animalFunfactText)
}

var createQuizButton = function() {
  var quizButton = document.createElement('button');
  quizButton.id = 'quiz-button'
  quizButton.innerText = "Quiz";
  var textBox = document.getElementById('text-box')
  textBox.appendChild(quizButton)

  quizButton.addEventListener("click", function(e) {
    console.log("jungle quiz clicked")
  })

}



window.addEventListener('DOMContentLoaded', function() {
  makeRequest('http://localhost:3000/api/animals/jungle', renderJungleInfo)});


//
//   // function(animals) {
//   //
//     counter = 0
//     renderAnimalsInfo(animals, counter)
//     counter ++
//
//     var nextButton = document.getElementById('button')
//     nextButton.addEventListener('click', function(){
//       renderAnimalsInfo(animals, counter)
//       counter ++
//     })
//
// // })
