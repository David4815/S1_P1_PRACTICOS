$("#btnVerificar").click(tomarDatos);

function tomarDatos() {
    texto = $("#txtTexto").val();
    let letrasIguales;
    if (verificarLetras(texto)) {
        letrasIguales = "Si son Iguales";
    } else {
        letrasIguales = "No son Iguales";
    }
    $("#pResultado").html(letrasIguales);
}

function verificarLetras(texto) {
    let resultado = false;
    if (texto.charAt(0) === texto.charAt(texto.length - 1)) {
        resultado = true;
    }
    return resultado;
}