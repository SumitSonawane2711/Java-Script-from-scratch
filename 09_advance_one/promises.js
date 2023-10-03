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



const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:'roshan', password:'123'})
        }
        else{
            reject({'ERROR: JS went wrong'})
        }
    },1000)
});

async function consumePromiseFive({
    const response = await promises
}) 