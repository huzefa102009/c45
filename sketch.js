var bg,bgimg
var ss,ss1
var alien,a1,a2,a3,a4,a5,a6,a7
var laser
var aliengroup,lasergroup
var score=0
var gamestate="play"
function preload(){
 bgimg= loadImage("assets/bg6.jpg")
 ss1=loadImage("assets/ss1.png")
 a1=loadImage("assets/a1.png") 
 a2=loadImage("assets/a2.png")
 a3=loadImage("assets/a3.png")
 a4=loadImage("assets/a4.png")
 a5=loadImage("assets/a5.png")
 a6=loadImage("assets/a6.png")
 a7=loadImage("assets/a7.png")
}

function setup() {

  createCanvas(1400,600)
  ss=createSprite(100,350)
  ss.addImage(ss1)
  ss.scale=0.35
  aliengroup=new  Group ()
  lasergroup=new  Group ()
}

function draw() {
  //set background color
  background(bgimg);
  fill ("white")
  textSize(30)
  text ("Score = "+score,1000,50)  
 if(gamestate==="play"){
if(keyDown(UP_ARROW)){
ss.y-=5
}

if(keyDown(DOWN_ARROW)){
  ss.y+=5
  }
  if(keyDown("space")){
    releaselaser()
    }
 }
  
  drawSprites();
}

function releaselaser(){
  laser=createSprite(200,200,60,5)
  laser.y=ss.y
  laser.shapeColor="lime"
  laser.velocityX=10
  laser.lifetime=150
  lasergroup.add(laser)
}

