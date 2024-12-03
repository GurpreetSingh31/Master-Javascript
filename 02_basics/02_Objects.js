// WAYS to declare the objects

// M-1 is Object Literals and but there is  no singleton  in this method

const  mySym = Symbol("key1")

const User = {
         name:"preet",
         age : 20 ,
         location : "raipur",
         email : "preet@x.com" ,
         [mySym] : "my key 1 is ellpise",
         isLoggedIn: false , 
         lastLoginDays: ["monday" , "tuesday"]


         /* NOTE:- the key in object like name , age ,email etc so it store as a string very important to remember  */

   
         
}

// Ways to Access the objects 

//w-1 this way is not use often not good practice
console.log(User.location);
// w-2 
console.log(User["location"]); // we are writing locatoin key in double colon because in object key is treat as string so , we write string in js in double colon ""
 
/*
 Question:  what is singleton 
Answer: when we make object through "construction method" so singleton is form which that object xyz is created is only object that is known as singleton
*/

// how to chagne the value of objects

User.email = "chatgpt.com"

// Suppose if i want that no one can chagne the object  values
  Object.freeze(User)
 User.email= "microsoft.com" // chagne the email but it not changed
console.log(User.email);

console.log(User); // Printing all the objects 
console.log(User[mySym]); // accessing the symbol





   
/*  ************************ Second Method Intialiise the Object *********************************/

// M-2 THis is Constructer  method  that is singleton  is present

/* 

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log('Hello, ' + this.name);
    };
}

const person1 = new Person('Alice', 30);
person1.greet(); // Output: Hello, Alice


*/


/* *********************************** object.create() ************************************* */

/*

  const proto = {

  greet: function() {
      console.log('Hello, ' + this.name);
  }
};

  const obj = Object.create(proto);
  obj.name = 'Alice';
  obj.greet(); // Output: Hello, Alice


 */