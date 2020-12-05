var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var redCarImg
var blueCarImg
var whiteCarImg
var blackCarImg
var trackImg
function preload() {
redCarImg = loadImage("images/car2.png");
blueCarImg = loadImage("images/car3.png")
whiteCarImg = loadImage("images/car1.png")
blackCarImg = loadImage("images/car4.png")
trackImg = loadImage("images/track.png")
}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(255)
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState === 2) {
    game.end()
  }

 // text(mouseX+","+mouseY,mouseX,mouseY)
}
