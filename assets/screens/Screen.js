import NavbarComponent from "../components/NavbarComponent.js"
import FooterComponent from "../components/FooterComponent.js"
export default class AboutScreen extends HTMLElement{
    constructor() {
        super();
    
        this.innerHTML = this.render();
        this.props = {};
        this.props.NavbarComponent = new NavbarComponent();
        this.props.FooterComponent = new FooterComponent();
      }
}