// Variables
let valor1;
let valor2;
let valor3;
let resultado;

// boton
$("#btnCalcular").click(calcular);

// funcion para calcular a + b - c
function calcular() {
    valor1 = Number($("#txtValor1").val());
    valor2 = Number($("#txtValor2").val());
    valor3 = Number($("#txtValor3").val());
    resultado = valor1 + valor2 - valor3;

    $("#pResultado").html("El resultado(v1+v2-v3) es: " + (resultado));
}