
$("#btnConvertir").click(tomarDatos);

function tomarDatos() {
    let celciusCampo = Number($("#txtGradosC").val());
    let f = convertirAFar(celciusCampo);
    $("#pResultado").html(f);
}

function convertirAFar(gradosC) {
    let fahrenheit = 1.8 * gradosC + 32;
    return fahrenheit;
}



