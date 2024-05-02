export default class HomeScreen extends HTMLElement{

    constructor(){
        super();

        this.innerHTML = this.render();
    }



    render(){
        return `<div>${this.constructor.name}</div>`
    }
}

    customElements.define("home-screen", HomeScreen);