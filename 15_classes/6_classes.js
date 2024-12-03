// I'm learning this after ES6


class User{
constructor(username ,email , password ){
    this.Myusername = username
    this.Myemail = email
    this.Mypassword= password
}

encryptPassword(){
    return`${this.Mypassword}abc `
}

chageUsername(){
    return `${this.Myusername.toUpperCase()}`
}


}

const chai = new User("chai" , "chai@gmail.com" , "123")

console.log(chai);
console.log(" ");
console.log("Encrypted Password ");
console.log(chai.encryptPassword());

console.log(chai.chageUsername());

/* ************************** Doing same thing without 'class' ************************ */

function User1(username ,email , password){
    this.Myusername = username
    this.Myemail = email
    this.Mypassword= password

}

User1.prototype.encryptPassword = function(){
    return `${this.Myemail}abc`
}

User1.prototype.chageUsername = function(){
    return `${this.Myusername.toUpperCase()}`
}

const pr = new User("Ravinder singh" , "pr.x.dom" , "123")

console.log(pr);
console.log(pr.chageUsername());
console.log(pr.encryptPassword());
