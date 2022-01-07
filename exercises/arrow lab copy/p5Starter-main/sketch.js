//declaring variables
let myArrow,dy,dx;

function setup() {

  //this is the space for the program to run in
  createCanvas(710, 400);

  //new object using arrow as a mould
  myArrow = new Arrow(width/2,height/2,0);

}

  function draw() {

  //background color
  background(100,100,100);

    //calling the update values function from the arrow class
    myArrow.updateValues();

    //calling the draw function from the arrow class
    myArrow.drawArrow();

  }