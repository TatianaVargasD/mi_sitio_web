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
let Costo=document.getElementById("costo");
btnSumar.addEventListener("click",function(){
    let numeroElementosTxt=document.getElementById("numeroElementos").innerHTML;
    let CostoTxt=document.getElementById("costo").innerHTML;
    if(numeroElementosTxt<10){
        let numeroElementosInt = parseInt(numeroElementosTxt);
        let totalElementosInt= numeroElementosInt +1;
        console.log(totalElementosInt)
        let totalElementostxt=totalElementosInt.toString();
        numeroElementos.innerHTML=totalElementostxt;

        let CostoProductoInt = parseInt(CostoTxt);
        let totalProductosInt = 73000*totalElementosInt
        console.log(CostoProductoInt)
        let CostoProductosTxt=totalProductosInt.toString()
        CostoProductosTxt="$"+ new Intl.NumberFormat().format(CostoProductosTxt);
        Costo.innerHTML= CostoProductosTxt;
        
    }
    
});
btnRestar.addEventListener("click",function () {
    let numeroElementosTxt=document.getElementById("numeroElementos").innerHTML;
    let CostoTxt=document.getElementById("costo").innerHTML;
    if (numeroElementosTxt>0) {
        let numeroElementosInt = parseInt(numeroElementosTxt);
        let totalElementosInt= numeroElementosInt -1;
        let totalElementostxt=totalElementosInt.toString();
        numeroElementos.innerHTML=totalElementostxt;


        let CostoProductoInt = parseInt(CostoTxt);
        let totalProductosInt=  73000*totalElementosInt
        console.log(CostoProductoInt)
        let CostoProductosTxt=totalProductosInt.toString()
        CostoProductosTxt="$"+ new Intl.NumberFormat().format(CostoProductosTxt);
        Costo.innerHTML= CostoProductosTxt
    }
});
let btnCerrar=document.getElementById("cerrar")
let LighBox= document.getElementById("lightBox")

btnCerrar.addEventListener("click",function () {
    LighBox.classList.add("ligh-hidden")
});
imgBox.addEventListener("click",function () {
    LighBox.classList.remove("ligh-hidden")
      
});



