$("#btnVerificar").click(tomarDatos);

function tomarDatos(){
    let texto = $("#txtTexto").val();
    let resultado;
    let palindromo;
    
    palindromo = verificarPalindromo(texto);
    if(palindromo){
        resultado= "Es Palindromo";
    }else{
        resultado="No es Palindromo";
    }
    $("#pResultado").html(resultado);
}

function verificarPalindromo(texto){
    let textoAnalizar = texto.toLowerCase();
    let textoAlReves = "";
    let resultado = false;
    let caracteresEliminar = " .{}][]+`^Ç¨,;?¿!¡:";
    let letrasReemplazar = "áéíóú";
    let letrasColocar = "aeiou";

    // Elimino caracteres " .,;?¿!¡:"
    for (let i = 0; i < caracteresEliminar.length; i++) {
        textoAnalizar = eliminarCaracteres(textoAnalizar, caracteresEliminar.charAt(i));
    }
    // Cambio letres con tilde por letras sin tilde
    for (j = 0; j < letrasReemplazar.length; j++) {
        textoAnalizar = cambiarLetra(textoAnalizar, letrasReemplazar.charAt(j), letrasColocar.charAt(j));
    }
    // invierto texto
    for(i= textoAnalizar.length -1 ; i>=0;i--){
        textoAlReves+= textoAnalizar.charAt(i);
    }
    if(textoAnalizar===textoAlReves){
        resultado = true;
    }
    return resultado;
}


