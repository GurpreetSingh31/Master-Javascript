/* **************************************** Operations *******************************************/

// Example - 1 
let value = 1

let negValue = -value;

console.log(negValue);

// Example -2

console.log(2+2); // Number get adds
console.log(2*2); // Number get multipicaiton
console.log(2/2); // Number get division
console.log(2-2); // Number get subtarction
console.log(3%2); // Number get remainder
console.log(2**3); // 2 to the power 3 


// Now by  Investigating learning

console.log(1 + "2"); // that means one is adding with string : Result ~ 12
console.log("1 " + 2); // String is adding with number : Result ~ 12

console.log("1" + 1 + 2 ); // result is 122 not 13 because if string is first so it's treat the  whole paradigm as a string 

console.log( 3 + 1 + "2" );  // result is  42 because the addition is executed because it is before string but if it is after "2"/string it is consider to be stirng

console.log("");// just for space


//  Precident operator in postfix or surfix
let num1 = 100
let counter = num1
counter++;
console.log(counter);

// Precident Operator in prefix 

let num2 = 100
let counter0 = num2
++counter;
console.log(counter1);


/* Assignment You  Have to Study and reffer some documentation on mdn about operator  */



/* *************************** More about prefix and post fix ************************************/

/*  
         ***************Postfix***************
 let x = 3 ;
 y = x++;
 so in this case the value will return and after it increment 
 like y = 3 and x = 4

         *****************Prefix*****************

 let x = 3 ;
 y = ++x;
 so in this case the value first will increment and return the incremented value
like y = 4 and x = 4 

                                                                        */