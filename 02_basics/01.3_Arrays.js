// Merging of Two Arrays

// Case - 1 

const Biikes = ["Royal" , "Enfield" , "Hero" , "Kawasaki"  ]

const cars = ["Merc" , "BMW" , "Tata" , "Mahindra"]

// In this case the array is get inside into an another array

Biikes.push(cars);
console.log(Biikes);


// Case -2 

const m = [ "A" , "B" , "C"]

const V = [ 1 , 2 , 3 ]

// Now to merge the two array

console.log(m.concat(V)); // This is a single array  

// Case -3 
// Spread Method

const all = [...m , ...V]
console.log(all);