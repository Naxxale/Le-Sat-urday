import Screen from "./Screen.js";
import BookingService from "../services/BookingService.js";
import AccountService from "../services/AccountService.js";

export default class BookingScreen extends Screen {
  constructor() {
    super();

    this.querySelector("form").onsubmit = this.handleBookingFormSubmit;
  }

  handleBookingFormSubmit = (e) => {
    e.preventDefault();
    const entries = Object.fromEntries(new FormData(e.target));
    const accountService = new AccountService();
    const accounts = accountService.read(
      (account) => account.email === entries.email
    );
    const currentUser = accounts.pop();
    const bookingService = new BookingService();
    const booking = bookingService.read(
      (books) => books.email === entries.email
    );
    const userBooking = booking.pop();
    console.log(userBooking);
    if (
      userBooking &&
      userBooking.names == entries.names &&
      userBooking.date == entries.date
    ) {
      const doubleBook = document.getElementById("resultBook");
      doubleBook.textContent = "Vous avez déjà reservé !";
      setTimeout(function () {
        doubleBook.textContent = "";
      }, 2000);
      return;
    }
    if (!currentUser || currentUser.name != entries.names) {
      const noAccount = document.getElementById("resultBook");
      noAccount.textContent = "Le compte n'existe pas !";
      setTimeout(function () {
        noAccount.textContent = "";
      }, 2000);
      return;
    }
    const divResult = document.getElementById("resultBook");
    divResult.textContent = "Reservation confirmé !";
    setTimeout(function () {
      divResult.textContent = "";
    }, 3000);
    bookingService.create(entries);
    console.log(bookingService);
  };

  render() {
    return `<style>@import "./assets/styles/nav.css"</style>
    <style>@import "./assets/styles/footer.css"</style>
    <header>
    <navbar-component/>
    </header>
        <!--Formulaire de reservation-->
        <div class="container-fluid min-vh-100
         d-flex align-items-center justify-content-center flex-column" style = "background-image: url('assets/img/Resa/bgResa.jpeg');">
        <h2 class ="text-center text-white mb-4">Formulaire de Réservation</h2>
        <div class ="container min-vh-60 bg-primary pt-3 rounded">
            <form>
                <div class="mb-3">
                <label for="clientName" class="form-label text-secondary">Votre nom</label>
                <input type="text" class="form-control" aria-describedby="name" name="names">
                <div id="clientName" class="form-text"></div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label text-secondary">Votre adresse Email</label>
                    <input type="email" class="form-control" aria-describedby="email" name="email">
                    <div id="emailHelp" class="form-text"></div>
                </div>
                <div class="mb-3">
                    <label for="bookingDate" class="form-label text-secondary">Sélectionnez une date de réservation</label>
                    <input type="date" class="form-control" aria-describedby="date" name="date">
                    <div id="emailHelp" class="form-text"></div>
                </div>
                <div class="mb-3">
                <label for="timepicker-sm">Choisissez votre heure de réservation</label>
                <input type="time" class="form-control" value="" name="time"/>
                </div>
                <select class="form-select" aria-label="numberOfPeople" name="pers">
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
                <div id="resultBook" class="text-center mt-3"></div>
                <div class="text-center">
                    <button type="submit" class="btn btn-ternary mt-5  mb-3 ">Réserver</button>
                </div>
            </form>
        </div>
    </div>
    <footer>
  <footer-component/>
  </footer>`;
  }
}
customElements.define("booking-screen", BookingScreen);
