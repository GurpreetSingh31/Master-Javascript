// NOTE :-  for of loop in objects is not iteratable


/* const myObj = {
    'game1' : 'NFS'
    'game2' : 'GTA'
    'game3' : 'Spiderman'
}

for (const [key , value] of myObj) {
    console.log(key , value);
    
       
} */


// So As we know that in "for of" loop the  object is not iterable so inplace of it we genrally use 'forin' loop

const myObj = {
    js : "Javascript",
    rb: "ruby " , 
    swift : "Swift by Apple"

}
// Structure of For in loop
/* 
for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
} 
    */

for (const key in myObj) {
// console.log(key);  to print for noly key 
// console.log(myObj[key]);  to print for values  

// combine them 

console.log(`${key} :- ` , myObj[key]);

}

// Note :- the object is iterable in "for in" loop  but not in 'for of' loop



/* ****** Applying the for in loop in Array so it giving the keys(index) values   */

const myArr = [ "a","g","v","vb"]

for (const element in myArr) {
   // console.log(element); it is key ( index ) 
   // console.log(myArr[element]);  now we can access values 
   
   
}



/* Learning :- 'for of ' loop give directly the values where 'for in ' loop give the give the key  */