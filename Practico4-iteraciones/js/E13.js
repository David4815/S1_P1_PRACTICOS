let ancho;
let alto;
let circulos = "";

$("#btnCalcular").click(generar);

function generar() {

    alto = Number($("#txtAlto").val());
    ancho = Number($("#txtAncho").val());


    for (let i = alto; i > 0; i--) {
        for (let j = ancho; j > 0; j--) {
            circulos = circulos + "O";
        }
        circulos = circulos + "<br>";
    }

    $("#pResultado").html(circulos);
    circulos = "";

}