if (
  char.image === char.sprites.death.image &&
  this.currFrame < char.totalSpriteFrames - 1
)
  return;
if (
  char.image === char.sprites.flinchleft.image &&
  this.currFrame < char.totalSpriteFrames - 1
)
  return;
if (
  char.image === char.sprites.flinchright.image &&
  this.currFrame < char.totalSpriteFrames - 1
)
  return;
if (
  char.image === char.sprites.attack1left.image &&
  char.currFrame < char.totalSpriteFrames - 1
)
  return;
if (
  char.image === char.sprites.attack1right.image &&
  char.currFrame < char.totalSpriteFrames - 1
)
  return;
if (
  char.velX === 0 &&
  char.velY === 0 &&
  char.facing === "right" &&
  char.image != char.sprites.idleRight.image
) {
  this.spritehandler(char, "idleRight");
}
if (
  char.velX === 0 &&
  char.velY === 0 &&
  char.facing === "left" &&
  char.image != char.sprites.idleLeft.image
) {
  this.spritehandler(char, "idleLeft");
}

if (char.velY < 0) {
  if (char.facing === "left") {
    this.spritehandler(char, "jumpLeft");
  } else {
    this.spritehandler(char, "jumpRight");
  }
}
