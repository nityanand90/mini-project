var butn=document.querySelectorAll("button")[0];
butn.addEventListener("click",function(){
    butn.classList.add("pressed");
    setTimeout(function(){
        butn.classList.remove("pressed");
    },30000);
    open("afterLogIn.html");
});