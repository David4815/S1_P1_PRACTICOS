// TENIENDO EN CUENTA REPETICIONES
$("#btnRegistrar").click(tomarDatos);

let listaAlias = new Array();


function tomarDatos(){
    let alias = $("#txtAlias").val();
    let resultado = new Array();
    let contador=0;
    for(let i=0;i<listaAlias.length;i++){
        if(listaAlias[i]===alias){
            contador++;
        }
    }
    if(contador!==0){
        resultado = ["El alias seleccionado ya esta en uso."]
    }else{
        listaAlias.push(alias);
        resultado = listaAlias ;
    }
    
    $("#pResultado").html(resultado);
}

// NO TOMA EN CUENTA REPETICIONES

// $("#btnRegistrar").click(tomarDatos);

// let listaAlias = new Array();
// function tomarDatos(){
//     let alias = $("#txtAlias").val();
//     listaAlias.push(alias);
//     $("#pResultado").html(listaAlias);
// }