// In this code i will learn how to merge the object 

const obj1 = {
         1 : "a",
         2 : "c",
         3 : "b",
}

const obj2 = {
         x : "i",
         y : "ii",
         z : "iii"
}


// Merging the two objects 
// way - 1 with object.assign
const newObj =   Object.assign({} , obj1 , obj2)
console.log(newObj);

// way -2 doing with spreading
const merObj = {...obj1, ...obj2}
console.log(merObj);


// when database come form user  , genrally database come in array of object 

const user = [
         {
                  email:"abc@gmai.com",
                  id:"123"
         },
         {
                  email:"mum@x.com",
                  id:"999"
         },
         {
                  email:"www.com",
                  id:"iii"
         }
]
// Accessing the 1st element of array and key of object 

console.log( user[1].email);
console.log(user[2].id);



