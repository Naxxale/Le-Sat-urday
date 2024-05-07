import Screen from "./Screen.js";

export default class LoginScreen extends Screen {

   constructor(){
      super();
      this.querySelector("form").onsubmit = this.handleLoginFormSubmit;
      this.querySelector("#form-signIn").onsubmit = this.handleLoginFormSubmit;
      
  }

   handleLoginFormSubmit = (e) => {
      e.preventDefault();
      const entries = Object.fromEntries(new FormData(e.target));
      console.log(entries);
      // const account = new Account(entries);
      
      const validPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,15}$/;
      const isValidPassword = validPassword.test(entries.password);
      console.log(isValidPassword);

     if(!isValidPassword){
         e.target.querySelector("#password-error").textContent = "le mot de passe est invalide";
      };

      

      // if(account.hasValidData()){
      //     //envoi des données vers le backend
      // }
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
                     <form class="flip-card__form" action="" >
                        <input class="flip-card__input" name="email" placeholder="Email" type="email">
                        <input class="flip-card__input" name="password" placeholder="Mot de passe" type="password">
                        <button class="flip-card__btn">A Table !</button>
                     </form>
                  </div>
                  <div class="flip-card__back">
                     <div class="title">S'enregistrer</div>
                     <form class="flip-card__form" action="" id="form-signIn">
                        <input class="flip-card__input" name="name" placeholder="Nom" type="name">
                        <input class="flip-card__input" name="email" placeholder="Email" type="email" id="password-signUp">
                        <input class="flip-card__input" name="password" placeholder="Mot de passe" type="password">
                        <label id="password-error"></label>
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
