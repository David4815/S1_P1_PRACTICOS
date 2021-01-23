// variables
let numero;
let resultado;

// boton
$("#btnEvaluar").click(evaluar);

// funcion para evaluar si el numero ingresado es mayor que 20
function evaluar() {
    numero = Number($("#txtNumero").val());
    if (numero >= 0) {
        resultado = "Resultado: " + (numero);
    } else {
        resultado = "Resultado: " + (Math.abs(numero));
    }
    $("#pResultado").html(resultado);
}
