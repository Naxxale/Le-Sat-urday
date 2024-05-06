import FooterComponent from "../components/FooterComponent.js";
import NavbarComponent from "../components/NavbarComponent.js";

export default class Screen extends HTMLElement {
  constructor() {
    super();

    this.props = {};
    this.props.navbarComponent = new NavbarComponent();
    this.innerHTML = this.render();
    this.props.footerComponent = new FooterComponent();
  }
}
