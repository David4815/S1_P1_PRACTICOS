let num;
let resultado = "";

$("#btnCalcular").click(calcular);

function calcular() {
    num = Number($("#txtNumero").val());

    if (num >= 30 && num <= 200) {

        for (let i = 30; i <= 200; i++) {

            if (i % 2 === 0 && i % num ===0) {
                resultado = resultado + " " + i;
            }
        }
    }else{
        resultado= "Ingrese un numero entre 30 y 200."
    }
    $("#pResultado").html(resultado);
    resultado="";
}

