var car,wall;
var speed,weight;
var wall,thickness;
var bullet,speed ,weight;


thickness=random(22,83)
speed=random(55,90)
weight=random(400,1500)

car=createSprite(50,200,50,50);

wall=createSprite(1500,200,60,height/2)
 
wall=createSprite(1200,200,thickness,height/2)

speed=random(223,321)
weight=random(30,52)


car.velocityX=speed;
 
if(wall.x-car.x<(car.width+wall.width)/2)
{
 car.velocityX=0;
 var deformation=0.5* weight * speed * speed/22509;
 if(deformation>180)
 {
  car.shapeColor=color(255,0,0);
 }
 if(deformation<180 && deformation>100)
 {
  car.shapeColor=color(230,230,0);
 }
 if(deformation<100)
 {
  car.shapeColor=color(0,255,0);
 }
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}

function hascollided(Lbullet,Lwall)
{
  bulletRightEdge=lbullet.x+Lbullet.width;
  wallLeftEdge=lwall.x;
if (bulletRightEdge>=wallLeftEdge)
{
  return true
}
return false

}

if(hascollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5 *weight *speed* speed/(thickness*thickness *thickness);

  if(damage>10)
  {
   wall.shapeColor=color(255,0,0);
  }


  if(damage<10)
  {
   wall.shapeColor=color(0,255,0);
  }

}













