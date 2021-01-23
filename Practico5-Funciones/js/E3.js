
$("#btnEvaluar").click(tomarDatos);

function tomarDatos() {
    let año = Number($("#txtAño").val());
    let siEsBisiesto = esBisiesto(año);
    let resultado;

    if (siEsBisiesto) {
        resultado = año + " Si es bisiesto.";
    } else {
        resultado = año + " No es bisiesto.";
    }
    $("#pResultado").html(resultado);
}

function esBisiesto(año) {
    let resultado;
    if ((año % 4 === 0 && año % 100 !== 0) || año % 400 === 0) {
        resultado = true;
    } else {
        resultado = false;
    }
    return resultado;
}