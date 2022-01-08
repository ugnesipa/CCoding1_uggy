let molecules = [];
let howManyold

let params = {
	howMany: 10,
	howManyMin: 5,
    howManyMax: 20,

	increaseX: 1,
	increaseXMin: -5,
    increaseXMax: 5,
    increaseXStep: 0.25,

    increaseY: 1,
	increaseYMin: -5,
    increaseYMax: 5,
    increaseYStep: 0.25,
    
    scale: 1.5,
	scaleMin: 1,
    scaleMax: 3,
    scaleStep: 0.1,

    bgColor: [0,0,0],
    fColor: '#8f70ff'

}

let visible = true;
var gui;

//rocket image
function preload() {
    rocketImg = loadImage('assets/rocket.png');
}

function populateArray() {
    for (i = 0; i <  params.howMany; i++) {
        molecules.push(new molecule());
    }
    return console.log("population complete. Length of array", molecules.length)
}

function setup() {
    populateArray();
    createCanvas(800, 500);
    //set background color default or by parameters
    background(params.bgColor);
    rectMode(CENTER)

    // create the GUI
	gui = createGui('Change Values');
    //set gui position
    gui.setPosition(820, 10);
    //add parameters
	gui.addObject(params);
}

function draw() {

    background(params.bgColor);
    //if parameters changed populate molecule array again
    if (howManyold != params.howMany) {
        molecules = [];
        //populate the Array
        populateArray();
    }
    molecules.forEach(molecule => {
        molecule.updateVals(
        params.increaseX, 
        params.increaseY,
        params.scale, 
        params.fColor)
        // molecule move function is called
        molecule.move();
        //molecule render function is called
        molecule.render();
    });

    //store params.howMany in howManyOld to compare
    howManyold = params.howMany
}

// check for keyboard events
function keyPressed() {
    switch(key) {
      // type [F1] to hide / show the GUI
      case 'p':
        visible = !visible;
        if(visible) gui.show(); 
        else gui.hide();
        break;
    }
  }
