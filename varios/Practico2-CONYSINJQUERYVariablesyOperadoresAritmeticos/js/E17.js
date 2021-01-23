// variables
let chirridos;
let temperaturaC;
let temperaturaF;
let temperaturaD;

// boton
$("#btnCalcular").click(calcularTemperatura);

// funcion
function calcularTemperatura() {

    chirridos = Number($("#txtChirridos").val());

    temperaturaF = 50 + ((chirridos - 40) / 4);
    temperaturaC = (temperaturaF - 32) / 1.8;
    temperaturaD = 10 + ((chirridos - 40) / 7);

    $("#pResultadoF").html(temperaturaF);   
    $("#pResultadoC").html(temperaturaC);
    $("#pResultadoD").html(temperaturaD);
}
// function calcularTemperatura(chirridos) {

//     let chi = parseInt(chirridos.value);
//     let temperaturaF
//     let temperaturaC;
//     let temperaturaD;

//     temperaturaF = 50 + ((chi - 40) / 4);

//     temperaturaC = (temperaturaF - 32) / 1.8;

//     temperaturaD = 10 + ((chi - 40) / 7);


//     document.getElementById("resultadoF").innerHTML = "Temperatura en Fahrenheit: " + temperaturaF;
//     document.getElementById("resultadoC").innerHTML = "Temperatura en Celcuis: " + temperaturaC;
//     document.getElementById("resultadoD").innerHTML = "Temperatura en celcius CD: " + temperaturaD;
// }