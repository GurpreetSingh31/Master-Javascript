// Lexical Scoping :- the outer variable is available for inner function but vice-versa is not possible 
   
function init() {
    let  name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }//running this function
    displayName();
  }
  init();
  