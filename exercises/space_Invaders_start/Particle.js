//particle default
class Particle {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.velocity = p5.Vector.random2D();
        this.velocity.mult(random(0.5, 2))
        this.acc = createVector(0, 0);
        this.r = 2;
        this.lifetime = 255;
    }
    finished() {
        //when the particle disappears
        return (this.lifetime < 0)
    }
    applyForce(force) {
        this.acc.add(force)
    }
    update() {
        //this is how long the particle updates for
        this.velocity.add(this.acc);
        this.pos.add(this.velocity);
        this.acc.set(0, 0);
        this.lifetime -= 5
    }
    render() {
        //particle colour
        fill(0, 255, 0, this.lifetime);
        //particle shape and size
        ellipse(this.pos.x, this.pos.y, this.r * 2)
    }

}