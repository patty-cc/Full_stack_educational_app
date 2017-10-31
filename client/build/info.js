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


var deleteFrontPageButtons = function (){
  var jungleBtn = document.getElementById("jungle-button");
  jungleBtn.style.display ="none";
  var seaBtn = document.getElementById("sea-button");
  seaBtn.style.display ="none";
}

var renderSeaInfo = function(data){
  deleteFrontPageButtons()

  seaAnimals = []
   for(animal of data){
     console.log(animal);
     if (animal.area === "Sea"){
       seaAnimals.push(animal)
      }
   }

  var background = document.getElementById("background-image-wrapper");
  background.style.background = "url(./public/images/seaBackground.jpg)"
  htmlSetup(seaAnimals)
  bookRunner()

}

var renderJungleInfo = function(data){
  deleteFrontPageButtons()

  jungleAnimals = []
   for(animal of data){
     if (animal.area === "Jungle"){
     jungleAnimals.push(animal)
    }
   }

  var background = document.getElementById("background-image-wrapper");
  background.style.background = "url(./public/images/jungle.jpg)"

  setTimeout(function() {
    var welcomeText = document.getElementById("welcome-text");
    welcomeText.innerHTML = "";
    var textBox = document.getElementById("text-box2");
    textBox.id = "text-box";
    printText("welcome-text", "Wow, we have so many animals in our book", 60)
  }, 7000);

  htmlSetup(jungleAnimals)
  bookRunner()

}



















var bookRunner = function () {
  var page = 0;
  var forwards = true;
  var updatePages = function() {
    var pages = document.querySelectorAll(".page");
    pages.forEach(function(element, index) {
      if (page === index) {
        element.className = "page active";
      } else if (index < page) {
        element.className = "page flipped";
      } else {
        element.className = "page";
      }
    });
  };

  document.querySelector(".book").addEventListener("click", function(event) {
    if (event.target.className.includes("front")) {
      page++;
      updatePages();
    } else {
      page--;
      updatePages();
    }
  });
}

// new code
var htmlSetup = function (animalData) {
  var backgroundImageWrapper = document.getElementById('background-image-wrapper')

  var sceneDiv = document.createElement('div')
  sceneDiv.className = "scene"
  backgroundImageWrapper.appendChild(sceneDiv)
  var bookArticle = document.createElement('article')
  bookArticle.className = "book"
  sceneDiv.appendChild(bookArticle)
  var pageSection = document.createElement('section')
  pageSection.className = "page active"
  bookArticle.appendChild(pageSection)
    var frontDiv = document.createElement('div')
    frontDiv.className = "front cover"
    pageSection.appendChild(frontDiv)
      var h1 = document.createElement('h1')
      frontDiv.appendChild(h1)
      h1.innerText = "Hello Front"
      var p = document.createElement('p')
      frontDiv.appendChild(p)

// var animals = ["Animal 1", "Animal 2", "Animal 3"]

for (animal of animalData) {
    var backDiv = document.createElement('div')
    backDiv.className = "back"
    pageSection.appendChild(backDiv)

      var animalImg = document.createElement('img')
      animalImg.id = "animal-img"
      animalImg.src = animal.img
      backDiv.appendChild(animalImg)
      var animalImgText = document.createElement('p')
      animalImgText.id = "animal-name"
      animalImgText.innerText = animal.name
      backDiv.appendChild(animalImgText)
  var pageSection = document.createElement('section')
  pageSection.className = "page"
  bookArticle.appendChild(pageSection)
    var frontDiv = document.createElement('div')
    frontDiv.className = "front"
    pageSection.appendChild(frontDiv)

      var animalType = document.createElement('div')
      animalType.id = "animal-type"
      frontDiv.appendChild(animalType)
        var infoHeading = document.createElement('p')
        infoHeading.id = 'infoHeading'
        infoHeading.innerText = "Type of Animal"
        animalType.appendChild(infoHeading)
        var animalTypeText = document.createElement('p')
        animalTypeText.id = "animal-type-text"
        animalTypeText.innerText = animal.type
        animalType.appendChild(animalTypeText)

      var animalGroup = document.createElement('div')
      animalGroup.id = "animal-group"
      frontDiv.appendChild(animalGroup)
        var infoHeading = document.createElement('p')
        infoHeading.id = 'infoHeading'
        infoHeading.innerText = "Group Name"
        animalGroup.appendChild(infoHeading)
        var animalGroupText = document.createElement('p')
        animalGroupText.id = "animal-group-text"
        animalGroupText.innerText = animal.group
        animalGroup.appendChild(animalGroupText)

      var animalFunFact = document.createElement('div')
      animalFunFact.id = "animal-fun-fact"
      frontDiv.appendChild(animalFunFact)
        var infoHeading = document.createElement('p')
        infoHeading.id = 'infoHeading'
        infoHeading.innerText = "Fun Fact"
        animalFunFact.appendChild(infoHeading)
        var animalFunFactText = document.createElement('p')
        animalFunFactText.id = "animal-fun-fact-text"
        animalFunFactText.innerText = animal.funFact
        animalFunFact.appendChild(animalFunFactText)
}
    var backDiv = document.createElement('div')
    backDiv.className = "back cover"
    pageSection.appendChild(backDiv)
      var h1 = document.createElement('h1')
      backDiv.appendChild(h1)
      h1.innerText = "Hello back"
      var p = document.createElement('p')
      backDiv.appendChild(p)
}


