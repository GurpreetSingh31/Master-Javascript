class User{
    constructor(username){
        this.username = username
    }



    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}


class Teacher extends User{
constructor(username ,password , email){
    super(username)
    this.mypassword = password
    this.myemail = email

        }
           addCourse(){
            console.log(`A new course was added by ${this.username}`);
            
           }

    } 
    
    const chai = new Teacher("Gurpreet" , "preet@x.com" , "user" )

chai.addCourse()
    
const masalaChai = new User("masalaChai")

// masalaChai.addCourse(); this not will access the file 
masalaChai.logMe()

console.log(chai === Teacher); // false
console.log(chai instanceof Teacher); // true 
console.log(chai instanceof User); // true 
