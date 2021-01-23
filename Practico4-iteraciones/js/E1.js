let numeros = "";

$("#btnMostrar").click(mostrar);

function mostrar(){

    for( let i = 1; i <= 1000; i++){
        numeros = numeros + i + "<br>"; 
    }
    $("#pResultado").html(numeros);
}