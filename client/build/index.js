var renderMapView = function() {
  createJungleButton();
  setInterval(draw1,180);
  setInterval(draw,130);
}


window.addEventListener("load", renderMapView);
