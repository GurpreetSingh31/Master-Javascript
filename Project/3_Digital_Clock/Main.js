const clock = document.getElementById('clock')
// console.log(clock);




// for contonious refreshing  in Events
setInterval(function(){

    let date = new Date()
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString()
},1000) // 1000 means for 1 second 