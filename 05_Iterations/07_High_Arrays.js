// for of  loop


// we can inserting so many  object in an array
// [{},{},{},{},]


const arr = [ 1, 2, 3, 4,5]

/* For Of loop ; and prefer handwritten notes for better understanding */ 

for (const num of arr) {
    console.log(num); // without any iteration or other variable
    
}
 
// 
const greetings = "Hello  World!"
for (const greet of greetings) {
    console.log( `Each Character is ${greet}`);
    
}
/* ************************************ Inserting many objects in Array *************************** */


const myCoding = [
     {
    Username : "preet",
    id: 223
},
{
    Username : "geet",
    id: 223
},
{
    Username : "jeet",
    id: 223
}

 ]

 myCoding.forEach( (item) => {
    console.log(item.Username);
    // and for accessing id so  
    console.log(item.id) 
 })


