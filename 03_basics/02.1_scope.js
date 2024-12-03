

function one() {
         const username = "preet"

         function two(){
                  const website = "googel.com"
                  console.log(username); // for two function the username is global scope that ok

         }
         
          // console.log(website);  // for one function the website is block scope so it's dosen't work 
         two()


}
one ()



/* ******************************* Intersting ************************************************** */

// two ways to declare the function


//way - 1
console.log(add(1)); // agar mai isko function ke execution ke phele likta hun to koi problem nhi h
function add(num) {
         return num + 1;
}

// way - 2 

console.log(addTwo(2)); // but agar mai is calling ko oske hi function ke upar rakha hai to problem error aata hai in this condition when functino is declare in way -2 of declaring functionsf
const addTwo = function(num){
         return num + 1;
}



