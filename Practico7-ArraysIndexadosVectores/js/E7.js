let listaNombres = new Array();

// Parte A
$("#btnRegistrar").click(tomarDatos);

function tomarDatos() {
    let nombre = $("#txtNombre").val();
    listaNombres.push(nombre);
    let resultado = "";
    let contador = 0;
    for (let i = 0; i < listaNombres.length; i++) {
        resultado += listaNombres[i] + "<br>";
        contador++;
    }
    $("#pResultado").html(resultado + "Cantidad de Nombres: " + contador);
}

// Parte B
$("#btnVer").click(obtenerDatos);

function obtenerDatos() {
    let posicion = Number($("#txtPosicion").val());
    let elementoEnPos = "Elemeto en lugar buscado: " + listaNombres[posicion];
    let ultimoElemento = ". Ultimo elemento:" + listaNombres[listaNombres.length - 1];
    $("#pResultado2").html(elementoEnPos + ultimoElemento);
}

// Parte C

$("#btnCambiar").click(conseguirDatos);

function conseguirDatos() {
    let nombreBuscado = $("#txtNombreBuscado").val();
    let nombreNuevo = $("#txtNombreNuevo").val();
    let nombreEncontrado;
    let indiceNombreBuscado;
    let resultado;
    nombreEncontrado = listaNombres.indexOf(nombreBuscado);

    if (nombreEncontrado !== -1) {
        indiceNombreBuscado = listaNombres.indexOf(nombreBuscado);
        listaNombres[indiceNombreBuscado]=nombreNuevo;
        resultado="Nombre cambiado exitosamente";
    }else{
        resultado = "No se encontro nombre buscado."
    }
    $("#pResultado3").html(resultado);
    return resultado;

}