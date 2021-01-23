$("#btnCalcular").click(tomarDatos);

function tomarDatos(){
    let ancho = Number($("#txtAncho").val());
    let alto = Number($("#txtAlto").val());
    let area = calcularAreaRectangulo(ancho,alto);
    $("#pResultado").html("El area del rectangulo es: " + area);
}

function calcularAreaRectangulo(ancho,alto){
    let resultado;
    if(ancho > 0 && alto > 0 && !isNaN(ancho) && !isNaN(alto)){
        resultado = ancho * alto;
    } else {
        resultado = -1;
    }
    return resultado;
}