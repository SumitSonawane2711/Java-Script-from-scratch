function SetUsername(username){
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    // SetUsername(username) 
    // SetUsername(username)
    SetUsername.call(this,username)

    this.email = email
    this.password = password
}

const chai = new createUser("smith", "abc@gmail.com" ,"234")
console.log(chai);