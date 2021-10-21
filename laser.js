class Laser {
    constructor(_x, _y) {
        this.pos = createVector(_x, _y)
        this.vel = createVector(6, 0)
        this.size = createVector(30, 5)
    }

    show() {
        stroke(0, 255, 0)
        noFill()
        rect(this.pos.x, this.pos.y, this.size.x, this.size.y)
    }

    move() {
        this.pos.add(this.vel)
    }

    checkBorders() {
        if (this.pos.x > width) {
            return true
        }
    }

    checkHit(asteroid) {
        let d = dist(this.pos.x, this.pos.y, asteroid.pos.x, asteroid.pos.y)
        if (d <= asteroid.size.x) {
            return true
        }
    }
}