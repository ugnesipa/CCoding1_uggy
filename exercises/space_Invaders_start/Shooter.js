//shooter default
class Shooter {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.direction = 1;
        this.barrelAngle = 0

    }
    render() {
        push()
        //shooter position
        translate(this.pos.x, this.pos.y);
        //shooter colour
        fill(100);
        //draws rectangle from centre
        rectMode(CENTER)
        //draws rectangle
        rect(0, 0, shooterWidth, shooterHeight)
        //rotates the shooter
        rotate(this.barrelAngle)
        //draws rectangle from corner
        rectMode(CORNER);
        //rectangle colour
        fill(100);
        //draws rectagle
        rect(-5,-5,40,10)
        pop()
    }
    move() {
        //if shooter touches the wall it moves in the opposite direction
        if(this.pos.x<0|| this.pos.x>500){
            this.direction*= -1
        }
        //everytime this function is called the object moves by 1 pixel
        this.pos.x += this.direction;
    }
    setDirection(direction){
        //sets direction of shooter
        this.direction = direction
    }
}