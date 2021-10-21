class Asteroid {
    constructor() {
        this.pos = createVector(width + random(10, 1000), random(0, height))
        this.vel = createVector(-random(1, 5), 0)
        this.size = createVector(random(10, 40), random(10, 40))
    }

    show() {
        fill(255, 0, 0)
        rect(this.pos.x, this.pos.y, this.size.x, this.size.y)
    }

    move() {
        this.pos.add(this.vel)
        if (this.pos.x + this.size.x < 0) {
            this.pos = createVector(width + random(10, 200), random(0, height))
        }
    }
    checkHit(ship) {
        let d = dist(this.pos.x, this.pos.y, ship.pos.x, ship.pos.y)
        if (d <= ship.r + 10) {
            return true
        }
    }
}