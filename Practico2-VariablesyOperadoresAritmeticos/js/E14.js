// Variables
let contador=0;

// boton
$("#btnIncrementar").click(contar);

// Funcion para aumentar en 3 el contador
function contar() {

    contador = contador + 3;

    $("#pResultado").html("Contador: " + (contador));

}
