import Account from "../models/Account.js";

export default class AccountService {

    data = [];

    constructor() {
        if (localStorage.getItem('accounts')) {
            this.data = JSON.parse(localStorage.getItem('accounts')).map(json => new Account(json))
        }
    }

    create(instance) {
        this.data.push(new Account(instance));
        localStorage.setItem('accounts', JSON.stringify(this.data));
    }

    read(filter) {
        // Récupérer les Accounts stocké dans le tableau data qui correspond au filter
        filter = (item) => item.id == Account.id;
    }

    update(instance) {

    }

    delete(instance, hard = false) {

    }

}