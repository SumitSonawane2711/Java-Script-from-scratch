
//scope - block scope nd globle scope

var c=300
let a=400
if(true){
    let a =10
    const b=20
    var c=30
}


 //console.log(a);
// console.log(b);
// console.log(c);

//*******************************************************
// nested scope, closer

function one(){
    const username = "sumit"

    function two(){
        const website = "youtube"
        //console.log(username);
    }
    //console.log(website);

    two()

}

one()

if(true){
    const username ="sumit"
    if(username === "sumit"){
        const language ="javascript"
       // console.log(username+language);
    }
    //console.log(language)
}
//console.log(username);

//*********************************************************** 

// interesting (hoisting)

addone(5) // int this case function can called before declarations
function addone(num){
    return num + 1
}


addtwo(5) // int htis case it not possible
const addtwo = function(num){
    return num + 2
}

