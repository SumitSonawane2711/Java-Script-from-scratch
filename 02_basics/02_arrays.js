const marvel = ["thor" ,"Ironman","spiderman"]
const dc = ["superman","flash","batman"]

//marvel.push(dc);

// console.log(marvel);
// console.log(marvel[3][1]);

marvel.concat(dc);
console.log(marvel);

const combine = marvel.concat(dc)
console.log(combine); 

const combine2 = [...marvel,...dc]  //... is a spread operator
console.log(combine2);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
console.log(anotherArray)
const real_anotherArray=anotherArray.flat(Infinity)
console.log(real_anotherArray);


console.log(Array.isArray("sumit"))  //check is array or not
console.log(Array.from("sumit"))  
console.log(Array.from({name: "sumit"}))

let a1=34
let a2=35
let a3=36
let a4=37

console.log((Array.of(a1,a2,a3,a4)));
