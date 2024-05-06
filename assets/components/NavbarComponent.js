export default class NavbarComponent extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = this.render();
    }

    render() {
        return `
        <style>@import "./assets/styles/nav.css"</style>
        <nav class="maNav">
        <a href="/" class="logo" target="spa"
          ><img src="./assets/img/home/logoAccueil.png" alt="image d'Accueil"
        /></a>
        <div class="middleNav">
          <a href="/menu" class="navAnimation" target="spa">Menu</a>
          <a href="/reservation" class="navAnimation" target="spa"
            >Réservation</a
          >
          <a href="/samedi" class="navAnimation" target="spa">Sat'urday</a>
          <a href="/about-us" class="navAnimation" target="spa"
            >A propos</a
          >
        </div>
        <div class="logIn">
          <box-icon name="log-in" color="#627750"></box-icon>
          <a href="/login" class="navAnimation" target="spa">Connexion</a>
        </div>
      </nav>
      `
    }
}

customElements.define("navbar-component", NavbarComponent);