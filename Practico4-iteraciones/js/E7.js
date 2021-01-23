let guiones = "Guiones: ";
let numero;

$("#btnMostrar").click(mostrar);

function mostrar() {
    numero = Number($("#txtNumero").val());

    if(numero<2 || numero>50){
        guiones = "Ingrese un numero entre 2 y 50."
    } else{

        for (let i = numero; i > 0; i--) {
            guiones = guiones + "- ";
    }

    }

    $("#pResultado").html(guiones);
    guiones = "Guiones: ";
}