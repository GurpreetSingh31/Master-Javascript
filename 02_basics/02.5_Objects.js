 const amazonUser = {
         name : "preet",
         id : "abc@gmai.com",
         isLoggedIn : false,

         
}



console.log(amazonUser);


// If i want to know the keys and very importatnt thing it will return this in array
console.log(Object.keys(amazonUser));
// it will give all the value in amazonUser object in an array 
console.log(Object.values(amazonUser)); 
// if we want to get the key and value in a specific array so we use object.entries()
console.log(Object.entries(amazonUser)); // array ke andar aary

// if we want to find the any key is present or not 
console.log(amazonUser.hasOwnProperty('isLoggedIn')); // true
console.log(amazonUser.hasOwnProperty('isLoggedOut')); // false


