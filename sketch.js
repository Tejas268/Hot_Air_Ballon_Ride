var balloon, balloonImage1, balloonImage2, F;
var gameState = "ballonMoving";

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1 = loadAnimation("hotairballoon1.png");
   balloonImage2 = loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  createCanvas(1360, 635);

  balloon = createSprite(250, 450, 150, 150);
  balloon.addAnimation("hotAirBalloon", balloonImage1);
  balloon.addAnimation("movingBalloon", balloonImage2);
  balloon.scale = 0.5;
}

// function to display UI
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    balloon.changeAnimation("movingBalloon", balloonImage2);
    balloon.x -= 5;
    F = frameCount + 1;
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.changeAnimation("movingBalloon", balloonImage2);
    balloon.x += 5;
    F = frameCount + 1;
  }
  else if(keyDown(UP_ARROW)){
    balloon.changeAnimation("movingBalloon", balloonImage2);
    balloon.y -= 5;
    balloon.scale += 0.0008;
    F = frameCount + 1;
  }
  else if(keyDown(DOWN_ARROW) && balloon.y < 494){
    balloon.changeAnimation("movingBalloon", balloonImage2);
    balloon.y += 5;
     balloon.scale -= 0.0008;
    F = frameCount + 1;
  }

  if(frameCount === F) {
    balloon.changeAnimation("hotAirBalloon", balloonImage1)
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("Use arrow keys to move Hot Air Balloon!", 40, 40);
}
