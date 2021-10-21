class Ship {
    constructor() {
        this.pos = createVector(width / 2, height / 2)
        this.r = 20
    }

    show(_x, _y) {
        fill(255)
        this.pos.x = _x
        this.pos.y = _y
        circle(this.pos.x, this.pos.y, this.r * 2)
    }

    // move() {
    //     if (keyIsDown(LEFT_ARROW)) {
    //         this.pos.x -= 5;
    //     }

    //     if (keyIsDown(RIGHT_ARROW)) {
    //         this.pos.x += 5;
    //     }

    //     if (keyIsDown(UP_ARROW)) {
    //         this.pos.y -= 5;
    //     }

    //     if (keyIsDown(DOWN_ARROW)) {
    //         this.pos.y += 5;
    //     }
    // }

    checkBorders() {
        if (this.pos.x - this.r <= 0) {
            this.pos.x = this.r
        }
        if (this.pos.x + this.r >= width) {
            this.pos.x = width - this.r
        }
        if (this.pos.y - this.r <= 0) {
            this.pos.y = this.r
        }
        if (this.pos.y + this.r >= height) {
            this.pos.y = height - this.r
        }
    }





}