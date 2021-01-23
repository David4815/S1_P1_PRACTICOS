$("#btnConvertir").click(tomarDatos);

function tomarDatos(){
    texto = $("#txtTexto").val();
    textoMayusculas = convertirMayusculas(texto);
    $("#pResultado").html(textoMayusculas);
}


function convertirMayusculas(texto){

let textoMay = texto.toUpperCase();
return textoMay;

}