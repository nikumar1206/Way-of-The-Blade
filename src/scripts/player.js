import { Sprite } from "./sprite";
const GRAVITY = 0.75;

export class Player extends Sprite {
  constructor(
    pos,
    offset,
    vel,
    facing,
    imageSrc,
    scale,
    totalSpriteFrames,
    sprites
  ) {
    super(pos, offset, imageSrc, 25, 100, scale, totalSpriteFrames); // required!

    this.posX = pos[0]; // sets up position for characters
    this.posY = pos[1];

    this.velX = vel[0]; // sets up velocity for characters
    this.velY = vel[1];

    this.facing = facing;
    this.sprites = sprites;
    // this.type = type
    this.width = 50;
    this.height = 100; // character size

    // game collision/hit logic
    this.attackRange = {
      // how far the player's attack range extends
      posX: this.posX,
      posY: this.posY,
      width: 150,
      height: 120,
    };

    this.health = 100;
    this.changePHB = 0;
    this.attacking = false;
    // this.tto;
    // this.movingRight

    for (let sprite in this.sprites) {
      sprites[sprite].image = new Image();
      sprites[sprite].image.src = sprites[sprite].imageSrc;
    }
  }

  // static createImgFromSprite(sprites) {
  //     for (let sprite in this.sprites) {
  //         sprites[sprite] = new Image();
  //         sprites[sprite] = sprites[sprite].imageSrc
  //         console.log(sprites[sprite]);
  //     }

  // }

  shiftattackRange() {
    if (this.facing === "left") {
      this.attackRange.posX = this.posX - this.attackRange.width;
      this.attackRange.posY = this.posY - 50;
    }
  }

  draw(ctx) {
    this.shiftattackRange();
    // ctx.fillRect(
    //   this.attackRange.posX,
    //   this.attackRange.posY,
    //   this.attackRange.width,
    //   this.attackRange.height
    // );
    // ctx.fillStyle = "green";
    // ctx.fillRect(this.posX, this.posY, this.width, this.height);
  }

  wrap() {
    if (this.posX < 25) {
      this.posX = 1280 - 25;
    } else if (this.posX - 25 > 1250) {
      this.posX = 15;
    }
  }

  update(ctx) {
    if (this.posX < 50 || this.posX > 950) {
      this.wrap();
    }

    this.posX += this.velX;

    this.posY += this.velY;
    if (this.posY >= 425) {
      // ensures characters cannot sink into canvas!
      this.velY = 0;
    } else {
      this.velY += GRAVITY; //// mimics gravity's acceleration
    }

    this.attackRange.posX = this.posX + this.width; // creates a attack range in front of character
    this.attackRange.posY = this.posY - 50;

    this.draw(ctx);
    this.updateSprite(ctx);
  }

  // collision checkers for both x and y direction. get combined to check for collision in game
  xAxisCollisionWith(character2) {
    return (
      this.attackRange.posX + this.attackRange.width >= character2.posX &&
      this.attackRange.posX <= character2.posX + character2.width
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

  // oppositePlayer() {
  //     return this.type === "player1" ? "player2" : "player1"
  // }
  completeHit(character2) {
    // character2.health -= 20
    character2.changePHB = 15;
  }
}
