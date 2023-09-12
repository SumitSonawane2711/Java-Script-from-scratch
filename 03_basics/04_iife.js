// Immediately Invoke Function Expressions (IIFE)

// to avoid the globle scope pollutions iife is used

//syntax of iife

//) 1.common syntax

(function one(){
    console.log(`DB connected`)
})();   //semicollon is must before the second code to end iife


// 2.iife function without name /using arrow functions

((name) => {
    console.log(`DB connected Two ${name}`);
})("sumit")

