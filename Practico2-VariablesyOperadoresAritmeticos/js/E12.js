// Variables
let masa;
let altura;
let IMC;

// boton
$("#btnIMC").click(calcularIMC);

// Funcion para calcular IMC
function calcularIMC(){

    masa = Number($("#txtMasa").val());
    altura = Number($("#txtAltura").val());
    IMC = masa / ( altura * altura );

    $("#pResultado").html("Su IMC es: " + (IMC));

}