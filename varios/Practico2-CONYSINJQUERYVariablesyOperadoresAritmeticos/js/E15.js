let acumulado = 0;

$("#btnAcumular").click(acumular);
$("#btnMostrar").click(mostrar);

function acumular() {
    
    acumulado = acumulado + Number($("#txtValor").val());
}

function mostrar() {

    $("#pResultado").html(acumulado);
}
// let contador = 0;

// function acumular() {

//     contador = contador + parseInt(document.getElementById("txtValor").value);

// }

// function mostrar() {

//     document.getElementById("resultado").innerHTML = contador;

// }