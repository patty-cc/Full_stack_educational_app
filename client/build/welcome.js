
// var welcomeText = function() {
//   var pTag = document.getElementById("welcome-text");
//   var div = document.getElementById("text-box");
//   pTag.innerText = "Welcome to the animals of the world!"
//   // div.appendChild(pTag);
// }
//
// welcomeText();

var isPaused = false;

var printText = function(destination, message, speed) {
  var i = 0;
  var interval = setInterval(function() {
    document.getElementById(destination).innerHTML += message.charAt(i);
    i++;
    if (i > message.length) {
      clearInterval(interval);
    }
  }, speed);

}

printText("welcome-text", "Welcome to the animals of the world! We'll be your tour guides on this adventure. Click where you want to go.", 95)

//
// function secondFunction(){
//     firstFunction()
//
//     alert("Here");
//
//     function waitForIt(){
//         if (isPaused) {
//             setTimeout(function(){waitForIt()},100);
//         } else {
//             // go do that thing
//         };
//     }
// };
