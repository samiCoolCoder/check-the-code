var ball1,ball2,ball3,ball4,ball5;
var ground1;
var chain1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1=new ball(400,500)
	/*ball2=new ball(450,500)
	ball3=new ball(350,500)
	ball4=new ball(500,500)
	ball5=new ball(300,500)*/
	ground1=new ground(400,height-450,280,10)
	chain1 = new chain(ball1.body,ground1.body,0,0);

	Engine.run(engine);
  
}


function draw() {

  background("white");
  ball1.display();
  /*ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();*/
  ground1.display();
  chain1.display();

 
}



