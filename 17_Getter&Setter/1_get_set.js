// This is modern practicess possible because of class 


class User {
  constructor(email, password) {
    (this.email = email), (this.password = password);
  }

  // getter is use to don't allow certain things to show or done like don't showing the password directly/encrypted password
  // in get you get the value form anywhere 
  get password() {
    //if you do'nt take the different val for value like
    return `${this.Mypassword}%^&`
  }
// in set you set the value 
  set password(value) {
    this.Mypassword = value.toUpperCase();
  }

  // Making getter and setter for emali 

  get email(){
      return `${this.myEmail }%^&*`
   }
   set email(value){
        this.myEmail = value.toUpperCase()
   }


}

const val2 = new User("preet@x.com", "abc12");
console.log(val2.password);
console.log(val2.email);


