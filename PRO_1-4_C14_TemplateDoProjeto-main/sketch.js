var bow , arrow,  scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score=0;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png")
  blue_balloonImage = loadImage("blue_balloon0.png")

  
}



function setup() {
  createCanvas(400, 400);
  

  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
 
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0    
}

function draw() {
 background(0);
  
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  
  bow.y = World.mouseY
  
  
  if (keyDown("space")) {
    createArrow();
    
  }
   
  var select_balloon = Math.round(random(1,4));
  
  
  if (World.frameCount % 100 == 0) {
   switch(select_balloon ){
    case 1: red.addImage(red_balloonImage);
    break;
    case 2: balaoazul.addImage(blue_balloonImage);
    break;
    case 3: balaoverde.addImage(green_balloonImage);
    break;
    case 4: balaorosa.addImage(pink_balloonImage);
    break;
    default:break;
  }}
    
  drawSprites();
}



 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}

function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
}

function blueBalloon() {
  balaoazul.createSprite(0,Math.round(random(10,200)),10,10);
  balaoazul.velocityX=3;
  balaoazul.scale=0.1;
  balaoazul.lifetime=150;
}

function greenBalloon() {
  balaoverde.createSprite(0,Math.round(random(15,350)),10,10); 
  balaoverde.velocityX=3;
  balaoverde.scale=0.1;
  balaoverde.lifetime=150;
}

function pinkBalloon() {
  balaorosa.createSprite(0,Math.round(random(35,95)),10,10);
  balaorosa.velocityX=3;
  balaorosa.scale=0.5;
  balaorosa.lifetime=150;
}
