import AboutScreen from "../screens/AboutScreen.js";
import BookingScreen from "../screens/BookingScreen.js";
import HomeScreen from "../screens/HomeScreen.js";
import LoginScreen from "../screens/LoginScreen.js";
import Menuscreen from "../screens/MenuScreen.js";
import NotfoundScreen from "../screens/NotfoundScreen.js";
import SamediScreen from "../screens/SamediScreen.js";
import App from "./App.js";

export default class Router {
  #screen = null;
  get screen() {
    return this.#screen;
  }
  constructor() {
    window.onclick = this.handlePageClick;
    window.onload = this.navigate;
    window.onpopstate = this.navigate;
  }

  handlePageClick = (e) => {
    const link = e.target.closest('[target="spa"]');
    if (link) {
      e.preventDefault();
      history.pushState(null, null, link.href);
      this.navigate();
    }
  };

  navigate = (e) => {
    if (location.pathname == "/" || location.pathname == "/index.html") {
      this.#screen = new HomeScreen();
    } else if (location.pathname == "/login.html") {
      this.#screen = new LoginScreen();
    } else if (location.pathname == "/menu.html") {
      this.#screen = new Menuscreen();
    } else if (location.pathname == "/samedi.html") {
      this.#screen = new SamediScreen();
    } else if (location.pathname == "/booking.html") {
      this.#screen = new BookingScreen();
    } else if (location.pathname == "/about-us.html") {
      this.#screen = new AboutScreen();
    } else {
      this.#screen = new NotfoundScreen();
    }
    App.instance.render();
  };
}
