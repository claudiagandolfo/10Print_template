let x = 0;
let y = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(130, 170, 180);
}

function draw() {
  let randomColor = color(random(255), random(255), random(255));
  stroke(randomColor);
  strokeWeight(1);
  fill(randomColor);
  let shape = int(random(2));
  if (shape == 0) {
    // Disegna un cerchio
    ellipse(x + 10, y + 50, 40);
  } else {
    // Disegna un rettangolo
    rect(x, y, 20, 100);
  }
  
  x = x + 40;
  
  if (x > width) {
    x = 0;
    y = y + 100;
  }
}