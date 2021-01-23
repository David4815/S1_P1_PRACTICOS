let num;
let dresultado;

$("#btnCalcular").click(calcular);

function calcular() {
    num = Number($("#txtNumero").val());
    if (num <= 2000) {
        resultado = "Ingrese un numero mayor a 2000";
    } else {
        do {
            num = num / 20
        } while (num > 100);
        resultado = num;
    }

    $("#pResultado").html(resultado);
}