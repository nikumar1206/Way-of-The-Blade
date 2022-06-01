import { Game } from "./scripts/game";
import { GameView } from "./scripts/gameview";
import { Sprite } from "./scripts/sprite";

window.addEventListener("DOMContentLoaded", () => {
  // set up canvas with a clear background
  const canvas = document.getElementById("canvasEl");
  canvas.width = 1280;
  canvas.height = 620;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const audio = document.getElementById("music");
  let buttons = document.querySelectorAll("div#splash-instructions button");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = () => {
      audio.currentTime = 25;
      audio.play();
      if (buttons[i].id === "play") {
        const game = new Game("dualPlayer");
        const gameview = new GameView(ctx, game);
        gameview.start();
      } else {
        const game = new Game("singlePlayer");
        const gameview = new GameView(ctx, game);
        gameview.start();
      }
    };
  }

  let homeScreen = document.getElementById("homescreen");
  homeScreen.onclick = () => {
    let endDiv = document.getElementById("end-screen");
    endDiv.style.display = "none";
    let startDiv = document.getElementById("splash-instructions");
    startDiv.style.display = "";
  };
});
