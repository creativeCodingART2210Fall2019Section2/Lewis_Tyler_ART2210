//let bubble = [];
let b;
function setup() {
  createCanvas(windowWidth,windowHeight);
  b = new Bubbles();
}

function draw() {
  background(0);
  for (let i = 0; i < 50; i++) {
    b.move();
    b.show();
  }
  }

function mousedragged(){
  let p = random(10,50);
  
bubbles.push(b);
}


class Bubbles {
  constructor() {
    this.x = random(width/2-30, width/2+30);
    this.y = random(height/2-30,height/2+30);
    this.r = random(0, 5);
  }


move () {
  this.x = this.x + random(-5, 5);
  this.y = this.y + random(-5, 5);
}

show() {
  stroke(225);
  strokeWeight(10);
  noFill();
  ellipse(this.x, this.y, this.r * 2,this.r * 2);
}
}
