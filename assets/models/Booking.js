import Account from "./Account.js";

export default class Booking{

    static #_nextId = 0;

    constructor(props){
        const {id, names, email, date, time, pers} = props;
        this.id = id || ++Booking.#_nextId;
        this.names = names;
        this.email = email;
        this.date = date;
        this.time = time;
        this.pers = pers;
    }
}