const user = {
    username:"sumit",
    price: 3939,

    welcomeMessage: function(){
        console.log(`${this.username} ,  Welcome javaScript`)
        //in this case 'this' keyword is for curret context/values
        console.log(this); //print different contexts
    }
}

// user.welcomeMessage()
// user.username="roshan"
// user.welcomeMessage()

//console.log(this);

//************************************************************

// function exam(){
//     console.log(this);
// }

//exam()

// const chai = function (){
//     let username="sumit"
//     console.log(this.username);
// }

//*****************************************************************
// arrow functions

const arrow = () => {
    let username = "arrow"
    console.log(this);
}
//arrow()

// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

//const addTwo = (num1 , num2) => num1 + num2

//const addTwo = (num1,num2) => (num1 + num2)
const addTwo = (num1,num2) => ({username: "sumit"})

console.log(addTwo(3,2))


