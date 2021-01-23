let numeros = "Son Multiplos de 4: <br>";

$("#btnMostrar").click(mostrar);

function mostrar() {

    for (let i = -33; i <= 230; i++) {

        if (i % 4 === 0) {
            numeros = numeros + i + "<br>";
        }
    }
    $("#pResultado").html(numeros);
}