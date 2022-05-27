const { Character } = require("./scripts/character");

// window.Character = Character
window.addEventListener('DOMContentLoaded', (event) => {

    // following code will setup a canvas with a blue background
    const canvas = document.getElementById("canvasEl");
    canvas.width = 1024;
    canvas.height = 526;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "lightblue";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    const KEYS = { //
        w: {
            pressed: false
        },
        a: {
          pressed: false
        },
        d: {
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
        }
      }

      let player1 = new Character([100, 200], [0,0], "player1") 
      let player2 = new Character([900, 200], [0,0], "player2")

      window.addEventListener("keydown", (e) => {
          let char = e.key
          if (char in KEYS) {
            KEYS[char].pressed = true
          } 
    });

    window.addEventListener("keyup", (e) => {
        let char = e.key
    
        if (char in KEYS) {
            KEYS[char].pressed = false
        }
    
        if (e.key === "a") {
            player1.velX = 0
        } else if (e.key === "d") {
            player1.velX = 0
        }

        // stop
        if (e.key === "ArrowLeft") {
            player2.velX = 0
        } else if (e.key === "ArrowRight") {
            player2.velX = 0
        }
    })

    const animate = () => {
        window.requestAnimationFrame(animate)
    
        ctx.fillStyle = "lightblue";
        ctx.fillRect(0, 0, 1024, 526); //re-renders background

        player1.move(ctx);
        player2.move(ctx); //allows movement for players

        // key inputs for player 1
        if (KEYS.w.pressed) {
            player1.velY = -10
        }
        if (KEYS.a.pressed) {
            player1.velX = -14
        }
        if (KEYS.d.pressed) {
            player1.velX = 14
        }

        // key inputs for player 2
        if (KEYS.ArrowUp.pressed) {
            player2.velY = -10
        }
        if (KEYS.ArrowLeft.pressed) {
            player2.velX = -14
        }
        if (KEYS.ArrowRight.pressed) {
            player2.velX = 14
        }

    }
    animate();
});
