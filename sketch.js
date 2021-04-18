var balloon,balloonImage1,balloonImage2;

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon2.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;

  textSize(20); 
}

// function to display UI
function draw() {
  background(bg);
  drawSprites();

  if(keyDown(LEFT_ARROW)){
    balloon.x = -1;
    balloon.addAnimation(balloonImage2,"hotAirBalloon");
    
  
  }
   if(keyDown(RIGHT_ARROW)){
    balloon.x = 1;
    balloon.addAnimation(balloonImage2,"hotAirBalloon");
  
  }
   if(keyDown(UP_ARROW)){
    balloon.y = -1;   
    balloon.addAnimation(balloonImage2,"hotAirBalloon");
   
  }
   if(keyDown(DOWN_ARROW)){
    balloon.y = 1;
    balloon.addAnimation(balloonImage2,"hotAirBalloon");
    
    
  }

  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}
