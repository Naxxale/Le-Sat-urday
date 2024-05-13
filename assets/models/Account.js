export default class Account {

    static #_nextId = 0;

    constructor(props) {
        const {id, names, email, password} = props;
        this.id = id || ++Account.#_nextId;
        this.name = names;
        this.email = email;
        this.password = password;
    }

    displayAccount() {
        console.log(`username: ${this.name}, Email: ${this.email}, Password: ${this.password}`);
    }


}