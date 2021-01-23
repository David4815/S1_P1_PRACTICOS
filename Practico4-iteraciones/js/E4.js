let numeros = "";

$("#btnMostrar").click(mostrar);

function mostrar(){

    for(let i = 20; i >= -30; i--){
        numeros = numeros + i + "<br>"; 
        
    }
    $("#pResultado").html(numeros);
}