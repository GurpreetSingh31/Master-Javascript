const bigArray = [ 1 , 2, 3 ,[2 , 4 ] ,[ 7 , 5, [ 2 ,3 ]]]

// NOw if i want ki sab ko ek single array mai chatha hu to fir so 

const newArray = bigArray.flat(Infinity) ; // flat method we need depth so we can give 1 to infnity in this expression we give infnity depth

console.log(newArray);

// one more intresting thig 


console.log(Array.isArray("Preet")); // .is Array give the it is array or not 
console.log(Array.isArray([1 , 2])); // so this is array

console.log(Array.from("Preet" )); // .from i can make preet string to array

// one more intresting stuff , you are passing a object that is not iterable 
console.log(Array.from({name: "preet"})); // very intresting for interview and it give empty array
 

// Another Concept 

// suppose if i have muttiple of variable and i want to convert them in to a array 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); // so .of is return new array form the set of elements 

