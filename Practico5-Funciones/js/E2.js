
$("#btnEvaluar").click(tomarDatos);

function tomarDatos(){
    let edad = Number($("#txtEdad").val());
    let tope = Number($("#txtTope").val());
    let siEsMayor = esMayor(edad,tope);
    let resultado;

    if(siEsMayor){
        resultado = "Es mayor";
    }else {
        resultado = "No es mayor"
    }
    $("#pResultado").html(resultado);
}
function esMayor(edad, tope){

if(edad> tope){
    return true;
}else {
    return false;
}

}