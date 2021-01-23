$("#btnMostrar").click(tomarDatos);

function tomarDatos(){
    let texto = $("#txtTexto").val();
    let nuevoTexto = mostrarVocales(texto);
    $("#pResultado").html(nuevoTexto);
}

function mostrarVocales(texto){
    let textoMin = texto.toLowerCase();
    let nuevoTexto = "";
    
    for (let i = 0; i <= texto.length - 1 ; i++) {
        if(textoMin.charAt(i)==="a" || textoMin.charAt(i)==="e" || textoMin.charAt(i)==="i" || textoMin.charAt(i)==="o" || textoMin.charAt(i)==="u"){
            nuevoTexto+= texto.charAt(i);
        }
    }
    return nuevoTexto;


}