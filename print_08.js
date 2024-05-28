let x = 0;
let y = 0;
let spacing = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(30, 30, 30);
}

function draw() {
  let randomShape = int(random(3));

  if (random(1) < 0.9) {
    noStroke();
    let randomColor = color(random(255), random(255), random(255), 150);
    fill(randomColor);

    if (randomShape === 0) {
      rect(x, y, spacing, spacing);
    } else if (randomShape === 1) {
      ellipse(x + spacing / 2, y + spacing / 2, spacing * 0.8);
    } else {
      triangle(x, y, x + spacing, y, x + spacing / 2, y + spacing);
    }
  } else {
    strokeWeight(1);
    stroke(255);
    if (random(1) < 0.5) {
      line(x, y, x + spacing, y + spacing);
    } else {
      line(x, y + spacing, x + spacing, y);
    }
  }

  x = x + spacing;

  if (x > width - spacing) {
    x = 0;
    y = y + spacing;
  }
}