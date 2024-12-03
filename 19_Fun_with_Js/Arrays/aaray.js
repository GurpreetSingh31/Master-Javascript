const myArr = []
// %DebugPrint(myArr)

 

// tpes of Arrays (continious ,  Hopley )


// optimisation in javascript 
// 1. SMI(small integer )
//2. Packed elelments 
//3. Double(float , string , function)

const arrTwo = [1,2,3,4,5,6]
// Packed_SMI_ELEMENTS

arrTwo.push(4.2)
// Packed_Double_Elements

arrTwo.push("4") // adding in String
// Packed_ELements 


arrTwo[10] = 11 ; // only 6 elemtnst the but 10 index position pr 11 so us bich mai gap/hole hai
// HOLEY_ELEMENTS 



console.log(arrTwo);
console.log(arrTwo[9]);
console.log(arrTwo.length);


// please aap ke aaray mai holes nhi hona chaiyeh 
// bound check 
// hasOwnProperty(arrTwo ,9)
// hasOwnProperty(arrTwo.Prototype , 10 )
// hasOwnProperty(Object.Prototype , 10 )



// holes are very expensive in Javascript 

// Optimisation order
//SMI > Double > Packed 
