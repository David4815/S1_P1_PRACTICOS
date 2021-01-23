let a;
let b;

let resto;

$("#btnCalcular").click(calcular);

function calcular(){

a = Number($("#txtNumero1").val());
b = Number($("#txtNumero2").val());

while(a % b != 0){
resto = a % b;
a = b
b = resto
}

$("#pResultado").html("El MCD es: " + b);

}