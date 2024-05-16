import App from "../scripts/App.js";
import AccountService from "../services/AccountService.js";
import Screen from "./Screen.js";

export default class LoginScreen extends Screen {
  constructor() {
    super();
    this.querySelector("#form-signIn").onsubmit = this.handleRegisterFormSubmit;
    this.querySelector("form").onsubmit = this.handleLoginFormSubmit;
  }

  handleLoginFormSubmit = (e) => {
    e.preventDefault();
    // this.clearErrorMessage();
    const entries = Object.fromEntries(new FormData(e.target));
    const accountService = new AccountService();
    const accounts = accountService.read(
      (account) => account.email === entries.email
    );

    if (accounts.length === 0) {
      const noExistingUser = document.getElementById("createAccount");
      noExistingUser.textContent = "Compte inexistant !";
      setTimeout(function () {
        noExistingUser.textContent = "";
      }, 2000);
      return;
    }
    const currentUser = accounts.pop();
    if (currentUser.password === entries.LoginPassword) {
      alert("Connecté !");
      history.pushState(null, null, "/");
      App.instance.router.navigate();
      return;
    } else {
      const wrongPassword = document.getElementById("wrongPassword");
      wrongPassword.textContent = "Mot de passe incorrect !";
      setTimeout(function () {
        wrongPassword.textContent = "";
      }, 2000);
      return;
    }
  };

  handleRegisterFormSubmit = (e) => {
    e.preventDefault();
    this.clearErrorMessage();
    const entries = Object.fromEntries(new FormData(e.target));
    const password = entries["password"];
    const regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).{6,15}$/;
    if (!regex.test(password)) {
      const errorPassword = document.getElementById("passwordRegister");
      errorPassword.textContent =
        "Attention mot de passe invalide, veuillez saisir un mot de passe fort !";
      setTimeout(function () {
        errorPassword.textContent = "";
      }, 3000);
      return;
    }
    const createAccount = new AccountService();
    const newAccounts = createAccount.read(
      (account) => account.email === entries.email
    );
    const userAccounts = newAccounts.pop();
    if (userAccounts) {
      const errorMail = document.getElementById("mailRegister");
      errorMail.textContent = "L'adresse mail existe déjà !";
      setTimeout(function () {
        errorMail.textContent = "";
      }, 2000);
      return;
    }
    const newAccountService = new AccountService();
    newAccountService.create(entries);
  };

  render() {
    return `
      <style>@import "./assets/styles/nav.css"</style>
      <style>@import "./assets/styles/login.css"</style>
      <style>@import "./assets/styles/footer.css"</style>
      <div class="content">
         <a href="/" class="logo" target="spa"><img src="./assets/img/home/logoAccueil.png" alt="image d'Accueil"/></a>
      </div>
      <div class="wrapper">
         <div class="card-switch">
            <label class="switch">
               <input type="checkbox" class="toggle">
               <span class="slider"></span>
               <span class="card-side"></span>
               <div class="flip-card__inner">
                  <div class="flip-card__front">
                     <div class="title">Connexion</div>
                     <span id="createAccount"></span>
                     <form class="flip-card__form" action="">
                        <input class="flip-card__input" name="email" placeholder="Email" type="email">
                        <input class="flip-card__input" name="LoginPassword" placeholder="Mot de passe" type="password">
                        <span id="wrongPassword"></span>
                        <button class="flip-card__btn">A Table !</button>
                     </form>
                  </div>
                  <div class="flip-card__back">
                     <div class="title">S'enregistrer</div>
                     <form class="flip-card__form" action="" id="form-signIn">
                     <span id="mailRegister"></span>
                        <input class="flip-card__input" placeholder="Nom" name="name" type="name">
                        <input class="flip-card__input" name="email" placeholder="Email" type="email">
                        <input class="flip-card__input" name="password" placeholder="Mot de passe" minlength="6" maxlength="15" type="password">
                        <span id="passwordRegister"></span>
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
