// Method to write an Array

// M-1

const myArr = [1, 2, true , "preet"] // index  start form 0 
console.log(myArr[3]); // to print the element at 3rd index position

/* Notes:- go to browser console and do above same thing then you get two prototype and one is nested in one to other  */

// M-2

const city = new Array("raipur" ,  "bhilai" , )
console.log(city);

// Now Differnt Methods in Arrays

const  numbers = [1 ,2 ,3 , 4 ,5 ]
numbers.push(6); // It just add this element to the arrays
numbers.push(7); // It just add this element to the arrays
numbers.push(8); // It just add this element to the arrays

numbers.pop(); // It just delete the last element of Arrays

numbers.unshift(9) // It add element the at 0th index and all the previous array element are unshifted this is consider to be very bad practices so use carefully where is needed 

// numbers.shift() ; It just delete the elements form start like pop but it do same thing from end

console.log(numbers);

console.log(numbers.includes(3)); // it check the  a certain no is there or not  this give answer in boolean 

console.log(numbers.indexOf(4)); // it give the value of  ask index'ed
// numbers.indexOf(31) ; if you give the a index that not  exist it will give '-1'






