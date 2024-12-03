/* Questoin :- Take a symbol and  use the symbol in object and access it  */

// Step - 1 creating a symbol

const mySym = Symbol("key1") 

const User = {
         "city" : "Raipur", // Note : key in  string so cant use (object.keys) to access it 
         

         // Step -2 Adding a symbol in keys

         [mySym] : "My key 1", 
}

// Step - 3 Accessing the symbol

console.log( User[mySym]);

console.log(User);

