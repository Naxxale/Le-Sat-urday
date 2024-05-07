import Screen from "./Screen.js";

export default class SamediScreen extends Screen {
  render() {
    return `<style>@import "./assets/styles/nav.css"</style>
    <style>@import "./assets/styles/footer.css"</style>
    <style>@import "./assets/styles/Menu.css" </style>
    <header>
    <navbar-component/>
    </header>
    <div class="container-fluid" style = "background-image: url('assets/img/menu/bg.jpeg');">
        <div class="container-fluid bg-primary min-vh-100 col-7">
          <div class="container d-flex align-items-center justify-content-center">
            <img class="couverts" src="assets/img/menu/couverts.png" style = "height : 100px"; >
            <div class ="m-5">
              <h1 class="primary text-center text-secondary">Menu</h1>
              <h2 class="primary text-center text-secondary mb-5">Happy Saturday !</h2>
            </div>
            <img class="couverts" src="assets/img/menu/couvertsflip.png" style = "height : 100px"; >
          </div>
        
        <div id="separation" class="col-12 row">
        
        <!--Partie gauche-->
        <div id="leftPart" class="col-6 border-end border-1 border-ternary">
        
        <div class="my-4">
          <div class = "row">
            <h4 class="text-center text-secondary "><i class="bi bi-cup-straw me-2"></i>Boissons</h4>
          </div>
          <div class="table-responsive">
          <table class="border-top border-ternary border-2 mx-auto table table-borderless w-75">
            <tbody class="my-3">
              <tr>
                <td class="col-10 text-center text-secondary bg-primary">Mojito</td>
                <td class="col-2 text-center text-secondary bg-primary">8€</td>
              </tr>
              <tr>
                <td class="text-center text-secondary bg-primary">Grenadine</td>
                <td class="text-center text-secondary bg-primary">3€</td>
              </tr>
              <tr>
                <td class="text-center text-secondary bg-primary">Cola</td>
                <td class="text-center text-secondary bg-primary">4€</td>
              </tr>
              <tr>
                <td class="text-center text-secondary bg-primary">Bière</td>
                <td class="text-center text-secondary bg-primary">4€</td>
              </tr>
              <tr>
                <td class="text-center text-secondary bg-primary">Café de Sam</td>
                <td class="text-center text-secondary bg-primary">1€</td>
              </tr>
              <tr>
                <td class="text-center text-secondary bg-primary">Eau</td>
                <td class="text-center text-secondary bg-primary">1€</td>
              </tr>
            </tbody>  
          </table>
          </div>
        </div>
  
        <div class="my-4">
          <div class = "">
            <h4 class="text-center text-secondary"><img src="assets/img/menu/cheese.svg" style ="height : 2.5vh" class="me-"> Tapas</h4>
          </div>
          <div class="table-responsive">
          <table class="border-top border-ternary border-2 mx-auto table table-borderless w-75">
            <tbody>
              <tr>
                <td class="col-10 text-center text-secondary bg-primary">Couque au chocolat</td>
                <td class="col-2 text-center text-secondary bg-primary">6€</td>
              </tr>
              <tr>
                <td class="text-center text-secondary bg-primary">Chocolat-stick</td>
                <td class="text-center text-secondary bg-primary">12€</td>
              </tr>
              <tr>
                <td class="text-center text-secondary bg-primary">Plateau de chocolat au pain</td>
                <td class="text-center text-secondary bg-primary">10€</td>
              </tr>
              <tr>
                <td class="text-center text-secondary bg-primary">Calamars</td>
                <td class="text-center text-secondary bg-primary">8€</td>
              </tr>
              <tr>
                <td class="text-center text-secondary bg-primary">Burrata</td>
                <td class="text-center text-secondary bg-primary">120€</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
  
        </div>
        
  
        <!--Partie droite-->
        <div id="rightPart" class="col-6 border-start border-1 border-ternary">
          
          <div class="my-4">
            <div class = "">
              <h4 class="text-center text-secondary"><img src="assets/img/menu/burger.svg" style ="height : 2.5vh" class="me-2">Plats</h4>
            </div>
            <div class="table-responsive">
            <table class="border-top border-ternary border-2 mx-auto table table-borderless w-75">
              <tbody>
                <tr>
                  <td class="col-10 text-center text-secondary bg-primary">Chocolatine Burger</td>
                  <td class="col-2 text-center text-secondary bg-primary">8€</td>
                </tr>
                <tr>
                  <td class="text-center text-secondary bg-primary">Lasagnes de Sam</td>
                  <td class="text-center text-secondary bg-primary">80€</td>
                </tr>
                <tr>
                  <td class="text-center text-secondary bg-primary">Fish and Chocolapin</td>
                  <td class="text-center text-secondary bg-primary">10€</td>
                </tr>
                <tr>
                  <td class="text-center text-secondary bg-primary">Salade César</td>
                  <td class="text-center text-secondary bg-primary">12€</td>
                </tr>
                <tr>
                  <td class="text-center text-secondary bg-primary">Croque Monsieur</td>
                  <td class="text-center text-secondary bg-primary">10€</td>
                </tr>
                <tr>
                  <td class="text-center text-secondary bg-primary">Pizza du moment</td>
                  <td class="text-center text-secondary bg-primary">12€</td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
  
          <div class="mt-4">
            <div class = "">
              <h4 class="text-center text-secondary"><i class="bi bi-cookie me-2"></i>Desserts</h4>
            </div>
            <div class="table-responsive">
            <table class="border-top border-ternary border-2 mx-auto table table-borderless w-75">
              <tbody>
                <tr>
                  <td class="col-10 text-center text-secondary bg-primary">Pain au chocolat</td>
                  <td class="col-2 text-center text-secondary bg-primary">0€</td>
                </tr>
                <tr>
                  <td class="text-center text-secondary bg-primary">Mousse au chocolatine</td>
                  <td class="text-center text-secondary bg-primary">6€</td>
                </tr>
                <tr>
                  <td class="text-center text-secondary bg-primary">Tiramisu au chocopain</td>
                  <td class="text-center text-secondary bg-primary">6€</td>
                </tr>
                <tr>
                  <td class="text-center text-secondary bg-primary">Tartelette au pain au chocolatine</td>
                  <td class="text-center text-secondary bg-primary">6€</td>
                </tr>
                <tr>
                  <td class="text-center text-secondary bg-primary">Crème pain au chocolat</td>
                  <td class="text-center text-secondary bg-primary">7€</td>
                </tr>
                <tr>
                  <td class="text-center text-secondary bg-primary">Chocolatine</td>
                  <td class="text-center text-secondary bg-primary">27€</td>
                </tr>
              </tbody>
          </table>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer>
  <footer-component/>
  </footer>`;
  }
}
customElements.define("samedi-screen", SamediScreen);
