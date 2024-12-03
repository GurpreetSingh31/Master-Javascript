// if

if(true)/* true hoga to under ka code execute hoga */{

}


/* ****************************** Comparision Operator *********************************** */

/* 
1. < less than 
2. '>' greater than
3. '>=' greater than and equal to 
4. '=' Assignment operator Assigining value
5. '!=' not equal 
6. '===' it check that two values are equal or not and also check the datatype
7.'==' it check the values but don't check the datatype
8. '&&' aur both the condition should be passed
9. '||' ya phir yeh ya phir yeh 
*/

// example of strict check '===

if ( 2 === "2"){
    console.log("Executed");
    
}else {
console.log("not executed");  //      
}

// example of strict check '=='

if ( 2 == "2"){
    console.log("Executed");
   
}

// another example

const temp =  42 

if (temp < 50){
    console.log("less than 50 ");
}else{
    console.log("greater than 50");
}

// Short hand Notation of 'if' and not a good practices don't use 

const balance = 1000

if (balance > 500) console.log("pass");

// Nested 'if' or multiple condition

if (balance < 500) {
    console.log("yes ");
}else if (balance < 750) {
    console.log("balance is less than 750");
}else if (balance < 1000) {
    console.log("balance is less than 1000 ");

}else {
    console.log("your balance is less than 1200");

}


// Real time Application

const userIsLoggedIn = true
const debitcard = true
const upi = true

const loggedInfromGoogel = false
const loggedInfromEmail = true

if (userIsLoggedIn && debitcard && upi) { //   && every condition should be true 
 console.log("Your purchased the stuff");   
}

if (loggedInfromEmail || loggedInfromGoogel) { // || one condition should be ture
console.log("you're logged in ");
    
}

/* ********************* Nullish Coalescing Operator (??) : null undefined ************* */
/*  let result = firstChoice ?? secondChoice;  */

let val1 ;
// val1 = 5 ?? 10  
val1 = null ?? 10  // if come it overpass and pass the value it will use in database
// val1 = undefined ?? 15; value jo aayi hai 

val1 = null ?? 57 ?? 10 ?? 6
console.log(val1);

/* *************** Terniary  Operator *************************************** */

// format is :- condition ? true : false

// lets do example
// ex-1
const iceCreamPrize = 100 

iceCreamPrize >= 45 ? console.log("iceCreamPrize avail") : console.log("iceCreamUnavialable"); 

// ex-2 

const age = 55
age < 60 ? console.log("Less than 55") : console.log("Greater than 55");



