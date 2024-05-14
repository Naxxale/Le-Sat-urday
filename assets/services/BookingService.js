import Booking from "../models/Booking.js";

export default class BookingService{
    data = [];

    constructor(){
        if (localStorage.getItem("books")) {
            this.data = JSON.parse(localStorage.getItem('books')).map((json) => new Booking(json));
        }
    }


//Methode CRUD
    
    create(instance){
        //setItem
        this.data.push(new Booking(instance));
        localStorage.setItem('books', JSON.stringify(this.data));
    };

    read(filter){
        return this.data.filter(filter);
    };

    updtate(instance){
        //.value + setItem

    };


    delete(instance, hard = false){
        //removeItem

    };
   
}