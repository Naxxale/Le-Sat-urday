import Service from "../classes/Service.js";
import Booking from "../models/Booking.js";

export default class BookingService extends Service{
    constructor(){
        super();
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
}