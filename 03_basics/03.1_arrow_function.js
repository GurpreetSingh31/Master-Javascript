// to the current context 

const User = {
         username : "preet" ,
         price : 234, 

         greetings: function(){
                  console.log(`${this.username} , Hello user `);
         }  

         
}
console.log(this); // to know the global context there is nothing man 

// go to browser   and run console.log(this) then window is the global objects


/* *********************************** Array_function ***************************************** */

// way -1

function chia() {

         console.log(this);


         username : "preet"
         console.log(this.username); // result is undefined
          // so 'this' will not work here so get one learning that is 'this' is not work in function and work in object we can reffer it 
}

// NOw this in the function whenever the 'this' in functino so it give alot of information

chia()

//// way - 2

const chai = function(){
         username: "preet"
         console.log(this.username); //result is undefined

}
chai() 

/* ***************** Making Arrow function **************************************************** */

const chaii = () => {
         username:"preet"
         console.log(this.username); // result is still undefined
}

chaii()

/* *********************** Pure charcha on Arrow functions  ********************************   */
// way -1 "explicit reutrn"


const arr = (num1 , num2) => {
         return num1 + num2
}

console.log(arr(3,5));


// Way -2 "implisit return"

const arr1 = (x ,y ) => (x+y) 

/*  if Curly braces mai wrap kara to return keyword likna padega and agar curly braces mai wrap ni kiya to return nhi likhna padega */

// passing an object in to arrow function

const arr2 = () => ({user:"preet"})





