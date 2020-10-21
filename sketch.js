
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbinimg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	//groundSprite = createSprite(width/2, height-35, width, 10);
	//groundSprite.shapeColor=color(255,255,0);

	ground = new Ground(width/2, height-35, width, 15);
	
	paper = new Paper(100,500,50);
	
	box_bottom = new Dustbin(620, 650, 150, 20 )

	box_left = new Dustbin(540, 550, 20, 225 )

	box_right = new Dustbin(685, 550, 20, 225 )
 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);


  box_bottom.display();
  box_left.display();
  box_right.display();
  ground.display();
  image(dustbinimg,525,435,175,225)
  paper.display();

}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper.body,paper.body.position,{x:425, y:-425});
	}
}



