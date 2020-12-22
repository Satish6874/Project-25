
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbinObj;
var groundObj,paperObj;
var engine, world;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	dustbinpt1 = new Dustbin(1000,650,200,20);
	dustbinpt2 = new Dustbin(900,550,20,240);
	dustbinpt3 = new Dustbin(1100,550,20,240);
		
	paperObj = new Paper(200,650,50);

	groundObj = new Ground(width/2,670,width,20);

	var render  = Render.create({
	element: document.body,
	engine: engine,
	options: {
	width: 120,
	height: 700,
	wireframes: false	
	}
	});
  
	Engine.run(engine);
	Render.run(render);
}


function draw() {
  
  background(0);
  
  paperObj.display();
  groundObj.display();
  dustbinpt1.display();
  dustbinpt2.display();
  dustbinpt3.display();
  
  

  drawSprites();
 
}
function keyPressed(){
if (keyCode === UP_ARROW){
	Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:130,y:-130});
}
}




