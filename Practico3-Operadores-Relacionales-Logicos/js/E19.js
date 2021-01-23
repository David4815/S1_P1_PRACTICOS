let num;
let acumuladoM5 = 0;
let acumuladoM20 = 0;
let acumuladoM5yM20 = 0;
let contador = 0;


$("#btnCalcular").click(calcular);

function calcular() {

    contador = contador + 1;
    num = Number($("#txtNumero").val());
    

    if (num > 20 && num % 5 === 0) {
        acumuladoM5yM20 = acumuladoM5yM20 + 1;
    } 
    if (num > 20) {
        acumuladoM20 = acumuladoM20 + 1;
    } 
    if(num % 5 == 0) {
        acumuladoM5 = acumuladoM5 + 1;
    } 

    if (contador < 5) {
        $("#pResultado").html("");
        $("#pContador").html("Numeros acumulados: " + contador);
    } else {

        $("#pContador").html("Numeros acumulados: " + contador);
        contador = 0;
        $("#pResultado").html(acumuladoM20 + " (> a 20) - " + acumuladoM5 + " (multiplos de 5) - "
            + acumuladoM5yM20 + " (> a 20 y M5)");
            
            acumuladoM5 = 0;
            acumuladoM20 = 0;
            acumuladoM5yM20 = 0;
            
    }
}