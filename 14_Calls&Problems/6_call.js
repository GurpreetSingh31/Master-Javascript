function setUserName (username){
    this.myuserName = username

    

}

function createUser(username , email,password,){
       setUserName.call(this , username) //.call to hold the refernce 
    
    this.myemail = email 
    this.mypassword = password



}

const chai = new  createUser("chai" , "preet@x.com" , "124") 

console.log(chai);
