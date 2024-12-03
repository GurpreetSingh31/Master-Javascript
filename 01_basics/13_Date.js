// NOW in javascript is a pain point to know the date 

let myDate = new Date() 

console.log(myDate); // to directly print this , it might be very difficult to read and this present the current date and time

// so we use the another method is 

console.log(typeof myDate); // Date is object

console.log(myDate.toString());

console.log(myDate.toDateString());

console.log(myDate.toLocaleString());

console.log(myDate.toLocaleDateString());

console.log(myDate.getMonth() + 1); // month start from 0 means jan so we have add one for no confusion

console.log(myDate.getDate());

console.log(myDate.getDay());

console.log(" ");

/* ****************************** My custom Date ******************************************* */

let customDate = new Date(2023, 1 , 3 , 5 , 30 ) // jan month start from '0'

console.log(customDate);//  it is not redable so  we use a method or prototypes
console.log(customDate.toLocaleString());// 


// another format for year-month-date and date-month-year

let customDate1 = new Date("2023-01-21")
console.log(customDate1.toLocaleString());