var canvas,backgroundImage
var PLAY = 1;
var END = 0;
var gameState = PLAY;


var truck1 = createSprite(236,134,20,20);
var truck2 = createSprite(252,84,20,20)
var canvas
var score
var trucks;


var ground = createSprite(4000,395,800,30);
ground.velocityX = -4;
ground.x = ground.width/2;

var obstaclesGroup = createGroup();

function preload(){
  canvas = loadImage("canvas1.jpg");
}

function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = newGame();
  game.gameState();
  game.start();
}

function draw(){
text("Score:"+score,200,50);

if(gameState === PLAY){
  score = score+Math.round(World.frameCount/4);
  if(ground.x>0){
    ground.x = ground.width/2;
  }
  
}

}
