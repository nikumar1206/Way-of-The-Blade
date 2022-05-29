export class Canvas {
    constructor() {
        this.canvas = document.getElementById("canvasEl")
        this.canvas.width = 1024
        this.canvas.height = 576
        this.ctx = this.canvas.getContext("2d")
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    removeCanvas() {
        this.canvas.remove()
    }

}