// In this code we will learn about key - pair value and prototype

const Name  = new String("Gurpreet")
// to acces the any key it start from 0 to n ; n depends on the size of stirng
console.log(Name[0]);

// to acces  prototype 
console.log(Name.__proto__); //  it have double console _ _ with no space  

// Note:- all the protype are function 

console.log(Name.length); // to print the lenght 

console.log(Name.toUpperCase()); // but original value will not be change due to stack memory

console.log(Name.charAt(4)); // to  check the at indes of 4 what words is there

console.log(Name.indexOf("r")); // that tell me 'r' is at which index value

console.log(Name.substring(0 , 4)); // that print string form 0 index to n-1 (4-1)that means 3 one thing  to note in substing is you can't give negative values 

console.log(Name.slice( -8, 4)); // the main things that you can give the negative value

// Trim prototype to remove the space 

const city = "     Raipur    "
console.log(city);
console.log(city.trim()); // it remove the unwanted spaces from starting and ending 


// Replace prototype 
// genrally in browser automatically remove the space and add %20 like this and i want to replace %20 into space 

const url = "https://Gurpreet.com/Harjot%20Singh"

console.log(url.replace('%20' , '_'));

// include prototype 

console.log(url.includes('preet')); // obviously answer in boolean
console.log(url.includes('mummy')); // obviously answer in boolean


// split method :- typically in this method string is converted in to array

const str = "preet-singh-dot-com"

const words = str.split('-');  // split the string on the basis of '-'(spliter) 

console.log(words);  
console.log(words[0]);  // [3] is limit


// Please go to console and check all the prototype for stirng


