import Screen from "./Screen.js";
import BookingService from "../services/BookingService.js";

export default class BookingScreen extends Screen {
  constructor() {
    super();

    this.querySelector("form").onsubmit = this.handleBookingFormSubmit;
  }

  handleBookingFormSubmit = (e) => {
    e.preventDefault();
    const entries = Object.fromEntries(new FormData(e.target));
    const existingAccounts = JSON.parse(localStorage.getItem("accounts")) || [];
    const existingBooking = JSON.parse(localStorage.getItem("books")) || [];
    const bookingEmailExists = existingBooking.some(
      (books) => books.email === entries.email
    );
    const bookingNameExists = existingBooking.some(
      (books) => books.names === entries.names
    );
    const bookingDateExists = existingBooking.some(
      (books) => books.date === entries.date
    );
    if (bookingEmailExists && bookingNameExists && bookingDateExists) {
      alert("Vous avez déjà reservé !");
      return;
    }
    const nameExists = existingAccounts.some(
      (account) => account.name === entries.names
    );
    const emailExists = existingAccounts.some(
      (account) => account.email === entries.email
    );
    if (!nameExists || !emailExists) {
      alert("Le compte ne correspond pas a la bdd !");
      return;
    }
    const newBookingService = new BookingService();
    newBookingService.create(entries);
    console.log(newBookingService);
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
