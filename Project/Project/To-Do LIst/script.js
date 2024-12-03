let inputbox = document.getElementById('input-box');
let list_container = document.getElementById('list-container');

function addTask(){
    if(inputbox.value === ''){
        alert('Please Write your Task ')
    }else{
        let li = document.createElement('li');
        li.textContent = inputbox.value;
        list_container.appendChild(li);
        let span = document.createElement('span');
        // one thing to know '\u00d7 is code for x
        span.innerHTML= "\u00d7";  

        li.appendChild(span)
        saveData()   
    }
    inputbox.value = ''
}

list_container.addEventListener('click' , function(e){
if(e.target.tagName === 'LI'){
    // do research about what is classList.toggle()
    e.target.classList.toggle('checked')
    saveData()
}else if(e.target.tagName === 'SPAN') {
     e.target.parentElement.remove()
     saveData()
}

},false)

function saveData(){
    localStorage.setItem('data' , list_container.innerHTML);
}
function ShowTask (){
list_container.innerHTML = localStorage.getItem('data')
}

ShowTask()