import { Game } from './scripts/game';
import { GameView } from './scripts/gameview';

window.addEventListener('DOMContentLoaded', () => {

    // following code will setup a canvas with a clear background
    const canvas = document.getElementById("canvasEl");
    canvas.width = 1024;
    canvas.height = 526;
    const ctx = canvas.getContext("2d");

    // ctx.fillStyle = "lightblue";
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const playButton = document.getElementById("play")
    playButton.onclick = () => {
        let game = new Game();
        new GameView(ctx, game).start();
    }

    const replayButton = document.getElementById("playAgain")
    replayButton.onclick = () => {
        console.log("bloops");
        let game = new Game();
        new GameView(ctx, game).start();
    }
});

// Code that has beeen completely scrapped for now!
//
//
// const audio = document.getElementById("music")
// setTimeout(function() {
//     audio.play();        // play it through JavaScript after 3 seconds
// }, 3000);

