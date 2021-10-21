let coord = []

class Terrain {
    constructor() {

    }

    show(inc, start) {
        push()
        stroke(255)
        fill(0)
        translate(0, -200)
        beginShape()
        var xoff = start
        for (var x = 0; x < width; x++) {
            var y = noise(xoff) * height


            if (x == 0 || x == width - 1) {
                y = 0
            }
            vertex(x, y)
            // ellipse(x, y, 1)
            // line(x, 0, x, y)
            xoff += inc

        }
        endShape()
        pop()


        push()
        stroke(255)
        fill(0)
        translate(0, 200)
        beginShape()
        for (var x = 0; x < width; x++) {
            var y = noise(xoff) * height

            if (x == 0 || x == width - 1) {
                y = height
            }
            vertex(x, y)
            xoff += inc

            // coord.push(x, y)

        }
        endShape()
        pop()
    }

    checkHit(ship) {
        // let d = dist(x, y, ship.pos.x, ship.pos.y)
        // if (d <= 30) {
        //     return true
        // }
    }

}