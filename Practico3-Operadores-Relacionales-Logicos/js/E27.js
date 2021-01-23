let numeroJ1;
let numeroJ2;
let diferencia;
let sugerencia;
let contador = 0;

$("#btnAdivinar").click(adivinar);

function adivinar() {

    numeroJ1 = Number($("#txtNumeroJ1").val());
    numeroJ2 = Number($("#txtNumeroJ2").val());
    diferencia = Math.abs((numeroJ1 - numeroJ2));

    if (diferencia > 15) {
        contador++;
        sugerencia = "estas lejos";
    } else if (diferencia >= 10 && diferencia <= 15) {
        contador++;
        sugerencia = "te estas acercando";
    } else if (diferencia >= 5 && diferencia <= 9) {
        contador++;
        sugerencia = "cada vez mas cerca";
    } else if (diferencia < 5 && diferencia >= 1) {
        contador++;
        sugerencia = "muy pero muy cerca";
    } else if (diferencia === 0) {
        contador++;
        sugerencia = "acertaste";
    }

    $("#pResultado").html(sugerencia + ", intentos: " + contador);


}