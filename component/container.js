export class Container {
    constructor({ id = "", className = "" } = {}) {
        this.container = document.createElement("div");

        if (id) {
            this.container.id = id;
        }

        if (className) {
            this.container.className = className;
        }

        document.body.appendChild(this.container);
    }

    getElement() {
        return this.container;
    }
}
