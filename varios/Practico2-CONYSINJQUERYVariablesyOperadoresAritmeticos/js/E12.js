let masa;
let altura;
let IMC;

$("#btnIMC").click(calcularIMC);

function calcularIMC(){

    masa = Number($("#txtMasa").val());
    altura = Number($("#txtAltura").val());
    IMC = masa / ( altura * altura );

    $("#pResultado").html(IMC);

}

// function prueba(masa,altura){

//     let IMC = (parseInt(masa.value)) / Math.pow((parseInt(altura.value)),2);
//     alert(IMC);

// document.getElementById("resultado").innerHTML = IMC;

// }