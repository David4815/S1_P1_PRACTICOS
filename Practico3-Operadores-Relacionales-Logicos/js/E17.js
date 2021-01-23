let a;
let resultado;

$("#btnEvaluar").click(evaluar);

function evaluar(){

    a = Number($("#txtA").val());

    if(a<0 || a>10){
        resultado="A esta FUERA de rango";
    } else {
        resultado="A esta DENTRO de rango";
    }
    $("#pResultado").html(resultado);
}