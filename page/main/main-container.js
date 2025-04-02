import { Container } from "../../component/container.js";

class MainContainer {
    constructor() {
        this.init();
    }

    init() {
        const containerInstance = new Container({
            id: "main-container",
            className: "custom-class-if-needed"
        });

        this.container = containerInstance.getElement();
        this.renderButton();
    }

    renderButton() {
        const button = document.createElement("button");
        button.textContent = "📄 다른 페이지로 이동";
        button.className = "navigation-button";
    
        button.addEventListener("click", () => {
            window.location.href = "../post/post.html";
        });
    
        this.container.appendChild(button);
    }
}

new MainContainer();