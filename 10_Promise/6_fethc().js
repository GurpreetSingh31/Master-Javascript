const fet_ch = fetch('https://api.github.com/users/gurpreetsingh31')

fet_ch.then(function(response){
        return response.json()  
}).then(function(data){
    console.log(data);
    console.log(data.followers);
    
}).catch(function(error){
    console.log(`There is ${error}`);
    
})
