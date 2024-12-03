// More about Prototype

let myName = "Preet      ";

console.log(myName.length); 

console.log(myName.trim().length); // but  i'cant do this with all the string

// console.log(myName.truelength); // so i want to create a method that i can use .truelength 
// this solve in 5_q.js


let myHero = ["mymmy", "papa"];

let heroPower = {
  mummy: "forgiveness",
  papa: "sling",

  getMummyPower: function () {
    console.log(`mummy power is ${this.mummy}`);
    
  }, 
} 

// creatnig a custom method 

Object.prototype.preet = function(){
console.log(`Preet is available in all object `);

}
// You are making a obejt to object( giving the authority to top object ) , you can't give authority to bottom 
heroPower.preet() // top to top  
myHero.preet() // top to bottom


// Now Giving the authority to bottom one and that is not allowed to do  

Array.prototype.heyPreet = function(){
    console.log(`Giving the autority power to bottom and this not allwoed `);
}

heroPower.heyPreet() // this will show error because  autority of object is given to bottom(Array)
myHero.heyPreet()



/* *********************** INHERITANCE ************************************************ */

const Teacher = {
     makeVide: true
}
const TeachingSupport = {
    isAvailabe:false
}
const TASupport  = {
    makingAssignment : "Js Assignment"
}

//  all the porperties of Teacher will access by TeachingSupport 
Object.setPrototypeOf(TeachingSupport , Teacher)



