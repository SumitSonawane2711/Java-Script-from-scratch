//************************* conversion of the data types **************************

//let score= "40"
//let score="40abd"
let score=null
//let score="abc"
//let score=undefined
//let score= true

//console.log(typeof score);
//pass as a function
//console.log(typeof (score));

//To convert score in number 
let setvalueNumber = Number(score)
//console.log(typeof setvalueNumber);
//console.log(setvalueNumber);   // NoN <= not a number


/* notes:
   "40" => 40
   "40abs" => NaN
   true => 1; false => 0
*/

//how to convert into boolean
//let isLoggedIn=1;
let isLoggedIn=""
//let isLoggedIn="hi"


let boolean= Boolean(isLoggedIn)
//console.log(boolean);

/* notes:
   1 => true
   0 => false
   "" => false
   "hi" => true
*/


// ******************************** Operations *********************************

// console.log(2**3);  // 2 to the power 3

let str1="sumit"
let str2="sonawane"

let str3= str1 + str2
console.log(str3);

console.log("1" + 2)
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");