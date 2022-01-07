//declares parameters
let params= {
    numCols:12,
    numRows: 7,
    alienVelocity: 0.5,
    bulletVelocity: 5

}
//declares variables
let screenWidth = 800;
let screenHeight = 600;
let aliens = [];
let alienWidth = 20;
let alienHeight = 20;
let hSpace = 30;
let vSpace = 30;
let xOffset = (screenWidth - (params.numCols - 1) * hSpace) / 2;
let yOffset = 20;
let shiftDown = 40;
let alienImg;
let shooterWidth = 100;
let shooterHeight = 20;
let shooter;
let bullets = [];
let bulletWidth = 10;
let bulletHeight = 10;
let emitters = [];
//declares the gui variable
var gui;
//alien image
function preload() {
    alienImg = loadImage('assets/spaceInvaders.png');
}

function setup() {
    populateAliens();
    //shows the parameters
    gui=QuickSettings.create(825,10, "My Game Controls")
        //adds range for columns
        .addRange("Number Of Columns",5,25,params.numCols,1,
        function(value){
            params.numCols = value;
            aliens=[];
            xOffset = (screenWidth - (params.numCols - 1) * hSpace) / 2;
            populateAliens();
        })
        //adds range for rows
        .addRange("Number Of Rows",3,10,params.numRows,1,
        function(value){
            params.numRows = value;
            aliens=[];
            populateAliens();
        })
        //adds range for alien speed (velocity)
        .addRange("Alien Speed",0.5,5,params.alienVelocity,0.5,
        function(value){
            params.alienVelocity = value;
            aliens=[];
            populateAliens();
        })
        //adds range for bullet speed (velocity)
        .addRange("Bullet Speed",3,15,params.bulletVelocity,0.5,
        function(value){
            params.bulletVelocity = value;
            aliens=[];
            populateAliens();
        });
    //sets up the shooter values
    shooter = new Shooter(screenWidth / 2, screenHeight - shooterHeight / 2);
    //creates the space of program
    createCanvas(screenWidth, screenHeight);
}

function draw() {
    //background colour
    background(0);
    //shows array of particles at the emitter
    emitters.forEach(emitter => {
        emitter.createParticles();
        emitter.update();
        emitter.show();

    });
    //moves shooter
    shooter.render();
    shooter.move();
    let shift = false;
    //shows aliens
    aliens.forEach(alien => {
        alien.move();
        alien.render();
        alien.pos.x >= screenWidth ? shift = true : null;
        alien.pos.x <= 0 ? shift = true : null;
    });
    if (shift) {
        aliens.forEach(alien => {
            alien.shift();
        })
    }
    for (let i = bullets.length - 1; i >= 0; i--) {
        bullets[i].move();
        bullets[i].render();
        for (let j = aliens.length - 1; j >= 0; j--) {
            //if bullet touches alien the emitter is pushed
            if (bullets[i].hits(aliens[j])) {
                emitters.push(new Emitter(aliens[j].pos.x, aliens[j].pos.y))
                //alien gets deleted
                aliens.splice(j,1);
                //bullet gets deleted
                bullets.splice(i,1);
                break
            }
        }
    }
    checkGameStatus()
}
//shows particles at emitter
emitters.forEach(emitter => {
    emitter.createParticles();
    emitter.update();
    emitter.show();
});

function checkGameStatus(){
    let gameOver=false;
    aliens.forEach(alien => {
        //if alien position reaches 550px game is over
        if(alien.pos.y>550){
            gameOver=true;
        }
    });
    //if game over display game over text and stop the program
    if (gameOver){
        noLoop();
        textSize(120);
        fill(250,0,0);
        textAlign(CENTER,CENTER)
        text("Game\nOver",400,300)
    }

}

function keyPressed() {
    //when space bar is pressed bullets are called
    if (keyCode === 32) {
        bullets.push(new Bullet(shooter.pos.x, screenHeight - shooterHeight,shooter.barrelAngle))
    }
    //if right arrow key is pressed the barrel angle changes by +0.2
    if (keyCode === RIGHT_ARROW) {
        shooter.barrelAngle+=0.2;
    //if left arrow key is pressed the barrel angle chnages by -0.2
    } else if (keyCode === LEFT_ARROW) {
        shooter.barrelAngle-=0.2;
    }
}

//shows aliens according to the params
function populateAliens() {
    for (let row = 0; row < params.numRows; row++) {
        for (let col = 0; col < params.numCols; col++) {
            aliens.push(new Alien(col * hSpace + xOffset, row * vSpace + yOffset))
        }
    }
}