let box=document.getElementById("box3")
box.addEventListener("click",function(){
    if(box.classList.contains("box3-old")){
        box.classList.add("box3-new");
        box.classList.remove("box3-old");
    }
    else{
        box.classList.remove("box3-new");
        box.classList.add("box3-old");
    }
})
let box4=document.getElementById("box4");
let box4_1=document.getElementById("box4_1")
box4.addEventListener("click",function(){
    if(box4_1.classList.contains("box-4-off")){
        box4_1.classList.add("box-4-on");
        box4_1.classList.remove("box-4-off");
        box4.classList.add("box-4-green");
        box4.classList.remove("box-4-gray");
    }
    else{
        box4_1.classList.remove("box-4-on");
        box4_1.classList.add("box-4-off");
        box4.classList.remove("box-4-green");
        box4.classList.add("box-4-gray");
    }
})