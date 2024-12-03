 // Making function with help of objects

 const User = {
         name: "preet" ,
         city : "Bhilai", 
         age:20,

 }
 
// prefer hand written note for better understanding
 User.greetings = function(){

         console.log("hellow User "); // just passing ths message 

         // accessing the key like name , city etc  so "this" keyword is use in backtikcs 

console.log(`Hello ${this.name} happy to see you again `);

 }

 // calling the function

 console.log(User.greetings());