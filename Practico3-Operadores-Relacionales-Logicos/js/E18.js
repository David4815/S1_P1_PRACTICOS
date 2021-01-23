let num;
let acumulado = 0;
let contador = 0;
let resultado;


$("#btnSumar").click(sumar);

function sumar() {
    
    contador++;
    num = Math.abs(Number($("#txtNumero").val()));
    acumulado = acumulado + num; 
    
    $("#pContador").html("Numeros acumulados: " + contador);

    if (contador === 6) {
        resultado = "Resultado de la suma: " + acumulado;
    acumulado = 0;
    contador = 0;
    }else {
        resultado = "";
    }

    $("#pResultado").html(resultado);

}


// PRIMERA VERSION
// function sumar() {
    
//     contador++;
//     num = Math.abs(Number($("#txtNumero").val()));
//     acumulado = acumulado + num; 
    
//     if (contador < 6) {
//         $("#pContador").html("Numeros acumulados: " + contador);
//     } else {
//         $("#pContador").html("Numeros acumulados: " + contador);
//         contador = 0;
//         $("#pResultado").html("Resultado de la suma: " + acumulado);
//         acumulado = 0;
//     }
// }

