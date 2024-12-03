class User{
    constructor(username){
        this.username = username
    }



    logMe(){
        console.log(`Username is ${this.username}`);
        
    }f
}


class teacher extends User{
constructor(password , email){
    super(username)
    this.mypassword = password
    this.myemail = email

}

             printChai(){
                console.log(` Username is ${this.username}`);
                
             }


} 

const masalaChia = new teacher('preet' , 'abc@gmail.com' , '1234')

masalaChia.printChai()