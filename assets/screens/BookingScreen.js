export default class BookingScreen extends HTMLElement{

    constructor(){
        super();

        this.innerHTML = this.render();
    }



    render(){
        return `
        `
    }
}

    customElements.define("booking-screen", BookingScreen);