// variables
let chirridos;
let temperaturaC;
let temperaturaF;
let temperaturaD;

// boton
$("#btnCalcular").click(calcularTemperatura);

// funcion para calcular temperatura
function calcularTemperatura() {

    chirridos = Number($("#txtChirridos").val());

    temperaturaF = 50 + ((chirridos - 40) / 4);
    temperaturaC = (temperaturaF - 32) / 1.8;
    temperaturaD = 10 + ((chirridos - 40) / 7);

    $("#pResultadoF").html("Temperatura en Fahrenheit: " + (temperaturaF));   
    $("#pResultadoC").html("Temperatura en Celcius: " + (temperaturaC));
    $("#pResultadoD").html("Temperatura directa en Celcius: " + (temperaturaD));
}