var engine, world;

var mode = 0;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Body = Matter.Body;

var button1,
  button2,
  tankimg,
  groundimg,
  gameState = "creation";
function preload() {
  tankimg = loadImage("images/tank1.png");
  groundimg = loadImage("images/ground.png");
}

function setup() {
  createCanvas(windowWidth - 10, windowHeight - 10);

  engine = Matter.Engine.create();
  world = engine.world;

  if (mode == 0) {
    button1 = createButton("Play against Computer");
    button1.position(width / 2 - 120, height / 3 - 40);
    button1.style("background", "#fed8b1");

    button1.style("width", "240px");
    button1.style("height", "80px");

    button2 = createButton("Play against Each other");
    button2.position(width / 2 - 120, height / 2 - 40);

    button2.style("width", "240px");
    button2.style("height", "80px");
  }

  Matter.Engine.run(engine);
}

function draw() {
  background(0);

  if (mode == 0) {
    button1.show();
    button2.show();
    button1.mousePressed(() => {
      mode = 1;
      console.log("mode1");
      button1.hide();
      button2.hide();
    });
    button2.mousePressed(() => {
      mode = 2;
      console.log("mode2");
      button2.hide();
      button1.hide();
    });

    fill("white");
    textSize(20);
    text("Play against Computer ", width / 2 - 120, height / 3);
    text("Play against Each other ", width / 2 - 120, height / 2);
  }

  if (mode == 1) {
    if (gameState === "creation") {
      ground1 = Matter.Bodies.rectangle(width / 2, 600, width, 10, {
        isStatic: true,
      });
      Matter.World.add(world, ground1);
      player = Matter.Bodies.rectangle(300, 200, 100, 50, {
        restitution: 0,
        friction: 1,
        isStatic: false,
      });
      Matter.World.add(world, player);
      console.log(ground1);
      gameState = "play";
    } else if (gameState == "play") {
      PlayerMovement(player);
      rectMode(CENTER);
      fill("red");
      rectMode(CENTER);
      rect(ground1.position.x, ground1.position.y, width, 10);
      imageMode(CENTER);
      image(tankimg, player.position.x, player.position.y, 100, 100);
    }
  }

  drawSprites();
}

function PlayerMovement(player) {
  if (keyDown("d")) player.position.x = player.position.x + 1;
  if (keyDown("a")) player.position.x -= 1;
}
