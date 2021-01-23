
// Variables
let lado;
let area;

// boton
$("#btnArea").click(calcularArea);

// funcion para calcular are de un cuadrado
function calcularArea() {

    lado = Number($("#txtLado").val());
    area = lado * lado;

    $("#pArea").html("El area es: " + (area));

}