// Variables
let acumulado = 0;

// Botones
$("#btnAcumular").click(acumular);
$("#btnMostrar").click(mostrar);

// Funcion para acumular valores ingresados
function acumular() {
    
    acumulado = acumulado + Number($("#txtValor").val());
}

// Funcion para mostrar valor acumulado
function mostrar() {

    $("#pResultado").html("Total acumulado: " + (acumulado));
}