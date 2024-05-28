let x = 0;
let y = 0;
let rectWidth = 50;
let rectHeight = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
}

function draw() {
  stroke(255, 0, 0);
  strokeWeight(5);
  rectMode(CORNER);
  rect(x, y, rectWidth, rectHeight);

  x = x + rectWidth;
  
  if(x > width - rectWidth) {
    x = 0;
    y = y + rectHeight;
  }
}