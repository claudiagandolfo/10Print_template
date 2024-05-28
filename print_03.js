let x=0;
let y=0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background (130, 170, 180);
}

function draw() {
  stroke(0);
  strokeWeight(0.8);
  fill (255);
  rect (x, y, 20, 100);
  
  x= x + 40;
  
  if(x>width) {
    x= 0;
    y= y + 100;
  }
  //y= y +100;

} 