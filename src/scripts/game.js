import { HealthBar } from "./healthbar";
import { Player } from "./player";
const KEYS = {
  w: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
  e: {
    pressed: false,
  },
  ArrowUp: {
    pressed: false,
  },
  ArrowRight: {
    pressed: false,
  },
  ArrowLeft: {
    pressed: false,
  },
  Shift: {
    pressed: false,
  },
};

export class Game {
  constructor() {
    this.gamePlayer1 = new Player(
      [100, 430],
      [200, 200],
      [0, 0],
      "right",
      "./assets/martial_hero/Sprites/idleright.png",
      2,
      8,
      {
        idleRight: {
          imageSrc: "./assets/martial_hero/Sprites/idleright.png",
          totalSpriteFrames: 8,
        },
        idleLeft: {
          imageSrc: "./assets/martial_hero/Sprites/idleleft.png",
          totalSpriteFrames: 8,
        },
        runLeft: {
          imageSrc: "./assets/martial_hero/Sprites/runleft.png",
          totalSpriteFrames: 8,
        },
        runRight: {
          imageSrc: "./assets/martial_hero/Sprites/runright.png",
          totalSpriteFrames: 8,
        },
        jumpRight: {
          imageSrc: "./assets/martial_hero/Sprites/jumpright.png",
          totalSpriteFrames: 2,
        },
        jumpLeft: {
          imageSrc: "./assets/martial_hero/Sprites/jumpleft.png",
          totalSpriteFrames: 2,
        },
        attack1right: {
          imageSrc: "./assets/martial_hero/Sprites/attack1blueright.png",
          totalSpriteFrames: 6,
        },
      }
    );
    window.player = this.gamePlayer1;

    this.gamePlayer2 = new Player(
      [900, 430],
      [200, 200],
      [0, 0],
      "left",
      "./assets/martial_hero/Sprites/idleright.png",
      2,
      8,
      {
        idleRight: {
          imageSrc: "./assets/martial_hero/Sprites/idleright.png",
          totalSpriteFrames: 8,
        },
        idleLeft: {
          imageSrc: "./assets/martial_hero/Sprites/idleleft.png",
          totalSpriteFrames: 8,
        },
        runLeft: {
          imageSrc: "./assets/martial_hero/Sprites/runleft.png",
          totalSpriteFrames: 8,
        },
        runRight: {
          imageSrc: "./assets/martial_hero/Sprites/runright.png",
          totalSpriteFrames: 8,
        },
      }
    );
    // window.gamePlayer1 = this.gamePlayer1;
    this.healthbar1 = new HealthBar([100, 0], this.gamePlayer1, "#71BC68");
    this.healthbar2 = new HealthBar([550, 0], this.gamePlayer2, "#71BC68");
    this.timer = 60;
    this.running = true;
    this.decrementTimer();
    this.bindEventListeners();
  }

  // update(ctx) {
  //     // this.gamePlayer1.update(ctx);
  //     // this.gamePlayer2.update(ctx);
  //     // this.healthbar1.update(ctx);
  //     // this.healthbar2.update(ctx);
  // }

  bindEventListeners() {
    window.addEventListener("keydown", (e) => {
      let char = e.key;
      if (char in KEYS) {
        KEYS[char].pressed = true;
      }

      if (char === "a") {
        this.gamePlayer1.facing = "left";
      } else if (char === "d") {
        this.gamePlayer1.facing = "right";
      }

      if (char === "ArrowLeft") {
        this.gamePlayer2.facing = "left";
      } else if (char === "ArrowRight") {
        this.gamePlayer2.facing = "right";
      }
    });

    window.addEventListener("keyup", (e) => {
      let char = e.key;
      if (char in KEYS) {
        KEYS[char].pressed = false;
      }

      if (char === "a") {
        this.gamePlayer1.velX = 0;
      } else if (char === "d") {
        this.gamePlayer1.velX = 0;
      }

      // stop char movement
      if (char === "ArrowLeft") {
        this.gamePlayer2.velX = 0;
      } else if (char === "ArrowRight") {
        this.gamePlayer2.velX = 0;
      }

      // allow fight
      if (char === "e") {
        this.gamePlayer1.attack(this.gamePlayer2);
      }
      if (char === "Shift") {
        this.gamePlayer2.attack(this.gamePlayer1);
      }
    });
  }

