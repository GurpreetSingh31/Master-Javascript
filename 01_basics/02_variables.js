// const :- const is keyword which is responsible for not to change the intialised given value 
/*  var:- var is a keyword which allow the changes of data but PREFER LET OVER VAR because of Block Scope and Functional Scope {} */
                                                  

const accountId = 9123
let accountEmail = "abc@berg.com"
var accountPassword = "preet"

// if i not use "let " then also i can create a variable or data to store my information
accountCity = "Raipur"

// Initialising a variable without  defing the value
let accountState;


// We use "console.log()" for to print the a Datatype 
console.log( accountId) 
console.log(typeof accountId) //n 

// Changing the differnt values 
accountEmail = "y.com"
accountPassword = "x46"
accountCity = "Amritsar"

// We use "console.table" when we have to print more than one string
 
console.table([accountEmail,accountId,accountPassword,accountCity,accountState])