$("#btnContar").click(tomarDatos);

function tomarDatos(){
    let texto = $("#txtTexto").val();
    let textoAnalizar = texto.trim();
    let resultado = contarPalabras(textoAnalizar);
    $("#pResultado").html(resultado);

}
function contarPalabras(texto) {
 let contador = 0;
    if(texto.length>0){
        contador=1;
    }
    for (let i = 0; i <= texto.length - 1 ; i++) {
        // pongo segunda condicion para mas de un espacio entre palabras
        if(texto.charAt(i)===" " && texto.charAt(i + 1) !== " "){
            contador++;
        }
    }
    
return contador;
}