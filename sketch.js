var engine, world;

var mode = 0;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Body = Matter.Body;

var button1, button2, tankimg, groundimg;
function preload() {
  tankimg = loadImage("images/tank1.png");
  groundimg = loadImage("images/ground2.jpg");
}

function setup() {
  createCanvas(windowWidth - 10, windowHeight - 10);

  engine = Matter.Engine.create();
  world = engine.world;

  if (mode == 0) {
    button1 = createButton("Play against Computer");
    button1.position(width / 2 - 120, height / 3 - 40);
    button1.style("background", "#fed8b1");
    // button1.style('opacity', '0')
    button1.style("width", "240px");
    button1.style("height", "80px");

    button2 = createButton("Play against Each other");
    button2.position(width / 2 - 120, height / 2 - 40);
    // button2.style('opacity', '0')
    button2.style("width", "240px");
    button2.style("height", "80px");
  }

  // player = Matter.Bodies.rectangle(300, 200, 100, 50, { restitution: 0, friction: 1 ,isStatic:false})
  // Matter.World.add(world, player)

  Matter.Engine.run(engine);
}

function draw() {
  background(0);

  if (mode == 0) {
    button1.show();
    button2.show();
    button1.mousePressed(() => {
      mode = 1;
      console.log("mode1")
      button1.hide();
      button2.hide();
    });
    button2.mousePressed( ()=> {
      mode = 2;
      console.log("mode2")
      button2.hide();
      button1.hide();
    });

    fill("white");
    textSize(20);
    text("Play aganist Computer ", width / 2 - 120, height / 3);
    text("Play aganist Each other ", width / 2 - 120, height / 2);
  }

  // if (mode == 1) {
  // ground1 = Matter.Bodies.rectangle(width / 2, 600, width, 10, { isStatic: true })
  // Matter.World.add(world, ground1)

  // console.log(ground1)

  // PlayerMovement()
  // rectMode(CENTER)
  // fill("red")
  // rect(ground1.position.x, ground1.position.y, width, 10)
  //  image(groundimg, 200, 200, 300, 200)
  // rect(player.position.x, player.position.y, 100, 50)
  // image(tankimg, player.position.x, player.position.y, 200, 200)
  // }

  drawSprites();
}
// function PlayerShoot() {

// }

function PlayerMovement() {
  if (keyDown("d")) player.position.x = player.position.x + 1;
  if (keyDown("a")) player.position.x -= 1;
  // if (keyDown("s"))
  // 	player.position.y += 1
}

// function AIShoot() {

// }

// var Example = Example || {};

// Example.terrain = function() {
//     var Engine = Matter.Engine,
//         Render = Matter.Render,
//         Runner = Matter.Runner,
//         Composites = Matter.Composites,
//         Common = Matter.Common,
//         MouseConstraint = Matter.MouseConstraint,
//         Mouse = Matter.Mouse,
//         Composite = Matter.Composite,
//         Query = Matter.Query,
//         Svg = Matter.Svg,
//         Bodies = Matter.Bodies;

//     // provide concave decomposition support library
//     Common.setDecomp(require('poly-decomp'));

//     // create engine
//     var engine = Engine.create(),
//         world = engine.world;

//     // create renderer
//     var render = Render.create({
//         element: document.body,
//         engine: engine,
//         options: {
//             width: 800,
//             height: 600
//         }
//     });

//     Render.run(render);

//     // create runner
//     var runner = Runner.create();
//     Runner.run(runner, engine);

//     // add bodies
//     if (typeof fetch !== 'undefined') {
//         var select = function(root, selector) {
//             return Array.prototype.slice.call(root.querySelectorAll(selector));
//         };

//         var loadSvg = function(url) {
//             return fetch(url)
//                 .then(function(response) { return response.text(); })
//                 .then(function(raw) { return (new window.DOMParser()).parseFromString(raw, 'image/svg+xml'); });
//         };

//         loadSvg('./svg/terrain.svg')
//             .then(function(root) {
//                 var paths = select(root, 'path');

//                 var vertexSets = paths.map(function(path) { return Svg.pathToVertices(path, 30); });

//                 var terrain = Bodies.fromVertices(400, 350, vertexSets, {
//                     isStatic: true,
//                     render: {
//                         fillStyle: '#060a19',
//                         strokeStyle: '#060a19',
//                         lineWidth: 1
//                     }
//                 }, true);

//                 Composite.add(world, terrain);

//                 var bodyOptions = {
//                     frictionAir: 0,
//                     friction: 0.0001,
//                     restitution: 0.6
//                 };

//                 Composite.add(world, Composites.stack(80, 100, 20, 20, 10, 10, function(x, y) {
//                     if (Query.point([terrain], { x: x, y: y }).length === 0) {
//                         return Bodies.polygon(x, y, 5, 12, bodyOptions);
//                     }
//                 }));
//             });
//     } else {
//         Common.warn('Fetch is not available. Could not load SVG.');
//     }

//     // add mouse control
//     var mouse = Mouse.create(render.canvas),
//         mouseConstraint = MouseConstraint.create(engine, {
//             mouse: mouse,
//             constraint: {
//                 stiffness: 0.2,
//                 render: {
//                     visible: false
//                 }
//             }
//         });

//     Composite.add(world, mouseConstraint);

//     // keep the mouse in sync with rendering
//     render.mouse = mouse;

//     // fit the render viewport to the scene
//     Render.lookAt(render, {
//         min: { x: 0, y: 0 },
//         max: { x: 800, y: 600 }
//     });

//     // context for MatterTools.Demo
//     return {
//         engine: engine,
//         runner: runner,
//         render: render,
//         canvas: render.canvas,
//         stop: function() {
//             Matter.Render.stop(render);
//             Matter.Runner.stop(runner);
//         }
//     };
// };

// Example.terrain.title = 'Terrain';
// Example.terrain.for = '>0.16.1';

// if (typeof module !== 'undefined') {
//     module.exports = Example.terrain;
// }
