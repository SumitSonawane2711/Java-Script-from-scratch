// for loop

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

let myArray =["flash","batman","superman"]

for(let index =0; index < myArray.length; index++){
    const element = myArray[index]
    console.log(element);
}

//********************************************************************** */

// brake and continue

// for(let index =1; index <= 20; index++){
//     if (index == 5){
//         console.log(`5 detected`);
//         break
//     }
//     console.log(`value of i is ${index}`);
// }


for(let index =1; index <= 20; index++){
    if (index == 5){
        console.log(`5 detected`);
        continue
    }
    console.log(`value of i is ${index}`);
}