$("#btnContar").click(tomarDatos);
//Paso a mayusculs al tomar los valores 
function tomarDatos(){
    let texto = $("#txtTexto").val().toUpperCase();
    let letra = $("#txtLetra").val().toUpperCase();
    let resultado = repeticionLetra(texto,letra);
    $("#pResultado").html(resultado);

}

function repeticionLetra(texto, letra) {
 let contador = 0;
    for (let i = 0; i <= texto.length - 1 ; i++) {
        if(texto.charAt(i)===letra){
            contador++;
        }
    }
    
return contador;
}