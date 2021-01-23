$("#btnCalcular").click(tomarDatos);

function tomarDatos(){
    
    let base = Number($("#txtBase").val());
    let exponente = Number($("#txtExponente").val());
    let potencia = calcularPotencia(base,exponente);
    $("#pResultado").html("Potencia: " + potencia);
}


function calcularPotencia(base,exponente){
    let potencia = 1;
    for(let i = 1; i <= exponente; i++){
        potencia *= base;
    }
    return potencia;
}