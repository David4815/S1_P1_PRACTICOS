// variables
let totalDineroP;
let cantidadCuotas;
let montoMaximoM;
let cuotaReal;
let reslutado;

// boton
$("#btnCalcular").click(calcular);


function calcular() {

    totalDineroP = Number($("#txtDinero").val());
    
    cantidadCuotas = Number($("#txtCuotas").val());
   
    montoMaximoM = Number($("#txtMaximo").val());
    cuotaReal = (totalDineroP  / cantidadCuotas ) * 1.3;
    
    if (cuotaReal > montoMaximoM) {
        resultado = "Credito rechazado";
    } else if( cuotaReal < montoMaximoM){
        resultado= "Se acepta el credito. El costo de cada cuota es de: " + cuotaReal; 
    } else {
        resultado= "Credito sujeto a revision";
    }
    
    
    $("#pResultado").html(resultado);
}