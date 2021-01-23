let contador=0;

$("#btnIncrementar").click(contar);

function contar() {

    contador = contador + 3;

    $("#pResultado").html(contador);

}




// function incremetar3(){

//     if(isNaN(parseInt(document.getElementById("resultado").innerText))){
//         document.getElementById("resultado").innerHTML = 3;
//     }else{
        
//         let contador = parseInt(document.getElementById("resultado").innerText);
//         contador = contador + 3;
//         document.getElementById("resultado").innerHTML = contador;

//     }

// }