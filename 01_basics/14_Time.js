
let date = new Date("1-14-2004") 
console.log(date.toLocaleString());
 
/* ********************************** Time ************************************** */

let myTimeStamp = Date.now() // for to get milisecond value of 1 jan 1970
//Date.now is not a constructor 
console.log(myTimeStamp); // 17222357512661 

// so this was the by default of 1 jan 1970 

// if i want a custom value if i want the milisecond value

console.log(date.getTime()); // we get the value and we can compare the value 

// So all the above value are in milisecond suppose i want the value in second

console.log(Math.floor(Date.now()/1000)); // so this value in seconds 