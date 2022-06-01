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
  Enter: {
    pressed: false,
  },
};

export class Game {
  constructor() {
    this.gamePlayer1 = new Player(
      [25, 0],
      [150, 125],
      [0, 0],
      "right",
      "./assets/martialhero/Sprites/idleright.png",
      1.75,
      8,
      {
        idleRight: {
          imageSrc: "./assets/martialhero/Sprites/idleright.png",
          totalSpriteFrames: 8,
        },
        idleLeft: {
          imageSrc: "./assets/martialhero/Sprites/idleleft.png",
          totalSpriteFrames: 8,
        },
        runLeft: {
          imageSrc: "./assets/martialhero/Sprites/runleft.png",
          totalSpriteFrames: 8,
        },
        runRight: {
          imageSrc: "./assets/martialhero/Sprites/runright.png",
          totalSpriteFrames: 8,
        },
        jumpRight: {
          imageSrc: "./assets/martialhero/Sprites/jumpright.png",
          totalSpriteFrames: 2,
        },
        jumpLeft: {
          imageSrc: "./assets/martialhero/Sprites/jumpleft.png",
          totalSpriteFrames: 2,
        },
        attack1right: {
          imageSrc: "./assets/martialhero/Sprites/attack1blueright.png",
          totalSpriteFrames: 6,
        },
        attack1left: {
          imageSrc: "./assets/martialhero/Sprites/attack1blueleft.png",
          totalSpriteFrames: 6,
        },
        flinchleft: {
          imageSrc: "./assets/martialhero/Sprites/takehitwhiteleft.png",
          totalSpriteFrames: 4,
        },
        flinchright: {
          imageSrc: "./assets/martialhero/Sprites/takehitwhiteright.png",
          totalSpriteFrames: 4,
        },
        death: {
          imageSrc: "./assets/martialhero/Sprites/deathleft.png",
          totalSpriteFrames: 6,
        },
      }
    );
    window.player = this.gamePlayer1;

    this.gamePlayer2 = new Player(
      [1220, 0],
      [150, 125],
      [0, 0],
      "left",
      "./assets/martialhero2/Sprites/idleleft.png",
      1.75,
      4,
      {
        idleRight: {
          imageSrc: "./assets/martialhero2/Sprites/idleright.png",
          totalSpriteFrames: 4,
        },
        idleLeft: {
          imageSrc: "./assets/martialhero2/Sprites/idleleft.png",
          totalSpriteFrames: 4,
        },
        runLeft: {
          imageSrc: "./assets/martialhero2/Sprites/runleft.png",
          totalSpriteFrames: 8,
        },
        runRight: {
          imageSrc: "./assets/martialhero2/Sprites/runright.png",
          totalSpriteFrames: 8,
        },
        jumpRight: {
          imageSrc: "./assets/martialhero2/Sprites/jumpright.png",
          totalSpriteFrames: 2,
        },
        jumpLeft: {
          imageSrc: "./assets/martialhero2/Sprites/jumpleft.png",
          totalSpriteFrames: 2,
        },
        attack1right: {
          imageSrc: "./assets/martialhero2/Sprites/attack1redright.png",
          totalSpriteFrames: 4,
        },
        attack1left: {
          imageSrc: "./assets/martialhero2/Sprites/Attack2.png",
          totalSpriteFrames: 4,
        },
        flinchleft: {
          imageSrc: "./assets/martialhero2/Sprites/takehitleft.png",
          totalSpriteFrames: 3,
        },
        flinchright: {
          imageSrc: "./assets/martialhero2/Sprites/takehitright.png",
          totalSpriteFrames: 3,
        },
        death: {
          imageSrc: "./assets/martialhero2/Sprites/death.png",
          totalSpriteFrames: 7,
        },
      }
    );
    // window.gamePlayer1 = this.gamePlayer1;
    this.healthbar1 = new HealthBar([0, 0], this.gamePlayer1, "red");
    this.healthbar2 = new HealthBar([1280, 0], this.gamePlayer2, "blue");
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
      console.log(e);
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
      if (char === "e" && e.shiftKey === false) {
        this.gamePlayer1.attack(this.gamePlayer2);
      }
      if (char === "Enter") {
        this.gamePlayer2.attack(this.gamePlayer1);
      }
    });
  }

  player1Movement() {
    // key inputs for player 1
    if (
      this.gamePlayer1.image === this.gamePlayer1.sprites.death.image &&
      this.currFrame < this.gamePlayer1.totalSpriteFrames - 1
    )
      return;
    if (
      this.gamePlayer1.image === this.gamePlayer1.sprites.flinchleft.image &&
      this.currFrame < this.gamePlayer1.totalSpriteFrames - 1
    )
      return;
    if (
      this.gamePlayer1.image === this.gamePlayer1.sprites.flinchright.image &&
      this.currFrame < this.gamePlayer1.totalSpriteFrames - 1
    )
      return;
    if (
      this.gamePlayer1.image === this.gamePlayer1.sprites.attack1left.image &&
      this.gamePlayer1.currFrame < this.gamePlayer1.totalSpriteFrames - 1
    )
      return;
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

    if (KEYS.w.pressed && this.gamePlayer1.posY >= 350) {
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

    if (this.gamePlayer1.changePHB > 0) {
      if (
        this.gamePlayer1.image != this.gamePlayer1.sprites.flinchleft.image &&
        this.gamePlayer1.facing === "left"
      ) {
        this.gamePlayer1.image = this.gamePlayer1.sprites.flinchleft.image;
        this.gamePlayer1.totalSpriteFrames =
          this.gamePlayer1.sprites.flinchleft.totalSpriteFrames;
        this.gamePlayer1.currFrame = 0;
      } else if (
        this.gamePlayer1.image != this.gamePlayer1.sprites.flinchleft.image &&
        this.gamePlayer1.facing === "right"
      ) {
        this.gamePlayer1.image = this.gamePlayer1.sprites.flinchright.image;
        this.gamePlayer1.totalSpriteFrames =
          this.gamePlayer1.sprites.flinchright.totalSpriteFrames;
        this.gamePlayer1.currFrame = 0;
      }
    }
    if (KEYS.e.pressed) {
      //   this.gamePlayer1.attack(this.gamePlayer2);
      if (
        this.gamePlayer1.facing == "right" &&
        this.gamePlayer1.image != this.gamePlayer1.sprites.attack1right.image
      ) {
        this.gamePlayer1.image = this.gamePlayer1.sprites.attack1right.image;
        this.gamePlayer1.totalSpriteFrames =
          this.gamePlayer1.sprites.attack1right.totalSpriteFrames;
        this.gamePlayer1.currFrame = 0;
      } else if (
        this.gamePlayer1.facing == "left" &&
        this.gamePlayer1.image != this.gamePlayer1.sprites.attack1left.image
      ) {
        this.gamePlayer1.image = this.gamePlayer1.sprites.attack1left.image;
        this.gamePlayer1.totalSpriteFrames =
          this.gamePlayer1.sprites.attack1left.totalSpriteFrames;
        this.gamePlayer1.currFrame = 0;
      }
    }
    if (
      this.gamePlayer1.health <= 0 &&
      this.gamePlayer1.image != this.gamePlayer1.sprites.death.image
    ) {
      this.gamePlayer1.image = this.gamePlayer1.sprites.death.image;
      this.gamePlayer1.totalSpriteFrames =
        this.gamePlayer1.sprites.death.totalSpriteFrames;
      this.gamePlayer1.currFrame = 0;
      console.log("cheese");
    }
    console.log(this.gamePlayer1.health);
  }

  player2Movement() {
    if (
      this.gamePlayer2.image === this.gamePlayer2.sprites.flinchleft.image &&
      this.currFrame < this.gamePlayer2.totalSpriteFrames - 1
    )
      return;
    if (
      this.gamePlayer2.image === this.gamePlayer2.sprites.flinchright.image &&
      this.currFrame < this.gamePlayer2.totalSpriteFrames - 1
    )
      return;
    if (
      this.gamePlayer2.image === this.gamePlayer2.sprites.attack1left.image &&
      this.gamePlayer2.currFrame < this.gamePlayer2.totalSpriteFrames - 1
    )
      return;
    if (
      this.gamePlayer2.image === this.gamePlayer2.sprites.attack1right.image &&
      this.gamePlayer2.currFrame < this.gamePlayer2.totalSpriteFrames - 1
    )
      return;
    if (
      this.gamePlayer2.velX === 0 &&
      this.gamePlayer2.velY === 0 &&
      this.gamePlayer2.facing === "left" &&
      this.gamePlayer2.image != this.gamePlayer2.sprites.idleLeft.image
    ) {
      this.gamePlayer2.image = this.gamePlayer2.sprites.idleLeft.image;
      this.gamePlayer2.totalSpriteFrames =
        this.gamePlayer2.sprites.idleLeft.totalSpriteFrames;
      this.gamePlayer2.currFrame = 0;
    }

    if (
      this.gamePlayer2.velX === 0 &&
      this.gamePlayer2.velY === 0 &&
      this.gamePlayer2.facing === "right" &&
      this.gamePlayer2.image != this.gamePlayer2.sprites.idleRight.image
    ) {
      this.gamePlayer2.image = this.gamePlayer2.sprites.idleRight.image;
      this.gamePlayer2.totalSpriteFrames =
        this.gamePlayer2.sprites.idleRight.totalSpriteFrames;
      this.gamePlayer2.currFrame = 0;
      //   console.log(this.gamePlayer2.image);
    }

    if (KEYS.ArrowUp.pressed && this.gamePlayer2.posY >= 350) {
      this.gamePlayer2.velY = -15;
    }

    if (this.gamePlayer2.velY < 0) {
      if (this.gamePlayer2.facing === "left") {
        this.gamePlayer2.image = this.gamePlayer2.sprites.jumpLeft.image;
        this.gamePlayer2.totalSpriteFrames =
          this.gamePlayer2.sprites.jumpLeft.totalSpriteFrames;
        this.gamePlayer2.currFrame = 0;
      } else {
        this.gamePlayer2.image = this.gamePlayer2.sprites.jumpRight.image;
        this.gamePlayer2.totalSpriteFrames =
          this.gamePlayer2.sprites.jumpRight.totalSpriteFrames;
        this.gamePlayer2.currFrame = 0;
      }
    }

    if (KEYS.ArrowLeft.pressed) {
      this.gamePlayer2.velX = -10;
      if (this.gamePlayer2.image != this.gamePlayer2.sprites.runLeft.image) {
        this.gamePlayer2.image = this.gamePlayer2.sprites.runLeft.image;
        this.gamePlayer2.totalSpriteFrames =
          this.gamePlayer2.sprites.runLeft.totalSpriteFrames;
        this.gamePlayer2.currFrame = 0;
      }
    }

    if (KEYS.ArrowRight.pressed) {
      this.gamePlayer2.velX = 10;
      if (this.gamePlayer2.image != this.gamePlayer2.sprites.runRight.image) {
        this.gamePlayer2.image = this.gamePlayer2.sprites.runRight.image;
        this.gamePlayer2.totalSpriteFrames =
          this.gamePlayer2.sprites.runRight.totalSpriteFrames;
        this.gamePlayer2.currFrame = 0;
      }
    }

    if (this.gamePlayer2.changePHB > 0) {
      if (
        this.gamePlayer2.image != this.gamePlayer2.sprites.flinchleft.image &&
        this.gamePlayer2.facing === "left"
      ) {
        this.gamePlayer2.image = this.gamePlayer2.sprites.flinchleft.image;
        this.gamePlayer2.totalSpriteFrames =
          this.gamePlayer2.sprites.flinchleft.totalSpriteFrames;
        this.gamePlayer2.currFrame = 0;
      } else if (
        this.gamePlayer2.image != this.gamePlayer2.sprites.flinchleft.image &&
        this.gamePlayer2.facing === "right"
      ) {
        this.gamePlayer2.image = this.gamePlayer2.sprites.flinchright.image;
        this.gamePlayer2.totalSpriteFrames =
          this.gamePlayer2.sprites.flinchright.totalSpriteFrames;
        this.gamePlayer2.currFrame = 0;
      }
    }

    if (KEYS.Enter.pressed) {
      //   this.gamePlayer2.attack(this.gamePlayer1);
      if (
        this.gamePlayer2.image != this.gamePlayer2.sprites.attack1right.image &&
        this.gamePlayer2.facing === "right"
      ) {
        this.gamePlayer2.image = this.gamePlayer2.sprites.attack1right.image;
        this.gamePlayer2.totalSpriteFrames =
          this.gamePlayer2.sprites.attack1right.totalSpriteFrames;
        this.gamePlayer2.currFrame = 0;
      } else if (
        this.gamePlayer2.image != this.gamePlayer2.sprites.attack1left.image &&
        this.gamePlayer2.facing === "left"
      ) {
        this.gamePlayer2.image = this.gamePlayer2.sprites.attack1left.image;
        this.gamePlayer2.totalSpriteFrames =
          this.gamePlayer2.sprites.attack1left.totalSpriteFrames;
        this.gamePlayer2.currFrame = 0;
      }
    }
    if (KEYS.ArrowLeft.pressed) {
      this.gamePlayer2.velX = -10;
    }
    if (KEYS.ArrowRight.pressed) {
      this.gamePlayer2.velX = 10;
    }
  }

  onDeath(char) {
    if (
      char.health === 0 &&
      char.image != char.gamePlayer1.sprites.death.image
    ) {
      char.image = char.gamePlayer1.sprites.death.image;
      char.totalSpriteFrames = char.sprites.death.totalSpriteFrames;
      char.currFrame = 0;
    }
  }
  animate(ctx) {
    if (this.running) {
      window.requestAnimationFrame(this.animate.bind(this, ctx));

      //   ctx.fillStyle = "lightblue";
      ctx.clearRect(0, 0, 1280, 620); //re-renders background

      this.displayTimer();
      this.gamePlayer1.update(ctx);
      this.gamePlayer2.update(ctx); //allows movement for players

      this.healthbar1.update(ctx);
      this.healthbar2.update(ctx);

      this.player1Movement();
      this.player2Movement();

      this.handleAudio();
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

      let audio = document.getElementById("music");
      audio.pause();
    }
  }

  //   resetGame() {
  //     // if reset button clicked, reset game here
  //   }

  winner() {
    if (this.gamePlayer1.health === this.gamePlayer2.health) {
      return;
    }
    return this.gamePlayer1.health > this.gamePlayer2.health
      ? this.gamePlayer1
      : this.gamePlayer2;
  }

  // isGameRunning() { // dont know if needed
  // }

  decrementTimer() {
    setInterval(() => {
      this.timer -= 1;
    }, 1000);
  }

  displayTimer() {
    let game_cont = document.getElementById("game-container");
    if (document.getElementById("timer")) {
      game_cont.removeChild(document.getElementById("timer"));
    }
    let timer = document.createElement("p");
    timer.id = "timer";
    timer.innerText = this.timer;
    game_cont.appendChild(timer);
  }

  handleAudio() {
    let audio = document.getElementById("music");
    let aud_but = document.getElementById("audio_button");
    if (audio.paused) {
      aud_but.innerHTML = "Play Music";
      aud_but.onclick = () => {
        audio.play();
      };
    } else {
      aud_but.innerHTML = "Pause Music";
      aud_but.onclick = () => {
        audio.pause();
      };
    }
  }
}
