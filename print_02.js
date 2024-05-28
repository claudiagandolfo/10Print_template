let x = 0
let y = 0

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
}

function draw() {
  stroke(255, 0, 0);
  strokeWeight(5);
  ellipseMode (CORNER);
  ellipse (x, y, 50);

  x = x + 50;
  
  if(x>width) {
    x = 0;
    y = y + 50;
  }
}