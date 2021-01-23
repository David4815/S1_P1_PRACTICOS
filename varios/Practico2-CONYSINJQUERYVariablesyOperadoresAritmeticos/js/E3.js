// Variables

let valor1;
let valor2;
let valor3;
let suma;

$("#btnSuma").click(sumar);

function sumar(){

valor1 = Number($("#txtValor1").val());
valor2 = Number($("#txtValor2").val());
valor3 = Number($("#txtValor3").val());
suma = valor1 + valor2 + valor3;

$("#pResultado").html(suma);
}

// function SumarCA(v1, v2, v3) {
//     let c = "La suma es: " + (parseInt(v1.value) + parseInt(v2.value) + parseInt(v3.value));
//     document.getElementById("Resultado").innerHTML = c;
// }

// function Sumar() {

//     let a = document.getElementById("txtValor1").value;
//     let b = document.getElementById("txtValor2").value;
//     let c = document.getElementById("txtValor3").value;
//     let d = parseInt(a) + parseInt(b) + parseInt(c);

//     document.getElementById("demo").innerHTML = d;
// }