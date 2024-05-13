import Account from "./Account.js";

export default class Booking {

    static #_nextId = 0;

    constructor(props) {
        const {id, name, email, date, time, pers} = props;
        this.id = id || ++Booking.#_nextId; 
        this.name = name;
        this.email = email;
        this.date = date;
        this.time = time;
        this.pers = pers;
    }
}