
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var groundObj;



function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;


	var ball_options = {
		isStatic: false,
		restitution:0.3,
		friction:0,
		density:1.2
	}




	//Create the Bodies Here.

	
	ball = Bodies.circle(260,100,20,ball_options);
	World.add(world,ball);

	groundObj = new Ground(width/2,670,width,20);


	Engine.run(engine);
	ellipseMode(RADIUS);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,20);
 
  groundObj.display();



 Engine.update(engine);
 
  drawSprites();
 
}

function bforce()
{
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball,{x:0, y:-0.05});
	}
}


