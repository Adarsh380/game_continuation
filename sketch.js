const Bodies = Matter.Bodies;

var background_image;
var spaceship;

function preload(){
  background_image = loadImage("images/space.jpg");
}

function setup() {
  createCanvas(1200,800);
  spaceship = new SpaceShip(550,700);
}

function draw() {
  background(background_image);  

  if (keyIsDown(RIGHT_ARROW)) {
    spaceship.moveRight();
  }

  if (keyIsDown(LEFT_ARROW)) {
    spaceship.moveLeft();
  }

  if (keyIsDown(UP_ARROW)) {
    spaceship.shoot();
  }

  spaceship.display();

  drawSprites();
}