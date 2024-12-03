/* Learning of this project 
1. ln 25 :- got know about element ke under element
*/


console.log("Welcome to TicTacToe");

let turn = 'X'

// Chagne the turn 
function chnngturn(){

 return turn === 'X' ? 'O':'X'
}


// Check the win 
function checkWIn(){
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [6,4,2]
    ]
    let boxContent =  document.getElementsByClassName('boxContent')
    wins.forEach(e =>{
        if(boxContent[e[0]].innerText=== boxContent[e[1]].innerText &&  boxContent[e[1]].innerText === boxContent[e[2]].in && (boxContent.innerText !== '' ));
        document.querySelector('.info').innerText = boxContent[e[0]].innerText+'Won'
    })
}


// Game Logic
let boxex = document.getElementsByClassName('box')
Array.from(boxex).forEach(element =>{
let boxContent = element.querySelector('.boxContent')
element.addEventListener('click' , ()=>{
if(boxContent.innerHTML === ''){
    boxContent.innerText = turn;
    turn = chnngturn()
    checkWIn()
    document.getElementsByClassName('.info').innerHTML= 'Turn for'+ turn
}
})
})