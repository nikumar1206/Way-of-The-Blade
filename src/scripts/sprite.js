export class Sprite {

    constructor(pos, imageSrc, width, height, scale, totalSpriteFrames) {

        this.pos = pos
        this.posX = pos[0]
        this.posY = pos[1]

        this.width = width
        this.height = height
        this.scale = scale

        this.image = new Image()
        this.image.src = imageSrc
        console.log(this.image, this.image.src);

        this.totalSpriteFrames = totalSpriteFrames // will handle looping through sprite sheet
        this.currFrame = 0
        this.framesComplete = 0
    
        this.framesElapsed = 0 // will handle slowing down animation to what we want
        this.framesHold = 10

    }

    draw(ctx) {
        // console.log(ctx);
        ctx.drawImage(
            this.image,
            this.currFrame * (this.image.width/this.totalSpriteFrames), 
            0,
            this.image.width / this.totalSpriteFrames,
            this.image.height, 
            this.posX, 
            this.posY,
            (this.image.width / this.totalSpriteFrames) * this.scale,
            this.image.height * this.scale
            )
    }

    update(ctx) {
        this.draw(ctx);
        this.framesElapsed++
        console.log(this.totalSpriteFrames);
        if (this.framesElapsed % this.framesHold === 0) {
            if (this.currFrame <= this.totalSpriteFrames) {
                this.currFrame += 1
            } else {
                this.currFrame = 0 
            }
        }
    }
}

