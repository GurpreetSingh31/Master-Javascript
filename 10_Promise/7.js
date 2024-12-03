const pro_mise = new Promise(function(resolve , reject){
    
    if(true){
         resolve('ghar aao meri jaan ')
    }
    
    reject('Something is porblem')

})


pro_mise.then(function(data){
    console.log(data);
    
    new Promise(function(resolve , reject ){
         resolve('mummy/papa ko satshri-kal/pranaam/dual-salam ')
    }).then(function(data){
            console.log(data);
             
            new Promise(function(resolve , reject){
                resolve('Muh dhooo aur pani piyo ')
            }).then(function(data){
                console.log(data);
                
            })


    })




}).catch(function(data){
console.log(data);

})