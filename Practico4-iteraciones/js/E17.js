let divisor;
let dividendo;
let resto;
let resultado = 0;

$("#btnCalcular").click(calcular);

function calcular() {

    divisor = Number($("#txtDivisor").val());
    dividendo = Number($("#txtDividendo").val());
    resto = dividendo;
    
    while(resto >= divisor){
        resto = resto - divisor;
        resultado++;
    } 
    
    $("#pResultado").html("resultado: " + resultado + ", resto: " + resto);
    resultado=0;
}
