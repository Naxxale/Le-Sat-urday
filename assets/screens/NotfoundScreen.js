export default class NotfoundScreen {
    constructor() {
        super();

        this.innerHTML = this.render();
    }
    render() {
        return `<div>${this.constructor.name.replace("Screen", '')}</div>`;
    }
}