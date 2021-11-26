const Engine = Matter.Engine;
const Composite= Matter.Composite;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1,ground2,ground3,ground4,ground5;
var clown1,clown2,clown3,clown4;
var apple1,apple2,apple3,apple4;
var backgroundImg;
var sling,arrow;
var slingshot, gameState = "onSling";



function preload(){
    backgroundImg = loadImage("./sprites/circus-back.jpg");

    
}

function setup(){
    canvas = createCanvas(1550,600);
    engine = Engine.create();
    world = engine.world;
    ground1 = new Ground(width/2,height-10,width,20);
    ground2 = new Ground(600,180,200,20);
    ground3 = new Ground(900,480,200,20);
    ground4 = new Ground(1300,300,200,20);
    ground5 = new Ground(1300,550,200,20);
    clown1 = new Clown(600,120,100,100);
    clown2 = new Clown(900,420,100,100);
    clown3 = new Clown(1300,240,100,100);
    clown4 = new Clown(1300,490,100,100);
    apple1 = new Apple(600,100,50,50);
    apple2 = new Apple(900,400,50,50);
    apple3 = new Apple(1300,220,50,50);
    apple4 = new Apple(1300,470,50,50);
    arrow =new Arrow(100,100,50,50)
    sling= new SlingShot(arrow.body,{x:130,y:500})
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

    ground1.display();
    ground2.display();
    ground3.display();
    ground4.display();
    ground5.display();
    clown1.display();
    clown2.display();
    clown3.display();
    clown4.display();
    apple1.display();
    apple2.display();
    apple3.display();
    apple4.display();
    arrow.display()
    sling.display()
}

function mouseDragged(){
    if(gameState=="onSling") {
        
        Matter.Body.setPosition(arrow.body, {x:mouseX, y:mouseY});
        
    }
}

