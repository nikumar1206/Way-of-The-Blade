export class Sprite {
  constructor(pos, offset, imageSrc, scale, totalSpriteFrames) {
    this.pos = pos;
    this.posX = pos[0];
    this.posY = pos[1];

    this.offsetX = offset[0];
    this.offsetY = offset[1];

    this.scale = scale;

    this.image = new Image();
    this.image.src = imageSrc;

    this.totalSpriteFrames = totalSpriteFrames; // will handle looping through sprite sheet
    this.currFrame = 0;
    this.framesComplete = 0;

    this.framesElapsed = 0; // sprites change every 5 frames
    this.framesHold = 7;
  }

  drawSprite(ctx) {
    ctx.drawImage(
      this.image,
      this.currFrame * (this.image.width / this.totalSpriteFrames),
      0,
      this.image.width / this.totalSpriteFrames,
      this.image.height,
      this.posX - this.offsetX,
      this.posY - this.offsetY,
      (this.image.width / this.totalSpriteFrames) * this.scale,
      this.image.height * this.scale
    );
  }

  updateSprite(ctx) {
    this.drawSprite(ctx);
    this.framesElapsed++;
    if (this.framesElapsed % this.framesHold === 0) {
      if (this.currFrame < this.totalSpriteFrames - 1) {
        this.currFrame += 1;
      } else {
        this.currFrame = 0;
      }
    }
  }
}
