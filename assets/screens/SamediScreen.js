export default class SamediScreen extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = this.render();
  }
  render() {
    return `<style>@import "./assets/styles/nav.css"</style>
    <div class="container-fluid" style = "background-image: url('assets/img/bg.jpeg');">
        <div class="container-fluid bg-primary min-vh-100 col-8">
            <h1 class="primary text-center text-secondary">Menu</h1>
            <h2 class="primary text-center text-secondary mb-5">Le Sat'urday</h2>
        <div class="col-12 row">
          <!--Partie gauche-->
          <div class="col-6 border-start border-1 border-ternary">
          <div class="my-4">
            <h4 class="text-center text-secondary">Plats</h4>
            <div class="container-fluid  border-top border-ternary border-2 col-6 ">
              <p class="text-center text-secondary mt-3">Mojito</p>
              <p class="text-center text-secondary">Grenadine</p>
              <p class="text-center text-secondary">Eau</p>
            </div>
          </div>
            <div class="my-4">
              <h4 class="text-center text-secondary"> Tapas</h4>
              <div class="container-fluid  border-top border-ternary border-2 col-6">
                <p class="text-center text-secondary mt-3">Raclette-stick</p>
                <p class="text-center text-secondary">Plateau de charcuterie</p>
                <p class="text-center text-secondary">Plateau de fromage</p>
              </div>
            </div>
          </div>
          <!--Partie droite-->
          <div class="col-6 border-start border-1 border-ternary">
            <div class="my-4">
              <h4 class="text-center text-secondary">Plats</h4>
              <div class="container-fluid  border-top border-ternary border-2 col-6 ">
                <p class="text-center text-secondary mt-3">Cheese Burger</p>
                <p class="text-center text-secondary">Lasagne de Sam</p>
                <p class="text-center text-secondary">Fish and Chips</p>
              </div>
            </div>
            <div class="my-4">
              <h4 class="text-center text-secondary">Desserts</h4>
              <div class="container-fluid  border-top border-ternary border-2 col-6">
                <p class="text-center text-secondary mt-3">Pain au chocolat</p>
                <p class="text-center text-secondary">Mousse au chocolat</p>
                <p class="text-center text-secondary">Tartelette au chocolat</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="py-5 mt-5">
    <hr />
    <div class="container text-light text-center">
      <p class="display-5 mb-3 fw-bold text-secondary">Suivez nous sur les réseaux !</p>
      <div class="container mb-3 icon-area">
        <a href="https://www.facebook.com/" class="social-logo m-3"
          ><i class="bi bi-facebook h1"></i
        ></a>
        <a href="https://www.tiktok.com/" class="social-logo m-3"
          ><i class="bi bi-tiktok h1"></i
        ></a>
        <a href="https://www.instagram.com/" class="social-logo m-3"
          ><i class="bi bi-instagram h1"></i
        ></a>
      </div>
      <small class="text-secondary">made with love by Antoine C</small>
    </div>
  </footer>`;
  }
}
customElements.define("samedi-screen", SamediScreen);
