// foreach loop

const coding = ["js", "ruby", "java", "python","cpp" ]

// coding.forEach(function (item) {
//     console.log(item);
// } )

//****************************************** */

// coding.forEach( (item) => {
//     console.log(item);
// } )

//*********************************************** */

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

//********************************************************* */

// coding.forEach((item,index,arr)=> {
//     console.log(item, index, arr);
// })

//************************************************************** */

const myCoding =[
    {
        lang: "java",
        Id: "IntellijeIdia"
    },
    {
        lang: "javaScript",
        Id: "visualStudio"
    },
    {
        lang: "Python",
        Id: "remoteID"
    }
]

myCoding.forEach( (item) => {
    console.log(item.Id);
})