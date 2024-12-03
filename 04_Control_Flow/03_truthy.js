// truthy value :- that means we are assuming the value is ture

const userEmail = "Preet@gmail.com" 

if (userEmail)/* in this if statement we are not creating any condition we directly passing the 
value in condition section */{
console.log("Got the Email ");
}else{
    console.log("Don't have the user email");
}

    /* 
        * List of Falsy Value that is consider to be false
    1. false 
    2. 0 and negative 0 
    3. BigInt '0n'
    4. empty string 
    5. null
    6. undefined
    7. NaN (Not a Number)


    * List f Truthy Value that is consider to be 
    1. "0" :- this is a truthy value
    2. 'false' :- this is truthy value
    3. " " :- this is truthy value
    4. [] :- so empty array is also is truthy value
    5. {} :- so empty object is also is truthy value
    6. function() :- so empty function is a  truthy value


*/

/* ********************** Accessing Array in if statement ************************ */

const myArr = [ 2 , 3 ] // array lengthis 2 

if (myArr.length === 2 ) {
    console.log("Yes the array is accessed ");
}

/* ********************** Accessing Empty object in if statement ************************ */

const emptyObject = {
    // a:1 ,
    // b:2 ,
    // c:3,
}

if(Object.keys(emptyObject).length === 0){
    console.log("yes the object is empty ");
}else{
    console.log("the code is not executed ");
}

/*    ********************* Genral Knowledge  **************************
        
             when i go to browser into console so 

             1. false == 0 ; is ture
             2. false == '' ; empty string is true
             3. 0 = '' ; is also true
 */




