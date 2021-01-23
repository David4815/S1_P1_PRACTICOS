// variables
let millas;
let tipoViajero;
let resultado;

// boton
$("#btnConsultar").click(consulta);

// funcion para evaluar dos numeros y saber si son multiplos
function consulta() {

    millas = Number($("#txtMillas").val());
    tipoViajero = $("#slcPlan").val();

    if (tipoViajero === "s") {
        millas = millas * 2;
    }

    if (millas > 60000) {
        resultado = "Europa(destinos lejanos)";
    } else if (millas > 30000) {
        resultado = "America del norte(destinos intermedios)";
    } else if (millas > 15000) {
        resultado = "America del sur(destinos cercanos)";
    } else {
        resultado = "No dispone de millas suficientes";
    }
    $("#pResultado").html(resultado);
}