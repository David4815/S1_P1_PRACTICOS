
$("#btnInvertir").click(tomarDatos);

function tomarDatos() {

    let texto = $("#txtTexto").val();
    let resultado;

    resultado = invertirTexto(texto);

    $("#pResultado").html(resultado);
}


function invertirTexto(texto) {

    let nuevoTexto = "";
    for (let i = texto.length -1; i >= 0; i--) {
        nuevoTexto += texto.charAt(i);
    }
    return nuevoTexto;
}