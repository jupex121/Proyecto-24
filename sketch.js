const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer1;
var plane1;
var rubber1;
var stone1;
var iron1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane1 = new Plane(600,height,1200,20);
    hammer1 = new hammer(10,100);
    rubber1 = new Rubber(100,100,50);
    stone1 = new stone(300,300,75,75);
    iron1 = new iron(1000,100,100,100);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane1.display();
    hammer1.display();
    rubber1.display();
    stone1.display();
    iron1.display();
 
}