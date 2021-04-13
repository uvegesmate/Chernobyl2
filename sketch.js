var img;

var radiation;

var font;


function preload() {
  img = loadImage('data/panel2.jpg');
  radiation = loadSound("data/radiation.aac");
  font = loadFont("data/digital-7.ttf");
}

function setup() {
  
  radiation.loop();
  
  
  
}

function draw() {
  createCanvas(windowWidth, windowHeight);
  
  
  
  radiation.rate(1+mouseX*0.001+mouseY*0.001);
  
  
  
  var tileCountX = mouseX / 10 + 1;
  var tileCountY = mouseY / 10 + 1;
  var stepX = width / tileCountX;
  var stepY = height / tileCountY;
  for (var gridY = 0; gridY < height; gridY += stepY) {
    for (var gridX = 0; gridX < width; gridX += stepX) {
      image(img, gridX, gridY, stepX, stepY);
    }
  }
  textFont(font);
  fill(255,255,255,0+mouseX*0.2+mouseY*0.1,);
  textSize(50);
  translate(windowWidth/2, windowHeight/2);
  textAlign(CENTER, CENTER)
  text("CHERNOBYL", 0,0);
}

function keyReleased() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
