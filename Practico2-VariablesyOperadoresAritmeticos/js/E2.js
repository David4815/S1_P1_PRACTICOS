// Variables
let valor1;
let valor2;
let suma;

// boton
$("#btnSuma").click(sumar);

// funcion para sumar dos numeros
function sumar() {

    valor1 = Number($("#txtValor1").val());
    valor2 = Number($("#txtValor2").val());
    suma = valor1 + valor2;

    $("#pResultado").html("La suma es: " + (suma));
}