let x = 0;
let y = 0;
let size = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  stroke(200);
  strokeWeight(2);
  fill(255);
  beginShape();
  vertex(x + size * 0.5, y);
  vertex(x + size, y + size * 0.3);
  vertex(x + size * 0.8, y + size);
  vertex(x + size * 0.2, y + size);
  vertex(x, y + size * 0.3);
  endShape(CLOSE);
  
  x = x + size * 1.2;
  
  if(x > width){
    x = 0;
    y = y + size * 1.2;
  }
}