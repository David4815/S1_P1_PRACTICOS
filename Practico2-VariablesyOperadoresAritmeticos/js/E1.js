// variables
let nombre;
let apellido;
let concatenado;

// boton
$("#btnFormatear").click(formatear)

// funcion para formatear "Apellido,Nombre"
function formatear() {

    nombre = $("#txtNombre").val();
    apellido = $("#txtApellido").val();
    concatenar = apellido + "," + nombre;

    $("#resultado").html("Texto concatenado: " + (concatenar));

}