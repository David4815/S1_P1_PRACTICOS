// variables
let numero;
let resultado;

// boton
$("#btnEvaluar").click(evaluar);

// funcion para evaluar si el numero ingresado es mayor que 20
function evaluar(){
    numero = Number($("#txtNumero").val());
    if (numero>10 && numero<20){
       resultado="Si esta entre 20 y 30"; 
    }else{
        resultado="No esta entre 20 y 30";
    }
    $("#pResultado").html(resultado);
}
