let mainCarrito = document.getElementById("mainCarrito");
let mainImg = document.getElementById("mainImg");
let valorInicial = 0;
let valorFinal = 0;

window.addEventListener("keydown", function(event){
    if(event.key == "ArrowRight"){
    mainImg.classList.add("main-img-1");
    mainImg.classList.remove("main-img-0");
    }
});

window.addEventListener("keydown", function(event){
    if(event.key == "ArrowUp"){
    mainCarrito.classList.add("main-carrito-up-0");
    mainCarrito.classList.remove("main-carrito-up-1");
    }
})

window.addEventListener("keydown", function(event){
    if(event.key == "ArrowDown"){
    mainCarrito.classList.remove("main-carrito-up-0");
    mainCarrito.classList.add("main-carrito-up-1");
    }
})
