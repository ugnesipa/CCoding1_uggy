//alien default
class Alien{
    constructor(x,y){
    this.pos = createVector(x,y);
    this.velocity = params.alienVelocity;
    }
    render(){
        push()
        translate(this.pos.x,this.pos.y);
        image(alienImg,-alienWidth/2,-alienHeight/2,alienWidth,alienHeight)
        pop()
    }
    move(){
        //everytime this function is called the objects move by 1pixel
        this.pos.x += this.velocity
    }
    shift(){
        //everytime this function is called the aliens move down and moves to the opposite direction
        this.pos.y += shiftDown; 
        this.velocity *= -1;
    }
}