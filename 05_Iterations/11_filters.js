// for each loop parameter jo hai won koi value return nhi krta 


/* 
coding = ["js","swift", "node" , "nothing"]


 const values = coding.forEach((item) => {
    console.log(item);
    return item
});

console.log(values); // undefined is coming that means it nothing return */

/* ****************************************** Filters ****************************************** */


// Filter is also a callback function (iska matlab ki function ka naam define nhi krna hai) 
//  and it return the value :- Very Important Point

const myCoding = [ 1,2,3,4,5,6,7,8,9,10]
/* Point to Remember :- isko likne ke do tarike hai  */
// tarika -1  isme hum curly braces use kr rhe hai to return keyword use krna padega nhi to error show hoga
const values = myCoding.filter( (num) => {
    return num>4

} )

console.log(values); // fliter jo hai "retuen krta " hai


// tarika -2 isme hum curly braces use nhi krege to hume "return" keyword ki jarurat nhi hai

 const rtn = myCoding.filter( (nums) => nums > 7 )

 console.log(rtn);
 

/* ****************** Doing the Above conditional thing with 'for each' **************************** */
console.log(" ");

console.log("Doing the Above conditional thing with 'for each' ");



const myArr = [1,2,3,4,5,6,7,8,9,10]

const newArr = [] 

myArr.forEach( (num) => {
    if(num>4){
        newArr.push(num)
    }
} )

// Creating new array to store the new conditnal items

console.log(newArr);





