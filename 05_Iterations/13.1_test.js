/* *************************************** Learning ******************************************* */

        /* 
 
            .map() :- useme mai jo bhi operation kar rha hun woh sab mai apply hoga, to iska matlab yeh
            ki mai map() method mai condition nhi laga sakta

            .filter() :- useme mai chizo ko filterOut karoga means mai condition lagaonga 
                                                                                            */



            // .map() ka result
const myNum = [ 1,2,3,4,5,6,7,8,9,10]
console.log("  .map() Method  ");
let money = myNum.map((num) => num>= 5)
console.log(money);


// .filter ka result 
const myNum0 = [ 1,2,3,4,5,6,7,8,9,10]
console.log("  .filter() Method  ");

let money0 = myNum.filter((num) => num>= 5)

console.log(money0);



