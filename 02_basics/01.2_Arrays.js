// slice and splice 

const myArr = [ 0 , 1 , 2 , 3 , 4, 5 ];

console.log( "A " , myArr);
console.log(" ");


console.log("Application of slice method");
const myN1 = myArr.slice(1,3 ) // the range is not included that means it print 1 and 2 not 3 

console.log("B " , myArr);
console.log(myN1);
/* The major differnece between slice and splice is in slice the original array is same but in the splice method the original array is manipulated a certain  part of Array is deleted or manipulated 

Learing:- slice doesn't manipulate the array and on the other hand splice manipulate the array
*/

console.log("Application of splice method");
const myN2 = myArr.splice(1 , 3 );
console.log("C " , myArr); 

console.log(myN2);


/* 
Hacks :- Genrally interviewer ask the difference and people often tell that in slice range is not included and on the othe hand in splice the range is included so this is the dumbest mistake or myth and we have the discussed the acctual differnece between slice and splice 
*/
