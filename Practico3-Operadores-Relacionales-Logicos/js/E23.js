let nota = 0;
let acumulador = 0;
let contador = 0;
let resultado;
let promedio;
let maximo = 0;
let minimo = 100;


let notaBuena = 0;
let notaSalvo = 0;
let notaPerdio = 0;
let salvaron = 0;


$("#btnCalcular").click(calcular);

function calcular() {
    contador++;
    nota = Number($("#txtNota").val());
    acumulador = acumulador + nota;


    // Resultado
    if (nota > 90) {
        notaBuena++;
        // resultado = "Salvo con muy buena nota.";
        
    } else if (nota >= 70 && nota <= 90) {
        notaSalvo++;
        // resultado = "Salvo.";
        
    } else if (nota < 70) {
        notaPerdio++;
        // resultado = "Perdio.";
        
    }
    // Maximo
    if (nota > maximo) {
        maximo = nota;
    }
    // Minimo
    if (nota < minimo) {
        minimo = nota;
    }
    // Promedio
    promedio = acumulador / contador;

    $("#pResultado").html("Perdieron: " + notaPerdio + "<br> Salvaron: " + (notaBuena + notaSalvo) + "<br> Salvaron con buena nota: " + notaBuena +
    "<br> Promedio de notas: " + promedio + "<br> Nota minima: " + minimo + "<br> Nota maxima: " + maximo) ;
}