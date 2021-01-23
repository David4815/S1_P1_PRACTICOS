let listaPersonas = new Array();
let idGlobal = 0;
class Persona {
    constructor(unNombre, unApellido) {
        this.nombre = unNombre;
        this.apellido = unApellido;
        this.id = idGlobal++;
    }
}

$("#btnGuardar").click(registrarPersona);

function registrarPersona() {
    let nombre = $("#txtNombre").val();
    let apellido = $("#txtApellido").val();
    // IMPORTANTE VACIAR SPAN CON ERRORES y EXITO 
    $(".error").html("");
    $(".exito").html("");

    if (esVacio(nombre)) {
        // mostrarMensajeEnCampoSiguiete("Campo vacio, ingrese un nombre", "error", "txtNombre");
        mostrarMensajeEnCampoSiguieteAutomatico("Campo vacio, ingrese un nombre", "error", "txtNombre");
    }
    if (esVacio(apellido)) {
        // mostrarMensajeEnCampoSiguiete("Campo vacio, ingrese un apellido", "error", "txtApellido");
        mostrarMensajeEnCampoSiguieteAutomatico("Campo vacio, ingrese un apellido", "error", "txtApellido");
    }
    if (!esVacio(nombre) && !esVacio(apellido)) {

        let nuevaPersona = new Persona(nombre, apellido);
        listaPersonas.push(nuevaPersona);
        $(".error").hide();
        // mostrarMensajeExitosoEnCampoSiguiente("Persona ingresada con exito", "exito", "btnGuardar");
        mostrarMensajeEnCampoSiguieteAutomatico("Persona ingresada con exito", "exito", "btnGuardar");
    }

}

// $(".mostrar").click(mostrar);
// function mostrar() {
//     $(this).next().html("despues");
//     $(this).prev().html("Antes");
// }


function generarTablaDePersonas() {

}




