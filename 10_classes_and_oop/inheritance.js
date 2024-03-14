class User {
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor (username, email, password){
        super(username)     // super directly access the value from parent class
        this.email = email
        this.password=password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("smith", "hellow@gmail.com", "123")
chai.addCourse()

const tea = new User("masalaTea")