let num;
let factorial = 1;

$("#btnCalcular").click(calcular);

function calcular(){

num = Number($("#txtNumero").val());

if(num <= 0){
    factorial = "Ingrese un numero mayor a cero."
}

for (let i = num; i > 0; i--){
    factorial = factorial * i;
}
$("#pResultado").html(factorial);
factorial = 1;


}