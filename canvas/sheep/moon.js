export class Moon {
    constructor() {
        this.radius = 150;
        this.x = 250;

        this.moonriseY = 200;
        this.moonsetY = 1000;
        this.y = this.moonsetY;

        this.targetY = this.moonsetY;
        this.speed = 4;
        this.bgcolor = "#4a6171";
    }

    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
    }

    update() {
        const dy = this.targetY - this.y;
        this.y += dy * 0.05;
    }

    draw(ctx, t) {
        this.update();

        ctx.save();
        ctx.fillStyle = "#E8F5FF";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.restore();

        ctx.save();
        ctx.fillStyle = this.bgcolor;
        ctx.beginPath();
        ctx.arc(this.x + 40, this.y - 20, this.radius - 30, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }

    sunRise(isDay) {
        if (isDay) {
            this.targetY = this.moonsetY;
            this.bgcolor = "#ffcaec";
        } else {
            this.targetY = this.moonriseY;
            this.bgcolor = "#4a6171";
        }
    }
}
