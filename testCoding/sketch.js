function setup() {
  createCanvas(windowWidth,windowHeight);

  background(255, 204, 0);
 

}

function draw() {
 
  strokeWeight(4);
  fill(255, 204, 0);
  arc(50, 55, 50, 50, 0, HALF_PI);
  noFill()
 
  strokeWeight(1);
  fill(255, 20, 0);
  ellipse(windowWidth/2, windowHeight/2, 100, 55);


 
  function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
  
 }


 line(30, 20, 85, 75)
 stroke(30, 30, 45, 45)


}