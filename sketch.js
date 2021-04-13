var img;
let cnv,

function preload() {
  img = loadImage('data/panel2.jpg');
}

function setup() {
  cnv = createCanvas(700, 1000);
  let newCanvasX = (windowWidth - 700)/2;
  let newCanvasY = (windowHeight - 1000)/2;
  cnv.position(newCanvasX, newCanvasY);
}

function draw() {
  var tileCountX = mouseX / 10 + 1;
  var tileCountY = mouseY / 10 + 1;
  var stepX = width / tileCountX;
  var stepY = height / tileCountY;
  for (var gridY = 0; gridY < height; gridY += stepY) {
    for (var gridX = 0; gridX < width; gridX += stepX) {
      image(img, gridX, gridY, stepX, stepY);
    }
  }
}

function keyReleased() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