  playerMovement() {
    // key inputs for player 1
    console.log(this.gamePlayer1.currFrame);
    if (
      this.gamePlayer1.image === this.gamePlayer1.sprites.attack1right.image &&
      this.gamePlayer1.currFrame < this.gamePlayer1.totalSpriteFrames - 1
    )
      return;
    if (
      this.gamePlayer1.velX === 0 &&
      this.gamePlayer1.velY === 0 &&
      this.gamePlayer1.facing === "right" &&
      this.gamePlayer1.image != this.gamePlayer1.sprites.idleRight.image
    ) {
      this.gamePlayer1.image = this.gamePlayer1.sprites.idleRight.image;
      this.gamePlayer1.totalSpriteFrames =
        this.gamePlayer1.sprites.idleRight.totalSpriteFrames;
      //   console.log(this.gamePlayer1.image);
    }
    if (
      this.gamePlayer1.velX === 0 &&
      this.gamePlayer1.velY === 0 &&
      this.gamePlayer1.facing === "left" &&
      this.gamePlayer1.image != this.gamePlayer1.sprites.idleLeft.image
    ) {
      this.gamePlayer1.image = this.gamePlayer1.sprites.idleLeft.image;
      this.gamePlayer1.totalSpriteFrames =
        this.gamePlayer1.sprites.idleLeft.totalSpriteFrames;
    }

    if (KEYS.w.pressed && this.gamePlayer1.posY >= 430) {
      this.gamePlayer1.velY = -15;
    }

    if (this.gamePlayer1.velY < 0) {
      if (this.gamePlayer1.facing === "left") {
        this.gamePlayer1.image = this.gamePlayer1.sprites.jumpLeft.image;
        this.gamePlayer1.totalSpriteFrames =
          this.gamePlayer1.sprites.jumpLeft.totalSpriteFrames;
        this.gamePlayer1.currFrame = 0;
      } else {
        this.gamePlayer1.image = this.gamePlayer1.sprites.jumpRight.image;
        this.gamePlayer1.totalSpriteFrames =
          this.gamePlayer1.sprites.jumpRight.totalSpriteFrames;
        this.gamePlayer1.currFrame = 0;
      }
    }

    if (KEYS.a.pressed) {
      this.gamePlayer1.velX = -10;
      if (this.gamePlayer1.image != this.gamePlayer1.sprites.runLeft.image) {
        this.gamePlayer1.image = this.gamePlayer1.sprites.runLeft.image;
        this.gamePlayer1.totalSpriteFrames =
          this.gamePlayer1.sprites.runLeft.totalSpriteFrames;
        this.gamePlayer1.currFrame = 0;
      }
    }

    if (KEYS.d.pressed) {
      this.gamePlayer1.velX = 10;
      if (this.gamePlayer1.image != this.gamePlayer1.sprites.runRight.image) {
        this.gamePlayer1.image = this.gamePlayer1.sprites.runRight.image;
        this.gamePlayer1.totalSpriteFrames =
          this.gamePlayer1.sprites.runRight.totalSpriteFrames;
        this.gamePlayer1.currFrame = 0;
      }
    }

    if (KEYS.e.pressed) {
      this.gamePlayer1.attack(this.gamePlayer2);
      if (
        this.gamePlayer1.image != this.gamePlayer1.sprites.attack1right.image
      ) {
        this.gamePlayer1.image = this.gamePlayer1.sprites.attack1right.image;
        this.gamePlayer1.totalSpriteFrames =
          this.gamePlayer1.sprites.attack1right.totalSpriteFrames;
        this.gamePlayer1.currFrame = 0;
      }
    }

    // key inputs for player 2
    if (KEYS.ArrowUp.pressed && this.gamePlayer2.posY >= 430) {
      this.gamePlayer2.velY = -15;
    }
    if (KEYS.ArrowLeft.pressed) {
      this.gamePlayer2.velX = -10;
    }
    if (KEYS.ArrowRight.pressed) {
      this.gamePlayer2.velX = 10;
    }
  }

  animate(ctx) {
    if (this.running) {
      window.requestAnimationFrame(this.animate.bind(this, ctx));

      ctx.fillStyle = "lightblue";
      ctx.clearRect(0, 0, 1024, 576); //re-renders background

      this.gamePlayer1.update(ctx);
      this.gamePlayer2.update(ctx); //allows movement for players

      this.healthbar1.update(ctx);
      this.healthbar2.update(ctx);

      this.playerMovement();

      this.gameOver();
    }
  }

  isGameOver() {
    return (
      this.gamePlayer1.health <= 0 ||
      this.gamePlayer2.health <= 0 ||
      this.timer <= 0
    );
  }

  gameOver() {
    if (this.isGameOver()) {
      this.running = false;
      let end_screen = document.getElementById("end-screen");
      end_screen.style.display = "block";
    }
  }

  resetGame() {
    // if reset button clicked, reset game here
  }

  winner() {
    return this.gamePlayer1.health > 0 ? this.gamePlayer1 : this.gamePlayer2;
  }

  // isGameRunning() { // dont know if needed
  // }

  decrementTimer() {
    setInterval(() => {
      this.timer -= 1;
    }, 1000);
  }
}
