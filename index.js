var input = document.getElementById("input");
var state = document.getElementById("tag");

input.addEventListener('keydown',function(){
    state.innerHTML = "Typing...";
})
input.addEventListener('keyup',function(){
     timing = setTimeout(function() {
        state.innerHTML = "Online";
    }, 5000);
})