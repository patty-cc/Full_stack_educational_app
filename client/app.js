var requestHelper = require('./helpers/request_helper.js');
window.addEventListener('DOMContentLoaded', function() {

  requestHelper.getRequest('http://localhost:3000/api/animals', function(animals) {
    // console.log(animals);

  var animalPic = document.getElementById('animal-picture-wrapper')
  console.log(animals[0].img);

  var animalImage = document.createElement('img')
  animalImage.src = animals[0].img
  animalImage.height = '200'
  animalImage.width = '200'
  animalPic.appendChild(animalImage)

  var animalInfo = document.getElementById('animal-info')

  var animalType = document.createElement('p');
  var animalGroup = document.createElement('p');
  var animalFunfact = document.createElement('p');

  animalType.innerText = 'Type: ' + animals[0].type;
  animalGroup.innerText = 'Group Name: ' + animals[0].group;
  animalFunfact.innerText = 'Fun Fact: ' + animals[0].funFact;

  animalInfo.appendChild(animalType)
  animalInfo.appendChild(animalGroup)
  animalInfo.appendChild(animalFunfact)


  })
})
