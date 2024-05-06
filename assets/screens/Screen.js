export default class Screen extends HTMLElement {
    constructor() {
        super();
    
        this.innerHTML = this.render();
      }
}