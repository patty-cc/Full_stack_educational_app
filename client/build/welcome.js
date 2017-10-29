
var printText = function(destination, message, speed) {
  // var audio = new Audio('public/click2.mp3');

  var i = 0;
  var interval = setInterval(function() {
    document.getElementById(destination).innerHTML += message.charAt(i);
    i++;
    if (i > message.length) {
      clearInterval(interval);
    }
    // audio.play();
  }, speed);

}

var timedText = function() {
  var speech = document.getElementById("welcome-text");
  var box = document.getElementById("text-box")
  setTimeout(function() {
    printText("welcome-text", "Welcome to the animals of the world!", 80)
  }, 0);
  setTimeout(function() {

    speech.innerHTML = "";
    printText("welcome-text", "We'll be your tour guides on this adventure. Click where you want to go.", 80)
    box.style.background = "green url('./public/images/speechBubble3reverse.png') no-repeat"
    box.style.backgroundPosition = "right"
  }, 4000)
}

timedText();
