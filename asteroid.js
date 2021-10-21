class Asteroid {
    constructor() {
        this.pos = createVector(width + random(10, 1000), random(0, height))
        this.vel = createVector(-random(1, 5), 0)
        this.size = createVector(random(10, 40), random(10, 40))
        this.spacing = random(50, 80)
    }

    show() {

        stroke(255, 0, 0)
        noFill()
        beginShape()
        let spacing = this.spacing
        for (let a = 0; a < 360; a += spacing) {
            let x = this.size.x * sin(a) + this.pos.x
            let y = this.size.y * cos(a) + this.pos.y
            vertex(x, y)
        }

        endShape(CLOSE)

        // rect(this.pos.x, this.pos.y, this.size.x, this.size.y)
    }

    move() {
        this.pos.add(this.vel)
        if (this.pos.x + this.size.x < 0) {
            this.pos = createVector(width + random(10, 200), random(0, height))
        }
    }
    checkHit(ship) {
        let d = dist(this.pos.x, this.pos.y, ship.pos.x, ship.pos.y)
        if (d <= 30) {
            return true
        }
    }
}