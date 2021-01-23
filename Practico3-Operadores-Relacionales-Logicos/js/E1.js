
let numero;
let resultado;


$("#btnEvaluar").click(evaluar);

// funcion para evaluar numeros negativos y positivos
function evaluar() {
    numero = Number($("#txtNumero").val());
    if (numero < 0) {
        resultado = "Numero negativo";
    } else {
        resultado = "Numero positivo";
    }

    $("#pResultado").html(resultado);
    
}
