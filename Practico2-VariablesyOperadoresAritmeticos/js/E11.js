// variables
let subtotal;
let total;

// boton
$("#btnImporteFinal").click(calcularImporte)

// funcion para calcular importe total a partir de subtotal e IVA.
function calcularImporte() {

    subtotal = Number($("#txtSubtotal").val());
    total = subtotal * 1.22;
    $("#pResultado").html("El importe final es: " + (total));

}