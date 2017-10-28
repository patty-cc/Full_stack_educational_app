var canvasWidth = 450;
var canvasHeight = 300;

var spriteWidth = 3084;
var spriteHeight = 492;

var rows = 1;
var cols = 10;

var trackRight = 0;

var trackLeft = 1;

var width = spriteWidth/cols;

var height = spriteHeight/rows;

var curFrame = 0;

var frameCount = 10;

var x=-15;
var y=0;

var srcX=0;
var srcY=0;

var left = false;

var right = false;

var speed = 10;

var canvas = document.getElementById('explorer2');

canvas.width = canvasWidth;
canvas.height = canvasHeight;

var ctx = canvas.getContext("2d");

var character = new Image();

character.src = "character2fixed.png";

function updateFrame(){

 curFrame = ++curFrame % frameCount;

 srcX = curFrame * width;
 ctx.clearRect(x,y,width,height);
}

function draw(){

 updateFrame();

 ctx.drawImage(character,srcX,srcY,width,height,x,y,width,height);
}

setInterval(draw,180);
