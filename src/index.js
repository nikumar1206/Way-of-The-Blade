import { Game } from './scripts/game';
import { GameView } from './scripts/gameview';

window.addEventListener('DOMContentLoaded', (event) => {

    // following code will setup a canvas with a blue background
    const canvas = document.getElementById("canvasEl");
    canvas.width = 1024;
    canvas.height = 526;
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "lightblue";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const game = new Game();
    new GameView(ctx, game).start();
});







// moderately scrapped
// const KEYS = {
//     w: {
//         pressed: false
//     },
//     a: {
//       pressed: false
//     },
//     d: {
//       pressed: false
//     },
//     e: {
//         pressed: false
//     },
//     ArrowUp: {
//         pressed: false
//     },
//     ArrowRight: {
//       pressed: false
//     },
//     ArrowLeft: {
//       pressed: false
//     },
//     Shift: {
//         pressed: false
//     }
//   }

//   let player1 = new Player([100, 430], [0,0], "player1") 
//   let player2 = new Player([900, 430], [0,0], "player2")

//   window.addEventListener("keydown", (e) => {
//     //   console.log(e);
//       let char = e.key
//       if (char in KEYS) {
//         KEYS[char].pressed = true
//       }
// });

// window.addEventListener("keyup", (e) => {
//     let char = e.key

//     if (char in KEYS) {
//         KEYS[char].pressed = false
//     }

//     if (char === "a") {
//         player1.velX = 0
//     } else if (char === "d") {
//         player1.velX = 0
//     }

//     // stop char movement
//     if (char === "ArrowLeft") {
//         player2.velX = 0
//     } else if (char === "ArrowRight") {
//         player2.velX = 0
//     }

//     // allow fight
//     if (char === "e") {
//         player1.attack(player2)
//     }
//     if (char === "Shift") {
//         player2.attack(player1)
//     }
// })

// const animate = () => {
//     window.requestAnimationFrame(animate)

//     ctx.fillStyle = "lightblue";
//     ctx.fillRect(0, 0, canvas.width, canvas.height); //re-renders background

//     player1.move(ctx);
//     player2.move(ctx); //allows movement for players

//     // key inputs for player 1
//     if (KEYS.w.pressed && player1.posY >=430) {
//         player1.velY = -15
//     }
//     if (KEYS.a.pressed) {
//         player1.velX = -10
//     }
//     if (KEYS.d.pressed) {
//         player1.velX = 10
//     }

//     // key inputs for player 2
//     if (KEYS.ArrowUp.pressed  && player2.posY >=430) {
//         player2.velY = -15
//     }
//     if (KEYS.ArrowLeft.pressed) {
//         player2.velX = -10
//     }
//     if (KEYS.ArrowRight.pressed) {
//         player2.velX = 10
//     }
//     console.log(player1.health);
// }
// animate();

// Code that has beeen completely scrapped for now!
//
//
// const audio = document.getElementById("music")
// setTimeout(function() {
//     audio.play();        // play it through JavaScript after 3 seconds
// }, 3000);

