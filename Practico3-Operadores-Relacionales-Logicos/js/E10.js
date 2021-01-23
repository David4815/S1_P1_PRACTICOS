// variables
let num1;
let num2;
let resultado;

// boton
$("#btnCalcular").click(evaluarYRestar);

// funcion para evaluar dos numeros y restarlos
function evaluarYRestar() {

    num1 = Number($("#txtNumero1").val());
    num2 = Number($("#txtNumero2").val());

    if (num1 > num2) {
        resultado = (num1 - num2);
    } else {
        resultado = num2 - num1;
    }

    $("#pResultado").html(resultado);

}