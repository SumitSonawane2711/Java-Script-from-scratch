//********************* reduced method ******************/

const myNums = [1,2,3,4,5,6,7]


// const myTotal = myNums.reduce ( function (acc, curval) {
//     console.log(`acc: ${acc} and curval: ${curval}`);
//     return acc + curval 
// },0) 


// with arrow function

const myTotal = myNums.reduce( (acc,curval) => acc+curval,0)
console.log(myTotal)


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "mobile dev",
        price: 2999
    },
    {
        itemName: "data science",
        price: 3999
    },
    {
        itemName: "full stack",
        price: 4999
    }
]

const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price,0)
console.log(priceToPay);