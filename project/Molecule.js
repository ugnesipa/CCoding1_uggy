class molecule {
    constructor() {
        this.pos = createVector(Math.round(Math.random() * 500), Math.round(Math.random() * 500));
        this.speed = createVector(Math.random() * 3 - 1.5, Math.random() * 3 - 1.5);
        this.inc = createVector(0,0);
        this.size = Math.round(Math.random() * 10 + 5);
        this.scale = 1
        this.fCol = '#ff00ff';
    }

    //this method updates the values from the GUI
    updateVals(xInc, yInc, sc, fC) {
        this.inc.x = xInc;
        this.inc.y = yInc;
        this.scale = sc;
        this.fCol = fC;
    }

    move() {
        this.pos.x += this.speed.x * this.inc.x;
        this.pos.y += this.speed.y * this.inc.y;

        //update boundaries based on scale of transform
        let xMax = width * 1 / this.scale;
        let yMax = height * 1 / this.scale;

        if (this.pos.x > xMax) { this.pos.x = 0 }
        if (this.pos.x < 0) { this.pos.x = xMax }
        if (this.pos.y > yMax) { this.pos.y = 0 }
        if (this.pos.y < 0) { this.pos.y = yMax }
    }

    render() {
        push();
        scale(this.scale);
        translate(this.pos.x, this.pos.y);
        rotate(this.speed.heading())
        noStroke();
        fill(this.fCol);
        rect(0, 0, this.size);
        pop();

    }
}