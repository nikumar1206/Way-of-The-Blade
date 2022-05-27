const GRAVITY = 2
export class Character {
    constructor(posX, posY, velX = 0, velY = 0) {
        this.posX = posX
        this.posY = posY
        this.velX = velX
        this.velY = velY
        this.handleClick()
    } 

    draw(ctx) {
        ctx.fillStyle = "green"
        ctx.fillRect(this.posX, this.posY, 50, 150)
    }

    update(ctx) {
        this.posX += this.velX
        this.posY += this.velY
    
        if (!(this.posY >= 376)) {
            this.velY = GRAVITY
        } else {
            this.velY = 0
        }
    
        this.draw(ctx);
    }

    handleClick() {
        window.addEventListener("keydown", (e) => {
            if (e.key === "w") {
                this.posY -= 50;
            } else if (e.key === "a") {
                this.posX -= 50
            } else if (e.key === "d") {
                this.posX += 50
            } else if (e.key === "s") {
                this.velY += 50
            }
        })
    }


}