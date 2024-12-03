/* 
Question: Math.pi ki value 3.14343 hai isse kya change kr skte hai

*/

// firstly checking pi values changing or not

console.log(Math.PI);

Math.PI = 8 ;

console.log(Math.PI); // so it is not changing  let's check the what is the reason


// .getOwnPropertyDescriptors is prop that show hidden file of object
const descriptors = Object.getOwnPropertyDescriptors(Math , "PI")
console.log(descriptors); /*  writable: false,
enumerable: false,
configurable: false , So hardcore yeh property js engine / node hardcore by default set ki app isse change nhi kr sakte */


// How i can apply these  properties  to my objet/function

const chai = {
         name: 'ginger chai',
         price: '245',
         isAvailable: true,

         orderChai: function(){
         console.log("Chia nhi bani");

         }
}

console.log(chai);


const descriptors2 = Object.getOwnPropertyDescriptors(chai , 'name')

console.log(descriptors2); // value: true, writable: true, enumerable: true, configurable: true


Object.defineProperty(chai , 'name' , {
         writable: false,
          enumerable: false,
})

console.log(Object.getOwnPropertyDescriptor(chai , "name"));


// enumerable means it not iterable so  in this case name is not   iterable so it is not iterating
for (let [key,value] of Object.entries(chai)) {
         if(typeof value !== 'function'){
                  console.log(`${key} : ${value}`);
                  
         }
}
