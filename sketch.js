
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hamm;
var Plane;
var stone;
var rubb;
var sand1,sand2,sand3,sand4,sand5,sand6,sand7,sand8;
var Iron;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

   
    hamm=new hammer(400,350,65,35);
    Plane=new plane(400,680,800,20);
    stone=new rock(500,633.83943483487498756459,70,70);
    rubb=new rubber(730,639,30);
    sand1=new sand(50,665,5);
    sand2=new sand(200,665,5);
    sand3=new sand(210,665,5);
    sand4=new sand(220,650+15,5);
    sand5=new sand(250,650+15,5);
    sand6=new sand(600,650+15,5);
    sand7=new sand(625,650+15,5);
    sand8=new sand(635,650+15,5);
    Iron=new iron(370,655,60,30);
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Plane.display();
  hamm.display();
  stone.display();
  rubb.display();
  drawSprites();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  Iron.display();

  
}



