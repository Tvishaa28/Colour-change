function setup() {
  createCanvas(800,400);
  square = createSprite(400, 200, 50, 50);
  rectangle = createSprite(200,200,80,50);
}

function draw() {
  background("pink");  
  rectangle.x = mouseX
  rectangle.y = mouseY

  if(abs(square.x-rectangle.x)<square.width/2+rectangle.width/2 && 
    abs(square.y-rectangle.y)<square.height/2+rectangle.height/2){
    square.shapeColor = "blue"
    rectangle.shapeColor = "blue"
  }
  else{
    square.shapeColor = "turquoise"
    rectangle.shapeColor = "turquoise" 
  }
  drawSprites();
}