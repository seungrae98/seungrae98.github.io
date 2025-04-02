import { Canvas } from '../../component/canvas.js';
import { Sun } from "./sun.js";
import { Hill } from "./hill.js";
import { SheepController } from "./sheep-controller.js";

export class SheepCanvas {
    constructor() {
        console.log("🐑 sheep-canvas.js loaded");
        this.canvasManager = new Canvas();
        this.canvas = this.canvasManager.getCanvas();
        this.ctx = this.canvasManager.getContext();

        this.sun = new Sun();

        this.hills = [
            new Hill("#FD6BEA", 0.2, 12, 8, 3, 7),
            new Hill("#FF59C2", 0.5, 8, 8, 1, 6),
            new Hill("#FF4674", 1.4, 6, 8, 0, 4),
        ];

        this.sheepController = new SheepController();

        window.addEventListener("resize", this.resize.bind(this), false);
        this.resize();

        requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvasManager.resize(this.stageWidth, this.stageHeight);

        this.sun.resize(this.stageWidth, this.stageHeight);

        for (let i = 0; i < this.hills.length; i++) {
            this.hills[i].resize(this.stageWidth, this.stageHeight);
        }

        this.sheepController.resize(this.stageWidth, this.stageHeight);
    }

    animate(t) {
        requestAnimationFrame(this.animate.bind(this));

        this.ctx.fillStyle = '#ffcaec';
        this.ctx.fillRect(0, 0, this.stageWidth, this.stageHeight);

        this.sun.draw(this.ctx, t);

        let dots;
        for (let i = 0; i < this.hills.length; i++) {
            dots = this.hills[i].draw(this.ctx);
        }

        this.sheepController.draw(this.ctx, t, dots);
    }
}
