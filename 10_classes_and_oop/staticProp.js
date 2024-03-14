class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }
    
    // static method can't call through object 
    static createId(){
        return `123`
    }
}

const hitesh = new User("hitesh")
console.log(hitesh.createId());  // this will give an error cause method is declared static

