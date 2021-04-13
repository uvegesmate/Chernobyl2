var img;

function preload() {
  img = loadImage('data/panel2.jpg');
}

function setup() {
  createCanvas(500, 700);
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
