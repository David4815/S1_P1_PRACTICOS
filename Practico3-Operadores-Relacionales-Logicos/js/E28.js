let puntaje1;
let puntaje2;
let p1Acumulado = 0;
let p2Acumulado = 0;


$("#btnCalcular").click(calcular);

function calcular() {

    puntaje1 = Number($("#txtPuntaje1").val());
    puntaje2 = Number($("#txtPuntaje2").val());

    p1Acumulado += puntaje1;
    p2Acumulado += puntaje2;

    if (p1Acumulado >= 30 || p2Acumulado >= 30) {
        $("#btnCalcular").attr("disabled", true);
    } 

    $("#pResultado").html("Puntaje equipo1: " + p1Acumulado + "<br> Puntaje equipo 2: " + p2Acumulado);

}