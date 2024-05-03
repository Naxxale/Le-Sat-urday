export default class BookingScreen extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = this.render();
  }

  render() {}
}
customElements.define("booking-screen", BookingScreen);
