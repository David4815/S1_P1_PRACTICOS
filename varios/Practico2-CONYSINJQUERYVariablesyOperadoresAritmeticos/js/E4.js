// Variables

let valor1;
let valor2;
let suma;
let proucto;

// boton
$("#btnCalcular").click(calcular);

// funcion
function calcular(){

valor1 = Number($("#txtValor1").val());
valor2 = Number($("#txtValor2").val());

suma = valor1 + valor2;
producto = valor1 * valor2;

$("#pSuma").html(suma);
$("#pProducto").html(producto);

}









// function SumyProdCA(v1, v2) {
//     let Vsuma = "La suma es: " + (parseInt(v1.value) + parseInt(v2.value));
//     let Vproducto = "El producto es: " + (parseInt(v1.value) * parseInt(v2.value));

//     document.getElementById("suma").innerHTML = Vsuma;

//     document.getElementById("producto").innerHTML = Vproducto;
// }

// function SumyProd() {

//     let a = document.getElementById("txtValor1").value;
//     let b = document.getElementById("txtValor2").value;
//     let suma = "La suma es: " + (parseInt(a) + parseInt(b));
//     let producto = "El Producto es: " + (parseInt(a) * parseInt(b));

//     document.getElementById("producto").innerHTML = producto;
//     document.getElementById("suma").innerHTML = suma;
// }