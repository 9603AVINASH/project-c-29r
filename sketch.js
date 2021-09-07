const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var Stones = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

}

function draw() {
  background(51);
  Engine.update(engine);

  ground.show();
  Bridge.show();
  leftWall.show();
  rightWall.show();

  for {var stone of stones} {
    stone.show();
  }

  
  for (var i = 0; i <= 8; i++)
  var x = random(width / 2 - 200, width / 2+300);
  var y = random(-10, 140);
  var stone = new Stone(x,y, 80, 80);
  Stones.push(stone);
}
