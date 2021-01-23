$("#btnIngresarP").click(tomarDatos);
$("#btnMostrar").click(mostrarPalabras);

let listaPalabras = new Array();
function tomarDatos(){
    let palabra = $("#txtPalabra").val();
    listaPalabras.push(palabra);
}

function mostrarPalabras(){
    let resultado ="";
    for(let i=0; i<listaPalabras.length;i++){
       resultado+= listaPalabras[i] + " ";
    }
    $("#pResultado").html(resultado);
    listaPalabras = [];
}