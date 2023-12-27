class User {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }
    // error get because of race to set value
    // get email(){
    //     return this.email.toUpperCase()
    // }
    // set email(value){
    //     this.email = value
    // }

    // get password(){
    //     return `${this.password}hitesh`
    // }

    // set password(value){
    //     this.password = value
    // }
    //

    get email() {
        return this._email.toUpperCase()
    }
    set email(value) {
        this._email = value
    }

    get password() {
        return `${this._password}hitesh`
    }

    set password(value) {
        this._password = value
    }

}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);