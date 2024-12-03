const array1 = [ 1,2,3,4,5 ]
/* 
// format of reduce

array1.reduce((accumulator , Current Value )=> accumulator + Current Value,initial Value)

*/

const myTotal = array1.reduce( function(accumulator , CurrentValue)  {
    console.log(` The Accumulator: ${accumulator} , Current Value: ${CurrentValue}`);
           
    return accumulator+CurrentValue
}, 0) // here '0' means that you have start from 0  

console.log(myTotal); // 0+1+2+3+4+5
 

// by same thing by Arrow Function Method

/* const myTot = array1.reduce ( (acc,curlval) => acc+curlval , 0)
console.log(myTot); */




