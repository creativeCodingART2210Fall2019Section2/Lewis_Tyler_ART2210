function setup() {

  createCanvas(windowWidth,windowHeight);



 

}

function draw() {
 
  createCanvas(windowWidth,windowHeight);


  noFill();
  stroke(120);
  beginShape();
  curveVertex(174, 161); // the first control point
  curveVertex(174, 161); // is also the start point of curve
  curveVertex(196, 221);
  curveVertex(231, 239);
  curveVertex(292, 244);
  curveVertex(327, 197); // the last point of curve
  curveVertex(327, 197); // is also the last control point
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
vertex(90)
endShape();



 line(30, 20, 85, 75)
 stroke(30, 30, 45, 45)

}
