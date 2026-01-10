import { Container } from "../../component/container.js";

export class PostContainer {
    constructor(sheepCanvas) {
        this.sheepCanvas = sheepCanvas;
        this.posts = [
            {
                title: "첫 번째 이야기",
                date: "2025-03-30",
                content: "JavaScript로 블로그 카드 만들기 실험 중입니다!",
            },
            {
                title: "두 번째 이야기",
                date: "2025-03-30",
                content: "JavaScript로 블로그 카드 만들기 실험 중입니다!",
            },
            {
                title: "세 번째 이야기",
                date: "2025-03-30",
                content: "JavaScript로 블로그 카드 만들기 실험 중입니다!",
            },
            {
                title: "네 번째 이야기",
                date: "2025-03-30",
                content: "JavaScript로 블로그 카드 만들기 실험 중입니다!",
            },
            {
                title: "다섯 번째 이야기",
                date: "2025-03-30",
                content: "JavaScript로 블로그 카드 만들기 실험 중입니다!",
            },
            {
                title: "여섯 번째 이야기",
                date: "2025-03-30",
                content: "JavaScript로 블로그 카드 만들기 실험 중입니다!",
            },
            {
                title: "일곱 번째 이야기",
                date: "2025-03-30",
                content: "JavaScript로 블로그 카드 만들기 실험 중입니다!",
            },
        ];

        this.init();
    }

    init() {
        const containerInstance = new Container({
            id: "post-container",
            className: "custom-class-if-needed",
        });

        this.container = containerInstance.getElement();
        this.renderPosts();
    }

    renderPosts() {
        this.posts.forEach((post) => {
            const card = document.createElement("article");
            card.className = "post";
            card.innerHTML = `
                <h2>${post.title}</h2>
                <p class="date">${post.date}</p>
                <p>${post.content}</p>
            `;
            this.container.appendChild(card);
        });
    }
}
