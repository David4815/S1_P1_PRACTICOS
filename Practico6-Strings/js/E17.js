$("#btnVerificar").click(tomarDatos);

function tomarDatos() {
    let numeroTarjeta = $("#txtNumero").val();
    let verificacion = verificarTarjeta(numeroTarjeta);
    let resultado;
    if (verificacion) {
        resultado = "Tarjeta Valida.";
    } else {
        resultado = "Tarjeta Invalida.";
    }
    $("#pResultado").html(resultado);

}

function verificarTarjeta(numero) {
    let numeroInvertido;
    let aux;
    let suma = 0;
    let producto;
    resultado = false;
    digitoVerificador = numero.charAt(numero.length - 1)
    // INVERTIR NUMEROcon funcio auxiliar
    numeroInvertido = invertirTexto(numero);


    for (let i = 1; i <= numeroInvertido.length - 1; i++) {
        if (i % 2 !== 0) {
            aux = (numeroInvertido.charAt(i) * 2).toString();
            if (aux > 10) {
                aux = Number(aux.charAt(0)) + Number(aux.charAt(1));
                suma += aux;
            } else {
                suma += Number(aux);
            }
        } else {
            suma += Number(numeroInvertido.charAt(i));
        }
    }
    producto = (suma * 9).toString();

    if (digitoVerificador === producto.charAt(producto.length - 1)) {
        resultado = true;
    }

    return resultado;
}

