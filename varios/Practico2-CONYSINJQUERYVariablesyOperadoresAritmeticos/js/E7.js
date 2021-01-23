// variables
let valor1;
let divisor;
let resto;

// boton
$("#btnResto").click(calcularResto);

// funcion
function calcularResto() {
    valor1 = Number($("#txtValor1").val());
    divisor = Number($("#txtDivisor").val());
    resto = valor1 % divisor;

    $("#pResto").html(resto);
}

// function restoCA(numero, divisor) {

//     let a = " El resto es: " + (parseInt(numero.value) % parseInt(divisor.value));
//     document.getElementById("resto").innerHTML = a;
// }