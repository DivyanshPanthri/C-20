
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var ground;
var rock;
var wall;
var fan;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 1,
    frictionAir: 0 
  }
   
   var ground_options ={
     isStatic: true
   };
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);

    var rock_options = {

    restitution: 1
    }

   rock = Bodies.circle(300, 30, 50, rock_options);
   World.add(world, rock); 

    wall = Bodies.rectangle(300, 200, 200, 10, ground_options);
    World.add(world, wall); 

    fan = Bodies.rectangle(50, 200, 100, 20, ground_options);
    World.add(world, fan);



}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  ellipse(rock.position.x, rock.position.y, 50);
  rect(wall.position.x,wall.position.y,200, 10);
  //rect(fan.position.x,fan.position.y, 100, 20);

 
}

