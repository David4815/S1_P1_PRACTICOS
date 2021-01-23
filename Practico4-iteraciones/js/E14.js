let num;
let digitos = 0;

$("#btnCalcular").click(calcular);

function calcular() {
    num = Math.abs(Number($("#txtNumero").val()));

    do {
        digitos++;
        num = num / 10
    } while (num >= 1);

    $("#pResultado").html("Cantidad de digitos: " + digitos);
    digitos = 0;
}