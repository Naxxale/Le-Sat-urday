export default class FooterComponent extends HTMLElement {

    constructor(){
        super();
        this.innerHTML = this.render();
    }

    render(){
        return `<style>@import "./assets/styles/footer.css"</style>
        <div class="container text-light text-center">
          <p class="display-5 mb-3 fw-bold text-secondary">Suivez nous sur les réseaux !</p>
          <div class="container mb-3 icon-area">
            <a href="https://www.facebook.com/" class="social-logo m-3"><i class="bi bi-facebook h1"></i></a>
            <a href="https://www.tiktok.com/" class="social-logo m-3"
              ><i class="bi bi-tiktok h1"></i
            ></a>
            <a href="https://www.instagram.com/" class="social-logo m-3"
              ><i class="bi bi-instagram h1"></i
            ></a>
          </div>
          <small class="text-secondary">made with love by Théo le dozo, Solen a la cantine et Antoine C le troll</small>
        </div>
      `;
    }
}
customElements.define("footer-component", FooterComponent);