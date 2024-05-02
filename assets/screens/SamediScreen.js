export default class SamediScreen {
    constructor() {
        super();

        this.innerHTML = this.render();
    }
    render() {
        return `<div>${this.constructor.name.replace("Screen", '')}</div>`;
    }
}