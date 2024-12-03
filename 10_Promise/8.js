/* Doing the 7.js code concept with some slighty differnt way  */

const pro_mise = new Promise(function(resolve , reject ){
        if(true){
        resolve('ghar aao meri jaan')
        }else{
            reject('There is problem')
        }
})

const pro_mise_2 = pro_mise.then(function(data){
     console.log(data);

       return new Promise(function(resolve , reject){
                resolve('mummy/papa ko satshri-kal/pranaam/dual-salam ')
       })
     
})


const pro_mise_3 = pro_mise_2.then(function(data){
    console.log(data);
    
     return new Promise(function(resolve , reject){
        resolve('Muh dhooo aur pani piyo')
     })

})

const pro_mise_4 = pro_mise_3.then(function(data){
    console.log(data);
    
    return new Promise(function(resolve , reject){
            resolve('Phir Hustle shuru karo / ghisna / mehnat karna shuru ')
    })


})

pro_mise_4.then(function(data){
    console.log(data);
    
})