function multipleBy5(num){
    return num*5
}
multipleBy5.power=2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

// every thing in javascript is objects even function -
// - can also refer as object

function createUser(username,score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printme = function(){
    console.log(this.score);
}

const chai =new createUser("rohit" , 30)
const tea = new createUser ("haryy" , 50)

chai.printme()



//above code focused on the function of new keyword