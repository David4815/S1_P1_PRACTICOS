
let contador=0;

$("#btnContador").click(contar);

function contar() {

    contador = contador + 1;

    $("#pResultado").html(contador);

}

// let cont = 0;

// function contar() {

//     cont++;

//     document.getElementById("resultado").innerHTML = cont;

// }

// // Funcion con if

// function contador() {

//     if (isNaN((parseInt(document.getElementById("resultado").innerText)))) {

//         document.getElementById("resultado").innerHTML = 1;

//     }
//     else {

//         let a = parseInt(document.getElementById("resultado").innerText);
//         a = a + 1;

//         document.getElementById("resultado").innerHTML = a;

//     }

// }



