// Two Keyword :- break and continue

// To understand continue let's understand

console.log(" continue keyword");
for(i = 0 ; i <= 6; i ++){
    
    if(i == 5){
        console.log(`Deducted ${i}`);
        continue; // continue jo hai uske just baad wale code execute nhi krta uske baad se woh continue kr ta hai
    }
    
    for(let j = i ; j <= i ; j++){
        console.log(`second loop ${j}`);
    } // in result second loop 5 is elemenated before that continue keyword is working 
}

console.log(" break; keyword");
// Break keyword

for(i = 0 ; i <= 6; i ++){
    
    if(i == 5){
        console.log(`Deducted ${i}`);
        break;  // it stop the code  immediately!
    }
    
    for(let j = i ; j <= i ; j++){
        console.log(`second loop ${j}`);
    } 
}

