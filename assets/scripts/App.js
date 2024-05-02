export default class App {

    static #_instance = null;
    static get instance() {return new App();}
    
    name = "MyApp";

    constructor() {
        if (App.#_instance != null && App.#_instance instanceof App) {
            return App.#_instance;
        }

        App.#_instance = this;

        window.onclick = this.hanglePageClick;
        window.onload = this.navigate;
        window.onpopstate = this.navigate;

    }

    render(){
        document.getElementById('app').firstElementChild?.remove();
        document.getElementById('app').append(this.router.screen);
    }
}