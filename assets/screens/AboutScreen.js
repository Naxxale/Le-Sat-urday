export default class AboutScreen extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = this.render();
    }
    render() {
        return `<div>${this.constructor.name.replace("Screen", '')}</div>`;
    }
}