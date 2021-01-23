// Variables
let valor1;
let valor2;
let valor3;
let resultado;

// boton
$("#btnCalcular").click(calcular);

// funcion
function calcular() {
    valor1 = Number($("#txtValor1").val());
    valor2 = Number($("#txtValor2").val());
    valor3 = Number($("#txtValor3").val());
    resultado = valor1 + valor2 - valor3;

    $("#pResultado").html(resultado);
}

// function calcularCA(v1, v2, v3) {
//     let c = "El resultado es: " + (parseInt(v1.value) + parseInt(v2.value) - parseInt(v3.value));
//     document.getElementById("Resultado").innerHTML = c;
// }