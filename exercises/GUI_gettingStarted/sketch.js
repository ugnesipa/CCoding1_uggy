

let params = {
	angle: 130,
	angleMin: 0,
    angleMax: 300,
    angleStep: 5,

	posX: 250,
	posXMin: 0,
    posXMax: 500,
    posXStep: 2,
    
    posY: 250,
	posYMin: 0,
    posYMax: 500,
    
    shapeW: 10,
	shapeWMin: 5,
    shapeWMax: 500,

    shapeH: 10,
	shapeHMin: 5,
    shapeHMax: 500,

    bgColor:[100,100,100],
    fColor:[0,255,0],
    fillToggle: true
   
}


let visible = true;

var gui;




// So now after all of our data has been created we will use p5.js
// to draw circles. We iterate through the array and draw a circle with
// the data in each object

function setup() {
    angleMode(DEGREES);
    createCanvas(500, 500);
    background(params.bgColor);

    myPos = createVector(params.posX,params.posY);



    // create the GUI
	gui = createGui('Change Values');
	gui.addObject(params);
    //noLoop();
}

function draw() {
    clear();

    
    myPos = createVector(params.posX,params.posY);



    background(params.bgColor);
    rectMode(CENTER);

    if (params.fillToggle == true) {
        fill (params.fColor);
    }
    else {
        noFill();
    }

    push();
    translate(myPos.x,myPos.y);
    rotate(params.angle);
        rect(0,0,params.shapeW,params.shapeH);
    pop();
    


    
}

// check for keyboard events
function keyPressed() {
    switch(key) {
      // type [F1] to hide / show the GUI
      case 'p':
        visible = !visible;
        if(visible) gui.show(); else gui.hide();
        break;
    }
  }