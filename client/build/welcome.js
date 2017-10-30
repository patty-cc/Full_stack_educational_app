var createJungleButton = function(){
  var main = document.getElementById("background-image-wrapper");
  var jungleDiv = document.createElement("div");
  var jungleBtn = document.createElement("img");
  jungleDiv.setAttribute("id", "jungle");
  main.appendChild(jungleDiv);
  jungleBtn.setAttribute("id", "jungle-button");
  jungleBtn.src="./public/images/leaf.png";
  jungleDiv.appendChild(jungleBtn);
  jungleBtn.addEventListener("click", function() {
    makeRequest('http://localhost:3000/api/animals/jungle', renderJungleInfo);
  })
}
var printText = function(destination, message, speed) {
  // var audio = new Audio('public/click2.mp3'); --h8 git

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
    printText("welcome-text", "Welcome to the animals of the world!", 60)
  }, 0);
  setTimeout(function() {

    speech.innerHTML = "";
    printText("welcome-text", "We'll be your tour guides on this adventure. Where would you like to go?", 60)
    box.id = "text-box2";
    // box.style.background = "green url('./public/images/speechBubble2reverse.png') no-repeat"
    // box.style.backgroundPosition = "right";
  }, 3500)
}

timedText();

var transition = function() {
  var jungleBtn = document.getElementById("jungle-button");
  var background = document.getElementById("background-image-wrapper");
  var speech = document.getElementById("welcome-text");


  jungleBtn.style.display ="none"
  background.style.opacity = 0;
  background.style.background = "green url('./public/images/jungle.jpg') no-repeat"
  background.style.opacity = 1;

  speech.innerHTML = "";
  printText("welcome-text", "Wow, look at this jungle!", 60)


//
// var background = document.getElementById("background-image-wrapper").style;
//   background.opacity = 1;
//   (function fade(){(background.opacity-=.1)<0?background.visibility="hidden":setTimeout(fade,40)})();
//
//   background.background = "green url('./public/images/jungle.jpg') no-repeat";

  // background.opacity = 1;
  // (function fade(){(background.opacity+=.1)<0?background.display="visible":setTimeout(fade,40)})();



  // var background = document.getElementById("background-image-wrapper");
  // var speech = document.getElementById("welcome-text");
  //


}


// var jungleButton = document.getElementById("jungle-button")
// jungleButton.addEventListener("click", transition)
