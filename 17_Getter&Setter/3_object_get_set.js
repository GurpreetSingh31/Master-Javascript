// Doing the same thing of code 1_get_set.js file with object method
// avoid  this syntax to do that is bad practices


const User = {
    _email:"preet@google.com",
    _password:"preet12", 




    get email(){
        return this._email.toUpperCase()
    } ,
    set email(value){
this._email = value
    }
}
// you can use factory function(object.create())
const tea = Object.create(User)
console.log(tea.email);
