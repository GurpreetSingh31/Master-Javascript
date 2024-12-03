// Comparison of Datatypes but same not differents datatype


console.log(2 > 1 ); // greater than 
console.log(2 >= 1 );// greater than or equal to 
console.log(2 < 1 ); // less than 
console.log(2 <= 1 ); // less than or equal to 
console.log(2 == 1 ); // equal to comparision
console.log(); 

// we are comparing the same data type but 

// Note:-  comparing two different type of datatype is not be prefered and not allowed  
 
 // The below all stuff is not to use in your code practices!  

console.log("2" < 1 ); // Comparing string and number but here is "2" is converted into number so 2 < 1 is false
console.log("2" > 1 ); /* Comparing string and number but here is "2" is converted into number 
2 > 1 is true */

console.log();

console.log(null > 0 ); // null is treating as '0' so 0 > 0  is false
console.log(null == 0 ); // but here is null is not treating as '0' so (object ≠ 0)
console.log(null >= 0 ); // null is treating as '0' so 0 >= 0 is true

//Strick check '===' it not only check value  equal but also check the    datatype also 

console.log("2" === 2 ); // answer is false because of two datatypes and they differ form each other 
  
