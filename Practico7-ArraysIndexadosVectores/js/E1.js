$("#btnContarLetras").click(tomarDatos);
function tomarDatos(){
}

function contarLetras(array){
 let listaLargos = new Array();
for(let i=0; i < array.length; i++){
    listaLargos.push(array[i].length);
}
return listaLargos;
}
