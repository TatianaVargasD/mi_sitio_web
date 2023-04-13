/*Se utiliza para darle click a las imagenes y que cambie el color*/
let imgBox=document.getElementById("imgBox");
let imgMini1=document.getElementById("imgMini1");
let imgMini2=document.getElementById("imgMini2");
let imgMini3=document.getElementById("imgMini3");
let imgMini4=document.getElementById("imgMini4");
let BoxMini1=document.getElementById("boxImgMini1");
let BoxMini2=document.getElementById("boxImgMini2");
let BoxMini3=document.getElementById("boxImgMini3");
let BoxMini4=document.getElementById("boxImgMini4");
imgMini1.addEventListener("click",function(){
    imgBox.setAttribute("src","img/image-product-1.jpg");
    BoxMini1.classList.add("box-img-mini")
    BoxMini2.classList.remove("box-img-mini")
    BoxMini3.classList.remove("box-img-mini")
    BoxMini4.classList.remove("box-img-mini")
    BoxMini1.classList.add("img-mini-activo")
    BoxMini2.classList.remove("img-mini-activo")
    BoxMini3.classList.remove("img-mini-activo")
    BoxMini4.classList.remove("img-mini-activo")
})
imgMini2.addEventListener("click",function(){
    imgBox.setAttribute("src","img/image-product-2.jpg");
    BoxMini1.classList.remove("box-img-mini")
    BoxMini2.classList.add("box-img-mini")
    BoxMini3.classList.remove("box-img-mini")
    BoxMini4.classList.remove("box-img-mini") 
    BoxMini1.classList.remove("img-mini-activo")
    BoxMini2.classList.add("img-mini-activo")
    BoxMini3.classList.remove("img-mini-activo")
    BoxMini4.classList.remove("img-mini-activo")
})
imgMini3.addEventListener("click",function(){
    imgBox.setAttribute("src","img/image-product-3.jpg");
    BoxMini1.classList.remove("box-img-mini")
    BoxMini2.classList.remove("box-img-mini")
    BoxMini3.classList.add("box-img-mini")
    BoxMini4.classList.remove("box-img-mini")
    BoxMini1.classList.remove("img-mini-activo")
    BoxMini2.classList.remove("img-mini-activo")
    BoxMini3.classList.add("img-mini-activo")
    BoxMini4.classList.remove("img-mini-activo")
})
imgMini4.addEventListener("click",function(){
    imgBox.setAttribute("src","img/image-product-4 .jpg");
    BoxMini1.classList.remove("box-img-mini")
    BoxMini2.classList.remove("box-img-mini")
    BoxMini3.classList.remove("box-img-mini")
    BoxMini4.classList.add("box-img-mini")
    BoxMini1.classList.remove("img-mini-activo")
    BoxMini2.classList.remove("img-mini-activo")
    BoxMini3.classList.remove("img-mini-activo")
    BoxMini4.classList.add("img-mini-activo")
});
/* Botones de aumentar y disminuir compra */
let btnRestar = document.getElementById("btnRestar");
let btnSumar = document.getElementById("btnSumar");
let cantBox = document.getElementById("cantBox");
let btnCantidad = document.getElementById("btnCantidad");
let numeroElementos= document.getElementById("numeroElementos")
btnSumar.addEventListener("click",function(){
    let numeroElementosTxt=document.getElementById("numeroElementos").innerHTML;
    let numeroElementosInt = parseInt(numeroElementosTxt);
    let totalElementosInt= numeroElementosInt +1;
    let totalElementostxt=totalElementosInt.toString();
    numeroElementos.innerHTML=totalElementostxt;
});



