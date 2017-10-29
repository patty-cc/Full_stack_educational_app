var requestHelper = require('./helpers/request_helper.js');

var renderAnimalsInfo = function(animals, counter) {
  var animalPic = document.getElementById('animalImg')

  animalPic.src = animals[counter].img
  animalPic.height = '200'
  animalPic.width = '200'

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

window.addEventListener('DOMContentLoaded', function() {
  requestHelper.getRequest('http://localhost:3000/api/animals', function(animals) {

    counter = 0
    renderAnimalsInfo(animals, counter)
    counter ++

    var nextButton = document.getElementById('button')
    nextButton.addEventListener('click', function(){
      renderAnimalsInfo(animals, counter)
      counter ++
    })
  })
})
