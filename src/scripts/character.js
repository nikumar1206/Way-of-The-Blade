const GRAVITY = 2
export class Character {
    constructor(posX, posY, velX = 0, velY = 25) {
        this.posX = posX
        this.posY = posY
        this.velX = velX
        this.velY = velY
    } 

    draw(ctx) {
        ctx.fillStyle = "green"
        ctx.fillRect(this.posX, this.posY, 50, 150)
    }

    update(ctx) {
        this.draw(ctx);
    
        this.posX += this.velX
        this.posY += this.velY
    
        if (!(this.posY >= 376)) {
            this.velY = GRAVITY
        } else {
            this.velY = 0
        }
    }

    // animate(ctx) {
    //     setTimeout(() => {
    //         requestAnimationFrame(this.animate.bind(this, ctx));
    //     }, 16.66);
    //     this.update(ctx);
    //     // console.log("animate isx being called");
    // }

    
}