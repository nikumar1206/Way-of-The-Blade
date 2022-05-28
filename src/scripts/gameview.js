export class GameView {
    constructor(ctx, game) {
        this.ctx = ctx
        this.game = game
    }

    start() {
        this.game.bindEventListeners()
        this.game.draw(this.ctx);
        this.game.animate(this.ctx)
    }
}
