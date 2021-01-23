// variables
let num1;
let num2;
let operacion;
let resultado;

// boton
$("#btnCalcular").click(evaluarYCalcular);

// funcion para evaluar una letra y realizar una operacion con dos numeros
function evaluarYCalcular() {
    num1 = Number($("#txtNumero1").val());
    num2 = Number($("#txtNumero2").val());
    operacion = $("#slcOperacion").val();
// EN EQUIPO EN CLASE LO HICIMOS CON SWITCH
    if (operacion === "S") {
        resultado = num1 + num2;
    } else if (operacion === "R") {
        resultado = num1 - num2;
    } else if (operacion === "M") {
        resultado = num1 * num2;
    } else {
        resultado = num1 / num2;   
    }
    $("#pResultado").html(resultado);
}