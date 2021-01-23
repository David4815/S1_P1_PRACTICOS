// variables
let num1;
let num2;
let resultado;

// boton
$("#btnEvaluar").click(evaluar);

// funcion para evaluar dos numeros y saber si son multiplos
function evaluar(){
    
    num1 = Number($("#txtNumero1").val());
    num2 = Number($("#txtNumero2").val());

    if (num1 % num2 === 0){
        resultado="Primer numero ES MULTIPLO DEL SEGUNDO.";
    }else {
        resultado="Priemr numero NO ES MULTIPLO DEL SEGUNDO.";
    }
    $("#pResultado").html(resultado);
}



// PARA VER SI SON MULTIPLOS ENTRE SI
// if (num1 % num2 === 0 || num2 % num1 === 0){
//     resultado="Si son multiplos.";
// }else {
//     resultado="No son multiplos.";
// }