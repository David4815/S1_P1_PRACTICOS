let azucar;
let harina;
let aceite;
let agua;
let recetas = 0;

$("#btnCalcular").click(calcular);

function calcular() {

    azucar = Number($("#txtTazasAzucar").val());
    harina = Number($("#txtGramosHarina").val()) / 100;
    aceite = Number($("#txtCucharadasAceite").val());
    agua = Number($("#txtTazasAgua").val());
    // cantidades necesarias
    // 1 taza azucar
    // 100 gramos harina
    // 1 cucharada aceite
    // 1 taza agua

    if (azucar <= harina && azucar <= aceite && azucar <= agua) {
        recetas = azucar;
    } else if (harina <= azucar && harina <= aceite && harina <= agua) {
        recetas = Math.floor(harina);
    } else if (aceite <= azucar && aceite <= harina && aceite <= agua) {
        recetas = aceite;
    } else if (agua <= azucar && agua <= harina && agua <= aceite){
        recetas = agua;
    }

    $("#pResultado").html("Se pueden hacer " + recetas + " recetas");

}
