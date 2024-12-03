/* ********************** Classes *********************************************** */

/* ***************************** Lecture 2 ***************************************** */

class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Hey my i'm parent block `);
        
    }


}

User()

class Teacher extends User{
    constructor(username ,email,password){
         super(username)
        this.email = email,
        this.password = password
    }

    printMe(){
        console.log(`Hello ${this.username}`);
        
    }
}

const chia = new Teacher('GurpreetSingh31','abc@gmail.com' , 1234)

chia.logMe()



