$("#btnVerificar").click(tomarDatos);

function tomarDatos() {
    let matricula = $("#txtMatricula").val();
    let verificacionM = verificarMatricula(matricula);
    let resultado;
    if (verificacionM) {
        resultado = "Matricula correcta";
    } else {
        resultado = "Matricula InCorrecta";
    }
    $("#pResultado").html(resultado);


}
// NUMEROS VAN DEL 48 AL 57
// LETRAS MAYUSCULAS VAN DEL 65 AL 90
function verificarMatricula(matricula) {

    let resultado = false;
    if (matricula.length === 8) {
        if (estaEntre(matricula.charCodeAt(0), 65, 90) && estaEntre(matricula.charCodeAt(1), 65, 90) &&
            estaEntre(matricula.charCodeAt(2), 65, 90) &&
            estaEntre(matricula.charCodeAt(4), 48, 57) && estaEntre(matricula.charCodeAt(5), 48, 57) && 
            estaEntre(matricula.charCodeAt(6), 48, 57) && estaEntre(matricula.charCodeAt(7), 48, 57)
            ||
            estaEntre(matricula.charCodeAt(0), 65, 90) &&
            estaEntre(matricula.charCodeAt(2), 48, 57) && estaEntre(matricula.charCodeAt(3), 48, 57) &&
            estaEntre(matricula.charCodeAt(4), 48, 57) && estaEntre(matricula.charCodeAt(5), 48, 57) &&
            estaEntre(matricula.charCodeAt(6), 48, 57) && estaEntre(matricula.charCodeAt(7), 48, 57)) {
           
                resultado = true;
        }
    }
    return resultado;
}



