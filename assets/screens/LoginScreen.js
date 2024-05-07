import Screen from "./Screen.js";

export default class LoginScreen extends Screen {

   constructor(){
      super();
      this.querySelector('#form-signIn').onsubmit = this.handleLoginFormSubmit;
      this.querySelector("form").onsubmit = this.handleLoginFormSubmit;
   }

   handleLoginFormSubmit = (e) => {
      e.preventDefault();
      const entries = Object.fromEntries(new FormData(e.target));
      console.log(entries);

      const password = entries["password"];
      const regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).{6,15}$/;
      if (!regex.test(password)) {
         console.log("Mdp invalide");
         return;
      }
      console.log("Mdp valide");
      console.log(entries);
   }


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
                     <form class="flip-card__form" action="">
                        <input class="flip-card__input" name="email" placeholder="Email" type="email">
                        <input class="flip-card__input" name="password" placeholder="Mot de passe" type="password">
                        <button class="flip-card__btn">A Table !</button>
                     </form>
                  </div>
                  <div class="flip-card__back">
                     <div class="title">S'enregistrer</div>
                     <form class="flip-card__form" action="" id="form-signIn">
                        <input class="flip-card__input" placeholder="Nom" name="name" type="name">
                        <input class="flip-card__input" name="email" placeholder="Email" type="email">
                        <input class="flip-card__input" name="password" placeholder="Mot de passe" minlength="6" maxlength="15" type="password">
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
