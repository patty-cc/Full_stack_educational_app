// var canvasWidth = 450;
// var canvasHeight = 300;
//
// var spriteWidth = 3084;
// var spriteHeight = 492;
//
// var rows = 1;
// var cols = 10;
//
// var trackRight = 0;
//
// var trackLeft = 1;

var width2 = 308;

var height2 = 492;

var curFrame2 = 0;

var frameCount2 = 10;

// var x=-15;
// var y=0;

// var srcX=0;
// var srcY=0;

// var left = false;
//
// var right = false;
//
// var speed = 10;

var canvas = document.getElementById('explorer2');

canvas.width = 310;
canvas.height = 300;

var ctx = canvas.getContext("2d");

var character = new Image();

character.src = "character2fixed.png";

function updateFrame(){

 curFrame = ++curFrame2 % frameCount2;

 srcX = curFrame * width2;
 ctx.clearRect(-5,0,width2,height2);
}

function draw(){

 updateFrame();

 ctx.drawImage(character,srcX,0,width2,height2,-5,0,width2,height2);
}

setInterval(draw,130);
