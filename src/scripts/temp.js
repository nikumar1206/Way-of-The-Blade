if (
  this.gamePlayer2.velX === 0 &&
  this.gamePlayer2.velY === 0 &&
  this.gamePlayer2.facing === "left" &&
  this.gamePlayer2.image != this.gamePlayer2.sprites.idleLeft.image
) {
  this.spritehandler(this.gamePlayer2, "idleLeft");
}

if (
  this.gamePlayer2.velX === 0 &&
  this.gamePlayer2.velY === 0 &&
  this.gamePlayer2.facing === "right" &&
  this.gamePlayer2.image != this.gamePlayer2.sprites.idleRight.image
) {
  this.spritehandler(this.gamePlayer2, "idleRight");
}

if (P2KEYS.ArrowUp.pressed && this.gamePlayer2.posY >= 350) {
  this.gamePlayer2.velY = -15;
}

if (this.gamePlayer2.velY < 0) {
  if (this.gamePlayer2.facing === "left") {
    this.spritehandler(this.gamePlayer2, "jumpLeft");
  } else {
    this.spritehandler(this.gamePlayer2, "jumpRight");
  }
}
if (P2KEYS.ArrowLeft.pressed) {
  this.gamePlayer2.velX = -10;
  if (this.gamePlayer2.image != this.gamePlayer2.sprites.runLeft.image) {
    this.spritehandler(this.gamePlayer2, this.gamePlayer2, "runLeft");
  }
}

if (P2KEYS.ArrowRight.pressed) {
  this.gamePlayer2.velX = 10;
  if (this.gamePlayer2.image != this.gamePlayer2.sprites.runRight.image) {
    this.spritehandler(this.gamePlayer2, "runRight");
  }
}

if (this.gamePlayer2.changePHB > 0) {
  if (
    this.gamePlayer2.image != this.gamePlayer2.sprites.flinchleft.image &&
    this.gamePlayer2.facing === "left"
  ) {
    this.spritehandler(this.gamePlayer2, "flinchLeft");
  } else if (
    this.gamePlayer2.image != this.gamePlayer2.sprites.flinchleft.image &&
    this.gamePlayer2.facing === "right"
  ) {
    this.spritehandler(this.gamePlayer2, "flinchRight");
  }
}

if (P2KEYS.Enter.pressed) {
  if (
    this.gamePlayer2.image != this.gamePlayer2.sprites.attack1right.image &&
    this.gamePlayer2.facing === "right"
  ) {
    this.spritehandler(this.gamePlayer2, "attackright");
  } else if (
    this.gamePlayer2.image != this.gamePlayer2.sprites.attack1left.image &&
    this.gamePlayer2.facing === "left"
  ) {
    this.spritehandler(this.gamePlayer2, "attackleft");
  }
}
