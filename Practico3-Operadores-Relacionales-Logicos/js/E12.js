// variables
let letra;
let resultado;

// boton
$("#btnEvaluar").click(evaluar);

// funcion para evaluar si una letra es vocal
function evaluar() {
    
    letra = $("#slcLetra").val();

    if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
        resultado="Es una vocal.";
    } else {
        resultado="No es una vocal.";
    }
    $("#pResultado").html(resultado);
}