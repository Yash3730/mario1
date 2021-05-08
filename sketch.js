var back;
var mario;
var imagemario;
var ground;

function preload() {

back=loadImage("mario back.png") 
imagemario=loadAnimation("1.png","2.png","3.png")
imageground=loadImage("ground.png")
}

function setup() {
  createCanvas(1500, 400);

  edges=createEdgeSprites()
  mario=createSprite(50,350)
  mario.addAnimation("running",imagemario)

  ground=createSprite(750,height,1500,10)
  //ground.addImage(imageground)
}
function draw() {
  background(back);
  if (keyDown("space")){
    mario.velocityY=-10;
    
  }
  mario.velocityY=mario.velocityY+1
  mario.collide(edges[3]);
  drawSprites();
}
