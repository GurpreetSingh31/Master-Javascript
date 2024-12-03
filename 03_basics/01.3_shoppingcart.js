// Creating a cart in whihch 'n' prices of order are stored and getting added 

/* Learning:- 
1. '...' is a rest operator  that add 'n'  item to cart
*/



function calculateCartPrice(...num1){ 
         return num1
}

console.log(calculateCartPrice(344, 443,333, 222, 44));


/* How object is passed in function and how it is controlled  */

// creating a object
const User = {
         username: "Preet" ,
         price : 555 
}
const User_2 = {
         username : "Fateh",
         price :129389
}

// creating a function 
function handelofObject(anyobject)/* anyobject means   */{
         console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`);

}
// passing the object in function
//way-1
handelofObject(User)
//way-2
handelofObject(User_2)
//way-3
handelofObject({username:"mum" , price: 111})



/* *********************** Passing Array in Function ****************************************** */
//creating a array
const myArray = [ 4, 5 ,7, 8 ]

// creating function
function handleOfArray(anyArray){
         console.log(`your Array is  ${anyArray[3]} and ${anyArray[0]} `);
}
// passing array in function
// way-1
handleOfArray(myArray)
//way-2

