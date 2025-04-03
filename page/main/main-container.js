import { Container } from "../../component/container.js";

export class MainContainer {
    constructor(sheepCanvas) {
        console.log("✅ main-container loaded");
        this.sheepCanvas = sheepCanvas;
        this.init();
    }

    init() {
        const containerInstance = new Container({
            id: "main-container",
            className: "custom-class-if-needed"
        });

        this.container = containerInstance.getElement();
        this.renderNavButton();
        this.renderSunriseButton();
        this.renderSunsetButton();
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
        button.textContent = "해가 떠요";
        button.className = "navigation-button";
    
        button.addEventListener("click", () => {
            console.log("해가 떠요");
            this.sheepCanvas.sunRise(true);
        });
    
        this.container.appendChild(button);
    }

    renderSunsetButton() {
        const button = document.createElement("button");
        button.textContent = "해가 져요";
        button.className = "navigation-button";
    
        button.addEventListener("click", () => {
            console.log("해가 져요");
            this.sheepCanvas.sunRise(false);
        });
    
        this.container.appendChild(button);
    }
}