/* /* console.log("Validación  de fechas");
console.log("== Fecha y Hora GMT ==");
let timeGMT =new Date();
console.log(timeGMT);
console.log("== Fecha y Hora en String ==");
let timeGMTStr=timeGMT.toString();
console.log(timeGMTStr);
console.log("Obtener el dia de la semana");
let timeGMTDay = timeGMT.getDay();
console.log(timeGMTDay);
let diaSemana=["Domingo","Lunes","Martes","Miercoles",
                 "Jueves","Viernes","Sabado"];
console.log("Hoy es "+ diaSemana[timeGMTDay]);
console.log("Obtener el mes");
let timeGMTMonth= timeGMT .getMonth();
console.log(timeGMTMonth);
let mes=["Enero","Febrero","Marzo","Abril","Mayo","Junio",
          "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
console.log("Estamos en el mes de "+mes[timeGMTMonth]);
console.log("Fecha y Hora desfragmentada"); */
let currentTime =new Date(); 
/* console.log("Dia de la semana "+currentTime.getDay());
console.log("Mes del año "+currentTime.getMonth());
console.log("Dia del mes "+currentTime.getDate());
console.log("Año "+currentTime.getFullYear());
console.log("Hora: "+currentTime.getHours());
console.log("Minutos: "+currentTime.getMinutes());
console.log("Segundos: "+currentTime.getSeconds());
console.log("Milisegundos: "+currentTime.getMilliseconds()); */ 
console.log("Milisegundos transcurridos desde 01/01/1970");
console.log(currentTime.getTime());
console.log("Estableciendo diferencia en fechas");
let newYear2024=new Date("January 1, 2024");
let fechaActual =new Date();
let newYear2024ms =newYear2024.getTime();
let fechaActualms= fechaActual.getTime();
let milisecDiff=newYear2024ms -fechaActualms;
let diasDiff=milisecDiff/(1000 * 60 * 60 * 24);
console.log("Dias faltantes para año nuevo: "+Math.floor(diasDiff));
console.log("Ingresar fecha y hora");
/* 
console.log("Segundos faltantes "+fechaDifVot/1000);
console.log("Minutos faltantes "+fechaDifVot/(1000 * 60));
console.log("Horas faltantes "+fechaDifVot/(1000 * 60 * 60));
console.log("Dias faltantes "+fechaDifVot/(1000 * 60 * 60 * 24)); */
calcularTiempoVotaciones();
function calcularTiempoVotaciones(){
    let fechaHora =new Date("July 2, 2023 08:00:00");
    let fechaHorams= fechaHora.getTime();
    let fechaDifVot =fechaHorams -fechaActualms;
    let diasRestantes=Math.floor(fechaDifVot/(1000* 60* 60*24));
    let horasRestantes=Math.floor(fechaDifVot /(1000 * 60 * 60));
    let horasRestantesSinDecim=Math.floor(horasRestantes% 24);
    let minutosRestantes=fechaDifVot/(1000 * 60);
    let minutosRestantesSinDecim=Math.floor(minutosRestantes% 60);
    console.log("El tiempo restante para las votaciones es: " +
    diasRestantes + " Dias "+ horasRestantesSinDecim + " Horas y "+ minutosRestantesSinDecim +" Minutos")
}