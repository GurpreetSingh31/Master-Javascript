
// doing the above same code in this paradigm

new Promise(function(resolve , reject){
    setTimeout(() => {
        console.log("Async code is operated ");
        resolve()
    }, 1000);
}).then(function(){
    console.log("Promise is consumed");
    
}) 

