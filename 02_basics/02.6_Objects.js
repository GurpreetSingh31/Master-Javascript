//  Destructuring of Objects 


 const course = {
         coursename: "Js in HIndi" ,
         price : "999" ,
         courseInstructor : "hitesh",
 }

/* suppose if want to print or call more than one key so i have to write 
console.log(course.coursename)
console.log(course.price)
console.log(course.courseIInstructor)

so this not good practice to wrtie a clean code so what have to do is 
*/ 
// we will do this 

const {coursename} = course 
console.log(coursename); // Js in hindi
// one more example


// suppose if i want that 'price'   should be changed into 'money' so 
const {price : money} = course
console.log(money); // 999


