$("#btnCalcular").click(tomarDatos);

function tomarDatos(){
    dias = Number($("#txtDias").val());
    horasXDia = Number($("#txtHoras").val());
    asistente = Number($("#slcAsistente").val());
    costoM = Number($("#txtMateriales").val());
    let costoFinal;

    if(esNumeroPositivo(dias) && esNumeroPositivo(horasXDia)){
        costoFinal = costoMateriales(costoM) + costoSalario("electricista", horasXDia, dias) + (asistente * costoSalario(asistente, horasXDia, dias));
    }else{
        costoFinal= "Ingrese valores correctos."
    }
    $("#pResultado").html(costoFinal);
}

function esNumeroPositivo(num) {
    let resultado;
if(num>0 && !isNaN(num)){
    resultado = true;
}else{
    resultado = false;
}
    return resultado;
}


function costoMateriales(costoM){
    costoFM = costoM * 1.1;
    return costoFM;
}

function costoSalario(tipoE,horas,dias){
    let costoE;
    if(tipoE === "electricista"){
        costoE = 200 * horas * dias;
    } else {
        costoE = 150 * horas * dias;
    }
    return costoE;
}

