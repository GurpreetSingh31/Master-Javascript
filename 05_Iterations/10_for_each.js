const coding = ["js","java" , "python", "cpp" , "swift"]

// Go to brwoser open console run this and you will see in the prototype section 'for each'


// point to be noted that to access for each arrayname.forEach() now forEach is a call back function means you 
//  have to pass a function and with out name of it 
coding.forEach( function (item) {
    console.log(item);
    
} )
console.log(" ");

// Using same thing   with arrow function

coding.forEach( (item) => {
  console.log(item);
  
})


// Another way to  doing same thing 
console.log("Another Way");
console.log(" ");

function printme(item) {
    console.log(item); 
}

coding.forEach( printme )





