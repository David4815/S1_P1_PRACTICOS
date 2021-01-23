$("#btnMostrar").click(mostrarSucesion);

function mostrarSucesion() {
    let cadenaInicial = [1, 1];
    let resultado = "";
    
    while (cadenaInicial[cadenaInicial.length - 1] < 1000) {
        cadenaInicial[cadenaInicial.length] = (cadenaInicial[cadenaInicial.length - 1] + 
            cadenaInicial[cadenaInicial.length - 2]);
    }

    for (i = 0; i < cadenaInicial.length; i++) {
        if (i !== cadenaInicial.length - 1) {
            resultado += cadenaInicial[i] + ",";
        } else {
            resultado += cadenaInicial[i] + "...";
        }
    }
    $("#pResultado").html(resultado);
}