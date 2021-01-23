$("#btnIngresarN").click(tomarDatos);
$("#btnMostrarProm").click(mostrarPromedio);

let listaNumeros = new Array();
function tomarDatos(){
    let numero = Number($("#txtNumero").val());
    listaNumeros.push(numero);
}

function mostrarPromedio(){
    let suma = 0;
    let promedio;
    for(let i=0; i<listaNumeros.length;i++){
      suma += listaNumeros[i];
    }
    promedio = suma / listaNumeros.length;
    $("#pResultado").html(promedio);
    listaPalabras = [];
}