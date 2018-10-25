//DAT405 / GAD405
//00_Template
//The purpose of this sketch is to provide a basic template
//for P5.js projects

function setup() {
  // Create the canvas
  createCanvas(720, 400);
}
function draw() {

  // Set colors
  fill(0, 255, 255, 255);
  stroke(127, 63, 120);

  // Top left
  ellipse(40, 40, 80, 80);

  fill(0, 0, 255, 255);

  // Top Right
  ellipse(660, 40, 80, 80);

  fill(0, 255, 0, 255);

  // Bottom Right
  ellipse(660,350, 80, 80);

fill(255, 0, 0, 255);

// Bottom Left
ellipse (40,350, 80, 80);

// BL BR
stroke(255, 153, 51);
line (40,350,660,350);

//BL TL
stroke(204, 204, 255);
line (40,350,40,40);

// BL TR
stroke(204, 0, 204, 255);
line (40,350,660,40);

//TR TL
stroke(102, 153, 255);
line (660,40,40,40);

//TR BR
stroke(0, 255, 204);
line (660,40,660,350);

//BR TL
stroke(0, 153, 153);
line (660,350,40,40);

}
