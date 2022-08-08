import { HealthBar } from "./healthbar";
import { Player } from "./player";
import { P1KEYS, P2KEYS, PLAYER_X_MOVEMENT, PLAYER_Y_MOVEMENT } from "./utils";

export class Game {
  constructor(mode) {
    this.mode = mode;
    this.gamePlayer1 = new Player(
      [140, 0],
      [150, 125],
      [0, 0],
      "right",
      "player1",
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

    this.gamePlayer2 = new Player(
      [1000, 0],
      [150, 125],
      [0, 0],
      "left",
      "player2",
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
    document.getElementById("pause_button").style.display = "block";
    document.getElementById("pause_button").onclick = () => {
      this.running = !this.running;
      if (this.running) {
        let i = 3;
        this.running = false;
        let img = document.createElement("img");
        img.src = "assets/pause.svg";
        img.width = "60";
        img.height = "40";
        img.id = "pause-toggle";
        img.alt = "Play";
        document
          .getElementById("pause_button")
          .removeChild(document.getElementById("pause-toggle"));
        document.getElementById("pause_button").appendChild(img);
        document.getElementById("pause_button").disabled = true;
        document.getElementById("paused").innerText = "PAUSED";
        let timer = () => {
          if (i === 0) {
            this.running = true;
            document.getElementById("paused").style.display = "none";
            document.getElementById("paused").innerText = "PAUSED";
            document.getElementById("paused").style.left = "46%";
            document.getElementById("pause_button").disabled = false;
          } else {
            document.getElementById("paused").style.left = "49%";
            document.getElementById("paused").innerText = i;
            i--;
            setTimeout(timer, 1000);
          }
        };
        timer();
      } else {
        document.getElementById("paused").style.left = "46%";
        document.getElementById("paused").style.display = "block";
        let img = document.createElement("img");
        img.src = "assets/play.svg";
        img.width = "60";
        img.height = "40";
        img.id = "pause-toggle";
        img.alt = "Play";
        document
          .getElementById("pause_button")
          .removeChild(document.getElementById("pause-toggle"));
        document.getElementById("pause_button").appendChild(img);
      }
    };
    // window.gamePlayer1 = this.gamePlayer1;
    this.healthbar1 = new HealthBar([0, 0], this.gamePlayer1);
    this.healthbar2 = new HealthBar([1280, 0], this.gamePlayer2);

    this.timer = 60;
    this.running = true;
    this.decrementTimer();
  }

  bindEventListenerPlayer1() {
    window.addEventListener("keydown", (e) => {
      let char = e.key;
      if (char in P1KEYS) {
        P1KEYS[char].pressed = true;
      }
      if (char === "a") {
        this.gamePlayer1.facing = "left";
      } else if (char === "d") {
        this.gamePlayer1.facing = "right";
      }
    });

    window.addEventListener("keyup", (e) => {
      let char = e.key;
      if (char in P1KEYS) {
        P1KEYS[char].pressed = false;
      }

      // stop char movement
      if (char === "a") {
        this.gamePlayer1.velX = 0;
      } else if (char === "d") {
        this.gamePlayer1.velX = 0;
      }

      // allow fight
      if (char === "e" && e.shiftKey === false) {
        this.gamePlayer1.attack(this.gamePlayer2);
      }
    });
  }

  bindEventListenerPlayer2() {
    window.addEventListener("keydown", (e) => {
      let char = e.key;
      if (char in P2KEYS) {
        P2KEYS[char].pressed = true;
      }
      if (char === "ArrowLeft") {
        this.gamePlayer2.facing = "left";
      } else if (char === "ArrowRight") {
        this.gamePlayer2.facing = "right";
      }
    });

    window.addEventListener("keyup", (e) => {
      let char = e.key;
      if (char in P2KEYS) {
        P2KEYS[char].pressed = false;
      }
      if (char === "ArrowLeft") {
        this.gamePlayer2.velX = 0;
      } else if (char === "ArrowRight") {
        this.gamePlayer2.velX = 0;
      }

      if (char === "Enter") {
        this.gamePlayer2.attack(this.gamePlayer1);
      }
    });
  }

  p1Movement() {
    // key inputs for player 1
    // if (
    //   this.gamePlayer1.image === this.gamePlayer1.sprites.death.image &&
    //   this.currFrame < this.gamePlayer1.totalSpriteFrames - 1
    // )
    //   return;
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
      this.gamePlayer1.velX === 0 &&
      this.gamePlayer1.velY === 0 &&
      this.gamePlayer1.facing === "right" &&
      this.gamePlayer1.image != this.gamePlayer1.sprites.idleRight.image
    ) {
      this.spritehandler(this.gamePlayer1, "idleRight");
    }
    if (
      this.gamePlayer1.velX === 0 &&
      this.gamePlayer1.velY === 0 &&
      this.gamePlayer1.facing === "left" &&
      this.gamePlayer1.image != this.gamePlayer1.sprites.idleLeft.image
    ) {
      this.spritehandler(this.gamePlayer1, "idleLeft");
    }

    if (this.gamePlayer1.velY < 0) {
      if (this.gamePlayer1.facing === "left") {
        this.spritehandler(this.gamePlayer1, "jumpLeft");
      } else {
        this.spritehandler(this.gamePlayer1, "jumpRight");
      }
    }

    if (P1KEYS.a.pressed) {
      this.gamePlayer1.velX = -PLAYER_X_MOVEMENT;
      if (this.gamePlayer1.image != this.gamePlayer1.sprites.runLeft.image) {
        this.spritehandler(this.gamePlayer1, "runLeft");
      }
    }

    if (P1KEYS.d.pressed) {
      this.gamePlayer1.velX = PLAYER_X_MOVEMENT;
      if (this.gamePlayer1.image != this.gamePlayer1.sprites.runRight.image) {
        this.spritehandler(this.gamePlayer1, "runRight");
      }
    }
    if (P1KEYS.w.pressed && this.gamePlayer1.posY >= 350) {
      this.gamePlayer1.velY = -PLAYER_Y_MOVEMENT;
    }
    if (this.gamePlayer1.changePHB > 0) {
      if (
        this.gamePlayer1.image != this.gamePlayer1.sprites.flinchleft.image &&
        this.gamePlayer1.facing === "left"
      ) {
        this.spritehandler(this.gamePlayer1, "flinchLeft");
      } else if (
        this.gamePlayer1.image != this.gamePlayer1.sprites.flinchright.image &&
        this.gamePlayer1.facing === "right"
      ) {
        this.spritehandler(this.gamePlayer1, "flinchRight");
      }
    }
    if (P1KEYS.e.pressed) {
      if (
        this.gamePlayer1.facing === "right" &&
        this.gamePlayer1.image != this.gamePlayer1.sprites.attack1right.image
      ) {
        this.spritehandler(this.gamePlayer1, "attackright");
      } else if (
        this.gamePlayer1.facing === "left" &&
        this.gamePlayer1.image != this.gamePlayer1.sprites.attack1left.image
      ) {
        this.spritehandler(this.gamePlayer1, "attackleft");
      }
    }
    // if (
    //   this.gamePlayer1.health <= 0 &&
    //   this.gamePlayer1.image != this.gamePlayer1.sprites.death.image
    // ) {
    //   this.spritehandler(this.gamePlayer1, "death");
    // }
  }

  p2Movement() {
    // if (
    //   this.gamePlayer1.image === this.gamePlayer1.sprites.death.image &&
    //   this.currFrame < this.gamePlayer1.totalSpriteFrames - 1
    // )
    //   return;
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
      this.gamePlayer2.velY = -PLAYER_Y_MOVEMENT;
    }

    if (this.gamePlayer2.velY < 0) {
      if (this.gamePlayer2.facing === "left") {
        this.spritehandler(this.gamePlayer2, "jumpLeft");
      } else {
        this.spritehandler(this.gamePlayer2, "jumpRight");
      }
    }
    if (P2KEYS.ArrowLeft.pressed) {
      this.gamePlayer2.velX = -PLAYER_X_MOVEMENT;
      if (this.gamePlayer2.image != this.gamePlayer2.sprites.runLeft.image) {
        this.spritehandler(this.gamePlayer2, "runLeft");
      }
    }

    if (P2KEYS.ArrowRight.pressed) {
      this.gamePlayer2.velX = PLAYER_X_MOVEMENT;
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
  }
  aiMovement() {
    let multiplyRandom = 1.36;
    if (
      this.gamePlayer2.image === this.gamePlayer2.sprites.attack1right.image &&
      this.gamePlayer2.currFrame < this.gamePlayer2.totalSpriteFrames - 1
    )
      return;
    if (
      this.gamePlayer2.image === this.gamePlayer2.sprites.attack1left.image &&
      this.gamePlayer2.currFrame < this.gamePlayer2.totalSpriteFrames - 1
    )
      return;
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
      this.gamePlayer2.image === this.gamePlayer2.sprites.runRight.image &&
      this.gamePlayer2.currFrame < this.gamePlayer2.totalSpriteFrames - 1
    )
      return;
    if (
      this.gamePlayer2.image === this.gamePlayer2.sprites.runLeft.image &&
      this.gamePlayer2.currFrame < this.gamePlayer2.totalSpriteFrames - 1
    )
      return;
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
    if (this.gamePlayer1.velY === 0 && this.gamePlayer2.velY === 0) {
      if (
        this.gamePlayer1.posX > this.gamePlayer2.posX &&
        1280 - this.gamePlayer1.posX >
          this.gamePlayer1.posX - this.gamePlayer2.posX
      ) {
        //the human player is on the right side of the AI
        this.gamePlayer2.velX =
          PLAYER_X_MOVEMENT - Math.random() * multiplyRandom; //make the ai move right
      } else if (this.gamePlayer1.posx > this.gamePlayer2.posX) {
        //the human player is on the left side of the AI
        this.gamePlayer2.velX =
          -PLAYER_X_MOVEMENT + Math.random() * multiplyRandom; //make the ai move left
      } else if (
        this.gamePlayer1.posX < this.gamePlayer2.posX &&
        this.gamePlayer1.posX + 1280 - this.gamePlayer2.posX >
          this.gamePlayer2.posX - this.gamePlayer1.posX
      ) {
        this.gamePlayer2.velX =
          -PLAYER_X_MOVEMENT + Math.random() * multiplyRandom;
      } else {
        this.gamePlayer2.velX =
          PLAYER_X_MOVEMENT - Math.random() * multiplyRandom;
      }
    }
    // console.log(this.gamePlayer1.velY, this.gamePlayer2.velY)
    if (
      this.gamePlayer1.posY < this.gamePlayer2.posY &&
      this.gamePlayer2.velY === 0
    ) {
      this.gamePlayer2.posY +=
        -PLAYER_Y_MOVEMENT * (Math.random() * 1.158960124);
      this.gamePlayer2.velY +=
        -PLAYER_Y_MOVEMENT * (Math.random() * 1.158960124);
    }
    if (this.gamePlayer2.velX > 0) {
      this.spritehandler(this.gamePlayer2, "runRight");
      this.gamePlayer2.facing = "right";
    } else if (this.gamePlayer2.velX < 0) {
      this.spritehandler(this.gamePlayer2, "runLeft");
      this.gamePlayer2.facing = "left";
    }

    if (
      this.gamePlayer2.facing === "right" &&
      this.gamePlayer2.energy > 1 &&
      Math.abs(this.gamePlayer1.posX - this.gamePlayer2.posX) < 125
    ) {
      this.gamePlayer2.attack(this.gamePlayer1);
      this.gamePlayer2.energy = Math.random();
      this.spritehandler(this.gamePlayer2, "attackright");
    } else if (
      this.gamePlayer2.facing === "left" &&
      this.gamePlayer2.energy > 1 &&
      this.gamePlayer2.collisionWith(this.gamePlayer1)
    ) {
      this.gamePlayer2.attack(this.gamePlayer1);
      this.gamePlayer2.energy = Math.random();
      this.spritehandler(this.gamePlayer2, "attackleft");
    }
    this.gamePlayer2.energy += Math.random() * 0.9;
    if (this.gamePlayer1.changePHB > 5) {
      this.gamePlayer1.changePHB += 10;
    }
  }
  // onDeath(char) {
  //   if (
  //     char.health === 0 &&
  //     char.image != char.gamePlayer1.sprites.death.image
  //   ) {
  //     char.image = char.gamePlayer1.sprites.death.image;
  //     char.totalSpriteFrames = char.sprites.death.totalSpriteFrames;
  //     char.currFrame = 0;
  //   }
  // }

