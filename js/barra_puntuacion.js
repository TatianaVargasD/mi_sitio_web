let boton=document.getElementById("button");


boton.addEventListener("click",function(){

    let inputOne=parseFloat(document.getElementById("one").value);
    let inputTwo=parseFloat(document.getElementById("two").value);
    let inputThree=parseFloat(document.getElementById("three").value);
    let inputFour=parseFloat(document.getElementById("four").value);
    let inputFive=parseFloat(document.getElementById("five").value);
    
   
    let total=inputOne+inputTwo+inputThree+inputFour+inputFive;
    const porcentajes=[
       Math.round((inputOne/total)*100),
       Math.round ((inputTwo/total)*100),
       Math.round((inputThree/total)*100),
       Math.round((inputFour/total)*100),
       Math.round((inputFive/total)*100)
    ]
    console.log(porcentajes)
    generarGrafico(porcentajes)
})

const colores=[
    "gray",
    "gray",
    "gray",
    "gray",
    "gray"
]
function generarGrafico(porcentajes){
    let graficos=document.querySelectorAll('.barras')
    let porcentaje=document.querySelectorAll('.porcentaje') 
    for (let i = 0; i < graficos.length; i++) {
        graficos[i].innerHTML="";
        let grafico=document.createElement("div");
        grafico.style.background=colores[i];
        grafico.style.width="0";
        grafico.style.height="40px";
        grafico.style.borderRadius='7px';
        porcentaje[i].innerHTML=porcentajes[i]+"%";
        porcentaje[i].style.color="black"
        graficos[i].appendChild(grafico);
        setInterval(() => {
            grafico.style.width=porcentajes[i]+"%";
            grafico.style.transition="width 1s";
        }, 10);
    }
}