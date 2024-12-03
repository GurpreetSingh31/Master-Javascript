  // Learning about constructor method that is Singleton Object

const User = new Object()

User.id = "123abc"
User.name = "Preet"
User.isLoogedIn = false

console.log(User);


// How to create nested object means object ke ander object 

const firstUser = {
         fullname:{
                  username:{
                           firstname: "preet",
                           lastname : "singh"
                  }
         }
}

// To access this 

console.log(firstUser.fullname.username);



  
  