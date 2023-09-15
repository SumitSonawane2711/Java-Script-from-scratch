//************** filter method ************************/

// const coding = ["js", "ruby", "java", "python","cpp" ]

// const values = coding.forEach((item) => {
//     console.log(item);
//     return item      // foreach loop not return any thing
// } )

// console.log(values)

//*********************************************************** */
//filter map 

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => {
//     return num > 4} )

// const newNums = []

// myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);

//****************************************************************** */

const books =[
    { title: 'book one' , genre: 'Non-fiction', publish: 1989,
    edition: 2010 },
    { title: 'book two' , genre: 'history', publish: 2001,
    edition: 2000 },
    { title: 'book three' , genre: 'Non-fiction', publish: 1999,
    edition: 2015 },
    { title: 'book four' , genre: 'fiction', publish: 1979,
    edition: 2001 },
    { title: 'book five' , genre: 'science', publish: 2009,
    edition: 1995 },
    { title: 'book six' , genre: 'fiction', publish: 1989,
    edition: 2005 },
    { title: 'book seven' , genre: 'history', publish: 1987,
    edition: 2016 },
    { title: 'book eight' , genre: 'science', publish: 1988,
    edition: 2013 },
    { title: 'book nine' , genre: 'Non-fiction', publish: 1979,
    edition: 2017 },
]

let userBooks = books.filter( (bk) => bk.genre === 'history')

userBooks = books.filter( (bk) => {
    return bk.publish >= 2000 && bk.genre === 'history'
})
console.log(userBooks); 