  animate(ctx) {
    window.requestAnimationFrame(this.animate.bind(this, ctx));
    if (this.running) {
      ctx.clearRect(0, 0, 1280, 620); //re-renders background
      // ctx.fillRect(this.gamePlayer1.attackRange.posX, this.gamePlayer1.attackRange.posY, this.gamePlayer1.attackRange.width, this.gamePlayer1.attackRange.height);
      // ctx.fillRect(this.gamePlayer2.attackRange.posX, this.gamePlayer2.attackRange.posY, this.gamePlayer2.attackRange.width, this.gamePlayer2.attackRange.height);
      // ctx.fillRect(this.gamePlayer1.posX, this.gamePlayer1.posY, 5, 5);
      // ctx.fillRect(this.gamePlayer2.posX, this.gamePlayer2.posY, 5, 5);
      this.handleAudio(); // play pause button is controlled and reset per game.

      this.displayTimer();
      this.gamePlayer1.update(ctx);
      this.gamePlayer2.update(ctx); //allows movement for players

      this.healthbar1.update(ctx);
      this.healthbar2.update(ctx); // changes the size of bar (o.g dependant on player)

      this.p1Movement();
      this.mode === "dp" ? this.p2Movement() : this.aiMovement();

      this.gameOver(); // renders end screen on game over
    }
  }

