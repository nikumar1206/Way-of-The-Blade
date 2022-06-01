export class GameView {
  constructor(ctx, game) {
    this.ctx = ctx;
    this.game = game;
    this.DIMX = document.getElementById("canvasEl").width;
    this.DIMY = document.getElementById("canvasEl").height;
  }

  startdp() {
    // Start dual player game
    this.cleanupStart();
    this.cleanupEnd();
    this.game.bindEventListenerPlayer1();
    this.game.bindEventListenerPlayer2();
    this.game.displayTimer();
    this.game.animate(this.ctx);
  }

  startsp() {
    // Start single player game with AI
    this.cleanupStart();
    this.cleanupEnd();
    this.game.bindEventListenerPlayer1();
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
