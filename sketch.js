var gunbarrel, gungrip, guntrig1, guntrig2, guntrig3;
var bullet, bulletSpeed, bulletWeight, bulletcount;
var wall, thickness;
var damage;

function setup() {
  createCanvas(1600,400);
  gunbarrel = createSprite(70,200,120,25);
  gungrip = createSprite(32,237,27,50);
  guntrig1 = createSprite(55,230,20,5);
  guntrig2 = createSprite(67,220,5,15);
  guntrig3 = createSprite(55,217,3,9);
  thickness = random(22,83);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  bulletcount = 1;
}

function draw() {
  background(0,0,0);  

  drawSprites();

  if(keyWentDown("space")&&bulletcount==1){
    shoot();
  }

  if(bulletcount==0){
      if(hasCollided(bullet,wall)){
        bullet.velocityX = 0;
        damage = (0.5*bulletWeight*bulletSpeed*bulletSpeed)/(thickness*thickness*thickness);
        if(damage<10){
          wall.shapeColor = "green";
        }
        else{
          wall.shapeColor = "red";
        }
      text("PRESS [R] TO RELOAD",200,350);
      if(keyWentDown("r")){
        reload();
      }
    }
  }
  else{
    text("PRESS [SPACE] TO SHOOT",200,350);
  }
  
  textSize(20);
  fill("white");
  text("WEAPONS TESTING FACILITY",20,20);
  textSize(15);
  fill("green");
  text("EFFECTIVE",20,40);
  fill("red");
  text("INEFFECTIVE",20,60);
}

function shoot(){
  bulletSpeed = random(223,321);
  bulletWeight = random(30,52);
  thickness = random(22,83);
  bullet = createSprite(50,200,20,10);
  bullet.shapeColor = "white";
  bullet.velocityX = bulletSpeed;
  bulletcount = 0;
}

function reload(){
  thickness = random(22,83);
  wall.width = thickness;
  wall.shapeColor = color(80,80,80);
  removeSprite(bullet);
  bulletcount = 1;
}