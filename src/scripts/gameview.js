
export class GameView {
    constructor(ctx, game) {
        this.ctx = ctx
        this.game = game
        this.DIMX = document.getElementById("canvasEl").width
        this.DIMY = document.getElementById("canvasEl").height
    }

    start() {
        this.game.bindEventListeners()
        this.game.animate(this.ctx);
    }
}
