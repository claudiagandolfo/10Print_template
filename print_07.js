let x = 0;
let y = 0;
let size = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  let randomColor = color(random(255), random(255), random(255));
  strokeWeight(2);
  if (random(1) < 0.5) {
    noStroke();
    fill(randomColor);
    rect(x + size, y + size, size, size);
  } else {
    stroke(randomColor);
    noFill();
    ellipse(x + size * 1.5, y + size * 1.5, size * 1.5);
  }

  x += size * 2;

  if (x > width) {
    x = 0;
    y += size * 2;
  }
}