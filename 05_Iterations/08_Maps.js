

/* ******************************************************** Maps ************************************** */

// Map is a object-datatype
// Map has known for unique values means you have to set unique key and

const map = new Map()

map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")

console.log(map);

for (const key of map) /* This print the key and  value both  in "array" so if you don't want it in arrays  */{
    console.log(key);
    
}


// So follow up this syntax the to destructure the array in key and values

for (const [key,value] of map) {
    console.log(key ,':-' , value);

}


       /* **************************** Learnings ***************************************************** */

       /*  Map is not iterable in "for in " loops */

       for (const key in map) {
   console.log(key);
   
} // this for in loop can't give any this because the Map are not iterable







