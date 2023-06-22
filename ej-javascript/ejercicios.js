/*Activando el modo strict*/
"use strict"
/*Ejercicio N°1*/
/*Se ejecuta una vez se cargue el documento html*/
alert("Bienvenidos al mundo de Javascript! ")
/*Ejercicio N°2 "use strict" no permite utilizar variables que no hayan sido declaradas*/
let nombreAprendiz="Tatiana Vargas";
alert(nombreAprendiz);
/*Ejercicio N°3*/
let nombres =" Lina Tatiana";
let apellidos="Vargas Diaz";
console.log(nombres+" "+apellidos);
/*Ejercicio N°4*/
let num1Int=5;
let num2Int=3;
let num3Str="4";
let num4Str="8";

console.log();
console.log("Ejercicio N°4");
console.log("Entero + Entero (5 + 3)");
console.log(num1Int + num2Int);
console.log("String + String(\"4\"+\"8\")");
console.log(num3Str +num4Str);
console.log("Entero + String(5 +\"4\")");
console.log(num1Int + num3Str);

/* Ejercicio N°5*/
/* De string a Entero*/
console.log("Conversión explícita de variables");
console.log("Convertir de string a Entero");
let num3Int=parseInt(num3Str);
let resultadoInt=num1Int + num2Int;
console.log(resultadoInt);
/* De entero a string*/
console.log("Conversión explícita de Entero a String");
let num1Str=num1Int.toString();
let resultadoStr=num3Str+num1Str;
console.log(resultadoStr);
/*De entero y string a decimal */
console.log("Conversión de Entero a Decimal");
let num1Float =parseFloat(num1Int);
let num3Float =parseFloat(num3Str);
let num5Float =5.3;
console.log("Valores: "+num1Float+" + "+ num3Float+" + "+ num5Float);
console.log("Resultado: "+(num1Float+num3Float+num5Float));
/*De decimal a entero */
let num6Int =Math.ceil(num5Float);
console.log("Conversión de decimal (5.3) a entero con ajuste hacia el techo " + num6Int);
/*Limitaciones para declarar variables */
/*1.No iniciar variables con números */
/* ejemplo: let 1vicente ="Vicente"; */
/*los nombres de variables no llevan espacios */
/*  ejemplo :let nombre aprendiz ="Margarita"; */
/* La declaración de la variable  no lleva comillas ni carácteres especiales de tipo-,*/
/*  ejemplo:let "Apellidos"= "sanchez"; */
/*  ejemplo:let nombres-apellidos ="Fernando rojas"; */ 
/* ejemplo:let primer/nombre="saul";  */
/*No podemos declarar las variables con nombres restringidos... */
/* ejemplo:let for=5;
ejemplo:let switch="deporte";
ejemplo:let while=1.5; */
console.log("Operadores Aritméticos");
let numArit1 =9;
let numArit2 =6;
console.log("Suma: ")
console.log("numArit1(9) + numArit2(6) es igual a: "+ numArit1+ numArit2);
console.log("Resta:")
console.log("numArit2(6) - numArit1(9) es igual a: "+ (numArit2-numArit1));
console.log("Multiplicación:")
console.log("numArit1(9) * numArit2(6) es igual a: "+(numArit1*numArit2));
console.log("División: ")
let resultDiv=numArit1 /numArit2;
console.log("Residuo: "+(numArit1 % numArit2));
console.log("numArit1(9) / numArit2(6) es igual a: "+(numArit1/numArit2));
console.log("Redondear Números: ");
console.log("Redondear según promedio..");
console.log(Math.round(resultDiv));
console.log("Redondear hacia abajo");
console.log(Math.floor(resultDiv));
console.log("Redondear hacia arriba ");
console.log(Math.ceil(resultDiv));
