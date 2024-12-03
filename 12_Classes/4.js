const user = {
    username: "preet" ,
    loginCount: 8 ,
    loggedIn : true,

     getUserDetails: function(){
     // console.log("Got user details from database ");
     console.log(`username: ${this.username}`); // 'this' is for current context 
     console.log('Functional Execution Context ');
     console.log(this);

     }

}

console.log(user.getUserDetails())

console.log("global context");
console.log(this);
