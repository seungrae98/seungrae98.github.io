import { HanaContainer } from "./hana-container.js";

class MainController {
    constructor() {
        console.log("🔥 hana-controller 생성됨");
        this.ui = new HanaContainer(this.canvas); // ✅ canvas 인스턴스 주입
    }
}

new MainController();
