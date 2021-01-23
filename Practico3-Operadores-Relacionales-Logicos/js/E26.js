let noches;
let medioPago;
let nochesRegalo;
let nochesTotales;
let costoTotal;


$("#btnCalcular").click(calcular);

function calcular(){

    noches = Number($("#txtNoches").val());
    medioPago = $("#slcPago").val();
    costoTotal = noches * 40;


    if(noches >= 7){

        if(medioPago === "e"){
            nochesRegalo = 2;
            nochesTotales = noches + nochesRegalo;
        }else if(medioPago === "t"){
            nochesRegalo = 3;
            nochesTotales = noches + nochesRegalo;
        }

    } else if(noches >= 3 && noches < 7){
        nochesRegalo = 1;
        nochesTotales = noches + nochesRegalo;

    }else if(noches < 3){
        nochesRegalo = 0;
        nochesTotales = noches + nochesRegalo;
    }

    if(medioPago === "t"){
        medioPago = "tarjeta";
    }else if(medioPago === "e"){
        medioPago = "efectivo";
    }

    $("#pResultado").html(noches + " noches pagadas con " + medioPago + " -> hay " + nochesRegalo +
     " noches de regalo, el usuario se hospeda " + nochesTotales + " noches, el costo total son $" + costoTotal);

}