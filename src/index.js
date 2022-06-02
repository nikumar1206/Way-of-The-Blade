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
  // const aud_but = document.getElementById("audio_button");

  let init_dp_butt = document.getElementById("play_fr");
  init_dp_butt.onclick = () => {
    let startDiv = document.getElementById("starting-splash");
    startDiv.style.display = "none";

    let how_to = document.getElementById("splash-instructions-friends");
    how_to.style.display = "block";
  };

  let init_sp_butt = document.getElementById("play_ai");
  init_sp_butt.onclick = () => {
    let startDiv = document.getElementById("starting-splash");
    startDiv.style.display = "none";

    let how_to = document.getElementById("splash-instructions-ai");
    how_to.style.display = "block";
  };

  let start_butt_sp = document.getElementById("start_sp");
  start_butt_sp.onclick = () => {
    const game = new Game("sp");
    const gameview = new GameView(ctx, game);
    gameview.startsp();
    audio.play();
  };

  let start_butt_dp = document.getElementById("start_dp");
  start_butt_dp.onclick = () => {
    const game = new Game("dp");
    const gameview = new GameView(ctx, game);
    gameview.startdp();
    audio.play();
  };

  let homeScreen = document.getElementById("homescreen");
  homeScreen.onclick = () => {
    let endDiv = document.getElementById("end-screen");
    endDiv.style.display = "none";
    let startDiv = document.getElementById("starting-splash");
    startDiv.style.display = "";
  };
});
