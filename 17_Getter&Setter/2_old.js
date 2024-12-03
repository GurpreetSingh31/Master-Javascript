// Doing the same thing with old technique when class is not there 
// this not working


function User(email , password ){
    this.email = email,
    this.password = password


    Object.defineProperty(this, 'email' , {
        get:function(){
        return this._email
        },
        set:function(value){
            this._email = value
        }
    })
}



const chai = new User("preet@google.com" , "prxt24")
console.log(chai.email);
