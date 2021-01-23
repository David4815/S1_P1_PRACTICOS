$("#btnMostrar").click(mostrarSucesion);

function mostrarSucesion() {
    let cadenaInicial = [1, 1];
    let resultado = "";
    for (i = 0; i < 18; i++) {
        cadenaInicial[i + 2] = (cadenaInicial[i] + cadenaInicial[i + 1]);
    }
    for (i = 0; i < cadenaInicial.length; i++) {
        if(i!==cadenaInicial.length -1){
            resultado += cadenaInicial[i] + ",";
        }else{
            resultado += cadenaInicial[i] + "...";
        }  
    }
    $("#pResultado").html(resultado);
}