export default class Account {

    constructor(props) {
        const {name, email, password} = props;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    displayAccount(){
        console.log(`username: ${this.name}, email: ${this.email}, password: ${this.password}`);
    }

}