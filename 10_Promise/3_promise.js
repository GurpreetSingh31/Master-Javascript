
// More learning about resolve() , to pass the value form myPromise to myPromise.then(function(){})

const myPromise = new Promise(function(resolve, reject) {
setTimeout(() => {
resolve({username:"chai" , email: "preet@x.com"}) //Passingh the datat in object/Array/function
}, 1000);
})

myPromise.then(function(user){
console.log(user);

})
