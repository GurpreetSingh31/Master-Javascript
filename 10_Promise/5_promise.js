// New approach to pass the value to promise


const myPromise = new Promise(function(resolve , reject ){
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username:"Hello_Preet" , Password:"Preet@X.com"})
        }else{
            reject("Error: Js  Went wrong") 
        }
    }, 1000);
})

// Syntactical Sugar of Promise === async and await
// in the async await method  it's biggest drawback is it can't solve error like in reject() so to solve this we will use try and catch 

async function consumePromise (){
try {
    const response = await myPromise
console.log(response);
} catch (error) {
console.log(error);

}
}

consumePromise()