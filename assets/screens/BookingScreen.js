export default class BookingScreen extends HTMLElement{

    constructor(){
        super();

        this.innerHTML = this.render();
    }



    render(){
        return `<div>${this.constructor.name}</div>`
    }
}

    customElements.define("booking-screen", BookingScreen);