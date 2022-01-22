
var bg, backgroundImg;
var ironMan;
var stone,stoneGroup;
var spike,spikeGroup;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironManImg=loadImage("images/iron.png")
  stoneImage=loadImage("images/stone.png")
  spikeImage=loadImage("images/spikes.png")
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.scale=2
  bg.velocityX=-5
  bg.addImage(backgroundImg)
  ironMan=createSprite(470,440,20,30)
  ironMan.addImage(ironManImg)
  ironMan.scale=0.3
  ironMan.debug=true;
  ironMan.setCollider("rectangle",100,0,200,400)
  stoneGroup = new Group();
  spikeGroup = new Group();
  ground=createSprite(500,600,400,30)
}

function draw() {
  if(keyDown("space"))
  {
    ironMan.velocityY=-4     
  } 
  if(keyDown("left"))
  {
    ironMan.velocityX=-4
  }
  if(keyDown("right"))
  {
    ironMan.velocityX=4
  }
  
if(bg.x<100){
  bg.x=bg.width/4
}
if(ironMan.x<200){
  ironMan.x=200
}

 ironMan.velocityY=ironMan.velocityY+0.5
 ironMan.collide(ground )
 ground.visible=false;
 generateStone();

 for( i = 0; i<(stoneGroup).length; i++)
 {
   var temp = (stoneGroup).get(i)
   if(temp.isTouching(ironMan)){
     ironMan.collide(temp)
   }
 }
   generateSpike();
   for( i = 0; i<(spikeGroup).length; i++)
   {
     var temp = (spikeGroup).get(i)
     if(temp.isTouching(ironMan)){
       ironMan.collide(temp)
     }
   }
    drawSprites();
   
}
function generateStone()
{
  if(frameCount%70==0){
    var stone = createSprite(1200,120,40,10)
    stone.scale=0.2
    stone.addImage(stoneImage)
   stone.y=random(50,450)
   stone.scale=0.5
   stone.velocityX=-5
   stone.lifetime=250
   stoneGroup.add(stone)
  }
}
   function generateSpike(){
     if(frameCount%60==0){
     var spike = createSprite(1200,120,50,50)
     spike.addImage(spikeImage)
     spike.scale=0.3
     spike.velocityX=-5
     spike.lifetime=280
     spikeGroup.add(spike)
     spike.y=random(50,450)
    }
    }   

   