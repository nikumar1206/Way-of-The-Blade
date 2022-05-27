const GRAVITY = 0.5
export class Character {
    constructor(pos, vel) {

        this.posX = pos[0] // sets up position for characters
        this.posY = pos[1]

        this.velX = vel[0] // sets up velocity for characters
        this.velY = vel[1]

        this.handleClick()
    } 

    draw(ctx) {
        ctx.fillStyle = "green"
        ctx.fillRect(this.posX, this.posY, 25, 125)
    }

    wrap() {
        if (this.posX < 25) {
            this.posX = 1024 - 25
        } else if (this.posX > 975) {
            this.posX = 1024 - 975
        }
    }
    update(ctx) {

        if ((this.posX < 50 || this.posX > 950)) {
            this.wrap()

        }
        if (!(this.posY >= 376)) { // ensures characters stay within screen
            this.velY += GRAVITY // will mimic gravity acceleration
        } else {
            this.velY = 0
        }

        this.posX += this.velX
        this.posY += this.velY
    
        this.draw(ctx);
    }

    handleClick() {
        window.addEventListener("keydown", (e) => {
            if (e.key === "w") {
                this.velY = -50;
            } else if (e.key === "a") {
                this.velX = -25
            } else if (e.key === "d") {
                this.velX = 25
            } else if (e.key === "s") {
                this.velY = 25
            }
        })

        window.addEventListener("keyup", (e) => {
            console.log(e);
            if (e.key === "w") {
                this.velY = 0;
            } else if (e.key === "a") {
                this.velX = 0
            } else if (e.key === "d") {
                this.velX = 0
            } else if (e.key === "s") {
                this.velY = 0
            }
        })

        let player = new Character([200, 20], [0,0])
        window.player = player;
    
        let enemy = new Character([800, 20], [0,0])
    }


}