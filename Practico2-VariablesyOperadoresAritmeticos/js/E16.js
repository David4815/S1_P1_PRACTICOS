// variables
let ganados;
let empatados;
let puntos;

// boton
$("#btnPuntos").click(calcularPuntos);

// funcion para calcular puntos
function calcularPuntos(){
   ganados = Number($("#txtGanados").val());
   empatados = Number($("#txtEmpatados").val());

   puntos = ganados * 3 + empatados;

   $("#pResultado").html("Puntos totales: " + (puntos));
}
