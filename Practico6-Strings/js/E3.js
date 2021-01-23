$("#btnContar").click(tomarDatos);

function tomarDatos(){
    let texto = $("#txtTexto").val().toLowerCase();
    let resultado = cantidadVocales(texto);
    $("#pResultado").html(resultado + " vocales.");
}

function cantidadVocales(texto){

    let contador = 0;
    for (let i = 0; i <= texto.length - 1 ; i++) {
        if(texto.charAt(i)==="a" || texto.charAt(i)==="e" || texto.charAt(i)==="i" || texto.charAt(i)==="o" || texto.charAt(i)==="u"){
            contador++;
        }
    }
    
return contador;
    
}