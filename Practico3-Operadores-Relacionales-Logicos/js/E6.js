// variables
let numero;
let resultado;

// boton
$("#btnEvaluar").click(evaluar);

// funcion para evaluar si el numero ingresado es mayor que 20
function evaluar() {
    numero = Number($("#txtNumero").val());
    if ((numero % 7) == 0 && (numero % 3) == 0) {
        resultado = "Si es multiplo de 7 y 3";
    } else {
        resultado = "No es multiplo de 7 y 3";
    }
    $("#pResultado").html(resultado);
}