let boxImgSecond1=document.getElementById("boxImgSecond1")
let boxImgSecond2=document.getElementById("boxImgSecond2")
let boxImgSecond3=document.getElementById("boxImgSecond3")
let boxImgSecond4=document.getElementById("boxImgSecond4")
let imgMainLigh=document.getElementById("imgMainLigh")
/* let imagenes=["img/image-product-1.jpg","img/image-product-2.jpg","img/image-product-3.jpg","img/image-product-4.jpg"]
let contador=0
let sombras=0
function carrusel(contenedor) {
    contenedor.addEventListener("click", e=>{
        let ConAdelante=contenedor.querySelector('.adelante'),
        ConAtras=contenedor.querySelector('.atras'),
        img=contenedor.querySelector('.img-main-ligh'),
        fls=e.target;

        if (fls==ConAtras) {
            if (contador>0) {
                img.src=imagenes[contador-1]
                contador-1
            }else{
                img.src=imagenes[contador.length-1]
                contador=imagenes.length-1
            } 
            sombras--
            if (sombras==0) {
                boxImgSecond1.classList.add("sombras")
                boxImgSecond2.classList.remove("sombras")
                boxImgSecond3.classList.remove("sombras")
                boxImgSecond4.classList.remove("sombras")
            }else if (sombras==1) {
                boxImgSecond1.classList.remove("sombras")
                boxImgSecond2.classList.add("sombras")
                boxImgSecond3.classList.remove("sombras")
                boxImgSecond4.classList.remove("sombras")
            }else if (sombras==2) {
                boxImgSecond1.classList.remove("sombras")
                boxImgSecond2.classList.remove("sombras")
                boxImgSecond3.classList.add("sombras")
                boxImgSecond4.classList.remove("sombras")
            }else if (sombras==3) {
                boxImgSecond1.classList.remove("sombras")
                boxImgSecond2.classList.remove("sombras")
                boxImgSecond3.classList.remove("sombras")
                boxImgSecond4.classList.add("sombras")
            }else{
                
                boxImgSecond1.classList.remove("sombras")
                boxImgSecond2.classList.remove("sombras")
                boxImgSecond3.classList.remove("sombras")
                boxImgSecond4.classList.add("sombras")
                sombras=3
                
            }
        }
        if (fls==ConAdelante) {
            if (contador<imagenes.length-1) {
                img.src=imagenes[contador+1]
                contador+1
            }else{
                img.src=imagenes[0]
                contador=0
            } 
            sombras++
            if (sombras==0) {
                boxImgSecond1.classList.add("sombras")
                boxImgSecond2.classList.remove("sombras")
                boxImgSecond3.classList.remove("sombras")
                boxImgSecond4.classList.remove("sombras")
            }else if (sombras==1) {
                boxImgSecond1.classList.remove("sombras")
                boxImgSecond2.classList.add("sombras")
                boxImgSecond3.classList.remove("sombras")
                boxImgSecond4.classList.remove("sombras")
            }else if (sombras==2) {
                boxImgSecond1.classList.remove("sombras")
                boxImgSecond2.classList.remove("sombras")
                boxImgSecond3.classList.add("sombras")
                boxImgSecond4.classList.remove("sombras")
            }else if (sombras==3) {
                boxImgSecond1.classList.remove("sombras")
                boxImgSecond2.classList.remove("sombras")
                boxImgSecond3.classList.remove("sombras")
                boxImgSecond4.classList.add("sombras")
            }else{
                boxImgSecond1.classList.add("sombras")
                boxImgSecond2.classList.remove("sombras")
                boxImgSecond3.classList.remove("sombras")
                boxImgSecond4.classList.remove("sombras")
                sombras=0
                
            }
        }
    })

    
}
document.addEventListener("DOMContentLoaded",()=>{
    let contenedor= document.querySelector('.lighbox')

    carrusel(contenedor)
}) */
let imagenes=['img/image-product-1.jpg','img/image-product-2.jpg','img/image-product-3.jpg','img/image-product-4.jpg']
let cont=0
let somb=0
function carrusel( contenedor ) {
    contenedor.addEventListener("click",e =>{
        let atras=contenedor.querySelector('.atras'),
         adelante=contenedor.querySelector('.adelante'),
         img =contenedor.querySelector('.img-main-ligh'),
         tgt =e.target;
        
        if (tgt==atras) {
            if (cont>0) {
                img.src=imagenes[cont-1]
                cont--   
                imgMainLigh.classList.add("img.activa.prin") 
            } else {
               img.src=imagenes[imagenes.length-1] 
               cont=imagenes.length-1 
               imgMainLigh.classList.add("img.activa.prin") 
            }
            somb--
            if (somb==0) {
                boxImgSecond1.classList.add("sombras")
                boxImgSecond2.classList.remove("sombras")
                boxImgSecond3.classList.remove("sombras")
                boxImgSecond4.classList.remove("sombras")
                
        
            }else if (somb==1) {
                boxImgSecond1.classList.remove("sombras")
                boxImgSecond2.classList.add("sombras")
                boxImgSecond3.classList.remove("sombras")
                boxImgSecond4.classList.remove("sombras")
                
            }else if (somb==2) {
                boxImgSecond1.classList.remove("sombras")
                boxImgSecond2.classList.remove("sombras")
                boxImgSecond3.classList.add("sombras")
                boxImgSecond4.classList.remove("sombras")
                
            }else if (somb==3) {
                boxImgSecond1.classList.remove("sombras")
                boxImgSecond2.classList.remove("sombras")
                boxImgSecond3.classList.remove("sombras")
                boxImgSecond4.classList.add("sombras")
                
            }else{
                boxImgSecond1.classList.remove("sombras")
                boxImgSecond2.classList.remove("sombras")
                boxImgSecond3.classList.remove("sombras")
                boxImgSecond4.classList.add("sombras")
               
                somb=3
            }  
        }if (tgt==adelante) {
            if (cont < imagenes.length-1) {
                img.src=imagenes[cont+1]
                cont++
                console.log ("bien")
                imgMainLigh.classList.add("img.activa.prin") 
            } else {
               img.src=imagenes[0] 
               cont=0
               console.log ("bien")
               imgMainLigh.classList.add("img.activa.prin") 
            }
            somb++
            if (somb==0) {
                boxImgSecond1.classList.add("sombras")
                boxImgSecond2.classList.remove("sombras")
                boxImgSecond3.classList.remove("sombras")
                boxImgSecond4.classList.remove("sombras")
                
        
            }else if (somb==1) {
                boxImgSecond1.classList.remove("sombras")
                boxImgSecond2.classList.add("sombras")
                boxImgSecond3.classList.remove("sombras")
                boxImgSecond4.classList.remove("sombras")
               
            }else if (somb==2) {
                boxImgSecond1.classList.remove("sombras")
                boxImgSecond2.classList.remove("sombras")
                boxImgSecond3.classList.add("sombras")
                boxImgSecond4.classList.remove("sombras")
               
            }else if (somb==3) {
                boxImgSecond1.classList.remove("sombras")
                boxImgSecond2.classList.remove("sombras")
                boxImgSecond3.classList.remove("sombras")
                boxImgSecond4.classList.add("sombras")
               
            } else{
                boxImgSecond1.classList.add("sombras")
                boxImgSecond2.classList.remove("sombras")
                boxImgSecond3.classList.remove("sombras")
                boxImgSecond4.classList.remove("sombras")
                somb=0
                
            }   
        }
       
       
    })  
    
}
document.addEventListener("DOMContentLoaded",()=>{
    let contenedor= document.querySelector('.lighbox')

    carrusel(contenedor)
})
boxImgSecond1.addEventListener("click",function () {
    imgMainLigh.setAttribute("src","img/image-product-1.jpg");
    imgMainLigh.classList.add("img.activa.prin") 
    boxImgSecond1.classList.add("sombras")
    boxImgSecond2.classList.remove("sombras")
    boxImgSecond3.classList.remove("sombras")
    boxImgSecond4.classList.remove("sombras")
    
    
})
boxImgSecond2.addEventListener("click",function () {
    imgMainLigh.setAttribute("src","img/image-product-2.jpg")
    imgMainLigh.classList.add("img.activa.prin") 
    boxImgSecond1.classList.remove("sombras")
    boxImgSecond2.classList.add("sombras")
    boxImgSecond3.classList.remove("sombras")
    boxImgSecond4.classList.remove("sombras")
    
})
boxImgSecond3.addEventListener("click",function () {
    imgMainLigh.setAttribute("src","img/image-product-3.jpg");  
    imgMainLigh.classList.add("img.activa.prin") 
    boxImgSecond1.classList.remove("sombras")
    boxImgSecond2.classList.remove("sombras")
    boxImgSecond3.classList.add("sombras")
    boxImgSecond4.classList.remove("sombras")
    
    
})
boxImgSecond4.addEventListener("click",function () {
    imgMainLigh.setAttribute("src","img/image-product-4.jpg");  
    imgMainLigh.classList.add("img.activa.prin") 
    boxImgSecond1.classList.remove("sombras")
    boxImgSecond2.classList.remove("sombras")
    boxImgSecond3.classList.remove("sombras")
    boxImgSecond4.classList.add("sombras")
    
    
})





