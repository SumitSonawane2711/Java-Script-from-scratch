// Array

const myArr =[0,1,2,3,4,5]
const myHeros =["Ironman","Superman"]

const myArr2 = new Array (1,2,3,4)
//console.log(myArr[3]);

// Array methods

// myArr.push(7);   //add the last 
// myArr.pop()      //remove the last emlement

// myArr.unshift(9)    //add it from start
// myArr.shift()       //remove from start

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(4))

const newarr= myArr.join() //join the elements and convert into String

// console.log(myArr);
// console.log(newarr);

// **** slice , spice

console.log("A" , myArr);

const myn1 = myArr.slice(1,3)   //
console.log(myn1);
console.log("B" , myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);