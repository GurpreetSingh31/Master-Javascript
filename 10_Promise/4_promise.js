// we learned this how chain is done with .then() and .catch()


const myPromise = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = false // change the value to true also see the magic
        if(!error){
            resolve({username:"Hello_Preet" , email:"Guru@x.com"})
        }else{
            reject('Error: Something went wrong')
        }
    }, 1000);
})


myPromise.then((user) => { 
    console.log(user);
    return user.username  // in this chaining user.username will pass to other .then()
}).then(function(username){
console.log(username);

}).catch(function(error){ //  .catch() ka relatino jo hai woh 'reject' se hai 
    console.log(error);
    
}).finally( function() {
    console.log("Finally the promise either resolved or rejected ");
    
}) // .finally() this give the final verdict that async code is executed or not 