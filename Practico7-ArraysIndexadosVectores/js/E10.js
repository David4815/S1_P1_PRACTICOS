
$("#btnProbar").click(probarFuncion);

let lista = [1,1,2,9,3,3,1,2,3,1,2,3,4,6,6];

function listaSinRepetidos(lista){
    let nuevaLista = [];
    for(i=0;i<lista.length;i++){
        if(nuevaLista.indexOf(lista[i])===-1){
            nuevaLista.push(lista[i]);
        }
    }
    $("#pResultado").html(nuevaLista);
}

function probarFuncion(){
   $("#pResultado").html(listaSinRepetidos(lista));
}


