
// Vriables
let pesos;
let cambio;
let dolares;

// boton
$("#btnDolares").click(calcular);

// funcion
function calcular() {

    pesos = Number($("#txtPesos").val())
    cambio = Number($("#txtCambio").val())
    dolares = pesos / cambio;

    $("#pDolares").html(dolares);

}

// function dolaresCA(pesos, cambio) {

//     let a = (parseInt(pesos.value)) + " pesos corresponden a " + (parseInt(pesos.value) / parseInt(cambio.value)) + " dolares.";
//     document.getElementById("dolares").innerHTML = a;
// }

