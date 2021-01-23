$("#btnConvertir").click(tomarDatos);

function tomarDatos(){
    texto = $("#txtTexto").val();
    textoMinusculas = convertirMinusculas(texto);
    $("#pResultado").html(textoMinusculas);
}


function convertirMinusculas(texto){

let textoMin = texto.toLowerCase();
return textoMin;

}