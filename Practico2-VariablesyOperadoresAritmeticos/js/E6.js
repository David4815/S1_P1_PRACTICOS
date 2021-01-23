
// Variables
let pesos;
let cambio;
let dolares;

// boton
$("#btnDolares").click(calcular);

// funcion para calcular dolares a partir de pesos y tipo de cambio
function calcular() {

    pesos = Number($("#txtPesos").val())
    cambio = Number($("#txtCambio").val())
    dolares = pesos / cambio;

    $("#pDolares").html("Dolares: " + (dolares));

}

