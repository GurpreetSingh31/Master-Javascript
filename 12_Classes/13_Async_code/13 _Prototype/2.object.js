function  createUser(username , score){
    this.myusernName = username,
    this.myScore = score
}

// applying the property of object(prototype inheritance behaviour) into function

const chai = new createUser("chai" , 12)    
const tea = new createUser("tea",100)

createUser.prototype.increment = function(){
        this.myScore++ // 'this' means jiska bhi 
}

createUser.prototype.printme = function(){
    console.log(`score is ${this.myScore}`);
    
}



chai.printme()