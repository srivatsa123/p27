
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
//const Render = Matter.Render;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	//Engine.run(engine);
	bobObject1 = new Bob(200,420,40);
	bobObject2 = new Bob(280,420,40);
	bobObject3 = new Bob(360,420,40);
	bobObject4 = new Bob(440,420,40);
	bobObject5 = new Bob(520,420,40);
	roof1 = new Roof(380,100,600,30);
	rope1 = new Rope(bobObject1.body,roof1.body,-180,0);
	rope2 = new Rope(bobObject2.body,roof1.body,-100,0);
	rope3 = new Rope(bobObject3.body,roof1.body,-20,0);
	rope4 = new Rope(bobObject4.body,roof1.body,60,0);
	rope5 = new Rope(bobObject5.body,roof1.body,140*1,0);
   
}


function draw() {
 
  background("white");
   Engine.update(engine);
  //rectMode(CENTER);
    bobObject1.display(); 
	bobObject2.display();  
	bobObject3.display();  
	bobObject4.display(); 
	bobObject5.display();  
	roof1.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
	//console.log("hello");
}
function keyPressed(){
	if(keyCode=== 38){
		console.log("hello");
	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-80,y:-80});
	}
  }



