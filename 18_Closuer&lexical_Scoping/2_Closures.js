/* 
Closures :- A closure is the combination of a function bundled together (enclosed)
with references to its surrounding state (the lexical environment). In
other words, a closure gives you access to an outer function's scope from
an inner function. In JavaScript, closures a reated every time a
function is created, at function creation time.
*/

function makeFunc() {
     const name = "ChaiAurTea";
        function displayName() {
            console.log(name);
     }
     return displayName;
}
// to kya functino ka lexical scope return hota hai
const myFunc = makeFunc();
myFunc();

