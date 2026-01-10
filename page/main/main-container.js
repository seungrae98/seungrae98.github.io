import { Container } from "../../component/container.js";

export class MainContainer {
    constructor(sheepCanvas) {
        console.log("✅ main-container loaded");
        this.sheepCanvas = sheepCanvas;

        this.isDay = true;

        this.init();
    }

    init() {
        const containerInstance = new Container({
            id: "main-container",
            className: "custom-class-if-needed",
        });

        this.container = containerInstance.getElement();
        this.renderNavButton();
        this.renderSunriseButton();
    }

    renderNavButton() {
        const button = document.createElement("button");
        button.textContent = "📄 다른 페이지로 이동";
        button.className = "navigation-button";

        button.addEventListener("click", () => {
            window.location.href = "../post/post.html";
        });

        this.container.appendChild(button);
    }

    renderSunriseButton() {
        const button = document.createElement("button");
        button.textContent = "Day Night";
        button.className = "navigation-button";

        button.addEventListener("click", () => {
            if (this.isDay) {
                console.log("해가 져요");
                this.sheepCanvas.sunRise(false);
                this.isDay = false;
            } else {
                console.log("해가 떠요");
                this.sheepCanvas.sunRise(true);
                this.isDay = true;
            }
        });

        this.container.appendChild(button);
    }
}
