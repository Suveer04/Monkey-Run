
var monkey , monkey_running
var banana ,bananaImage,spawnBananas,bananasGroup,obstacle, obstacleImage;
var FoodGroup;
var score;
var ground
var survivalTime = 0;

function preload(){
  
  
Running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}



function setup() {
  createCanvas(600,400);
  ground = createSprite(300,300,600,60);
  ground.velocityX = -5;
  
  monkey = createSprite(100,200,30,30);
  monkey.addAnimation("running monkey",Running);
  monkey.scale = 0.1;
  
obstacle = createSprite(500,230,600,60);
   obstacle.velocityX = -5;
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.3;
}

function draw() {

  background(220);
  if(ground.x < 600){
    ground.x = 300;
  }
  
if(keyDown("space") && monkey.y >= 180){
  monkey.velocityY = -13;
  
  }
   
  monkey.velocityY = monkey.velocityY + 1;
  
  monkey.collide(ground);
 
  spawnBananas(); 
spawnObstacles();
  
  stroke("red");
  textSize(20);
  survivalTime = Math.ceil(frameCount,frameRate())
  text("Survival time : " + survivalTime,200,30);
  spawnBananas.lifetime = 300;
  
  drawSprites();
}

function spawnBananas(){
  if(frameCount % 80 === 0){
  var  banana = createSprite(500,200,600,60);
  banana.y = Math.round(random(120,200));
  banana.velocityX = -5;
  banana.addImage("banana",bananaImage);
  banana.scale = 0.1;
}
}
  
  
function spawnObstacles(){
  if(frameCount % 300 === 0){
     var  obstacle = createSprite(500,230,600,60);
  obstacle.x = Math.round(random(200,300));
  obstacle.velocityX = -5;
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.3;

}
}
  

