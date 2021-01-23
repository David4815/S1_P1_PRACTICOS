$("#btnCalcular").click(tomarDatos);

function tomarDatos(){
    let base = Number($("#txtBase").val());
    let altura = Number($("#txtAltura").val());
    let area = calcularAreaTriangulo(base,altura);
    $("#pResultado").html("El area del triangulo es: " + area);
}

function calcularAreaTriangulo(base, altura) {
    let resultado;
    if (base > 0 && altura > 0 && !isNaN(altura) && !isNaN(altura)) {
        resultado =  base * altura / 2;
    } else {
        resultado = -1;
    }

    return resultado;

}

