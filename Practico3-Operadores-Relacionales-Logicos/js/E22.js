let compra;
let tarjeta;
let total


$("#btnCalcular").click(calcular);

function calcular() {
    compra = Number($("#txtCompra").val());
    tarjeta = $("#slcTarjeta").val();

    total = compra;
    if (compra < 10000 && tarjeta == "si") {
        total = (compra) - compra * 4 / 100
    }

    if (tarjeta == "si") {
        tarjeta = " con tarjeta";
    } else {
        tarjeta = " sin tarjeta";
    }

    $("#pResultado").html("Pago de $" + compra + tarjeta + ", costo final - > $" + total);
} 