export default class Account {

    static #_nextId = 0;

    constructor(props) {
        const {id, name, email, password} = props;
        this.name = name;
        this.id = id || ++Account.#_nextId;
        this.email = email;
        this.password = password;
    }

    displayAccount(){
        //tostring
        console.log(`username: ${this.name}, email: ${this.email}, password: ${this.password}`);
    }

}