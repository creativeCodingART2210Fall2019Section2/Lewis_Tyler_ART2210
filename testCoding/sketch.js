function setup() {
  createCanvas(windowWidth,windowHeight);
 

}

function draw() {
 
  strokeWeight(4);
  fill(255, 204, 0);
  ellipse(windowWidth/3, windowHeight/2, 100, 55);
  ellipse(windowWidth/2, windowHeight/3, 100, 55);
 
  strokeWeight(1);
  fill(255, 20, 0);
  ellipse(windowWidth/2, windowHeight/2, 100, 55);


 
  function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
  
 }
 


}