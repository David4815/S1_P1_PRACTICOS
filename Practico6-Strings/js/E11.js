$("#btnConvertir").click(tomarDatos);

function tomarDatos() {
    let texto = $("#txtTexto").val();
    let nuevoTexto = convertir(texto);
    $("#pResultado").html(nuevoTexto);

}

function convertir(texto) {
    let nuevoTexto = texto.toLowerCase();
    let resultado = "";
    for (let i = 0; i < texto.length; i++) {
        if (i === 0) {
            resultado += texto.charAt(0).toUpperCase();
        } else {
            resultado += nuevoTexto.charAt(i);
        }
    }
    return resultado;
    
}


// ESTA MAL charAt es para asignar solamente
    // let nuevoTexto = texto.toLowerCase();
    // nuevoTexto.charAt(0) = nuevoTexto.charAt(0).toUpperCase();
    // return nuevoTexto;