$("#btnConvertir").click(tomarDatos);

function tomarDatos(){
    gradosF = Number($("#txtGradosF").val());
    unidad = $("#slcUnidad").val();
    resultado = convertirTemp(gradosF,unidad);
    $("#pResultado").html(gradosF + " ºF son " + resultado + " º" + unidad + ".");
}
function convertirTemp(gradosF, unidad) {
    let resultado;
    switch (unidad) {
        case "celcius":
            resultado = (gradosF - 32) / 1.8;
            break;
        case "kelvin":
            resultado = (gradosF + 459.67) / 1.8;
            break;
        case "rankine":
            resultado = gradosF + 459.67;
            break;
        case "reamur":
            resultado = (gradosF - 32) / 2.25;
            break;
    }
    return resultado;
}