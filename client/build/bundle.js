/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var requestHelper = __webpack_require__(1);

var renderAnimalsInfo = function(animals, counter) {
  var animalPic = document.getElementById('animalImg')

  var pictures = ['./public/images/Macaw.png','./public/images/tree-jaguar.png','./public/images/Dart-frog.png']

  animalPic.src = pictures[counter]
  // animalPic.height = '300'
  // animalPic.width = '250'

  var nameLabel = document.getElementById('name')
  nameLabel.innerText = animals[counter].name

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


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var requestHelper = {
  getRequest: function ( url, callback ) {
    var xhr = new XMLHttpRequest()
    xhr.open( 'Get', url )
    xhr.addEventListener( 'load', function() {
      var jsonString = xhr.responseText
      var data = JSON.parse(jsonString)
      callback(data)
    })
    xhr.send()
  }
}


module.exports = requestHelper


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map