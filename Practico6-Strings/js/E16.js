$("#btnVerificar").click(tomarDatos);

function tomarDatos() {
    let cedula = $("#txtCedula").val();
    let cedulaSinGuion = eliminarCaracteres(cedula,"-");
    let verificacion = verificarCedula(cedulaSinGuion);
    
    let resultado;
    if (verificacion) {
        resultado = "Cedula valida.";
    } else {
        resultado = "Cedula Invalida.";
    }
    $("#pResultado").html(resultado);
}

function verificarCedula(cedula) {
    if(cedula.length===7){
        cedula= "0" + cedula; 
    }
    let suma = 0;
    let constante = "2987634";
    let resultado = false;
    let digitoVerficador = cedula.charAt(cedula.length - 1);
    for (let i = 0; i <= cedula.length -1; i++) {
        suma += Number(cedula.charAt(i)) * Number(constante.charAt(i));
    }
    if ((Number(suma) + Number(digitoVerficador)) % 10 === 0) {
        resultado = true
    }
    return resultado;
}


