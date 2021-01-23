// variables
let numero;
let resultado;

// boton
$("#btnEvaluar").click(evaluar);

// funcion para evaluar si el numero ingresado es mayor que 20
function evaluar() {
    numero = Number($("#txtNumero").val());
    if (numero < -20 || numero > 20) {
        resultado = "CUMPLE";
    } else {
        resultado = "NO CUMPLE";
    }
    $("#pResultado").html("CUMPLE");
}