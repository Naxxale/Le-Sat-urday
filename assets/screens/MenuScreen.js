export default class MenuScreen extends HTMLElement{

    constructor(){
        super();

        this.innerHTML = this.render();
    }



    render(){
        return `<div class="container">
        <div class="container-fluid bg-primary min-vh-100 col-8">
            <h1 class="primary text-center text-secondary">Menu</h1>
            <h2 class="primary text-center text-secondary mb-5">Le Sat'urday</h2>
    
        <div class="col-12 row">
          
          <!--Partie gauche-->
          <div class="col-6">
    
            <div class=" my-4">
              <h4 class="text-center text-secondary">Boissons</h4>
              <div class="container border-top border-ternary border-2 col-6 ">
                <p class="text-center text-secondary mt-3">Virgin Mojito</p>
                <p class="text-center text-secondary">Cocktail Molotov</p>
                <p class="text-center text-secondary">Eau simple et basique</p>
                
              </div>
            </div>
    
            <div class="my-4">
             
              <h4 class="text-center text-secondary"> Tapas</h4>
              <div class="container-fluid  border-top border-ternary border-2 col-6">
                <p class="text-center text-secondary mt-3">Raclette-stick</p>
                <p class="text-center text-secondary">Plateau de charcuterie</p>
                <p class="text-center text-secondary">Plateau de fromage</p>
              </div>
            </div>
    
          </div>
    
          <!--Partie droite-->
          <div class="col-6  border-start border-ternary border-2">
            <div class="my-4">
              <h4 class="text-center text-secondary">Plats</h4>
              <div class="container-fluid  border-top border-ternary border-2 col-6 ">
                <p class="text-center text-secondary mt-3">Cheese Burger</p>
                <p class="text-center text-secondary">Lasagne de Sam</p>
                <p class="text-center text-secondary">Fish and Chips</p>
              </div>
            </div>
    
            <div class="my-4">
              <h4 class="text-center text-secondary">Desserts</h4>
              <div class="container-fluid  border-top border-ternary border-2 col-6">
                <p class="text-center text-secondary mt-3">Pain au chocolat</p>
                <p class="text-center text-secondary">Mousse au chocolat</p>
                <p class="text-center text-secondary">Tartelette au chocolat</p>
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