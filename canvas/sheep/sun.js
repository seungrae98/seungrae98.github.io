export class Sun {
    constructor() {
        this.radius = 300;
        this.x = 100;

        this.baseY = 100;           // 떠 있을 때 기준 높이
        this.hiddenY = -100;        // 사라진 위치
        this.y = this.hiddenY;

        this.targetY = this.hiddenY;
        this.speed = 4;             // 올라가거나 내려갈 때 속도
    }

    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
    }

    update() {
        // 부드럽게 현재 위치를 targetY로 보간
        const dy = this.targetY - this.y;
        this.y += dy * 0.05;        // 보간 속도 (값이 작을수록 느림)
    }

    draw(ctx, t) {
        this.update();              // 위치 업데이트

        ctx.save();
        ctx.fillStyle = "#FFD700";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.restore();
    }

    sunRise() {
        this.targetY = this.baseY;
    }

    sunSet() {
        this.targetY = this.hiddenY;
    }
}