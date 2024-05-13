import Account from "../models/Account.js";

export default class AccountService {
  data = [];

  constructor() {
    if (localStorage.getItem("accounts")) {
      this.data = JSON.parse(localStorage.getItem("accounts")).map(
        (json) => new Account(json)
      );
    }
  }

  create(instance) {
    // Add une instance de la classe Account dans le tableau qui contient tout les accounts
    this.data.push(new Account(instance));
    localStorage.setItem("accounts", JSON.stringify(this.data));
    //Modifier le localStorage
  }

  read(filter) {
    // Take les accounts stockés dans le tableau data qui correspondent au filter
    filter = (item) => item.id == Account.id;
    filter = (item) => item.email == Account.email;
  }

  update(instance) {}

  delete(instance, hard = false) {}
}
