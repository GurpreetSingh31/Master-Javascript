// addition of two number with having a "return" keyword

function Twonum(a , b ){
let result = a + b
console.log("Before return");
return result  // "return" ki wajah se yah ending ho jati hai 
console.log("after return"); // 'return' ke niche kuj bhi likho who execute hi nhi hoga
}
// Dhyan se dekho ki abb hamra function result return kar raha hai to abb  hum store kr skte hai aur osee print krwa sakte hai 

const store = Twonum(2,4)

console.log(store); 

/* ********************** Second Method ***************************************************** */

function R( x , y) {
         return x  + y ;
}

const vaR = R(1,3)
console.log(vaR);

/* ********* differnt method to take parameters *********************************************** */

function User(username  /* = "Ram"*/){
         if(!username)/* ! means opposite of anything */{
                  return console.log("Please enter your id");

         }
         return console.log(`${username} just logged in `);
}

console.log(User());



