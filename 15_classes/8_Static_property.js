class User {
      constructor(username)   {
         this.username = username
      }



      logMe(){
         console.log(`Username: ${this.username}`);

      }



      static createId(){ // static: it stop the access of method/property 
         return `123`
      }
}



const preet = new User("Preet")
console.log(preet.createId())