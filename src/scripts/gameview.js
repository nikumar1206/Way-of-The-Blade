export class GameView {
  constructor(ctx, game) {
    this.ctx = ctx;
    this.game = game;
    this.DIMX = document.getElementById("canvasEl").width;
    this.DIMY = document.getElementById("canvasEl").height;
  }

  start() {
    this.cleanupStart();
    this.cleanupEnd();
    this.game.bindEventListeners();
    this.game.displayTimer();
    this.game.animate(this.ctx);
  }

  cleanupStart() {
    let startDiv = document.getElementById("splash-instructions");
    startDiv.style.display = "none";
  }

  cleanupEnd() {
    let endDiv = document.getElementById("end-screen");
    endDiv.style.display = "none";
  }
}
