const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;


function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  object = Bodies.rectangle(200,100,50,50);
  World.add(world.object);
}

function draw() {
  background("black"); 
  rectMode(CENTER); 
  rect(200,200,50,50);
  drawSprites();
}