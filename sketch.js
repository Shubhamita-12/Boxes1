var box1, box2, box3;

function setup() {
  createCanvas(800,400);
  box1 =createSprite(400, 200, 50, 50);
  box1.shapeColor = "green";
  box2 = createSprite(10,10,50,50);
  box2.shapeColor = "green";
  box3 = createSprite(600,200,50,50);
  box3.velocityX = -5;
}

function draw() {
  background(255,255,255);  

  box2.x = mouseX;
  box2.y = mouseY;

  

  if(box3.x-box1.x < box3.width/2 + box1.width/2) {
      box3.velocityX = box3.velocityX*(-1);
    }

   if(isTouching(box2,box3)) {
   box3.shapeColor = "red";
   box2.shapeColor = "red";
   }
 else {
  box3.shapeColor = "green";
  box2.shapeColor = "green";
 }

  drawSprites();
}

