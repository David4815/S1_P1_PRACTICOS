
// Variables
let importe
let recargo
let producto

// botonn
$("#btnImporte").click(calcularRecargo)

// funcion
function calcularRecargo() {

    importe = Number($("#txtImporte").val());
    recargo = Number($("#txtRecargo").val());
    producto = (importe * recargo / 100) + importe;
    $("#pResultado").html(producto);

}

// function importeFinalCA(v1, v2) {
//     let c = "El importe final es: " + ((parseInt(v1.value) * (parseInt(v2.value))/100)+parseInt(v1.value));
//     document.getElementById("Resultado").innerHTML = c;
// }