// variables
let temperatura;
let diaATrabajar;
let ropaAUsar;

// boton
$("#btnRecomendar").click(evaluar);

// funcion para evaluar si el numero ingresado es mayor que 20
function evaluar() {

    temperatura = Number($("#txtTemperatura").val());
    dia = $("#slcDias").val();

    if (temperatura < 10) {
        ropaAUsar = "Abrigarse Mucho";
    } else if (temperatura > 20) {
        ropaAUsar = "Ponerse ropa comoda";
    } else {
        ropaAUsar = "Abrigo moderado";
    }

    if (dia === "Domingo") {
        diaATrabajar = "Quedarse en casa, hoy no trabaja.";
    } else {
        diaATrabajar = "Ir al trabajo.";
    }

    $("#pResultado").html("Levantarse" + "<br>" + ropaAUsar + "<br>" + diaATrabajar);

}