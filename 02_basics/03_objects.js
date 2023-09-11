//singleton

//object literals


const mySymb = Symbol("key1")
const Jsuser ={
    name :"sumit",
    "full name":"sumit sonawane",
    [mySymb]: "mykey1",
    age: 20,
    location: "Nashik",
    isLoggedIn: false
}

// console.log(Jsuser.name);
// console.log(Jsuser["name"]);
// console.log(Jsuser["full name"])
// console.log( Jsuser[mySymb]);

// Object.freeze(Jsuser);       //changes can't be initiated
// Jsuser.name = "Roshan"
// console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("hello User");
}
 
Jsuser.greeting2 = function(){
    console.log(`hellow js user, ${this.name}`);
}
console.log(Jsuser.greeting())
console.log(Jsuser.greeting2())
