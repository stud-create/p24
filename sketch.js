const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer1
var stone1,rubber1,iron1


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer1= new Hammer(10,100);
    stone1 = new stone(800,300)
    iron1 = new iron(500,500)
    rubber1 = new Rubber(400,400,10)

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer1.display();
    stone1.display()
    iron1.display()
    rubber1.display()

    
 
}