// Variables
let valor1;
let valor2;
let valor3;
let suma;

// boton
$("#btnSuma").click(sumar);

// funcion para sumar tres numeros
function sumar(){

valor1 = Number($("#txtValor1").val());
valor2 = Number($("#txtValor2").val());
valor3 = Number($("#txtValor3").val());
suma = valor1 + valor2 + valor3;

$("#pResultado").html("La suma es: " + (suma));
}