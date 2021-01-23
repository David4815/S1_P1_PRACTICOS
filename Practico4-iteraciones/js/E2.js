let numeros = "";

$("#btnMostrar").click(mostrar);

function mostrar(){

    for( let i = -100; i <= 10; i++){
        numeros = numeros + i + "<br>"; 
    }
    $("#pResultado").html(numeros);
}