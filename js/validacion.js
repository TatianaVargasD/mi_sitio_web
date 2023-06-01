let nombreUsuario=document.getElementById("nombreUsuario");
let botonRegistrar=document.getElementById("botonRegistrar");

botonRegistrar.addEventListener("click",function(){
    if(nombreUsuario.value.length===0){
        alert("El nombre de usuario es un campo obligatorio,por favor ingreselo")
    }
    else{
        alert("Bienveindo(a)")
    }
});