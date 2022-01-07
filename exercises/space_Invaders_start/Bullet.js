//bulet default
class Bullet{
    constructor(x,y,a){
    this.pos = createVector(x,y);
    this.angle=a;
    }
    render(){
        push()
        //bullet position
        translate(this.pos.x,this.pos.y);
        //color of bullet
        fill(255,0,0);
        //size of bullet
        ellipse(0,0,bulletWidth,bulletHeight)
        pop()
    }
    move(){
        //everytime this function is called the objects move in the direction of where the cannon is pointing
        this.pos.x+=Math.cos(this.angle)*params.bulletVelocity;
        this.pos.y+=Math.sin(this.angle)*params.bulletVelocity;
    }
    hits(alien){
        //this function determines if the bullet has touched an alien
        let distance = (p5.Vector.sub(this.pos, alien.pos)).mag();
        if (distance< bulletHeight/2 + alienHeight/2){
            return true;
        }else {
            return false;
        }
    }
}