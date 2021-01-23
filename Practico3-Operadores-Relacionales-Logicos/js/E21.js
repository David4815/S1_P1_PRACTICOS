let ingreso;
let costo;
let primerPago;
let cuotas;


$("#btnCalcular").click(calcular);

function calcular(){

ingreso = Number($("#txtIngreso").val());
costo = Number($("#txtCosto").val());

if(ingreso < 20000){
    primerPago = costo * 15 /100;
    cuotas = (costo - primerPago) / (12 * 7);
} else if (ingreso >= 20000){
    primerPago = costo * 30 /100;
    cuotas = (costo - primerPago) / 12;
}

$("#pResultado").html("Primer pago: " + primerPago + " Cuota Mensual: " + cuotas);

}