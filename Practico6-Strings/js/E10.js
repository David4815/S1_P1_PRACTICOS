$("#btnCambiar").click(tomarDatos);

function tomarDatos(){
    let texto = $("#txtTexto").val();
    let letra = $("#txtLetra").val();
    let nuevoTexto;
    nuevoTexto = cambiarLetra(texto,letra);
    $("#pResultado").html(nuevoTexto);
}

function cambiarLetra(texto,letra){
    let nuevoTexto="";
    for(let i = 0; i <texto.length;i++){
        if(texto.charAt(i)===letra){
            nuevoTexto +="*";
        }else{
      nuevoTexto+=texto.charAt(i);  
    }
}
return nuevoTexto;
}