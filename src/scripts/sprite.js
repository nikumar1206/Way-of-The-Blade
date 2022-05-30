export class Sprite {

    constructor(pos, offset, imageSrc, width, height, scale, totalSpriteFrames) {

        this.pos = pos
        this.posX = pos[0]
        this.posY = pos[1]

        this.offsetX = offset[0]
        this.offsetY = offset[1]
    
        this.width = width
        this.height = height
        this.scale = scale

        this.image = new Image()
        this.image.src = imageSrc
        // console.log(this.image, this.image.src);

        this.totalSpriteFrames = totalSpriteFrames // will handle looping through sprite sheet
        this.currFrame = 0
        this.framesComplete = 0

        this.framesElapsed = 0 // will handle slowing down animation to what we want
        this.framesHold = 5

    }

    drawSprite(ctx) {
        // console.log(ctx);
        ctx.drawImage(
            this.image,
            this.currFrame * (this.image.width/this.totalSpriteFrames), 
            0,
            this.image.width / this.totalSpriteFrames,
            this.image.height, 
            this.posX - this.offsetX, 
            this.posY - this.offsetY,
            (this.image.width / this.totalSpriteFrames) * this.scale,
            this.image.height * this.scale
            )
    }

    updateSprite(ctx) {
        this.drawSprite(ctx);
        this.framesElapsed++
        // console.log(this.currFrame);
        if (this.framesElapsed % this.framesHold === 0) {
            if (this.currFrame < this.totalSpriteFrames - 1) {
                this.currFrame += 1
            } else {
                this.currFrame = 0 
            }
        }
    }
}

