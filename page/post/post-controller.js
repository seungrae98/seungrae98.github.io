import { PostContainer } from "./post-container.js";
import { SheepCanvas } from "../../canvas/sheep/sheep-canvas.js";

class PostController {
    constructor() {
        console.log("🔥 post-controller 생성됨");
        this.canvas = new SheepCanvas();
        this.ui = new PostContainer(this.canvas);
    }
}

new PostController();
