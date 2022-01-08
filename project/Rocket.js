class Rocket {
    constructor(x,y){
        this.pos = createVector(x,y);
        this.angle=a;
        this.velocity = params.rocketVelocity;
    }
    render(){
        push()
        //rocket position
        translate(this.pos.x,this.pos.y);
        //rocket image
        image(rocketImg,-rocketWidth/2,-rocketHeight/2,rocketWidth,rocketHeight)
        pop()
    }
    move(){
        //everytime this function is called the objects move in the direction of where the cannon is pointing
        this.pos.x+=Math.cos(this.angle)*procketVelocity;
        this.pos.y+=Math.sin(this.angle)*rocketVelocity;    
    }
    hits(particle){
        //this function determines if the bullet has touched a particle
        let distance = (p5.Vector.sub(this.pos, particle.pos)).mag();
        if (distance< rocketHeight/2 + particleHeight/2){
            return true;
        }else {
            return false;
        }
    }
}
