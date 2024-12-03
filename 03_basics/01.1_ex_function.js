/* adding two number */


 function addTwonumber(number1 , number2 ){
         console.log(number1 + number2);
 }
 addTwonumber(4 , -6)
 addTwonumber(4 , "2")

 // what  genrally beginer do mistake  is they store the function in a variable and when we run this show 'undefined'


 const result = addTwonumber(4 , -6)

 console.log("Result :", result); 
 // so the result is undefined 

 // TO solve this it do this 