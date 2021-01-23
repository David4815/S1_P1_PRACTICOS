$("#btnVerificar").click(tomarDatos);

function tomarDatos() {
    texto = $("#txtTexto").val();
    texto2 = $("#txtTexto2").val();
    subcadena = verificarSubcadena(texto, texto2);
    if(subcadena !== -1){
        resultado = "Si es subcadena"
    }else{
        resultado = "No es Subcadena"
    }
    $("#pResultado").html(resultado);
}

function verificarSubcadena(texto, texto2) {
    let resultado = texto.indexOf(texto2);   
return resultado;
}
// let contador = 0;
    // let diferencia = (texto.length  - texto2.length) - 1;
    
    // let subcadena = false;
    // for (let i = 0; i <= diferencia - 1; i++) {
    //     for (let j = i; j <= texto2.length - 1; j++) {
    //         if (texto.charAt(j) === texto2.charAt(j)) {
    //             contador++;
    //             if (contador === texto2.length) {
    //                 subcadena = true;
    //                 break;
    //             }
    //         }
    //     }
    // }