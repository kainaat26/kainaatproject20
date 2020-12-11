var car1,car2,car3,car4,car5,line1,line2,line3,line4,wall1,wall2,wall3,wall4;
var speed,weight;

function setup() {
  createCanvas(800,375);
 

  speed=random(55,90);
  weight=random(400,1500);

  
  car1 = createSprite(30,50,30,18);
  car1.shapeColor = ("blue");
  car1.velocityX = speed;


  
  wall1 = createSprite(770,50,20,35);


}
function draw() {
  background("black");  

  if(wall1.x-car1.x<(car1.width+wall1.width)/2)
  {
    car1.velocityX = 0;
    var deformation = 0.5 * weight * speed* speed/22509;
    if(deformation>180)
    {
      car1.shapeColor = color(255,0,0);
    }

    if(deformation<180 && deformation>100)
    {
      car1.shapeColor = color(230,230,0);
    }

    if(deformation<100)
      {
        car1.shapeColor = color (0,255,0);
      }
      
  }
 
  drawSprites();
 }