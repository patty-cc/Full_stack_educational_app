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