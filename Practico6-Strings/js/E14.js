$("#btnContar").click(tomarDatos);

function tomarDatos(){
let texto= $("#txtTexto").val();
let cantidadPrimerLetra = calcularRepPrimerLetra(texto);
$("#pResultado").html("Apariciones de primer letra: " + cantidadPrimerLetra);

}

function calcularRepPrimerLetra(texto){
    let primerLetra = texto.charAt(0);
    let contador=0;
    for(let i=0;i<texto.length;i++){
        if(texto.charAt(i)===primerLetra){
            contador++;
        }
    }
    return contador;
}