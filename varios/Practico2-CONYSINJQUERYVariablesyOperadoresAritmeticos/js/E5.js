
// Variables
let lado;
let area;

// boton
$("#btnArea").click(calcularArea);

// funcion
function calcularArea() {

    lado = Number($("#txtLado").val());
    area = lado * lado;

    $("#pArea").html(area);

}

// function CalcularArea() {

//     let a = document.getElementById("txtLado").value;
//     let AreaCuadrado = "El area es: " + parseInt(a) * parseInt(a);

//     document.getElementById("Area").innerHTML = AreaCuadrado;

// }

// function CalcularAreaCA(v1) {

//     let lado = parseInt(v1.value);

//     let Varea = "El Area del cuadrado es: " + (lado * lado);

//     document.getElementById("area").innerHTML = Varea;

// }