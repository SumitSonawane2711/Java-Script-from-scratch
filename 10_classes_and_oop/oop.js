// object literals

const user ={
    username: "sumit",
    loginCount: 8,
    signesIn: true,

    getUserDetails: function(){
        //console.log("got details");
        //  console.log(`Username: ${this.username}`);
        console.log(this);

    }
}

//console.log(user.loginCount);
//console.log(user.getUserDetails());
//console.log(this);

//this keyword : refer the current contex

//************Constructor *****************************/

//const promiseOne = new Promise()

function User(username, loginCount, isLoggedIn){
    this.username=username;
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn

    return this;       //not need to write return it by default return it
}

const user1 =new User("summit",12,true)
const user2 =new User("Roshan",15,false)
console.log(user2);


//1.with new keyword , first a fresh empty object(instance) is create
//2.constructor function call due to new keyword
//3.this keyword injects all the argument in the function