function makesize(size){
     return function (){
        document.body.style.fontSize = `${size}px`
     }
}
const size10 = makesize(10)
const size20 = makesize(20)
const size30 = makesize(70)


document.getElementById('size-10').onclick = size10
document.getElementById('size-20').onclick = size20
document.getElementById('size-30').onclick = size30