export class Canvas {
    constructor() {
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.firstChild);
    }

    getContext() {
        return this.ctx;
    }

    getCanvas() {
        return this.canvas;
    }

    resize(width, height) {
        this.canvas.width = width * 2;
        this.canvas.height = height * 2;
        this.ctx.scale(2, 2);
    }
}
