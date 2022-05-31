import { Game } from "./scripts/game";
import { GameView } from "./scripts/gameview";
import { Sprite } from "./scripts/sprite";

window.addEventListener("DOMContentLoaded", () => {
  // following code will setup a canvas with a clear background
  const canvas = document.getElementById("canvasEl");
  canvas.width = 1280;
  canvas.height = 620;
  const ctx = canvas.getContext("2d");

  const audio = document.getElementById("music");

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let buttons = document.getElementsByClassName("game-button");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = () => {
      audio.play();
      let game = new Game();
      new GameView(ctx, game).start();
    };
  }
});
