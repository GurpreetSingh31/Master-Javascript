const user = {
         username:"preet" ,
         money : 888,

         welcomeMessage :function()/* 'this' is use for current context */{
                  console.log(`${this.username} , Welcome to the website `);
                  console.log(this); // to the current context 
 
         }
}

user.welcomeMessage()

user.username = "papa" // thisis can done with 'this'
user.welcomeMessage()