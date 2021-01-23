
// Variables
let importe
let recargo
let producto

// botonn
$("#btnImporte").click(calcularRecargo)

// funcion para calcular recargo
function calcularRecargo() {

    importe = Number($("#txtImporte").val());
    recargo = Number($("#txtRecargo").val());
    producto = (importe * recargo / 100) + importe;
    $("#pResultado").html("El importe final es: " + (producto));

}