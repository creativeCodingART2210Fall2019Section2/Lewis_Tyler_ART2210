function setup() {

  createCanvas(windowWidth,windowHeight);



 

}

function draw() {
 
  createCanvas(windowWidth,windowHeight);


  noFill();
  stroke(120);
  beginShape();
  curveVertex(240, 127); // the first control point
  curveVertex(240, 127); // is also the start point of curve
  curveVertex(283, 249);
  curveVertex(333, 266);
  curveVertex(407, 161);
  curveVertex(453, 140); // the last point of curve
  curveVertex(453, 140); // is also the last control point
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


beginShape();
vertex(450)
endShape();



 line(30, 20, 85, 75)
 stroke(30, 30, 45, 45)

}
