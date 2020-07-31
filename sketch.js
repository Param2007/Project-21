var bullet, wall, speed, weight, thickness, damage;

function setup() {
  createCanvas(1600,400);

  thickness = random(22,83);

  bullet = createSprite(50,200,thickness,20);
  bullet.shapeColor = "white";
  bullet.velocityX = random(223,321);


  wall = createSprite(1200,200,50,150);
  
  speed = random(223,321);
  weight = random(30,52);

}

function draw() {
  background(0); 
  
  if(bullet.x - wall.x === bullet.width - wall.width &&
    bullet.x - wall.x === wall.width - bullet.width) {
    bullet.velocityX = 0;
  }

  damage = (0.5 * weight * speed * speed) / (thickness * thickness * thickness);

  if(damage > 10) {
    bullet.shapeColor = color(225,0,0);
  }
  else {
    bullet.shapeColor = color(0,225,0);
  }

  drawSprites();
}