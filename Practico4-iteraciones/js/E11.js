let num1;
let num2;
let num3;
let multiplos = "";

$("#btnMostrar").click(mostrar);

function mostrar() {
    num1 = Number($("#txtNumero1").val());
    num2 = Number($("#txtNumero2").val());
    num3 = Number($("#txtNumero3").val());

    if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
            if (i % num3 === 0) {
                multiplos = multiplos + "" + i + " ";
            }

        }
    } else {
        for (let i = num1; i >= num2; i--) {
            if (i % num3 === 0) {
                multiplos = multiplos + "" + i + " ";
            }
        }
    }

    $("#pResultado").html("Multiplos: " + multiplos);
    multiplos = "";
}