// Memory is two type of Heap and Stacks refer hand written notes for more info


let myName = "Preet"
//intilsing the value  it intialise copy 
let surName = myName;
// changing the value   the change in copy take place in this case copy is surName 
surName = "Digwa"

console.log(surName);
console.log(myName);

// object
let userOne = {
         email: "preet@google.com" ,
         upi: "user@ybl" ,    
}

let userTwo = userOne

// this representatino of to access the any variable from object 
userTwo.email = "xyz@x.com"


// so we changed the value in userTwo and userONe value is also changed with userTwo new value because of call by reference (that means when anotehr vairable is intialise is directly allocated the reference so the if second value changed so it changed this happen in heap but this not the case in stack  )
console.log(userOne);
console.log(userTwo);