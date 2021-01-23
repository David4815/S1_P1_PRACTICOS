let num1;
let num2;
let producto = 1;

$("#btnMostrar").click(mostrar);

function mostrar() {
    num1 = Number($("#txtNumero1").val());
    num2 = Number($("#txtNumero2").val());

    if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
            producto = producto * i;
        }
    } else {
        for (let i = num1; i >= num2; i--) {
            producto = producto * i;
        }
    }

    $("#pResultado").html("El producto es: " + producto);
    producto = 1;
}