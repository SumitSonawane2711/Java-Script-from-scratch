//conversion of the data types

//let score= "40"
//let score="40abd"
let score=null
//let score="abc"
//let score=undefined
//let score= true

console.log(typeof score);
//pass as a function
console.log(typeof (score));

//To convert score in number 
let setvalueNumber = Number(score)
console.log(typeof setvalueNumber);
console.log(setvalueNumber);   // NoN <= not a number


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
console.log(boolean);

/* notes:
   1 => true
   0 => false
   "" => false
   "hi" => true
*/
