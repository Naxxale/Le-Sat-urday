export default class HomeScreen extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = this.render();
  }
  render() {
    return `<style>@import "./assets/styles/nav.css"</style>
    <style>@import "./assets/styles/index.css"</style>
    <div class="horizontal-line-nav"></div>
    <div class="firstContent">
      <img src="./assets/img/home/firstBackground.jpg" alt="" />
      <h1>
        Envie de passer une bonne soirée
        <span class="underline">entre amis</span> ?
        <box-icon
          class="sun"
          name="sun"
          animation="tada"
          color="#221a43"
        ></box-icon>
      </h1>
    </div>
    <div class="horizontal-line"></div>
    <h2>Notre Menu</h2>
    <div class="menu">
      <div class="book">
        <div class="listeMenu">
          <h3>Titre</h3>
          <li>Pain au chocolat</li>
          <hr />
          <li>Pain au chocolat</li>
          <hr />
          <li>Pain au chocolat</li>
          <hr />
          <li>Pain au chocolat</li>
          <hr />
          <li>Pain au chocolat</li>
        </div>
        <div class="cover">
          <h3 class="underline">Menu Semaine</h3>
        </div>
      </div>
      <button class="button">En savoir plus</button>
      <div class="book">
        <div class="listeMenu">
          <h3>Titre</h3>
          <li>Chocolatine</li>
          <hr />
          <li>Chocolatine</li>
          <hr />
          <li>Chocolatine</li>
          <hr />
          <li>Chocolatine</li>
          <hr />
          <li>Chocolatine</li>
        </div>
        <div class="cover">
          <h3 class="underline">Menu Sat'Urday</h3>
        </div>
      </div>
    </div>
    <div class="horizontal-line"></div>
    <div class="aboutUs">
      <img src="./assets/img/home/aboutUs.jpg" alt="" />
      <div class="aboutUsText">
        <h3>Qui sommes-nous ?</h3>
        <p>
          Découvrez le lieu et les personnes qui vous offrent ce bohneur inouï !
        </p>
        <button class="button">En savoir plus</button>
      </div>
    </div>
    <div class="horizontal-line"></div>
    <div class="registration">
      <h2 class="underline">Réservez dès maintenant !</h2>
      <button class="button">Je réserve !</button>
    </div>
    <footer class="py-5 mt-5">
      <hr />
      <div class="container text-light text-center">
        <p class="display-5 mb-3 fw-bold">Suivez nous sur les réseaux !</p>
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
        <small>made with love by Théo le dozo</small>
      </div>
    </footer>`;
  }
}
customElements.define("home-screen", HomeScreen);
