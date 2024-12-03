const accountID = 32345 // const :- can't be change 
let accounteEmail = "preet@google.com" 
var accountPassword = "1234"
accountCity = "jaipur" // you can storer the memory with any keyword of variable
let accountState ; // undefine variable

/* small Note :- javascript is dynamically-typed language 
some specialities of dynamically-typed language
1. Variables can be assigned values of different data types. like what we did in this code we change value of same variable it just changed but this not allowed in statically-typed value like java!

*/

// testing 

// accountID = 3  this not allowed because of 'const' keyword

// console.log(accountID); this is use to print only one varibale at a time

// just i'm changing to check this differ value is replace by old value 

accounteEmail = "guru@x.com"
accountPassword = "prext@1313"
accountCity = "raipur"

console.table([accountPassword,accounteEmail,accountCity , accountState]) // this use to print more than one variable at a smae time in tabular format


/* Learning :-   do not use 'var' because of issue in functional scope only use let it doesn't have the scope issue */ 