export default class NotfoundScreen extends HTMLElement{

    constructor(){
        super();

        this.innerHTML = this.render();
    }



    render(){
        return'<div>${this.constructor.name}</div>'
    }
}

    customElements.define("notfound-screen", NotfoundScreen);