import { Game } from "./game";

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
        return this.player.health < 25 ? this.color = "red" : this.color
    }

    update(ctx) {
        let healthBarwidth = (this.player.health/100) * this.maxWidth
        ctx.lineWidth = 10; // border isnt working
        ctx.strokeStyle = "yellow"
        ctx.fillStyle = this.colorChange()
        ctx.fillRect(this.posX, this.posY, healthBarwidth, this.maxHeight)
    }
}