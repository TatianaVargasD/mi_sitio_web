console.log("Hola mundo");
let ciudad= "pitalito";
/*Todo a mayusculas */
let ciudadUpper = ciudad.toUpperCase();
console.log("Todo a mayúsculas: "+ ciudadUpper);
/*Todo a minusculas */
let ciudadlow = ciudad.toLowerCase();
console.log("Todo a minúsculas: "+ ciudadlow);
/*la primera letra a mayuscula */
let ciudadOracion =ciudad[0].toUpperCase()+ciudad.slice(1).toLowerCase();
console.log("La primera letra en Mayúscula: "+ ciudadOracion);
/*Extraer partes de una cadena  */
let anyo="2023-06-22";
let anyoStr= anyo.toString();
let anyocard= anyoStr.slice(2,4);
console.log("Año:"+ anyocard);
let nombres="Lina Tatiana Vargas Díaz";
let cantNombres =nombres.length;
console.log("Longitud del nombre: "+ cantNombres);