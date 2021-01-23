
let valor1;
let valor2;
let suma;

$("#btnSuma").click(sumar);

function sumar() {

    valor1 = Number($("#txtValor1").val());
    valor2 = Number($("#txtValor2").val());
    suma = valor1 + valor2;

    $("#pResultado").html(suma);
}

// function SumarCA(v1, v2) {
//     let c = "La suma es: " + (parseInt(v1.value) + parseInt(v2.value));
//     document.getElementById("Resultado").innerHTML = c;
// }

// function Sumar() {

//     let a = document.getElementById("txtValor1").value;
//     let b = document.getElementById("txtValor2").value;
//     let c = parseInt(a) + parseInt(b);

//     document.getElementById("demo").innerHTML = c;
// }