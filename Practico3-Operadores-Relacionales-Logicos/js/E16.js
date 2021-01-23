let a;
let b;
let c;
let resultado;


$("#btnEvaluar").click(evaluar);

function evaluar(){

    a = Number($("#txtA").val());
    b = Number($("#txtB").val());
    c = Number($("#txtC").val());

    if(a>b && a>c){
        resultado="A es el mayor de los 3";
    }else{
        resultado="A NO es el mayor de los 3";
    }
    $("#pResultado").html(resultado);
}