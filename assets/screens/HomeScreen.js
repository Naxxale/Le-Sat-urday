import Screen from "./Screen.js";

export default class HomeScreen extends Screen {


  render() {
    return `<style>@import "./assets/styles/nav.css"</style>
    <style>@import "./assets/styles/index.css"</style>
    <header>
    <navbar-component/>
    </header>
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
      <button class="button"><a href="/menu" target="spa">En savoir plus</a></button>
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
        <button class="button"><a href="/about-us" target="spa">En savoir plus</a></button>
      </div>
    </div>
    <div class="horizontal-line"></div>
    <div class="registration">
      <h2 class="underline">Réservez dès maintenant !</h2>
      <button class="button"><a href="/reservation" target="spa">Je réserve</a></button>
    </div>
    <footer>
    <footer-component/>
    </footer>`;
  }
}
customElements.define("home-screen", HomeScreen);
