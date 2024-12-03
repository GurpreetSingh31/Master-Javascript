const myNum = [ 1,2,3,4,5,6,7,8,9,10]

// now i want to add 10 to each element in array  
// map is a function give/return the result/value
// we will use 'map'

const varl1 = myNum.map( (nums) => {return nums + 10}  ) // this give value in array format

console.log(varl1);

// doing the same things from for each 

myNum.forEach((num) => {
    console.log(num+10);
    
//notes :- this will just print value and not in array format 
})

/* *************************************** Chaining ******************************************* */

//  Chaining means using more than one method() in a single line of code / in array
console.log("before appying chaining ");

const money = [ 1,2,3,4,5,6,7,8,9,10]
console.log(money);
console.log(" ");
console.log("After applying chaining ");

const value = 
                money.map( (num) => num*10)
                .map((num) => num +"p")
                .filter((num) => num>=40+'p' )


console.log(value);

