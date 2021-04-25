//Pro16-Monkey Go Happy -1
//the objective ofnthis projet is to make a monkey game
//File name-Project 16
//created by Shreeparna Roy
//creating variables
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage,bananaGroup
var FoodGroup, obstacleGroup
var score
var ground,invisibleGround
var survivalTime

//using preload to load animation and images

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}

//using setup to create sprite to and adding animation and also making scrolling screen

function setup() {
  createCanvas(500,200)
 monkey=createSprite(200,200,20,20)
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.09
  
  ground=createSprite(180,200,400,20)
  ground.velocityX=-4
  ground.x = ground.width /2;
  console.log(ground.x)
  
  invisibleGround=createSprite(400,390,20,20)
  invisibleGround.visible=false
  
  bananaGroup=createGroup();
  obstacleGroup=createGroup();
  
 
}

// giving colour to background ,then giving gravity to monkey also making  monkey  jump and displaying survival time
function draw() {
  background(180);
  
   if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;       
    }
     monkey.velocityY = monkey.velocityY + 0.8  
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
    monkey.collide(ground);

spawnfood()
spawnobstacles()  
//  stroke("white")
// textSize(20)
//  fill("white")
// text("score:" +score,300,50)
  
  stroke("black")
  textSize(20)
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime:"+survivalTime,100,50);
  
  drawSprites();
}
// using the same thing used in trex game for clouds
function spawnfood(){
  if(frameCount%80===0){
    var banana=createSprite(400,165,10,40)
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage)
    banana.velocityX=-3
    banana.lifetime=200
    banana.scale=0.1
    camera.position.x=displayWidth/2
    camera.position.y=banana[index-1].y

  }  
}
// using same thing like trex game for making the obstacles an spwan them
function spawnobstacles(){
   if (frameCount % 60 === 0){
   var obstacle = createSprite(200,160,10,40);
     obstacle.addImage(obstaceImage);
     obstacle.scale=0.2
   obstacle.velocityX = -(6 + score/100);
      var rand = Math.round(random(1,6));
     obstacle.lifetime=300;
    obstacleGroup.add(obstacle);
   
   }
} 



