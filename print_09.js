let x = 0;
let y = 0;
let diameter = 20;
let spacing = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  stroke(255);
  if (random(1) < 0.9) {
    ellipse(x, y, diameter, diameter);
  } else {
    // Disegna un cerchio alternativo con un colore diverso
    fill(255, 0, 0); // Colore rosso
    ellipse(x, y, diameter, diameter);
    fill(255); // Ripristina il colore bianco per i cerchi successivi
  }
  x = x + spacing;
  if (x > width) {
    x = 0;
    y = y + spacing;
  }
}