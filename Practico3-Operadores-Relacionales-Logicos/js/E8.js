// variables
let numero;
let resultado;

// boton
$("#btnEvaluar").click(evaluar);

// funcion para evaluar si el numero ingresado es mayor que 20
function evaluar() {
    numero = Number($("#txtNumero").val());
    if (numero < 10) {
        resultado = "Menor que 10";
    } else if (numero > 30) {
        resultado = "Mayor que 30";
    } else {
        resultado = "Entre 10 y 30";
    }
    $("#pResultado").html(resultado);
}