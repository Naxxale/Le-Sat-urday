export default class BookingScreen extends HTMLElement{

    constructor(){
        super();

        this.innerHTML = this.render();
    }



    render(){
        return `
        <!--Formulaire de reservation-->
        <div class="container-fluid min-vh-100 d-flex align-items-center justify-content-center flex-column" style = "background-image: url('assets/img/bgResa.jpeg');">
        <h2 class ="text-center text-white mb-4">Formulaire de Réservation</h2>
        <div class ="container min-vh-60 bg-primary pt-3 rounded">
            <form>
                <div class="mb-3">
                <label for="clientName" class="form-label text-secondary">Votre nom</label>
                <input type="text" class="form-control" id="clientName1" aria-describedby="name">
                <div id="clientName" class="form-text"></div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label text-secondary">Votre adresse Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="email">
                    <div id="emailHelp" class="form-text"></div>
                </div>
                <div class="mb-3">
                    <label for="bookingDate" class="form-label text-secondary">Sélectionnez une date de réservation</label>
                    <input type="date" class="form-control" id="exampleInputDate1" aria-describedby="date">
                    <div id="emailHelp" class="form-text"></div>
                </div>
                <select class="form-select" aria-label="numberOfPeople">
                    <option selected>Pour combien de personnes ?</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="3">4</option>
                    <option value="3">5</option>
                    <option value="3">6</option>
                    <option value="3">7</option>
                    <option value="3">8</option>
                    <option value="3">9</option>
                    <option value="3">10</option>
                </select>
                <div class="text-center">
                    <button type="submit" class="btn btn-ternary mt-5  mb-3 ">Réserver</button>
                </div>
            </form>
        </div>
    </div>
    <!--Footer-->
    <footer class="py-5 mt-5">
    <hr />
    <div class="container text-light text-center">
      <p class="display-5 mb-3 fw-bold text-secondary">Suivez nous sur les réseaux !</p>
      <div class="container mb-3 icon-area">
        <a href="https://www.facebook.com/" class="social-logo m-3"
          ><i class="bi bi-facebook h1"></i
        ></a>
        <a href="https://www.tiktok.com/" class="social-logo m-3"
          ><i class="bi bi-tiktok h1"></i
        ></a>
        <a href="https://www.instagram.com/" class="social-logo m-3"
          ><i class="bi bi-instagram h1"></i
        ></a>
      </div>
      <small class="text-secondary">made with love by Antoine C</small>
    </div>
  </footer>
        `
    }
}

    customElements.define("booking-screen", BookingScreen);