import App from "./App.js";

import HomeScreen from "/screens/HomeScreen.js";
import  LoginScreen from "/screens/LoginScreen.js";
import MenuScreen from "/screens/MenuScreen.js";
import BookingScreen from "/.screen/BookingScreen.js"
import NotfoundScreen from "/screens/NotfoundScreen.js";
import AboutScreen from "/screens/AboutScreen.js";
import SamediScreen from "/screens/SamediScreen.js";

export default class Router{
    
    #screen = null ;
    get screen() {
        return this.#screen;
    }

    constructor(){
        window.onclick = this.handlePageClick;;
        window.onload = this.navigate;
        window.onpopstate = this.navigate;
    }

    handlePageClick = (e) => {
        const link = e.target.closest('[target="spa"]');
        if(link){
            e.preventDefault();
            history.pushState(null, null, link.href);
            this.navigate();
        }
    };

    navigate = (e) => {
        if(location.pathname == '/' || location.pathname == '/home'){
            this.#screen = new HomeScreen({images:["src/assets/images/image1.png"]});
        }
        else if (location.pathname == '/Login'){
            this.#screen = new LoginScreenScreen();
        }
        else if (location.pathname == '/Menu'){
            this.#screen = new MenuScreen();
        }
        else if (location.pathname == '/Booking'){
            this.#screen = new BookingScreen();
        }
        else if (location.pathname == '/About'){
            this.#screen = new AboutScreen();
        }
        else if (location.pathname == '/Samedi'){
            this.#screen = new SamediScreen();
        }
        else{
            this.#screen = new NotfoundScreen();
        }
        App.instance.render();
    };
}