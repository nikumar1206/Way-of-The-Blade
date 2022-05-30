export class Sprite {
    constructor(pos, width, height, imageSrc, scale = 1, maxFrames) {
        this.posX = pos[0]
        this.posY = pos[1]

        this.width = width
        this.height = height
        this.imageSrc = imageSrc
        this.scale = scale
        this.maxFrames = maxFrames


        this.image = new Image()
        this.image.src = imageSrc
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
    }

    update() {
        this.draw();
    }

}