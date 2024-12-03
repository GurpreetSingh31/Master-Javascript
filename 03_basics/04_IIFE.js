// Immediately Invoked Function Expression (IIFE) 

// Reason :-  1.for better database connection 2. Global scope se pollution  na ho is liye hum IIFE use krte hai

// Syntax for IIFE

// This the example of Named IIFE
(function chai() { 
console.log("Database Connected");
}) () ;
 // please note that ';'  is required because to give the information that you have to stop iife right here if you did'nt do it then when you will create the second iife that will show the error
// Making a second arrow function

((name) => {
         console.log(`DatabaseTwo Connected ${name}`);
}) ('fateh')
  
