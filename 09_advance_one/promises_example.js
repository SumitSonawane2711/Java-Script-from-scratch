/* async task to create a promises

1.Learn Html
2.Learn and practise CSS
3.learn and practice js
4.learn React and create front end project
5.then move on to backend

*/

var P1 = new Promise((res, rej)=>{
    return res("Learn Html")
})

var P2 = P1.then(function(data){
    console.log(data);

    return new Promise((res,rej)=>{
        return res("Learn CSS")
    })
})

P2.then(function(data){
    console.log(data);

    return new Promise((res ,rej)=> {
        return res()
    })
})