window.addEventListener('DOMContentLoaded', function() {
  makeRequest('http://localhost:3000/api/animals/jungle', renderJungleInfo)});


// end of new code
// var createHtml = function(){
//
//   var backgroundImageWrapper = document.getElementById('background-image-wrapper')
//   var journalImage = document.createElement('div')
//   journalImage.id = 'journal-image'
//   backgroundImageWrapper.appendChild(journalImage)
//
//     var buttonDiv = document.createElement('div')
//     buttonDiv.id = 'button'
//     journalImage.appendChild(buttonDiv)
//
//     var button = document.createElement('button')
//     button.innerText = 'Next'
//     buttonDiv.appendChild(button)
//
//
//     var animalPictureWrapper = document.createElement('div')
//     animalPictureWrapper.id = 'animal-picture-wrapper'
//       var animalImg = document.createElement('img')
//       animalImg.id = 'animalImg'
//       var animalImgText = document.createElement('p')
//       animalImgText.id = 'name'
//       animalPictureWrapper.appendChild(animalImg)
//       animalPictureWrapper.appendChild(animalImgText)
//       journalImage.appendChild(animalPictureWrapper)
//
//
//     var animalInfo = document.createElement('div')
//     animalInfo.id = 'animal-info'
//     journalImage.appendChild(animalInfo)
//
//       var animalType = document.createElement('div')
//       animalType.id = 'animalType'
//       animalInfo.appendChild(animalType)
//         var infoHeading = document.createElement('p')
//         infoHeading.id = 'infoHeading'
//         infoHeading.innerText = "Type of Animal"
//         animalType.appendChild(infoHeading)
//
//       var animalGroup = document.createElement('div')
//       animalGroup.id = 'animalGroup'
//       animalInfo.appendChild(animalGroup)
//         var infoHeading = document.createElement('p')
//         infoHeading.id = 'infoHeading'
//         infoHeading.innerText = "Group Name"
//         animalGroup.appendChild(infoHeading)
//
//       var animalFunfact = document.createElement('div')
//       animalFunfact.id = 'animalFunfact'
//       animalInfo.appendChild(animalFunfact)
//         var infoHeading = document.createElement('p')
//         infoHeading.id = 'infoHeading'
//         infoHeading.innerText = "Fun Fact"
//         animalFunfact.appendChild(infoHeading)
//
// }
//
// var renderAnimalsInfo = function(animals, counter) {
//
//   var journalImage = document.getElementById('journal-image')
//
// var animalImg = document.getElementById('animalImg')
//   var animalImgText = document.getElementById('name')
//   var pictures = ['/public/images/Macaw.png','/public/images/tree-jaguar.png','/public/images/Dart-frog.png']
//   animalImg.src = pictures[counter]
//   animalImgText.innerText = animals[counter].name
//
//   var animalType = document.getElementById('animalType');
//   var animalTypeText = document.getElementById('animal-type-text')
//   if (!animalTypeText) {
//     animalTypeText = document.createElement('p')
//     animalTypeText.id = 'animal-type-text'
//   }
//
//   var animalGroup = document.getElementById('animalGroup');
//   var animalGroupText = document.getElementById('animal-group-text')
//   if (!animalGroupText) {
//     animalGroupText = document.createElement('p')
//     animalGroupText.id = 'animal-group-text'
//   }
//
//   var animalFunfact = document.getElementById('animalFunfact');
//   var animalFunfactText = document.getElementById('animal-funfact-text')
//   if (!animalFunfactText) {
//     animalFunfactText = document.createElement('p')
//     animalFunfactText.id = 'animal-funfact-text'
//   }
//
//
//
//   animalTypeText.innerText = animals[counter].type;
//   animalGroupText.innerText = animals[counter].group;
//   animalFunfactText.innerText = animals[counter].funFact;
//
//   animalType.appendChild(animalTypeText)
//   animalGroup.appendChild(animalGroupText)
//   animalFunfact.appendChild(animalFunfactText)
// }
//
var createQuizButton = function() {
  var quizButton = document.createElement('button');
  // quizButton.id = 'quiz-button'
  quizButton.setAttribute("class","quiz-button");
  quizButton.innerText = "Quiz";
  var textBox = document.getElementById('text-box-wrapper');
  textBox.appendChild(quizButton);

  quizButton.addEventListener("click", function() {
    initializeJungleQuiz();
  });

}
//




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
