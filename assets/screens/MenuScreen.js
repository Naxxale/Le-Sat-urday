export default class MenuScreen extends HTMLElement{

    constructor(){
        super();

        this.innerHTML = this.render();
    }



    render(){
        return `
      <div class="container-fluid" style = "background-image: url('assets/img/bg.jpeg');">
        <div class="container-fluid bg-primary min-vh-100 col-7">
          <div class="container d-flex align-items-center justify-content-center">
            <img src="assets/img/couverts.png" style = "height : 12vh"; >
            <div class ="m-5">
              <h1 class="primary text-center text-secondary">Menu</h1>
              <h2 class="primary text-center text-secondary mb-5">Le Sat'urday</h2>
            </div>
            <img src="assets/img/couvertsflip.png" style = "height : 12vh"; >
          </div>
        <div class="col-12 row">
          
        <!--Partie gauche-->
        <div class="col-6 border-end border-1 border-ternary">
        <div class="my-4">
          <div class = "row">
            <h4 class="text-center text-secondary "><i class="bi bi-cup-straw me-2"></i>Boissons</h4>
          </div>
          <div class="container-fluid  border-top border-ternary border-2 col-6 ">
            <p class="text-center text-secondary mt-3">Mojito &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 8€</p>
            <p class="text-center text-secondary">Grenadine &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 3€</p>
            <p class="text-center text-secondary">Cola &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp; 4€</p>
            <p class="text-center text-secondary">Bière &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp; 4€</p>
            <p class="text-center text-secondary">Café de Sam &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 1€</p>
            <p class="text-center text-secondary">Eau &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 1€</p>
          </div>
        </div>
  
          <div class="my-4">
            <div class = "">
              <h4 class="text-center text-secondary"><img src="assets/img/cheese.svg" style ="height : 2.5vh" class="me-"> Tapas</h4>
            </div>
            <div class="container-fluid  border-top border-ternary border-2 col-6">
              <p class="text-center text-secondary mt-3">Raclette-stick &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 6€</p>
              <p class="text-center text-secondary">Plateau de charcuterie &emsp;&nbsp;&nbsp; 12€</p>
              <p class="text-center text-secondary">Plateau de fromages &emsp;&emsp;&nbsp; 10€</p>
              <p class="text-center text-secondary">Calamars &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 8€</p>
              <p class="text-center text-secondary">Burrata &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 120€</p>
            </div>
          </div>
  
        </div>
        
  
        <!--Partie droite-->
        <div class="col-6 border-start border-1 border-ternary">
          <div class="my-4">
            <div class = "">
              <h4 class="text-center text-secondary"><img src="assets/img/burger.svg" style ="height : 2.5vh" class="me-2">Plats</h4>
            </div>
            <div class="container-fluid  border-top border-ternary border-2 col-6 ">
              <p class="text-center text-secondary mt-3">Cheese Burger &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp; 8€</p>
              <p class="text-center text-secondary">Lasagnes de Sam &emsp;&emsp;&emsp;&nbsp; &nbsp; 80€</p>
              <p class="text-center text-secondary">Fish and Chips &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp; 10€</p>
              <p class="text-center text-secondary">Salade César &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 12€</p>
              <p class="text-center text-secondary">Croque Monsieur &emsp;&emsp;&emsp;&emsp; 10€</p>
              <p class="text-center text-secondary">Pizza du moment &emsp;&emsp;&emsp;&emsp; 12€</p>
            </div>
          </div>
  
          <div class="my-4">
            <div class = "">
              <h4 class="text-center text-secondary"><i class="bi bi-cookie me-2"></i>Desserts</h4>
            </div>
            <div class="container-fluid  border-top border-ternary border-2 col-6">
              <p class="text-center text-secondary mt-3">Pain au chocolat &emsp;&emsp;&emsp;&emsp; 0€</p>
              <p class="text-center text-secondary">Mousse au chocolat &emsp;&emsp;&nbsp;&nbsp; 6€</p>
              <p class="text-center text-secondary">Tartelette au chocolat &emsp;&nbsp;&nbsp;&nbsp; 6€</p>
              <p class="text-center text-secondary">Tiramisu &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 6€</p>
              <p class="text-center text-secondary">Crème brûlée &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp; 7€</p>
              
              <p class="text-center text-secondary">Chocolatine &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 27€</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        <!--Footer-->
        <div class="container-fluid bg-secondary d-flex justify-content-around">
          <p style ="color:white">Termes et conditions</p>
          <p style="color:white">Mentions légales</p>
          <p style="color:white"> <i class="bi bi-c-circle"></i> 2024 par SAT'URDAY</p>
        </div>
      </div>`
    }
}

    customElements.define("menu-screen", MenuScreen);