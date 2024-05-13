    export default class Account {
        
        static #_nextId = 0;
    constructor(props) {
        const {id, names, email, password} = props;
        this.id = id || ++Account.#_nextId;
        this.names = names;
        this.email = email;
        this.password = password;
    }

    displayAccount(){
        console.log(`username: ${this.names}, email: ${this.email}, password: ${this.password}`);
    }

}