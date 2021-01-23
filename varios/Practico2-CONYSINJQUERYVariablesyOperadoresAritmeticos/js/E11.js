// variables
let subtotal;
let total;

// botonn
$("#btnImporteFinal").click(calcularImporte)

// funcion
function calcularImporte() {

    subtotal = Number($("#txtSubtotal").val());
    total = subtotal * 1.22;
    $("#pResultado").html(total);

}

// function importeFinalCA(v1) {
//     let c = "El importe final es: " + ((parseInt(v1.value) * 22/100)+parseInt(v1.value));
//     document.getElementById("Resultado").innerHTML = c;

// }