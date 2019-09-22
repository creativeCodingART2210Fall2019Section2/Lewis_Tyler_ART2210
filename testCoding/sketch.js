function setup() {

  createCanvas(windowWidth,windowHeight);



 

}

function draw() {
 
  createCanvas(windowWidth,windowHeight);


  noFill();
  stroke(120);
  beginShape();
  curveVertex(100, 100); // the first control point
  curveVertex(100, 100); // is also the start point of curve
  curveVertex(150, 90);
  curveVertex(100, 100);
  curveVertex(60, 120);
  curveVertex(50, 150); // the last point of curve
  curveVertex(50, 150); // is also the last control point
  endShape();

  // Use the array to keep the code shorter;
  // you already know how to draw ellipses!
  fill(255, 0, 0);
  noStroke();


  strokeWeight(4);
  fill(255, 204, 0);

 
  strokeWeight(1);
  fill(255, 20, 0);
  ellipse(windowWidth/2, windowHeight/2, 100, 55);


 
  function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
  
 }


 line(30, 20, 85, 75)
 stroke(30, 30, 45, 45)

}
