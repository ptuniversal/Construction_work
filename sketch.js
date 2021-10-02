const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine;
var world;
var ground;
var box1,box2,box3,box4,box5;
var box6,box7,box8,box9,box10,box11,box12;
var ball;
var crane;
var rope;



function setup() {
  createCanvas(2000,800);
  background("blue")

  engine=Engine.create();
  world=engine.world;

  ground=new Ground(1000,750,3000,50);
  box1=new Box(500,150,100,50);
  box2=new Box(500,150,100,50);
  box3=new Box(500,150,100,50);
  box4=new Box(500,150,100,50);
  box5=new Box(500,150,100,50);

  box6=new Box(700,150,100,50);
  box7=new Box(700,150,100,50);
  box8=new Box(700,150,100,50);
  box9=new Box(700,150,100,50);
  box10=new Box(700,150,100,50);
  box11=new Box(700,150,100,50);
  box12=new Box(700,150,100,50);

  ball=new Ball(400,620,100);

  crane=new Crane(175,50,350,50);

  rope=new Rope(ball.body,crane.body,150);
  
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  ball.display();
  
  crane.display();

  rope.display();
  
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball.body,ball.body.position,{x:-50,y:-45});
  }
}
