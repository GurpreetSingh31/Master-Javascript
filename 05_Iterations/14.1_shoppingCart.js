const myCourse =[ {
    courseName:"js",
    price : 2999
},
{
    courseName:"swift",
    price : 4999
},
{
    courseName:"DSA",
    price : 5999
}
]

// Now you have add the price 

const myTotal = myCourse.reduce((acc , item)=> acc + item.price ,0)

console.log(myTotal);