  gameOver() {
    if (this.isGameOver()) {
      this.running = false;
      document.getElementById("pause_button").style.display = "none";
      let end_screen = document.getElementById("end-screen");
      end_screen.style.display = "block";

      this.handleWinner();
      let audio = document.getElementById("music");
      audio.pause();
    }
  }

  decrementTimer() {
    setInterval(() => {
      if (this.timer >= 1 && this.running) {
        this.timer -= 1;
      }
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

  // helper functions!
  spritehandler(char, sprite) {
    switch (sprite) {
      case "idleLeft":
        char.image = char.sprites.idleLeft.image;
        char.totalSpriteFrames = char.sprites.idleLeft.totalSpriteFrames;
        char.currFrame = 0;
        break;
      case "idleRight":
        char.image = char.sprites.idleRight.image;
        char.totalSpriteFrames = char.sprites.idleRight.totalSpriteFrames;
        char.currFrame = 0;
        break;
      case "jumpLeft":
        char.image = char.sprites.jumpLeft.image;
        char.totalSpriteFrames = char.sprites.jumpLeft.totalSpriteFrames;
        char.currFrame = 0;
        break;
      case "jumpRight":
        char.image = char.sprites.jumpRight.image;
        char.totalSpriteFrames = char.sprites.jumpRight.totalSpriteFrames;
        char.currFrame = 0;
        break;
      case "runLeft":
        char.image = char.sprites.runLeft.image;
        char.totalSpriteFrames = char.sprites.runLeft.totalSpriteFrames;
        char.currFrame = 0;
        break;
      case "runRight":
        char.image = char.sprites.runRight.image;
        char.totalSpriteFrames = char.sprites.runRight.totalSpriteFrames;
        char.currFrame = 0;
        break;
      case "flinchLeft":
        char.image = char.sprites.flinchleft.image;
        char.totalSpriteFrames = char.sprites.flinchleft.totalSpriteFrames;
        char.currFrame = 0;
        break;
      case "flinchRight":
        char.image = char.sprites.flinchright.image;
        char.totalSpriteFrames = char.sprites.flinchright.totalSpriteFrames;
        char.currFrame = 0;
        break;
      case "attackright":
        char.image = char.sprites.attack1right.image;
        char.totalSpriteFrames = char.sprites.attack1right.totalSpriteFrames;
        char.currFrame = 0;
        break;
      case "attackleft":
        char.image = char.sprites.attack1left.image;
        char.totalSpriteFrames = char.sprites.attack1left.totalSpriteFrames;
        char.currFrame = 0;
        break;
    }
  }

  winner() {
    if (this.gamePlayer1.health === this.gamePlayer2.health) {
      return "Tie";
    }
    return this.gamePlayer1.health > this.gamePlayer2.health
      ? "Player 1"
      : "Player 2";
  }

  handleWinner() {
    let p = document.querySelector("#end-screen p");
    if (this.winner() === "Tie") {
      p.innerText = "Game Over. It was a tie!";
    } else if (this.mode === "dp") {
      p.innerText = `Game Over! ${this.winner()} has won!`;
    } else if (this.mode === "sp" && this.winner() === "Player 1") {
      p.innerText = "Game Over! You won!";
    } else {
      p.innerText = "Game Over! The AI won!";
    }
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
  isGameOver() {
    return (
      this.gamePlayer1.health <= 0 ||
      this.gamePlayer2.health <= 0 ||
      this.timer <= 0
    );
  }
}
