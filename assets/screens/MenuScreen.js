export default class MenuScreen extends HTMLElement{

    constructor(){
        super();

        this.innerHTML = this.render();
    }



    render(){
        return `
      <div class="container-fluid" style = "background-image: url('assets/img/bg.jpeg');">
        <div class="container-fluid bg-primary min-vh-100 col-8">
            <h1 class="primary text-center text-secondary">Menu</h1>
            <h2 class="primary text-center text-secondary mb-5">Le Sat'urday</h2>
    
        <div class="col-12 row">
          
          <!--Partie gauche-->
          <div class="col-6 border-end border-1 border-ternary">
          <div class="my-4">
            <div class = "row">
              <img class=" col-3" src="assets/img/boissons.png" style = "height : 15vh"; "width : 5vw";>
              <h4 class="text-center text-secondary ">Boissons</h4>
            </div>
            <div class="container-fluid  border-top border-ternary border-2 col-6 ">
              <p class="text-center text-secondary mt-3">Mojito &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 5€</p>
              <p class="text-center text-secondary">Grenadine &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 3€</p>
              <p class="text-center text-secondary">Eau &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 1€</p>
            </div>
          </div>
    
            <div class="my-4">
              <div class = "">
                <img src="assets/img/tapas.png" style = "height : 10vh"; "width : 10vw";>
                <h4 class="text-center text-secondary"> Tapas</h4>
              </div>
              <div class="container-fluid  border-top border-ternary border-2 col-6">
                <p class="text-center text-secondary mt-3">Raclette-stick &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 6€</p>
                <p class="text-center text-secondary">Plateau de charcuterie &emsp;&emsp; 7€</p>
                <p class="text-center text-secondary">Plateau de fromage &emsp;&emsp;&emsp; 8€</p>
              </div>
            </div>
    
          </div>
          
    
          <!--Partie droite-->
          <div class="col-6 border-start border-1 border-ternary">
            <div class="my-4">
              <div class = "">
                <h4 class="text-center text-secondary">Plats</h4>
                <img src="assets/img/plat.png" style = "height : 10vh"; "width : 10vw";>
              </div>
              <div class="container-fluid  border-top border-ternary border-2 col-6 ">
                <p class="text-center text-secondary mt-3">Cheese Burger &emsp;&emsp;&emsp;&emsp;&emsp; 6€</p>
                <p class="text-center text-secondary">Lasagne de Sam &emsp;&emsp;&emsp;&nbsp; &nbsp; &nbsp; 12€</p>
                <p class="text-center text-secondary">Fish and Chips &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp; 10€</p>
              </div>
            </div>
    
            <div class="my-4">
              <div class = "">
                <h4 class="text-center text-secondary">Desserts</h4>
                <img src="assets/img/dessert.png" style = "height : 10vh"; "width : 10vw";>
              </div>
              <div class="container-fluid  border-top border-ternary border-2 col-6">
                <p class="text-center text-secondary mt-3">Pain au chocolat &emsp;&emsp;&emsp;&emsp; 1€</p>
                <p class="text-center text-secondary">Mousse au chocolat &emsp;&emsp;&nbsp;&nbsp; 4€</p>
                <p class="text-center text-secondary">Tartelette au chocolat &emsp;&nbsp;&nbsp;&nbsp; 5€</p>
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