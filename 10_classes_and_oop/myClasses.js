class user {
    constructor (username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new user("smith","smith@gmail.com", "123")
console.log(chai.encryptPassword());
console.log(chai.changeUsername());

//how we code without creating class 

function User (username, email, password){
    this.username = username
    this.email=email
    this.password=password
}

User.prototype.encryptPassword = function (){
    return `${this.password}abc`
}

User.prototype.changeUsername = function (){
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea" ,"tae@gmail.com", "321")
console.log(tea.encryptPassword());
console.log(tea.changeUsername());