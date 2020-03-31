
  
const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Constraint = Matter.Constraint;
 const Render = Matter.Render;
 var engine,world;
 var body = [];
 var ob1,ob2,ob3,ob4,ob5,ground;
 var gamestate = "start";
 var box;
 var box1;
 var box2;
 var box3;
 var box4;
 var box5;
 var box7;
 var box8;
 var box9;
 var box10;
 var box11;
 var box12;
 var box13;
 var box14;
 var box15;
 var box16;
 var box17; 
 var box18;
 var box19;
 var box20;
 var box21;
 var box22;
 var box23;
 var box24;
 var box25;
 var box26;
 var box27;
 var box28;
 var box29;
 var box30;
 var box31;
 var box32;
var chain;
var chain1;
var chain2;
var ball;
var ball1;
var ball2;
var ball3;
var ball4;
var ball5;
var render;

function setup() {
    createCanvas(1300, 420);
    engine = Engine.create();
    world = engine.world;
    body = new Particle (160,70,30,30);
    
    box = new Box(900,280,20,20);
    box1 = new Box(890,280,20,20);
    box2 = new Box(880,280,20,20);
    box3 = new Box(890,260,20,20);
    box8 = new Box(980,120,40,40);
    box9 = new Box(820,120,40,40);
    box10 = new Box(850,240,20,110);
    box11 = new Box(910,240,20,110);
    box12 = new Box(880,260,20,20);
    box13 = new Box(900,240,20,20);
    box14 = new Box(980,100,20,20);
    box15 = new Box(820,100,20,20);
    box17 = new Box(820,350,20,100);
    box16 = new Box(900,350,20,100);
    box18 = new Box(800,350,20,100);
    box19 = new Box(920,350,20,100);
    box20 = new Box(1010,320,50,10);
    box21 = new Box(1020,350,20,100);
    box22 = new Box(1000,350,20,100);
    box23 = new Box(1090,320,50,10);
    box24 = new Box(1080,350,20,100);
    box25 = new Box(1100,350,20,100);
    box26 = new Box(1050,290,100,10);
    box27 = new Box(1090,290,10,100);
    box28 = new Box(1010,280,10,100);
    box29 = new Box(1040,280,30,30);
    box30 = new Box(1050,250,130,10);
    box31 = new Box(1250,200,20,200);
    box32 = new Box(1250,50,30,30);
    ball = new Box(620,340,20,100)
    ball1 = new Box(600,300,100,20)
    ball2 = new Box(600,290,20,20)
    ball3 = new Box(600,290,20,20)
    ball4 = new Box(580,340,20,100)
    ground = new Ground(650,400,1300,20);
    ob1 = new Box(900,160,200,20);
    ob2 = new Box(850,300,200,40);
    ob3 = new Ground(200,160,50,40);
    //ob4 = new Ground(210,110,10,70);
    //ob5 = new Ground(210,110,10,70);
    chain = new Sling(body.body,{x:210,y:70});
    chain1 = new Sling(ob1.body,{x:900,y:160});
   
    console.log(mouseX);
}
 
function draw() {
    background(61);
    Engine.update(engine);  
    console.log(mouseX);
    
    body.display();
    fill(195);
    ground.display();
    ob1.display();
    
    ob2.display();
    ob3.display();
    
    box.display();
    box1.display();
    box2.display();
   box3.display();

    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box24.display();
    box25.display();
    box23.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    box31.display();
    box32.display();
    ball.display();
    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    chain.display();
    chain1.display();
    fill(0,132,215)
    rect(210,110,10,70);
    

}
function mouseDragged(){
    if(gamestate === "start"){
    Matter.Body.setPosition(body.body,{x:mouseX,y:mouseY});
    } 
}
function mouseReleased(){
    chain.fly();
    text("press ctrl + r to play again",600,600); 
    gamestate = "launched";
}


    
