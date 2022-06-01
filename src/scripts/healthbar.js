export class HealthBar {
  constructor(pos, player, color) {
    this.posX = pos[0];
    this.posY = pos[1];
    this.player = player;
    this.maxWidth = 600;
    this.maxHeight = 20;
    this.color = color;
  }
  colorChange() {
    return this.player.health < 25 ? "#B22B27" : "#71BC68";
  }

  update(ctx) {
    if (this.player.changePHB) {
      this.player.health -= 1;
      this.player.changePHB -= 1;
    }
    let healthBarwidth = (this.player.health / 100) * this.maxWidth;
    ctx.fillStyle = this.colorChange();
    if (this.color === "red") {
      ctx.fillRect(this.posX, this.posY, healthBarwidth, this.maxHeight, 5);
    } else {
      ctx.fillRect(this.posX, this.posY, -healthBarwidth, this.maxHeight, 5);
    }
  }
}
