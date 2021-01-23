
let nombre;
let apellido;
let concatenado;

$("#btnFormatear").click(formatear)

function formatear() {

    nombre = $("#txtNombre").val();
    apellido = $("#txtApellido").val();
    concatenar = apellido + "," + nombre;

    $("#resultado").html(concatenar);

}

// function ConcatenarCA(v1, v2) {

//     let c = v2.value + "," + v1.value;

//     document.getElementById("Resultado").innerHTML = c;
// }

// function Concatenar() {

//     let a = document.getElementById("txtNombre").value;
//     let b = document.getElementById("txtApellido").value;
//     let c = b + "," + a

//     document.getElementById("Resultado").innerHTML = c;
// }


