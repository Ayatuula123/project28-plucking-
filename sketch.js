const Body= Matter.Engine;
const Engine = Matter.Engine;
const World = Matter.World;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var dground,tree,treeimg;
var boy,boyimg;
var stone;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var world,boy,tree; 

function preload(){
	boy=loadImage("images/boy.png");
	tree=loadImage("image/tree.png");
  }

function setup() {
	createCanvas(1000, 650);

	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(855,325,39);
	mango3=new mango(670,260,35);
	mango4=new mango(730,200,35);
	mango5=new mango(710,320,36);
	mango6=new mango(780,250,35);
	mango7=new mango(825,170,33);
	mango8=new mango(880,260,35);
	mango9=new mango(940,220,35);
	mango10=new mango(980,305,35);


	attach=new throwStone.body,{x:100,y:465};

	tree=createSprite(775,368);
	tree.addImage(treeimage);
	tree.scale=0.42;

	boy=createSptite(160,550);
	boy.addImage(boyimage);
	boy.scale=0.125;


	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {
  rectMode(CENTRE);
  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
  Fill("grey");
  textSize(18);

   detectcollision(stone,mango1);
   detectcollision(stone,mango2);
   detectcollision(stone,mango3);
   detectcollision(stone,mango4);
   detectcollision(stone,mango5);
   detectcollision(stone,mango6);
   detectcollision(stone,mango7);
   detectcollision(stone,mango8);
   detectcollision(stone,mango9);
   detectcollision(stone,mango10);


   drawSprite();


   mango1.display();
   mango2.display();
   mango3.display();
   mango4.display();
   mango5.display();
   mango6.display();
   mango7.display();
   mango8.display();
   mango9.display();
   mango10.display();

}

function mouseDragged(){
	matter.body.setposition(stone.body,{x:mousex,y:mouse});


}

  function  mouseRelesed(){
	  attach.fly();

	  }


	  function   detectcollision(lstone,lmango){
		  if(lstone.body.position.x-lmango.body.position.x<lmango.diametre+lstone.diametre
			&&lmango.body.position.x-lstone.body.position.x<lmango.diametre+lstone.diametre
			&&lstone.body.position.y-lmango.body.position.y<lmango.diametre+lstone.diametre
			&&lmango.body.position.y-lstone.body.position.y<lmango.diametre+lstone.diametre){
				matter.body.setStatic(lmango.body,false);

			}

		}

		function  keyPressed(){
			if(keyCode===32){
				matter.body.setposition(stoneobj.body,{x:255,y:420})

				launcharobtect.attach(stoneobj.body);
			}

		}
