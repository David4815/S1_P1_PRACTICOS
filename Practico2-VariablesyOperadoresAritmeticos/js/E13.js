
// Variables
let contador=0;

// boton
$("#btnContador").click(contar);

// Funcion para aumentar en 1 el contador 
function contar() {

    contador = contador + 1;

    $("#pResultado").html("Contador: " + (contador));

}
