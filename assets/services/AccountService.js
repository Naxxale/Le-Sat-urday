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
        //getItem
        //recupérer les acccounts stockés dans le tableau data qui correspondent au filter
        filter = (item) => item.id == Account.id; //(exemple)
    }

    update(instance){
        //.value + setItem

    }


    delete(instance, hard = false){
        //removeItem

    }
}