
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
    "blue","red","green","black","gray"
]
function generarGrafico(porcentajes){
    let graficos=document.getElementById("graficos");
    graficos.innerHTML=""
    for (let i = 0; i < colores.length; i++) {
        let grafico=document.createElement("div");
        graficos.appendChild(grafico);
        let texto = document.createElement('span');
        grafico.appendChild(texto)
        texto.innerHTML=porcentajes[i]+"%";
        texto.style.color="white";
        texto.style.fontSize="1em";
        texto.style.textAlign="center";
       
        for (let e = 0; e < porcentajes.length; e++) {
            grafico.style.background=colores[i];
            grafico.style.width=porcentajes[i]+"%";
            grafico.style.height="20px";
            grafico.style.margin="7px";
            graficos.appendChild(grafico);
       }
    }
   
}


let titulo=document.getElementById("titulo")
titulo.style.color="blue";
titulo.style.textAlign="center";
let div=document.querySelector(".div");
div.style.background="rgb(190, 239, 223)";
div.style.textAlign="center";
div.style.width="20%";
div.style.height="40vh";