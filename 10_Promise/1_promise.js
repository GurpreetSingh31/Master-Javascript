/* A Promise  is in one of these states:
 
1.  pending:  initial state, neither fulfilled nor rejected.
2.  fulfilled: meaning that the operation was completed successfully.
3.  rejected: meaning that the operation f */

// Promise is an object representing the eventual completion or failure of an asynchronous operation

// Creation of Promise 
const promisONe = new Promise(function (resolve , reject ){
    // Do an async task , Database Calls 
    setTimeout(function (){
        console.log("Asynch task is complete ");
        resolve() // To connect the both code base  'resolve()' is have to used
    } , 1000)
})  


// Consumption of promise //  .then() have direct connection with resolve ke saath
promisONe.then(function (){
    console.log("Promise is Consumed ");
    
})  
