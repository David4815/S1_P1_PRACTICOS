let num1;
let num2;
let producto = 0;

$("#btnMostrar").click(calcular);

function calcular() {

    num1 = Number($("#txtNumero1").val());
    num2 = Number($("#txtNumero2").val());
    if(num1 <0 && num2 < 0){
        num1 = Math.abs(num1);
        num2 = Math.abs(num2);
    }
    if(num1 <num2){
        for (let i = 0; i < num2; i++) {
            producto = producto + num1;
        }
    }else {
        for (let i = 0; i < num1; i++) {
            producto = producto + num2;
        }
    }
    
    $("#pResultado").html("El producto es: " + producto);
    producto=0;

}