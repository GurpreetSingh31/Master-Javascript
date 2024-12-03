// Genrating a random color


const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(let i = 0 ; i < 6 ; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color

}


let interValid; 

const myBody = function(){ 
    document.querySelector('body').style.backgroundColor = randomColor();
}


const Started = function(){
  if(!interValid){
    interValid = setInterval(myBody , 400)
  }
}
const Stoped = function(){
    clearInterval(interValid)
    interValid = null; // just clearing the memory 
   }


document.querySelector('#start').addEventListener('click' , function (){
 Started()

})

document.querySelector('#stop').addEventListener('click' , function (){
    Stoped()
})
