
import HomeScreen from "/screens/HomeScreen.js";
import LoginScreen from "/screens/LoginScreen.js";
import MenuScreen from "/screens/MenuScreen.js";
import BookingScreen from "/screens/BookingScreen.js";
import NotfoundScreen from "/screens/NotfoundScreen.js";
import AboutScreen from "/screens/AboutScreen.js";
import SamediScreen from "/screens/SamediScreen.js";

import App from "./App.js";

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
        if (location.pathname == "/" || location.pathname == "/home") {
          this.#screen = new HomeScreen();
        } else if (location.pathname == "/login") {
          this.#screen = new LoginScreen();
        } else if (location.pathname == "/menu") {
          this.#screen = new MenuScreen();
        } else if (location.pathname == "/samedi") {
          this.#screen = new SamediScreen();
        } else if (location.pathname == "/booking") {
          this.#screen = new BookingScreen();
        } else if (location.pathname == "/about-us") {
          this.#screen = new AboutScreen();
        } else {
          this.#screen = new NotfoundScreen();
        }
        App.instance.render();
      };
}