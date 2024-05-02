export default class MenuScreen extends HTMLElement{

    constructor(){
        super();

        this.innerHTML = this.render();
    }



    render(){
        return'<div>${this.constructor.name}</div>'
    }
}

    customElements.define("menu-screen", MenuScreen);