// variables
let ganados;
let empatados;
let puntos;

// boton
$("#btnPuntos").click(calcularPuntos);

// funcion
function calcularPuntos(){
   ganados = Number($("#txtGanados").val());
   empatados = Number($("#txtEmpatados").val());

   puntos = ganados * 3 + empatados;

   $("#pResultado").html(puntos);
}
// function calcularPuntos(ganados,empatados){

//    let puntos; 
   
//    puntos = (parseInt(ganados.value) * 3) + parseInt(empatados.value) 

//    document.getElementById("resultado").innerHTML = puntos;
   

// }