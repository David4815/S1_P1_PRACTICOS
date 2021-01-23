// variables
let valor1;
let divisor;
let resto;

// boton
$("#btnResto").click(calcularResto);

// funcion para calcular resto de dividir dos numeros
function calcularResto() {
    valor1 = Number($("#txtValor1").val());
    divisor = Number($("#txtDivisor").val());
    resto = valor1 % divisor;

    $("#pResto").html("El resto es: " + (resto));
}