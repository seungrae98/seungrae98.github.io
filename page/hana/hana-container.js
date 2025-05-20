import { Container } from "../../component/container.js";
import { hanaData } from "./hana-data.js";

export class HanaContainer {
    constructor() {
        console.log("✅ hana-container loaded");

        this.data = hanaData;
        this.currentIndex = 0;

        this.init();
    }

    init() {
        const containerInstance = new Container({
            id: "hana-container",
            className: "custom-class-if-needed",
        });

        this.container = containerInstance.getElement();

        // 텍스트1
        this.label = document.createElement("div");
        this.label.className = "label-text";
        this.container.appendChild(this.label);

        // 정답 확인 버튼
        this.answerBtn = document.createElement("button");
        this.answerBtn.textContent = "정답 확인";
        this.answerBtn.className = "navigation-button";
        this.answerBtn.addEventListener("click", this.showAnswer.bind(this));
        this.container.appendChild(this.answerBtn);

        // 텍스트2 (결과)
        this.resultText = document.createElement("div");
        this.resultText.className = "label-text";
        this.resultText.textContent = "버튼을 눌러 정답을 확인하세요.";
        this.container.appendChild(this.resultText);

        // 다음 문제 버튼
        this.nextBtn = document.createElement("button");
        this.nextBtn.textContent = "다음 문제 ▶";
        this.nextBtn.className = "navigation-button";
        this.nextBtn.addEventListener("click", this.nextQuestion.bind(this));
        this.container.appendChild(this.nextBtn);

        document.body.appendChild(this.container);

        this.showQuestion();
    }

    showQuestion() {
        const { description } = this.data[this.currentIndex];
        this.label.textContent = description;
        this.resultText.textContent = "정답";
        this.resultText.style.color = "#333";
    }

    showAnswer() {
        const { word } = this.data[this.currentIndex];
        this.resultText.textContent = word;
        this.resultText.style.color = "#2e7d32";
    }

    nextQuestion() {
        if (this.currentIndex < this.data.length - 1) {
            this.currentIndex++;
            this.showQuestion();
        } else {
            this.resultText.textContent = "모든 문제 완료";
            this.label.textContent = "";
            this.answerBtn.disabled = true;
            this.nextBtn.disabled = true;
        }
    }
}
