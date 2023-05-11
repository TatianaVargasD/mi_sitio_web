let rightArrow=document.getElementById("rightArrow");
let leftArrow=document.getElementById("leftArrow");
let imgTorreEiffel=document.getElementById("imgTorreEiffel");
let imgNuevaMaravilla=document.getElementById("imgNuevaMaravilla");
let imgPeru=document.getElementById("imgPeru");

rightArrow.addEventListener("click",function(){
  if(imgTorreEiffel.classList.contains("img-torre-eiffel")){
    imgTorreEiffel.classList.remove("img-torre-eiffel");
    imgTorreEiffel.classList.add("img-torre-eiffel-hidden");
    imgNuevaMaravilla.classList.add("img-nueva-maravilla");
    imgNuevaMaravilla.classList.remove("img-nueva-maravilla-hidden");
  }else if(imgNuevaMaravilla.classList.contains("img-nueva-maravilla")){
    imgNuevaMaravilla.classList.remove("img-nueva-maravilla");
    imgNuevaMaravilla.classList.add("img-nueva-maravilla-hidden");
    imgPeru.classList.add("img-peru");
    imgPeru.classList.remove("img-peru-hidden");
  }else if(imgPeru.classList.contains("img-peru")){
    imgPeru.classList.remove("img.peru");
    imgPeru.classList.add("img-peru-hidden");
    imgTorreEiffel.classList.add("img-torre-eiffel");
    imgTorreEiffel.classList.remove("img-torre-eiffel-hidden");
  }
});
leftArrow.addEventListener("click",function(){
    if(imgPeru.classList.contains("img-peru")){
        imgPeru.classList.remove("img-peru");
        imgPeru.classList.add("img-peru-hidden");
        imgNuevaMaravilla.classList.add("img-nueva-maravilla");
        imgNuevaMaravilla.classList.remove("img-nueva-maravilla-hidden");
    }else if(imgNuevaMaravilla.classList.contains("img-nueva-maravilla")){
        imgNuevaMaravilla.classList.remove("img-nueva-maravilla");
        imgNuevaMaravilla.classList.add("img-nueva-maravilla-hidden");
        imgTorreEiffel.classList.add("img-torre-eiffel");
        imgTorreEiffel.classList.remove("img-torre-eiffel-hidden");
    }else if(imgTorreEiffel.classList.contains("img-torre-eiffel")){
        imgTorreEiffel.classList.remove("img-torre-eiffel");
        imgTorreEiffel.classList.add("img-torre-eiffel-hidden");
        imgPeru.classList.add("img-peru");
        imgPeru.classList.remove("img-peru-hidden");
    }
})