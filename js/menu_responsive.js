let botonVertical=document.getElementById("menu1")
let despligeVertical=document.getElementById("despliege-lado")
botonVertical.addEventListener("click",function (){
    
    if (despligeVertical.classList.contains("menu_activo")) {
        despligeVertical.classList.add("menu_inactivo")
        despligeVertical.classList.remove("menu_activo")
    }else{
        despligeVertical.classList.remove("menu_inactivo")
        despligeVertical.classList.add("menu_activo")
    }
})
/* let subItems=document.getElementById("subitem")
let primerDespliege=document.getElementById("despliege")
subItems.addEventListener("click",function(){
    /* alert("Despliega") */
   /*  if (primerDespliege.classList.contains("children")) {
        primerDespliege.classList.add("childen-actvo")
        primerDespliege.classList.remove("children")
    }else{
        primerDespliege.classList.remove("children-activo")
        primerDespliege.classList.add("children")
    } */
