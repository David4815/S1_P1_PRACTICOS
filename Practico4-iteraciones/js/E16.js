let num1;
let num2;
let mayor;
let menor;
let salir = true;
let resultado;

$("#btnCalcular").click(calcular);

function calcular() {
    num1 = Number($("#txtNumero1").val());
    num2 = Number($("#txtNumero2").val());

    if (num1 >= num2) {
        mayor = num1;
        menor = num2;
    } else {
        mayor = num2;
        menor = num1;
    }

    do {
        
        if (menor % 4 === 0 && menor % 6 === 0) {
            salir = false;
            resultado = menor + " es multiplo de 4 y de 6";
        }
         if(menor === mayor && menor % 4 != 0 && menor % 6 != 0){
            resultado = "No hay multiplos de 4 y 6 entre estos dos numeros";
            salir=false;
        }
        menor++;
    } while (salir);
    salir = true;

    $("#pResultado").html(resultado);
}