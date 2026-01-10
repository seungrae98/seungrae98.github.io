import { MainContainer } from "./main-container.js";
import { SheepCanvas } from "../../canvas/sheep/sheep-canvas.js";

class MainController {
    constructor() {
        console.log("🔥 main-controller 생성됨");
        this.canvas = new SheepCanvas(); // ☀️ sun 포함
        this.ui = new MainContainer(this.canvas); // ✅ canvas 인스턴스 주입
    }
}

new MainController();
