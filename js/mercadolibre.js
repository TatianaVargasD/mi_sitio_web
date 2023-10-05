class Automovil{
    constructor(marca,modelo,precio,anyo,ciudad,kilometros){
        this.marca=marca;
        this.modelo=modelo;
        this.precio=precio;
        this.kilometros=kilometros;
        this.anyo=anyo;
        this.ciudad=ciudad;
    }
}
let auto1=new Automovil("Toyota","TXL",216000000,2021,"Pitalito-Huila",34587);
let marcaAutomovil=auto1.marca;
let inputBusqueda=document.getElementById("inputBusqueda");
window.addEventListener("load",function(){
/* inputBusqueda.addEventListener("keydown",function(event){
    if (event.key=="Enter") { */
        let mainContent=document.getElementById("mainContent");
        let boxAuto=document.createElement("div");
        mainContent.appendChild(boxAuto);
        boxAuto.setAttribute("class","box-auto")
        /* Crear contenedor para la imagen */
         let boxImg=document.createElement("div");
         /* Corazon imagen */
         let boxCorazon=this.document.createElement("div");
         boxImg.appendChild(boxCorazon);
         boxCorazon.setAttribute("class","box-corazon")
         let corazon=this.document.createElement("div");
         boxCorazon.appendChild(corazon)
         corazon.setAttribute("class","corazon")
         /* Cargando icono */
         let iconHearth=document.createElement("i");
         corazon.appendChild(iconHearth);
         iconHearth.setAttribute("class","icon-style-hearth fa-regular fa-heart");

         boxAuto.appendChild(boxImg);
         let imgAuto=document.createElement("img");
         boxImg.appendChild(imgAuto);
         boxImg.setAttribute("class","box-img")
         imgAuto.setAttribute("src","img/toyota_blanca.png");
         imgAuto.setAttribute("class","img-auto");
        /* Crear información para la información*/
        let boxInfo=document.createElement("div");
        boxAuto.appendChild(boxInfo);
        let infoMarca=document.createElement("div");
        boxInfo.appendChild(infoMarca);
        boxInfo.setAttribute("class","box-info");
        infoMarca.setAttribute("class","info-marca");
        let txtMarca=document.createElement("label");
        infoMarca.appendChild(txtMarca);
        txtMarca.innerText=auto1.marca;
       
        let txtModelo=document.createElement("label");
        infoMarca.appendChild(txtModelo);
        txtModelo.innerText=" "+ auto1.modelo;
        txtModelo.setAttribute("class","txt-modelo");
        /* Precio */
        let precioFormat=new Intl.NumberFormat("de-DE").format(auto1.precio);
        let txtPrecio=document.createElement("label");
        boxInfo.appendChild(txtPrecio);
        txtPrecio.innerText=precioFormat;
        txtPrecio.setAttribute("class","txt-precio");
        /* Kilometraje y procedencia */
        let boxProdecencia=document.createElement("div");
        boxInfo.appendChild(boxProdecencia);
        let txtAnyo=document.createElement("label");
        boxProdecencia.appendChild(txtAnyo);
        txtAnyo.innerHTML=auto1.anyo+" · "

        let txtKilometros=document.createElement("label");
        boxProdecencia.appendChild(txtKilometros);
        let txtKilometrosFormat=new Intl.NumberFormat("de-DE").format(auto1.kilometros);
        txtKilometros.innerHTML=txtKilometrosFormat+" · ";

        let txtCiudad=document.createElement("label");
        boxProdecencia.appendChild(txtCiudad);
        txtCiudad.innerHTML=auto1.ciudad;

/* } */
    });