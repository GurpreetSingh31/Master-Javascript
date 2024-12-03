/* ********************************** Classes ******************************************** */

// Method one 
class myUser{
    constructor(username){
        this.username = username
    }

    encrypt_password(){
        console.log(`${this.username}abc`);
        
    }
}

const tea = new myUser('Papa')
tea.encrypt_password()


// Doing the above same thing with different method 

class User{
    constructor(username){
         this.username = username;
    }
}
User.prototype.encrypt_password = function(){
    console.log(`the username is ${this.username}`);    
}

const chai = new User('GurpreetSingh31')
chai.encrypt_password()






