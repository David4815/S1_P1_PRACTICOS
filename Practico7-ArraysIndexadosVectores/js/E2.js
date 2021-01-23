$("#btnIngresarV").click(tomarDatos);
$("#btnMostrarMax").click(buscarMayor);


function tomarDatos(){
    let valor = Number($("#txtValor").val());
    ingresarValor(valor);
}

function buscarMayor(){
    let mayor = Number.MIN_VALUE;
    for(let i=0; i<listaNumeros.length;i++){
        if(listaNumeros[i]>=mayor){
            mayor=listaNumeros[i];
        }
    }
    $("#pResultado").html(mayor);
    listaNumeros = [];
}

let listaNumeros = new Array();
function ingresarValor(valor){
listaNumeros.push(valor);
}
