const GRAVITY = 0.5
export class Character {
    constructor(pos, vel, type) {

        this.posX = pos[0] // sets up position for characters
        this.posY = pos[1]

        this.velX = vel[0] // sets up velocity for characters
        this.velY = vel[1]

        this.type = type // identifies whether player 1 vs player 2
    }

    draw(ctx) {
        ctx.fillStyle = "green"
        ctx.fillRect(this.posX, this.posY, 25, 100)
    }

    wrap() {
        if (this.posX < 25) {
            this.posX = 1024 - 25
        } else if (this.posX > 1000) {
            this.posX = 15
        }
    }

    move(ctx) {
    
        if ((this.posX < 50 || this.posX > 950)) {
            this.wrap();
        }

        this.posX += this.velX
        
        this.posY += this.velY
        if (this.posY >= 430) { // ensures characters stay within screen
            this.velY = 0 // will mimic gravity acceleration
        } else {
            this.velY += GRAVITY
        }
    
        this.draw(ctx);
    }
};
