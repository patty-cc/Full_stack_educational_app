var createHabitatButtons = function(){
  // creates UNDERWATER button on map
      var main = document.getElementById("background-image-wrapper");
      var seaDiv = document.createElement("div");
      var seaBtn = document.createElement("img");
      seaDiv.setAttribute("id", "sea");
      main.appendChild(seaDiv);
      seaBtn.setAttribute("id", "sea-button");
      seaBtn.src="./public/images/uwbutton.png";
      seaDiv.appendChild(seaBtn);
      seaDiv.addEventListener("click", function() {
        makeRequest('http://localhost:3000/api/animals/jungle', renderSeaInfo);
        createQuizButton("Underwater");
      });

      var jungleDiv = document.createElement("div");
      var jungleBtn = document.createElement("img");
      jungleDiv.setAttribute("id", "jungle");
      main.appendChild(jungleDiv);
      jungleBtn.setAttribute("id", "jungle-button");
      jungleBtn.src = "./public/images/leaf.png";
      jungleDiv.appendChild(jungleBtn);
      jungleBtn.addEventListener("click", function() {
        makeRequest('http://localhost:3000/api/animals/jungle', renderJungleInfo);
        createQuizButton("Jungle");
          var textBox = document.getElementById("text-box2");
          textBox.id = "text-box";
          var welcomeText = document.getElementById("welcome-text");
          welcomeText.innerHTML = "";
          printText("welcome-text", "Welcome to the Jungle!", 60);
          setTimeout(function() {
            var welcomeText = document.getElementById("welcome-text");
            welcomeText.innerHTML = "";
            var textBox = document.getElementById("text-box");
            textBox.id = "text-box2";
            printText("welcome-text", "Let's see whats in our book", 60)
          }, 2500);
      });
}
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
  }, 3500)
}

timedText();

var renderMapView = function() {
    createHabitatButtons();
    setInterval(draw1,180);
    setInterval(draw,130);
  }


window.addEventListener("load", renderMapView);
