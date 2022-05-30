
export class HealthBar {
    constructor(pos, player, color) {
        this.posX = pos[0]
        this.posY = pos[1]
        this.player = player
        this.maxWidth = 400
        this.maxHeight = 20
        this.color = color

    }
    colorChange() {
        return this.player.health < 25 ? this.color = "#B22B27" : this.color
    }

    update(ctx) {
        if (this.player.changePHB) {
            this.player.health -= 1
            this.player.changePHB -= 1
        }
        let healthBarwidth = (this.player.health/100) * this.maxWidth
        ctx.fillStyle = this.colorChange()
        ctx.fillRect(this.posX, this.posY, healthBarwidth, this.maxHeight, 5)
    }
}