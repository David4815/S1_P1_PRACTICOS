$("#btnEncontrar").click(tomarDatos);

function tomarDatos() {
    let texto = $("#txtTexto").val();
    let pos = encontrarPenultimaA(texto);
    $("#pResultado").html(pos);
}

function encontrarPenultimaA(texto) {

    let contador = 0;
    let posicion = -1;

    for (let i = texto.length - 1; i >= 0; i--) {
        if (texto.charAt(i) === "a") {
            contador++;
            if (contador === 2) {
                posicion = i;
            }
        }

    }
    return posicion;

}