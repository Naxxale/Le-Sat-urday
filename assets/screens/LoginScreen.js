import Screen from "./Screen.js";

export default class LoginScreen extends Screen {
  
  render() {
    return `
    <style>@import "./assets/styles/nav.css"</style>
    <style>@import "./assets/styles/login.css"</style>
    <style>@import "./assets/styles/footer.css"</style>
    <header>
    <navbar-component/>
    </header>
    <div class="wrapper">
    <div class="card-switch">
        <label class="switch">
           <input type="checkbox" class="toggle">
           <span class="slider"></span>
           <span class="card-side"></span>
           <div class="flip-card__inner">
              <div class="flip-card__front">
                 <div class="title">Connexion</div>
                 <form class="flip-card__form" action="">
                    <input class="flip-card__input" name="email" placeholder="Email" type="email">
                    <input class="flip-card__input" name="password" placeholder="Mot de passe" type="password">
                    <button class="flip-card__btn">A Table !</button>
                 </form>
              </div>
              <div class="flip-card__back">
                 <div class="title">S'enregistrer</div>
                 <form class="flip-card__form" action="">
                    <input class="flip-card__input" placeholder="Nom" type="name">
                    <input class="flip-card__input" name="email" placeholder="Email" type="email">
                    <input class="flip-card__input" name="Mot de" placeholder="Mot de passe" type="password">
                    <button class="flip-card__btn">A Table !</button>
                 </form>
              </div>
           </div>
        </label>
    </div>
</div>`;
  }
}
customElements.define("login-screen", LoginScreen);
