import Account from "../models/Account.js";

export default class AccountService{
    data = [];

    constructor(){
        if(localStorage.getItem('accounts')){
            this.data = JSON.parse(localStorage.getItem('accounts')).map(json => new Account(json));
            //map = prend toutes les lignes du tableau et les transforme en objet de type account
        }
    }

    //Methode CRUD

    create(instance){
        //setItem
        this.data.push(new Account(instance));
        localStorage.setItem('accounts', JSON.stringify(this.data));
    }

    read(filter){
        return this.data.filter(filter);
    }

    update(instance){
        //.value + setItem

    }


    delete(instance, hard = false){
        //removeItem

    }
}