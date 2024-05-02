import HomeScreen from "../screens/Homescreen.js";
import LoginScreen from "../screens/LoginScreen.js";
import NotfoundScreen from "../screens/NotfoundScreen.js";
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
    // this.#screen = document.createElement("div");
    // this.#screen.textContent = location.pathname;
    if (location.pathname == "/" || location.pathname == "/home") {
      this.#screen = new HomeScreen();
    } else if (location.pathname == "/login") {
      this.#screen = new LoginScreen();
    } else {
      this.#screen = new NotfoundScreen();
    }
    this.#screen = new HomeScreen();
    App.instance.render();
  };
}
