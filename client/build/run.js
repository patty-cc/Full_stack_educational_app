// character1 = require('character1.js');
// character2 = require('character2.js');

var initialize = function() {
  setInterval(draw1,180);
  setInterval(draw2,180);
}

window.addEventListener("load", initialize);
// character2.setInterval(draw2,180);
