import { Sprite } from "./sprite";
import { GRAVITY } from "./utils";

export class Player extends Sprite {
  constructor(
    pos,
    offset,
    vel,
    facing,
    type,
    imageSrc,
    scale,
    totalSpriteFrames,
    sprites
  ) {
    super(pos, offset, imageSrc, scale, totalSpriteFrames); // required!

    this.posX = pos[0]; // sets up position for characters
    this.posY = pos[1];

    this.velX = vel[0]; // sets up direction for characters
    this.velY = vel[1];

    this.facing = facing;
    this.sprites = sprites;
    this.type = type;
    this.width = 50;
    this.height = 100; // character size

    this.dead = false;

    // game collision/hit logic
    this.attackRange = {
      // how far the player's attack range extends
      posX: this.posX,
      posY: this.posY,
      width: 120,
      height: 90,
    };

    this.health = 100;
    this.changePHB = 0;
    this.attacking = false;
    this.energy = 0;

    for (let sprite in this.sprites) {
      sprites[sprite].image = new Image();
      sprites[sprite].image.src = sprites[sprite].imageSrc;
    }
  }

  shiftattackRange() {
    if (this.facing === "left") {
      this.attackRange.posX = this.posX - this.attackRange.width;
      this.attackRange.posY = this.posY - 50;
    }
  }

  wrap() {
    if (this.posX < 10) {
      this.posX = 1280 - 25;
    } else if (this.posX > 1255) {
      this.posX = 15;
    }
  }

  update(ctx) {
    if (this.posX < 50 || this.posX > 950) {
      this.wrap();
    }

    this.posX += this.velX;

    this.posY += this.velY;
    if (this.posY >= 465) {
      // ensures characters cannot sink into canvas!
      this.velY = 0;
    } else {
      this.velY += GRAVITY; //// mimics gravity's acceleration
    }

    this.attackRange.posX = this.posX + this.width; // creates a attack range in front of character
    this.attackRange.posY = this.posY - 50;

    this.shiftattackRange();
    this.updateSprite(ctx);
  }

  // collision checkers for both x and y direction. get combined to check for collision in game
  xAxisCollisionWith(character2) {
    return (
      this.attackRange.posX + this.attackRange.width >= character2.posX &&
      this.attackRange.posX - this.attackRange.width <= character2.posX + character2.width
    );
  }

  yAxisCollisionWith(character2) {
    return (
      this.attackRange.posY + this.attackRange.height >= character2.posY &&
      this.attackRange.posY <= character2.posY + character2.height
    );
  }

  collisionWith(character2) {
    return (
      this.xAxisCollisionWith(character2) && this.yAxisCollisionWith(character2)
    );
  }

  attack(character2) {
    this.attacking = true;
    if (this.collisionWith(character2) && this.attacking) {
      this.completeHit(character2);
    }
    setTimeout(() => {
      this.attacking = false;
    }, 300);
  }

  completeHit(character2) {
    character2.changePHB = 10;
  }

  // for testing purposes
  // draw(ctx) {
  //   attack range
  //   ctx.fillStyle = "red";
  //   ctx.fillRect(
  //     this.attackRange.posX,
  //     this.attackRange.posY,
  //     this.attackRange.width,
  //     this.attackRange.height
  //   );

  //   ctx.fillStyle = "green";
  //   ctx.fillRect(this.posX, this.posY, this.width, this.height);
  // }
}
