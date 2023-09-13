const userEmail = ""

if(userEmail){
    console.log("got user email");
} 
else {
    console.log("dont have user email");
}


// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", "false", " ", [], {}, function(){}

if(userEmail.length === 0){
    console.log("Array is empty");
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("object id empty");
}

//************************************************************** */
//Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 11
//val1 = undefined ?? 15
val1 = null ?? 28 ?? 30

console.log(val1);

//******************************************************************** */
//Terniary operator (?)
// condition ? true : false

const ricePrice = 100
ricePrice <= 80 ? console.log("less than 80") : console.log("more than 80");