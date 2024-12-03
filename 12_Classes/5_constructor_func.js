// Creating so many user with input

// In Constructor function 'new' is used to create a new instance 


function User(username , password , isLoggedIn){
    this.myusername = username,
    this.mypassword = password,
    this.isLoggedIn = isLoggedIn

    return this

}

const UserOne = new User("preet" , "tr@13" , true) // if i don't use new keyword then a usertwo overwites 
const UserTwo =  new User("fateh" , "abc@14" , false) // remove new and see the magic from both side 
 
console.log(UserOne);
console.log(UserTwo)


/* More Details of 'new'

Step 1. when we use 'new' an empty object is created that is called instance 
Step 2. Constructor function is call through 'new' keyword 
Step 3. With the help of 'this' keyword all the argument are injected 
Step 4. In this step you get all the arguments  
*/

