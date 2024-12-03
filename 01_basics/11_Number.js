 const score = 500 
 console.log(score);

 const balance = new Number(400)
console.log(balance);


// List of different Methods 

console.log(balance.toString().length);


// toFixed  precision value
console.log(balance.toFixed(2));

// toPrecision 
const otherNum = 134.6278 // for round off
console.log(otherNum.toPrecision(3));

// to localestring

const curreny = 1000000
console.log(curreny.toLocaleString('en-IN')); // for India Stands
console.log(curreny.toLocaleString()); // for US Stands 