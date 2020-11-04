
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score,invisibleGround

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  ground = createSprite(200,300,400,10);

  ground.x = ground.width /2;
  
  
  monkey= createSprite(50,230,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.2

  
}


function draw() {
  background("white")
  
   if(keyDown("space")&& monkey.y >= 160) 
        monkey.velocityY = -15;
      
  monkey.velocityY = monkey.velocityY + 0.9
  
  monkey.collide(ground);
  
  if (frameCount % 300  === 0){ 
   var obstacle= createSprite(600,300,40,10);
    obstacle.y = Math.round(random(280,280));
    obstacle.addImage( obstaceImage); 
    obstacle.velocityX = -6;
    obstacle.scale=0.3
  }
  
  if (frameCount % 300  === 0){ 
   var banana= createSprite(600,300,40,10);
    banana.y = Math.round(random(100,100));
    banana.addImage( bananaImage); 
    banana.velocityX = -6;
    banana.scale=0.1
  }
drawSprites();
   
}






