// case-1

let score1 = "33"; // this is  string datatype not number because of' "" ' make string

// making score variable is valueInNumber
let valueInNumber1 = score1; // call by value 

// checking which type of datatype is it
console.log(typeof score1);

// Now i convert this string to number

valueInNumber1 = Number(score1); // the score variable is converted into number

// now
console.log(typeof valueInNumber1);



// Case -2

let score2 = "323abc"; // now is not pure strnig it contain both number as well string

let valueInNumber2 = score2; // intialising the value of score2 to valueInNumber2

console.log(typeof score2); // checking the datatype "result:- it shows string"

// Now conveting this strnig to number by "Number()"

valueInNumber2 = Number(score2);

console.log(typeof valueInNumber2); // now this showing this is number but "33abc" is not pure number so we now check to print the valueInNumber2

console.log(valueInNumber2); // this showing NaN(not a number)

// Case -3

let score3 = null; // apply for undefined

let valueInNumber3 = score3;

console.log(valueInNumber3);

valueInNumber3 = Number(score3);

console.log(typeof valueInNumber3); // this showing number so null is converted to number
console.log(valueInNumber3); // this showing '0' because null is converted into '0'

// Case -4

let score4 = true; // apply for undefined  and false

let valueInNumber4 = score4;

console.log(valueInNumber4);

valueInNumber4 = Number(score4);

console.log(typeof valueInNumber4); // this showing number so null is converted to number
console.log(valueInNumber4); // this showing '1' because null is converted into '1'

// "33" => 33
// "33abc" ≠> NaN

// Case - 5  number to string

let someNum = 13;
let stringNum = String(someNum);

console.log(someNum);
console.log("");
console.log(typeof stringNum);     
