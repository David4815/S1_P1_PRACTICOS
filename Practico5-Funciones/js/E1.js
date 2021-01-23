$("#btnCalcular").click(tomarDatos);

function tomarDatos() {
    let num1 = Number($("#txtNumero1").val());
    let num2 = Number($("#txtNumero2").val());
    let numerosPares = calcular(num1,num2);
    
    $("#pResultado").html(numerosPares);
}



function calcular(n1, n2) {
    let contador = 0;
    if (n1 < n2) {
        for (let i = n1; i <= n2; i++) {
            if (i % 2 === 0) {
                contador++;
            }
        }
    } else {
        for (let i = n2; i <= n1; i++) {

            if (i % 2 === 0) {
                contador++;
            }
        }
    }
    return contador;
}




