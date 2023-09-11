
function name(){
    var name="sumit"
    console.log(name);
}
//name()

// function addNumbers(num1 ,num2){
//     console.log(num1+num2);
// }

// addNumbers(3,5)

function addNumbers(num1 ,num2){
    let result = num1+num2
    return result
}

const result = addNumbers(4,3)
//console.log("reult: ",result);

function loginUser(username){
    return `${username} just logged in`
}

//console.log(loginUser("sumit"));

// ********************************************************
//rest operator ...

function calculateCartPrice(val1,val2, ...num1){
    return num1
}

//console.log(calculateCartPrice(12,23,22,56,78));

const user = {
    username:"sumit",
    price: 299
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is
    ${anyObject.price}`);
}

handleObject(user)

//***************************************************************

const myNewarray = [233,455,676,900]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewarray));