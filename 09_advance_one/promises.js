const promiseOne =new Promise(function(resolve , reject){
    //asynchronous task
    //data base call ,cryptography, network

    setTimeout(function () {
        console.log('asynch task is complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Asynch task")
        resolve()
    }, 1000);
}).then(function(){
    console.log("async 2 is resolve");
})

const promiseThree = new Promise(function(resolve,regect){
    setTimeout(function(){
        resolve({username:'sumit',email:'abc@gamil.com'})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username:'sumit',password:"xyz123"})
        }
        else{
            reject('ERROR: Somethig went wrong')
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>{console.log("the promise is either resoleved or regected");})



const PromiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:'roshan', password:'123'})
        }
        else{
            reject('ERROR: JS went wrong')
        }
    },1000)
});

async function consumePromiseFive(){
   try{
    const response = await PromiseFive
    console.log(response);
   }catch(error){
    console.log(error);
   }
}

consumePromiseFive()


// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     }catch (error){
//         console.log("E: ",error)
//     }
// }

// getAllUsers()

//*******we can directly write above commented code in fetch

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))


/********************************************************************************************************** */
//promise can store one of the three state resole, reject and pending 


var ans = new Promise((res, rej)=>{
    if(true){
        return res()
    }
    else{
        return rej()
    }
})

ans
.then(function(){
    //console.log("resove hua tha");
})

.catch(function(){
    //console.log("reject hua tha");
})


// create promise for user will ask for a number between 0 se 9 if the number is below 5 then resolve else reject

var promise1= new Promise((res, rej)=>{
    var n = Math.floor(Math.random()*10)

    if(n<5){
        return res()
    }
    else{
        return rej()
    }
})

promise1
.then(function(){
    console.log("below");
})
.catch(function(){
    console.log("above");
})