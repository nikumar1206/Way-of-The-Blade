import { Player } from "./player";
const KEYS = {
    w: {
        pressed: false
    },
    a: {
      pressed: false
    },
    d: {
      pressed: false
    },
    e: {
        pressed: false
    },
    ArrowUp: {
        pressed: false
    },
    ArrowRight: {
      pressed: false
    },
    ArrowLeft: {
      pressed: false
    },
    Shift: {
        pressed: false
    }
  }

export class Game {

    constructor() {
        this.gamePlayer1 = new Player([100, 430], [0,0], "Player1") 
        this.gamePlayer2 = new Player([900, 430], [0,0], "Player2")
        this.timer = 60
        this.bindEventListeners();
    }

    draw(ctx) {
        this.gamePlayer1.move(ctx);
        this.gamePlayer2.move(ctx);
    }

    bindEventListeners() {
        window.addEventListener("keydown", (e) => {
            let char = e.key
            if (char in KEYS) {KEYS[char].pressed = true}
        });
        window.addEventListener("keyup", (e) => {
            let char = e.key

            if (char in KEYS) {
                KEYS[char].pressed = false
            }

            if (char === "a") {
                this.gamePlayer1.velX = 0
            } else if (char === "d") {
                this.gamePlayer1.velX = 0
            }

            // stop char movement
            if (char === "ArrowLeft") {
                this.gamePlayer2.velX = 0
            } else if (char === "ArrowRight") {
                this.gamePlayer2.velX = 0
            }

            // allow fight
            if (char === "e") {
                this.gamePlayer1.attack(this.gamePlayer2)
            }
            if (char === "Shift") {
                this.gamePlayer2.attack(this.gamePlayer1)
            }
        })
    }

    animate(ctx) {
        window.requestAnimationFrame(this.animate.bind(this, ctx))
    
        ctx.fillStyle = "lightblue";
        ctx.fillRect(0, 0, 1024, 576); //re-renders background
    
        this.gamePlayer1.move(ctx);
        this.gamePlayer2.move(ctx); //allows movement for players
    
        // key inputs for player 1
        if (KEYS.w.pressed && this.gamePlayer1.posY >=430) {
            this.gamePlayer1.velY = -15
        }
        if (KEYS.a.pressed) {
            this.gamePlayer1.velX = -10
        }
        if (KEYS.d.pressed) {
            this.gamePlayer1.velX = 10
        }
    
        // key inputs for player 2
        if (KEYS.ArrowUp.pressed  && this.gamePlayer2.posY >=430) {
            this.gamePlayer2.velY = -15
        }
        if (KEYS.ArrowLeft.pressed) {
            this.gamePlayer2.velX = -10
        }
        if (KEYS.ArrowRight.pressed) {
            this.gamePlayer2.velX = 10
        }
    }

    isGameOver() {
        return (this.gamePlayer1.health <= 0 || this.gamePlayer2.health <= 0 || this.timer <= 0)
    }

    gameOver() {
        if (this.isGameOver) {
            // game over code here
        }
    }

    resetGame() {
        // if reset button clicked, reset game here
    }

    winner() {
        return this.gamePlayer1.health > 0 ? this.gamePlayer1 : this.gamePlayer2
    }

    isGameRunning() { // dont know if needed
    }

    decrementTimer() {
        setInterval(() => {
            this.timer -= 1
        }, 1000);

    }


}