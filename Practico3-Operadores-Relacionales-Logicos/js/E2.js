// variables
let numero;
let resultado;

// boton
$("#btnEvaluar").click(evaluar);

// funcion
function evaluar() {

    numero = Number($("#txtNumero").val());
    if (numero > 10) {
        resultado = "Mayor a diez";
    } else {
        resultado = "Ingrese otro numero";
    }

    $("#pResultado").html(resultado);
}
