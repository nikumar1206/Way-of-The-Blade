export class Character {
    constructor(posX, posY, velX = 0, velY = 25) {
        this.posX = posX
        this.posY = posY
        this.velX = velX
        this.velY = velY
    } 

    draw(ctx) {
        // ctx.fillStyle = "lightblue";
        // ctx.fillRect(0, 0, 1024, 526);
    
        ctx.fillStyle = "green"
        ctx.fillRect(this.posX, this.posY, 50, 150)
    }

    update(ctx) {
        this.draw(ctx);
        this.posX += this.velX
        this.posY += this.velY
    }

    // animate(ctx) {
    //     setTimeout(() => {
    //         requestAnimationFrame(this.animate.bind(this, ctx));
    //     }, 16.66);
    //     this.update(ctx);
    //     // console.log("animate isx being called");
    // }

    
}